import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cats',
  templateUrl: './cats.component.html',
  styleUrls: ['./cats.component.scss']
})
export class CatsComponent implements OnInit {

  cats = [
    {"name": "Oreo", "image": "https://drive.google.com/file/d/1bzaQMQxjv81RuFxHP7MsmZRuci58z9Ae/view?usp=sharing", "desc": "Lörem ipsum nidoskap dosm tresk Zoombombning krore. Separat prer ongen."}
  ]

  constructor() { }

  ngOnInit(): void {
  }

  getImgUrl(img: string) {
    let url = img.match(/d\/([A-Za-z0-9_\-]+)/);
    let newurl = 'https://drive.google.com/uc?export=view&id=' + url![1];
    return newurl;
  }

  
}
