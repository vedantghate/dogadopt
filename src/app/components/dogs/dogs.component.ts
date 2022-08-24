import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dogs',
  templateUrl: './dogs.component.html',
  styleUrls: ['./dogs.component.scss']
})
export class DogsComponent implements OnInit {

  dogs = [
    {"name": "Coco", "image": "https://drive.google.com/file/d/1LAJKZyfFiheYQm0TKKX0sd5LEamnXHav/view?usp=sharing", "desc": "Lörem ipsum nidoskap dosm tresk Zoombombning krore. Separat prer ongen."}
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
