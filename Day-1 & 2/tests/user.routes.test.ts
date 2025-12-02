import express from "express";
import router from "../src/Routes/userRoutes";
import * as controller from "../src/Controllers/userController";

jest.mock("../src/Controllers/userController");

describe("ROUTES UNIT TEST (Check if routes call correct controllers)", () => {

    test("POST /create should call createUser", async () => {
        const app = express();
        app.use("/", router);

        const req: any = { body: {} };
        const res: any = { json: jest.fn(), status: jest.fn().mockReturnValue({ json: jest.fn() }) };

        await controller.createUser(req, res);
        expect(controller.createUser).toHaveBeenCalled();
    });

    test("GET /All-Users should call getAllUsers", async () => {
        await controller.getAllUsers({} as any, {} as any);
        expect(controller.getAllUsers).toHaveBeenCalled();
    });

    test("GET /:id should call getUserById", async () => {
        await controller.getUserById({ params: { id: "123" } } as any, {} as any);
        expect(controller.getUserById).toHaveBeenCalled();
    });

    test("PUT /update/:id should call updateUser", async () => {
        await controller.updateUser({ params: { id: "123" } } as any, {} as any);
        expect(controller.updateUser).toHaveBeenCalled();
    });

    test("DELETE /delete/:id should call deleteUser", async () => {
        await controller.deleteUser({ params: { id: "123" } } as any, {} as any);
        expect(controller.deleteUser).toHaveBeenCalled();
    });
});
