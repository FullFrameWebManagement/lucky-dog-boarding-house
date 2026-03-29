import Image from 'next/image';

const galleryImages = [
  { src: '/images/gallery/gallery-1.png', alt: 'Happy dog in care' },
  { src: '/images/gallery/gallery-2.png', alt: 'Dogs at the facility' },
  { src: '/images/gallery/gallery-3.png', alt: 'Dog enjoying outdoor time' },
  { src: '/images/gallery/gallery-4.png', alt: 'Dogs playing together' },
  { src: '/images/gallery/gallery-5.png', alt: 'Dogs socializing' },
  { src: '/images/gallery/gallery-6.png', alt: 'Dog at play' },
  { src: '/images/gallery/gallery-7.png', alt: 'Dogs in a safe environment' },
];

export default function GallerySection() {
  return (
    <section id="gallery" className="section-padding bg-muted/30">
      <div className="container-custom">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 text-primary">
            Happy Dogs Gallery
          </h2>
          <div className="h-1 w-24 bg-secondary mx-auto mb-6" />
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            See our furry friends enjoying their time at Lucky Dog Boarding House
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {galleryImages.map((image, index) => (
            <div
              key={index}
              className="relative aspect-square rounded-lg overflow-hidden hover:scale-105 transition-transform duration-300 cursor-pointer"
            >
              <Image
                src={image.src}
                alt={image.alt}
                fill
                className="object-cover"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
