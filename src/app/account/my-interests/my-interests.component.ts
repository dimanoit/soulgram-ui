import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { Interests } from 'src/app/auth/general-interests/general-interest.response.model';
import { InterestsService } from 'src/app/shared/services/interests.service';

@Component({
  selector: 'soul-my-interests',
  templateUrl: './my-interests.component.html',
  styleUrls: ['./my-interests.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class MyInterestsComponent implements OnInit {
  constructor(private readonly interestService: InterestsService) {}

  ngOnInit(): void {
    this.loadMyInterests();
  }

  loadMyInterests() {
    this.interestService
      .getInterestsForUser$()
      .subscribe((data: Interests[]) => console.log(data));
  }
}
