import User from "../Model/User.js";

export const createUser = async (req, res) => {
  try {
    const { userId, userName, email, emailisVerified, bio } = req.body;
    const user = {
      userId,
      userName,
      email,
      emailisVerified,
      bio,
    };
    const newUser = new User(user);
    await newUser.save();
    return res.status(200).json({
      msg: "user added successfully!",
      user: res.data,
    });
  } catch (e) {
    res.status(400).json("Failure to create User :(");
  }
};
