"use client";
import { Product } from "@/graphql/types/product";
import "swiper/css";
import "swiper/css/effect-fade";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Autoplay, EffectFade, Navigation, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import { FeaturedSectionCard } from "../reuseableUI/featuredSectionCard";

const FeaturedProductSectionClient = ({
  f_products,
}: {
  f_products: Product[];
}) => {
  return (
    <Swiper
      modules={[Navigation, Pagination, Autoplay, EffectFade]}
      autoplay={{ delay: 8000 }}
      slidesPerView={1}
      loop={true}
      className="h-full w-full"
    >
      {f_products.map((p, idx) => (
        <SwiperSlide key={idx}>
          <FeaturedSectionCard
            id={p.id}
            name={p.name}
            image={p?.media[0]?.url || "/no-image-avail-large.png"}
            href={`/product/${encodeURIComponent(p.slug)}`}
            category_id={p.category?.id || ""}
            description={p.description || ""}
            sku={p.defaultVariant?.sku || ""}
          />
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default FeaturedProductSectionClient;
