import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { EditProfinePageRoutingModule } from './edit-profine-routing.module';

import { EditProfinePage } from './edit-profine.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    EditProfinePageRoutingModule
  ],
  declarations: [EditProfinePage]
})
export class EditProfinePageModule {}
