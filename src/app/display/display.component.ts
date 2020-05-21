import { Component, OnInit } from '@angular/core';
import { SearchService } from '../search.service';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { Route } from '@angular/compiler/src/core';




@Component({
  selector: 'app-display',
  templateUrl: './display.component.html',
  styleUrls: ['./display.component.css']
})
export class DisplayComponent implements OnInit {


  cities: string[] = ['HYDERABAD', 'CHENNAI', 'BENGALURU', 'MUMBAI'];
  sports: string[] = ['CRICKET', 'VOLLEYBALL', 'BADMINTON', 'BASKETBALL'];
  isFetching = false;
  selectedCity;
  urlObj: {
    location: string,
    sporttype: string
  };
  venues: any;
  constructor(private serviceObj: SearchService, private route: ActivatedRoute, private router: Router) { }

  ngOnInit() {
    this.isFetching = true;
    this.urlObj = {

    location: this.route.snapshot.params.location,

    sporttype: this.route.snapshot.params.sporttype
  };

    this.route.params
  .subscribe(
    (params: Params) => {

      this.urlObj.location = params.location;
      // this.selectedCity = this.urlObj.location.split(':')[2];
      this.urlObj.sporttype = params.sporttype;

    }
  );


    this.urlObj.location = this.urlObj.location.split(':')[1];
    this.urlObj.sporttype = this.urlObj.sporttype.split(':')[1];
    console.log('in display component .ts', this.urlObj);
    this.serviceObj.getVenues(this.urlObj)
   .subscribe( (data) => {
    this.isFetching = false;
    this.venues = data;
    // console.log(this.venues);
   } );

}

doBooking(venue) {
  // console.log(venue);
  this.router.navigate(['/findvenues', this.urlObj.location, this.urlObj.sporttype, venue._id]);

}

onSubmit(searchObj) {
  this.isFetching = true;

  console.log(searchObj);
  this.selectedCity = searchObj.location;
  console.log(this.selectedCity);
  const location = `location:${searchObj.location}`;
  const sporttype = `sporttype:${searchObj.sporttype}`;
  this.router.navigate(['/findvenues', location, sporttype]);
  this.serviceObj.getVenues(searchObj)
   .subscribe( (data) => {
    this.isFetching = false;
    this.venues = data;
    console.log(this.venues.length);
   } );

}

}
