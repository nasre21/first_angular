import { Component } from '@angular/core';
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
    "name": "",
    "checkAdult": true,
    "department": "",
    "comment": ""
  }
  onSubmit(values: any): void{
    console.log('Submitted', values);
    alert('Submitted');
  }
}
