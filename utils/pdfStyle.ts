const pdfStyle = (speech: string) => {
	return `
    <!DOCTYPE html>
    <html lang="en">
        <head>
            <meta charset="UTF-8" />
            <style>
                *,
                *::after,
                *::before {
                    margin: 0;
                    padding: 0;
                    box-sizing: border-box;
                    line-height: 180%;
                }
                html {
                    font-size: 100%;
                }
                body {
                    font-family: Poppins, sans-serif;
                }
                .root {
                    padding: 1em;
                    position: relative;
                    background-color: #f0f0f0;
                }
                p {
                    text-align: center;
                }
            </style>
            <title>PDF</title>
        </head>
        <body>
            <div class="root">
                <p>
                    ${speech}
                </p>
            </div>
        </body>
    </html>
    `;
};

export default pdfStyle;
