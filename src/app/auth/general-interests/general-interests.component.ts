import { ChangeDetectionStrategy, Component } from '@angular/core';
import { Router } from '@angular/router';
import { UntilDestroy, untilDestroyed } from '@ngneat/until-destroy';
import { map, Observable } from 'rxjs';
import { RoutesNames } from 'src/app/main.routes';
import { InterestsService } from 'src/app/shared/services/interests.service';
import { Interests } from './general-interest.response.model';
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
  selectedInterestsIds: string[] = [];

  constructor(
    private interestsService: InterestsService,
    private router: Router
  ) {
    this.interests$ = this.interestsService.getInterests$().pipe(
      untilDestroyed(this),
      map((items) => this.toInterestWithSelections(items))
    );
  }

  get disabledComplete(): boolean {
    return this.selectedInterestsIds.length === 0;
  }

  toggleSelection(interestWithSelection: InterestWithSelection): void {
    interestWithSelection.isSelected = !interestWithSelection.isSelected;

    if (interestWithSelection.isSelected) {
      this.selectedInterestsIds.push(interestWithSelection.id);
    } else {
      this.selectedInterestsIds = this.selectedInterestsIds.filter(
        (i) => i !== interestWithSelection.id
      );
    }
  }

  confirm(): void {
    this.interestsService
      .setInterestsForUser$(this.selectedInterestsIds)
      .pipe(untilDestroyed(this))
      .subscribe(() => this.router.navigateByUrl(RoutesNames.Account));
  }

  trackByFunc(_: number, item: InterestWithSelection): string {
    return item.id;
  }

  private toInterestWithSelections(
    interests: Interests[]
  ): InterestWithSelection[] {
    return interests.map((item) => {
      return {
        name: item.name,
        id: item.id,
        isSelected: false,
      } as InterestWithSelection;
    });
  }
}
