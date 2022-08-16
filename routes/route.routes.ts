import { Router } from "express";
import { createPDF, deletePDF, getPDF } from "../controllers";
const router = Router();

router.route("/create-pdf").post(createPDF);
router.route("/get-pdf").get(getPDF);
router.route("/clear-pdf").delete(deletePDF);

export default router;
