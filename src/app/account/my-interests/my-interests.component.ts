import { Component, OnInit, ChangeDetectionStrategy, ChangeDetectorRef } from '@angular/core';
import { InterestWidgetSchemaItemType } from 'src/app/core/models/interest-widget-schema-item-type.enum';
import { InterestWidgetSchemaItem } from 'src/app/core/models/interest-widget-schema-item.model';
import { InterestWidgetSchema } from 'src/app/core/models/interest-widget-schema.model';
import { InterestsService } from 'src/app/shared/services/interests.service';
import { AggregatedInterests } from './aggregated-interests.model';

@Component({
  selector: 'soul-my-interests',
  templateUrl: './my-interests.component.html',
  styleUrls: ['./my-interests.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class MyInterestsComponent implements OnInit {
  constructor(private readonly interestService: InterestsService, private readonly cd: ChangeDetectorRef) {}

  widgets: InterestWidgetSchema[] = [];

  ngOnInit(): void {
    this.loadMyInterests();
  }

  loadMyInterests() {
    this.interestService.getAggregatedInterestsForUser$().subscribe((data: AggregatedInterests[]) => {
      this.widgets = data.map((i) => {
        return {
          name: i.name,
          items: i.items.map((item) => {
            return {
              name: item.name,
              type: item.name === 'Genres' ? InterestWidgetSchemaItemType.Chips : InterestWidgetSchemaItemType.ImgText,
              values: item.values,
            } as InterestWidgetSchemaItem;
          }),
        } as InterestWidgetSchema;
      });

      this.cd.detectChanges();
    });
  }
}
