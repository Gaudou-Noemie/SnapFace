import { Component, OnInit } from '@angular/core';
import { FaceSnap } from '../models/face-snap';
import { AsyncPipe, DatePipe, NgClass, NgIf, NgStyle, UpperCasePipe } from '@angular/common';
import { FaceSnapsService } from '../services/face-snaps-service';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { Observable, of, tap } from 'rxjs';

@Component({
  selector: 'app-single-face-snap',
  imports: [NgStyle, NgClass, UpperCasePipe, DatePipe, RouterLink, NgIf, AsyncPipe],
  templateUrl: './single-face-snap.component.html',
  styleUrl: './single-face-snap.component.scss',
})
export class SingleFaceSnapComponent implements OnInit {

  faceSnap$!: Observable<FaceSnap>;
  snapButtonText!: string;
  userHasSnapped!: boolean;

  constructor(
    private faceSnapsService: FaceSnapsService,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.prepareInterface();
    this.getFaceSnap();
  }
  onSnap(faceSnap: FaceSnap): void {
    if (this.userHasSnapped) {
      this.unSnap(faceSnap.id);
    } else {
      this.snap(faceSnap.id);
    }
  }
  snap(faceSnapId: string) {
    this.faceSnapsService.snapFaceSnapById(faceSnapId, 'snap').subscribe(updatedFaceSnap => {
      this.faceSnap$ = of(updatedFaceSnap);
      this.snapButtonText = 'Oops, unSnap!';
      this.userHasSnapped = true;
    });
  }

  unSnap(faceSnapId: string) {
    this.faceSnapsService.snapFaceSnapById(faceSnapId, 'unsnap').subscribe(updatedFaceSnap => {
      this.faceSnap$ = of(updatedFaceSnap);
      this.snapButtonText = 'Oh Snap !';
      this.userHasSnapped = false;
    });
  }

  private prepareInterface() {
    this.snapButtonText = 'Oh Snap !';
  }
  private getFaceSnap() {
    const faceSnapId = this.route.snapshot.params['id'];
    this.faceSnap$ = this.faceSnapsService.getFaceSnapById(faceSnapId);
  }

}
