
import React, { useState, useEffect } from 'react';
import { supabase } from '@/integrations/supabase/client';
import { Button } from '@/components/ui/button';
import { toast } from '@/components/ui/use-toast';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';

const Account = () => {
  const [session, setSession] = useState<any>(null);
  const [loading, setLoading] = useState(true);
  const [profile, setProfile] = useState({
    username: '',
    fullName: '',
    email: '',
    address: '',
    phone: '',
  });

  useEffect(() => {
    const fetchSession = async () => {
      try {
        const { data, error } = await supabase.auth.getSession();
        if (error) throw error;
        setSession(data.session);
        
        if (data.session?.user) {
          await fetchProfile(data.session.user.id);
        }
      } catch (error) {
        console.error('Error fetching session:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchSession();

    const { data: { subscription } } = supabase.auth.onAuthStateChange(
      (_event, newSession) => {
        setSession(newSession);
        if (newSession?.user) {
          fetchProfile(newSession.user.id);
        }
      }
    );

    return () => {
      subscription.unsubscribe();
    };
  }, []);

  const fetchProfile = async (userId: string) => {
    try {
      // In a real app, this would fetch the user's profile from the database
      // For now, we'll just set dummy data
      setProfile({
        username: 'user123',
        fullName: 'John Doe',
        email: 'john@example.com',
        address: '123 Main St, Bamenda, Cameroon',
        phone: '+237 123 456 789',
      });
    } catch (error) {
      console.error('Error fetching profile:', error);
    }
  };

  const handleUpdateProfile = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // In a real app, this would update the user's profile in the database
    toast({
      title: "Profile updated!",
      description: "Your profile information has been updated successfully.",
    });
  };

  const handleSignOut = async () => {
    try {
      await supabase.auth.signOut();
      toast({
        title: "Signed out",
        description: "You have been signed out successfully.",
      });
    } catch (error) {
      console.error('Error signing out:', error);
      toast({
        title: "Error",
        description: "There was an error signing out. Please try again.",
        variant: "destructive",
      });
    }
  };

  const handleLogin = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const email = formData.get('email') as string;
    const password = formData.get('password') as string;
    
    try {
      const { error } = await supabase.auth.signInWithPassword({
        email,
        password,
      });
      
      if (error) throw error;
      
      toast({
        title: "Signed in",
        description: "You have been signed in successfully.",
      });
    } catch (error: any) {
      toast({
        title: "Error",
        description: error.message || "There was an error signing in. Please try again.",
        variant: "destructive",
      });
    }
  };

  const handleSignUp = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const email = formData.get('email') as string;
    const password = formData.get('password') as string;
    const fullName = formData.get('fullName') as string;
    
    try {
      const { error } = await supabase.auth.signUp({
        email,
        password,
        options: {
          data: {
            full_name: fullName,
          },
        },
      });
      
      if (error) throw error;
      
      toast({
        title: "Account created",
        description: "Your account has been created successfully. Please check your email for verification.",
      });
    } catch (error: any) {
      toast({
        title: "Error",
        description: error.message || "There was an error creating your account. Please try again.",
        variant: "destructive",
      });
    }
  };

  if (loading) {
    return (
      <div className="container mx-auto px-4 py-12 flex justify-center">
        <div className="animate-pulse text-center">
          <p>Loading account information...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="container mx-auto px-4 py-12">
      <div className="max-w-2xl mx-auto">
        {session ? (
          <>
            <div className="flex justify-between items-center mb-8">
              <h1 className="text-3xl font-semibold">My Account</h1>
              <Button 
                variant="outline" 
                onClick={handleSignOut}
                className="text-artisan-clay border-artisan-clay hover:bg-artisan-clay/10"
              >
                Sign Out
              </Button>
            </div>
            
            <Tabs defaultValue="profile">
              <TabsList className="mb-6">
                <TabsTrigger value="profile">Profile</TabsTrigger>
                <TabsTrigger value="orders">Orders</TabsTrigger>
                <TabsTrigger value="wishlist">Wishlist</TabsTrigger>
              </TabsList>
              
              <TabsContent value="profile">
                <div className="bg-white rounded-lg shadow p-6">
                  <h2 className="text-xl font-semibold mb-6">Profile Information</h2>
                  <form onSubmit={handleUpdateProfile} className="space-y-4">
                    <div>
                      <label htmlFor="fullName" className="block mb-2 text-sm">Full Name</label>
                      <input 
                        type="text" 
                        id="fullName"
                        value={profile.fullName}
                        onChange={(e) => setProfile({...profile, fullName: e.target.value})}
                        className="w-full px-4 py-2 rounded border border-gray-300 focus:outline-none focus:ring-2 focus:ring-artisan-clay"
                      />
                    </div>
                    
                    <div>
                      <label htmlFor="email" className="block mb-2 text-sm">Email</label>
                      <input 
                        type="email" 
                        id="email"
                        value={profile.email}
                        onChange={(e) => setProfile({...profile, email: e.target.value})}
                        className="w-full px-4 py-2 rounded border border-gray-300 focus:outline-none focus:ring-2 focus:ring-artisan-clay"
                      />
                    </div>
                    
                    <div>
                      <label htmlFor="address" className="block mb-2 text-sm">Address</label>
                      <textarea 
                        id="address"
                        value={profile.address}
                        onChange={(e) => setProfile({...profile, address: e.target.value})}
                        rows={3}
                        className="w-full px-4 py-2 rounded border border-gray-300 focus:outline-none focus:ring-2 focus:ring-artisan-clay"
                      />
                    </div>
                    
                    <div>
                      <label htmlFor="phone" className="block mb-2 text-sm">Phone</label>
                      <input 
                        type="tel" 
                        id="phone"
                        value={profile.phone}
                        onChange={(e) => setProfile({...profile, phone: e.target.value})}
                        className="w-full px-4 py-2 rounded border border-gray-300 focus:outline-none focus:ring-2 focus:ring-artisan-clay"
                      />
                    </div>
                    
                    <Button type="submit" className="bg-artisan-clay hover:bg-artisan-clay/90">
                      Update Profile
                    </Button>
                  </form>
                </div>
              </TabsContent>
              
              <TabsContent value="orders">
                <div className="bg-white rounded-lg shadow p-6">
                  <h2 className="text-xl font-semibold mb-6">Order History</h2>
                  <div className="text-center py-8">
                    <p className="text-muted-foreground">You haven't placed any orders yet.</p>
                    <Button className="mt-4 bg-artisan-clay hover:bg-artisan-clay/90" asChild>
                      <a href="/shop">Browse Products</a>
                    </Button>
                  </div>
                </div>
              </TabsContent>
              
              <TabsContent value="wishlist">
                <div className="bg-white rounded-lg shadow p-6">
                  <h2 className="text-xl font-semibold mb-6">Wishlist</h2>
                  <div className="text-center py-8">
                    <p className="text-muted-foreground">Your wishlist is empty.</p>
                    <Button className="mt-4 bg-artisan-clay hover:bg-artisan-clay/90" asChild>
                      <a href="/shop">Browse Products</a>
                    </Button>
                  </div>
                </div>
              </TabsContent>
            </Tabs>
          </>
        ) : (
          <div className="bg-white rounded-lg shadow">
            <Tabs defaultValue="login">
              <TabsList className="w-full">
                <TabsTrigger value="login" className="w-1/2">Login</TabsTrigger>
                <TabsTrigger value="register" className="w-1/2">Register</TabsTrigger>
              </TabsList>
              
              <TabsContent value="login" className="p-6">
                <h2 className="text-xl font-semibold mb-6">Sign In</h2>
                <form onSubmit={handleLogin} className="space-y-4">
                  <div>
                    <label htmlFor="login-email" className="block mb-2 text-sm">Email</label>
                    <input 
                      type="email" 
                      id="login-email"
                      name="email"
                      className="w-full px-4 py-2 rounded border border-gray-300 focus:outline-none focus:ring-2 focus:ring-artisan-clay"
                      required
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="login-password" className="block mb-2 text-sm">Password</label>
                    <input 
                      type="password" 
                      id="login-password"
                      name="password"
                      className="w-full px-4 py-2 rounded border border-gray-300 focus:outline-none focus:ring-2 focus:ring-artisan-clay"
                      required
                    />
                  </div>
                  
                  <div className="flex justify-between items-center">
                    <div className="flex items-center">
                      <input type="checkbox" id="remember" className="mr-2" />
                      <label htmlFor="remember" className="text-sm">Remember me</label>
                    </div>
                    <a href="#" className="text-sm text-artisan-clay hover:underline">Forgot password?</a>
                  </div>
                  
                  <Button type="submit" className="w-full bg-artisan-clay hover:bg-artisan-clay/90">
                    Sign In
                  </Button>
                </form>
              </TabsContent>
              
              <TabsContent value="register" className="p-6">
                <h2 className="text-xl font-semibold mb-6">Create Account</h2>
                <form onSubmit={handleSignUp} className="space-y-4">
                  <div>
                    <label htmlFor="fullName" className="block mb-2 text-sm">Full Name</label>
                    <input 
                      type="text" 
                      id="fullName"
                      name="fullName"
                      className="w-full px-4 py-2 rounded border border-gray-300 focus:outline-none focus:ring-2 focus:ring-artisan-clay"
                      required
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="register-email" className="block mb-2 text-sm">Email</label>
                    <input 
                      type="email" 
                      id="register-email"
                      name="email"
                      className="w-full px-4 py-2 rounded border border-gray-300 focus:outline-none focus:ring-2 focus:ring-artisan-clay"
                      required
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="register-password" className="block mb-2 text-sm">Password</label>
                    <input 
                      type="password" 
                      id="register-password"
                      name="password"
                      className="w-full px-4 py-2 rounded border border-gray-300 focus:outline-none focus:ring-2 focus:ring-artisan-clay"
                      required
                    />
                  </div>
                  
                  <Button type="submit" className="w-full bg-artisan-clay hover:bg-artisan-clay/90">
                    Create Account
                  </Button>
                </form>
              </TabsContent>
            </Tabs>
          </div>
        )}
      </div>
    </div>
  );
};

export default Account;
