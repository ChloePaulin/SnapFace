import { DatePipe, NgClass, TitleCasePipe } from '@angular/common';
import { Component, Input, OnInit } from '@angular/core';
import { FaceSnap } from '../models/face-snap';
import { NgStyle } from "@angular/common";

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
    this.faceSnap.removeSnaps();
    this.snapped = "";
    this.snappedContent = "Oh Snap !";
  }

  snap() {
    this.faceSnap.addSnaps();
    this.snapped = "snapped";
    this.snappedContent = "Oops, unSnap !"
  }
}
