import { DatePipe, NgClass, TitleCasePipe } from '@angular/common';
import { Component, Input, OnInit } from '@angular/core';
import { FaceSnap } from '../models/face-snap';
import { NgStyle } from "@angular/common";
import { FaceSnapsService } from '../services/face-snaps-service';

@Component({
  selector: 'app-face-snap',
  imports: [NgClass, DatePipe, NgStyle, TitleCasePipe],
  templateUrl: './face-snap.html',
  styleUrl: './face-snap.css'
})

export class FaceSnapComponent implements OnInit {

  @Input() faceSnap!: FaceSnap;
  snapped!: string;
  snappedContent!: string;

  constructor(private faceSnapService:FaceSnapsService){};

  ngOnInit(): void {
    this.snappedContent = "Oh Snap !";
    this.snapped = "";
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
    this.faceSnapService.unsnapFaceSnapById(this.faceSnap.id);
    this.snapped = "";
    this.snappedContent = "Oh Snap !";
  }

  snap() {
    this.faceSnapService.snapFaceSnapById(this.faceSnap.id);
    this.snapped = "snapped";
    this.snappedContent = "Oops, unSnap !"
  }
}
