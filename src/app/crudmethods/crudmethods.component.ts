import { Component, OnInit, OnChanges, SimpleChanges, Input } from '@angular/core';
import { TracklistService } from '../tracklist/tracklist.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-crudmethods',
  templateUrl: './crudmethods.component.html',
  styleUrls: ['./crudmethods.component.css']
})
export class CrudmethodsComponent implements OnInit, OnChanges {

  artist: string;
  track: string;
 @Input() mbidsave: any;
 @Input() mbiddelete: any;
 @Input() updateObj: any;
  listeners: any;
  url: any;

  public trackObject = {
    trackId: this.mbidsave,
    trackName: this.track,
    trackComments: this.artist,
    listeners: this.listeners,
    url: this.url
  };

  constructor(private _service: TracklistService, private router: Router) { }

  ngOnInit() {

  }

  ngOnChanges(changes: SimpleChanges) {

    this.saveTrack(this.mbidsave);
    this.deleteTrack(this.mbiddelete);
    this.updateComments(this.updateObj);

  }

  saveTrack(value) {
    this._service.getTrackInfo(value).subscribe(data => {
      this.trackObject.trackId = value;
      this.trackObject.trackName = data['track']['name'];
      this.trackObject.trackComments = data['track']['artist']['name'];
      this.trackObject.listeners = data['track']['listeners'];
      this.trackObject.url = data['track'].album.image[3]['#text'];
      // saving the track
      console.log(data);
      this._service
        .postTrack(this.trackObject)
        .subscribe(data1 => console.log(data1));
    });
  }


  deleteTrack(value) {
    this._service.deleteTrack(value)
    .subscribe(data => console.log(data));

  }

  updateComments(value: any) {
    console.log("################33333");
    this._service.updateTrackComments(value)
    .subscribe(data => console.log(data));
  }

}
