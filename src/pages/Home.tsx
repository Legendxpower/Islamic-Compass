import React, { useState, useEffect } from 'react';
import PrayerTimes from '../components/PrayerTimes';
import QiblaCompass from '../components/QiblaCompass';
import QuranCompletion from '../components/QuranCompletion';
import NearestMosque from '../components/NearestMosque';

const Home: React.FC = () =&gt; {
  const [currentTime, setCurrentTime] = useState(new Date());

  useEffect(() =&gt; {
    const timer = setInterval(() =&gt; {
      setCurrentTime(new Date());
    }, 1000);
    return () =&gt; clearInterval(timer);
  }, []);

  // Replace with actual prayer times data
  const prayerTimes = [
    { name: 'Imsak', time: '04:21' },
    { name: 'Fajr', time: '04:33' },
    { name: 'Dhuhr', time: '11:54' },
    { name: 'Asr', time: '14:58' },
    { name: 'Maghrib', time: '17:49' },
    { name: 'Isha', time: '19:01' },
  ];

  return (
    &lt;div className="bg-gray-100 min-h-screen"&gt;
      &lt;div className="bg-gradient-to-r from-yellow-500 to-red-500 p-6 text-white rounded-b-3xl"&gt;
        &lt;div className="flex justify-between items-center mb-4"&gt;
          &lt;div className="flex items-center"&gt;
            &lt;img src="https://source.unsplash.com/100x100/?portrait" alt="Profile" className="w-10 h-10 rounded-full mr-2" /&gt;
            &lt;div&gt;
              &lt;h2 className="text-xl font-bold"&gt;Assalamu'alaikum&lt;/h2&gt;
              &lt;p className="text-sm"&gt;Pratama&lt;/p&gt;
            &lt;/div&gt;
          &lt;/div&gt;
          &lt;div className="flex items-center"&gt;
            &lt;p className="text-sm mr-2"&gt;Semarang, Indonesia&lt;/p&gt;
            &lt;img src="https://source.unsplash.com/50x50/?indonesia" alt="Location" className="w-6 h-6 rounded-full" /&gt;
          &lt;/div&gt;
        &lt;/div&gt;
        &lt;div className="text-center"&gt;
          &lt;h1 className="text-4xl font-bold"&gt;{currentTime.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}&lt;/h1&gt;
          &lt;p className="text-sm"&gt;Menuju Hari Magrib&lt;/p&gt;
        &lt;/div&gt;
      &lt;/div&gt;

      &lt;div className="p-4"&gt;
        &lt;PrayerTimes times={prayerTimes} /&gt;
        &lt;QiblaCompass /&gt;
        &lt;QuranCompletion /&gt;
        &lt;NearestMosque /&gt;
      &lt;/div&gt;
    &lt;/div&gt;
  );
};

export default Home;
