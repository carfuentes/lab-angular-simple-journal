import { Component, OnInit } from '@angular/core';
import { JournalEntriesService } from '../../services/journal-entries.service';
import {ActivatedRoute} from "@angular/router"

@Component({
  selector: 'app-single-entry',
  templateUrl: './single-entry.component.html',
  styleUrls: ['./single-entry.component.css']
})
export class SingleEntryComponent implements OnInit {

  singleEntry;
  routeId;

  constructor(private journalEntriesService: JournalEntriesService, private route:ActivatedRoute ) { }

  ngOnInit() {
   this.route.params.subscribe((params)=> {

      this.journalEntriesService.getSingleEntry(String(params["id"])).subscribe((entry)=> {

      this.singleEntry=entry;
      
    });

    })
    
  }

}
