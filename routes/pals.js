import { Router } from "express";
import * as palsCtrl from "../controllers/pals.js";
import { isLoggedIn } from "../middleware/middleware.js";

const router = Router();

router.get("/", palsCtrl.index);

router.get("/new", palsCtrl.new);

router.get("/:id", palsCtrl.show);

router.get("/:id/edit", isLoggedIn, palsCtrl.edit);

router.post("/", isLoggedIn, palsCtrl.create);

router.post("/:id/comments", isLoggedIn, palsCtrl.addComment);

router.delete("/:id", isLoggedIn, palsCtrl.delete);

router.put("/:id", isLoggedIn, palsCtrl.update);

export { router };
