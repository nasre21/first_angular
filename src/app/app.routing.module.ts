import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ContactReactiveComponent } from './contact-reactive/contact-reactive.component';
import { ContactsComponent } from './contacts/contacts.component';
import { HomeComponent } from './home/home.component';
const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'contact-reactive', component: ContactReactiveComponent },
  { path: 'contact-template', component: ContactsComponent },
  { path: 'home', component: HomeComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }
