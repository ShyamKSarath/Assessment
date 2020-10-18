import express from 'express';
import * as bodyParser from 'body-parser';
import {userDetailsRoutes} from './routes/user-data.route';
import {errorHandler} from './middleware/error-handler';

process.on("uncaughtException", e => {
    process.exit(1);
});
process.on("unhandledRejection", e => {
    process.exit(1);
});

const app: express.Application = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use('/api', userDetailsRoutes);
app.use('*', userDetailsRoutes);
app.use(errorHandler);

const { PORT = 5000 } = process.env;

app.listen(
    PORT,
    () => console.log(`Server listening http://localhost:${PORT}`)
);