import { EventEmitter, Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable } from 'rxjs';
import { map, shareReplay } from 'rxjs/operators';
import { Person } from './person';

@Injectable({
  providedIn: 'root'
})
export class PersonService {
  private apiUrl = 'https://aracom.de/api/persons.php';

  private _persons = new BehaviorSubject<Person[]>([]);
  private dataAlreadyFetched = false;

  constructor(private http: HttpClient) { }

  personsChanged = new EventEmitter<void>();

  getPersons(): Observable<Person[]> {
    return this.http.get<any[]>(this.apiUrl).pipe(
      map(data => data.map(item => new Person(item.firstName, item.lastName, new Date(item.birthday))))
    );
  }

   fetchPersons() {
    if(!this.dataAlreadyFetched) {
      this.http.get<Person[]>(this.apiUrl).subscribe(persons => {

        const currentValue = this._persons.value;
        this._persons.next([...currentValue, ...persons]);
        // this._persons.next([...currentValue, ...persons, ...persons, ...persons, ...persons, ...persons, ...persons, ...persons, ...persons, ...persons, ...persons, ...persons, ...persons, ...persons, ...persons, ...persons, ...persons, ...persons, ...persons, ...persons, ...persons, ...persons, ...persons, ...persons, ...persons, ...persons, ...persons, ...persons, ...persons, ...persons, ...persons, ...persons, ...persons, ...persons, ...persons, ...persons, ...persons, ...persons, ...persons, ...persons, ...persons, ...persons, ...persons, ...persons, ...persons, ...persons, ...persons, ...persons, ...persons, ...persons, ...persons, ...persons, ...persons, ...persons, ...persons, ...persons, ...persons, ...persons, ...persons, ...persons, ...persons, ...persons, ...persons, ...persons, ...persons, ...persons, ...persons, ...persons, ...persons, ...persons, ...persons, ...persons, ...persons, ...persons, ...persons, ...persons, ...persons, ...persons, ...persons, ...persons, ...persons, ...persons, ...persons, ...persons, ...persons, ...persons, ...persons, ...persons, ...persons, ...persons, ...persons, ...persons, ...persons, ...persons, ...persons, ...persons, ...persons, ...persons, ...persons, ...persons, ...persons, ...persons, ...persons, ...persons, ...persons, ...persons, ...persons, ...persons, ...persons, ...persons, ...persons, ...persons, ...persons, ...persons, ...persons, ...persons, ...persons, ...persons, ...persons, ...persons, ...persons, ...persons, ...persons, ...persons, ...persons, ...persons, ...persons, ...persons, ...persons, ...persons, ...persons, ...persons, ...persons, ...persons, ...persons, ...persons, ...persons, ...persons, ...persons, ...persons, ...persons, ...persons, ...persons, ...persons, ...persons, ...persons, ...persons, ...persons, ...persons, ...persons, ...persons, ...persons, ...persons, ...persons, ...persons, ...persons, ...persons, ...persons, ...persons, ...persons, ...persons, ...persons, ...persons, ...persons, ...persons, ...persons, ...persons, ...persons, ...persons, ...persons, ...persons, ...persons, ...persons, ...persons, ...persons, ...persons, ...persons, ...persons, ...persons, ...persons, ...persons, ...persons, ...persons]);

      });
      this.dataAlreadyFetched = true;
    }
  }

  addPerson(person: Person) {
    const currentValue = this._persons.value;
    this._persons.next([...currentValue, person]);
    this.personsChanged.emit();
  }

  get persons() {
    return this._persons.asObservable();
  }
}
