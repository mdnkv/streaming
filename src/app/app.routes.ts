import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: 'videos',
    loadChildren: () =>
      import('./videos/routes/videos.routes')
      .then(e => e.VideoRoutes)
  }
];
