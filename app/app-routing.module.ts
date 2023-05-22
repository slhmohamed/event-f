import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {CommonModule} from "@angular/common";
import {HomeComponent} from "./home/home.component";
import {AboutComponent} from "./about/about.component";
import {BlogComponent} from "./blog/blog.component";
import {BlogSingleComponent} from "./blog-single/blog-single.component";
import {ContactComponent} from "./contact/contact.component";
import {ScheduleComponent} from "./schedule/schedule.component";
import {SpeakersComponent} from "./speakers/speakers.component";
import {SignIn1Component} from "./sign-in1/sign-in1.component";
import {SignUp1Component} from "./sign-up1/sign-up1.component";
import {ProfileComponent} from "./profile/profile.component";
import {AdminDashboardComponent} from "./admin-dashboard/admin-dashboard.component";
import {AdminTablesComponent} from "./admin-tables/admin-tables.component";
import { NewEventComponent } from './dashboard/new-event/new-event.component';
import { ListEventComponent } from './dashboard/list-event/list-event.component';
import { EventsComponent } from './events/events.component';
import { ProfilComponent } from './dashboard/profil/profil.component';
import { ListMembreComponent } from './dashboard/list-membre/list-membre.component';
import { FactureComponent } from './dashboard/facture/facture.component';

const routes: Routes = [
  {path: "home", component: HomeComponent},
  {path: "", component: HomeComponent},
  {path: "about", component: AboutComponent},
  {path: "blog", component: BlogComponent},
  {path: "blog1", component: BlogSingleComponent},
  {path: "contact", component: ContactComponent},
  {path: "schedule", component: ScheduleComponent},
  {path: "speakers", component: SpeakersComponent},
  {path: "login", component: SignIn1Component},
  {path: "register", component: SignUp1Component},
  {path: "profile", component: ProfileComponent},
  {path: "dashboard", component: AdminDashboardComponent},
  {path: "tables", component: AdminTablesComponent},
  {path: "tables", component: AdminTablesComponent},
  {path: "new-event", component: NewEventComponent}, 
  {path: "list-event", component: ListEventComponent}, 
  {path: "events", component: EventsComponent}, 
  {path: "profil", component: ProfilComponent}, 
  {path: "list-membre", component: ListMembreComponent}, 
  {path: "list-membre", component: ListMembreComponent}, 
  {path: "facture", component: FactureComponent}, 




];



export const AppRoutingModule = RouterModule.forRoot(routes, { scrollPositionRestoration: 'enabled' });
