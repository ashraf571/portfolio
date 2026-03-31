import React from "react";
import { motion } from "framer-motion";
import { PricingPlansData } from "../data";

const Pricing = () => {
  return (
    <section id="pricing" className="bg-offwhite w-full py-10 px-4 md:px-16">
      <div className="text-center mb-8">
        <h2 className="text-3xl md:text-4xl font-bold text-darkblack">
          Portfolio Website Pricing
        </h2>
        <p className="text-base md:text-lg text-royalblue1 mt-2">
          Clear packages for portfolio and business websites.
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
        {PricingPlansData.map((plan, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.45, delay: index * 0.1, ease: "easeOut" }}
            whileHover={{ y: -8, scale: 1.02 }}
            className="bg-white rounded-xl border border-lightgrey shadow-md p-5 flex flex-col justify-between transition-shadow duration-300 hover:shadow-xl"
          >
            <div>
              <h3 className="text-xl font-bold text-royalblue1">{plan.title}</h3>
              <p className="text-sm text-darkblack mt-2">{plan.subtitle}</p>

              <div className="mt-4">
                <p className="text-2xl font-bold text-darkblack">{plan.price}</p>
                {plan.priceNote && (
                  <p className="text-sm text-lightgrey mt-1">{plan.priceNote}</p>
                )}
              </div>

              <ul className="mt-4 space-y-2">
                {plan.features.map((feature, featureIndex) => (
                  <li
                    key={featureIndex}
                    className="text-sm text-darkblack flex items-start gap-2"
                  >
                    <span className="text-greenglow font-bold">-</span>
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="mt-5">
              <button className="w-full bg-royalblue1 hover:bg-royalblue2 text-white py-2 rounded-md transition duration-300">
                {plan.cta}
              </button>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Pricing;
