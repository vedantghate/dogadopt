import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dogs',
  templateUrl: './dogs.component.html',
  styleUrls: ['./dogs.component.scss']
})
export class DogsComponent implements OnInit {

  dogs = [
    {
      name: 'ROXY',
      image: 'https://drive.google.com/file/d/1WHWTtliaHRHOPi1eApe2yOJ_K7RjzqiY/view?usp=sharing',
      desc:
        'ROXY was Abandoned by her owner on the streets of Phase 3. And we started feeding her and taking care of her on streets itself, and she got attached to a security person who volunteered in feeding her and taking care of her. But within no time he also abandoned her. Poor Girl is left all alone on the streets.\n' +
        'Name- ROXY\n' +
        'AGE- 1 Year\n' +
        'Breed- Rottweiler Mix breed\n' +
        'Gender- Female\n' +
        'Neutered- Yes\n' +
        'Vaccinated- Yes\n' +
        'Dewormed- Yes\n' +
        'ROXY is looking for her forever home, where she can get all the love she deserves. Please come forward and shower all your love on ROXY and adopt her.\n',
      age: '',
    },
    {
      name: 'Puppy',
      image: 'https://drive.google.com/file/d/1jm398PnYOQoGlqvadETuYDmqi5vGb3pd/view?usp=sharing',
      desc:
        'Puppy cutie was found abandoned alone in a society in Pimple gurav. Mother and siblings were nowhere to be found. She was unlikely to survive on her own without a mother, so she’s currently being fostered by a family.',
      age: '',
    },
    {
      name: 'Daisy',
      image: 'https://drive.google.com/file/d/1NgRilmxRMAv3JpbGuFVnzrPByTZ5uG2H/view?usp=sharing',
      desc:
        'Daisy was found on the streets along with her 2 sisters Jenny and MINI.\n' +
        'Unfortunately, all three fell ill and Jenny and Mini couldn’t survive. Daisy was\n' +
        'left all alone. She stayed with me till she was 4 months old and then Daisy got\n' +
        'adopted in a nice family. Unfortunately, they were not able to take care of her\n' +
        'and hence, they returned her back to me. She is now 10 months old and a very\n' +
        'cuddly, happy dog.\n' +
        'Name- DAISY\n' +
        'AGE- 10 months\n' +
        'Breed- Indian\n' +
        'Gender- Female\n' +
        'Neutered- Yes\n' +
        'Vaccinated- Yes\n' +
        'Dewormed- Yes\n' +
        'DAISY is looking for her forever home, where she can get all the love she\n' +
        'deserves. Please come forward and shower all your love on DAISY and adopt\n' +
        'her.',
      age: '',
    },
    {
      name: 'Pepsi',
      image: 'https://drive.google.com/file/d/1cbbPj7aFqsoqBexdPbfKRzPyAhpFHTGA/view?usp=sharing',
      desc:
        'Pepsi was found roaming on the streets alone when she was just\n' +
        '25 days old. We rescued her from the streets and kept her with\n' +
        'us. She had suffered skin infection and now is perfectly beautiful\n' +
        'and healthy and is ready to go to her forever home.\n' +
        'Name- Pepsi\n' +
        'Age-4 months\n' +
        'Vaccination- Fully Vaccinated\n' +
        'Deworming-Done\n' +
        'Location- Pune\n' +
        'Pepsi is a very cuddly and a perfect house dog. She is a little\n' +
        'bundle of joy and will definately fill your home with happiness\n' +
        'and luck for sure .',
      age: '',
    },
    {
      name: 'Jane',
      image: 'https://drive.google.com/file/d/175vRuHg6vAJzNL6xC79wscIASbV4K1hE/view?usp=sharing',
      desc:
        'Jane was rescued by me when she was hardly 25 days old. It was a batch of 8 pups lying near the\n' +
        'mother who had become stiff like wood and was lying almost lifeless in an open area. I admitted\n' +
        'the mother to MH 14 hospital for the treatment but unfortunately I couldn’t save her. Since then\n' +
        'Jane is with me.\n' +
        'All vaccinations and deworming is completed.\n' +
        'Jane is a very playful and active dog and is a quick learner too.\n' +
        'I am looking for a loving family for her who will take care of her just like their daughter.\n' +
        'Adoption in and around Pune or Mumbai\n' +
        'Contact no. 9850551880\n' +
        'Ms. Ashwini Kulkarni',
      age: '',
    },
    {
      name: 'Jewel',
      image: 'https://drive.google.com/file/d/1yqsl3gkm6LGTJMnLIEN3YvaCyGSGNxhJ/view?usp=sharing',
      desc:
        'Jewel was rescued by me when she was hardly 25 days old. It was a batch of 8 pups lying near the mother who had become stiff like wood and was lying almost lifeless in an open area. I admitted the mother to MH 14 hospital for the treatment but unfortunately I couldn’t save her. Since then Jewel is with me.\n' +
        'All vaccinations and deworming is completed. \n' +
        'Jewel is a very playful and active dog and is a quick learner too.\n' +
        'I am looking for a loving family for her who will take care of her just like their daughter.\n' +
        'Adoption in and around Pune or Mumbai\n' +
        'Contact no. 9850551880\n' +
        'Ms. Ashwini Kulkarni\n',
      age: '',
    },
    {
      name: 'Ginny',
      image: 'https://drive.google.com/file/d/1ljwEd_bkqIrJAbmAEi-8arOSyjOrKgj1/view?usp=sharing',
      desc:
        'This cutie was found wandering alone in a society in Wakad. Mother and siblings were nowhere to be found. She was unlikely to survive on her own without a mother, so she’s currently being fostered by a family living in the society. \n' +
        'Ginny is a foodie and very cuddly. She is great with other dogs and humans too. She has a lot of energy and loves playing with her foster sis. \n' +
        'Ginny also comfortably sleeps in a crate at night. She needs a family that will give her all the love and attention she deserves.\n' +
        '\n' +
        'Age: 2 months\n' +
        'Gender: Female\n' +
        'Breed: Indie\n' +
        'Spot on & Deworming done. Vaccination - 1/4 shots done.\n',
      age: '',
    },
    {
      name: 'Dobby',
      image: 'https://drive.google.com/file/d/1PsubJfAimlz1TtF8FkowiRLXIeg9vMkY/view?usp=sharing',
      desc:
        'Dobby is one of a kind and deserves a loving family.\n' +
        'He will bring calmness, peace and tranquillity to any family he would be part of. We are\n' +
        'going to miss him so much once he will get adopted but we need to find a forever family for\n' +
        'him.' +
        ' Dog - Dobby (Male)\n' +
        ' Age - 3.5 Month\n' +
        ' Vaccination - 2nd Done\n' +
        ' Deworming – Done Regularly\n' +
        ' Potty Trained',
      age: '',
    },
    {
      name: 'Dolly',
      image: 'https://drive.google.com/file/d/17Jka6PtpvuLLkOBnVxoQ0iR3JWIoOyOK/view?usp=sharing',
      desc: 'Dolly...',
      age: '',
    },
    {
      name: 'Luna',
      image: 'https://drive.google.com/file/d/1APN92EbJST0wYJr-U2CkHNXH477OEOSo/view?usp=sharing',
      desc: 'Luna...',
      age: '',
    },
    {
      name: 'Benny',
      image: 'https://drive.google.com/file/d/1Yhz8vU90_EtCjYIlaJcAYAnIK1YQK-SD/view?usp=sharing',
      desc:
        'Benny, found abandoned on the roadside near panshet.  Healthy, playful and naughty puppy. Benny likes to play with ball. Please help us to find his forever home.Name: Benny \n' +
        'Gender: Male\n' +
        'Age:  1 month\n' +
        'Vaccination status: Vaccinated \n' +
        'Deworming status: Dewormed \n',
      age: '',
    },
    {
      name: 'Chiku',
      image: 'https://drive.google.com/file/d/1YH4jsLnLjnN6cUNSHtGTzHKXW5FytqXv/view?usp=sharing',
      desc:
        'Chiku, found abandoned on the roadside near panshet.  Healthy, playful and alert puppy. Please help us to find his forever home.Name: Chiku\n' +
        'Gender: Male\n' +
        'Age:  1 month\n' +
        'Vaccination status: Vaccinated \n' +
        'Deworming status: Dewormed \n',
      age: '',
    },
    {
      name: 'Fluffy',
      image: 'https://drive.google.com/file/d/1Ylhz9I3BWac9Wy7JAIaQ17aklnavzZvv/view?usp=sharing',
      desc:
        'Fluffy, found abandoned on the roadside near panshet.  Healthy, playful and adorable  puppy. Fluffy is little ball of fur. Please help us to find his forever home.Name: Fluffy \n' +
        'Gender: Male\n' +
        'Age:  1 month\n' +
        'Vaccination status: Vaccinated \n' +
        'Deworming status: Dewormed \n',
      age: '',
    },
    {
      name: 'Guddu',
      image: 'https://drive.google.com/file/d/1YVm39oicmai9bBLcgQEjp3wmkG4pCUw2/view?usp=sharing',
      desc:
        'Guddu, found abandoned on the roadside near panshet. Very healthy and playful puppy. Likes to cuddle. Please help us to find his forever home.Name: Guddu \n' +
        'Gender: Male\n' +
        'Age:  1 month \n' +
        'Vaccination status: Vaccinated \n' +
        'Deworming status: Dewormed \n',
      age: '',
    },
    {
      name: 'Kalu',
      image: 'https://drive.google.com/file/d/1YqhoUqBtTp6olluDzJE6g1OPthjnCdeZ/view?usp=sharing',
      desc:
        'Kalu, found abandoned on the roadside near panshet. Healthy, playful and happy puppy. Puppy in a\n' +
        'tuxedo ��. Please help us to find his forever home.Name: Kalu\n' +
        'Gender: Male\n' +
        'Age: 1 month\n' +
        'Vaccination status: Vaccinated\n' +
        'Deworming status: Dewormed',
      age: '',
    },
    {
      name: 'Patches',
      image: 'https://drive.google.com/file/d/1YN5u3s78DlvaEYgBN56Vx8_RWYYBAnzJ/view?usp=sharing',
      desc:
        'Patches, found abandoned on the roadside near panshet. Very healthy and active puppy, with very beautiful features. Please help us to find her forever home.Name: Patches\n' +
        'Gender: Female\n' +
        'Age:  1 month\n' +
        'Vaccination status: Vaccinated \n' +
        'Deworming status: Dewormed \n',
      age: '',
    },
    {
      name: 'Queenie',
      image: 'https://drive.google.com/file/d/1Z6qjXnYAMaP7GVQ6LmPkgm7R7TnI3YS9/view?usp=sharing',
      desc:
        'Queenie, found abandoned on the roadside near panshet. Very healthy and active puppy. She has very\n' +
        'beautiful eyes. Please help us to find her forever home. Queenie\n' +
        'Gender: Female\n' +
        'Age: 1 month\n' +
        'Vaccination status: Vaccinated\n' +
        'Deworming status: Dewormed',
      age: '',
    },
    {
      name: 'Scruffy',
      image: 'https://drive.google.com/file/d/1ZRFNkGnGY48hQjbwVcaWRVf6x0oKu7_p/view?usp=sharing',
      desc:
        'Scruffy, found abandoned on the roadside near panshet. Very healthy and active. Happy and peaceful\n' +
        'puppy. Likes to eat carrots (��). Please help us to find his forever home.Name: Scruffy\n' +
        'Gender: Male\n' +
        'Age: 1 month\n' +
        'Vaccination status: Vaccinated\n' +
        'Deworming status: Dewormed',
      age: '',
    },
    {
      name: 'Shadow',
      image: 'https://drive.google.com/file/d/1ZSZBZsVquUnkJkJgY4zJEpCppvOxBeQp/view?usp=sharing',
      desc:
        'Shadow, found abandoned on the roadside near panshet. Healthy, playful and adorable puppy. Always\n' +
        'look at you with puppy dog eyes. Please help us to find his forever home.Name: Shadow\n' +
        'Gender: Male\n' +
        'Age: 1 month\n' +
        'Vaccination status: Vaccinated\n' +
        'Deworming status: Dewormed',
      age: '',
    },
    {
      name: 'ZORO',
      image: 'https://drive.google.com/file/d/1mpqim2cnZFr9RoGNKV6wY_hetIxiaKnD/view?usp=sharing',
      desc:
        'Name: ZORO' +
        'Age: 1.5-2 Months\n' +
        'Gender: Male\n' +
        'Deworming: Done\n' +
        'Tick-free: Yes\n' +
        'Flea-free: Yes\n' +
        'Vaccination: 1 dose of 7-in-1 vaccine given\n' +
        'Foster’s details: Kajal Pawar (9145716081)\n' +
        'Location: Pimple Gurav, Pune',
      age: '',
    },
    {
      name: 'Laddu',
      image: 'https://drive.google.com/file/d/1zwjj9dXI6Q_6UaMlWJ3NFq_1ZA5xAJGy/view?usp=sharing',
      desc:
        'Background - Our pet dog Piku gave birth to 5 puppies , 4 females and 1    male.2 female puppies got adopted. We have neutered our female dog now. Laddu is the Male puppy.\n' +
        'Behaviour - Laddu is extremely adorable and very friendly. He likes to explore. He is a calm doggy.His health checkups are done regularly.\n',
      age: '',
    },
    {
      name: 'Winnie',
      image: 'https://drive.google.com/file/d/1gh9Uu5fCmS2rt-gptM9bEwxTpEaN0C6t/view?usp=sharing',
      desc:
        'Background - Our pet dog Piku gave birth to 5 puppies , 4 females and 1\n' +
        'male.2 female puppies got adopted. We have neutered our female dog now.\n' +
        'Winnie is the first born Female puppy.\n' +
        'Behaviour - Winnie is extremely adorable and very friendly. She is protective of\n' +
        'her siblings .Her health check-ups are done regularly.',
      age: '',
    },
    {
      name: 'Mickey',
      image: 'https://drive.google.com/file/d/1tWZgmENJu5mPKlSqVIUQ8pJewMWYJ_gq/view?usp=sharing',
      desc:
        'Background - Our pet dog Piku gave birth to 5 puppies , 4 females and 1    male.2 female puppies got adopted. We have neutered our female dog now. Mickey is the last born Female puppy.\n' +
        'Behaviour - Mickey is extremely adorable and mischievous. She is active and extremely alert .Her health check-ups are done regularly.\n',
      age: '',
    },
    {
      name: 'Sia',
      image: 'https://drive.google.com/file/d/1eKbIlLIApdkrNvz17JmFtUAQbvYI3FH8/view?usp=sharing',
      desc:
        'Sia was found by the roadside alone, motherless. We decided to take her home.\n' +
        'Sia is a very sweet, cuddly, energetic pup. She is very friendly with my pet male dog of  1.5 years and humans as well. \n',
      age: '',
    },
    {
      name: 'Chakuli',
      image: 'https://drive.google.com/file/d/1zlNB7iA1NTHA6RMkhtgSwsxjFhOjql0q/view?usp=sharing',
      desc:
        'Chakuli is the cutest and calmest puppy we have ever seen. But loves to play with other dogs around. He is a motherless puppy looking for a forever home.',
      age: '',
    },
    {
      name: 'Lado',
      image: 'https://drive.google.com/file/d/1OqYuH-vKW2bFXzqFCaDkfUKJfJJ-AAVf/view?usp=sharing',
      desc:
        'Lado is a very friendly puppy, who loves to play around with\n' +
        'everyone. She has no special demands about anything, she stays happy with\n' +
        'whatever she is given.',
      age: '',
    },
    {
      name: 'Neera',
      image: 'https://drive.google.com/file/d/1Q28f27Q7DDTaaffhPHs__QHAh_nagNgi/view?usp=sharing',
      desc:
        'Neera is joyful, happy-go-lucky girl. She is a perfect pet one can\n' +
        'have. She doesn’t have any extra demands in terms of food or comfort. She\n' +
        'loves to be around humans and other dogs too.',
      age: '',
    },
    {
      name: 'Pogo',
      image: 'https://drive.google.com/file/d/1GB6ornFMES5DpNj8-obn341UGtuvQFg6/view?usp=sharing',
      desc:
        'Pogo is a very calm dog, expert in making friends quickly. He loves\n' +
        'human company. He is also good with other dogs and cats around.',
      age: '',
    },
    {
      name: 'Barfi',
      image: 'https://drive.google.com/file/d/1TSJsz_kC1FaMCNCrwKaJw19ggFQlR7ZL/view?usp=sharing',
      desc:
        'Pratima aunty one night spotted my mumma and papa tied to a tree and we tiny ones were inside a dark ditch. Brave Pratima aunty got us out and we along with mumma, Papa accompanied her in her car to a safe place. \n' +
        'She built us a safe shelter and made us comfortable. \n' +
        'Pratima aunty feels we are very cute and cuddly and can be a loving companion for any home. \n',
      age: '',
    },
    {
      name: 'Ladoo',
      image: 'https://drive.google.com/file/d/1TFiHQmQZbDyUQxyLKkMxnrkeDBp0Qt2D/view?usp=sharing',
      desc:
        'Pratima aunty one night spotted my mumma and papa tied to a tree and we tiny ones were inside a dark ditch. Brave Pratima aunty got us out and we along with mumma, Papa accompanied her in her car to a safe place. \n' +
        'She built us a safe shelter and made us comfortable. \n' +
        'Pratima aunty feels we are very cute and cuddly and can be a loving companion for any home. \n',
      age: '',
    },
    {
      name: 'Cookie',
      image: 'https://drive.google.com/file/d/1TNg9ZxnbgYhSjJTiZxEfuC-dOahuiVrK/view?usp=sharing',
      desc:
        'Pratima aunty one night spotted my mumma and papa tied to a tree and we tiny ones were inside a dark ditch. Brave Pratima aunty got us out and we along with mumma, Papa accompanied her in her car to a safe place. \n' +
        'She built us a safe shelter and made us comfortable. \n' +
        'Pratima aunty feels we are very cute and cuddly and can be a loving companion for any home. \n',
      age: '',
    },
    {
      name: 'Penny',
      image: 'https://drive.google.com/file/d/1nUAxF50NE7Z35guGvThKysM_nKr-jKQl/view?usp=sharing',
      desc:
        'They are super playful and adorable, and each one comes with a different personality! There are 7 puppies are from the same litter. ',
      age: '',
    },
    {
      name: 'Dora',
      image: 'https://drive.google.com/file/d/1bv7yXHtoL2P3rlpzyeDHVmo1KlN6CvTt/view?usp=sharing',
      desc:
        'They are super playful and adorable, and each one comes with a different personality! There are 7 puppies are from the same litter. ',
      age: '',
    },
    {
      name: 'Nacho',
      image: 'https://drive.google.com/file/d/1JJ0n1T29CN1X6CET0B6ypiKt77gOqTuE/view?usp=sharing',
      desc:
        'They are super playful and adorable, and each one comes with a different personality! There are 7 puppies are from the same litter. ',
      age: '',
    },
    {
      name: 'Burritos',
      image: 'https://drive.google.com/file/d/1f3Iffk3PxUTcMuBryxQ4bUspu_cYgT45/view?usp=sharing',
      desc:
        'They are super playful and adorable, and each one comes with a different personality! There are 7 puppies are from the same litter. ',
      age: '',
    },
    {
      name: 'Cookie',
      image: 'https://drive.google.com/file/d/1r8rQoS1kUbed8MZ5wcvOMyaS8rSkEJQK/view?usp=sharing',
      desc:
        'They are super playful and adorable, and each one comes with a different personality! There are 7 puppies are from the same litter. ',
      age: '',
    },
    {
      name: 'TOFFY',
      image: 'https://drive.google.com/file/d/14z_eTzaTbPHzWHGX917IXwrpuQMTwsZS/view?usp=sharing',
      desc:
        'AGE: 3-4 Months\n' +
        'Gender : Female Vaccinations : 2Doses of 7 in 1 Vaccine, 2 Doses Of CCV, Rabies',
      age: '',
    },
    {
      name: 'Tuffy',
      image: 'https://drive.google.com/file/d/1J7lzSUy9ePSBlKEKyEeOI2VlxvzqNEyI/view?usp=sharing',
      desc: 'Tuffy',
      age: '',
    },
    {
      name: 'Blackie',
      image: 'https://drive.google.com/file/d/1B45CMT7-6dXiDhqKlwDmhJ5HvUwvJpfj/view?usp=sharing',
      desc:
        'Blackie was found and rescued inside a tech park in Hinjewadi with multiple dog bites. He was treated for the same and is now fit and healthy.\n' +
        'Blackie is very docile, obedient and playful pup of around 4-5 months. \n' +
        'He is neutered and dewormed and vaccination is complete.\n',
      age: '',
    },
    {
      name: 'these doggos',
      image: 'https://drive.google.com/file/d/1DQO12DOJqOo2xKBJWhDONdVv1f2aIaTw/view?usp=sharing',
      desc: 'Scooby, Charlie and Tuffy are up for adoption',
      age: '',
    },
    {
      name: 'MIMI',
      image: 'https://drive.google.com/file/d/1wVmBz5haT9O47JGn0lHKnynberAyQm8o/view?usp=sharing',
      desc:
        'She is extremely intelligent and lives among three senior dogs ( one 13 plus\n' +
        'years , another 11 years and another 9 years ) The senior dogs are very wise\n' +
        'and having them around has been a real blessing as Mimi has picked up all the\n' +
        'good qualities from them and extremely obedient. She enjoys playing with\n' +
        'them. They have been like a mother to her.',
      age: '',
    },
    {
      name: 'Bailey',
      image: 'https://drive.google.com/file/d/1H06gKCVxKkLGvfqU3PeLNtDXWbxMp6GF/view?usp=sharing',
      desc: 'Bailey...',
      age: '',
    },
    {
      name: 'Coco',
      image: 'https://drive.google.com/file/d/1DbBiJfRVKhi9khIl2qwsYf-dsOFF1aMf/view?usp=sharing',
      desc: 'Coco...',
      age: '',
    },
    {
      name: 'Frankie',
      image: 'https://drive.google.com/file/d/1JRgMQ6JYtLFIilWW_AHQlMUwZM6beHl0/view?usp=sharing',
      desc: 'Frankie...',
      age: '',
    },
    {
      name: 'Harley',
      image: 'https://drive.google.com/file/d/1d-KJCwfqh_o_kk6PUGLyENNiI0leoPBj/view?usp=sharing',
      desc: 'Harley...',
      age: '',
    },
    {
      name: 'Marley',
      image: 'https://drive.google.com/file/d/1moOvZI6aG5f3dXehLAyJnY7fF_xv4GbG/view?usp=sharing',
      desc: 'Marley...',
      age: '',
    },
    {
      name: 'Riley',
      image: 'https://drive.google.com/file/d/1FKusrQXS028W6Ka5uwLCI0G-XJAq4Hl3/view?usp=sharing',
      desc: 'Riley...',
      age: '',
    },
    {
      name: 'Scout',
      image: 'https://drive.google.com/file/d/1uovwCDukSYEjLSv_XXIF75LisfHq34a4/view?usp=sharing',
      desc: 'Scout...',
      age: '',
    },
    {
      name: 'Montu',
      image: 'https://drive.google.com/file/d/1uovwCDukSYEjLSv_XXIF75LisfHq34a4/view?usp=sharing',
      desc: 'Montu...',
      age: '',
    },
    {
      name: 'Rose',
      image: 'https://drive.google.com/file/d/1tMHYAi1t-Xg0UD_3mqP44W2ehA_d0k6g/view?usp=sharing',
      desc: 'Rose...',
      age: '',
    },
    {
      name: 'Blacky',
      image: 'https://drive.google.com/file/d/1Kyh3qGtsx7QfUEw2SCf2OHu_RwqpvNFW/view?usp=sharing',
      desc:
        'Blacky along with her siblings were found relocated in a secluded area, but she was lucky to have found a lactating mother and has grown up to be a beautiful girl who is extremely playful and naughty ☺ ',
      age: '',
    },
    {
      name: 'Brownie',
      image: 'https://drive.google.com/file/d/1AYZkwy6z82iAJ_ySdUaTNYu3BcvXN5My/view?usp=sharing',
      desc:
        'Brownie along with her siblings were found relocated in a secluded area,their mother was\n' +
        'extremely malnourished and locals were not allowing her to feed the pups. Unfortunately, Brownie\n' +
        'and her sibling sister survived only. She is a playful, loving and naughty pup',
      age: '',
    },
    {
      name: 'Lolo',
      image: 'https://drive.google.com/file/d/1rGrVtEBXiShBzMyH7jkdyzs6405JfJgs/view?usp=sharing',
      desc: 'Lolo...',
      age: '',
    },
    {
      name: 'Mili',
      image: 'https://drive.google.com/file/d/1dA9LwSDX7XwRO-vozNAn4xAoyaGco9br/view?usp=sharing',
      desc: 'Mili...',
      age: '',
    },
    {
      name: 'Lolo',
      image: 'https://drive.google.com/file/d/1rGrVtEBXiShBzMyH7jkdyzs6405JfJgs/view?usp=sharing',
      desc: 'Lolo...',
      age: '',
    },
    {
      name: 'Mishty',
      image: 'https://drive.google.com/file/d/1cNzxsaUJHSeNUjK2r3MaxPCCdr2AzQlF/view?usp=sharing',
      desc: 'Mishty...',
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
	
	
	
