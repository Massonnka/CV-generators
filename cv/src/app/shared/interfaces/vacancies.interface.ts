export interface Vacancy {
  id: string;
  name: string;
  requirements: string;
  description: string;
  salary: number;
  endDate: string;
  phone: string;
  rating?: number;
}
