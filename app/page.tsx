import React from 'react';
import Navbar from '@/components/Navbar';
import HeroSection from '@/components/HeroSection';
import HowToReferSection from '@/components/HowToReferSection';
import ReferralBenefits from '@/components/ReferralBenefits';
import FAQSection from '@/components/FAQSection';
import Footer from '@/components/Footer';

const ReferAndEarnPage = () => {
  return (
    <div>
      <Navbar />
      <HeroSection />
      <HowToReferSection />
      <ReferralBenefits />
      <FAQSection />
      <Footer />
    </div>
  );
};

export default ReferAndEarnPage;
