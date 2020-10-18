import express from 'express';
import { parseUserDataV1, parseUserDataV2, invalidUriPath } from '../controllers/user-data.controller';

export const userDetailsRoutes = express.Router();
userDetailsRoutes.route('/v1/parse').post(parseUserDataV1);
userDetailsRoutes.route('/v2/parse').post(parseUserDataV2);
userDetailsRoutes.all('*', invalidUriPath);