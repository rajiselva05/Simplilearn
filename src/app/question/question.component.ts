import { Component, OnInit } from '@angular/core';
import { QuestionService } from '../service/question.service';
import { interval } from 'rxjs';

@Component({
  selector: 'app-question',
  templateUrl: './question.component.html',
  styleUrls: ['./question.component.css']
})
export class QuestionComponent implements OnInit {
public name:any;
public questionList:any =[];
public currentQuestion:any=0;
public points:number=0;
counter=60;
correctAnswer:number=0;
incorrectAnswer:number=0;
interval$:any;
progress:string="0";
isQuizCompleted : boolean =false;
constructor(private questionSerivce:QuestionService){

}

ngOnInit(): void {
  this.name=localStorage.getItem("name")!;
  this.getAllQuestions();
  this.startCounter();
}
getAllQuestions(){
  this.questionSerivce.getQuestion()
  .subscribe(res=>{this.questionList=res.questions;
   
  })
}
nextQuestion(){
  this.currentQuestion++;
}
previousQuestion(){
  this.currentQuestion--;
}
answer(currentQno :number, option:any)
  {
    if(currentQno==this.questionList.length)
    {
      this.isQuizCompleted= true;
      this.stopCounter();
    }
    if(option.correct)
    {
      this.points+=10;
      this.correctAnswer++;
      setTimeout(()=>{
        this.currentQuestion++;
        this.resetCounter();
        this.getProgressPerchant();
      },1000);
     
    }
    else
    {
      setTimeout(()=>{
      this.currentQuestion++;
      this.incorrectAnswer++;
      this.resetCounter();
      this.getProgressPerchant();
      },1000);
      

      this.points-=10;
    }
  }


startCounter()
  {
    this.interval$ =interval(1000)
    .subscribe(val=>{
      this.counter--;
      if(this.counter===0)
      {
        this.currentQuestion++;
        this.counter=60;
        this.points-=10;
      }
    })
    setTimeout(()=>{
      this.interval$.unsubscribe();
    },600000);
  }

  stopCounter()
  {
    this.interval$.unsubscribe();
    this.counter=0;
  }

  resetCounter()
  {
    this.stopCounter();
    this.counter=60;
    this.startCounter();
  }


  getProgressPerchant()
  {
    this.progress =((this.currentQuestion/this.questionList.length)*100).toString();
    return this.progress;
  }
}
