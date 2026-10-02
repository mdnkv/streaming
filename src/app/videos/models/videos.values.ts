import { VideoVisibility } from './videos.models';

export const VideoVisibilityTypes: VideoVisibility[] = [
  {
    displayedName: 'Public',
    value: 'PUBLIC',
  },
  {
    displayedName: 'Unlisted',
    value: 'UNLISTED',
  },
  {
    displayedName: 'Private',
    value: 'PRIVATE',
  }
]
