
import React from 'react';

const About = () => {
  return (
    <div className="container mx-auto px-4 py-12">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-3xl font-semibold mb-6">About ArtisanConnect</h1>
        
        <div className="prose max-w-none">
          <p className="text-lg mb-6">
            ArtisanConnect is a platform dedicated to connecting skilled artisans from Cameroon with customers worldwide who appreciate handcrafted, authentic goods.
          </p>
          
          <h2 className="text-2xl font-semibold mt-8 mb-4">Our Mission</h2>
          <p>
            Our mission is to preserve and promote traditional Cameroonian crafts while providing sustainable income opportunities for talented artisans. 
            We believe in fair trade practices and ensuring that the makers behind our beautiful products receive proper compensation for their skills and creativity.
          </p>
          
          <h2 className="text-2xl font-semibold mt-8 mb-4">Our Story</h2>
          <p>
            ArtisanConnect began in 2023 when our founder, Elizabeth Nkongho, recognized the challenges faced by talented craftspeople in her home country of Cameroon. 
            Despite creating beautiful, high-quality products, many artisans struggled to reach markets beyond their local communities.
          </p>
          <p className="mt-4">
            After visiting numerous villages and meeting with basket weavers, wood carvers, textile artists, and potters, 
            Elizabeth was inspired to create a platform that would showcase their extraordinary skills to the world. 
            ArtisanConnect was born out of a desire to bridge the gap between these gifted creators and global consumers who value authenticity, craftsmanship, and cultural heritage.
          </p>
          
          <div className="mt-8 mb-8">
            <img 
              src="https://images.unsplash.com/photo-1493962853295-0fd70327578a" 
              alt="Cameroonian artisan at work" 
              className="w-full h-80 object-cover rounded-lg"
            />
          </div>
          
          <h2 className="text-2xl font-semibold mt-8 mb-4">Our Values</h2>
          <ul className="list-disc pl-6 space-y-2">
            <li><strong>Authenticity:</strong> We celebrate and preserve traditional crafting techniques and cultural heritage.</li>
            <li><strong>Sustainability:</strong> We promote environmentally friendly practices and the use of locally sourced materials.</li>
            <li><strong>Fair Trade:</strong> We ensure artisans receive fair compensation for their work and skills.</li>
            <li><strong>Community:</strong> We foster connections between makers and consumers, creating a global community that values craftsmanship.</li>
            <li><strong>Education:</strong> We share the stories behind the crafts, helping customers understand the cultural significance and skill involved in each piece.</li>
          </ul>
          
          <h2 className="text-2xl font-semibold mt-8 mb-4">Our Impact</h2>
          <p>
            Since our founding, ArtisanConnect has worked with over 50 artisans across Cameroon, helping them reach customers in 25 countries worldwide. 
            Through our platform, many craftspeople have been able to significantly increase their incomes, invest in their workshops, 
            train apprentices, and contribute to their local economies.
          </p>
          
          <p className="mt-4">
            We're proud to play a part in preserving cultural traditions while creating sustainable livelihoods for talented individuals who might 
            otherwise be forced to abandon their crafts in search of other employment opportunities.
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;
