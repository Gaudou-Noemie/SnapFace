export class FaceSnap {
  constructor(
    public title: string,
    public imageUrl: string,
    public description: string,
    public createdAt: Date,
    public snaps: number
    
  ) {}

  addSnap(): void {
    this.snaps++;
  }

  removeSnap(): void{
    this.snaps--;
  }
}
