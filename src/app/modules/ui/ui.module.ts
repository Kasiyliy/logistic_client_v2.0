import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UiRoutingModule } from './ui-routing.module';
import { UiComponent } from './ui.component';

@NgModule({
  declarations: [
    UiComponent
  ],
  imports: [
    CommonModule,
    UiRoutingModule
  ],
  bootstrap: [UiComponent]
})
export class UiModule { }
