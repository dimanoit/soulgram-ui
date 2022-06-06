import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { InterestsService } from 'src/app/shared/services/interests.service';

@Component({
  selector: 'soul-my-interests',
  templateUrl: './my-interests.component.html',
  styleUrls: ['./my-interests.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class MyInterestsComponent implements OnInit {
  constructor(private interestService: InterestsService) {}

  ngOnInit(): void {
    this.loadMyInterests();
  }

  loadMyInterests() {
    this.interestService
      .getInterestsForUser()
      .subscribe((data) => console.log(data));
  }
}
