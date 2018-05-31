import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css']
})
export class HomePageComponent implements OnInit {

  pic1 = '/assets/Images/FoodWorld2.jpg';
  pic2 = '/assets/Images/FoodWorldFlags.jpg';
  pic3 = '/assets/Images/TravelFood.jpg';
  pic4 = '/assets/Images/food_World.jpg';

  tr1 = '/assets/Images/tr1.jpg';
  tr2 = '/assets/Images/tr2.jpg';
  tr3 = '/assets/Images/tr3.jpg';
  tr4 = '/assets/Images/tr4.jpg';
  tr5 = '/assets/Images/tr5.jpg';
  tr6 = '/assets/Images/tr6.jpg';
  tr7 = '/assets/Images/tr7.jpg';
  tr8 = '/assets/Images/tr8.jpg';
  tr9 = '/assets/Images/tr9.jpg';

  eventMessage = '';
  constructor() { }

  onEvent(name: string) {
    this.eventMessage = name;
  }

  ngOnInit() {
  }

}
