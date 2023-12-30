import React from "react";
import Image from "next/image";
import 'flowbite';
import { Carousel } from 'flowbite-react';

// react jsx login component
const Carousel1 = () => {
    return (
        <div className="h-56 sm:h-64 xl:h-80 2xl:h-96 ">
           
            <Carousel slideInterval={4000} >
                <Image  fetchPriority="high" loading="eager" priority={true} width={300} height={100} className="object-contain h-48 w-96 " src="https://dev-cs55-13-2023.pantheonsite.io/wp-content/uploads/2023/12/20231030_LiquidGold_TruckGlamorShot_PatrickChristian_V2-_2_-1-1-e1703788231665.webp" alt="truck image" />
                <Image loading="eager" width={250} height={100}  className="object-contain h-48 w-96" src="https://dev-cs55-13-2023.pantheonsite.io/wp-content/uploads/2023/12/FF751844-62E9-4AB1-8BDC-92CF438CE6C8-1.webp" alt="orange juice" />
                <Image loading="eager" width={250} height={100}   className="object-contain h-48 w-96" src="https://dev-cs55-13-2023.pantheonsite.io/wp-content/uploads/2023/12/Untitled-2.webp" alt="purple drink" />

            </Carousel>
        </div>
    );
};
export default Carousel1;