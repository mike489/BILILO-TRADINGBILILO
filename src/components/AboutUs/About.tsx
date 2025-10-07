import React from "react";
import { Typography } from "@mui/material";

const Welcome: React.FC = () => {
  return (
    <section className="bg-[#f0f9f8] py-16">
      <div className="container mx-auto grid md:grid-cols-2 gap-12 items-center">
        <div className="bg-white shadow-lg rounded-md overflow-hidden">
          <div className="grid grid-cols-3 text-center py-6 border-b-4 border-red-600">
            <div>
              <Typography variant="h5" className="font-bold text-gray-900">
                25<span className="text-red-600">+</span>
              </Typography>
              <Typography variant="body2" className="text-red-600">
                Years Experienced
              </Typography>
            </div>
            <div>
              <Typography variant="h5" className="font-bold text-gray-900">
                200<span className="text-red-600">+</span>
              </Typography>
              <Typography variant="body2" className="text-red-600">
                Quality Products
              </Typography>
            </div>
            <div>
              <Typography variant="h5" className="font-bold text-gray-900">
                250<span className="text-red-600">+</span>
              </Typography>
              <Typography variant="body2" className="text-red-600">
                Qualified Staffs
              </Typography>
            </div>
          </div>

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
            className="uppercase text-red-600 font-bold "
            sx={{ mb: 2 }}
          >
            Welcome To BILILO TRADINGBILILO
          </Typography>

          <Typography
            variant="body1"
            className="text-gray-700 mb-4 leading-relaxed"
          >
            BILILO TRADINGBILILO was established in 1994, with its head quarter
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
            We at BILILO TRADINGBILILO are into exports of Coffee, Seed oils and
            Pulses having over seven years of experience in export field.
          </Typography>
          <Typography
            variant="body1"
            className="text-gray-700 mb-6 leading-relaxed"
          >
            Our product line primarily includes Veterinary and Human
            Pharmaceuticals, Medical supplies and equipment, Agrochemical
            products, and agricultural export standard products.
          </Typography>
          <Typography
            variant="body1"
            className="text-gray-700 mb-6 leading-relaxed"
          >
            BILILO TRADINGBILILO is legally established and autonomous. The
            company is founded by Dr. Asfaw Teferi, Veterinarian professional,
            who is experienced in the field, high competence and know the
            business very well. Currently, Dr. Asfaw Teferi is leading the
            organization as Director.
          </Typography>
        </div>
      </div>
    </section>
  );
};

export default Welcome;
