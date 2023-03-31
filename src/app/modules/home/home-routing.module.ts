import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeWrapperComponent } from './components/home-wrapper/home-wrapper.component';

const routes: Routes = [

  {
    path: '',
    component: HomeWrapperComponent,
    children: [

    ]
  }, 

];
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomeRoutingModule { }
