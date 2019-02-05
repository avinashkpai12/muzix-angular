import { Component, OnInit, Input } from '@angular/core';
import { TracklistService } from '../tracklist/tracklist.service';


@Component({
  selector: 'app-childcard',
  templateUrl: './childcard.component.html',
  styleUrls: ['./childcard.component.css']
})
export class ChildcardComponent implements OnInit {

  @Input() trackObj: any;

  trackid = null;
  buttonVal = "Save track";
  constructor() { }

  ngOnInit() {
  }

  saveTrack(value) {
    this.buttonVal = "Saved track";
    this.trackid = value;

  }

}
