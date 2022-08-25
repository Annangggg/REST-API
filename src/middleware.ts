import { Request, Response, NextFunction } from 'express';



export const errorHandler = (err: Error, req: Request, res: Response, next: NextFunction) => {
    res.status(500).json(err.message);
}

export const notFoundHandler = ( req: Request, res: Response, next: NextFunction) => {
    res.status(404).json('No books to show!');
}