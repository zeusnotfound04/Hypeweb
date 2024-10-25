import React, { useState } from 'react';
import { CheckmarkIcon, DownSVG } from "./CustomSVG";

// Data for each pricing card
const pricingCards = [
  {
    title: 'Single Web Hosting',
    originalPrice: '₹399.00',
    discountPrice: '₹69.00',
    renewalPrice: '₹179.00',
    description: 'A perfect solution for beginner',
    isPopular: false,  
    features: {
      TopFeatures: [
        { value: '100', label: 'Websites' },
        { value: 'Unlimited', label: 'Bandwidth' },
        { value: '200 GB', label: 'SSD Storage' },
        { value: 'Free', label: 'Domain (₹699.00 value)' },
        { value: 'Unlimited', label: 'Free SSL' },
        { value: 'Daily', label: 'Backups (₹1,380.00 value)' },
      ],
      Performance: [
        { value: '1.5 GB', label: 'RAM' },
        { value: '2 CPU', label: 'Cores' },
        { value: 'Dedicated', label: 'Resources' },
        { value: 'Dedicated', label: 'IP Address' },
      ],
      Security: [
        { value: 'Cloudflare', label: 'Protected Nameservers' },
        { value: 'Malware', label: 'Scanner' },
      ],
      Bonus: [
        { value: 'Free', label: 'Email' },
        { value: 'Free', label: 'Migration' },
      ],
      WordPress: [
        { value: 'Managed', label: 'WordPress' },
        { value: 'WordPress', label: '' },
        { value: 'WP-CLI', label: '' },
        { value: 'WordPress', label: 'Multisite' },
        { value: 'Object Cache', label: 'for WordPress' },
        { value: 'WordPress', label: 'Staging Tool' },
      ],
      Support: [
        { value: '30-Day', label: 'Money-Back Guarantee' },
        { value: '24/7', label: 'Support' },
        { value: '99.9%', label: 'Uptime Guarantee' },
        { value: 'Global', label: 'Data Centers' },
      ],
      MoreFeatures: {
        technicalDetails: [
          { value: 'cPanel', label: 'Control Panel' },
          { value: 'PHP 7.4+', label: 'Supported' },
          { value: 'Node.js', label: 'Version 14+' },
        ],
        serviceAndSupport: [
          { value: '24/7', label: 'Technical Support' },
          { value: 'Regular', label: 'Security Updates' },
        ],
      },
    },
  },
  {
    title: 'Premium Web Hosting',
    originalPrice: '₹589.00',
    discountPrice: '₹149.00',
    renewalPrice: '₹249.00',
    description: 'Perfect package for personal portfolio websites',
    isPopular: true,  
    features: {
      TopFeatures: [
        { value: '100', label: 'Websites' },
        { value: 'Unlimited', label: 'Bandwidth' },
        { value: '200 GB', label: 'SSD Storage' },
        { value: 'Free', label: 'Domain (₹699.00 value)' },
        { value: 'Unlimited', label: 'Free SSL' },
        { value: 'Daily', label: 'Backups (₹1,380.00 value)' },
      ],
      Performance: [
        { value: '1.5 GB', label: 'RAM' },
        { value: '2 CPU', label: 'Cores' },
        { value: 'Dedicated', label: 'Resources' },
        { value: 'Dedicated', label: 'IP Address' },
      ],
      Security: [
        { value: 'Cloudflare', label: 'Protected Nameservers' },
        { value: 'Malware', label: 'Scanner' },
      ],
      Bonus: [
        { value: 'Free', label: 'Email' },
        { value: 'Free', label: 'Migration' },
      ],
      WordPress: [
        { value: 'Managed', label: 'WordPress' },
        { value: 'WordPress', label: '' },
        { value: 'WP-CLI', label: '' },
        { value: 'WordPress', label: 'Multisite' },
        { value: 'Object Cache', label: 'for WordPress' },
        { value: 'WordPress', label: 'Staging Tool' },
      ],
      Support: [
        { value: '30-Day', label: 'Money-Back Guarantee' },
        { value: '24/7', label: 'Support' },
        { value: '99.9%', label: 'Uptime Guarantee' },
        { value: 'Global', label: 'Data Centers' },
      ],
      MoreFeatures: {
        technicalDetails: [
          { value: 'cPanel', label: 'Control Panel' },
          { value: 'PHP 7.4+', label: 'Supported' },
          { value: 'Node.js', label: 'Version 14+' },
        ],
        serviceAndSupport: [
          { value: '24/7', label: 'Technical Support' },
          { value: 'Regular', label: 'Security Updates' },
        ],
      },
    },
  },
  {
    title: 'Premium Web Hosting',
    originalPrice: '₹589.00',
    discountPrice: '₹449.00',
    renewalPrice: '₹249.00',
    description: 'Perfect package for personal portfolio websites',
    isPopular: false,  
    features: {
      TopFeatures: [
        { value: '100', label: 'Websites' },
        { value: 'Unlimited', label: 'Bandwidth' },
        { value: '200 GB', label: 'SSD Storage' },
        { value: 'Free', label: 'Domain (₹699.00 value)' },
        { value: 'Unlimited', label: 'Free SSL' },
        { value: 'Daily', label: 'Backups (₹1,380.00 value)' },
      ],
      Performance: [
        { value: '1.5 GB', label: 'RAM' },
        { value: '2 CPU', label: 'Cores' },
        { value: 'Dedicated', label: 'Resources' },
        { value: 'Dedicated', label: 'IP Address' },
      ],
      Security: [
        { value: 'Cloudflare', label: 'Protected Nameservers' },
        { value: 'Malware', label: 'Scanner' },
      ],
      Bonus: [
        { value: 'Free', label: 'Email' },
        { value: 'Free', label: 'Migration' },
      ],
      WordPress: [
        { value: 'Managed', label: 'WordPress' },
        { value: 'WordPress', label: '' },
        { value: 'WP-CLI', label: '' },
        { value: 'WordPress', label: 'Multisite' },
        { value: 'Object Cache', label: 'for WordPress' },
        { value: 'WordPress', label: 'Staging Tool' },
      ],
      Support: [
        { value: '30-Day', label: 'Money-Back Guarantee' },
        { value: '24/7', label: 'Support' },
        { value: '99.9%', label: 'Uptime Guarantee' },
        { value: 'Global', label: 'Data Centers' },
      ],
      MoreFeatures: {
        technicalDetails: [
          { value: 'cPanel', label: 'Control Panel' },
          { value: 'PHP 7.4+', label: 'Supported' },
          { value: 'Node.js', label: 'Version 14+' },
        ],
        serviceAndSupport: [
          { value: '24/7', label: 'Technical Support' },
          { value: 'Regular', label: 'Security Updates' },
        ],
      },
    },
  },
  {
    title: 'Premium Web Hosting',
    originalPrice: '₹589.00',
    discountPrice: '₹749.00',
    renewalPrice: '₹249.00',
    description: 'Perfect package for personal portfolio websites',
    isPopular: false,  
    features: {
      TopFeatures: [
        { value: '100', label: 'Websites' },
        { value: 'Unlimited', label: 'Bandwidth' },
        { value: '200 GB', label: 'SSD Storage' },
        { value: 'Free', label: 'Domain (₹699.00 value)' },
        { value: 'Unlimited', label: 'Free SSL' },
        { value: 'Daily', label: 'Backups (₹1,380.00 value)' },
      ],
      Performance: [
        { value: '1.5 GB', label: 'RAM' },
        { value: '2 CPU', label: 'Cores' },
        { value: 'Dedicated', label: 'Resources' },
        { value: 'Dedicated', label: 'IP Address' },
      ],
      Security: [
        { value: 'Cloudflare', label: 'Protected Nameservers' },
        { value: 'Malware', label: 'Scanner' },
      ],
      Bonus: [
        { value: 'Free', label: 'Email' },
        { value: 'Free', label: 'Migration' },
      ],
      WordPress: [
        { value: 'Managed', label: 'WordPress' },
        { value: 'WordPress', label: '' },
        { value: 'WP-CLI', label: '' },
        { value: 'WordPress', label: 'Multisite' },
        { value: 'Object Cache', label: 'for WordPress' },
        { value: 'WordPress', label: 'Staging Tool' },
      ],
      Support: [
        { value: '30-Day', label: 'Money-Back Guarantee' },
        { value: '24/7', label: 'Support' },
        { value: '99.9%', label: 'Uptime Guarantee' },
        { value: 'Global', label: 'Data Centers' },
      ],
      MoreFeatures: {
        technicalDetails: [
          { value: 'cPanel', label: 'Control Panel' },
          { value: 'PHP 7.4+', label: 'Supported' },
          { value: 'Node.js', label: 'Version 14+' },
        ],
        serviceAndSupport: [
          { value: '24/7', label: 'Technical Support' },
          { value: 'Regular', label: 'Security Updates' },
        ],
      },
    },
  },
  
 
];

function Pricing() {
    const [expandedCard, setExpandedCard] = useState(null);
  
    const toggleMoreFeatures = (index) => {
      if (expandedCard === index) {
        setExpandedCard(null); 
      } else {
        setExpandedCard(index); 
      }
    };
  
    return (
      <div className='w-full'>
        <div className="max-w-[1150px] w-11/12 flex flex-col gap-[18px] mx-auto justify-around items-center py-[30px]">
          <h1 className="font-semibold text-4xl text-center text-[#2F1C6A]">Choose Your Web Hosting Plan</h1>
          <div className="flex lg:flex-row flex-col gap-[25px] justify-between mt-16">
            {pricingCards.map((card, index) => (
              <div key={index} className="w-full max-w-[390px] hover:scale-[1.02] hover:duration-300 border border-[#e64a27] rounded-lg shadow-lg relative">
                
                {card.isPopular && (
                  <div className="absolute top-0 right-0 bg-[#FFAB00] text-white font-semibold text-sm py-1 px-3 rounded-bl-lg">
                    Most Popular
                  </div>
                )}
  
                <div className="flex flex-col px-8 py-12 gap-[40px] text-center">
                  <div className="flex flex-col gap-[7px]">
                    <h1 className="font-semibold text-2xl text-[#2F1C6A]">{card.title}</h1>
                    <span className="text-sm text-[#2F1C6A]">{card.description}</span>
                  </div>
                  <div className="flex flex-col gap-[14px] mx-auto">
                    <div>
                      <span className="text-md text-[#727586]"><s>{card.originalPrice}</s></span>
                      <span className="rounded-full py-1 px-2 text-md font-semibold text-green-600 bg-green-200">SAVE 75%</span>
                    </div>
                    <div className="flex flex-row mx-auto">
                      <span className="font-normal text-xl text-[#2F1C6A]">₹</span>
                      <span className="font-bold text-5xl text-[#2F1C6A]">{card.discountPrice}</span>
                      <span className="font-normal text-xl text-[#2F1C6A]">/mo</span>
                    </div>
                    <h2 className="font-semibold text-green-400">+ 3 Months Free</h2>
                    <button className="font-semibold py-3 w-full drop-shadow-lg text-white  bg-gradient-to-br from-pink-500 to-orange-400 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-pink-200 dark:focus:ring-pink-800 rounded-md">Add to cart</button>
                    <span className="text-center text-md text-[#727586] text-sm">₹{card.renewalPrice}/mo when you renew</span>
                  </div>
                  <div className="h-[3px] w-full mx-auto bg-[#D5DFFF]"></div>
  
                 
                  {Object.entries(card.features).map(([section, items]) => (
                    <div key={section} className="flex flex-col gap-[14px]">
                      <h1 className="font-semibold text-left text-[#2F1C6A] text-base">{section.replace(/([A-Z])/g, ' $1')}</h1>
                      {Array.isArray(items) ? (
                        <div className="flex flex-col gap-[8px]">
                          {items.map((item, idx) => (
                            <div className="flex flex-row justify-between" key={idx}>
                              <div className="flex flex-row gap-[5px]">
                                <CheckmarkIcon />
                                <span className="text-sm text-[#2F1C6A]">
                                  <span className="text-sm font-semibold">{item.value}</span> {item.label}
                                </span>
                              </div>
                            </div>
                          ))}
                        </div>
                      ) : null}
                    </div>
                  ))}
  
              
                  {expandedCard === index && (
                    <div className="flex flex-col gap-[8px] ml-4">
                      {Object.entries(card.features.MoreFeatures).map(([subSection, subItems]) => (
                        subItems.map((item, subIdx) => (
                          <div className="flex flex-row justify-between" key={subIdx}>
                            <div className="flex flex-row gap-[5px]">
                              <CheckmarkIcon />
                              <span className="text-sm text-[#2F1C6A]">
                                <span className="text-sm font-semibold">{item.value}</span> {item.label}
                              </span>
                            </div>
                          </div>
                        ))
                      ))}
                    </div>
                  )}
  
                  <div className="mx-auto flex flex-row gap-[8px] cursor-pointer" onClick={() => toggleMoreFeatures(index)}>
                    <span className="font-semibold text-[#673DE7]">{expandedCard === index ? "Show less" : "See all features"}</span>
                    <DownSVG className={`transform ${expandedCard === index ? 'rotate-180' : ''}`} />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    );
  };
  
  export default Pricing;
  