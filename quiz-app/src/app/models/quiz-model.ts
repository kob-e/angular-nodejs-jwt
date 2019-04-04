import { QuestionModel } from './question-model';
import { DataModel } from './data-model';

export interface QuizModel extends DataModel {
    name: string;
    desc?: string;
    questions: QuestionModel[];
}
