import User from "../models/User";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";

const generateToken = (userID) => {
  const token = jwt.sign({ userID }, process.env.JWT_SECRET, {
    expiresIn: "7d",
  });
  return token;
};

// controller for user registration
//POST: /api/users/register
export const registerUser = async (req, res) => {
  try {
    const { name, email, password } = req.body;

    // check if required fields are present
    if (!name || !email || !password) {
      return res.status(400).json({ message: "missing required filed" });
    }

    // check if user already exists
    const user = await User.findOne({ email });
    if (user) {
      return res.status(400).json({ message: "User already exists" });
    }

    // create new user
    const hashedPassword = await bcrypt.hash(password, 10);
    const newUser = new User.create({
      name,
      email,
      password: hashedPassword,
    });

    // return success response
    const token = generateToken(newUser._id);
    newUser.password = undefined;

    return res
      .status(201)
      .json({ message: "User registered successfully", user: newUser, token });
  } catch (error) {
    return res.status(400).json({ message: error.message });
  }
};

// controller for user login
//POST: /api/users/login

export const loginUser = async (req, res) => {
  try {
    const { email, password } = req.body;

    // check if user  exists
    const user = await User.findOne({ email });
    if (!user) {
      return res.status(400).json({ message: "Invalid email or password" });
    }

    // check if password matches
    if (!user.comparePassword(password)) {
      return res.status(400).json({ message: "Invalid email or password" });
    }

    //return success response
    const token = generateToken(user._id);
    user.password = undefined;

    return res
      .status(200)
      .json({ message: "User logged in successfully", user, token });
  } catch (error) {
    return res.status(400).json({ message: error.message });
  }
};
