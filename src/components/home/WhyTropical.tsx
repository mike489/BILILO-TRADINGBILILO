import React from "react";
import DescriptionIcon from "@mui/icons-material/Description";
import MonetizationOnIcon from "@mui/icons-material/MonetizationOn";
import UndoIcon from "@mui/icons-material/Undo";

const features = [
  {
    icon: <DescriptionIcon fontSize="large" className="text-red-700" />,
    title: "Certified Products",
    subtitle: "100% Guaranteed",
  },
  {
    icon: <MonetizationOnIcon fontSize="large" className="text-red-700" />,
    title: "Huge Savings",
    subtitle: "At Lowest Price",
  },
  {
    icon: <UndoIcon fontSize="large" className="text-red-700" />,
    title: "Easy Returns",
    subtitle: "No Question Asked",
  },
];

const WhyTropicalPharma: React.FC = () => {
  return (
    <section className="h-screen flex items-center bg-white">
      <div className="max-w-7xl mx-auto px-6 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="text-left">
            <p className="text-sm tracking-widest text-red-700 font-semibold uppercase mb-3">
              Tropical Trend
            </p>
            <h2 className="text-4xl font-bold text-gray-900 mb-6">
              Why Tropical Pharma?
            </h2>
            <p className="text-gray-600 text-lg leading-relaxed">
              Discover the difference with Tropical Pharma - your trusted
              partner for quality healthcare solutions. We combine excellence,
              affordability, and convenience to serve you better.
            </p>
          </div>

          <div className="grid grid-cols-1 gap-8">
            {features.map((item, idx) => (
              <div
                key={idx}
                className="bg-white shadow-lg p-10 rounded-lg border-l-4 border-red-700 hover:shadow-xl transition-all duration-300 hover:scale-105"
              >
                <div className="flex items-start space-x-6">
                  <div className="flex-shrink-0">
                    <div className="p-3 bg-red-50 rounded-lg">{item.icon}</div>
                  </div>
                  <div className="text-left">
                    <h3 className="text-2xl font-bold text-gray-800 mb-2">
                      {item.title}
                    </h3>
                    <p className="text-lg text-gray-600">{item.subtitle}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyTropicalPharma;
