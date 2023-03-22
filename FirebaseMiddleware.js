import Admin from "./firebaseAdmin.js";
import dotenv from "dotenv";
dotenv.config();
export const verifyToken = async (req, res, next) => {
  try {
    let token = req.body.idToken;
    const adminId = process.env.AdminId;
    const secondAdmin = process.env.AdminId2;
    let decodedToken = await Admin.auth().verifyIdToken(token);
    if (decodedToken.uid === adminId || decodedToken.uid === secondAdmin) {
      res.status(200).json(true);
    } else {
      res.status(200).json(false);
    }
  } catch (e) {
    res.status(401).json(false);
  }
};
