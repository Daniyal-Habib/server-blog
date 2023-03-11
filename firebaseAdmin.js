import Admin from "firebase-admin";
import service_account from "./ServiceAccount.json" assert { type: "json" };

Admin.initializeApp({
  credential: Admin.credential.cert(service_account),
});

export default Admin;
