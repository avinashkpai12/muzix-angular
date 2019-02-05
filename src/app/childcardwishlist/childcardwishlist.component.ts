import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-childcardwishlist',
  templateUrl: './childcardwishlist.component.html',
  styleUrls: ['./childcardwishlist.component.css']
})
export class ChildcardwishlistComponent implements OnInit {

  @Input() trackObj: any;

  trackiddel: string;
  trackidupdate: string;
  count = false;
  comment: string;
  commentval: string;
  public updateObject = {
    trackId: this.trackidupdate,
    comments: this.comment
  };

  constructor(private router: Router) { }

  ngOnInit() {
  }

  deleteTrack(value) {
    this.trackiddel = value;
  }

  getcomment(value) {
    this.commentval = value;
  }
  updateTrackComments(value1, value2) {

    this.updateObject.trackId = value1;
    this.updateObject.comments = value2;
    console.log(this.updateObject);

  }

  updateCommentsField() {
    this.count = true;
  }

}
