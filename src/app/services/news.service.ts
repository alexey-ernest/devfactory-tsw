import {Injectable} from '@angular/core';
import {Http, Headers} from "@angular/http";

@Injectable()
export class NewsService {
  /**
   * Constructor
   */
  constructor(private http: Http) {
  }

  /**
   * Loads news feed.
   *
   * @return {Observable<R>}
   */
  get() {
    return this.http.get('http://10.39.157.250/?json=get_recent_posts')
      .map(res => res.json());
  }
}
