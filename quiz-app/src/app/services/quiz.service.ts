import { Injectable } from '@angular/core';
import { IMasterService } from './master-service';
import { Observable } from 'rxjs';
import { QuizModel } from '../models/quiz-model';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';

const ENDPOINTS = {
  POST: 'quiz'
}

@Injectable({
  providedIn: 'root'
})
export class QuizService implements IMasterService {

  constructor(private httpClient: HttpClient) {
 
  }

  set<QuizModel>(q: QuizModel): Observable<QuizModel> {
    return this.httpClient.post<QuizModel>(environment.serverUri + ENDPOINTS.POST, q);
  }
}
