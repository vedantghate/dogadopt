import { Component, OnInit } from '@angular/core';
import { EmailService } from 'src/app/services/email.service';

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
  constructor(private emailService: EmailService) { }

  ngOnInit(): void {
  }

  enquire() {
    console.log(this.name, this.phonenumber, this.query)
    var data = {
      "name": this.name,
      "number": this.phonenumber,
      "query": this.query
    }
    this.emailService.sendEmail(data).subscribe();
    this.name = "";
    this.phonenumber = "";
    this.query = "";
    alert("Enquiry Sent!");
  }
}
