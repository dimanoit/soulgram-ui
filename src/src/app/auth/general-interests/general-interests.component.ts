import {
  Component,
  OnInit,
  ChangeDetectionStrategy,
  ChangeDetectorRef,
} from '@angular/core';
import { InterestsService } from 'src/app/shared/services/interests.service';
import { InterestType } from './interest-type.enum';

@Component({
  selector: 'soul-general-interests',
  templateUrl: './general-interests.component.html',
  styleUrls: ['./general-interests.component.scss'],
  changeDetection: ChangeDetectionStrategy.Default,
})
export class GeneralInterestsComponent implements OnInit {
  interests: string[] = [];
  selectedInterests: InterestType[] = [];

  constructor(
    private interestsService: InterestsService,
    private cd: ChangeDetectorRef
  ) {}

  ngOnInit(): void {
    this.interestsService.getInterests().subscribe((data: InterestType[]) => {
      this.interests = data.map((item) => InterestType[item]);
      this.cd.detectChanges();
    });
  }

  selectInterest(interest: string) {
    const key = interest as keyof typeof InterestType;
    const interestEnum = InterestType[key];


    this.selectedInterests.push()
  }
}
