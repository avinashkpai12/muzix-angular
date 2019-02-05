import { Component, OnInit } from '@angular/core';
import { TracklistService } from './tracklist/tracklist.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'MuzixApp';

  track: string;

  constructor(private router: Router, private data: TracklistService) { }

  message: any;

  ngOnInit() {
  }

  getmessage(message) {
    this.message = message;
  }

  search(value: any) {
    console.log(value);
    this.router.navigate(['/tracklist', value]);
  }

}
