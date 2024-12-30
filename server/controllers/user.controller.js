import { User } from "../model/user.model.js";
import { deleteMediaFromCloudinary, uploadMedia } from "../util/cloudinary.js";
import { generateToken } from "../util/generateToken.js";
import bcrypt from "bcryptjs";

export const register = async (req, res) => {
    try {
        const { name, email, password } = req.body;

        if (!name || !email || !password) {
            return res.status(400).json({
                success: false,
                message: "All fields are required.",
            });
        }

        const user = await User.findOne({ email });
        if (user) {
            return res.status(400).json({
                success: false,
                message: "User already exists with this email.",
            });
        }

        const hashedPassword = await bcrypt.hash(password, 10);
        await User.create({
            name,
            email,
            password: hashedPassword,
        });

        return res.status(201).json({
            success: true,
            message: "Account created successfully.",
        });
    } catch (error) {
        console.error(error);
        return res.status(500).json({
            success: false,
            message: "Failed to register.",
        });
    }
};

export const login = async (req, res) => {
    try {
        const { email, password } = req.body;

        if (!email || !password) {
            return res.status(400).json({
                success: false,
                message: "All fields are required.",
            });
            console.log(console.error()
            );
        }

        const user = await User.findOne({ email });
        if (!user) {
            return res.status(400).json({
                success: false,
                message: "Incorrect email or password.",
            });
        }

        const isPasswordMatch = await bcrypt.compare(password, user.password);
        if (!isPasswordMatch) {
            return res.status(400).json({
                success: false,
                message: "Invalid email or password.",
            });
        }

        generateToken(res, user, `Welcome back, ${user.name}`);
    } catch (error) {
        console.error(error);
        return res.status(500).json({
            success: false,
            message: "Failed to login.",
        });
    }
};

export const logout = async (_, res) => {
    try {
        return res
            .status(200)
            .cookie("token", "", {
                httpOnly: true,
                secure: process.env.NODE_ENV === "production",
                maxAge: 0,
            })
            .json({
                success: true,
                message: "Logout successful.",
            });
    } catch (error) {
        console.error(error);
        return res.status(500).json({
            success: false,
            message: "Failed to logout.",
        });
    }
};

export const getUserProfile = async (req, res) => {
    try {
        const userId = req.id;

        const user = await User.findById(userId).select("-password");
        if (!user) {
            return res.status(404).json({
                success: false,
                message: "Profile not found.",
            });
        }

        return res.status(200).json({
            success: true,
            message: "Profile fetched successfully.",
            user
        });
    } catch (error) {
        console.error(error);
        return res.status(500).json({
            success: false,
            message: "Failed to get user profile.",
        })
    }
};
export const updateProfile = async (req, res) => {
    try {
        const userId = req.id;
        const { name } = req.body;
        const profilePhoto = req.file;
        const user = await User.findById(userId);
        if (!user) {
            return res.status(404).json({
                success: false,
                message: "User not found.",
            });
        }
        if (user.photoUrl) {
            const publicId = user.photoUrl.split('/').pop().split(".")[0];
            await deleteMediaFromCloudinary(publicId);
        }
        const cloudResponse=await uploadMedia(profilePhoto.path);
        const photoUrl = cloudResponse.secure_url;
        const updatedData={name,photoUrl};
        const updatedUser = await User.findByIdAndUpdate(userId, updatedData, { new: true }).select("-password");
        return res.status(200).json({
            success: true,
            message: "Profile updated successfully.",
            user: updatedUser
        })
        } catch (error) {
            console.error(error);
            return res.status(500).json({
                success: false,
                message: "Failed to update user profile.",
            })
        }
    }
