/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { Hero } from './components/Hero';
import { Benefits } from './components/Benefits';
import { HowItWorks } from './components/HowItWorks';
import { ApplicationForm } from './components/ApplicationForm';
import { SocialProof } from './components/SocialProof';
import { FAQ } from './components/FAQ';
import { FinalCTA } from './components/FinalCTA';
import { Footer } from './components/Footer';
import { StickyCTA } from './components/StickyCTA';
import { ExitIntentModal } from './components/ExitIntentModal';

export default function App() {
  return (
    <div className="min-h-screen bg-transparent font-sans text-gray-900 selection:bg-brand-primary/20 selection:text-brand-primary">
      <Hero />
      <Benefits />
      <HowItWorks />
      <ApplicationForm />
      <SocialProof />
      <FAQ />
      <FinalCTA />
      <Footer />
      <StickyCTA />
      <ExitIntentModal />
    </div>
  );
}
