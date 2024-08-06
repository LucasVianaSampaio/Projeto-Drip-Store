import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, A11y } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/thumbs";

interface Image {
  src: string;
  alt: string;
}

interface GalleryProps {
  images: Image[];
  width: number;
  height: number;
  radius?: number;
  showThumbs?: boolean;
}

function Gallery({ images, showThumbs, height, width, radius }: GalleryProps) {
  return (
    <div>
      {showThumbs ? (
        <>
          <Swiper
            modules={[Navigation, Pagination, A11y]}
            slidesPerView={1}
            navigation
            pagination={{ clickable: true }}
          >
            {images.map((image, index) => (
              <>
                <SwiperSlide key={index}>
                  <img
                    height={height}
                    width={width}
                    src={image.src}
                    alt={image.alt}
                  />
                </SwiperSlide>
              </>
            ))}
          </Swiper>
          <div className="inline-flex gap-5 mt-4">
            {images.map((image) => (
              <img
                style={{ borderRadius: radius }}
                height={96}
                width={117.81}
                src={image.src}
                alt={image.alt}
              />
            ))}
          </div>
        </>
      ) : (
        <Swiper
          modules={[Navigation, Pagination, A11y]}
          slidesPerView={1}
          navigation
          pagination={{ clickable: true }}
        >
          {images.map((image, index) => (
            <SwiperSlide key={index}>
              <img
                height={height}
                width={width}
                src={image.src}
                alt={image.alt}
              />
            </SwiperSlide>
          ))}
        </Swiper>
      )}
    </div>
  );
}

export default Gallery;
