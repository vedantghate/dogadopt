import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cats',
  templateUrl: './cats.component.html',
  styleUrls: ['./cats.component.scss']
})
export class CatsComponent implements OnInit {

  cats = [
    {
      name: 'Bagira',
      image: 'https://drive.google.com/file/d/1rTUbe6huhHaIDf4WT3gcjGnKy9lCUWEg/view?usp=sharing',
      desc: 'Bagira',
      age: '',
    },
    {
      name: 'Dana',
      image: 'https://drive.google.com/file/d/1rTmZS-aoQY8CIMX-e1IXeki5J-gzmSb3/view?usp=sharing',
      desc: 'Dana',
      age: '',
    },
    {
      name: 'Jaee and Juee',
      image: 'https://drive.google.com/file/d/1SCcJScnZQmRvUHSVaW3K5rQDuNe7uDe6/view?usp=sharing',
      desc: 'Jaee and Juee',
      age: '',
    },
    {
      name: 'Pankhudi',
      image: 'https://drive.google.com/file/d/1rHZUcBF14NXYie76TEq_WtmQkI4Y98GY/view?usp=sharing',
      desc: 'Pankhudi',
      age: '',
    },
    {
      name: 'Pinky',
      image: 'https://drive.google.com/file/d/1rDD61FT7tNAddlz5_sGcbX4LaE_S2xfz/view?usp=sharing',
      desc: 'Pinky',
      age: '',
    },
    {
      name: 'Balu',
      image: 'https://drive.google.com/file/d/1B1wE4BwqZmgKMyxTa7ddfRGKMiYj6j_m/view?usp=sharing',
      desc: 'Balu',
      age: '',
    },
    {
      name: 'Kalu',
      image: 'https://drive.google.com/file/d/1BZ4-xID8d9pGDNuA43OuI7mrPxAdOp_Y/view?usp=sharing',
      desc: 'Kalu',
      age: '',
    },
    {
      name: 'Mani',
      image: 'https://drive.google.com/file/d/1C0dX8cI0TB_lNeqJvKonJ4zUBlIhIPVs/view?usp=sharing',
      desc: 'Mani',
      age: '',
    },
    {
      name: 'Piyu',
      image: 'https://drive.google.com/file/d/1COfJKrpEJmEgS3rVDoiHF4ZOafOEKyGt/view?usp=sharing',
      desc: 'Piyu',
      age: '',
    },
    {
      name: 'Babli',
      image: 'https://drive.google.com/file/d/1eLOJVtdciVGpq91fhzN-m--cFXLMhsYq/view?usp=sharing',
      desc: 'Babli',
      age: '',
    },
    {
      name: 'Tony',
      image: 'https://drive.google.com/file/d/1e1QsHVoh7tPyv2VB2VRC8H538MevNOoB/view?usp=sharing',
      desc: 'Tony',
      age: '',
    },
    {
      name: 'Olive',
      image: 'https://drive.google.com/file/d/1bVltf5qYqzpP6DWbJSysFFpQO2GTNsy5/view?usp=sharing',
      desc: 'Olive',
      age: '',
    },
    {
      name: 'Snowy & Goldie',
      image: 'https://drive.google.com/file/d/19J3hCHlh1WOC4n1OpgU2aJhuDPNaYq9n/view?usp=sharing',
      desc: 'Snowy & Goldie',
      age: '',
    },
    {
      name: 'Cookie',
      image: 'https://drive.google.com/file/d/17b2pYaV1pWXVc_KT13gs0XxkvGLrQ9iP/view?usp=sharing',
      desc: 'Cookie',
      age: '',
    },
    {
      name: 'Oreo',
      image: 'https://drive.google.com/file/d/17TNyjU75_38tVQIOF3TZBvV2HLvSqO0G/view?usp=sharing',
      desc: 'Oreo',
      age: '',
    },
    {
      name: 'Hazel',
      image: 'https://drive.google.com/file/d/1iAQ-nCD6anlbg9gFGCkXp8NrO8zfnR7F/view?usp=sharing',
      desc: 'Hazel',
      age: '',
    },
    {
      name: 'Custard',
      image: 'https://drive.google.com/file/d/1CAOGmzAIdMl4glYN5V2sDlgLccUZqtvd/view?usp=sharing',
      desc: 'Custard',
      age: '',
    },
    {
      name: 'Sweety',
      image: 'https://drive.google.com/file/d/1UpFjRhaUDRyDqcCsiGREHjAPPCLyyMin/view?usp=sharing',
      desc: 'Sweety',
      age: '',
    },
    {
      name: 'Golu',
      image: 'https://drive.google.com/file/d/1ToPCkYY5jeXlflKH8wB59Rci9DX4F8gw/view?usp=sharing',
      desc: 'Golu',
      age: '',
    },
    {
      name: 'Jimmy',
      image: 'https://drive.google.com/file/d/1tzkQAF_UZkGHekRli7-To4QvXLucVx4B/view?usp=sharing',
      desc: 'Custard',
      age: '',
    },
    {
      name: 'Julie',
      image: 'https://drive.google.com/file/d/1xo5gIz8Z4-E0ICDza500ulV_WCHo5GOm/view?usp=sharing',
      desc: 'Julie',
      age: '',
    },
    {
      name: 'Doya',
      image: 'https://drive.google.com/file/d/1ecW3cNSg18F0LSGYvI_zNcrhajoJG4-s/view?usp=sharing',
      desc: 'Doya',
      age: '',
    },
    {
      name: 'Kaju',
      image: 'https://drive.google.com/file/d/1i5uvhj1jurTZV14AId7F9mnEyXMqNoub/view?usp=sharing',
      desc: 'Kaju',
      age: '',
    },
    {
      name: 'Mao',
      image: 'https://drive.google.com/file/d/1FcTKacpE9Yxa-uwWvhqsqXkJbw7SW6wr/view?usp=sharing',
      desc: 'Mao',
      age: '',
    },
    {
      name: 'Jio',
      image: 'https://drive.google.com/file/d/1VZcLgmvwmq12NYKWEeh6xoDRZkZL_jB1/view?usp=sharing',
      desc: 'Jio',
      age: '',
    },
    {
      name: 'Lexi - Grey',
      image: 'https://drive.google.com/file/d/1al-GK11HxuO45SzdMMC0161FksUZU8M_/view?usp=sharing',
      desc: 'Lexi - Grey',
      age: '',
    },
    {
      name: 'Momo',
      image: 'https://drive.google.com/file/d/1Weh-3VtVvy4IH7FhlpngDAK8TAKMILxz/view?usp=sharing',
      desc: 'Momo',
      age: '',
    },
    {
      name: 'Rinky - Grey',
      image: 'https://drive.google.com/file/d/1dBwOM-DDbvf-azBvsbPm4DNaKDHXaCaa/view?usp=sharing',
      desc: 'Rinky - Grey',
      age: '',
    },
    {
      name: 'Rosy',
      image: 'https://drive.google.com/file/d/1FVLK0WEFF49GOWzgOnoABzsbvmbz9PfW/view?usp=sharing',
      desc: 'Rosy',
      age: '',
    },
    {
      name: 'Sheru',
      image: 'https://drive.google.com/file/d/1QIvq6mBA4SOK5QwnGMjJ9EB-Zy9S9bg-/view?usp=sharing',
      desc: 'Sheru',
      age: '',
    },
    {
      name: 'Snowball',
      image: 'https://drive.google.com/file/d/1YwiqJ9dvkJVcLB2olTENdPlgcGZmnFT0/view?usp=sharing',
      desc: 'Snowball',
      age: '',
    },
    {
      name: 'Manu',
      image: 'https://drive.google.com/file/d/1wsEpkrXA0pleUBJBvlqOJvLejVFqYfzU/view?usp=sharing',
      desc: 'Manu',
      age: '',
    },
    {
      name: 'Misty',
      image: 'https://drive.google.com/file/d/1a4IZbol1-31vXklgSTM2zvNK66O6Of5F/view?usp=sharing',
      desc: 'Misty',
      age: '',
    },
    {
      name: 'Jaggery',
      image: 'https://drive.google.com/file/d/1ufRjomPlIn-W-Ka2jUtAvNecFpT3HgkS/view?usp=sharing',
      desc: 'Jaggery',
      age: '',
    },
    {
      name: 'Angela',
      image: 'https://drive.google.com/file/d/1YntiGVtMPI-oguF_9u4r6WB5C6kdeiYO/view?usp=sharing',
      desc: 'Angela',
      age: '',
    },
    {
      name: 'MissMich',
      image: 'https://drive.google.com/file/d/1TDbyuBBhfxsz2gHkGcooJ5aqpEkIu6Gz/view?usp=sharing',
      desc: 'MissMich',
      age: '',
    },
    {
      name: 'Mr. Button',
      image: 'https://drive.google.com/file/d/1oktM8x7TlaBI6X6rBNVVJsnQEWGMhwfg/view?usp=sharing',
      desc: 'Mr. Button',
      age: '',
    },
    {
      name: 'Boomer',
      image: 'https://drive.google.com/file/d/1AH_llYsTFSZ0bpJeFMwTpn1TBzQ6uUDs/view?usp=sharing',
      desc: 'Boomer',
      age: '',
    },
    {
      name: 'Chikita',
      image: 'https://drive.google.com/file/d/1ia2dzUUIBaQ3tNrrbdlOVIbpOru64807/view?usp=sharing',
      desc: 'Chikita',
      age: '',
    },
    {
      name: 'Juno',
      image: 'https://drive.google.com/file/d/1eBd7epGi_V7MGOk4rQE_Ewa0G4gOivMR/view?usp=sharing',
      desc: 'Juno',
      age: '',
    },
    {
      name: 'Lily',
      image: 'https://drive.google.com/file/d/1Q_ofoBkQJ-xO_JfO_-WABUm4tUKgc02g/view?usp=sharing',
      desc: 'Lily',
      age: '',
    },
    {
      name: 'Joyo',
      image: 'https://drive.google.com/file/d/1CueGNBbH--9spQ7fehbyOEU-LklnbwbQ/view?usp=sharing',
      desc: 'Joyo',
      age: '',
    },
    {
      name: 'Tony & Cutoo',
      image: 'https://drive.google.com/file/d/1y9wJxgTWvYSeN5B5S-CMOGseK1D8Tavf/view?usp=sharing',
      desc: 'Tony & Cutoo',
      age: '',
    },
  ];

  constructor() { }

  ngOnInit(): void {
  }

  getImgUrl(img: string) {
    let url = img.match(/d\/([A-Za-z0-9_\-]+)/);
    let newurl = 'https://drive.google.com/uc?export=view&id=' + url![1];
    return newurl;
  }

  
}
	
	
	
