import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { FaceSnapComponent } from "./face-snap/face-snap";
import { FaceSnap } from './models/face-snap';

@Component({
  selector: 'app-root',
  imports: [FaceSnapComponent],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App implements OnInit {
  mySnap!: FaceSnap;
  mySnap2!: FaceSnap;
  mySnap3!: FaceSnap;

  ngOnInit(): void {
    this.mySnap = new FaceSnap(
      'Archibald',
      'Mon meilleur ami depuis toujours !',
      'https://cdn.pixabay.com/photo/2015/05/31/16/03/teddy-bear-792273_1280.jpg',
      new Date(),
      6
    )
    this.mySnap2 = new FaceSnap(
      'Luna',
      'Toujours prête pour l’aventure en plein air !',
      'https://cdn.pixabay.com/photo/2017/02/20/18/03/cat-2083492_1280.jpg',
      new Date(),
      15
    );

    this.mySnap3 = new FaceSnap(
      'Respire',
      'Un bon bol d’air frais à la montagne ⛰️',
      'https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=1280&q=80',
      new Date(),
      28
    );
  }
}
