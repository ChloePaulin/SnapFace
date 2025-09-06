import { Component, OnInit } from '@angular/core';
import { PageEvent } from '@angular/material/paginator';
import { FaceSnap } from '../models/face-snap';
import { Footer } from "../footer/footer";
import { FaceSnapComponent } from "../face-snap/face-snap";
import { Header } from "../header/header";
import { FaceSnapsService } from '../services/face-snaps-service';

@Component({
  selector: 'app-face-snap-list',
  imports: [Footer, FaceSnapComponent, Header],
  templateUrl: './face-snap-list.html',
  styleUrl: './face-snap-list.css'
})
export class FaceSnapList implements OnInit {
  
  myFaceSnaps!: FaceSnap[];
  displayedSnaps: FaceSnap[] = [];
  
  totalItems = 0;
  pageSize = 3;
  currentPage = 0;

  constructor(private faceSnapsService:FaceSnapsService){};

  ngOnInit(): void {
    this.myFaceSnaps = this.faceSnapsService.getFaceSnaps();
    
    this.totalItems = this.myFaceSnaps.length;
    this.fetchData(this.currentPage, this.pageSize);
  }

  fetchData(pageIndex: number, pageSize: number) {
    const start = pageIndex * pageSize;
    const end = start + pageSize;
    this.displayedSnaps = this.myFaceSnaps.slice(start, end);
  }

  onPageChanged(event: PageEvent) {
    this.currentPage = event.pageIndex;
    this.pageSize = event.pageSize;
    this.fetchData(this.currentPage, this.pageSize);
  }

  getSnapas():void{
    this.myFaceSnaps;
  }
}
