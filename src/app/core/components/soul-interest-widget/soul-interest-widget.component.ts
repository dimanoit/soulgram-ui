import { Component, ChangeDetectionStrategy, Input } from '@angular/core';
import { InterestWidgetSchemaItemType } from '../../models/interest-widget-schema-item-type.enum';
import { InterestWidgetSchema } from '../../models/interest-widget-schema.model';

@Component({
  selector: 'soul-interest-widget',
  templateUrl: './soul-interest-widget.component.html',
  styleUrls: ['./soul-interest-widget.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SoulInterestWidgetComponent {
  @Input() schema!: InterestWidgetSchema;

  itemType = InterestWidgetSchemaItemType;
}
