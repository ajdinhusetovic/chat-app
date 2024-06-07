import User from "../models/user.model.js";

export const getUsersForSidebar = async (req, res) => {
  try {
    const loggedInUserId = req.user._id;

    const allUsers = await User.find({ _id: { $ne: loggedInUserId } }).select(
      "-password"
    );

    res.status(201).json({ users: allUsers });
  } catch (error) {
    console.error("Error in getUsersForSidebar controller", error);
    res.status(500);
  }
};
