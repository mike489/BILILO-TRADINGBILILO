import { Card, CardContent, Typography } from "@mui/material";
import veterinarian from "../../assets/image/veterinarian-examining-animal.jpg";
import humanMedicines from "../../assets/image/pharmacist-with-medicine.jpg";
import agrochemical from "../../assets/image/agricultural-chemicals-and-farming.jpg";
import exporproduct from "../../assets/image/shipping-port-with-cargo-containers.jpg";

interface Product {
  title: string;
  image: string;
}

const Products = () => {
  const products: Product[] = [
    {
      title: "Veterinary Medicine",
      image: veterinarian,
    },
    {
      title: "Human Medicines",
      image: humanMedicines,
    },
    {
      title: "Agrochemical",
      image: agrochemical,
    },
    {
      title: "Export",
      image: exporproduct,
    },
  ];

  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="mb-8">
          <p className="text-red-600 font-semibold mb-2">OUR PRODUCTS</p>
          <h2 className="text-3xl font-bold text-gray-800">
            Browse our products
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {products.map((product, index) => (
            <Card
              key={index}
              className="relative overflow-hidden group cursor-pointer hover:shadow-2xl transition-shadow"
            >
              <div className="relative h-64">
                <img
                  src={product.image || "/placeholder.svg"}
                  alt={product.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />
                <CardContent className="absolute bottom-0 left-0 right-0 p-6">
                  <Typography variant="h6" className="font-bold text-white">
                    {product.title}
                  </Typography>
                </CardContent>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Products;
