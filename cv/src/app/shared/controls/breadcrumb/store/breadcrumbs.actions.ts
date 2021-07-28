import { createAction, props } from "@ngrx/store";
import { Breadcrumb } from "../interfaces/breadcrumbs.interface";

export const setBreadcrumbs = createAction('[Breadcrumbs] set breadcrumbs', props<{breadcrumbs: Breadcrumb[]}>());

export const clearBreadcrumbs = createAction('[Breadcrumbs] clear breadcrumbs');