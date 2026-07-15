import { useState } from "react";
import CertificateModal from "./CertificateModal";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

import certificates from "../data/certificates";
import CertificateCard from "./CertificateCard";

function Certificates() {

  const [currentIndex, setCurrentIndex] = useState(null);

  const openCertificate = (index) => {
    setCurrentIndex(index);
  };

  const closeModal = () => {
    setCurrentIndex(null);
  };

  const nextCertificate = () => {
    setCurrentIndex((prev) => (prev + 1) % certificates.length);
  };

  const prevCertificate = () => {
    setCurrentIndex((prev) =>
      prev === 0 ? certificates.length - 1 : prev - 1
    );
  };

  return (
    <section
      id="certificates"
      className="relative py-20 sm:py-24 lg:py-28 bg-black overflow-hidden"
    >
      {/* Background Glow */}

      <div className="absolute -left-40 top-20 w-80 h-80 bg-orange-500/15 blur-[120px] rounded-full"></div>

      <div className="absolute right-0 bottom-0 w-[400px] h-[400px] bg-orange-500/10 blur-[160px] rounded-full"></div>

      <div className="relative max-w-7xl mx-auto px-5 sm:px-8">

        {/* Heading */}

        <div className="text-center mb-12 sm:mb-16">

          <h2 className="text-4xl sm:text-5xl font-bold text-white">
            Certificates
          </h2>

          <p className="text-zinc-400 mt-4 text-base sm:text-lg max-w-2xl mx-auto">
            Professional Certifications &
            Continuous Learning
          </p>

        </div>

        {/* Swiper */}

        <Swiper
          modules={[Navigation, Pagination, Autoplay]}
          navigation
          pagination={{ clickable: true }}
          autoplay={{
            delay: 3000,
            disableOnInteraction: false,
          }}
          loop={true}
          spaceBetween={25}
          breakpoints={{
            0: {
              slidesPerView: 1,
            },
            640: {
              slidesPerView: 1,
            },
            768: {
              slidesPerView: 2,
            },
            1024: {
              slidesPerView: 3,
            },
          }}
        >

          {certificates.map((certificate, index) => (

            <SwiperSlide key={certificate.id}>

              <div
                onClick={() => openCertificate(index)}
                className="cursor-pointer pb-12"
              >

                <CertificateCard certificate={certificate} />

              </div>

            </SwiperSlide>

          ))}

        </Swiper>

      </div>

      {/* Modal */}

      <CertificateModal
        certificate={
          currentIndex !== null
            ? certificates[currentIndex]
            : null
        }
        onClose={closeModal}
        onNext={nextCertificate}
        onPrev={prevCertificate}
        current={
          currentIndex !== null
            ? currentIndex + 1
            : 0
        }
        total={certificates.length}
      />

    </section>
  );
}

export default Certificates;