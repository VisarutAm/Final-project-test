import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { Button, CardActions, Box } from "@mui/material";
import LocalOfferIcon from "@mui/icons-material/LocalOffer";
import { useNavigate } from "react-router-dom";

const categoryStyles = {
  บริการทั่วไป: {
    backgroundColor: "#E7EEFF",
    color: "#0E3FB0",
  },
  บริการห้องครัว: {
    backgroundColor: "#ECE6FF",
    color: "#4512B4",
  },
  บริการห้องน้ำ: {
    backgroundColor: "#DFF9F6",
    color: "#00596C",
  },
};

const ServiceCard = ({ service }) => {
  const navigate = useNavigate();
  const handleMenuItemClick = (path) => {
    navigate(path);
  };

  const categoryStyle = categoryStyles[service.category.trim()] || {};

  return (
    <Card>
      <CardMedia
        component="img"
        height="140"
        image={service.image}
        alt={service.service_name}
      />
      <CardContent>
        <div
          className="text-xs mb-2 inline-block px-2 py-1 rounded"
          style={{
            backgroundColor: categoryStyle.backgroundColor,
            color: categoryStyle.color,
          }}
        >
          {service.category}
        </div>
        <h1 className="text-[18px]">{service.service_name}</h1>
        <Box display="flex" alignItems="center" className="text-[14px]">
          <LocalOfferIcon
            style={{
              color: "#8A95A6",
              marginRight: 6,
              width: "16px",
              height: "16px",
            }}
          />
          <p className="text-[14px] text-[#646C80]">{service.description}</p>
        </Box>
      </CardContent>
      <CardActions>
        <button className="font-prompt text-[16px] text-[#336DF2] underline decoration-solid" 
        onClick={() => handleMenuItemClick("/cart")}>เลือกบริการ</button>
        </CardActions>
    </Card>
  );
};

export default ServiceCard;
