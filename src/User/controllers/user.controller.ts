import { Request, Response } from "express";
import { dateCreate } from "../interface/dto.interface";
import { asyncHandler } from "../../utils/Exepetions/expetions.error";
import { IUserServiceImpl } from "../service/interface/impl.interface";

export default class UserControllers {

    constructor(readonly service: IUserServiceImpl) { }

    public getRegister = asyncHandler(async (_req: Request, res: Response) => {
        const result = await this.service.getAll()
        return res.status(result.statusCode).json(result.body)
    })
    public getByid = asyncHandler(async (req: Request, res: Response) => {
        const { id } = req.params
        const result = await this.service.getByid(Number(id))
        return res.status(result.statusCode).json(result.body)
    })
    public postRegister = asyncHandler(async (req: Request, res: Response) => {
        const object: dateCreate = req.body;
        const result = await this.service.create(object)
        return res.status(result.statusCode).json(result.body)
    })
    public updateRegister = asyncHandler(async (req: Request, res: Response) => {
        const userId = parseInt(req.params.id)
        const object: dateCreate = req.body
        const result = await this.service.update(userId, object)
        return res.status(result.statusCode).json(result.body)
    })
    public deleteRegister = asyncHandler(async (req: Request, res: Response) => {
        const userId = parseInt(req.params.id);
        const result = await this.service.deleteUser(userId)
        return res.status(result.statusCode).json(result.body)
    })
}
