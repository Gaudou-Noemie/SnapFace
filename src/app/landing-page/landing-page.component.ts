import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-landing-page',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './landing-page.component.html',
  styleUrl: './landing-page.component.scss'
})
export class LandingPageComponent implements OnInit{

    userEmail!: string;

  constructor(private router: Router){ }

  ngOnInit(): void {
    
  }
  onContinue(){
    this.router.navigateByUrl('facesnaps');
  }
  onSubmitForm(): void {
    console.log(this.userEmail);
  }
}
