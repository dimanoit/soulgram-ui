export interface UploadPostModel {
  userId: string;
  text: string;
  medias?: string[];
  files?: File[];
  hashTags?: string[];
}
