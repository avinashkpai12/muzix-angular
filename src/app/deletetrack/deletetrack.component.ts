import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { TracklistService } from '../tracklist/tracklist.service';

@Component({
  selector: 'app-deletetrack',
  templateUrl: './deletetrack.component.html',
  styleUrls: ['./deletetrack.component.css']
})
export class DeletetrackComponent implements OnInit {

  mbid1: string;

  constructor(private route: ActivatedRoute, private _service: TracklistService) { }

  ngOnInit() {

    this.mbid1 = this.route.snapshot.paramMap.get('trackId');
    console.log(this.mbid1);
    this._service.deleteTrack(this.mbid1)
    .subscribe(data => console.log(data));

  }

}
