import { createAction, props } from '@ngrx/store';
import { Project } from 'src/app/shared/interfaces/project.interface';

export const setProjects = createAction('[Project] Set projects', props<{projects: Project[]}>());
