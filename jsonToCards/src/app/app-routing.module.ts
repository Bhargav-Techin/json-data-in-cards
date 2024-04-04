import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { InputPageComponent } from './input-page/input-page.component';
import { CardsPageComponent } from './cards-page/cards-page.component';

const routes: Routes = [
  {
    path: '',
    component: InputPageComponent
  },
  {
    path: 'cards',
    component: CardsPageComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
