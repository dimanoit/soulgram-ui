import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'soul-my-interests',
  templateUrl: './my-interests.component.html',
  styleUrls: ['./my-interests.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class MyInterestsComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
