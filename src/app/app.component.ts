import { Component, OnInit } from '@angular/core';
import { FaceSnapComponent } from './face-snap/face-snap.component';
import { FaceSnap } from './models/face-snap';

@Component({
  selector: 'app-root',
  imports: [FaceSnapComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent implements OnInit {
  
  faceSnaps!: FaceSnap[];

  ngOnInit(): void {
    this.faceSnaps = [
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
      ),new FaceSnap(
        'Un bon repas',
        'https://wtop.com/wp-content/uploads/2020/06/HEALTHYFRESH.jpg',
        'Mmmmh que c\'est bon !',
        new Date(),
        158
      ),
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
      )
    ];
    

    this.faceSnaps[1].setLocation('à la montagne');
  }
}
