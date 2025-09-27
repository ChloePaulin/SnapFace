import { TitleCasePipe } from '@angular/common';
import { Component, Input } from '@angular/core';
import { FaceSnap } from '../models/face-snap';
import { Router } from '@angular/router';

@Component({
  selector: 'app-face-snap',
  imports: [TitleCasePipe],
  templateUrl: './face-snap.html',
  styleUrl: './face-snap.css'
})

export class FaceSnapComponent {

  @Input() faceSnap!: FaceSnap;

  constructor(private router:Router) { };

  onViewFaceSnap() {
    this.router.navigateByUrl(`facesnaps/${this.faceSnap.id}`)
  }
}
