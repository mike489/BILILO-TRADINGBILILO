import React from "react";
import { Breadcrumbs, Link, Typography } from "@mui/material";
import HeroImag from "../../assets/image/contactus.jpg";

const HeroContact: React.FC = () => {
  return (
    <div className="relative h-[300px] md:h-[500px] w-full">
      <img
        src={HeroImag}
        alt="Contact Us Background"
        className="absolute inset-0 w-full h-full object-cover"
      />

      <div className="absolute inset-0 bg-black/30 z-10"></div>

      <div className="absolute inset-0 bg-red-700/30 z-20"></div>

      <div className="absolute inset-0 z-30 flex flex-col items-center justify-center text-white text-center px-4">
        <Typography variant="h3" className="font-bold mb-2">
          Contact Us
        </Typography>
        <Breadcrumbs className="text-white" aria-label="breadcrumb">
          <Link
            underline="hover"
            color="inherit"
            href="/"
            sx={{ color: "white", fontWeight: "bold" }}
          >
            Home
          </Link>
          <Typography sx={{ color: "white", fontWeight: "bold" }}>
            Contact Us
          </Typography>
        </Breadcrumbs>
      </div>
    </div>
  );
};

export default HeroContact;
