import { users } from "@prisma/client";
import { dateCreate, ServiceResponse, updateCreate } from "../../interface/dto.interface";

export interface UserServiceImpl {

    getAll(): Promise<ServiceResponse<users[]>>

    getByid(id: number): Promise<ServiceResponse<users>>

    create(data: dateCreate): Promise<ServiceResponse<dateCreate>>

    update(id: number, data: updateCreate): Promise<ServiceResponse<updateCreate>>
    
    deleteUser(id: number): Promise<ServiceResponse<users>>
}