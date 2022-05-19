import { InterestType } from './interest-type.enum';

export interface InterestWithSelection {
  interest: InterestType;
  isSelected: boolean;
}
