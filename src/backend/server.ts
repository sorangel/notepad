// @ts-ignore
import express, { Request, Response } from "express";
import { engine } from "express-handlebars";
import * as path from "path";

const app = express();

app.engine(
  "hbs",
  engine({
    extname: "hbs",
    layoutsDir: path.resolve(__dirname, "../frontend/views/layouts"),
    partialsDir: path.resolve(__dirname, "../frontend/views/partials"),
  })
);

app.set("view engine", "hbs");

app.set("views", path.resolve(__dirname, "../frontend/views"));

app.get("/", (req: Request, res: Response) => {
  res.render("home", { layout: "default", template: "home-template" });
});

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`Server is running in http://localhost:${PORT}`);
});
