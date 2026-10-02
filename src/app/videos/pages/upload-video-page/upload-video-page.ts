import { Component, inject, input } from '@angular/core';
import { UploadVideoStore } from '../../stores/upload-video.stores';
import { UploadVideoProgress } from '../../components/upload-video-progress/upload-video-progress';
import { UploadVideoForm } from '../../components/upload-video-form/upload-video-form';

@Component({
  imports: [UploadVideoProgress, UploadVideoForm],
  selector: 'app-upload-video-page',
  styleUrl: './upload-video-page.css',
  templateUrl: './upload-video-page.html',
})
export class UploadVideoPage {
  protected readonly uploadVideoStore = inject(UploadVideoStore)
  videoId = input.required<string>();
}
