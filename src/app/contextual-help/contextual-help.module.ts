import { NgModule, InjectionToken } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HelperContainerComponent } from './helper-container/helper-container.component';
import { BasicCardComponent } from './basic-card/basic-card.component';
import { CardContainerComponent } from './card-container/card-container.component';

export const BASIC_CARD = new InjectionToken<BasicCardComponent>('basic-card');

@NgModule({
  declarations: [HelperContainerComponent, BasicCardComponent, CardContainerComponent],
  imports: [CommonModule],
  providers: [
    {
      provide: 'cards',
      useValue: [
        {
          name: BASIC_CARD,
          component: BasicCardComponent
        }
      ],
      multi: true
    }
  ],
  exports: [HelperContainerComponent],
  entryComponents: [BasicCardComponent]
})
export class ContextualHelpModule {}
