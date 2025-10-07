import React from "react";
import { Breadcrumbs, Link, Typography } from "@mui/material";
import HeroImag from "../../assets/image/exporthero.jpg";

const HeroExport: React.FC = () => {
  return (
    <div className="relative h-[300px] md:h-[500px] w-full">
      <img
        src={HeroImag}
        alt="Export Background"
        className="absolute inset-0 w-full h-full object-cover"
      />
      <div className="absolute inset-0 bg-red-700/30 z-20"></div>

      <div className="absolute inset-0 bg-black/30 flex flex-col items-center justify-center text-white text-center px-4">
        <Typography variant="h3" className="font-bold mb-2">
          Export
        </Typography>
        <Breadcrumbs className="text-white" aria-label="breadcrumb">
          <Link underline="hover" color="inherit" href="/">
            Home
          </Link>
          <Typography color="text.primary" className="text-white">
            Export
          </Typography>
        </Breadcrumbs>
      </div>
    </div>
  );
};

export default HeroExport;
