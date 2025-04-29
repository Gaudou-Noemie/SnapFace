import { Injectable } from "@angular/core";
import { FaceSnap } from "../models/face-snap";
import { SnapType } from "../models/snap-type.type";

@Injectable({
    providedIn: 'root'
})
export class FaceSnapsService{
    private faceSnaps: FaceSnap[] = [
        new FaceSnap(
                'Archibald',
                'https://cdn.pixabay.com/photo/2015/05/31/16/03/teddy-bear-792273_1280.jpg',
                'Mon meilleur ami depuis toujours !',
                new Date(),
                15
              ),
              new FaceSnap(
                'Three Rock Mountain',
                'https://st.depositphotos.com/1016676/2111/i/450/depositphotos_21117345-stock-photo-hikers.jpg',
                'Un endroit magnifique pour les randonnées.',
                new Date(),
                203
              ).withLocation('à la montagne'),
              new FaceSnap(
                'Un bon repas',
                'https://wtop.com/wp-content/uploads/2020/06/HEALTHYFRESH.jpg',
                'Mmmmh que c\'est bon !',
                new Date(),
                158
              ).withLocation('à la maison'),
              new FaceSnap(
                'Un magnifique Matin !',
                'https://img.freepik.com/photos-gratuite/arrangement-boissons-chaudes-hiver_23-2149188011.jpg?semt=ais_hybrid&w=740',
                'Tellement réconfortant un petit déjeuné au chaud !',
                new Date(),
                29
              ),
              new FaceSnap(
                'Mon bébé chien d\'amour',
                'https://www.shutterstock.com/image-photo/playful-puppy-chewing-bone-on-600nw-2593367523.jpg',
                'Mon adorable bébé chien avec son petit pull !',
                new Date(),
                108
              ).withLocation('dans le salon')
    ];

    getFaceSnaps(): FaceSnap[]{
        return [...this.faceSnaps];
    }
    getFaceSnapById(faceSnapId: string): FaceSnap {
      const foundFaceSnap = this.faceSnaps.find(FaceSnap => FaceSnap.id === faceSnapId);
        if (! foundFaceSnap) {
            throw new Error('FaceSnap not found');
        }
          return foundFaceSnap
    }
    snapFaceSnapById(faceSnapId: string, snapType: SnapType): void {
        const faceSnap = this.getFaceSnapById(faceSnapId);
        faceSnap.snap(snapType);
    }
}