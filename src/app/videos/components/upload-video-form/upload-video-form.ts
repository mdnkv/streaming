import { Component, inject, input } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { UploadVideoStore } from '../../stores/upload-video.stores';
import { UploadVideoRequest } from '../../models/videos.models';

@Component({
  imports: [MatButtonModule, MatIconModule],
  selector: 'app-upload-video-form',
  styleUrl: './upload-video-form.css',
  templateUrl: './upload-video-form.html',
})
export class UploadVideoForm {
  protected readonly uploadVideoStore = inject(UploadVideoStore)

  videoId = input.required<string>();

  doUpload(event: Event) {
    const element = event.currentTarget as HTMLInputElement;
    let fileList: FileList | null = element.files;
    if (fileList) {
      const file: File = fileList[0]
      if (file) {
        const fileName = file.name;
        const payload: UploadVideoRequest = {
          videoId: this.videoId(),
          originalFilename: fileName,
        };

        const formData = new FormData();
        formData.append('file', file);

        this.uploadVideoStore.upload(payload, formData);
      }
    }

  }
}
