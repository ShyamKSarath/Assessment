import { Request, Response, NextFunction } from 'express';
import { extractUserDetails } from '../utils/utils';
import { ErrorResponse } from '../utils/error-response';

// @desc    Post v1 parse
// @route   Post /api/v1/parse
// @access  Public
export function parseUserDataV1 (req: Request, res: Response, next: NextFunction) {
    try {
      let data = req.body.data || {};
      const userInfo = extractUserDetails(data, 'v1');
      if (userInfo === '') {
        next(new ErrorResponse('Invalid request data', 400));
      }
      res.status(200).json({
        statusCode: 200,
        data: userInfo
      });
    } catch (err) {
        next(new ErrorResponse('Invalid data', 400));
    }
}

// @desc    Post v2 parse
// @route   Post /api/v2/parse
// @access  Public
export function parseUserDataV2 (req: Request, res: Response, next: NextFunction) { 
    try {
    let data = req.body.data || {};
    const userInfo = extractUserDetails(data, 'v2');
    if (userInfo === '') {
      next(new ErrorResponse('Invalid request data', 400));
    }
    res.status(200).json({
      statusCode: 200,
      data: userInfo
    });
    } catch (err) {
        next(new ErrorResponse('Invalid data', 400));
    }
}

// @desc    handle invalid uri path
// @route   all *
// @access  Public
export function invalidUriPath(req: Request, res: Response, next: NextFunction) {
  next(new ErrorResponse('Not Found, please specify the path as /api/v1/parse or /api/v2/parse', 404));
}
