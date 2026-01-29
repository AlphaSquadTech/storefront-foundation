"use client";
import { brandSearchIcon } from "@/app/utils/svgs/brandsSearchIcon";
import Link from "next/link";
import { useEffect, useState } from "react";

interface Brand {
  id: string | number;
  name: string;
  logo?: string;
  slug?: string;
  image?: string;
}

interface BrandsListingClientProps {
  brands: Brand[];
}

const BrandsListingClient = ({ brands }: BrandsListingClientProps) => {
  const [filteredBrands, setFilteredBrands] = useState<Brand[]>(brands);
  const [searchTerm, setSearchTerm] = useState("");

  useEffect(() => {
    if (searchTerm.trim() === "") {
      setFilteredBrands(brands);
    } else {
      const filtered = brands.filter((brand) =>
        brand.name.toLowerCase().includes(searchTerm.toLowerCase())
      );
      setFilteredBrands(filtered);
    }
  }, [searchTerm, brands]);

  return (
    <div className="w-full">
      <div className="mb-8">
        <div className="relative max-w-2xl">
          <label htmlFor="brand-search" className="sr-only">
            Search brands
          </label>
          <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none" aria-hidden="true">
            {brandSearchIcon}
          </div>
          <input
            id="brand-search"
            type="search"
            placeholder="Search brands..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="block w-full pl-10 pr-3 py-3 border border-gray-300 leading-5 bg-white placeholder-gray-500 focus:outline-none focus:placeholder-gray-400 focus:ring-2 focus:ring-orange-500 focus:border-orange-500"
          />
        </div>
      </div>

      <div className="mb-6">
        <p className="text-gray-600 italic">
          We carry over{" "}
          <span className="font-semibold text-gray-900">{brands.length}</span>{" "}
          aftermarket manufacturers!
        </p>
      </div>

      {filteredBrands.length === 0 ? (
        <div className="text-center py-12">
          <p className="text-gray-500 text-lg">
            No brands found matching &quot;{searchTerm}&quot;
          </p>
        </div>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-4">
          {filteredBrands.map((brand) => (
            <Link
              href={`/brand/${brand.slug}`}
              key={brand.id}
              className="border border-gray-200 py-2 px-4 hover:shadow-lg transition-shadow duration-200 cursor-pointer bg-white flex flex-col items-center justify-center min-h-[140px]"
            >
              <div className="w-full h-24 mb-4 flex items-center justify-center">
                {brand.logo || brand.image ? (
                  /* eslint-disable-next-line @next/next/no-img-element */
                  <img
                    src={brand.logo || brand.image}
                    alt={brand.name}
                    className="max-w-full max-h-full object-contain p-2"
                  />
                ) : (
                  <div className="text-gray-300 text-4xl font-bold">
                    {brand.name.charAt(0)}
                  </div>
                )}
              </div>

              <h3 className="text-center text-sm font-normal text-gray-900 line-clamp-2 font-secondary">
                {brand.name}
              </h3>
            </Link>
          ))}
        </div>
      )}
    </div>
  );
};

export default BrandsListingClient;
