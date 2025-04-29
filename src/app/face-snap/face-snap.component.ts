import { Component, Input, OnInit } from '@angular/core';
import { FaceSnap } from '../models/face-snap';
import { DatePipe, NgClass, NgStyle, UpperCasePipe } from '@angular/common';

@Component({
  selector: 'app-face-snap',
  imports: [
    NgStyle, NgClass, UpperCasePipe,
    DatePipe,
  ],
  templateUrl: './face-snap.component.html',
  styleUrl: './face-snap.component.scss'
})
export class FaceSnapComponent implements OnInit {
  @Input() faceSnap!: FaceSnap;
  snapButtonText!: string;
  userHasSnapped!: boolean;


  ngOnInit(): void {

    this.snapButtonText = "Oh Snap !";
    this.userHasSnapped = false
  }

  onSnap(): void {
    if (this.userHasSnapped) {
      this.unSnap();
    } else {
    this.snap();
    }
  }


  unSnap() {
    this.faceSnap.removeSnap();
    this.snapButtonText = 'Oh Snap !'
    this.userHasSnapped = false;
  }

snap(){
  this.faceSnap.addSnap();
  this.snapButtonText ='Oops , unSnap!';
  this.userHasSnapped = true;
}
}
