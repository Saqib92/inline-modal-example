import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { InlineModalComponent } from './inline-modal.component';

@NgModule({
  imports: [ CommonModule, FormsModule, IonicModule,],
  declarations: [InlineModalComponent],
  exports: [InlineModalComponent]
})
export class InlineModalComponentModule {}
