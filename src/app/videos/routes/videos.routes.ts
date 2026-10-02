import { Routes } from '@angular/router';
import { CreateVideoPage } from '../pages/create-video-page/create-video-page';
import { UploadVideoPage } from '../pages/upload-video-page/upload-video-page';

export const VideoRoutes: Routes = [
  {
    path: 'create',
    component: CreateVideoPage
  },
  {
    path: 'upload/:videoId',
    component: UploadVideoPage
  }
]
