
import React from 'react';
import { useLanguage } from '@/contexts/LanguageContext';

const About = () => {
  const { t } = useLanguage();
  
  return (
    <div className="container mx-auto px-4 py-12">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-3xl font-semibold mb-6">{t('aboutTitle')}</h1>
        
        <div className="prose max-w-none">
          <p className="text-lg mb-6">
            {t('aboutIntro')}
          </p>
          
          <h2 className="text-2xl font-semibold mt-8 mb-4">{t('ourMission')}</h2>
          <p>
            {t('missionText')}
          </p>
          
          <h2 className="text-2xl font-semibold mt-8 mb-4">{t('ourStory')}</h2>
          <p>
            {t('storyText1')}
          </p>
          <p className="mt-4">
            {t('storyText2')}
          </p>
          
          <div className="mt-8 mb-8">
            <img 
              src="https://images.unsplash.com/photo-1493962853295-0fd70327578a" 
              alt="Cameroonian artisan at work" 
              className="w-full h-80 object-cover rounded-lg"
            />
          </div>
          
          <h2 className="text-2xl font-semibold mt-8 mb-4">{t('ourValues')}</h2>
          <ul className="list-disc pl-6 space-y-2">
            <li>{t('valueAuth')}</li>
            <li>{t('valueSust')}</li>
            <li>{t('valueFair')}</li>
            <li>{t('valueComm')}</li>
            <li>{t('valueEduc')}</li>
          </ul>
          
          <h2 className="text-2xl font-semibold mt-8 mb-4">{t('ourImpact')}</h2>
          <p>
            {t('impactText1')}
          </p>
          
          <p className="mt-4">
            {t('impactText2')}
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;
