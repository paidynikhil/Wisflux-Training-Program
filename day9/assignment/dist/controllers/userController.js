"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteUser = exports.updateUser = exports.getUserByEmail = exports.createUser = exports.getAllUsers = void 0;
const fs_1 = __importDefault(require("fs"));
const userFile = "../data/users.json";
const getAllUsers = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const userData = yield fs_1.default.promises.readFile(userFile, "utf-8");
        const users = JSON.parse(userData);
        res.json(users);
    }
    catch (err) {
        res.status(500).send(err);
    }
});
exports.getAllUsers = getAllUsers;
const createUser = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const userData = yield fs_1.default.promises.readFile(userFile, "utf-8");
    const users = JSON.parse(userData);
    const newUser = req.body;
    const oddUser = users.find(user => user.email == newUser.email);
    if (oddUser) {
        res.status(400).send("User already exists");
    }
    else {
        users.push(newUser);
        yield fs_1.default.promises.writeFile(userFile, JSON.stringify(users));
        res.status(200).send("User added successfully");
    }
});
exports.createUser = createUser;
const getUserByEmail = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { email } = req.params;
        const userData = yield fs_1.default.promises.readFile(userFile, "utf-8");
        const users = JSON.parse(userData);
        const user = users.find(user => user.email === email);
        if (user) {
            res.json(user);
        }
        else {
            res.status(400).send("doest not exits");
        }
    }
    catch (err) {
        res.status(500).send("Error fetching user");
    }
});
exports.getUserByEmail = getUserByEmail;
const updateUser = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { email } = req.params;
        const updateUser = req.body;
        const userData = yield fs_1.default.promises.readFile(userFile, "utf-8");
        const users = JSON.parse(userData);
        const index = users.findIndex(user => user.email === email);
        if (index == 1) {
            users[index] = Object.assign(Object.assign({}, users[index]), updateUser);
            res.send("User updated successfully");
        }
        else {
            res.status(400).send("User not found");
        }
    }
    catch (err) {
        res.status(500).send("Error updating user");
    }
});
exports.updateUser = updateUser;
const deleteUser = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { email } = req.params;
        const userData = yield fs_1.default.promises.readFile(userFile, "utf-8");
        const users = JSON.parse(userData);
        const index = users.filter(user => user.email !== email);
        if (index.length !== users.length) {
            yield fs_1.default.promises.writeFile(userFile, JSON.stringify(index));
            res.send("User deleted successfully");
        }
        else {
            res.status(400).send("User not found");
        }
    }
    catch (err) {
        res.status(500).send("Error deleting user");
    }
});
exports.deleteUser = deleteUser;
