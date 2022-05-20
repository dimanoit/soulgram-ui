import { InterestType } from "./interest-type.enum";

export interface UserInterestsRequest{
    userId: string;
    interests: InterestType[];
}