import { createAction, props } from '@ngrx/store';
import { Project } from 'src/app/core/interfaces/project.interface';

export const setProjects = createAction('[Project] Add project', props<{projects: Project[]}>());
export const addProject = createAction('[Project] Add project', props<{projects: Project[]}>());
export const getProjects = createAction('[Project] Get projects');
