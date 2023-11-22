import { Schema, model } from 'mongoose';
import {
  Guardian,
  LocalGuardian,
  Student,
  UserName,
} from './student.interface';
import validator from 'validator';

const localGuardianSchema = new Schema<LocalGuardian>({
  name: { type: String, required: true },
  occupation: { type: String, required: true },
  contactNo: { type: String, required: true },
  address: { type: String, required: true },
});

const guardianSchema = new Schema<Guardian>({
  fatherName: { type: String, required: true },
  fatherOccupation: { type: String, required: true },
  fatherContactNo: { type: String, required: true },
  motherName: { type: String, required: true },
  motherOccupation: { type: String, required: true },
  motherContactName: { type: String, required: true },
});

const userNameSchema = new Schema<UserName>({
  firstName: {
    type: String,
    required: [true, 'First name is  required'],
    maxlength: [20, 'First name cant be more than 20 characters'],
    trim: true,
    validate: {
      validator: function (value: string) {
        const firstNameStr = value.charAt(0).toUpperCase() + value.slice(1);
        return firstNameStr === value;
      },
    },
  },
  middleName: { type: String },
  lastName: {
    type: String,
    required: true,
    validate: {
      validator: (value: string) => validator.isAlpha(value),
      message: '{VALUE} is not valid',
    },
  },
});

const studentSchema = new Schema<Student>({
  id: { type: String, required: true, unique: true },
  name: {
    type: userNameSchema,
    required: true,
  },
  gender: {
    type: String,
    enum: ['male', 'female'],
    required: true,
  },
  dateOfBirth: String,
  email: {
    type: String,
    required: true,
    unique: true,
    validate: {
      validator: (value: string) => validator.isEmail(value),
      message: '{VALUE} is not a valid email address',
    },
  },
  contactNumber: { type: String, required: true },
  bloodGroups: {
    type: String,
    enum: ['A+', 'A-', 'B+', 'B-', 'AB+', 'AB-', 'O+', 'O-'],
    required: true,
  },
  presentAddress: { type: String, required: true },
  permanentAddress: { type: String, required: true },
  guardian: guardianSchema,
  localGuardian: localGuardianSchema,
  profileImg: String,
  isActive: {
    type: String,
    enum: ['active', 'block'],
    default: 'active',
  },
});
export const studentModel = model<Student>('Student', studentSchema);
