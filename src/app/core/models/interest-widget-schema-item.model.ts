import { InterestWidgetSchemaItemType } from './interest-widget-schema-item-type.enum';

export interface InterestWidgetSchemaItem {
  name: string;
  type: InterestWidgetSchemaItemType;
  values: [
    {
      name: string;
      imgUrl?: string;
    }
  ];
}
