import { PostType } from './post-type.enum';

export interface UploadPostModel {
  userId: string;
  text: string;
  medias?: string[];
  files?: File[];
  hashTags?: string[];
}
