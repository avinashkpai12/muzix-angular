import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Itrack } from './track';

@Injectable({
  providedIn: 'root'
})
export class TracklistService {

  trackNew: Observable<Itrack>;

  trackName: string;
  private messageSource = new BehaviorSubject('');
  currentMessage = this.messageSource.asObservable();

  api_key = '261ceee30fd4bdfae4160cffa293c651';
  // tslint:disable-next-line:max-line-length
  private apiUrl = 'http://ws.audioscrobbler.com/2.0';

  constructor(private http: HttpClient) { }

  // changeMessage(message: string) {
  //   this.trackName = message;
  //   console.log('in service');
  //   this.messageSource.next(message);
  // }

  public getAllTracks() {
      return this.http.get('https://localhost:8098/api/v1/tracks');
  }

  public getTrackInfo(mbid: any) {
    return this.http.get(this.apiUrl + '/?method=track.getInfo&api_key=' + this.api_key + '&mbid=' + mbid + '&format=json');
  }

  getTrackByName(trackName: string) {
    return this.http.get(this.apiUrl + '/?method=track.search&track=' + trackName + '&api_key=' + this.api_key + '&format=json');
  }

  postTrack(trackObj: Itrack) {
      this.trackNew =  this.http.post<Itrack>('https://localhost:8098/api/v1/track', trackObj);
      console.log(this.trackNew);
      return this.trackNew;
  }

  deleteTrack(mbid: string) {
    return this.http.delete('https://localhost:8098/api/v1/track/' + mbid);
  }

  updateTrackComments(update: any) {
    return this.http.put('https://localhost:8098/api/v1/track/' + update.trackId + '/' + update.comments, update.comments);
  }
}
