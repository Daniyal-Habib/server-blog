import emailjs from "@emailjs/nodejs";
import emailValidator from "deep-email-validator";
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
        "service_65f7gtk",
        "template_srlradf",
        form,
        {
          publicKey: "7OJNnLHeiz7yvdsPZ",
          privateKey: "w2OS0jmwakGLIF3KKOyTK",
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
