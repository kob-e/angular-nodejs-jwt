import { Component, OnInit } from '@angular/core';
import { QuizService } from 'src/app/services/quiz.service';
import { QuizModel } from 'src/app/models/quiz-model';
import { FormGroup, FormControl, Validators, FormBuilder, FormArray } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { QuestionModel } from 'src/app/models/question-model';

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
    const q = <QuestionModel>{
      answer1: 'Fine',
      answer2: 'OK',
      answer3: 'Good',
      answer4: 'Hollyweed',
      correctAnswer: 'answer1',
      id: 'axdfwr32jkrol3r2',
      qText: 'how are you dude'
    }
    this.quizForm = this.formBuilder.group({
      id: [this.quiz ? this.quiz.id : ''],
      name: [this.quiz ? this.quiz.name : '', [Validators.required]],
      desc: [this.quiz ? this.quiz.desc : ''],
      questions: this.formBuilder.array([
        this.createQuestion(q)
      ])
    });
  }

  addQuestion() {
    const qArray = this.quizForm.controls.questions as FormArray;
    qArray.push(this.createQuestion());
  }

  createQuestion(q?: QuestionModel) {
    return this.formBuilder.group({
      qText: [q ? q.qText : ''],
      answer1: [q ? q.answer1 : ''],
      answer2: [q ? q.answer2 : ''],
      answer3: [q ? q.answer3 : ''],
      answer4: [q ? q.answer4 : ''],
      correctAnswer: [q ? q.correctAnswer : '']
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
