import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  imgToDisplay: string;
  indieToDisplay: string;
  indiex: number = 0;

  firstSectionImages = [
    'https://drive.google.com/file/d/1K4XVvbA_zCGQMcUcVmL2aIK38UBVk5K-/view?usp=sharing',
    'https://drive.google.com/file/d/17P9PITnDhcrHU-r8KPy0eH6xndc3rzpc/view?usp=sharing',
    'https://drive.google.com/file/d/1vYGsplvcNwfIWSbMMT2xi9GFnOQqoXPs/view?usp=sharing',
    'https://drive.google.com/file/d/1zwr0-E_EYuPdqKDUJhZGezVziSHjiML0/view?usp=sharing',
    'https://drive.google.com/file/d/1pYe8W8oo-rw-noIfddVU6Xi_jvf-qVtH/view?usp=sharing',
    'https://drive.google.com/file/d/1gHuhW7hiyWzs1Yxyq8L42Vv4774glx0V/view?usp=sharing'
  ]

  indieDogs = [
    'https://drive.google.com/file/d/16ugx7PcmU3E0EoRn68Hzt3IJ9de0ZlBm/view?usp=sharing',
    'https://drive.google.com/file/d/1jptdiQJ74uFMFc3TwiOfbL24UTrhHbjd/view?usp=sharing',
    'https://drive.google.com/file/d/1BqY2_Wb0bVDFUaWOkQ3qz1yuNjMnkP9l/view?usp=sharing',
    'https://drive.google.com/file/d/1rfO-4rzdirNArxPCkEwgGe99_FEGLJ1m/view?usp=sharing',
    'https://drive.google.com/file/d/1Uvm-eqACUcFCeeA_3nyUGwasidSTNLqf/view?usp=sharing',
    'https://drive.google.com/file/d/1vmsvrnbdiSIqeWaBJI4fuc11XB0c1gGp/view?usp=sharing',
    'https://drive.google.com/file/d/1BzBdRh4VXPmW3qHhjpYLy3WihXytP638/view?usp=sharing',
    'https://drive.google.com/file/d/1hyqKYKoAqVpiK9VVvb1LkWBXcPZxYQM-/view?usp=sharing',
    'https://drive.google.com/file/d/1pvI7n7fBYfRLrumFSZZAzHP4yB9veIiC/view?usp=sharing'
  ]

  constructor() { }

  ngOnInit(): void {
    this.swipeImages();
    this.indieToDisplay = this.getImgUrl(this.indieDogs[this.indiex]);
  }

  swipeImages() {
    let index = 0;
    this.imgToDisplay = this.getImgUrl(this.firstSectionImages[index]);
    setInterval(() => {
      index++;
      if (index == this.firstSectionImages.length)
        index = 0;
      this.imgToDisplay = this.getImgUrl(this.firstSectionImages[index]);
    }, 10000);
  }

  swipeIndie(direction: string) {
    if (direction == 'left') {
      this.indiex = this.indiex - 1 > 0 ? this.indiex - 1 : this.indieDogs.length - 1;
    }
    else {
      this.indiex = this.indiex + 1 < this.indieDogs.length ? this.indiex + 1 : 0;
    }
    this.indieToDisplay = this.getImgUrl(this.indieDogs[this.indiex]);
  }

  getImgUrl(img: string) {
    let url = img.match(/d\/([A-Za-z0-9_\-]+)/);
    let newurl = 'https://drive.google.com/uc?export=view&id=' + url![1];
    return newurl;
  }
}
