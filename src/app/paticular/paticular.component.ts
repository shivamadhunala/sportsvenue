import { Component, OnInit } from '@angular/core';
import { SearchService } from '../search.service';
import { ActivatedRoute, Params } from '@angular/router';

@Component({
  selector: 'app-paticular',
  templateUrl: './paticular.component.html',
  styleUrls: ['./paticular.component.css']
})
export class PaticularComponent implements OnInit {

   venue: any;
  urlObj: {
    location: string,
    sporttype: string,
    id: string
  };

 sampleObj: {
   booking: {},
 };

  minDate: Date;
  maxDate: Date;
  selectedDate: Date;
  constructor(private serviceObj: SearchService, private route: ActivatedRoute) {
    const currentYear = new Date().getFullYear();

    this.minDate = new Date(currentYear, new Date().getMonth(), new Date().getDay());
    this.maxDate = new Date(currentYear, new Date().getMonth(), new Date().getDay() + 10);
  }

  ngOnInit(): void {

    this.urlObj = {

      location: this.route.snapshot.params.location,

      sporttype: this.route.snapshot.params.sporttype,


      id: this.route.snapshot.params.id
    };

    this.route.params
    .subscribe(
      (params: Params) => {

        this.urlObj.location = params.location,
        this.urlObj.sporttype = params.sporttype,
        this.urlObj.id = params.id;

      }


    );


    this.serviceObj.getVenue(this.urlObj)
    .subscribe( (data) => {

      this.venue = data;
      console.log(this.venue);
    } );

  }

  evaluate() {
    console.log(this.selectedDate.getDate());
    this.sampleObj.booking['name'] = 1;
    console.log(this.sampleObj.booking);

  }

}
