export interface Employee {
  id?: number;
  firstName?: string;
  lastName?: string;
  email?: string;
  department?: string;
  specialization?: string;
  cv?: {
    id?: number;
    email: string,
    lastName: string,
    skills: string,
    specialization: string,
    department: string,
    projects?: [
      {
        name: string,
        startDate: string,
        endDate: string,
        teamSize: number,
        techStack: string,
        roles: string,
        description: string,
        responsibilities: string
      }
    ]
  }
}
