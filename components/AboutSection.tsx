import Image from 'next/image';

export default function AboutSection() {
  return (
    <section id="about" className="section-padding bg-muted/30">
      <div className="container-custom">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="relative h-[400px] md:h-[500px] rounded-lg overflow-hidden">
            <Image
              src="/images/about/about-facility.png"
              alt="Dogs enjoying care at our facility"
              fill
              className="object-cover"
            />
          </div>

          <div>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 text-primary">
              About Lucky Dog Boarding House
            </h2>
            <div className="h-1 w-24 bg-secondary mb-6" />
            
            <div className="space-y-4 text-lg text-foreground/80">
              <p>
                Welcome to Lucky Dog Boarding House, your trusted partner in pet care located in the heart of Littleton, Maine. We provide a safe, comfortable, and loving environment for your furry family members.
              </p>
              <p>
                Our facility offers cage-free boarding in a home-like setting, ensuring your dogs receive the individual attention and care they deserve. We understand that leaving your pet can be stressful, which is why we treat every dog as if they were our own.
              </p>
              <p>
                Conveniently located just off I-95 and US HWY 1, we serve pet owners throughout the region. Our experienced staff is dedicated to providing exceptional care, whether your dog needs a day of play, overnight accommodations, or long-term boarding.
              </p>
              <p className="font-semibold text-primary">
                At Lucky Dog Boarding House, your pet&apos;s happiness and safety are our top priorities.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
