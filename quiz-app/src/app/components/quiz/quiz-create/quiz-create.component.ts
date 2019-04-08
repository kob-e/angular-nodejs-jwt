import { Component, OnInit } from '@angular/core';
import { QuizService } from 'src/app/services/quiz.service';
import { QuizModel } from 'src/app/models/quiz-model';
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-quiz-create',
  templateUrl: './quiz-create.component.html',
  styleUrls: ['./quiz-create.component.css']
})
export class QuizCreateComponent implements OnInit {
  quiz: QuizModel;
  quizForm: FormGroup;

  constructor(
    private quizService: QuizService, 
    private activatedRoute: ActivatedRoute,
    private formBuilder: FormBuilder) {
   
  }

  ngOnInit() {
    this.activatedRoute.params.subscribe(paramsRes => {
      if (paramsRes.id) {
        const id = paramsRes.id;
        this.quiz = {
          id: id,
          name: 'test',
          desc: 'test test'
        }
      }
    })
    this.createForm();
  }

  createForm() {
    this.quizForm = new FormGroup({
      id: new FormControl(this.quiz ? this.quiz.id : ''),
      name: new FormControl(this.quiz ? this.quiz.name : '', [Validators.required]),
      desc: new FormControl(this.quiz ? this.quiz.desc : '')
    });
  }

  getQuiz() {
    return <QuizModel>this.quizForm.value;
  }

  onSubmit() {
    this.quizService.set(this.getQuiz()).subscribe(res => {
      console.log(res);
    });
  }

}
