import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import React from "react";
import image1 from "../assets/arrow-right.png";
import image2 from "../assets/image69.png";
import "./Brands.css";

export const Brands = () => {
  return (
    <Box>
      <Box className="item" component="section" mt={2}>
        <Typography>Category One</Typography>
        <Button
          variant="contained"
          sx={{ borderRadius: "30px", width: "108px", marginLeft: "15px" }}
        >
          View all
          <img alt="arrow" src={image1} />
        </Button>
      </Box>
      <img alt="logos" src={image2} />
    </Box>
  );
};
