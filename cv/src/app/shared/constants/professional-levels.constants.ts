import { ProfessionalLevel } from '../enums/professional-levels.enums';

export const PROFESSIONAL_LEVELS = [
  {
    labelProp: ProfessionalLevel[ProfessionalLevel.Trainee],
    valueProp: ProfessionalLevel.Trainee,
  },
  {
    labelProp: ProfessionalLevel[ProfessionalLevel.Junior],
    valueProp: ProfessionalLevel.Junior,
  },
  {
    labelProp: ProfessionalLevel[ProfessionalLevel.Middle],
    valueProp: ProfessionalLevel.Middle,
  },
  {
    labelProp: ProfessionalLevel[ProfessionalLevel.Senior],
    valueProp: ProfessionalLevel.Senior,
  },
];
