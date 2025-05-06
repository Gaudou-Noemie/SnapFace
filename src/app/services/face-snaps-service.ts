import { Observable } from 'rxjs';
import { Injectable } from "@angular/core";
import { FaceSnap } from "../models/face-snap";
import { SnapType } from "../models/snap-type.type";
import { HttpClient } from "@angular/common/http";

@Injectable({
    providedIn: 'root'
})
export class FaceSnapsService {

  constructor(private http: HttpClient) {}

    faceSnaps: FaceSnap[] = [];

    getAllFaceSnaps(): Observable<FaceSnap[]>{
        return this.http.get<FaceSnap[]>('http://localhost:3000/facesnaps');
    }
    
    getFaceSnapById(faceSnapId: number): Observable<FaceSnap> {
    return this.http.get<FaceSnap>(`http://localhost:3000/facesnaps/${faceSnapId}`)
    }
    snapFaceSnapById(faceSnapId: string, snapType: SnapType): void {
        // const faceSnap = this.getFaceSnapById(faceSnapId);
        // faceSnap.snap(snapType);
    }

    addFaceSnap(formValue: { title: string; description: string; imageUrl: string; location?: string }): void {
      const newFaceSnap = new FaceSnap(
        formValue.title,
        formValue.imageUrl,
        formValue.description,
        new Date(),
        0
      );
    
      if (formValue.location) {
        newFaceSnap.setLocation(formValue.location);
      }
    
      this.faceSnaps.push(newFaceSnap);
    }
}