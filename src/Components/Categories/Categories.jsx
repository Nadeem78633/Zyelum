import React from "react";
import "./categories.css";
import { Card, CardContent, Typography } from "@mui/material";
import {
  CurrencyRupee,
  Factory,
  LocalShipping,
  Public,
} from "@mui/icons-material";
import AgricultureIcon from "@mui/icons-material/Agriculture";
import EastIcon from "@mui/icons-material/East";
import Grid from "@mui/material/Grid2";

const Categories = () => {
  const categories = [
    {
      name: "Steel",
      icon: (
        <AgricultureIcon
          style={{ height: "100px", width: "150px", color: "#007bff" }}
        />
      ),
    },
    {
      name: "Non Ferrous",
      icon: (
        <AgricultureIcon
          style={{ height: "100px", width: "150px", color: "#007bff" }}
        />
      ),
    },
    {
      name: "Polymers",
      icon: (
        <AgricultureIcon
          style={{ height: "100px", width: "150px", color: "#007bff" }}
        />
      ),
    },
    {
      name: "Chemicals",
      icon: (
        <AgricultureIcon
          style={{ height: "100px", width: "150px", color: "#007bff" }}
        />
      ),
    },
    {
      name: "Energy",
      icon: (
        <AgricultureIcon
          style={{ height: "100px", width: "150px", color: "#007bff" }}
        />
      ),
    },
    {
      name: "Construction",
      icon: (
        <AgricultureIcon
          style={{ height: "100px", width: "150px", color: "#007bff" }}
        />
      ),
    },
    {
      name: "Agri",
      icon: (
        <AgricultureIcon
          style={{ height: "100px", width: "150px", color: "#007bff" }}
        />
      ),
    },
    {
      name: "Fashion",
      icon: (
        <AgricultureIcon
          style={{ height: "100px", width: "150px", color: "#007bff" }}
        />
      ),
    },
  ];
  return (
    <div className="categories-wrapper">
      {/* Floating Card Between Hero & Categories */}
      <Card
        className="floating-card"
        style={{
          cursor: "pointer",
          boxShadow: "none",
          border: "1px solid #80cbc4",
          borderRadius: "20px",
        }}
      >
        <CardContent className="card-content">
          <div className="stat-item">
            <CurrencyRupee className="icon" />
            <div classname="stat">
              <Typography variant="h6" className="stat-h6">
                400K+
              </Typography>
              <Typography>Raw Materials Prices</Typography>
            </div>
          </div>
          <div className="stat-item">
            <Factory className="icon" />
            <div classname="stat">
              <Typography variant="h6" className="stat-h6">
                1 Million+
              </Typography>
              <Typography>SMEs Empowered</Typography>
            </div>
          </div>
          <div className="stat-item">
            <LocalShipping className="icon" />
            <div classname="stat">
              <Typography variant="h6" className="stat-h6">
                500K+
              </Typography>
              <Typography>Orders Delivered</Typography>
            </div>
          </div>
          <div className="stat-item">
            <Public className="icon" />
            <div className="stat">
              <Typography variant="h6" className="stat-h6">
                30+
              </Typography>
              <Typography className="stat-label">Countries Served</Typography>
            </div>
          </div>
        </CardContent>
      </Card>
      <div className="explore-container">
        <Typography variant="h4" className="explore">
          Explore Our Categories
        </Typography>
        <Typography
          variant="subtitle1"
          style={{ color: "gray", marginTop: "20px", marginBottom: "20px" }}
        >
          Tap to access expertise across supply chains. Get Quotations, Prices,
          and Latest News Instantly
        </Typography>
        <Grid container spacing={2}>
          {categories.map((cat, index) => (
            <Grid
              size={{
                xs: 12,
                sm: 6,
                md: index >= categories.length - 2 ? 6 : 4,
                lg: index >= categories.length - 2 ? 6 : 4,
                xl: index >= categories.length - 2 ? 6 : 4,
              }}
              key={index}
            >
              <Card
                style={{
                  cursor: "pointer",
                  boxShadow: "none",
                  border: "1px solid #80cbc4",
                  borderRadius: "20px",
                }}
              >
                <CardContent>
                  <Typography variant="h6" style={{ fontWeight: 600 }}>
                    {cat.name}
                  </Typography>
                  <div
                    style={{
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      height: "100%",
                    }}
                  >
                    {cat.icon}
                  </div>
                  <div
                    style={{
                      display: "flex",
                      justifyContent: "space-between",
                      alignItems: "center",
                      width: "100%",
                    }}
                  >
                    <Typography style={{ color: "GrayText" }}>
                      View All
                    </Typography>
                    <EastIcon style={{ color: "#007bff" }} />
                  </div>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
        <div className="services-explore-container">
          <Typography variant="h4" style={{ fontWeight: "600" }}>
            Explore Our Services
          </Typography>
          <Typography
            variant="subtitle1"
            style={{ color: "gray", marginTop: "20px", marginBottom: "20px" }}
          >
            Tap to access expertise across supply chains. Get Quotations,
            Prices, and Latest News Instantly
          </Typography>
        </div>
      </div>
    </div>
  );
};

export default Categories;
