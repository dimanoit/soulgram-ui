import { PostType } from './post-type.enum';

export interface UploadPostModel {
  userId: string;
  text: string;
  postType: PostType;
  medias?: string[];
  files?: File[];
  hashTags?: string[];
  isDraft?: boolean;
}
