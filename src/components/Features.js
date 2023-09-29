import Image from "next/image";
import React from "react";

const FeatureProduct = ({ imgSrc, title, desc }) => {
  return (
    <div>
      <Image
        src={imgSrc}
        width={100}
        height={100}
        alt="features"
        className="mx-auto"
      />
      <h3 className="text-xl font-semibold">{title}</h3>
      <p>{desc}</p>
    </div>
  );
};

const Features = () => {
  return (
    <section className="container mx-auto px-5 md:px-16" id="features">
      <span className="service-name text-center">WHATS THE FUNCTION</span>
      <h2 className="title text-center">Meet the feature of product </h2>

      <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4 md:gap-5 text-center mt-10 md:mt-20">
        <FeatureProduct
          imgSrc="/features/1.svg"
          title="Fast Performance"
          desc="Engineered for speed, delivering exceptional user experiences in the competitive digital landscape."
        />
        <FeatureProduct
          imgSrc="/features/2.svg"
          title="SEO Friendly"
          desc="Strategies to boost search engine visibility, driving organic traffic and enhancing online discoverability."
        />
        <FeatureProduct
          imgSrc="/features/3.svg"
          title="Mobile Responsiveness"
          desc="Adaptive designs for a seamless experience on smartphones and tablets, meeting the mobile-first demand."
        />
        <FeatureProduct
          imgSrc="/features/4.svg"
          title="Customer Support"
          desc="Reliable 24/7 assistance, ensuring your questions are answered and issues resolved promptly."
        />
      </div>
    </section>
  );
};

export default Features;
