import { TStudent } from './student.interface';
import { Student } from './student.model';

const createStudentIntoDB = async (studentData: TStudent) => {
  //built in static method
  if (await Student.isUserExists(studentData.id)) {
    throw new Error('Student already exists');
  }
  const result = await Student.create(studentData);

  //creating a custom instant method
  // const student = new Student(studentData);
  // if (await Student.isUserExists(studentData.id)) {
  //   throw new Error('Student already exists');
  // }
  // const result = await student.save();
  return result;
};

const getAllStudentFromDB = async () => {
  const result = await Student.find();
  return result;
};

const getSingleStudentFromDB = async (id: string) => {
  const result = await Student.findOne({ id });
  return result;
};

const deleteSingleStudentFromDB = async (id: string) => {
  const result = await Student.updateOne({ id }, { isDeleted: true });
  return result;
};

export const StudentService = {
  createStudentIntoDB,
  getAllStudentFromDB,
  getSingleStudentFromDB,
  deleteSingleStudentFromDB,
};
