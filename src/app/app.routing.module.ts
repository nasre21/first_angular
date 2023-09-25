import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ContactReactiveComponent } from './contact-reactive/contact-reactive.component';
import { ContactsComponent } from './contacts/contacts.component';
import { HomeComponent } from './home/home.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { UserComponent } from './users/user/user.component';
import { ListsComponent } from './users/lists/lists.component';
import { DetailsComponent } from './users/details/details.component';
const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  // { path: 'contact-reactive', component: ContactReactiveComponent },
  {path: 'contact-recartive', loadChildren: ()=> import('./contact-reactive/contact-reactive.module').then(m => m.ContactReactiveModule)},
  { path: 'contact-template/:id', component: ContactsComponent },
  { path: 'home', component: HomeComponent },
  { path: 'user', component: UserComponent , children: [
    {path:'lists', component: ListsComponent},
    {path:'details', component: DetailsComponent}

  ] },
  { path:'**', component: PageNotFoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule {  }
