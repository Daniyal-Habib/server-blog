import Admin from "firebase-admin";
// import service_account from "./ServiceAccount.json" assert { type: "json" };
import dotenv from "dotenv";
const service_account = process.env.GOOGLE_APPLICATION_CREDENTIALS_JSON;
dotenv.config();
Admin.initializeApp({
  credential: Admin.credential.cert(
    JSON.parse(process.env.GOOGLE_APPLICATION_CREDENTIALS_JSON)
  ),
});

export default Admin;
