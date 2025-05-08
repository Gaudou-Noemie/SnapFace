import { map, Observable, switchMap } from 'rxjs';
import { Injectable } from "@angular/core";
import { FaceSnap } from "../models/face-snap";
import { SnapType } from "../models/snap-type.type";
import { HttpClient } from "@angular/common/http";

@Injectable({
    providedIn: 'root'
})
export class FaceSnapsService {

  constructor(private http: HttpClient) {}

    getAllFaceSnaps(): Observable<FaceSnap[]>{
        return this.http.get<FaceSnap[]>('http://localhost:3000/facesnaps');
    }

    
    getFaceSnapById(faceSnapId: string): Observable<FaceSnap> {
    return this.http.get<FaceSnap>(`http://localhost:3000/facesnaps/${faceSnapId}`)
    }

    snapFaceSnapById(faceSnapId: string, snapType: 'snap' | 'unsnap'): Observable<FaceSnap> { 
      return this.getFaceSnapById(faceSnapId).pipe(
        map(faceSnap => ({
          ...faceSnap,
          snaps: faceSnap.snaps + (snapType === 'snap' ? 1 : -1)
        })),
        switchMap(updatedFaceSnap => this.http.put<FaceSnap>(
          `http://localhost:3000/facesnaps/${faceSnapId}`,
          updatedFaceSnap)
        )
      );
    }

    addFaceSnap(formValue: { title: string; description: string; imageUrl: string; location?: string }): void {
      // const newFaceSnap = new FaceSnap(
      //   formValue.title,
      //   formValue.imageUrl,
      //   formValue.description,
      //   new Date(),
      //   0
      // );
    
      // if (formValue.location) {
      //   newFaceSnap.setLocation(formValue.location);
      // }
    
      // this.faceSnaps.push(newFaceSnap);
    }
}