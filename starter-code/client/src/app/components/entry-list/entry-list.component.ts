import { Component, OnInit } from '@angular/core';
import { JournalEntriesService } from '../../services/journal-entries.service';
import {Http} from "@angular/http";
import {Router} from "@angular/router"

@Component({
  selector: 'app-entry-list',
  templateUrl: './entry-list.component.html',
  styleUrls: ['./entry-list.component.css']
})
export class EntryListComponent implements OnInit {

  entrieList:any[];

  constructor(private journalEntriesService: JournalEntriesService, private route:Router) { }

  ngOnInit() {
        this.journalEntriesService.getListEntries().subscribe(data=> {this.entrieList= data})
  }

  getToDetails(id) {
    this.route.navigate(["entries", id])
  }


  

}
