import express, { Application } from 'express';
import cors from 'cors';
import { StudentRoutes } from './app/modules/student/student.route';

const app: Application = express();
app.use(express.json());
app.use(cors());

app.use('/api/v2/students', StudentRoutes);

export default app;
