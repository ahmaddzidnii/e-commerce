import jwt from "jsonwebtoken";

const verifyJWT = async (req, res, next) => {
  const authHeader = req.headers["authorization"];
  if (!authHeader) {
    return res.status(401).json({ message: "Unauthorized" });
  }
  const token = authHeader.split(" ")[1];
  if (!token) {
    return res.status(401).json({ message: "Unauthorized" });
  }

  jwt.verify(token, process.env.ACCESS_TOKEN_SECRET, (err, decoded) => {
    if (err) {
      console.log(err.message);
      return res.status(403).json({ message: "Forbidden" });
    }
    req.user = decoded.user;
    next();
  });
};

export { verifyJWT };
