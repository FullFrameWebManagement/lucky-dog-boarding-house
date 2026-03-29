export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-primary text-primary-foreground py-8">
      <div className="container-custom">
        <div className="grid md:grid-cols-3 gap-8 mb-6">
          <div>
            <h3 className="text-xl font-bold mb-3">Lucky Dog Boarding House</h3>
            <p className="text-primary-foreground/80">
              A safe and loving home away from home for your best friend
            </p>
          </div>
          
          <div>
            <h4 className="font-semibold mb-3">Contact</h4>
            <div className="space-y-2 text-primary-foreground/80">
              <p>298 Front Ridge Road</p>
              <p>Littleton, ME 04730</p>
              <p>Phone: 207-538-9637</p>
              <p>Email: snowyp@yahoo.com</p>
            </div>
          </div>
          
          <div>
            <h4 className="font-semibold mb-3">Services</h4>
            <ul className="space-y-2 text-primary-foreground/80">
              <li>Day Care</li>
              <li>Overnights</li>
              <li>Long-Term Boarding</li>
              <li>Baths (Small & Medium)</li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-primary-foreground/20 pt-6 text-center text-primary-foreground/80">
          <p>&copy; {currentYear} Lucky Dog Boarding House. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
