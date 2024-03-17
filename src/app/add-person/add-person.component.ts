import { Component, Inject } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { PersonService } from '../person.service';
import { Person } from '../person';
import { MAT_DATE_LOCALE } from '@angular/material/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-person',
  templateUrl: './add-person.component.html',
  styleUrls: ['./add-person.component.css']
})
export class AddPersonComponent {
  personForm = this.fb.group({
    firstName: ['', Validators.required],
    lastName: ['', Validators.required],
    birthday: []
  });
  startDate: Date = new Date();

  constructor(private fb: FormBuilder, private personService: PersonService, private router: Router) {

  }

  onSubmit() {
    const newPerson = this.personForm.value;
    this.personService.addPerson(newPerson as unknown as Person);
    this.router.navigate(['']);
  }
}
