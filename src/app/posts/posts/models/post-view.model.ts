import { CompactPostMetadataModel } from './compact-post-metadata.model';

export interface PostViewModel {
  id: string;
  userId: string;
  liked: boolean;
  text: string;
  medias?: string[];
  hashtags: string[];
  creationDate: Date;
  metadata: CompactPostMetadataModel;
}
