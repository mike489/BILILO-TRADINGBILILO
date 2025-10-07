// src/components/ProductGrid.tsx
import React from "react";
import { Card, CardContent, Typography } from "@mui/material";
import coffee from "../../assets/image/coffee.jpg";
import Sesame from "../../assets/image/Sesame.jpg";
import Green from "../../assets/image/Green-mung.jpg";

interface ProductItem {
  name: string;
  image: string;
}

interface ProductGroup {
  title: string;
  items: ProductItem[];
}

const productData: ProductGroup[] = [
  {
    title: "Coffee",
    items: [
      { name: "Limu Coffee", image: coffee },
      { name: "Yirgachefe Coffee", image: coffee },
      { name: "Sidama Coffee", image: coffee },
      { name: "Djimma Coffee", image: coffee },
      { name: "Leku Coffee", image: coffee },
      { name: "Gugi Coffee", image: coffee },
      { name: "Kaffa Coffee", image: coffee },
      { name: "Harar Coffee", image: coffee },
      { name: "Washed Coffee", image: coffee },
      { name: "Unwashed Coffee", image: coffee },
      { name: "Others", image: coffee },
    ],
  },
  {
    title: "Oil Seeds",
    items: [
      { name: "Humera Sesame", image: Sesame },
      { name: "Wollega Sesame", image: Sesame },
      { name: "Others", image: Sesame },
    ],
  },
  {
    title: "Pulses",
    items: [
      { name: "Soya-bean", image: Green },
      { name: "Chick peas", image: Green },
      { name: "White Pea Beans", image: Green },
      { name: "Red kidney bean", image: Green },
      { name: "Green Mung bean", image: Green },
      { name: "Pinto bean", image: Green },
      { name: "Kabuli", image: Green },
      { name: "Others", image: Green },
    ],
  },
];

const ProductExport: React.FC = () => {
  return (
    <div className="p-6 space-y-12">
      {productData.map((group) => (
        <div>
          <div className="mb-8">
            <Typography
              variant="h6"
              className="font-semibold text-gray-800 uppercase relative inline-block"
            >
              {group.title}
              <span className="absolute -bottom-1 left-0 w-10 h-[2px] bg-red-600 rounded-full"></span>
            </Typography>
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4">
            {group.items.map((item, idx) => (
              <Card
                key={idx}
                className="shadow-sm hover:shadow-md transition-all duration-300 border-b-4 border-red-500 bg-white rounded-xl"
              >
                <CardContent className="flex flex-col items-center justify-center p-6">
                  <img
                    src={item.image}
                    alt={item.name}
                    className="h-20 w-20 object-contain mb-4"
                  />
                  <Typography
                    variant="body1"
                    className="text-center font-medium text-gray-800"
                  >
                    {item.name}
                  </Typography>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};

export default ProductExport;
