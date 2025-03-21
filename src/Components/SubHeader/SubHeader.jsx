import React, { useState, useRef } from "react";
import "./subHeader.css";

const Subheader = () => {
  const [hoveredLink, setHoveredLink] = useState("All Categories"); // Default active link
  const [activeNestedLink, setActiveNestedLink] = useState("Mild Steel"); // Default active nested link
  const [activeCityLink, setActiveCityLink] = useState("City 1"); // Default active city link
  const timeoutRef = useRef(null);

  const handleMouseEnter = (link) => {
    if (timeoutRef.current) clearTimeout(timeoutRef.current);
    setHoveredLink(link);
  };

  const handleMouseLeave = () => {
    timeoutRef.current = setTimeout(() => {
      setHoveredLink(null);
    }, 200);
  };

  const handleNestedLinkClick = (link) => {
    setActiveNestedLink(link);
  };

  const handleCityLinkClick = (link) => {
    setActiveCityLink(link);
  };

  const subheaderLinks = [
    {
      label: "All Categories",
      modalLinks: [
        "Mild Steel",
        "Non Ferrous",
        "Polymers & Packaging",
        "Chemicals",
        "Energy & Petroleum",
        "Stainless Steel",
        "Pipes",
      ],
      nestedLinks: {
        "Mild Steel": [
          "Flat Products",
          "Semi Finished",
          "Long Products",
          "Structure",
        ],
      },
    },
    {
      label: "Mild Steel",
      modalLinks: [
        "Flat Products",
        "Semi Finished",
        "Long Products",
        "Structure",
      ],
    },
    {
      label: "Non Ferrous",
      modalLinks: ["Long Products", "Semi Finished"],
    },
    {
      label: "Polymers & Packaging",
      modalLinks: ["Commodity", "Engineering"],
    },
    {
      label: "Chemicals",
      modalLinks: [
        "Solvents",
        "Alcohols",
        "Aromatics",
        "Industrial Chemicals",
        "InterMediates",
        "Methanol and Downstream",
      ],
    },
    {
      label: "Energy & Petroleum",
      modalLinks: ["Black Oil", "Lubricants"],
    },
    {
      label: "Stainless Steel",
      modalLinks: ["Flat Products"],
    },
    {
      label: "Pipes",
      modalLinks: ["Pipe"],
    },
  ];

  const cityLinks = ["City 1", "City 2", "City 3"];
  const productLinks = ["CRC", "GI Coil", "HR Plate", "HRC"];

  return (
    <div className="subheader-container">
      <div className="subheaders">
        {subheaderLinks.map((link, index) => (
          <div
            key={index}
            className="subheader-link-container"
            onMouseEnter={() => handleMouseEnter(link.label)}
            onMouseLeave={handleMouseLeave}
          >
            <span
              className={`subheader-link ${
                hoveredLink === link.label ? "active" : ""
              }`}
            >
              {link.label}
            </span>

            {hoveredLink === link.label && (
              <div
                className="modal-fullscreen"
                onMouseEnter={() => handleMouseEnter(link.label)}
                onMouseLeave={handleMouseLeave}
              >
                <div className="modal-content">
                  {/* Left Column - Main Links */}
                  <div className="modal-left">
                    {link.modalLinks.map((modalLink, idx) => (
                      <a
                        key={idx}
                        href={`/${modalLink.toLowerCase().replace(" ", "-")}`}
                        className={
                          activeNestedLink === modalLink ? "active" : ""
                        }
                        onClick={() => handleNestedLinkClick(modalLink)}
                      >
                        {modalLink}
                      </a>
                    ))}
                  </div>
                  <div className="divider"></div>

                  {/* Right Column - Products and City */}
                  <div className="modal-right">
                    {/* Products Column */}
                    <div className="products-column">
                      {link.nestedLinks &&
                        link.nestedLinks["Mild Steel"] &&
                        activeNestedLink === "Mild Steel" &&
                        link.nestedLinks["Mild Steel"].map(
                          (nestedLink, idx) => (
                            <a
                              key={idx}
                              href={`/${nestedLink
                                .toLowerCase()
                                .replace(" ", "-")}`}
                              className={
                                nestedLink === "Flat Products" ? "active" : ""
                              }
                            >
                              {nestedLink}
                            </a>
                          )
                        )}
                    </div>
                    {/* Product Column */}
                    <div className="divider"></div>
                    <div className="city-column">
                      <h4 style={{ color: "black" }}>Product</h4>
                      {productLinks.map((productLink, idx) => (
                        <a
                          key={idx}
                          href={`/${productLink
                            .toLowerCase()
                            .replace(" ", "-")}`}
                          className={
                            activeCityLink === productLink ? "active" : ""
                          }
                          onClick={() => handleCityLinkClick(productLink)}
                        >
                          {productLink}
                        </a>
                      ))}
                    </div>
                    <div className="divider"></div>
                    {/* City Column */}
                    <div className="city-column">
                      <h4 style={{ color: "black" }}>City</h4>
                      {cityLinks.map((cityLink, idx) => (
                        <a
                          key={idx}
                          href={`/${cityLink.toLowerCase().replace(" ", "-")}`}
                          className={
                            activeCityLink === cityLink ? "active" : ""
                          }
                          onClick={() => handleCityLinkClick(cityLink)}
                        >
                          {cityLink}
                        </a>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Subheader;
