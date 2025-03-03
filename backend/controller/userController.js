const User = require("../model/user");
const bcrypt = require("bcrypt");
const ROLES_LIST = require("../config/rolesList");

const getAllUsers = async (req, res) => {
  try {
    const foundUsers = await User.find();
    const formattedUsers = foundUsers.map((user) => ({
      _id: user._id,
      username: user.username,
      role: user.role,
      email: user.email,
      number: user.number,
      country: user.country,
      region: user.region,
      city: user.city,
      address: user.address,
      upVote: user.upVote,
      downVote: user.downVote,
      totalPost: user.totalPost,
    }));
    res.status(200).json({ message: "successful", users: formattedUsers });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

const createUser = async (req, res) => {
  try {
    const {
      username,
      password,
      email,
      number,
      role,
      country,
      region,
      city,
      address,
    } = req.body;
    if (
      !username ||
      !password ||
      !email ||
      !number ||
      !region ||
      !city ||
      !address
    )
      return res.status(400).json({
        message:
          "username, password, email, number, role, region, city and address are required",
      });

    const exists = ROLES_LIST.some(
      (r) => r.toLowerCase() === role.toLowerCase()
    );
    console.log(exists);

    const foundUser = await User.findOne({
      $or: [{ email: email }, { number: number }],
    });

    if (foundUser) {
      const msg = foundUser.email === email ? "email" : "phoneNumber";

      return res.status(400).json({
        message: `${msg} already exists`,
      });
    }

    if (!exists)
      return res.status(404).json({ message: `role ${role} not found` });

    const hashedPwd = await bcrypt.hash(password, 10);

    const newUser = await User.create({
      username: username,
      password: hashedPwd,
      role: role,
      email: email,
      number: number,
      country: country,
      region: region,
      city: city,
      address: address,
    });
    const formattedNewUser = {
      _id: newUser._id,
      username: newUser.username,
      role: newUser.role,
      email: newUser.email,
      number: newUser.number,
      country: newUser.country,
      region: newUser.region,
      city: newUser.city,
      address: newUser.address,
      upVote: newUser.upVote,
      downVote: newUser.downVote,
      totalPost: newUser.totalPost,
    };

    res.status(201).json({
      message: `${username} created successfully`,
      user: formattedNewUser,
    });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

const updateUser = async (req, res) => {
  try {
    const { _id } = req.query;
    if (!_id) return res.status(404).json({ message: "_id is required" });
    const foundUser = await User.findById(_id);
    const {
      username,
      password,
      email,
      number,
      role,
      country,
      region,
      city,
      address,
      upVote,
      downVote,
      totalPost,
    } = req.body;
    if (!foundUser) return res.status(404).json({ message: "User not found" });
    const updatedData = {
      username: username || foundUser.username,
      password: password || foundUser.password,
      email: email || foundUser.email,
      number: number || foundUser.number,
      role: role || foundUser.role,
      country: country || foundUser.country,
      region: region || foundUser.region,
      city: city || foundUser.city,
      address: address || foundUser.address,
      upVote: upVote || foundUser.upVote,
      downVote: downVote || foundUser.downVote,
      totalPost: totalPost || foundUser.totalPost,
    };
    const updatedUser = await User.findOneAndUpdate({ _id }, updatedData, {
      new: true,
    });

    const formattedNewUser = {
      _id: updatedUser._id,
      username: updatedUser.username,
      role: updatedUser.role,
      email: updatedUser.email,
      number: updatedUser.number,
      country: updatedUser.country,
      region: updatedUser.region,
      city: updatedUser.city,
      address: updatedUser.address,
      upVote: updatedUser.upVote,
      downVote: updatedUser.downVote,
      totalPost: updatedUser.totalPost,
    };

    res.status(200).json({
      message: `${foundUser.username} updated successfully`,
      user: formattedNewUser,
    });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

module.exports = { getAllUsers, createUser };
