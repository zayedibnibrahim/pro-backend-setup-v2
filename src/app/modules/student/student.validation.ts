import { z } from 'zod';

// Zod validation schema for LocalGuardian
const localGuardianSchema = z.object({
  name: z.string().min(1),
  occupation: z.string().min(1),
  contactNo: z.string().min(1),
  address: z.string().min(1),
});

// Zod validation schema for Guardian
const guardianSchema = z.object({
  fatherName: z.string().min(1),
  fatherOccupation: z.string().min(1),
  fatherContactNo: z.string().min(1),
  motherName: z.string().min(1),
  motherOccupation: z.string().min(1),
  motherContactName: z.string().min(1),
});

// Zod validation schema for UserName
const userNameSchema = z.object({
  firstName: z.string().min(1).max(20),
  middleName: z.string().min(1),
  lastName: z.string().min(1).max(20),
});

// Zod validation schema for Student
const studentValidationSchema = z.object({
  id: z.string().min(1),
  name: userNameSchema,
  gender: z.enum(['male', 'female']),
  dateOfBirth: z.string().min(1),
  email: z.string().email().min(1),
  contactNumber: z.string().min(1),
  bloodGroups: z.enum(['A+', 'A-', 'B+', 'B-', 'AB+', 'AB-', 'O+', 'O-']),
  presentAddress: z.string().min(1),
  permanentAddress: z.string().min(1),
  guardian: guardianSchema,
  localGuardian: localGuardianSchema,
  profileImg: z.string().optional(),
  isActive: z.enum(['active', 'block']),
});
console.log('fefefe');
export default studentValidationSchema;
