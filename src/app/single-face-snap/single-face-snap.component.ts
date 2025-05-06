import { Component, OnInit } from '@angular/core';
import { FaceSnap } from '../models/face-snap';
import { AsyncPipe, DatePipe, NgClass, NgIf, NgStyle, UpperCasePipe } from '@angular/common';
import { FaceSnapsService } from '../services/face-snaps-service';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { Observable } from 'rxjs';

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

  onSnap(): void {
    if (this.userHasSnapped) {
      this.unSnap();
    } else {
      this.snap();
    }
  }

  unSnap() {
    // this.faceSnapsService.snapFaceSnapById(this.faceSnap.id, 'unsnap');
    // this.snapButtonText = 'Oh Snap !';
    // this.userHasSnapped = false;
  }

  snap() {
    // this.faceSnapsService.snapFaceSnapById(this.faceSnap.id, 'snap');
    // this.snapButtonText = 'Oops , unSnap!';
    // this.userHasSnapped = true;
  }
  private prepareInterface() {
    this.snapButtonText = 'Oh Snap !';
    this.userHasSnapped = false;
  }
  private getFaceSnap() {
    const faceSnapId = this.route.snapshot.params['id'];
    this.faceSnap$ = this.faceSnapsService.getFaceSnapById(faceSnapId);
  }
}
