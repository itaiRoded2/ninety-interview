import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeWrapperComponent } from './components/home-wrapper/home-wrapper.component';
import { HomeRoutingModule } from './home-routing.module';


@NgModule({
  declarations: [
    HomeWrapperComponent
  ],
  imports: [
    CommonModule,
    HomeRoutingModule
  ]
})
export class HomeModule { }
