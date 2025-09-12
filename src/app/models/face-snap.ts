import { SnapType } from "./snap-type.type";

export class FaceSnap {
    location?: string;
    id!:string;
    constructor(public title: string,
        public description: string,
        public imageUrl: string,
        public createdAt: Date,
        public snaps: number,
        // Snaps = nombre de like
    ) {
        this.id = crypto.randomUUID().substring(0,8);
     }

    addSnaps() {
        this.snaps++;
    }

    removeSnaps() {
        this.snaps--;
    }

    snap(snapType:SnapType){
        if(snapType === 'snap'){
            this.addSnaps();
        } else if(snapType === 'unsnap'){
            this.removeSnaps();
        }
    }

    setLocation(location: string): void {
        this.location = location;
    }

    withLocation(location:string){
        this.setLocation(location);
        return this;
    }
}