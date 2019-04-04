import { AnswerModel } from './answer-model';
import { DataModel } from './data-model';

export interface QuestionModel extends DataModel {
    qTest: string;
    answers: AnswerModel[];
    correctAnswer: string;
}
