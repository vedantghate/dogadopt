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

  constructor() { }

  ngOnInit(): void {
  }

}
