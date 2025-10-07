import React from "react";
import { Card, CardContent, Typography, Divider } from "@mui/material";
import albendazole from "../../assets/image/White-bolus.jpg";
import Greenbolus from "../../assets/image/Green-bolus.jpg";
import Fenbendazole from "../../assets/image/Fenbendazole-granule.jpg";

interface Product {
  name: string;
  image: string;
}

interface Category {
  title: string;
  products: Product[];
}

const categories: Category[] = [
  {
    title: "ANTHELMINTIC",
    products: [
      { name: "Albendazole", image: albendazole },
      { name: "Tetramisole", image: albendazole },
      {
        name: "Tetramisole + Oxyclozanide",
        image: albendazole,
      },
      {
        name: "Levamisole + Oxyclozanide",
        image: Greenbolus,
      },
      { name: "Fenbendazole Granule", image: Greenbolus },
      { name: "Ivermectin", image: albendazole },
    ],
  },
  {
    title: "ANTIBACTERIALS",
    products: [
      { name: "Oxytetracycline", image: Greenbolus },
      {
        name: "Oxytetracycline Aerosol Spray",
        image: albendazole,
      },
      {
        name: "Oxytetracycline Oral Powder",
        image: albendazole,
      },
      {
        name: "Sulfamethoxazole-Trimethoprim",
        image: Greenbolus,
      },
      {
        name: "Penicillin Procaine G + Dihydrostreptomycin Sulfate",
        image: albendazole,
      },
      { name: "Gentamycin", image: Fenbendazole },
      { name: "Intramammary", image: Fenbendazole },
    ],
  },
];

const ProductImport: React.FC = () => {
  return (
    <section className="px-6 md:px-16 py-12 bg-gray-50">
      {categories.map((category) => (
        <div key={category.title} className="mb-16">
          {/* Category Header */}
          <div className="mb-8">
            <Typography
              variant="h6"
              className="font-semibold text-gray-800 uppercase relative inline-block"
            >
              {category.title}
              <span className="absolute -bottom-1 left-0 w-10 h-[2px] bg-red-600 rounded-full"></span>
            </Typography>
          </div>

          {/* Products Grid */}
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6">
            {category.products.map((product) => (
              <Card
                key={product.name}
                className="shadow-sm hover:shadow-md transition-all duration-300 border-b-4 border-red-500 bg-white rounded-xl"
              >
                <CardContent className="flex flex-col items-center justify-center p-6">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="h-20 w-20 object-contain mb-4"
                  />
                  <Typography
                    variant="body1"
                    className="text-center font-medium text-gray-800"
                  >
                    {product.name}
                  </Typography>
                </CardContent>
              </Card>
            ))}
          </div>

          <Divider className="mt-12" />
        </div>
      ))}
    </section>
  );
};

export default ProductImport;
