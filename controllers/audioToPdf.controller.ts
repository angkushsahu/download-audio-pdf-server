import { NextFunction, Request, Response } from "express";
import pdf from "html-pdf";
import { join } from "path";
import { unlink } from "fs";
import { catchAsyncErrors } from "../middlewares";
import { ErrorHandler, pdfStyle } from "../utils";

export const createPDF = catchAsyncErrors(
	async (req: Request, res: Response, next: NextFunction) => {
		const { textBody }: { textBody: string } = req.body;
		const file: string = pdfStyle(textBody);

		pdf.create(file, { width: "210mm", height: "297mm" }).toFile(
			"result.pdf",
			(error: Error) => {
				if (error) {
					return next(
						new ErrorHandler("Unable to create PDF file, please try again", 500),
					);
				}

				res.status(201).json({ success: true, message: "created successfully" });
			},
		);
	},
);

export const getPDF = catchAsyncErrors(async (req: Request, res: Response, next: NextFunction) => {
	const filePath: string = join(__dirname, "../", "result.pdf");
	res.status(200).sendFile(filePath);
});

export const deletePDF = catchAsyncErrors(
	async (req: Request, res: Response, next: NextFunction) => {
		const filePath: string = join(__dirname, "../", "result.pdf");
		unlink(filePath, err => {
			if (err) {
				return next(new ErrorHandler("Unable to perform cleanup", 500));
			} else {
				res.status(200).json({ success: true, message: "Cleanup successfull" });
			}
		});
	},
);
