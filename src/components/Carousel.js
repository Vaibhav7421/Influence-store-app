import { Box, Button, Typography } from "@mui/material";
import React from "react";
import { Carousel as CarouselNpm } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import image1 from "../assets/image 1.png";
import "./Carousel.css";

export const Carousel = () => {
  return (
    <Box style={{ position: "relative" }}>
      <CarouselNpm showThumbs={false}>
        <div>
          <img src={image1} alt="carousel-1" />
        </div>
        <div>
          <img src={image1} alt="carousel-2" />
        </div>
        <div>
          <img src={image1} alt="carousel-3" />
        </div>
      </CarouselNpm>
      <Box className={"headings"}>
        <Typography variant="h4">
          Standard Chartered EaseMyTrip Credit Card
        </Typography>
        <Typography>
          Enjoy flat 20% & 10% discount* on hotel* & flight bookings.
          #SkipToTheTrip
        </Typography>
        <Button variant="contained" color="warning">
          Apply Now
        </Button>
      </Box>
    </Box>
  );
};
