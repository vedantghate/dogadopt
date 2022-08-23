import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})


export class HeaderComponent implements OnInit {

  isHome = this.router.url == "/home";
  isDogs = this.router.url == "/dogs";
  isCats = this.router.url == "/cats";
  constructor(private router: Router) { }

  ngOnInit(): void {
    
  }

  scrollToContact(){
    document.getElementById("footer")?.scrollIntoView({
      behavior: 'smooth',
      block: 'start',
      inline: 'nearest'
    })
  }

  navigate(page: string){
    var myurl = '/'+page;
    this.router.navigateByUrl(myurl);
  }

}
