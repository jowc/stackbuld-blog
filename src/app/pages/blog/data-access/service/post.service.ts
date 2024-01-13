import { Injectable, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import * as models from '../../../../shared/utils/types/model';
import { environment } from '../../../../../environments/environment.development';

export interface PostParamsInterface {
  limit?: number;
  page?: number;
}

@Injectable({ providedIn: 'root' })
export class PostService {
  private readonly http = inject(HttpClient);

  getPosts(params?: PostParamsInterface) {
    return this.http.get<models.ListInterface>(
      `${environment.liveServer}/post`,
      { params: { ...params } }
    );
  }

  getPost(id: string) {
    return this.http.get<models.PostPreviewInterface>(
      `${environment.liveServer}/post/${id}`
    );
  }

  getPostComments(id: string) {
    return this.http.get<models.CommentInterface[]>(
      `${environment.liveServer}/post/${id}/comment`
    );
  }

  createPost(body: models.PostCreateInterface) {
    return this.http.post<models.PostPreviewInterface>(
      `${environment.liveServer}/post/create`,
      { ...body }
    );
  }

  createPostComment(body: models.CommentCreateInterface) {
    return this.http.post<models.CommentInterface>(
      `${environment.liveServer}/comment/create`,
      { ...body }
    );
  }

  updatePost(id: string, body: Partial<models.PostCreateInterface>) {
    return this.http.put<models.PostPreviewInterface>(
      `${environment.liveServer}/post/${id}`,
      { ...body }
    );
  }

  deletePost(id: string) {
    return this.http.delete<string>(`${environment.liveServer}/post/${id}`);
  }

  deletePostComment(id: string) {
    return this.http.delete<string>(`${environment.liveServer}/comment/${id}`);
  }
}
