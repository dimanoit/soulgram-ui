import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { InterestsService } from 'src/app/shared/services/interests.service';
import { InterestType } from './interest-type.enum';

@Component({
  selector: 'soul-general-interests',
  templateUrl: './general-interests.component.html',
  styleUrls: ['./general-interests.component.scss'],
  changeDetection: ChangeDetectionStrategy.Default,
})
export class GeneralInterestsComponent implements OnInit {
  interests: InterestType[] = [];

  constructor(private interestsService: InterestsService) {}

  ngOnInit(): void {
    this.interestsService
      .getInterests()
      .subscribe((data: InterestType[]) => (this.interests = data));
  }
}
