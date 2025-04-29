
import React from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { useToast } from '@/components/ui/use-toast';

const Contact = () => {
  const { toast } = useToast();

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    toast({
      title: "Message sent",
      description: "Thank you for your message. We will get back to you soon.",
    });
    
    // Reset the form
    e.currentTarget.reset();
  };

  return (
    <div className="container mx-auto px-4 py-12">
      <div className="max-w-3xl mx-auto">
        <h1 className="text-3xl font-semibold mb-6">Contact Us</h1>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          <div>
            <p className="text-lg mb-6">
              We'd love to hear from you. Whether you have questions about our artisans, 
              products, or services, our team is here to help.
            </p>
            
            <div className="space-y-4">
              <div>
                <h3 className="text-lg font-medium mb-1">Email</h3>
                <p className="text-muted-foreground">support@artisanconnect.com</p>
              </div>
              
              <div>
                <h3 className="text-lg font-medium mb-1">Phone</h3>
                <p className="text-muted-foreground">+237 654 321 987</p>
              </div>
              
              <div>
                <h3 className="text-lg font-medium mb-1">Address</h3>
                <p className="text-muted-foreground">
                  237 Artisan Street<br />
                  Bamenda, Northwest Region<br />
                  Cameroon
                </p>
              </div>
              
              <div>
                <h3 className="text-lg font-medium mb-1">Hours</h3>
                <p className="text-muted-foreground">
                  Monday - Friday: 9am - 5pm<br />
                  Saturday: 10am - 3pm<br />
                  Sunday: Closed
                </p>
              </div>
            </div>
          </div>
          
          <div>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label htmlFor="name" className="block text-sm font-medium mb-1">
                  Name
                </label>
                <Input id="name" name="name" required />
              </div>
              
              <div>
                <label htmlFor="email" className="block text-sm font-medium mb-1">
                  Email
                </label>
                <Input id="email" name="email" type="email" required />
              </div>
              
              <div>
                <label htmlFor="subject" className="block text-sm font-medium mb-1">
                  Subject
                </label>
                <Input id="subject" name="subject" required />
              </div>
              
              <div>
                <label htmlFor="message" className="block text-sm font-medium mb-1">
                  Message
                </label>
                <Textarea id="message" name="message" rows={5} required />
              </div>
              
              <Button type="submit" className="bg-artisan-clay hover:bg-artisan-clay/90">
                Send Message
              </Button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
