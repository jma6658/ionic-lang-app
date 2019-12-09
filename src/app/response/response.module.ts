import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';

import { ResponseDialogComponent } from "./response-dialog/response-dialog.component";
import { ResponseService } from "./response.service";

@NgModule({
  declarations: [
    ResponseDialogComponent
  ],
  imports: [
    IonicModule,
    CommonModule,
    FormsModule,
    RouterModule.forChild([
      {
        path: '',
        component: ResponseDialogComponent
      }
    ])
  ],
  exports: [
    ResponseDialogComponent
  ],
  providers: [ResponseService]
})
export class ResponseModule { }
