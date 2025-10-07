import React from "react";
import { Typography } from "@mui/material";
import HeroImag from "../../assets/image/aboutus.jpg";

const HeroAbout: React.FC = () => {
  return (
    <div className="relative h-[300px] md:h-[350px] w-full">
      <img
        src={HeroImag}
        alt="About Us Background"
        className="absolute inset-0 w-full h-full object-cover"
      />

      <div className="absolute inset-0 bg-black/30 z-10"></div>

      <div className="absolute inset-0 bg-red-700/30 z-20"></div>

      <div className="absolute inset-0 z-30 flex flex-col items-center justify-center text-white text-center px-4">
        <Typography variant="h3" className="font-bold mb-2">
          About Us
        </Typography>
      </div>
    </div>
  );
};

export default HeroAbout;
