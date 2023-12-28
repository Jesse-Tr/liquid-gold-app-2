import React from "react";
import Image from "next/image";
import 'flowbite';
import { Button } from "@chakra-ui/react";
import { Component } from "react";
  import { Carousel } from 'flowbite-react';
import Link from "next/link"
// react jsx login component
const Carousel1 = () => {
   

    return (





      

            <div className="h-56 sm:h-64 xl:h-80 2xl:h-96">
              <Carousel slideInterval={5000}>
                <Image fetchPriority="high" loading="eager"  priority={true} width={340} height={100} src="https://dev-cs55-13-2023.pantheonsite.io/wp-content/uploads/2023/12/20231030_LiquidGold_TruckGlamorShot_PatrickChristian_V2-_2_-1-1-e1703788231665.webp" alt="..." />
                <Image width={250} height={200} src="https://dev-cs55-13-2023.pantheonsite.io/wp-content/uploads/2023/12/FF751844-62E9-4AB1-8BDC-92CF438CE6C8-1.webp" alt="..." />
                <Image width={250} height={200} src="https://dev-cs55-13-2023.pantheonsite.io/wp-content/uploads/2023/12/Untitled-2.webp" alt="..." />
                <Image width={250} height={200} src="https://flowbite.com/docs/images/carousel/carousel-4.svg" alt="..." />
                <Image width={250} height={200} src="https://flowbite.com/docs/images/carousel/carousel-5.svg" alt="..." />
              </Carousel>
            </div>
         


        ////////////////////////////////////
        /*
        <div id="default-carousel" className="relative w-auto py-20  shadow-2xl" >
            <div className="relative  sm:h-20 overflow-hidden rounded-lg md:h-96 mb-5">
<div className="flex-col flex justify-end ">
        <div id="slide1" className=" carousel-item relative  flex justify-center" >
            <Image width={720} height={625} fetchPriority="high" loading="eager" priority={true} src="https://dev-cs55-13-2023.pantheonsite.io/wp-content/uploads/2023/12/20231030_LiquidGold_TruckGlamorShot_PatrickChristian_V2-_2_-1-1-e1703788231665.webp" 
            className="   place-items-center flex justify-end " alt="truck picture" />
    
            <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
            <Link href="#slide4" className="btn btn-circle btn-lg">❮</Link> 
            <Link href="#slide2" className="btn btn-circle">❯</Link>
          </div>
        </div> 
        <div id="slide2" className="carousel-item relative w-auto justify-center flex">
          <Image width={325} height={325} src="https://dev-cs55-13-2023.pantheonsite.io/wp-content/uploads/2023/12/FF751844-62E9-4AB1-8BDC-92CF438CE6C8-1.webp" className=" flex justify-end " alt="orange juice picture" />
          <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
            <Link href="#slide1" className="btn btn-circle">❮</Link> 
            <Link href="#slide3" className="btn btn-circle">❯</Link>
          </div>
        </div> 
        <div id="slide3" className="carousel-item relative w-auto justify-center flex">
          <Image width={325} height={225} src="https://dev-cs55-13-2023.pantheonsite.io/wp-content/uploads/2023/12/Untitled-2.webp" className=" flex justify-end" alt="orange juice picture"/>
          <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
            <Link href="#slide2" className="btn btn-circle">❮</Link> 
            <Link href="#slide1" className="btn btn-circle">❯</Link>
          </div></div>
        </div> 
    
        </div>
       
    
      </div>

      */
        ////////////////////////////////////////
        /*
        <div id="slide4" className="carousel-item relative w-full">
          <img src="https://daisyui.com/images/stock/photo-1665553365602-b2fb8e5d1707.jpg" className="w-96" alt="orange juice picture"/>
          <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
            <a href="#slide3" className="btn btn-circle ">❮</a> 
            <a href="#slide1" className="btn btn-circle">❯</a>
          </div>
        </div>*/
/*
<div id="default-carousel" className="relative w-full" >

    <div className="relative h-56 overflow-hidden rounded-lg md:h-96">

        <div className=" duration-700 ease-in-out" data-carousel-item>
            <img src="https://dev-cs55-13-2023.pantheonsite.io/wp-content/uploads/2023/12/20231030_LiquidGold_TruckGlamorShot_PatrickChristian_V2-_2_-1-1.webp" className="absolute block w-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2" alt="..." />
        </div>

        <div className=" duration-700 ease-in-out" data-carousel-item>
            <img src="https://dev-cs55-13-2023.pantheonsite.io/wp-content/uploads/2023/12/20231030_LiquidGold_TruckGlamorShot_PatrickChristian_V2-_2_-1-1.webp" className="absolute block w-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2" alt="..." />
        </div>

        <div className=" duration-700 ease-in-out" data-carousel-item>
            <img src="https://dev-cs55-13-2023.pantheonsite.io/wp-content/uploads/2023/12/Untitled-2.webp" className="absolute block w-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2" alt="..." />
        </div>

        <div className=" duration-700 ease-in-out" data-carousel-item>
            <img src="https://dev-cs55-13-2023.pantheonsite.io/wp-content/uploads/2023/12/FF751844-62E9-4AB1-8BDC-92CF438CE6C8-1.webp" className="absolute block w-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2" alt="..." />
        </div>

        <div className=" duration-700 ease-in-out" data-carousel-item>
            <img src="https://dev-cs55-13-2023.pantheonsite.io/wp-content/uploads/2023/12/Untitled-2.webp" className="absolute block w-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2" alt="..." />
        </div>
    </div>
     
    <div className="absolute z-30 flex -translate-x-1/2 bottom-5 left-1/2 space-x-3 rtl:space-x-reverse">
        <button type="button" className="w-3 h-3 rounded-full" aria-current="true" aria-label="Slide 1" data-carousel-slide-to="0"></button>
        <button type="button" className="w-3 h-3 rounded-full" aria-current="false" aria-label="Slide 2" data-carousel-slide-to="1"></button>
        <button type="button" className="w-3 h-3 rounded-full" aria-current="false" aria-label="Slide 3" data-carousel-slide-to="2"></button>
        <button type="button" className="w-3 h-3 rounded-full" aria-current="false" aria-label="Slide 4" data-carousel-slide-to="3"></button>
        <button type="button" className="w-3 h-3 rounded-full" aria-current="false" aria-label="Slide 5" data-carousel-slide-to="4"></button>
    </div>

    <button type="button" className="absolute top-0 start-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none" data-carousel-prev>
        <span className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-white/30 dark:bg-gray-800/30 group-hover:bg-white/50 dark:group-hover:bg-gray-800/60 group-focus:ring-4 group-focus:ring-white dark:group-focus:ring-gray-800/70 group-focus:outline-none">
            <svg className="w-4 h-4 text-white dark:text-gray-800 rtl:rotate-180" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 6 10">
                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 1 1 5l4 4"/>
            </svg>
            <span className="sr-only">Previous</span>
        </span>
    </button>
    <button type="button" className="absolute top-0 end-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none" data-carousel-next>
        <span className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-white/30 dark:bg-gray-800/30 group-hover:bg-white/50 dark:group-hover:bg-gray-800/60 group-focus:ring-4 group-focus:ring-white dark:group-focus:ring-gray-800/70 group-focus:outline-none">
            <svg className="w-4 h-4 text-white dark:text-gray-800 rtl:rotate-180" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 6 10">
                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 9 4-4-4-4"/>
            </svg>
            <span className="sr-only">Next</span>
        </span>
    </button>
</div>*/
//
/*
export default class AutoPlayMethods extends Component {
  slider: any;
  constructor(props: {} | Readonly<{}>) {
    super(props);
    this.play = this.play.bind(this);
    this.pause = this.pause.bind(this);
  }
  play() {
    this.slider.slickPlay();
  }
  pause() {
    this.slider.slickPause();
  }
  render() {
    const settings = {
      dots: true,
      infinite: true,
      slidesToShow: 3,
      slidesToScroll: 1,
      autoplay: true,
      autoplaySpeed: 2000
    };
    return (
      <div>
        <h2>Auto Play & Pause with buttons</h2>
        <Slider ref={slider => (this.slider = slider)} {...settings}>
        <div id="default-carousel" className="relative w-full" >

<div className="relative h-56 overflow-hidden rounded-lg md:h-96">
<div className=" duration-700 ease-in-out" data-carousel-item>
            <Image src="https://dev-cs55-13-2023.pantheonsite.io/wp-content/uploads/2023/12/20231030_LiquidGold_TruckGlamorShot_PatrickChristian_V2-_2_-1-1.webp" alt={""}/>
          </div>
          <div>
          <Image src="https://dev-cs55-13-2023.pantheonsite.io/wp-content/uploads/2023/12/20231030_LiquidGold_TruckGlamorShot_PatrickChristian_V2-_2_-1-1.webp" alt={""}/>
          </div>
          <div>
          <Image src="https://dev-cs55-13-2023.pantheonsite.io/wp-content/uploads/2023/12/20231030_LiquidGold_TruckGlamorShot_PatrickChristian_V2-_2_-1-1.webp" alt={""}/>
          </div>
          <div>
          <Image src="https://dev-cs55-13-2023.pantheonsite.io/wp-content/uploads/2023/12/20231030_LiquidGold_TruckGlamorShot_PatrickChristian_V2-_2_-1-1.webp" alt={""}/>
          </div>
          <div>
          <Image src="https://dev-cs55-13-2023.pantheonsite.io/wp-content/uploads/2023/12/20231030_LiquidGold_TruckGlamorShot_PatrickChristian_V2-_2_-1-1.webp" alt={""}/>
          </div>
          <div>
          <Image src="https://dev-cs55-13-2023.pantheonsite.io/wp-content/uploads/2023/12/20231030_LiquidGold_TruckGlamorShot_PatrickChristian_V2-_2_-1-1.webp" alt={""}/>
          </div>
          </div>
          </div>
        </Slider>
        <div style={{ textAlign: "center" }}>
          <button className="button" onClick={this.play}>
            Play
          </button>
          <button className="button" onClick={this.pause}>
            Pause
          </button>
        </div>
      </div>
    );
  }
}*/

  );
};
export default Carousel1;