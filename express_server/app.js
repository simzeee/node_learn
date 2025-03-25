import express from "express";
import bodyParser from "body-parser";
import adminRoutes from "./routes/admin.js";
import shopRoutes from "./routes/shop.js";

const app = express();

app.use(bodyParser.urlencoded({ extended: true }));

app.use(adminRoutes);
app.use(shopRoutes);

app.listen(3000);
