import express from 'express';
import { StudentController } from './student.controller';

const route = express.Router();

route.post('/create-student', StudentController.createStudent);
route.get('/', StudentController.getAllStudents);
route.get('/:studentId', StudentController.getSingleStudent);

export const StudentRoutes = route;
