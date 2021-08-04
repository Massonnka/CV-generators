import { createFeatureSelector, createSelector } from "@ngrx/store";
import { Project } from "src/app/core/interfaces/project.interface";
import { projectsFeatureKey } from "./projects.reducers";

const selectProjectsState = createFeatureSelector(projectsFeatureKey);

export const selectProject = createSelector(selectProjectsState, (state) => state as Project);