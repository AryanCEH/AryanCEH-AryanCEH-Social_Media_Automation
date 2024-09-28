import React from "react";
import { motion } from "framer-motion";

const pricingPlans = [
  {
    tier: "Basic",
    price: "₹0",
    features: [
      "Generate up to 10 content pieces/month",
      "Basic scheduling",
      "Community Support",
    ],
    cta: "Get Started",
  },
  {
    tier: "Pro",
    price: "₹49/month",
    features: [
      "Unlimited content generation",
      "Advanced scheduling & automation",
      "Priority Support",
      "Access to premium features",
    ],
    cta: "Upgrade to Pro",
  },
  {
    tier: "Enterprise",
    price: "Contact Us",
    features: [
      "Customized solutions",
      "Dedicated account manager",
      "Enterprise-level support",
    ],
    cta: "Contact Sales",
  },
];

const Pricing = () => {
  return (
    <section id="pricing" className="py-20">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-12">Pricing Plans</h2>
        <div className="flex flex-wrap justify-center gap-8">
          {pricingPlans.map((plan, index) => (
            <motion.div
              key={index}
              className="w-full md:w-1/3 p-4"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
            >
              <div className="bg-white p-6 rounded-lg shadow-lg">
                <h3 className="text-2xl font-semibold mb-4">{plan.tier}</h3>
                <p className="text-4xl font-bold mb-6">{plan.price}</p>
                <ul className="text-left mb-6">
                  {plan.features.map((feature, idx) => (
                    <li key={idx} className="mb-2 flex items-center">
                      <span className="text-green-500 mr-2">&#10003;</span>
                      {feature}
                    </li>
                  ))}
                </ul>
                <button className="w-full bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600 transition">
                  {plan.cta}
                </button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Pricing;
