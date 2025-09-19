import jwt from "jsonwebtoken";

export const generateToken = (userId, res) => {
  const token = jwt.sign({ userId }, process.env.JWT_SECRET, {
    expiresIn: "7d",
  });

  res.cookie("jwt", token, {
    maxAge: 7 * 24 * 60 * 60 * 1000, // Milliseconds (7 days)
    httpOnly: true, // prevent XSS attacks cross-site scripting attacks
    sameSite: "strict", // CSRF attacks cross-site request forgery attacks

    // // In development, allow cookies to be sent over HTTP (secure: false).
    // In production, ensure cookies are only sent over HTTPS (secure: true) for security.
    secure: process.env.NODE_ENV !== "development",
  });

  return token;
};
