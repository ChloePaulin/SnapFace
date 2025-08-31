import { Component, Input, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { FaceSnapComponent } from "./face-snap/face-snap";
import { FaceSnap } from './models/face-snap';
import { MatPaginatorModule, PageEvent } from '@angular/material/paginator';
import { Footer } from "./footer/footer";

@Component({
  selector: 'app-root',
  imports: [FaceSnapComponent, MatPaginatorModule, Footer],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App implements OnInit {

  myFaceSnaps!: FaceSnap[];
  displayedSnaps: FaceSnap[] = [];
  
  totalItems = 0;
  pageSize = 3;
  currentPage = 0;

  ngOnInit(): void {
    this.myFaceSnaps = [
      new FaceSnap(
        'Archibald',
        'Mon meilleur ami depuis toujours !',
        'https://cdn.pixabay.com/photo/2015/05/31/16/03/teddy-bear-792273_1280.jpg',
        new Date(),
        6
      ),
      new FaceSnap(
        'Luna',
        'Toujours prête pour l’aventure en plein air !',
        'https://cdn.pixabay.com/photo/2017/02/20/18/03/cat-2083492_1280.jpg',
        new Date(),
        155
      ),

      new FaceSnap(
        'Prendre l\'air',
        'Un bon bol d’air frais à la montagne ⛰️',
        'https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=1280&q=80',
        new Date(),
        28
      ),
    ]
    this.myFaceSnaps[2].setLocation("Dans la montagne");
    
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
