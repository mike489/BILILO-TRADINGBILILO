import HeroExport from "../components/export/heroExport";
import ProductExport from "../components/export/productsExport";

const ExportPage = () => {
  return (
    <div className="min-h-screen bg-white">
      <HeroExport />
      <ProductExport />
    </div>
  );
};

export default ExportPage;
