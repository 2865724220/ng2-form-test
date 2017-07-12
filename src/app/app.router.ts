import { NgModule } from '@angular/core';
import { HeroFormComponent  } from './hero/hero.component';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: '/heroForm', pathMatch: 'full' },
  { path: 'heroForm',  component: HeroFormComponent }
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRouterModule {}
