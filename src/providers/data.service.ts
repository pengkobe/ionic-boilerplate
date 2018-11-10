/*
 * 后台数据请求服务
 *
 *  get 示例
    getAlarmCount(options: Object): Observable<any> {
        let params: RequestOptions = this.interceptor()
        params.search = new URLSearchParams(querystring.stringify(options))
        return this.http.get(baseUrl + 'article/getFrontArticleList', params)
    }
 * JWT 示例
     const token = window.localStorage.getItem('token')
     if (token && !opts.headers.get('Authorization')) {
        opts.headers.append('Authorization','Bearer ' + token.replace(/(^\")|(\"$)/g, ''))
     }

 * POST 示例
    getTomatoes(userID): Observable<any> {
        var creds = "userID=" + userID + "&data1=1";
        return this.http.post(this.baseUrl + '.',
        creds, this.interceptor()).map(res => res.json());
    }
 *
 */
import { Injectable } from '@angular/core';
import { HttpClient, HttpParams, HttpHeaders } from '@angular/common/http';
import { Cacheable } from 'rebirth-storage';

import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import * as querystring from 'querystring';
import { baseUrl } from '../config';

@Injectable()
export class DataService {
  baseUrl: string = baseUrl;
  headers: HttpHeaders = new HttpHeaders({
    'Content-Type': 'application/x-www-form-urlencoded',
  });

  constructor(public http: HttpClient) {}

  amapHttpUtil(url: string, options: Object): Observable<Object> {
    const params = new HttpParams({
      fromString: querystring.stringify(options),
    });
    return this.http.get(url, {
      headers: this.headers,
      params: params,
    });
  }

  @Cacheable({ pool: 'test' })
  testCachedData(): Observable<any> {
    const obs = Observable.create(observer => {
      setTimeout(() => {
        observer.next(Math.random());
        observer.complete();
      }, 10);
    });
    obs.pipe(
      map(res => {
        return res;
      })
    );
    return obs;
  }
}
