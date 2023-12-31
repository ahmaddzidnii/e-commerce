import { db } from "../../lib/db.js";
import jwt from "jsonwebtoken";

const refreshTokenController = async (req, res) => {
  const cookies = req.cookies;
  if (!cookies?.refresh_token) {
    return res.status(401).json({ message: "Unauthorized" });
  }
  // console.log({ refresh_token: cookies.refresh_token });

  const refreshToken = cookies.refresh_token;

  const [foundUser] = await db.user.findMany({
    where: {
      refresh_token: refreshToken,
    },
  });
  if (!foundUser) {
    return res.sendStatus(403);
  }

  jwt.verify(refreshToken, process.env.REFRESH_TOKEN_SECRET, (err, decoded) => {
    console.log(decoded);
    if (err || foundUser.username !== decoded.username) {
      console.log(err?.message);
      return res.sendStatus(403);
    }
    const payload = {
      id: decoded.id,
      username: decoded.username,
      email: decoded.email,
      profile_image: decoded.profile_image,
    };

    const accsessToken = jwt.sign(payload, process.env.ACCESS_TOKEN_SECRET, { expiresIn: "30s" });
    res.status(200).json({ access_token: accsessToken });
  });
};
export { refreshTokenController };
