import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
interface ContactForm {

  name: string,
  checkAdul: boolean,
  department: string,
  comment: string
}

@Component({
  selector: 'app-contacts',
  templateUrl: './contacts.component.html',
  styleUrls: ['./contacts.component.scss']
})
export class ContactsComponent  {

  model= {
    name: "",
    checkAdult: true,
    department: "",
    comment: ""
  }
  onSubmit(form: NgForm): void{
    console.log('Submitted', form);
    alert('Submitted');
  }
}
