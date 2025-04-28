
import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';

const About = () => {
  return (
    <div>
      {/* Hero Section */}
      <section 
        className="relative min-h-[40vh] flex items-center" 
        style={{
          backgroundImage: "linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.6)), url('https://images.unsplash.com/photo-1466721591366-2d5fba72006d')",
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        <div className="container mx-auto px-4 py-16 relative z-10 text-white text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">About ArtisanConnect</h1>
          <p className="text-xl max-w-3xl mx-auto">
            Empowering Cameroon's artisans through digital connection and sustainable commerce
          </p>
        </div>
      </section>
      
      {/* Mission */}
      <section className="py-16 px-4">
        <div className="container mx-auto">
          <div className="flex flex-col md:flex-row gap-12 items-center">
            <div className="md:w-1/2">
              <img 
                src="https://images.unsplash.com/photo-1618160702438-9b02ab6515c9" 
                alt="Artisans working" 
                className="rounded-lg shadow-lg"
              />
            </div>
            <div className="md:w-1/2">
              <h2 className="text-artisan-earth mb-6">Our Mission</h2>
              <p className="text-lg mb-6">
                ArtisanConnect was founded with a clear mission: to create sustainable economic opportunities for rural artisans in Cameroon by connecting them directly to global markets.
              </p>
              <p className="mb-6">
                We believe in preserving traditional craftsmanship while empowering artisans with digital tools, fair trade practices, and business skills to thrive in the modern economy.
              </p>
              <p>
                Our platform serves as a bridge between talented craftspeople and conscious consumers who value authentic, handmade products and the stories behind them.
              </p>
            </div>
          </div>
        </div>
      </section>
      
      {/* Our Values */}
      <section className="py-16 px-4 bg-artisan-sand/20">
        <div className="container mx-auto">
          <h2 className="text-artisan-earth text-center mb-12">Our Values</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <div className="w-12 h-12 bg-artisan-clay/20 rounded-full flex items-center justify-center mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-artisan-clay">
                  <path d="M14 9a2 2 0 0 1-2 2H6l-4 4V4c0-1.1.9-2 2-2h8a2 2 0 0 1 2 2v5Z" />
                  <path d="M18 9h2a2 2 0 0 1 2 2v11l-4-4h-6a2 2 0 0 1-2-2v-1" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-3">Cultural Preservation</h3>
              <p className="text-muted-foreground">
                We celebrate and preserve traditional craftsmanship and cultural heritage, ensuring these valuable skills continue for generations.
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <div className="w-12 h-12 bg-artisan-clay/20 rounded-full flex items-center justify-center mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-artisan-clay">
                  <path d="M17 6.1H3" />
                  <path d="M21 12.1H3" />
                  <path d="M15.1 18H3" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-3">Fair Trade</h3>
              <p className="text-muted-foreground">
                We ensure artisans receive fair compensation for their work and maintain ethical business practices throughout our supply chain.
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <div className="w-12 h-12 bg-artisan-clay/20 rounded-full flex items-center justify-center mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-artisan-clay">
                  <path d="M2 12a10 10 0 1 0 20 0 10 10 0 0 0-20 0Z" />
                  <path d="M2 12h20" />
                  <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-3">Sustainability</h3>
              <p className="text-muted-foreground">
                We promote environmentally friendly practices and materials, supporting both ecological sustainability and economic resilience.
              </p>
            </div>
          </div>
        </div>
      </section>
      
      {/* Our Team */}
      <section className="py-16 px-4">
        <div className="container mx-auto">
          <h2 className="text-artisan-earth text-center mb-12">Our Team</h2>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
            {[
              {
                name: 'Marianne Tamba',
                role: 'Founder & CEO',
                image: 'https://images.unsplash.com/photo-1618160702438-9b02ab6515c9'
              },
              {
                name: 'Francis Ndeng',
                role: 'Artisan Relations',
                image: 'https://images.unsplash.com/photo-1485833077593-4278bba3f11f'
              },
              {
                name: 'Sophie Eyong',
                role: 'Marketing Director',
                image: 'https://images.unsplash.com/photo-1493962853295-0fd70327578a'
              },
              {
                name: 'Paul Enow',
                role: 'Operations Manager',
                image: 'https://images.unsplash.com/photo-1466721591366-2d5fba72006d'
              }
            ].map((member, index) => (
              <div key={index} className="text-center">
                <div className="mb-4 relative group overflow-hidden rounded-full mx-auto" style={{ width: '180px', height: '180px' }}>
                  <img 
                    src={member.image} 
                    alt={member.name} 
                    className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                  />
                </div>
                <h3 className="font-semibold text-lg mb-1">{member.name}</h3>
                <p className="text-artisan-clay text-sm">{member.role}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
      
      {/* Contact Us */}
      <section className="py-16 px-4 bg-artisan-forest text-white">
        <div className="container mx-auto">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-center text-artisan-gold mb-12">Contact Us</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
              <div>
                <h3 className="text-xl font-semibold mb-6">Get In Touch</h3>
                <div className="space-y-4">
                  <div className="flex items-start">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="mr-3 text-artisan-gold mt-1">
                      <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z" />
                      <circle cx="12" cy="10" r="3" />
                    </svg>
                    <div>
                      <h4 className="font-medium">Address</h4>
                      <p>123 Craft Lane<br />Bamenda, Northwest Region<br />Cameroon</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="mr-3 text-artisan-gold mt-1">
                      <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
                    </svg>
                    <div>
                      <h4 className="font-medium">Phone</h4>
                      <p>+237 123 456 789</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="mr-3 text-artisan-gold mt-1">
                      <rect x="2" y="4" width="20" height="16" rx="2" />
                      <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
                    </svg>
                    <div>
                      <h4 className="font-medium">Email</h4>
                      <p>info@artisanconnect.com</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="mr-3 text-artisan-gold mt-1">
                      <circle cx="12" cy="12" r="10" />
                      <polyline points="12 6 12 12 16 14" />
                    </svg>
                    <div>
                      <h4 className="font-medium">Hours</h4>
                      <p>Monday - Friday: 9AM - 5PM<br />Saturday: 10AM - 2PM<br />Sunday: Closed</p>
                    </div>
                  </div>
                </div>
              </div>
              
              <div>
                <h3 className="text-xl font-semibold mb-6">Send Us a Message</h3>
                <form className="space-y-4">
                  <div>
                    <label htmlFor="name" className="block mb-2 text-sm">Name</label>
                    <input 
                      type="text" 
                      id="name"
                      className="w-full px-4 py-2 rounded bg-artisan-forest border border-artisan-gold/40 focus:outline-none focus:ring-2 focus:ring-artisan-gold text-white placeholder-white/50"
                      placeholder="Your name"
                      required
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="email" className="block mb-2 text-sm">Email</label>
                    <input 
                      type="email" 
                      id="email"
                      className="w-full px-4 py-2 rounded bg-artisan-forest border border-artisan-gold/40 focus:outline-none focus:ring-2 focus:ring-artisan-gold text-white placeholder-white/50"
                      placeholder="Your email address"
                      required
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="message" className="block mb-2 text-sm">Message</label>
                    <textarea 
                      id="message"
                      rows={4}
                      className="w-full px-4 py-2 rounded bg-artisan-forest border border-artisan-gold/40 focus:outline-none focus:ring-2 focus:ring-artisan-gold text-white placeholder-white/50"
                      placeholder="Your message"
                      required
                    />
                  </div>
                  
                  <Button className="w-full bg-artisan-gold hover:bg-artisan-gold/90 text-artisan-earth">
                    Send Message
                  </Button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
