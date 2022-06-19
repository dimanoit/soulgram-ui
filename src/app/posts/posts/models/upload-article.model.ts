export interface UploadArticleModel {
  userId: string;
  title: string;
  text: string;
  hashTags?: string[];
}
