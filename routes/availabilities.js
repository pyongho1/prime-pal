import { Router } from "express";
import { isLoggedIn } from "../middleware/middleware.js";
import * as availabilitiesCtrl from "../controllers/availabilities.js";

const router = Router();

router.get("/", isLoggedIn, availabilitiesCtrl.index);

export { router };
