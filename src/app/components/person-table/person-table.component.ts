import {Component, Input} from '@angular/core';
import {AppComponent} from "../../app.component";
import {EPerson, ManyPerson, Person} from "../../shared/interfaces/person";

@Component({
  selector: 'app-person-table',
  standalone: true,
  imports: [],
  templateUrl: './person-table.component.html',
  styleUrl: './person-table.component.css'
})
export class PersonTableComponent {
  @Input() person: Person | undefined




}
