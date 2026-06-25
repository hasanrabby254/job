import React from 'react';
import { handleRedirect } from '../config';

export function Footer() {
  return (
    <footer className="bg-gray-900 pt-16 pb-24 md:pb-8 text-gray-400">
      <div className="container mx-auto px-4 max-w-7xl">
        <div className="flex flex-col md:flex-row justify-between items-center mb-12 gap-6 border-b border-gray-800 pb-8">
          <div className="text-2xl font-bold text-white tracking-tight">
            Job Opportunities Network
          </div>
          <div className="flex flex-wrap justify-center gap-6 text-sm">
            <a href="#" onClick={handleRedirect} className="hover:text-white transition-colors">Privacy Policy</a>
            <a href="#" onClick={handleRedirect} className="hover:text-white transition-colors">Terms & Conditions</a>
            <a href="#" onClick={handleRedirect} className="hover:text-white transition-colors">Contact</a>
          </div>
        </div>
        
        <div className="text-center max-w-4xl mx-auto text-xs leading-relaxed text-gray-500">
          <p className="mb-4">
            By clicking Continue or any calls to action on this page, you agree to receive information regarding employment opportunities and related services. This website connects job seekers with potential employers and third-party hiring platforms.
          </p>
          <p>
            &copy; {new Date().getFullYear()} Job Opportunities Network. All rights reserved. Not affiliated with any specific government agency or direct employer unless explicitly stated.
          </p>
        </div>
      </div>
    </footer>
  );
}
