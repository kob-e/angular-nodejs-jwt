import { AnswerModel } from './answer-model';
import { DataModel } from './data-model';

export interface QuestionModel extends DataModel {
    qText: string;
    answer1: string;
    answer2: string;
    answer3: string;
    answer4: string;
    correctAnswer: string;
}
