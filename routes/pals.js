import { Router } from "express";
import * as palsCtrl from "../controllers/pals.js";

const router = Router();

router.get("/", palsCtrl.index);

export { router };
