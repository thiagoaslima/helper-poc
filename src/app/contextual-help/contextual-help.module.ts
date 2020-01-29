import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HelperContainerComponent } from './helper-container/helper-container.component';

@NgModule({
  declarations: [HelperContainerComponent],
  imports: [
    CommonModule
  ],
  exports: [HelperContainerComponent]
})
export class ContextualHelpModule { }
