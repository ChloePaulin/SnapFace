import { NgClass } from '@angular/common';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-face-snap',
  imports: [NgClass],
  templateUrl: './face-snap.html',
  styleUrl: './face-snap.css'
})

export class FaceSnap implements OnInit {
  title!: string;
  description!: string;
  createdAt!: Date;
  snaps!: number;
  // Snaps = nombre de like
  imageUrl!: string;
  snapped!: string;
  snappedContent!: string;

  ngOnInit(): void {
    this.title = 'Archibald';
    this.description = 'Mon meilleur ami depuis toujours !';
    this.createdAt = new Date();
    this.snaps = 0
    this.imageUrl = 'https://cdn.pixabay.com/photo/2015/05/31/16/03/teddy-bear-792273_1280.jpg';
    this.snappedContent = "Oh Snap !";
    this.snapped = "";
  };

  onSnap(): void {
    if (this.snapped === "") {
      this.snap();
    } else {
      if (this.snaps > 0) {
        this.unSnap();
      }
    }
  }

  unSnap() {
    this.snaps--;
    this.snapped = "";
    this.snappedContent = "Oh Snap !";
  }

  snap() {
    this.snaps++;
    this.snapped = "snapped";
    this.snappedContent = "Oops, unSnap !"
  }
}
