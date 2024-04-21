import { Request, Response } from "express"
import fs from "fs"
import { User } from "../models/User";

const userFile = "../data/users.json";

export const getAllUsers = async (req: Request, res: Response): Promise<void> => {
  try {
    const userData = await fs.promises.readFile(userFile, "utf-8");
    const users: User[] = JSON.parse(userData);
    res.json(users);
  } catch (err) {
    res.status(500).send(err);
  }
};

export const createUser = async (req: Request, res: Response): Promise<void> => {
  const userData = await fs.promises.readFile(userFile, "utf-8");
  const users: User[] = JSON.parse(userData);

  const newUser: User = req.body;
  const oddUser = users.find(user => user.email === newUser.email);
  if (oddUser) {
    res.status(400).send("User already exists")
  }
  else {
    users.push(newUser);
    await fs.promises.writeFile(userFile, JSON.stringify(users));
    res.status(200).send("User added successfully")
  }
};

export const getUserByEmail = async (req: Request, res: Response): Promise<void> => {
  try {
    const { email } = req.params;
    const userData = await fs.promises.readFile(userFile, "utf-8");
    const users: User[] = JSON.parse(userData);
  
    const user = users.find(user => user.email === email);
    if (user) {
      res.json(user);
    } else {
      res.status(400).send("doest not exits")
    }
  }
  catch (err) {
    res.status(500).send("Error fetching user")
  }
};

export const updateUser = async (req: Request, res: Response): Promise<void> => {
  try {
    const { email } = req.params;
    const updateUser: User = req.body;

    const userData = await fs.promises.readFile(userFile, "utf-8");
    const users: User[] = JSON.parse(userData);
  
    const index = users.findIndex(user => user.email === email);
    if (index == 1) {
      users[index] = { ...users[index], ...updateUser }
      res.send("User updated successfully")
    }
    else {
      res.status(400).send("User not found")
    }
  }
  catch (err) {
    res.status(500).send("Error updating user")
  }
};

export const deleteUser = async (req: Request, res: Response): Promise<void> => {
  try {
    const { email } = req.params;
    
    const userData = await fs.promises.readFile(userFile, "utf-8");
    const users: User[] = JSON.parse(userData);
    
    const index = users.filter(user => user.email !== email);
    if (index.length !== users.length) {
      await fs.promises.writeFile(userFile, JSON.stringify(index));
      res.send("User deleted successfully");
    } else {
      res.status(400).send("User not found");
    }
  }
  catch (err) {
    res.status(500).send("Error deleting user")
  }
};