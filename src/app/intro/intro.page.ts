import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Storage } from '@ionic/storage';

@Component({
  selector: 'app-intro',
  templateUrl: './intro.page.html',
  styleUrls: ['./intro.page.scss'],
})
export class IntroPage implements OnInit {
  slideOps = {
    initialSlide: 0, // que el inicial sea el primero
    slidePerView: 1, // que solo se permita un slide por vista
    centeredSlides: true, // que esten centradas
    speed: 400, // velocidad en ms
  };

  slides = [
    {
    imageSrc: './../../assets/img/platzylogo.PNG',
    imgAlt: '"Platzi Logo"',
    title: '" Este es el Títle "',
    subtitle: '"Este es el Subtitle"',
    description: '"Aqui la descripcion"',
    icon: '"play"'
  },
  {
    imageSrc: '"./../../assets/img/platzylogo.PNG"',
    imgAlt: '"Platzi Logo"',
    title: '" Este es el Títle "',
    subtitle: '"Este es el Subtitle"',
    description: 'Aqui la descripcion',
    icon: '"play"'
  },
  {
    imageSrc: "./../../assets/img/platzylogo.PNG",
    imgAlt: "Platzi Logo",
    title: " Este es el Títle ",
    subtitle: "Este es el Subtitle",
    description:"Aqui la descripcion",
    icon:"play"
  }];
  constructor(
    private router: Router,
    private storage: Storage
  ) { }

  finish() {
    this.storage.set('isIntroShowed', true);
    this.router.navigateByUrl('/home');
  }

  ngOnInit() {
  }

}
