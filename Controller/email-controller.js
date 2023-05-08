import emailjs from "@emailjs/nodejs";
import emailValidator from "deep-email-validator";
import dotenv from "dotenv";
dotenv.config();
async function isEmailValid(email) {
  return emailValidator.validate(email);
}
export const sendEmail = async (req, res) => {
  try {
    let name = req.body.name;
    let email = req.body.email;
    let message = req.body.message;

    const { valid, reason, validators } = await isEmailValid(email);
    let form = {
      name,
      email,
      message,
    };

    if (valid) {
      const response = await emailjs.send(
        process.env.Email_Js_Service_key,
        process.env.Email_Js_TemplateKey,
        form,
        {
          publicKey: process.env.Email_Js_Public_key,
          privateKey: process.env.Email_Js_Private_Key,
        }
      );
      return res.status(200).json(response.status);
    }
    return res.status(400).send({
      message: "Please provide a valid email address.",
      reason: validators[reason].reason,
    });
  } catch (e) {
    console.error(e);
  }
};
