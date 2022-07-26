import React from "react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import Image from "next/image";

export default function ResponsiveCarouselComponent({ propPhotos }: {propPhotos?: Array<{url: string}>}) {
  // {console.log(propPhotos)}

  return (
    <>
    {console.log(propPhotos)}
    <div className="carousel-container">
      <Carousel
        infiniteLoop
        autoPlay
        useKeyboardArrows
        centerMode
       showThumbs={false}
        centerSlidePercentage={100}
      >
      {/* {console.log(photoUrls)} */}
      
      {propPhotos?.map((photo) => (
          <div key={photo.url} className="h-[300px] md:h-[500px] relative w-100">
            <Image src={photo.url} alt="Image 1" layout="fill" objectFit="cover"/>
          {/* <img src={url} alt="Image 1" /> */}
      </div>
              ))}

      

      
      </Carousel>
      
    </div>
    </>
  );
}
