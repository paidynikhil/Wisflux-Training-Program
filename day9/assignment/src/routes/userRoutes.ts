import express from "express"
import {getAllUsers,createUser,getUserByEmail,updateUser,deleteUser} from "../controllers/userController"

const router = express.Router();

router.get('/',getAllUsers);
router.post('/',createUser);
router.get('/:email',getUserByEmail);
router.put('/:email',updateUser);
router.delete('/:email',deleteUser);

export default router;