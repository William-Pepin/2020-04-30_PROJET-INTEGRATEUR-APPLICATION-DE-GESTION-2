// Adding EventEmitter and Output to Emit back to the service.
import { Component, OnInit, EventEmitter, Input, Output } from '@angular/core';

// Models
import { Person } from 'src/app/models/Person';


@Component({
  selector: 'app-add-person',
  templateUrl: './add-person.component.html',
  styleUrls: ['./add-person.component.css']
})

export class AddPersonComponent implements OnInit {
  // EventEmitter as an output
  @Output() addPerson: EventEmitter<any> = new EventEmitter();

  // Property for form input.
  lastName: string;
  firstName: string;
  birthDate: Date;
  email: string;
  phoneNumber: string;
  person: Person;


  constructor() { }

  ngOnInit(): void {
  }

  /**
   * Method used when to button is clicked.
   * It creates a person and emit it to the component above him
   */
  onSubmit() {
    this.person = new Person();
    // Define person constant
    
    this.person.firstName = this.firstName;
    this.person.lastName = this.lastName;
    this.person.birthDate = new Date(this.birthDate);
    this.person.email = this.email;
    this.person.phoneNumber = this.phoneNumber
    this.person.tasks = [];
    // Emit the addPerson emitter with the newly made person.
    this.addPerson.emit(this.person);
  }
    
}
