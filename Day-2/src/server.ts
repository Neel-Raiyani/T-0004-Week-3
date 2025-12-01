import express from "express";
import connectDB from "./Config/db.js";
const app = express();

import { swaggerUi, swaggerSpec } from "./Config/swagger.js";
import userRoutes from "./Routes/userRoutes.js";

const PORT = 3018;

connectDB();

app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerSpec));

app.use(express.json());

app.use("/api/v1/users", userRoutes);

app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});
