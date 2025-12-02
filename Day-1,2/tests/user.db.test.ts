import User from "../src/Models/userModel";
import { createUser, getAllUsers, getUserById, updateUser, deleteUser } from "../src/Controllers/userController.ts";

jest.mock("../src/Models/userModel.ts");

const mockReq = (data: any = {}) => data;
const mockRes = () => {
    const res: any = {};
    res.status = jest.fn().mockReturnValue(res);
    res.json = jest.fn().mockReturnValue(res);
    return res;
};

describe("DATABASE UNIT TESTS (Mocked Mongoose)", () => {

    test("DB: createUser should call User.create()", async () => {
        const req = mockReq({ body: { name: "Neel" } });
        const res = mockRes();

        (User.create as jest.Mock).mockResolvedValue({ name: "Neel" });

        await createUser(req as any, res as any);

        expect(User.create).toHaveBeenCalledWith({ name: "Neel" });
    });

    test("DB: getAllUsers should call User.find()", async () => {
        const req = mockReq();
        const res = mockRes();

        (User.find as jest.Mock).mockResolvedValue([{ name: "Neel" }]);

        await getAllUsers(req as any, res as any);

        expect(User.find).toHaveBeenCalled();
    });

    test("DB: getUserById should call User.findById()", async () => {
        const req = mockReq({ params: { id: "123" } });
        const res = mockRes();

        (User.findById as jest.Mock).mockResolvedValue({ name: "Neel" });

        await getUserById(req as any, res as any);

        expect(User.findById).toHaveBeenCalledWith("123");
    });

    test("DB: updateUser should call findByIdAndUpdate()", async () => {
        const req = mockReq({ params: { id: "123" }, body: { name: "Updated" } });
        const res = mockRes();

        (User.findByIdAndUpdate as jest.Mock).mockResolvedValue({});

        await updateUser(req as any, res as any);

        expect(User.findByIdAndUpdate).toHaveBeenCalledWith(
            "123",
            { name: "Updated" },
            { new: true }
        );
    });

    test("DB: deleteUser should call findByIdAndDelete()", async () => {
        const req = mockReq({ params: { id: "123" } });
        const res = mockRes();

        (User.findByIdAndDelete as jest.Mock).mockResolvedValue({});

        await deleteUser(req as any, res as any);

        expect(User.findByIdAndDelete).toHaveBeenCalledWith("123");
    });

});
