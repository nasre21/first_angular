import { ActivatedRoute, Params } from '@angular/router';
import { Component, OnInit } from '@angular/core';
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
export class ContactsComponent implements OnInit {
  id!: string;
  model= {
    name: "",
    checkAdult: true,
    department: "",
    comment: ""
  }

  ngOnInit(): void{
    this.route.params.subscribe((params:Params) => {
      this.id = params['id'];
    });

  }
  constructor(private readonly route:ActivatedRoute) { }
  onSubmit(form: NgForm): void{
    console.log('Submitted', form);
    alert('Submitted');
  }
}
