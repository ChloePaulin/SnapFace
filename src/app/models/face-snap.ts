export class FaceSnap {
    location?: string;
    constructor(public title: string,
        public description: string,
        public imageUrl: string,
        public createdAt: Date,
        public snaps: number,
        // Snaps = nombre de like
    ) { }

    addSnaps() {
        this.snaps++;
    }

    removeSnaps() {
        this.snaps--;
    }

    setLocation(location: string): void {
        this.location = location;
    }
}