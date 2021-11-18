import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {Post} from "../components/models/Post";

@Injectable({
  providedIn: 'root'
})
export class PostService {

  private url = "https://jsonplaceholder.typicode.com/posts"

  constructor(private httpClient: HttpClient) {
  }

  getPost(): Observable<Post[]> {
    return this.httpClient.get<Post[]>(this.url)
  }
}
