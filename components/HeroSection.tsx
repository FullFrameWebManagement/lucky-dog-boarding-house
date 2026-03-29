'use client';

import { Button } from '@/components/ui/button';
import Image from 'next/image';

export default function HeroSection() {
  const scrollToContact = () => {
    const element = document.getElementById('contact');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="hero" className="relative h-screen min-h-[600px] flex items-center justify-center">
      <div className="absolute inset-0 z-0">
        <Image
          src="/images/hero/hero-main.png"
          alt="Happy dogs at Lucky Dog Boarding House"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-black/40" />
      </div>

      <div className="relative z-10 text-center text-white container-custom">
        <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 drop-shadow-lg">
          Lucky Dog Boarding House
        </h1>
        <p className="text-xl md:text-2xl lg:text-3xl mb-8 drop-shadow-md max-w-3xl mx-auto">
          A Safe and Loving Home Away From Home for Your Best Friend
        </p>
        <Button
          size="lg"
          className="text-lg px-8 py-6 bg-primary hover:bg-primary/90"
          onClick={scrollToContact}
        >
          Get in Touch
        </Button>
      </div>
    </section>
  );
}
