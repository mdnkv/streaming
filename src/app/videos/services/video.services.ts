import { inject, Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

import { environment } from '../../../environments/environment';
import { CreateVideoRequest, VideoMetadataResponse } from '../models/videos.models';

@Injectable({
  providedIn: 'root',
})
export class VideoService {
  http: HttpClient = inject(HttpClient)
  serverUrl: string = environment.serverUrl

  createVideo(payload: CreateVideoRequest): Observable<VideoMetadataResponse>{
    return this.http.post<VideoMetadataResponse>(`${this.serverUrl}/videos`, payload)
  }

}
