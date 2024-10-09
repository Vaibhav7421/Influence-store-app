import React from "react";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import image1 from '../assets/arrow-right.png';
import image2 from '../assets/Icon@2x.png';
import { Paper } from "@mui/material";

import "./Category2.css";

export function Category2() {
  return (
    <Box>
      <Box className="item" component="section" mt={2}>
        <Typography>Category Two</Typography>
        <Button
          variant="contained"
          sx={{ borderRadius: "30px", width: "108px", marginLeft: "15px" }}
        >
          View all
          <img alt="arrow" src={image1} />
        </Button>
      </Box>
      <Box className="products">
        {products.map((product, i) => (
          <Box key={i}>
            <Paper className="product" elevation={0}>
              <Box
                className="like-icon"
                component="img"
                src={image2} 
                alt="like icon" />
              <Box
                component="img"
                src={require(`../assets/${product.image}`)} // This should point to either a public folder or you can statically import
                alt={product.name} />
              <Typography
                gutterBottom
                variant="h5"
                component="div"
                sx={{ fontSize: "18px" }}
              >
                {product.name}
              </Typography>
              <Typography variant="body2" sx={{ color: "text.secondary" }}>
                ₹{product.price}
              </Typography>
              <Button
                className="buy-button"
                size="small"
                variant="outlined"
                color="primary"
              >
                Call now
              </Button>
            </Paper>
          </Box>
        ))}
      </Box>
    </Box>
  );
}

// Products array
const products = [
  {
    name: "Meters Music Connect White OV-1-B",
    price: "25,000.00",
    image: "Rectangle.png",
  },
  {
    name: "Apple HomePod mini-Orange (2023)",
    price: "25,000.00",
    image: "Rectangle1.png",
  },
  {
    name: "Asus Zenbook Pro 13 UX-430 US 2018",
    price: "25,000.00",
    image: "Rectangle2.png",
  },
  {
    name: "Kotak811 Credit Card",
    price: "25,000.00",
    image: "Rectangle3.png",
  },
  {
    name: "Meters Music Connect White OV-1-B",
    price: "25,000.00",
    image: "Rectangle.png",
  },
  {
    name: "Meters Music Connect White OV-1-B",
    price: "25,000.00",
    image: "Rectangle.png",
  },
];
