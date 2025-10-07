import React from "react";
import { Typography } from "@mui/material";

const StatsOverlay = () => {
  return (
    <div className="container mx-auto relative -top-12 z-20">
      <div className="bg-white shadow-xl rounded-lg mx-4">
        <div className="grid grid-cols-3 text-center py-8 border-b-4 border-red-600">
          <div className="border-r border-gray-200">
            <Typography variant="h4" className="font-bold text-gray-900">
              25<span className="text-red-600">+</span>
            </Typography>
            <Typography variant="body2" className="text-red-600 font-semibold">
              Years Experienced
            </Typography>
          </div>
          <div className="border-r border-gray-200">
            <Typography variant="h4" className="font-bold text-gray-900">
              200<span className="text-red-600">+</span>
            </Typography>
            <Typography variant="body2" className="text-red-600 font-semibold">
              Quality Products
            </Typography>
          </div>
          <div>
            <Typography variant="h4" className="font-bold text-gray-900">
              250<span className="text-red-600">+</span>
            </Typography>
            <Typography variant="body2" className="text-red-600 font-semibold">
              Qualified Staffs
            </Typography>
          </div>
        </div>
      </div>
    </div>
  );
};

export default StatsOverlay;
