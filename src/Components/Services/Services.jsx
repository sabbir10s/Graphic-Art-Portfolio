import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import ThreeD_LOGO_DESIGN from "../../Assets/icon/3D-LOGO-DESIGN.png";
import FLYER_DESIGN from "../../Assets/icon/FLYER-DESIGN.png";
import LOGO_DESIGN from "../../Assets/icon/LOGO-DESIGN.png";
import MENU_DESIGN from "../../Assets/icon/MENU-DESIGN.png";
import SOCIAL_MEDIA_DESIGN from "../../Assets/icon/SOCIAL-MEDIA-DESIGN.png";
import TRIFOLD_DESIGN from "../../Assets/icon/TRIFOLD-DESIGN.png";
import UI_UX_DESIGN from "../../Assets/icon/UI-UX-DESIGN.png";
import YOUTUBE_COVER_DESIGN from "../../Assets/icon/YOUTUBE-COVER-DESIGN.png";
const Services = () => {
  const services = [
    {
      title: "3D LOGO DESIGN",
      description:
        "is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s",
      image: ThreeD_LOGO_DESIGN,
    },
    {
      title: "FLYER DESIGN",
      description:
        "is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s",
      image: FLYER_DESIGN,
    },
    {
      title: "LOGO DESIGN",
      description:
        "is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s",
      image: LOGO_DESIGN,
    },
    {
      title: "MENU DESIGN",
      description:
        "is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s",
      image: MENU_DESIGN,
    },
    {
      title: "SOCIAL MEDIA DESIGN",
      description:
        "is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s",
      image: SOCIAL_MEDIA_DESIGN,
    },
    {
      title: "TRIFOLD DESIGN",
      description:
        "is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s",
      image: TRIFOLD_DESIGN,
    },
    {
      title: "UI UX DESIGN",
      description:
        "is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s",
      image: UI_UX_DESIGN,
    },
    {
      title: "YOUTUBE COVER DESIGN",
      description:
        "is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s",
      image: YOUTUBE_COVER_DESIGN,
    },
  ];

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  return (
    <section className="pb-16 bg-white">
      <div className="container mx-auto text-center">
        <h2 className="text-primary text-lg uppercase font-semibold mb-2">
          Services
        </h2>
        <h1 className="text-4xl font-bold text-secondary mb-10">
          Check Our Services
        </h1>
        <Slider {...settings}>
          {services.map((service, index) => (
            <div
              key={index}
              className="px-4" // Add padding to create gap
            >
              <div className="p-4 rounded-lg overflow-hidden bg-gray-100 transition-shadow hover:shadow-md">
                <img
                  src={service.image}
                  alt={service.title}
                  className="w-[150px] mx-auto"
                />
                <div className="p-6">
                  <h3 className="text-2xl capitalize font-semibold text-gray-800 mb-4">
                    {service.title}
                  </h3>
                  <p className="text-gray-600 text-sm">{service.description}</p>
                </div>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </section>
  );
};

export default Services;
