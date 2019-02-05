import { Component, OnInit, Input, OnChanges } from '@angular/core';
import { TracklistService } from './tracklist.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-tracklist',
  templateUrl: './tracklist.component.html',
  styleUrls: ['./tracklist.component.css']
})
export class TracklistComponent implements OnInit {

 @Input() mbidSave: string;

  artist: string;
  track: string;
  mbidnew: any;
  listeners: any;
  url: any;


  public trackObject = {
    trackId: this.mbidnew,
    trackName: this.track,
    trackComments: this.artist,
    listeners: this.listeners,
    url: this.url
  };



  // trackObj: Itrack = {
  //   'trackId': 13,
  //   'trackName': 'Aadat',
  //   'trackComments': 'Atif Aslam'

  // };
  public trackName: string;
  public alltracks: any;
  public tracks: any;

  constructor(private _trackService: TracklistService, private route: ActivatedRoute ) { }

  ngOnInit() {
    this.trackName = this.route.snapshot.paramMap.get('value');
    this.tracks =  this._trackService.getTrackByName(this.trackName)
    .subscribe((data) => this.alltracks = data['results']['trackmatches']['track']);

  }



}
