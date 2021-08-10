import { createAction, props } from '@ngrx/store';
import { Project } from 'src/app/core/interfaces/project.interface';

export const setProjects = createAction('[Project] Set projects', props<{projects: Project[]}>());
