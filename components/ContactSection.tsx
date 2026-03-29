import { Phone, Mail, MapPin } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

export default function ContactSection() {
  return (
    <section id="contact" className="section-padding">
      <div className="container-custom">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 text-primary">
            Contact Us
          </h2>
          <div className="h-1 w-24 bg-secondary mx-auto mb-6" />
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Get in touch with us to learn more about our services or to schedule a visit
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12">
          <div className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle>Get in Touch</CardTitle>
              </CardHeader>
              <CardContent className="space-y-8">
                <p className="text-muted-foreground">
                  Ready to give your dog the care they deserve? Contact us today to learn more about our services or schedule a visit.
                </p>
                
                <div className="space-y-4">
                  <Button 
                    asChild 
                    size="lg" 
                    className="w-full text-lg h-14 cursor-pointer"
                  >
                    <a href="tel:207-538-9637" className="cursor-pointer">
                      <Phone className="w-5 h-5 mr-3" />
                      Call Us: 207-538-9637
                    </a>
                  </Button>
                  
                  <Button 
                    asChild 
                    variant="outline" 
                    size="lg" 
                    className="w-full text-lg h-14 cursor-pointer"
                  >
                    <a href="mailto:snowyp@yahoo.com" className="cursor-pointer">
                      <Mail className="w-5 h-5 mr-3" />
                      Email Us
                    </a>
                  </Button>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Contact Information</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-start gap-3">
                  <MapPin className="w-5 h-5 text-primary mt-1 flex-shrink-0" />
                  <div>
                    <p className="font-medium">Address</p>
                    <p className="text-muted-foreground">
                      298 Front Ridge Road<br />
                      Littleton, ME 04730
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Phone className="w-5 h-5 text-primary mt-1 flex-shrink-0" />
                  <div>
                    <p className="font-medium">Phone</p>
                    <a href="tel:207-538-9637" className="text-primary hover:underline">
                      207-538-9637
                    </a>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Mail className="w-5 h-5 text-primary mt-1 flex-shrink-0" />
                  <div>
                    <p className="font-medium">Email</p>
                    <a href="mailto:snowyp@yahoo.com" className="text-primary hover:underline">
                      snowyp@yahoo.com
                    </a>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          <div className="h-full min-h-[600px]">
            <div className="rounded-lg overflow-hidden h-full w-full">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2764.8!2d-67.8!3d46.1!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zNDbCsDA2JzAwLjAiTiA2N8KwNDgnMDAuMCJX!5e0!3m2!1sen!2sus!4v1234567890"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Lucky Dog Boarding House Location - 298 Front Ridge Road, Littleton, ME 04730"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
