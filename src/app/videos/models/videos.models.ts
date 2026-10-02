export interface CreateVideoRequest {
  title: string
  description: string
  visibility: string
}

export interface VideoMetadataResponse {
  id: string
  title: string
  description: string
  visibility: string
  status: string
}

export interface VideoVisibility {
  displayedName: string
  value: string
}
