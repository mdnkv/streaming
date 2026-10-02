import { HttpErrorResponse } from '@angular/common/http';
import { patchState, signalStore, withMethods, withState } from '@ngrx/signals';
import { CreateVideoRequest } from '../models/videos.models';
import { inject } from '@angular/core';
import { VideoService } from '../services/video.services';

interface CreateVideoState {
  formLoading: boolean
}

const INITIAL_STATE: CreateVideoState = {
  formLoading: false
};

export const CreateVideoStore = signalStore(
  { providedIn: 'root' },
  withState(INITIAL_STATE),
  withMethods((store) => {

    const videoService = inject(VideoService)

    return {
      createVideo(payload: CreateVideoRequest) {
        patchState(store, { formLoading: true })
        videoService.createVideo(payload).subscribe({
          next: result => {
            console.log(result)
            const videoId = result.id
            patchState(store, {formLoading: false})
            // TODO redirect to upload page
          },
          error: (err: HttpErrorResponse) => {
            console.log(err)
            // TODO error handling
          }
        })
      },
    };
  }),
);
