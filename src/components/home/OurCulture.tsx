import { LightbulbOutlined, ShareOutlined } from "@mui/icons-material";
import { Box, Typography } from "@mui/material";

const OurCulture = () => {
  return (
    <div className="bg-[#1C1F26] py-32 px-6 md:px-20 text-white">
      <div className="flex flex-col md:flex-row justify-between items-center md:items-center gap-10">
        <div className="md:w-1/2">
          <Typography
            variant="h4"
            className="text-red-600 uppercase tracking-wider mb-2"
          >
            Our Culture
          </Typography>
          <Typography variant="h2" className="font-bold">
            What We think?
          </Typography>
        </div>

        <Box className="md:w-1/2 bg-[#EFF9F8] text-black rounded-md shadow-md p-6">
          <div className="mb-6 flex items-start gap-4">
            <LightbulbOutlined className="text-red-600 mt-1" fontSize="large" />
            <div>
              <Typography
                variant="h6"
                className="text-red-600 font-semibold mb-1"
              >
                Vision
              </Typography>
              <Typography variant="body2">
                Our vision is to emerge as a global leader in the trading
                industry, setting new benchmarks in customer service and
                quality. We aim to surpass customer expectations and be the
                preferred partner for all aspects related to human and
                veterinary pharmaceuticals, agrochemical and agricultural export
                products.
              </Typography>
            </div>
          </div>

          <div className="flex items-start gap-4">
            <ShareOutlined className="text-red-600 mt-1" fontSize="large" />
            <div>
              <Typography
                variant="h6"
                className="text-red-600 font-semibold mb-1"
              >
                Mission
              </Typography>
              <Typography variant="body2">
                Our mission is to accurately understand customer requirements
                and offer them flexibility in sourcing, competitive pricing,
                timely deliveries, and consistently deliver top-notch quality
                and service for all their needs.
              </Typography>
            </div>
          </div>
        </Box>
      </div>
    </div>
  );
};

export default OurCulture;
