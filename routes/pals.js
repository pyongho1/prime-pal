import { Router } from "express";
import * as palsCtrl from "../controllers/pals.js";
import { isLoggedIn } from "../middleware/middleware.js";

const router = Router();

router.get("/", palsCtrl.index);

router.get("/new", palsCtrl.new);

router.get("/:id", palsCtrl.show);

router.post("/", isLoggedIn, palsCtrl.create);

export { router };
