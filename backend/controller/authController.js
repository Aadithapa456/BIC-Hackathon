const Users = require("../model/user");
const bcrypt = require("bcrypt");

const handleLogin = async (req, res) => {
  try {
    const { email, password } = req.body;
    if (!email || !password)
      return res
        .status(400)
        .json({ message: "email and password are required" });
    const foundUser = await Users.findOne({ email });

    if (!foundUser)
      return res.status(404).json({ message: "Incorrect email or password" });

    const match = await bcrypt.compare(password, foundUser.password);

    if (!match) return res.status(401).json({ message: "Incorrect password" });

    const formattedNewUser = {
      _id: foundUser._id,
      username: foundUser.username,
      role: foundUser.role,
      email: foundUser.email,
      number: foundUser.number,
      country: foundUser.country,
      region: foundUser.region,
      city: foundUser.city,
      address: foundUser.address,
    };
    res.status(200).json({
      message: "Login successful",
      user: formattedNewUser,
    });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

module.exports = handleLogin;
