import { Facebook, Twitter, LinkedIn } from "@mui/icons-material";

const Footer = () => {
  return (
    <footer className="bg-[#1C1F26] text-white pt-10 pb-6 px-6 md:px-20">
      <div className="grid md:grid-cols-4 gap-10 text-sm">
        <div>
          <h3 className="text-red-600 font-semibold mb-3">
            About BILILO TRADINGBILILO
          </h3>
          <p className="mb-4">
            BILILO TRADINGBILILO is one of the leading importer, exporter and
            distributor of Veterinary pharmaceuticals, Human Pharmaceuticals and
            Agrochemical products for over 2 and half decades.
          </p>
          <p className="mb-4">
            We at BILILO TRADINGBILILO are into exports of Coffee, Seed oils and
            Pulses having over seven years of experience in export field.
          </p>
          <div className="flex gap-2">
            <a href="#" className="bg-red-600 p-2 rounded">
              <Facebook fontSize="small" />
            </a>
            <a href="#" className="bg-red-600 p-2 rounded">
              <Twitter fontSize="small" />
            </a>
            <a href="#" className="bg-red-600 p-2 rounded">
              <LinkedIn fontSize="small" />
            </a>
          </div>
        </div>

        <div>
          <h3 className="text-red-600 font-semibold mb-3">Useful Links</h3>
          <ul className="space-y-2">
            {["About", "Import", "Export", "Blog", "Career", "Contact"].map(
              (link) => (
                <li key={link}>
                  <span className="text-red-500 mr-2">•</span>
                  <a href="#">{link}</a>
                </li>
              )
            )}
          </ul>
        </div>

        <div>
          <h3 className="text-red-600 font-semibold mb-3">Our Products</h3>
          <ul className="space-y-2">
            {[
              "Human Medicine",
              "Veterinary Medicine",
              "Agrochemical Product",
              "Export",
            ].map((product) => (
              <li key={product}>
                <span className="text-red-500 mr-2">•</span>
                <a href="#">{product}</a>
              </li>
            ))}
          </ul>
        </div>

        <div className="relative h-64 rounded-lg overflow-hidden border border-gray-700">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1019.3299144288549!2d38.77168024381639!3d9.009470535840608!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x164b85ad35d3a529%3A0xe140c71d3cb637d8!2zQmFtYmlzIFN1cGVybWFya2V0IHwgQmFtYmlzIHwg4Ymj4Yid4Ymi4Yi1IOGIseGNkOGIreGIm-GIreGKrOGJtSB8IOGJo-GIneGJouGItQ!5e1!3m2!1sen!2set!4v1759999993960!5m2!1sen!2set"
            className="absolute inset-0 w-full h-full border-0"
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
      </div>

      <div className="mt-10 pt-6 border-t border-gray-700 text-sm flex flex-col md:flex-row items-center justify-between gap-2">
        <div>
          Copyright © {new Date().getFullYear()} BILILO TRADINGBILILO, All
          rights reserved.
        </div>
        <div>
          Made with <span className="text-red-600">♡</span> by{" "}
          <a href="#" className="text-red-500 hover:underline">
            Droga Consulting
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
