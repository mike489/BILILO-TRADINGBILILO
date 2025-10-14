import React from "react";
import { Button, Typography } from "@mui/material";

const About: React.FC = () => {
  return (
    <section className="bg-[#f0f9f8] py-16">
      <div className="container mx-auto grid md:grid-cols-2 gap-12 items-center mt-15">
        <div className="bg-white shadow-lg rounded-md overflow-hidden">
          <div>
            <img
              src="/images/building.jpg"
              alt="Tropical Pharma HQ"
              className="w-full h-64 object-cover"
            />
          </div>
        </div>

        <div>
          <Typography
            variant="h6"
            className="uppercase text-red-600 font-bold mb-4"
          >
            About Tropical Pharma
          </Typography>

          <Typography
            variant="body1"
            className="text-gray-700 mb-4 leading-relaxed"
          >
            Tropical pharma was established in 1994, with its head quarter
            located in Bole sub city, Addis Ababa, Ethiopia. It has branches in
            Bahir Dar, Dessie, Hawassa, Adama and Jimma.
          </Typography>

          <Typography
            variant="body1"
            className="text-gray-700 mb-4 leading-relaxed"
          >
            We’re one of the leading importer and distributor of Veterinary and
            Human Pharmaceuticals and Agrochemical products for over 2 and half
            decades.
          </Typography>

          <Typography
            variant="body1"
            className="text-gray-700 mb-6 leading-relaxed"
          >
            We at Tropical Pharma are into exports of Coffee, Seed oils and
            Pulses having over seven years of experience in export field.
          </Typography>

          <Button
            variant="contained"
            sx={{
              backgroundColor: "#c53030",
              "&:hover": { backgroundColor: "#9b2c2c" },
              textTransform: "none",
              px: 3,
              py: 1.2,
            }}
          >
            Discover More
          </Button>
        </div>
      </div>
    </section>
  );
};

export default About;
