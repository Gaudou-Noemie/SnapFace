import { map, Observable, switchMap } from 'rxjs';
import { Injectable } from "@angular/core";
import { FaceSnap } from "../models/face-snap";
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

    addFaceSnap(formValue: { title: string, description: string, imageUrl: string, location?: string }): Observable<FaceSnap> {
      return this.getAllFaceSnaps().pipe(
           map(facesnaps => [...facesnaps].sort((a, b) => Number(a.id) - Number(b.id))),
           map(sortedFacesnaps => sortedFacesnaps[sortedFacesnaps.length - 1]),
           map(previousFacesnap => ({
              ...formValue,
              snaps: 0,
              createdAt: new Date(),
              id: previousFacesnap.id + 1
          })),
          switchMap(newFacesnap => this.http.post<FaceSnap>(
              'http://localhost:3000/facesnaps',
              newFacesnap)
          )
      );
    }


    deleteSnapFace(faceSnapId: number): Observable<any> {
      return this.http.delete(`http://localhost:3000/facesnaps/${faceSnapId}`);
      ;
    }
}