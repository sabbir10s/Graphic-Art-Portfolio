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
        "A 3D logo design adds depth, dimension, and visual interest to a brand’s identity. It creates a more engaging, modern, and dynamic representation of the company’s values. By using various colors, textures, and lighting effects.",
      image: ThreeD_LOGO_DESIGN,
    },
    {
      title: "FLYER DESIGN",
      description:
        "A flyer design is a powerful marketing tool that captures attention and communicates key information quickly. Whether for events, promotions, or business services, a well-designed flyer uses bold visuals.",
      image: FLYER_DESIGN,
    },
    {
      title: "LOGO DESIGN",
      description:
        "Logo design is the process of creating a visual symbol that represents a brand or company. A well-crafted logo captures the essence of the brand’s identity, values, and mission. It uses colors, shapes.",
      image: LOGO_DESIGN,
    },
    {
      title: "MENU DESIGN",
      description:
        "A restaurant menu design is essential for showcasing a restaurant’s offerings in an appealing and organized manner. It reflects the establishment’s branding, atmosphere, and culinary style.",
      image: MENU_DESIGN,
    },
    {
      title: "SOCIAL MEDIA DESIGN",
      description:
        "Social media design focuses on creating visually appealing content tailored for various platforms like Instagram, Facebook, and Twitter. It includes graphics, posts, banners, and ads that align with the brand’s identity and message.",
      image: SOCIAL_MEDIA_DESIGN,
    },
    {
      title: "TRIFOLD DESIGN",
      description:
        "Trifold design is a popular layout for brochures, featuring three panels that fold to create a compact, informative presentation. It allows for a structured flow of content, making it ideal for marketing materials.",
      image: TRIFOLD_DESIGN,
    },
    {
      title: "UI UX DESIGN",
      description:
        "UI/UX design focuses on creating seamless and engaging user experiences for digital products. UI design deals with the layout, visuals, and interactivity, while UX (User Experience) design ensures the overall functionality.",
      image: UI_UX_DESIGN,
    },
    {
      title: "YOUTUBE COVER DESIGN",
      description:
        "A YouTube cover design is the first impression of a channel, setting the tone for its content. It visually represents the brand, theme, or niche, ensuring consistency and attracting viewers. A well-designed cover combines creativity.",
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
                  <p className="text-gray-600 text-sm text-justify">
                    {service.description}
                  </p>
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
