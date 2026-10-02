import { Component, inject } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';

import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatSelectModule } from '@angular/material/select';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';

import { VideoVisibilityTypes } from '../../models/videos.values';
import { CreateVideoRequest } from '../../models/videos.models';
import { CreateVideoStore } from '../../stores/create-video.stores';

@Component({
  imports: [
    ReactiveFormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    MatProgressSpinnerModule,
    MatSelectModule,
  ],
  selector: 'app-create-video-page',
  styleUrl: './create-video-page.css',
  templateUrl: './create-video-page.html',
})
export class CreateVideoPage {
  protected readonly VideoVisibilityTypes = VideoVisibilityTypes;
  protected readonly createVideoStore = inject(CreateVideoStore);

  formBuilder: FormBuilder = inject(FormBuilder);
  createVideoForm: FormGroup = this.formBuilder.group({
    title: ['', [Validators.required, Validators.maxLength(255)]],
    description: ['', [Validators.required, Validators.maxLength(500)]],
    visibility: ['PUBLIC', [Validators.required]],
  });

  submit() {
    const payload: CreateVideoRequest = {
      title: this.createVideoForm.get('title')?.value,
      description: this.createVideoForm.get('description')?.value,
      visibility: this.createVideoForm.get('visibility')?.value,
    };

    this.createVideoStore.createVideo(payload);
  }

  cancel() {}
}
