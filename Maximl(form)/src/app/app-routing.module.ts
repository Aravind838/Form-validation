import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
// import { ImageSliderComponent } from './image-slider/image-slider.component';
import { FormComponent } from './form/form.component';


const routes: Routes = [
  { path: '',
    redirectTo: '/form',
    pathMatch: 'full'
  },
  // { path: 'image-slider', component: ImageSliderComponent },
  { path: 'form', component: FormComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
