import { Router, Routes } from "express";
import { createUser, deleteUser, getUser, getUsers, updateUser } from "../controller/userController";

const router = Router()

router.get('users', getUsers)
router.get('users/:id', getUser)
router.post('users', createUser)
router.put('users/:id', updateUser)
router.delete('users/:id', deleteUser)