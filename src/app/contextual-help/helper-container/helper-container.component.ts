import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'app-helper-container',
  templateUrl: './helper-container.component.html',
  styleUrls: ['./helper-container.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class HelperContainerComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
