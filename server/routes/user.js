import express from "express";
import { 
    getUser,
    getUserFriends,
    addRemoveFriend,
 } from "../controllers/user.js";
 import  { verifyToken } from "../middleware/auth.js";

const router = express.Router();

/* READ */

router.get("/:id", verifyToken, getUser);
router.get("/:id/friends", verifyToken, getUser);

/* UDDATE */
router.patch("/:id/:friendId", verifyToken, getUser);