import { Home, Moon, Calendar, Droplets } from 'lucide-react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';

const services = [
  {
    icon: Home,
    title: 'Day Care',
    description: 'Safe and supervised playtime for your dog during the day. Perfect for busy pet owners who want their dogs to socialize and stay active.',
  },
  {
    icon: Moon,
    title: 'Overnights',
    description: 'Comfortable overnight boarding in a home-like environment. Your dog will enjoy a cozy stay with plenty of attention and care.',
  },
  {
    icon: Calendar,
    title: 'Long-Term Boarding',
    description: 'Extended stay accommodations for your pet. Ideal for vacations or extended trips, ensuring your dog is well cared for while you\'re away.',
  },
  {
    icon: Droplets,
    title: 'Baths (Small & Medium)',
    description: 'Professional bathing services for small and medium-sized dogs. Keep your furry friend clean, fresh, and looking their best.',
  },
];

export default function ServicesSection() {
  return (
    <section id="services" className="section-padding">
      <div className="container-custom">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 text-primary">
            Options & Services
          </h2>
          <div className="h-1 w-24 bg-secondary mx-auto mb-6" />
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            We offer a range of services to meet your pet care needs, all provided with love and professional attention.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service) => {
            const Icon = service.icon;
            return (
              <Card key={service.title} className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                    <Icon className="w-6 h-6 text-primary" />
                  </div>
                  <CardTitle className="text-xl">{service.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-base">
                    {service.description}
                  </CardDescription>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
}
