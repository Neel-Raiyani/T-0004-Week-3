import { Request, Response } from "express";

export const createUser = (req: Request, res: Response) => {
    const { name, email } = req.body;
    res.status(201).json({ message: "User created", data: { name, email } });
};

export const getAllUsers = (req: Request, res: Response) => {
    res.json([{ id: 1, name: 'Neel Raiyani', email: 'neel18@gmail.com' }]);
};

export const getUserById = (req: Request, res: Response) => {
    res.json({ message: "User found", id: req.params.id });
};

export const updateUser = (req: Request, res: Response) => {
    res.json({ id: req.params.id, message: "User updated" });
};

export const deleteUser = (req: Request, res: Response) => {
    res.json({ id: req.params.id, message: "User deleted" });
};
