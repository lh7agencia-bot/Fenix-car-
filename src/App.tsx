/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState } from 'react';
import { ContactSection } from './components/ContactSection';
import { FaqSection } from './components/FaqSection';
import { Footer } from './components/Footer';
import { GallerySection } from './components/GallerySection';
import { Hero } from './components/Hero';
import { Navbar } from './components/Navbar';
import { ServicesSection } from './components/ServicesSection';
import { TestimonialsSection } from './components/TestimonialsSection';
import { WhatsAppFloat } from './components/WhatsAppFloat';

export default function App() {
  const [selectedService, setSelectedService] = useState('');

  const handleSelectService = (serviceTitle: string) => {
    setSelectedService(serviceTitle);
    const contactEl = document.getElementById('contato');
    if (contactEl) {
      contactEl.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-[#1A1A1A] text-[#F5F7FA]">
      <Navbar />
      <main>
        <Hero />
        <ServicesSection onSelectService={handleSelectService} />
        <GallerySection />
        <TestimonialsSection />
        <FaqSection />
        <ContactSection selectedService={selectedService} />
      </main>
      <Footer />
      <WhatsAppFloat />
    </div>
  );
}
