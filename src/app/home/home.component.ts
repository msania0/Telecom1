import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
    hideDiv = false;
    constructor(private router: Router) { }

  ngOnInit() {
  }
  LoginButton(Optionvalue) {
      console.log(Optionvalue);
      if (Optionvalue == "Operator") {
        //  this.router.navigate(['./billing']);
          return '/billing';
      }
      else {
         // this.router.navigate(['./spbilling']);
          return '/spbilling';
      }
  }

  shift() {
      this.hideDiv = true;
  }

}
