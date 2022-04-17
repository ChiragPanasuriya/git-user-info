import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ConfigService {

  getListingUrl = 'https://api.github.com/search/users?q=facebook';

  constructor(private http: HttpClient) { }

  getConfig() {
    return this.http.get(this.getListingUrl);
  }

  getRepo(userid: any) {
    const repoURL = 'https://api.github.com/users/'+ userid + '/repos';
    return this.http.get(repoURL);
  }

  getRepoPR(userid: string , repoName: string) {
    const prURL = 'https://api.github.com/repos/'+userid+'/'+repoName+'/pulls?state=all';
    return this.http.get(prURL);
  }

}
