import express from "express";
import connectDB from "./Config/db.js";
const app = express();
import dotenv from "dotenv";
dotenv.config();

import { swaggerUi, swaggerSpec } from "./Config/swagger.js";
import userRoutes from "./Routes/userRoutes.js";

const port = process.env.PORT || 1818;

connectDB();

app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerSpec));

app.use(express.json());

app.use("/api/v1/users", userRoutes);

app.listen(port, () => {
    console.log(`Server running on http://localhost:${port}`);
});
