// import * as React from "react";
// import Card from "@mui/material/Card";
// import CardContent from "@mui/material/CardContent";
// import CardMedia from "@mui/material/CardMedia";
// import Typography from "@mui/material/Typography";
// import { Button, CardActions, Box } from "@mui/material";
// import LocalOfferIcon from "@mui/icons-material/LocalOffer";
// import { useNavigate } from "react-router-dom";

// const categoryStyles = {
//   บริการทั่วไป: {
//     backgroundColor: "#E7EEFF",
//     color: "#0E3FB0",
//   },
//   บริการห้องครัว: {
//     backgroundColor: "#ECE6FF",
//     color: "#4512B4",
//   },
//   บริการห้องน้ำ: {
//     backgroundColor: "#DFF9F6",
//     color: "#00596C",
//   },
// };

// const ServiceCard = ({ service }) => {
//   const navigate = useNavigate();
//   const handleMenuItemClick = (path) => {
//     navigate(path);
//   };

//   const categoryStyle = categoryStyles[service.category.trim()] || {};

//   const prices = service.service_detail
//   const minPrice = prices[0]
//   const maxPrice = prices[length-1]

//   console.log(service.service_detail);

//   return (
//     <Card>
//       <CardMedia
//         component="img"
//         height="140"
//         image={service.image}
//         alt={service.service_name}
//       />
//       <CardContent>
//         <div
//           className="text-xs mb-2 inline-block px-2 py-1 rounded"
//           style={{
//             backgroundColor: categoryStyle.backgroundColor,
//             color: categoryStyle.color,
//           }}
//         >
//           {service.category}
//         </div>
//         <h1 className="text-[18px]">{service.service_name}</h1>
//         <Box display="flex" alignItems="center" className="text-[14px]">
//           <LocalOfferIcon
//             style={{
//               color: "#8A95A6",
//               marginRight: 6,
//               width: "16px",
//               height: "16px",
//             }}
//           />
//            <Typography className="text-[14px] text-[#646C80]">
//             {`ค่าบริการประมาณ ${minPrice} - ${maxPrice} ฿`}
//           </Typography>
//         </Box>
//       </CardContent>
//       <CardActions>
//         <button className="font-prompt text-[16px] text-[#336DF2] underline decoration-solid" 
//         onClick={() => handleMenuItemClick("/login")}>เลือกบริการ</button>
//         </CardActions>
//     </Card>
//   );
// };

// export default ServiceCard;

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

  // Ensure service_detail is defined and not empty
  let minPrice = 0;
  let maxPrice = 0;

  if (service.service_detail && service.service_detail.length > 0) {
    const prices = service.service_detail.map(detail => detail.price);
    minPrice = Math.min(...prices);
    maxPrice = Math.max(...prices);
  }

  console.log(service.service_detail);

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
        <Typography variant="h6" className="text-[18px]">
          {service.service_name}
        </Typography>
        <Box display="flex" alignItems="center" className="text-[14px]">
          <LocalOfferIcon
            style={{
              color: "#8A95A6",
              marginRight: 6,
              width: "16px",
              height: "16px",
            }}
          />
          <Typography className="text-[14px] text-[#646C80]">
            {service.service_detail && service.service_detail.length > 0
              ? `ค่าบริการประมาณ ${minPrice} - ${maxPrice} ฿`
              : "ไม่พบข้อมูลราคา"}
          </Typography>
        </Box>
      </CardContent>
      <CardActions>
        <Button
          variant="text"
          className="font-prompt text-[16px] text-[#336DF2]"
          onClick={() => handleMenuItemClick("/login")}
        >
          เลือกบริการ
        </Button>
      </CardActions>
    </Card>
  );
};

export default ServiceCard;

