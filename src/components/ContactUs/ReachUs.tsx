import React from "react";
import { TextField, Button } from "@mui/material";
import { LocationOn, Phone, Email, Fax } from "@mui/icons-material";
import heroContactImg from "../../assets/image/contact.jpg";

const ReachUs: React.FC = () => {
  return (
    <>
      <section className="w-full bg-white py-16 px-6 md:px-16">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-10">
          {/* LEFT SIDE — Contact Information */}
          <div>
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Reach Us</h2>
            <p className="text-gray-700 mb-10">
              Reach out to us and we will get in touch with you shortly.
            </p>

            {/* Address */}
            <div className="mb-8">
              <h3 className="text-xl font-semibold text-red-600 mb-2 flex items-center gap-2">
                <LocationOn fontSize="medium" /> Address
              </h3>
              <p className="text-gray-800 leading-relaxed">
                Next to Addis Hiwot General Hospital, Haile G/Selassie Avenue,
                <br />
                Bole sub city, Addis Ababa, Ethiopia.
              </p>
            </div>

            {/* Phone */}
            <div className="mb-8">
              <h3 className="text-xl font-semibold text-red-600 mb-2 flex items-center gap-2">
                <Phone fontSize="medium" /> Phone
              </h3>
              <ul className="text-gray-800 space-y-1">
                <li>+251 91 12121212</li>
                <li>+251 11 612121221</li>
                <li>+251 11 121212</li>
              </ul>
            </div>

            {/* Mail */}
            <div className="mb-8">
              <h3 className="text-xl font-semibold text-red-600 mb-2 flex items-center gap-2">
                <Email fontSize="medium" /> Mail Address
              </h3>
              <ul className="text-gray-800 space-y-1">
                <li>sdfsdfsdf@gmail.com</li>
                <li>sdfsdfsdf@yahoo.com</li>
              </ul>
            </div>

            {/* Fax */}
            <div>
              <h3 className="text-xl font-semibold text-red-600 mb-2 flex items-center gap-2">
                <Fax fontSize="medium" /> Fax
              </h3>
              <p className="text-gray-800">+251 11 1123235</p>
            </div>
          </div>

          {/* RIGHT SIDE — Contact Form */}
          <div className="bg-white shadow-lg rounded-2xl p-8">
            <form className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <TextField
                  label="Name"
                  variant="filled"
                  fullWidth
                  InputProps={{ style: { backgroundColor: "#edf7f6" } }}
                />
                <TextField
                  label="Phone"
                  variant="filled"
                  fullWidth
                  InputProps={{ style: { backgroundColor: "#edf7f6" } }}
                />
              </div>

              <TextField
                label="Email"
                type="email"
                variant="filled"
                fullWidth
                InputProps={{ style: { backgroundColor: "#edf7f6" } }}
              />
              <TextField
                label="Subject"
                variant="filled"
                fullWidth
                InputProps={{ style: { backgroundColor: "#edf7f6" } }}
              />
              <TextField
                label="Message"
                multiline
                rows={4}
                variant="filled"
                fullWidth
                InputProps={{ style: { backgroundColor: "#edf7f6" } }}
              />

              <Button
                type="submit"
                fullWidth
                variant="contained"
                sx={{
                  backgroundColor: "#b71c1c",
                  paddingY: "0.8rem",
                  fontWeight: "bold",
                  fontSize: "1rem",
                  "&:hover": { backgroundColor: "#a31515" },
                }}
              >
                Send my message
              </Button>
            </form>
          </div>
        </div>
      </section>
      <div className="relative  w-full ">
        <img
          src={heroContactImg}
          alt="Contact Us"
          className=" h-[230px] md:h-[400px] w-full object-cover"
        />
        <div className="absolute inset-0 bg-red-700/30 z-20"></div>
      </div>
    </>
  );
};

export default ReachUs;
