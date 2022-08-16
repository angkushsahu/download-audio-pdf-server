import express, { NextFunction, Request, Response } from "express";
const app = express();

app.use(express.urlencoded({ extended: true, limit: "500mb" }));
app.use(express.json());

import cors from "cors";
app.use(cors({ credentials: true, origin: process.env.BASE_URL }));

// import routes here
import { router } from "./routes";
app.use("/api", router);

// // import error-middleware here
app.use((req: Request, res: Response, next: NextFunction) => {
	res.status(404).json({ success: false, message: "Please enter a valid API URL" });
	next();
});
import { error } from "./middlewares";
app.use(error);

export default app;
