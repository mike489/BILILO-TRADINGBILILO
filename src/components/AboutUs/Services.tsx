import { Card, CardContent, Typography } from "@mui/material";
import PetsIcon from "@mui/icons-material/Pets";
import LocalHospitalIcon from "@mui/icons-material/LocalHospital";
import AgricultureIcon from "@mui/icons-material/Agriculture";
import LocalShippingIcon from "@mui/icons-material/LocalShipping";
import type { JSX } from "react";

interface Service {
  icon: JSX.Element;
  title: string;
  description: string;
}

const Services = () => {
  const services: Service[] = [
    {
      icon: <PetsIcon className="text-teal-500 text-5xl" />,
      title: "Veterinary Medicine",
      description:
        "We supply a comprehensive premium product range at highly competitive prices for veterinary medicine.",
    },
    {
      icon: <LocalHospitalIcon className="text-teal-500 text-5xl" />,
      title: "Human Medicine",
      description:
        "We consistently strive to source our human health by providing various healthcare products for all kinds of treatments and Supplies.",
    },
    {
      icon: <AgricultureIcon className="text-teal-500 text-5xl" />,
      title: "Agrochemical",
      description:
        "We supply a full range of Agrochemical products with efficient and cost-effective solutions.",
    },
    {
      icon: <LocalShippingIcon className="text-teal-500 text-5xl" />,
      title: "Export",
      description:
        "With a profound understanding of the global market, we export a diverse range of products including coffee, pulses, and oil seeds.",
    },
  ];

  return (
    <section className="py-16 bg-red ">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, index) => (
            <Card
              key={index}
              className="text-center hover:shadow-xl transition-shadow border-b-4 border-red-600"
            >
              <CardContent className="p-6 space-y-6 mt-10 mb-10">
                <div className="flex justify-center">{service.icon}</div>
                <Typography variant="h6" className="font-bold text-gray-800">
                  {service.title}
                </Typography>
                <Typography
                  variant="body2"
                  className="text-gray-600 leading-relaxed"
                >
                  {service.description}
                </Typography>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
