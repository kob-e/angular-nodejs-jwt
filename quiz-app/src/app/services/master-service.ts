import { Observable } from 'rxjs';

export interface IMasterService {
    set<T>(q: T): Observable<T>;
}
