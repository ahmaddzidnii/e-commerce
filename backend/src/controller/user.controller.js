import { db } from "../../lib/db.js";
import userService from "../service/user-service.js";
import { google } from "googleapis";
import jwt from "jsonwebtoken";

const register = async (req, res, next) => {
  try {
    const data = await userService.register(req.body);
    res.cookie("refresh_token", data.refresh_token, { httpOnly: true, maxAge: 60 * 60 * 24 * 1000 });
    res.status(201).json({ accses_token: data.access_token });
  } catch (error) {
    console.log(error);
    next(error);
  }
};

const login = async (req, res, next) => {
  try {
    const data = await userService.login(req.body);
    res.cookie("refresh_token", data.refresh_token, { httpOnly: true, maxAge: 60 * 60 * 24 * 1000 });
    return res.status(200).json({ accses_token: data.access_token });
  } catch (error) {
    console.log(error);
    next(error);
  }
};

const logout = async (req, res, next) => {
  try {
    const cookies = req.cookies;
    const refresh_token = cookies?.refresh_token;
    if (!refresh_token) {
      res.status(401).json({ message: "Unauthorized" });
    }

    const user = await db.user.findMany({
      where: {
        refresh_token,
      },
    });

    if (!user[0]) return res.sendStatus(204);

    await db.user.update({
      where: {
        id: user[0].id,
      },
      data: {
        refresh_token: null,
        access_token: null,
      },
    });

    res.clearCookie("refresh_token");
    return res.status(200).json({ message: "Berhasil Logout!" }).end();
  } catch (error) {
    console.log(error);
    next(error);
  }
};

const loginWithGoogle = async (req, res) => {
  const oauth2Client = new google.auth.OAuth2(process.env.GOOGLE_CLIENT_ID, process.env.GOOGLE_CLIENT_SECRET, "http://localhost:2000/auth/google/callback");

  const scope = ["https://www.googleapis.com/auth/userinfo.email", "https://www.googleapis.com/auth/userinfo.profile"];

  const authorizationUrl = oauth2Client.generateAuthUrl({
    access_type: "offline",
    scope: scope,
    include_granted_scopes: true,
  });

  res.redirect(authorizationUrl);
};

const callbackLoginGoogle = async (req, res) => {
  const oauth2Client = new google.auth.OAuth2(process.env.GOOGLE_CLIENT_ID, process.env.GOOGLE_CLIENT_SECRET, "http://localhost:2000/auth/google/callback");
  const { code } = req.query;
  const { tokens } = await oauth2Client.getToken(code);

  oauth2Client.setCredentials(tokens);

  const oAuth2 = google.oauth2({
    auth: oauth2Client,
    version: "v2",
  });

  const { data } = await oAuth2.userinfo.get();
  if (!data) {
    res.status(401).json({ message: "Unauthorized" });
  }

  let user = await db.user.findUnique({
    where: {
      email: data.email,
    },
  });

  if (!user) {
    user = await db.user.create({
      data: {
        username: data.name,
        email: data.email,
        access_token: null,
        refresh_token: null,
      },
    });
  }
  const ACCESS_TOKEN_SECRET = process.env.ACCESS_TOKEN_SECRET;
  const REFRESH_TOKEN_SECRET = process.env.REFRESH_TOKEN_SECRET;

  const access_token = jwt.sign({ id: user.id, username: user.username, email: user.email }, ACCESS_TOKEN_SECRET, { expiresIn: "30s" });
  const refresh_token = jwt.sign({ id: user.id, username: user.username, email: user.email }, REFRESH_TOKEN_SECRET, { expiresIn: "1d" });
  user = await db.user.update({
    where: {
      id: user.id,
    },
    data: {
      access_token: access_token,
      refresh_token: refresh_token,
    },
  });
  res.cookie("refresh_token", user.refresh_token, { httpOnly: true, maxAge: 60 * 60 * 24 * 1000 });
  return res.json({ access_token: user.access_token });
};

export default {
  register,
  login,
  logout,
  loginWithGoogle,
  callbackLoginGoogle,
};
