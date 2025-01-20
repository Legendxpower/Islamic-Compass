import React from 'react';
import { MapPin } from 'lucide-react';

const NearestMosque: React.FC = () =&gt; {
  return (
    &lt;div className="bg-white p-4 rounded-lg shadow mb-4"&gt;
      &lt;div className="flex items-center mb-2"&gt;
        &lt;MapPin className="mr-2" /&gt;
        &lt;h3 className="text-lg font-semibold"&gt;Nearest Mosque&lt;/h3&gt;
      &lt;/div&gt;
      {/* Replace with actual mosque data and map integration */}
      &lt;p className="text-sm"&gt;Masjid Al-Akbar&lt;/p&gt;
      &lt;p className="text-sm opacity-75"&gt;1.2 km away&lt;/p&gt;
    &lt;/div&gt;
  );
};

export default NearestMosque;
