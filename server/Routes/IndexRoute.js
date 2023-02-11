import express from "express";
import { indexController } from "../Controllers/IndexController.js";
const router = express.Router();
router.get("/home", indexController);

export default router;
