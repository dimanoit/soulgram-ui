export interface AggregatedInterests {
  name: string;
  items: AggregatedInterestItem[];
}

export interface AggregatedInterestItem {
  name: string;
  values: AggregatedInterestItemValue[];
}

export interface AggregatedInterestItemValue {
  name: string;
  imgUrl?: string;
}
