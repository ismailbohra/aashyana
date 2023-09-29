import Image from "next/image";
import FacebookRoundedIcon from "@mui/icons-material/FacebookRounded";
import InstagramIcon from '@mui/icons-material/Instagram';
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import Link from "next/link";

const TeamCard = ({ imgSrc, name, title,img,linkedin,insta,github }) => {
  return (
    <div className="relative flex flex-col gap-1 md:hover:shadow-lg rounded-xl md:py-10 team-card md:cursor-pointer">
      <Image
        src={img}
        width={130}
        height={130}
        alt="team member"
        className="drop-shadow-2xl w-20 sm:w-32 md:mb-5 mb-3 rounded-full border-2 border-rose-500 mx-auto"
      />
      <h2 className="text-base sm:text-xl font-semibold text-center">{name}</h2>
      <p className="text-center sm:text-base text-sm">{title}</p>
      <div className="flex md:flex-col gap-3 md:absolute md:bottom-12 md:right-8 md:translate-y-10 icons md:transition-all md:duration-500 md:opacity-0 mx-auto md:mx-0 md:text-rose-600">
        <Link
          target="_blank"
          href={insta}
        >
          <InstagramIcon className="text-xl hover:text-rose-600 cursor-pointer md:hover:text-gray-500" />
        </Link>
        <Link target="_blank" href={github}>
          <GitHubIcon className="text-xl hover:text-rose-600 cursor-pointer md:hover:text-gray-500" />
        </Link>
        <Link
          target="_blank"
          href={linkedin}
        >
          <LinkedInIcon className="text-xl hover:text-rose-600 cursor-pointer md:hover:text-gray-500" />
        </Link>
      </div>
    </div>
  );
};

const Team = () => {
  return (
    <section className="container mx-auto px-5 md:px-16 lg:px-24" id="team">
      <span className="service-name text-center ">OUR TEAM</span>
      <h2 className="title text-center md:w-1/2 mx-auto">
        The most qualified and talented individuals
      </h2>

      <div className="mx-auto grid grid-cols-2 lg:grid-cols-3 gap-y-8 sm:gap-8 mt-16">
        <TeamCard
          imgSrc={"/team/1.png"}
          name="Ismail Bohra"
          title="CEO and Founder"
          img={"https://ismailbohra.github.io/ismail-portfolio/images/ismail.jpeg"}
          linkedin={"https://www.linkedin.com/in/ismailbohraa/"}
          github={"https://github.com/ismailbohra"}
          insta={"https://www.instagram.com/smile.bohra/"}
        />
        <TeamCard
          imgSrc={"/team/3.png"}
          name="Moiz Bohra"
          title="Co-Founder"
          img={"https://avatars.githubusercontent.com/u/90457675?v=4"}
          linkedin={"https://www.linkedin.com/in/moizbohraa/"}
          github={"https://github.com/moizcode"}
          insta={"https://www.instagram.com/smile.bohra/"}
        />
        <TeamCard 
          imgSrc={"/team/2.png"} 
          name="Shamoil Rao" 
          title="Founder and Flutter Developer"
          img={"https://avatars.githubusercontent.com/u/110973254?v=4"}
          linkedin={"https://www.linkedin.com/in/moizbohraa/"}
          github={"https://github.com/ShamoilRao44"}
          insta={"https://www.instagram.com/smile.bohra/"} 
        />
        {/* <TeamCard
          imgSrc={"/team/4.png"}
          name="Shamoil Rao"
          title="CTO"
        />
        <TeamCard
          imgSrc={"/team/5.png"}
          name="Saimon Harmer"
          title="CEO and Founder"
        />
        <TeamCard
          imgSrc={"/team/6.png"}
          name="Aaron Nunez"
          title="Web Designer"
        /> */}
      </div>
    </section>
  );
};

export default Team;
