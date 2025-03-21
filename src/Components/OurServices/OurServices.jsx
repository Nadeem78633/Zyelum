import React from "react";
import "./ourServices.css";
import { Card, CardContent, Typography } from "@mui/material";
import {
  ShoppingCartOutlined,
  Factory,
  LocalShipping,
  Public,
  FactoryOutlined,
} from "@mui/icons-material";
import ArrowForwardOutlinedIcon from "@mui/icons-material/ArrowForwardOutlined";
import Grid from "@mui/material/Grid2";

const OurServices = () => {
  const services = [
    {
      icon: <ShoppingCartOutlined style={{ height: "40px", width: "40px" }} />,
      name: "Buy & Sell With Us",
      description:
        "One stop solution for your raw material sourcing and selling needs",
    },
    {
      icon: <Factory style={{ height: "40px", width: "40px" }} />,
      name: "Raw Material Prices",
      description: "Get live prices for the raw materials you deal in",
    },
    {
      icon: <LocalShipping style={{ height: "40px", width: "40px" }} />,
      name: "Raw Material News",
      description:
        "Get daily raw material news & insights live from the ground",
    },
    {
      icon: <Public style={{ height: "40px", width: "40px" }} />,
      name: "Growth With Credit",
      description: "Get access to credit for manufacturers and contractors",
    },
    {
      icon: <FactoryOutlined style={{ height: "40px", width: "40px" }} />,
      name: "Industry Digital First",
      description:
        "Transparency on your orders, live tracking & more with our app and web",
    },
  ];

  return (
    <div className="services-wrapper">
      {/* Floating Card Between Hero & OurServices */}
     
      <Card
        className="services-floating-card"
        style={{
          cursor: "pointer",
          boxShadow: "none",
          border: "1px solid #80cbc4",
          borderRadius: "20px",
        }}
      >
        <CardContent className="services-card-content">
          <Grid container spacing={2}>
            {services.map((serv, index) => (
              <Grid
                key={index}
                size={{ xs: 12, sm: 6, md: 2.4, lg: 2.4, xl: 2.4 }}
              >
                <div className="service-item">
                  <div className="service-icon">{serv.icon}</div>
                  <Typography variant="h6" className="service-name">
                    {serv.name}
                  </Typography>
                  <Typography variant="body2" className="service-description">
                    {serv.description}
                        </Typography>
                      <div className="know-more-container">
                    <Typography variant="body1" className="know-more-text">
                      Know More
                    </Typography>
                    <ArrowForwardOutlinedIcon className="know-more-arrow" />
                  </div>
                </div>
              </Grid>
            ))}
          </Grid>
        </CardContent>
      </Card>
    </div>
  );
};

export default OurServices;
