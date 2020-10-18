import { Request, Response, NextFunction } from 'express';

// @desc    custom error handler
// @access  Public
export function errorHandler (err: any, req: Request, res: Response, next: NextFunction) {
    res.status(err.statusCode || 500).json({
        statusCode: err.statusCode || 500,
        error: err.message || 'Server Error'
    });
}