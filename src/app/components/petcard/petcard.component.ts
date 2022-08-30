import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-petcard',
  templateUrl: './petcard.component.html',
  styleUrls: ['./petcard.component.scss']
})
export class PetcardComponent implements OnInit {

  @Input() name: string;
  @Input() imgSrc: string;
  @Input() description: string;
  @Input() small: boolean;

  smallDesc: string;
  smallCard: string;

  constructor() { }

  ngOnInit(): void {
    this.smallCard = this.small ? '23rem' : '30rem';
    this.smallDesc = this.small ? '3rem' : '9rem';
  }

}
