import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {baseURL} from "../shared/baseurl";

@Injectable({
  providedIn: 'root'
})
export class HttpService {

  constructor(private http: HttpClient) {
  }

  public save(object: Object, url: string) {
    const headers = {'content-type': 'application/json'};
    const body = JSON.stringify(object);
    return this.http.post(baseURL + url, body, {'headers': headers})
      .subscribe(data => data);
  }

  public update(object: Object, url: string) {
    const headers = {'content-type': 'application/json'};
    const body = JSON.stringify(object);
    return this.http.put(baseURL + url, body, {'headers': headers})
      .subscribe(data => data);
  }
}
