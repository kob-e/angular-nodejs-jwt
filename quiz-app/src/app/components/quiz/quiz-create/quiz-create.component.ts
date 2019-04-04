import { Component, OnInit } from '@angular/core';
import { QuizService } from 'src/app/services/quiz.service';
import { QuizModel } from 'src/app/models/quiz-model';

@Component({
  selector: 'app-quiz-create',
  templateUrl: './quiz-create.component.html',
  styleUrls: ['./quiz-create.component.css']
})
export class QuizCreateComponent implements OnInit {
  quiz: QuizModel;
  constructor(private quizService: QuizService) {
    this.quiz = {
      id: '',
      name: '',
      questions: []
    };
   }

  ngOnInit() {
  }

  create() {
    this.quizService.set(this.quiz).subscribe(res => {
      console.log(res);
    });
  }

}
