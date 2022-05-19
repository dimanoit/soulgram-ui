import {
  Component,
  OnInit,
  ChangeDetectionStrategy,
  ChangeDetectorRef,
} from '@angular/core';
import { UntilDestroy, untilDestroyed } from '@ngneat/until-destroy';
import { map, Observable, takeLast } from 'rxjs';
import { InterestsService } from 'src/app/shared/services/interests.service';
import { InterestType } from './interest-type.enum';
import { InterestWithSelection } from './interest-with-selection.model';

@UntilDestroy()
@Component({
  selector: 'soul-general-interests',
  templateUrl: './general-interests.component.html',
  styleUrls: ['./general-interests.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class GeneralInterestsComponent {
  interests$!: Observable<InterestWithSelection[]>;
  selectedInterests: InterestType[] = [];

  interestEnumType = InterestType;

  constructor(private interestsService: InterestsService) {
    this.interests$ = this.interestsService.getInterests().pipe(
      untilDestroyed(this),
      map((items) => this.toInterestWithSelections(items))
    );
  }

  get disabledComplete(): boolean {
    return this.selectedInterests.length === 0;
  }

  toggleSelection(interestWithSelection: InterestWithSelection): void {
    interestWithSelection.isSelected = !interestWithSelection.isSelected;

    if (interestWithSelection.isSelected) {
      this.selectedInterests.push(interestWithSelection.interest);
    } else {
      this.selectedInterests = this.selectedInterests.filter(
        (i) => i !== interestWithSelection.interest
      );
    }
  }

  confirm(): void {
    this.interestsService;
  }

  trackByFunc(_: number, item: InterestWithSelection): InterestType {
    return item.interest;
  }

  private toInterestWithSelections(
    interests: InterestType[]
  ): InterestWithSelection[] {
    return interests.map((item) => {
      return {
        interest: item,
        isSelected: false,
      } as InterestWithSelection;
    });
  }
}
