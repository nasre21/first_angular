import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ContactReactiveComponent } from './contact-reactive.component';

const routes: Routes = [
  { path: 'contact-reactive', component: ContactReactiveComponent },

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ContactReactiveRoutingModule { }
