import React from "react";
import Grid from "@mui/material/Grid2";
import "./hero.css";
import { Typography } from "@mui/material";
import SearchBar from "../SearchBar/SearchBar";

// Material-UI icons
import InventoryIcon from "@mui/icons-material/Inventory";
import LocalShippingIcon from "@mui/icons-material/LocalShipping";
import ScienceIcon from "@mui/icons-material/Science";
import BuildIcon from "@mui/icons-material/Build";
import ConstructionIcon from "@mui/icons-material/Construction";

const Hero = () => {
  const data = [
    {
      name: "Aluminium Ignot",
      icon: <InventoryIcon style={{ height: "15px", width: "15px" }} />,
    },
    {
      name: "Bitumen",
      icon: <LocalShippingIcon style={{ height: "15px", width: "15px" }} />,
    },
    {
      name: "Methanol",
      icon: <ScienceIcon style={{ height: "15px", width: "15px" }} />,
    },
    {
      name: "PVC",
      icon: <BuildIcon style={{ height: "15px", width: "15px" }} />,
    },
    {
      name: "Secondary TMT",
      icon: <ConstructionIcon style={{ height: "15px", width: "15px" }} />,
    },
  ];

  return (
    <>
      <Grid container spacing={2} className="hero-containers">
        <Grid size={{ xs: 12, sm: 12, md: 8, lg: 8, xl: 8 }}>
          <div className="grid-content">
            <Typography variant="h3" className="b2b">
              India's Largest B2B Raw Materials Procurement & Credit Platform
            </Typography>
            <SearchBar />
            <div className="products-container">
              {data.map((d, index) => (
                <span key={index} className="product-name">
                  <span className="icon-container">{d.icon}</span>
                  {d.name}
                </span>
              ))}
            </div>
          </div>
        </Grid>
      </Grid>
    </>
  );
};

export default Hero;
