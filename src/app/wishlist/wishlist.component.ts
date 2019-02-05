import { Component, OnInit } from '@angular/core';
import { TracklistService } from '../tracklist/tracklist.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-wishlist',
  templateUrl: './wishlist.component.html',
  styleUrls: ['./wishlist.component.css']
})
export class WishlistComponent implements OnInit {

  public allTracks: any;

  constructor(private _service: TracklistService) { }

  ngOnInit() {

    this._service.getAllTracks()
    .subscribe(data => {
      console.log(data);
      this.allTracks = data;
    }
    );
  }

}
