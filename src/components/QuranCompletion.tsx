import React from 'react';
import { BookOpen } from 'lucide-react';

const QuranCompletion: React.FC = () =&gt; {
  return (
    &lt;div className="bg-white p-4 rounded-lg shadow mb-4"&gt;
      &lt;div className="flex items-center mb-2"&gt;
        &lt;BookOpen className="mr-2" /&gt;
        &lt;h3 className="text-lg font-semibold"&gt;Quran Completion&lt;/h3&gt;
      &lt;/div&gt;
      &lt;div className="w-full bg-gray-200 rounded-full h-2.5"&gt;
        &lt;div className="bg-blue-600 h-2.5 rounded-full" style={{ width: '45%' }}&gt;&lt;/div&gt;
      &lt;/div&gt;
      &lt;p className="text-sm mt-2"&gt;45% completed&lt;/p&gt;
    &lt;/div&gt;
  );
};

export default QuranCompletion;
