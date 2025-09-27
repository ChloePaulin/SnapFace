import { DatePipe, NgClass, TitleCasePipe } from '@angular/common';
import { Component, Input, OnInit } from '@angular/core';
import { FaceSnap } from '../models/face-snap';
import { NgStyle } from "@angular/common";
import { FaceSnapsService } from '../services/face-snaps-service';
import { ActivatedRoute, RouterLink } from '@angular/router';

@Component({
  selector: 'app-single-face-snap',
  imports: [NgClass, DatePipe, NgStyle, TitleCasePipe, RouterLink],
  templateUrl: './single-face-snap.html',
  styleUrl: './single-face-snap.css'
})

export class SingleFaceSnapComponent implements OnInit {

  @Input() faceSnap!: FaceSnap;
  snapped!: string;
  snappedContent!: string;

  constructor(private faceSnapService: FaceSnapsService, private route: ActivatedRoute) { };

  ngOnInit(): void {
    this.prepareInterface();
    this.getFaceSnap();
  };

  onSnap(): void {
    if (this.snapped === "") {
      this.snap();
    } else {
      if (this.faceSnap.snaps > 0) {
        this.unSnap();
      }
    }
  }

  unSnap() {
    this.faceSnapService.snapFaceSnapById(this.faceSnap.id, 'unsnap');
    this.snapped = "";
    this.snappedContent = "Oh Snap !";
  }

  snap() {
    this.faceSnapService.snapFaceSnapById(this.faceSnap.id, 'snap');
    this.snapped = "snapped";
    this.snappedContent = "Oops, unSnap !"
  }

  private getFaceSnap() {
    const faceSnapId = this.route.snapshot.params['id'];
    this.faceSnap = this.faceSnapService.getFaceSnapById(faceSnapId);
  }

  private prepareInterface() {
    this.snappedContent = "Oh Snap !";
    this.snapped = "";
  }
}
