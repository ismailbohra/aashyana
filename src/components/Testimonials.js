import Link from "next/link";
import StarRoundedIcon from "@mui/icons-material/StarRounded";
import StarHalfRoundedIcon from "@mui/icons-material/StarHalfRounded";
import Image from "next/image";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import ButtonGroup from "./ButtonGroup";

const Card = ({ star, title, imgSrc,desp,client_name }) => {
  return (
    <div className="mx-2 flex flex-col gap-4 select-none cursor-pointer border border-[#4e4e4e31] p-10 rounded-lg hover:shadow-xl transition-all">
      <div className="text-rose-600">
        <StarRoundedIcon />
        <StarRoundedIcon />
        <StarRoundedIcon />
        <StarRoundedIcon />
        {star}
      </div>
      <h2 className="text-lg font-semibold mb-2">{title}</h2>
      <p className="leading-loose">
        {desp}
      </p>
      <div className="flex items-center gap-4 mt-5">
        <Image src={imgSrc} width={50} height={50} alt="testimonials" />
        <div>
          <h3 className="font-semibold">{client_name}</h3>
          <Link
            href="https://github.com/ismailbohra"
            target="_blank"
            className="text-rose-600 font-[500]"
          >
            @{client_name}
          </Link>
        </div>
      </div>
    </div>
  );
};

const Testimonials = () => {
  return (
    <section
      className="relative container mx-auto px-5 md:px-16 flex flex-col gap-5"
      id="testimonial"
    >
      <div>
        <span className="service-name text-center ">TESTIMONIAL</span>
        <h2 className="title text-center ">Meet Client Satisfaction</h2>
      </div>
      <Carousel {...carouselParams}>
        <div>
          <Card
            star={<StarHalfRoundedIcon />}
            title="Modern look & trending design"
            imgSrc="/testimonials/1.png"
            client_name={"Speck"}
            desp={"Incredible team! They turned our app idea into a reality. The website is amazing too. Highly recommended."}
          />
        </div>
        <div>
          <Card
            title="Layout and organized layers"
            imgSrc="/testimonials/2.png"
            desp={"Professional and efficient. Their Android app exceeded our expectations. The website is a game-changer for us."}
            client_name={"Info Mart"}
          />
        </div>
        <div>
          <Card
            star={<StarRoundedIcon />}
            title="Design Quality & performance"
            imgSrc="/testimonials/3.png"
            desp={"Reliable and responsive. They delivered our app and website on time and within budget. Very satisfied!"}
            client_name={"CMS IpsAcademy"}
          />
        </div>
        <div>
          <Card
            star={<StarHalfRoundedIcon />}
            title="Layout and organized layers"
            imgSrc="/testimonials/4.png"
            desp={"Great communication, exceptional results. They made our vision come to life in both the app and website"}
            client_name={"OEPP Innovation"}
          />
        </div>
      </Carousel>
    </section>
  );
};

export default Testimonials;

const responsive = {
  superLargeDesktop: {
    breakpoint: { max: 4000, min: 3000 },
    items: 4,
  },
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 3,
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 2,
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1,
  },
};

const carouselParams = {
  additionalTransfrom: 0,
  arrows: false,
  autoPLaySpeed: 3000,
  centerMode: false,
  className: "",
  containerClass: "carousel-container",
  customButtonGroup: <ButtonGroup />,
  dotListClass: "",
  draggable: true,
  focusOnSelect: false,
  infinite: true,
  itemClass: "",
  keyBoardControl: true,
  minimumTouchDrag: 80,
  renderButtonGroupOutside: true,
  renderDotsOutside: false,
  responsive: responsive,
  showDots: false,
  sliderClass: "",
  slidesToSlide: 1,
};
