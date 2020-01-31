import { Component, OnInit, ChangeDetectionStrategy, Input, TemplateRef } from '@angular/core';

@Component({
  templateUrl: './basic-card.component.html',
  styleUrls: ['./basic-card.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class BasicCardComponent implements OnInit {
  @Input() title = '';
  @Input() content: TemplateRef<any> | string = '';

  constructor() {}

  get contentString(): string {
    if (typeof this.content === 'string') {
      return this.content || 'This is the basic card body';
    }
  }

  get contentTemplate(): TemplateRef<any> {
    return this.content instanceof TemplateRef ? this.content : null;
  }

  getContext(): any {
    console.log(this);
    return Object.keys(this).reduce((acc, key) => {
      if (Object.prototype.hasOwnProperty.call(this, key)) {
        acc[key] = this[key];
      }
      return acc;
    }, {});
  }

  ngOnInit() {}
}
