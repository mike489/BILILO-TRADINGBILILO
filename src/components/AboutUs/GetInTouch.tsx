import { Typography } from "@mui/material";
import joinourteam from "../../assets/image/getintouch.jpg";

const GetInTouch = () => {
  return (
    <div
      className="relative bg-cover bg-center h-[400px] md:h-[450px] flex items-center justify-center"
      style={{ backgroundImage: `url(${joinourteam})` }}
    >
      <div className="absolute inset-0 bg-red-700/30 z-20"></div>

      <div className="flex flex-col items-center justify-center text-center text-white z-30 space-y-6 gap-3">
        <Typography
          variant="h3"
          className=" text-white"
          sx={{ fontWeight: "bold" }}
        >
          Get In Touch With Us!
        </Typography>
        <button className="bg-red-600 hover:bg-red-700 text-white font-semibold px-6 py-2 rounded shadow">
          Contact Us
        </button>
      </div>
    </div>
  );
};

export default GetInTouch;
