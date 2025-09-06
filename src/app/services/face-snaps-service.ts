import { Injectable } from '@angular/core';
import { FaceSnap } from '../models/face-snap';

@Injectable({
  providedIn: 'root'
})
export class FaceSnapsService {

  private faceSnaps:FaceSnap[] = [
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
      ).withLocation("Dans la vallée"),
    ];

    getFaceSnaps():FaceSnap[]{
      return [...this.faceSnaps];
    }

    snapFaceSnapById(faceSnapId:string):void{
      const foundSnap:FaceSnap|undefined = this.faceSnaps.find((faceSnap : FaceSnap) => faceSnap.id === faceSnapId);
      if(!foundSnap){
        throw new Error("Snap non trouvé");
      }
      foundSnap.addSnaps();
    }

    unsnapFaceSnapById(faceSnapId: string): void {
    const foundSnap = this.faceSnaps.find(faceSnap => faceSnap.id === faceSnapId);
    if (!foundSnap) {
      throw new Error('FaceSnap not found!');
    }
    foundSnap.removeSnaps();
}
}
