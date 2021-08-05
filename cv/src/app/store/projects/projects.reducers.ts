import { createReducer, on, Action } from '@ngrx/store';
import { Project } from 'src/app/core/interfaces/project.interface';

import * as ProjectActions from './projects.actions';

export const projectsFeatureKey = 'projects';

export interface ProjectsState {
  projects: Project[];
}
const initialState: ProjectsState = {
  projects: [],
};

const _projectsReducer = createReducer(
  initialState,
  on(ProjectActions.setProjects, (state, { projects }) => ({
    ...state,
    projects,
  })),
  on(ProjectActions.getProjects, (state) => state)
);

export function projectsReducer(state: any, action: Action) {
  return _projectsReducer(state, action);
}
