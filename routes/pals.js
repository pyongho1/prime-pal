import { Router } from "express";
import * as palsCtrl from "../controllers/pals.js";
import { isLoggedIn } from "../middleware/middleware.js";

const router = Router();

router.get("/", palsCtrl.index);

router.get("/new", palsCtrl.new);

router.get("/:id", palsCtrl.show);

router.get("/:id/edit", isLoggedIn, palsCtrl.edit);

router.post("/", isLoggedIn, palsCtrl.create);

router.delete("/:id", isLoggedIn, palsCtrl.delete);

export { router };
