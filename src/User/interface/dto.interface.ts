import { httpsStatusCode } from "../../utils/enum/https.enum";
import { users } from "@prisma/client";

export interface ServiceResponse<T> {
    statusCode: httpsStatusCode;
    body: {
        message?: string;
        data?: T;
        details?: string;
    }
}

export interface dateCreate extends Omit<users, 'id' | 'create_time' | 'update_time'> { }

export interface updateCreate extends Partial<dateCreate> { }
