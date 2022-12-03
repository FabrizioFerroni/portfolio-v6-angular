import { AfterViewInit, Component, OnInit } from '@angular/core';
import Swiper from 'swiper';

// const swiper 

@Component({
  selector: 'app-sliders',
  templateUrl: './sliders.component.html',
  styleUrls: ['./sliders.component.css']
})
export class SlidersComponent implements OnInit, AfterViewInit {

  constructor() { }

  ngAfterViewInit(): void {

    const swiper = new Swiper('.swiper', {
      // Optional parameters
      direction: 'horizontal',
      loop: true,
      slidesPerView: 1,
      grabCursor: true,
      spaceBetween: 10,
      autoHeight: true,
  
      autoplay: {
          delay: 10500,
          disableOnInteraction: false,
      },
  
      breakpoints: {
          640: {
              slidesPerView: 1,
              spaceBetween: 0,
          },
          768: {
              slidesPerView: 1,
              spaceBetween: 0,
          },
          1024: {
              slidesPerView: 2,
              spaceBetween: 0,
          },
          1280: {
              slidesPerView: 2,
              spaceBetween: 0,
          },
          1366: {
              slidesPerView: 3,
              spaceBetween: 10,
          },
          1920: {
              slidesPerView: 3,
              spaceBetween: 10,
          }
      },
  
      // If we need pagination
      pagination: {
          el: '.swiper-pagination',
          clickable: true,
      },
  });
  }

  ngOnInit(): void {
  }

}
