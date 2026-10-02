import { patchState, signalStore, withMethods, withState } from '@ngrx/signals';
import { inject } from '@angular/core';
import { VideoService } from '../services/video.services';
import { UploadVideoRequest } from '../models/videos.models';
import { HttpErrorResponse } from '@angular/common/http';

interface UploadVideoState {
  isUploading: boolean
  uploadStep: string
}

const INITIAL_STATE: UploadVideoState = {
  isUploading: false,
  uploadStep: 'IDLE'
}

export const UploadVideoStore = signalStore(
  { providedIn: 'root' },
  withState(INITIAL_STATE),
  withMethods((store) => {
    const service: VideoService = inject(VideoService);

    return {
      uploadFile(url: string, formData: FormData) {
        service.uploadFile(url, formData).subscribe({
          next: (result) => {
            patchState(store, { uploadStep: 'UPLOADED', isUploading: false });
            console.log(result);
            // TODO redirect
          },
          error: (err: HttpErrorResponse) => {
            // todo error handling
            console.log(err);
          },
        });
      },
      upload(payload: UploadVideoRequest, formData: FormData) {
        patchState(store, { uploadStep: 'URL_REQUEST', isUploading: true });
        // Get presigned url
        service.getUploadUrl(payload).subscribe({
          next: (result) => {
            // Do actual uploading
            console.log(result)
            const uploadUrl = result.uploadUrl;
            patchState(store, { uploadStep: 'FILE_UPLOADING' });
            this.uploadFile(uploadUrl, formData);
          },
          error: (err: HttpErrorResponse) => {
            // todo error handling
            console.log(err);
          },
        });
      },
    };
  }),
);
