import React from "react";
import { Link } from "react-router-dom";

const About = () => {
  return (
    <section className=" ">

    
      <div className="max-w-7xl mx-auto px-4 py-20 text-center">
        <span className="text-sm font-semibold text-blue-600 tracking-wide">
          ABOUT US
        </span>

        <h1 className="mt-4 text-4xl md:text-5xl font-bold text-slate-900">
          Building a smarter way to shop for tech
        </h1>

        <p className="mt-6 max-w-2xl mx-auto text-lg text-slate-600">
          Bazzar is an electronics-focused marketplace built for people who care
          about quality, speed, and reliability.
        </p>
      </div>

      
      <div className="bg-white border-y border-slate-200">
        <div className="max-w-7xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-8 px-4 py-16 text-center">
          {[
            { label: "Happy Customers", value: "50K+" },
            { label: "Products Sold", value: "120K+" },
            { label: "Trusted Brands", value: "200+" },
            { label: "Support Availability", value: "24/7" },
          ].map((item, idx) => (
            <div key={idx}>
              <h3 className="text-3xl font-bold text-slate-900">
                {item.value}
              </h3>
              <p className="text-slate-600 mt-1">{item.label}</p>
            </div>
          ))}
        </div>
      </div>

   
      <div className="max-w-7xl mx-auto px-4 py-20">
        <h2 className="text-3xl font-bold text-slate-900 text-center">
          Why choose Bazzar?
        </h2>

        <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-8">
          {[
            {
              title: "Curated Quality",
              desc: "We partner only with trusted brands to ensure quality and reliability.",
            },
            {
              title: "Fast & Secure Delivery",
              desc: "Your orders are processed quickly and shipped with care.",
            },
            {
              title: "Customer-First Support",
              desc: "Our support team is always available to help you.",
            },
          ].map((item, idx) => (
            <div
              key={idx}
              className="bg-white rounded-xl border border-slate-200 p-6 shadow-sm hover:shadow-md transition"
            >
              <h3 className="text-xl font-semibold text-slate-900">
                {item.title}
              </h3>
              <p className="mt-3 text-slate-600">
                {item.desc}
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* VISION */}
      <div className="bg-slate-900 text-white">
        <div className="max-w-5xl mx-auto px-4 py-20 text-center">
          <h2 className="text-3xl font-bold">
            Our Vision
          </h2>
          <p className="mt-6 text-slate-300 text-lg">
            We believe technology should make life simpler, faster, and better.
            Our goal is to build a platform where innovation meets affordability
            — without compromise.
          </p>
        </div>
      </div>

      {/* CTA */}
      <div className="bg-white">
        <div className="max-w-5xl mx-auto px-4 py-20 text-center">
          <h3 className="text-2xl font-bold text-slate-900">
            Ready to explore the future of tech?
          </h3>
          <p className="mt-4 text-slate-600">
            Discover products designed to elevate your everyday life.
          </p>
          <Link to="/products">
            <button className="mt-8 bg-blue-700 hover:bg-blue-800 text-white px-8 py-3 rounded-lg font-medium transition">
              Browse Products
            </button>
          </Link>
        </div>
      </div>

    </section>
  );
};

export default About;
