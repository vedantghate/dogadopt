import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {

  name: string = "";
  phonenumber: string = "";
  query: string = "";
  bool: boolean = true;
  constructor() { }

  ngOnInit(): void {
  }

  enquire() {
    console.log(this.name, this.phonenumber, this.query)
    this.name = "";
    this.phonenumber = "";
    this.query = "";
    alert("Enquiry Sent!");
  }
}
