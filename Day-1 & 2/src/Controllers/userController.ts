import { Request, Response } from "express";
import User from "../Models/userModel.js"

export const createUser = async (req: Request, res: Response) => {
    try {
        const user = await User.create(req.body);
        res.status(201).json({ messsage: "User created successfully!!!", user });
    }
    catch (error) {
        if (error instanceof Error) {
            res.status(500).json({ message: "Server error!", error: error.message });
        } else {
            res.status(500).json({ message: "Server error!", error: String(error) });
        }
    }
};

export const getAllUsers = async (req: Request, res: Response) => {
    try {
        const user = await User.find();

        if (!user) {
            return res.status(404).json({ message: "User not found!!!" });
        }

        res.status(201).json({ message: "User found successfully!!!", user });
    }
    catch (error) {
        if (error instanceof Error) {
            res.status(500).json({ message: "Server error!", error: error.message });
        } else {
            res.status(500).json({ message: "Server error!", error: String(error) });
        }
    }
};

export const getUserById = async (req: Request, res: Response) => {
    try {
        const user = await User.findById(req.params.id);

        if (!user) {
            return res.status(404).json({ message: "User not found!!!" });
        }

        res.status(201).json({ message: "User found successfully!!!", user });
    }
    catch (error) {
        if (error instanceof Error) {
            res.status(500).json({ message: "Server error!", error: error.message });
        } else {
            res.status(500).json({ message: "Server error!", error: String(error) });
        }
    }
};

export const updateUser = async (req: Request, res: Response) => {
    try {
        const user = await User.findByIdAndUpdate(
            req.params.id,
            req.body,
            { new: true }
        );
        if (!user) {
            return res.status(404).json({ message: "User not found..." });
        }

        res.json({ message: "User updated successfully!!!" });
    }
    catch (error) {
        if (error instanceof Error) {
            res.status(500).json({ message: "Server error!", error: error.message });
        } else {
            res.status(500).json({ message: "Server error!", error: String(error) });
        }
    }
};

export const deleteUser = async(req: Request, res: Response) => {
    try {
        const user = await User.findByIdAndDelete(req.params.id);
        if (!user) {
            return res.status(404).json({ message: "User not found..." });
        }

        res.json({ message: "User deleted successfully!!!" });
    }
    catch (error) {
        if (error instanceof Error) {
            res.status(500).json({ message: "Server error!", error: error.message });
        } else {
            res.status(500).json({ message: "Server error!", error: String(error) });
        }
    }
};
