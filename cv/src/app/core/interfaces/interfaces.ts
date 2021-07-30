export interface LoginUser {
    email: string;
    password: string;
    returnSecureToken?: boolean;
}

export interface RegisterUser {
    firstName: string;
    lastName: string;
    password: string;
    email: string;
    specialization: string;
}

export interface FbAuthResponse {
    accessToken: string;
}

export interface FoundProject {
    _id: string;
    name: string;
    startDate: string;
    endDate: string;
    teamSize: number;
}

export interface Project {
    _id?: string;
    name: string;
    startDate: string;
    endDate: string;
    teamSize: number;
}


