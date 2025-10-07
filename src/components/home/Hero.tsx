import React from "react";
import { Button, Container, Typography } from "@mui/material";
import pills from "../../assets/image/pharmaceutical-pills-and-medicine-bottles.jpg";
import medicalkit from "../../assets/image/medical-kit-with-digital-health-icons.jpg";

const Hero: React.FC = () => {
  return (
    <section className="relative bg-gradient-to-r from-gray-100 to-blue-200">
      <Container
        maxWidth="lg"
        className="flex flex-col md:flex-row items-center justify-between py-20"
      >
        <div className="text-left max-w-xl space-y-5">
          <Typography
            variant="subtitle2"
            className="uppercase tracking-widest text-red-600 font-semibold"
          >
            Welcome to
          </Typography>
          <Typography
            variant="h2"
            className="font-bold text-gray-900"
            gutterBottom
          >
            BILILO TRADINGBILILO
          </Typography>
          <Typography variant="body1" className="text-gray-700 leading-relaxed">
            With over two and a half decades of experience, we stand as a
            prominent importer and distributor of Human & Veterinary
            pharmaceuticals and agrochemical products. Since 2010, we have also
            been actively engaged in the export of coffee, oil seeds, and
            pulses.
          </Typography>

          <Button
            variant="contained"
            color="primary"
            sx={{ mt: 2, textTransform: "none" }}
          >
            Learn More
          </Button>
        </div>

        <div className="mt-10 md:mt-0 md:ml-10 flex justify-center relative">
          <div className="flex space-x-1">
            <div className="rounded-full border-4 border-red-500 p-2 bg-white shadow-lg">
              <img
                src={pills}
                alt="pills"
                className="w-40 h-40 object-contain rounded-full"
              />
            </div>

            <div className="rounded-full border-4 border-green-500 p-2 bg-white shadow-lg">
              <img
                src={medicalkit}
                alt="healthcare"
                className="w-40 h-40 object-contain rounded-full"
              />
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default Hero;
