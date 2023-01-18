import { Router } from "express";
import { isLoggedIn } from "../middleware/middleware.js";
import * as availabilitiesCtrl from "../controllers/availabilities.js";

const router = Router();

router.get("/", availabilitiesCtrl.index);

router.post("/", availabilitiesCtrl.create);

export { router };
