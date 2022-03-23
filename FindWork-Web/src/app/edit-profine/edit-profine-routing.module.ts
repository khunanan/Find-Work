import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { EditProfinePage } from './edit-profine.page';

const routes: Routes = [
  {
    path: '',
    component: EditProfinePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class EditProfinePageRoutingModule {}
