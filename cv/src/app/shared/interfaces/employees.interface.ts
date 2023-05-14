import { Cv } from './cv.interface';

export interface Employee {
  id: string;
  firstName: string;
  lastName: string;
  email: string;
  department: string;
  specialization: string;
  cv?: Cv;
}
