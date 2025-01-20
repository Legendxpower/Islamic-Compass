import React from 'react';
import { Clock } from 'lucide-react';

interface PrayerTime {
  name: string;
  time: string;
}

const PrayerTimes: React.FC&lt;{ times: PrayerTime[] }&gt; = ({ times }) =&gt; {
  return (
    &lt;div className="bg-white p-4 rounded-lg shadow mb-4"&gt;
      &lt;div className="flex items-center mb-2"&gt;
        &lt;Clock className="mr-2" /&gt;
        &lt;h3 className="text-lg font-semibold"&gt;Prayer Times&lt;/h3&gt;
      &lt;/div&gt;
      &lt;div className="grid grid-cols-5 gap-2"&gt;
        {times.map((time) =&gt; (
          &lt;div key={time.name} className="flex flex-col items-center"&gt;
            &lt;span className="text-sm font-medium"&gt;{time.name}&lt;/span&gt;
            &lt;span className="text-lg"&gt;{time.time}&lt;/span&gt;
          &lt;/div&gt;
        ))}
      &lt;/div&gt;
    &lt;/div&gt;
  );
};

export default PrayerTimes;
