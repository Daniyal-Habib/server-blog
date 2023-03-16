import Admin from "firebase-admin";
// import service_account from "./ServiceAccount.json" assert { type: "json" };
import dotenv from "dotenv";
const service_account = process.env.GOOGLE_APPLICATION_CREDENTIALS_JSON;
dotenv.config();
Admin.initializeApp({
  credential: Admin.credential.cert({
    // type: process.env.service_account,
    // project_id: process.env.project_id,
    // private_key_id: process.env.private_key_id,
    // private_key: process.env.private_key,
    // client_email: process.env.client_email,
    // client_id: process.env.client_id,
    // auth_uri: process.env.auth_uri,
    // token_uri: process.env.token_uri,
    // auth_provider_x509_cert_url: process.env.auth_provider_x509_cert_url,
    // client_x509_cert_url: process.env.client_x509_cert_url,
    service_account,
  }),
});

export default Admin;
