import express from "express";
import dotenv from "dotenv";
import cors from "cors";
const app = express();
dotenv.config();

import connectDB from "./Config/db.js";
import { swaggerUi, swaggerSpec } from "./Config/swagger.js";
import userRoutes from "./Routes/userRoutes.js";

const port = process.env.PORT || 1818;
// CORS for specific domain
// const corsOption = {
//     origin: ["http://localhost:1818", "http://localhost:1817"],
//     methods: ["GET", "POST"],
//     Credentials: true // For allowing cookies and auth headers
// }

connectDB();

app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerSpec));

app.use(express.json());

app.use(cors());
// app.use(cors(corsOption));

app.use("/api/v1/users", userRoutes);

app.listen(port, () => {
    console.log(`Server running on http://localhost:${port}`);
});
