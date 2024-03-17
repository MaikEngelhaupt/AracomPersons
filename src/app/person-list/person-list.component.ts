import { Component, OnInit, ViewChild } from '@angular/core';
import { Person } from '../person';
import { PersonService } from '../person.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-person-list',
  templateUrl: './person-list.component.html',
  styleUrls: ['./person-list.component.css']
})
export class PersonListComponent implements OnInit {
  displayedColumns: string[] = ['firstname', 'lastname', 'birthday'];

  persons: Person[] = [];

  constructor(private personService: PersonService, private router: Router) { }

  ngOnInit(): void {
    this.personService.persons.subscribe(data => {
      let withFirstNames = data.filter(person => person.firstName != null);
      this.persons = withFirstNames.sort((a,b) => a.firstName.localeCompare(b.firstName));
      this.persons.push(...data.filter(person => person.firstName == null));
    });
    this.personService.fetchPersons();

  }

  updatePersons() {
    this.personService.getPersons().subscribe(data => {
      this.persons = data.sort((a, b) => a.firstName.localeCompare(b.firstName));
    });
  }
  addPerson() {
    this.router.navigate(['/add']);
  }
}
