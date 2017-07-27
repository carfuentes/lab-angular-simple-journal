import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { JournalEntriesService } from './services/journal-entries.service';

import { AppComponent } from './app.component';
import { EntryListComponent } from './components/entry-list/entry-list.component';

import { Routes, RouterModule } from "@angular/router";
import { SingleEntryComponent } from './components/single-entry/single-entry.component';

const routes: Routes = [
  { path: '', redirectTo: 'entries', pathMatch: 'full' },
  { path: 'entries',  component: EntryListComponent },
  { path: 'entries/:id',  component: SingleEntryComponent },
];



@NgModule({
  declarations: [
    AppComponent,
    EntryListComponent,
    SingleEntryComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot(routes)
  ],
  providers: [JournalEntriesService],
  bootstrap: [AppComponent]
})
export class AppModule { }
