import { Router } from "express";
import { isLoggedIn } from "../middleware/middleware.js";
import * as availabilitiesCtrl from "../controllers/availabilities.js";

const router = Router();

router.get("/", availabilitiesCtrl.index);

router.get("/:id/edit", isLoggedIn, availabilitiesCtrl.edit);

router.post("/", availabilitiesCtrl.create);

router.put("/:id", isLoggedIn, availabilitiesCtrl.update);

router.delete("/:id", isLoggedIn, availabilitiesCtrl.delete);

export { router };
