import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.css']
})
export class WelcomeComponent implements OnInit{
  @ViewChild('name') nameValue!:ElementRef;
  constructor()
  {

  }

  ngOnInit(): void {
    
  }

  startQuiz()
  {
    localStorage.setItem("name",this.nameValue.nativeElement.value);
  }
}
