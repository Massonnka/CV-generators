import { Gender } from '../enums/gender.enums';
import { LanguageLevel } from '../enums/language-levels.enums';
import { ProfessionalLevel } from '../enums/professional-levels.enums';
import { Specializations } from '../enums/specializations.enums';
import { Cv } from './cv.interface';

export interface Employee {
  id: string;
  firstName: string;
  middleName: string;
  lastName: string;
  birthDate: string;
  gender: Gender,
  email: string;
  phoneNumber: string;
  specialization: Specializations;
  location: string;
  professionalLevel: ProfessionalLevel;
  englishLevel?: LanguageLevel;
  createdAt?: string;
  emergencyPhone?: string;
  hiringDate?: string;
  rate?: number;
  managerId?: string;
  officeManagerId?: string;
  resourceManagerId?: string;
  cv?: Cv;
}
