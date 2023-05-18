import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { VacanciesComponent } from './vacancies.component';
import { VacancyAddInfoComponent } from './vacancy-add-info/vacancy-add-info.component';
import { VacancyInfoComponent } from './vacancy-info/vacancy-info.component';

const routes: Routes = [
  {
    path: '',
    component: VacanciesComponent,
  },
  {
    path: 'addinfo',
    component: VacancyAddInfoComponent,
  },
  {
    path: ':vacancy',
    component: VacancyInfoComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class VacanciesRoutingModule {}
