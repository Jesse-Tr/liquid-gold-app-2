import React from "react";
import Image from "next/image";
import 'flowbite';
import { Carousel } from 'flowbite-react';

// react jsx login component
const Carousel1 = () => {
    return (
        <div className="h-96 sm:h-96 xl:h-96 2xl:h- overflow-hidden ">
           
            <Carousel slideInterval={4000} >
                <Image  fetchPriority="high" loading="eager" priority={true} width={350} height={100} className="object-contain 2xl:h-96 h-screen w-full " src="https://dev-cs55-13-2023.pantheonsite.io/wp-content/uploads/2023/12/20231030_LiquidGold_TruckGlamorShot_PatrickChristian_V2-_2_-1-scaled.webp" alt="truck image" />
                <Image loading="eager" width={450} height={200}  className="object-contain 2xl:h-96 h-96 w-full overflow-hidden" src="https://dev-cs55-13-2023.pantheonsite.io/wp-content/uploads/2023/12/14c.webp" alt="orange juice" />
                <Image loading="eager" width={450} height={200}   className="object-contain 2xl:h-96 h-96 w-full" src="https://dev-cs55-13-2023.pantheonsite.io/wp-content/uploads/2023/12/Untitled-2.webp" alt="purple drink" />

            </Carousel>
        </div>
    );
};
export default Carousel1;