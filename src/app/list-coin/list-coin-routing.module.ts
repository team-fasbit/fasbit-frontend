import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ListCoinComponent } from './list-coin.component';

const routes: Routes = [
  {
    path: '',
    component: ListCoinComponent,
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ListCoinRoutingModule { }
