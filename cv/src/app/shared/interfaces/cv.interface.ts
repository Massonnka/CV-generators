export interface Cv {
  id?: number;
  email: string;
  lastName: string;
  skills: string;
  specialization: string;
  department: string;
  projects?: [
    {
      id?: number;
      name: string;
      startDate: string;
      endDate: string;
      teamSize: number;
      techStack: string;
      roles: string;
      description: string;
      responsibilities: string;
    }
  ];
}
