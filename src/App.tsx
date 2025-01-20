import React, { useState, useEffect } from 'react';
import { 
  Moon, 
  Sun, 
  Compass, 
  Book, 
  Clock, 
  Menu,
  Heart,
  Calendar,
  MapPin,
  Radio,
  BookOpen,
  Target,
  Calculator,
  Settings,
  MessageCircle,
  Search,
  Bookmark,
  ChevronRight,
  Play,
  Pause,
  SkipBack,
  SkipForward,
  Share2,
  GraduationCap,
  Users,
  Building2 as MosqueDome,
  Gift,
  Bell
} from 'lucide-react';

function App() {
  const [currentTime, setCurrentTime] = useState(new Date());
  const [isDark, setIsDark] = useState(false);
  const [activeTab, setActiveTab] = useState('home');
  const [isPlaying, setIsPlaying] = useState(false);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentTime(new Date());
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  const prayerTimes = {
    Fajr: "04:23",
    Sunrise: "05:45",
    Dhuhr: "12:30",
    Asr: "15:45",
    Maghrib: "18:15",
    Isha: "19:45"
  };

  const quranProgress = {
    currentSurah: "Al-Baqarah",
    currentAyah: 255,
    totalAyahRead: 1286,
    dailyTarget: 20,
    streak: 7
  };

  const dhikrCounts = {
    "Subhanallah": 33,
    "Alhamdulillah": 33,
    "Allahu Akbar": 34
  };

  const recentSurahs = [
    { name: "Al-Fatiha", verses: 7, progress: 100 },
    { name: "Al-Baqarah", verses: 286, progress: 45 },
    { name: "Al-Ikhlas", verses: 4, progress: 100 },
    { name: "Al-Mulk", verses: 30, progress: 60 }
  ];

  const learningModules = [
    { title: "Basics of Islam", lessons: 12, progress: 75, image: "https://images.unsplash.com/photo-1564633351631-e85bd38d8433?w=800&auto=format&fit=crop" },
    { title: "Prayer Guide", lessons: 8, progress: 50, image: "https://images.unsplash.com/photo-1542816417-0983c9c9ad53?w=800&auto=format&fit=crop" },
    { title: "Ramadan Prep", lessons: 15, progress: 30, image: "https://images.unsplash.com/photo-1532375810709-75b1da00537c?w=800&auto=format&fit=crop" },
    { title: "Islamic History", lessons: 20, progress: 15, image: "https://images.unsplash.com/photo-1581001670891-780d1d3a6ecb?w=800&auto=format&fit=crop" }
  ];

  const renderMainContent = () => {
    switch(activeTab) {
      case 'home':
        return (
          <>
            {/* Time Display */}
            <div className="bg-gradient-to-r from-orange-400 to-pink-500 rounded-3xl p-8 mb-8 text-white">
              <div className="text-5xl font-bold mb-2">
                {currentTime.toLocaleTimeString('en-US', { 
                  hour: '2-digit', 
                  minute: '2-digit', 
                  second: '2-digit',
                  hour12: true 
                })}
              </div>
              <p className="opacity-75">
                {currentTime.toLocaleDateString('en-US', { 
                  weekday: 'long', 
                  year: 'numeric', 
                  month: 'long', 
                  day: 'numeric' 
                })}
              </p>
            </div>

            {/* Prayer Times */}
            <div className={`rounded-3xl p-6 mb-8 ${isDark ? 'bg-gray-800' : 'bg-white'} shadow-xl`}>
              <h2 className="text-xl font-bold mb-4 flex items-center gap-2">
                <Clock size={20} />
                Prayer Times
              </h2>
              <div className="grid grid-cols-2 gap-4">
                {Object.entries(prayerTimes).map(([prayer, time]) => (
                  <div key={prayer} className={`p-4 rounded-xl ${isDark ? 'bg-gray-700' : 'bg-gray-50'}`}>
                    <p className="text-sm opacity-75">{prayer}</p>
                    <p className="text-xl font-bold">{time}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Quick Actions */}
            <div className="grid grid-cols-2 gap-4 mb-8">
              <div className={`rounded-2xl p-6 ${isDark ? 'bg-gray-800' : 'bg-white'} shadow-lg`}>
                <div className="flex items-center gap-3 mb-4">
                  <Compass size={24} />
                  <h3 className="text-lg font-bold">Qibla Direction</h3>
                </div>
                <p className="text-3xl font-bold">294°</p>
                <p className="text-sm opacity-75">Northwest</p>
              </div>
              
              <div className={`rounded-2xl p-6 ${isDark ? 'bg-gray-800' : 'bg-white'} shadow-lg`}>
                <div className="flex items-center gap-3 mb-4">
                  <Book size={24} />
                  <h3 className="text-lg font-bold">Quran Progress</h3>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-2.5 mb-2">
                  <div className="bg-green-600 h-2.5 rounded-full" style={{ width: '45%' }}></div>
                </div>
                <p className="text-sm opacity-75">Last read: {quranProgress.currentSurah} {quranProgress.currentAyah}</p>
                <p className="text-xs opacity-75 mt-1">🔥 {quranProgress.streak} day streak!</p>
              </div>
            </div>

            {/* Dhikr Counter */}
            <div className={`rounded-3xl p-6 mb-8 ${isDark ? 'bg-gray-800' : 'bg-white'} shadow-xl`}>
              <h2 className="text-xl font-bold mb-4 flex items-center gap-2">
                <Heart size={20} />
                Daily Dhikr
              </h2>
              <div className="grid grid-cols-3 gap-4">
                {Object.entries(dhikrCounts).map(([dhikr, count]) => (
                  <div key={dhikr} className={`p-4 rounded-xl ${isDark ? 'bg-gray-700' : 'bg-gray-50'} text-center`}>
                    <p className="text-sm opacity-75">{dhikr}</p>
                    <p className="text-2xl font-bold">{count}</p>
                  </div>
                ))}
              </div>
            </div>
          </>
        );

      case 'quran':
        return (
          <div className="pb-24">
            {/* Search Bar */}
            <div className={`flex items-center gap-4 p-4 mb-6 ${isDark ? 'bg-gray-800' : 'bg-white'} rounded-2xl`}>
              <Search size={20} className="opacity-50" />
              <input 
                type="text" 
                placeholder="Search Surah or Verse..." 
                className={`flex-1 bg-transparent outline-none ${isDark ? 'placeholder-gray-500' : 'placeholder-gray-400'}`}
              />
            </div>

            {/* Last Read */}
            <div className={`p-6 mb-6 ${isDark ? 'bg-gray-800' : 'bg-white'} rounded-3xl`}>
              <div className="flex justify-between items-center mb-4">
                <h2 className="text-xl font-bold">Continue Reading</h2>
                <Bookmark size={20} className="opacity-50" />
              </div>
              <div className={`p-4 ${isDark ? 'bg-gray-700' : 'bg-gray-50'} rounded-xl`}>
                <div className="flex justify-between items-center mb-2">
                  <h3 className="font-bold">Al-Baqarah</h3>
                  <span className="text-sm opacity-75">Verse 255</span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-1.5 mb-2">
                  <div className="bg-green-600 h-1.5 rounded-full" style={{ width: '45%' }}></div>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-sm opacity-75">45% Complete</span>
                  <button className={`p-2 ${isDark ? 'bg-gray-600' : 'bg-white'} rounded-full shadow`}>
                    <Play size={16} />
                  </button>
                </div>
              </div>
            </div>

            {/* Recent Surahs */}
            <div className={`p-6 mb-6 ${isDark ? 'bg-gray-800' : 'bg-white'} rounded-3xl`}>
              <h2 className="text-xl font-bold mb-4">Recent Surahs</h2>
              <div className="space-y-4">
                {recentSurahs.map((surah, index) => (
                  <div key={index} className={`p-4 ${isDark ? 'bg-gray-700' : 'bg-gray-50'} rounded-xl`}>
                    <div className="flex justify-between items-center mb-2">
                      <h3 className="font-bold">{surah.name}</h3>
                      <span className="text-sm opacity-75">{surah.verses} verses</span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-1.5 mb-2">
                      <div className="bg-green-600 h-1.5 rounded-full" style={{ width: `${surah.progress}%` }}></div>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-sm opacity-75">{surah.progress}% Complete</span>
                      <ChevronRight size={16} className="opacity-50" />
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Audio Player */}
            <div className={`fixed bottom-24 left-4 right-4 p-4 ${isDark ? 'bg-gray-800' : 'bg-white'} rounded-2xl shadow-lg`}>
              <div className="flex items-center justify-between mb-4">
                <div>
                  <h3 className="font-bold">Al-Fatiha</h3>
                  <p className="text-sm opacity-75">Sheikh Mishary Rashid</p>
                </div>
                <Share2 size={20} className="opacity-50" />
              </div>
              <div className="w-full bg-gray-200 rounded-full h-1 mb-4">
                <div className="bg-green-600 h-1 rounded-full" style={{ width: '30%' }}></div>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-sm opacity-75">1:23</span>
                <div className="flex items-center gap-6">
                  <button><SkipBack size={20} /></button>
                  <button 
                    className={`p-3 ${isDark ? 'bg-gray-700' : 'bg-gray-100'} rounded-full`}
                    onClick={() => setIsPlaying(!isPlaying)}
                  >
                    {isPlaying ? <Pause size={24} /> : <Play size={24} />}
                  </button>
                  <button><SkipForward size={20} /></button>
                </div>
                <span className="text-sm opacity-75">4:56</span>
              </div>
            </div>
          </div>
        );

      case 'qibla':
        return (
          <div className="pb-24">
            {/* Qibla Compass */}
            <div className={`p-6 mb-6 ${isDark ? 'bg-gray-800' : 'bg-white'} rounded-3xl text-center`}>
              <h2 className="text-xl font-bold mb-4">Qibla Finder</h2>
              <div className="relative w-64 h-64 mx-auto mb-4">
                <div className="absolute inset-0 border-4 border-gray-200 rounded-full"></div>
                <div 
                  className="absolute inset-0 border-4 border-green-500 rounded-full"
                  style={{ 
                    clipPath: 'polygon(50% 50%, 50% 0%, 100% 0%, 100% 100%, 0% 100%, 0% 0%, 50% 0%)',
                    transform: 'rotate(294deg)'
                  }}
                ></div>
                <div className="absolute inset-0 flex items-center justify-center">
                  <Compass size={48} className="text-green-500" />
                </div>
              </div>
              <p className="text-3xl font-bold mb-2">294°</p>
              <p className="text-sm opacity-75">Northwest</p>
            </div>

            {/* Location Info */}
            <div className={`p-6 mb-6 ${isDark ? 'bg-gray-800' : 'bg-white'} rounded-3xl`}>
              <div className="flex items-center gap-3 mb-4">
                <MapPin size={20} />
                <h2 className="text-xl font-bold">Your Location</h2>
              </div>
              <p className="text-sm opacity-75 mb-2">Jakarta, Indonesia</p>
              <p className="text-sm opacity-75">Distance to Kaaba: 6,784 km</p>
            </div>

            {/* Calibration Tips */}
            <div className={`p-6 ${isDark ? 'bg-gray-800' : 'bg-white'} rounded-3xl`}>
              <h2 className="text-xl font-bold mb-4">Calibration Tips</h2>
              <ul className="space-y-3">
                <li className="flex items-start gap-3">
                  <div className={`p-2 ${isDark ? 'bg-gray-700' : 'bg-gray-50'} rounded-lg`}>
                    <Target size={16} />
                  </div>
                  <p className="text-sm opacity-75">Hold your device flat and parallel to the ground</p>
                </li>
                <li className="flex items-start gap-3">
                  <div className={`p-2 ${isDark ? 'bg-gray-700' : 'bg-gray-50'} rounded-lg`}>
                    <Compass size={16} />
                  </div>
                  <p className="text-sm opacity-75">Move your device in a figure-8 pattern to calibrate</p>
                </li>
                <li className="flex items-start gap-3">
                  <div className={`p-2 ${isDark ? 'bg-gray-700' : 'bg-gray-50'} rounded-lg`}>
                    <MapPin size={16} />
                  </div>
                  <p className="text-sm opacity-75">Ensure location services are enabled for accuracy</p>
                </li>
              </ul>
            </div>
          </div>
        );

      case 'learn':
        return (
          <div className="pb-24">
            {/* Featured Course */}
            <div className={`relative h-48 mb-6 rounded-3xl overflow-hidden`}>
              <img 
                src="https://images.unsplash.com/photo-1585036156171-384164a8c675?w=800&auto=format&fit=crop" 
                alt="Featured Course"
                className="absolute inset-0 w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/75 to-transparent"></div>
              <div className="absolute bottom-0 left-0 right-0 p-6">
                <h2 className="text-white text-2xl font-bold mb-2">Fundamentals of Islam</h2>
                <p className="text-white/75">Master the basics of Islamic beliefs and practices</p>
              </div>
            </div>

            {/* Learning Modules */}
            <div className="grid grid-cols-2 gap-4 mb-6">
              {learningModules.map((module, index) => (
                <div key={index} className={`${isDark ? 'bg-gray-800' : 'bg-white'} rounded-2xl overflow-hidden`}>
                  <div className="relative h-24">
                    <img 
                      src={module.image}
                      alt={module.title}
                      className="absolute inset-0 w-full h-full object-cover"
                    />
                  </div>
                  <div className="p-4">
                    <h3 className="font-bold mb-2">{module.title}</h3>
                    <div className="flex justify-between items-center">
                      <span className="text-sm opacity-75">{module.lessons} lessons</span>
                      <span className="text-sm opacity-75">{module.progress}%</span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-1.5 mt-2">
                      <div 
                        className="bg-green-600 h-1.5 rounded-full" 
                        style={{ width: `${module.progress}%` }}
                      ></div>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Quick Access */}
            <div className={`p-6 ${isDark ? 'bg-gray-800' : 'bg-white'} rounded-3xl`}>
              <h2 className="text-xl font-bold mb-4">Quick Access</h2>
              <div className="grid grid-cols-2 gap-4">
                {[
                  { icon: <GraduationCap size={24} />, title: "My Courses" },
                  { icon: <Users size={24} />, title: "Study Groups" },
                  { icon: <MosqueDome size={24} />, title: "Live Classes" },
                  { icon: <Gift size={24} />, title: "Rewards" }
                ].map((item, index) => (
                  <button 
                    key={index}
                    className={`p-4 ${isDark ? 'bg-gray-700' : 'bg-gray-50'} rounded-xl flex flex-col items-center gap-2`}
                  >
                    {item.icon}
                    <span className="text-sm font-medium">{item.title}</span>
                  </button>
                ))}
              </div>
            </div>
          </div>
        );

      case 'more':
        return (
          <div className="pb-24">
            {/* Profile Section */}
            <div className={`p-6 mb-6 ${isDark ? 'bg-gray-800' : 'bg-white'} rounded-3xl`}>
              <div className="flex items-center gap-4 mb-6">
                <div className="w-16 h-16 rounded-full bg-gradient-to-r from-green-400 to-blue-500 flex items-center justify-center text-white text-2xl font-bold">
                  A
                </div>
                <div>
                  <h2 className="text-xl font-bold">Ahmad</h2>
                  <p className="text-sm opacity-75">Premium Member</p>
                </div>
              </div>
              <div className="grid grid-cols-3 gap-4">
                <div className={`p-4 ${isDark ? 'bg-gray-700' : 'bg-gray-50'} rounded-xl text-center`}>
                  <p className="text-2xl font-bold">7</p>
                  <p className="text-sm opacity-75">Day Streak</p>
                </div>
                <div className={`p-4 ${isDark ? 'bg-gray-700' : 'bg-gray-50'} rounded-xl text-center`}>
                  <p className="text-2xl font-bold">1286</p>
                  <p className="text-sm opacity-75">Verses Read</p>
                </div>
                <div className={`p-4 ${isDark ? 'bg-gray-700' : 'bg-gray-50'} rounded-xl text-center`}>
                  <p className="text-2xl font-bold">12</p>
                  <p className="text-sm opacity-75">Courses</p>
                </div>
              </div>
            </div>

            {/* Settings & Tools */}
            <div className={`p-6 ${isDark ? 'bg-gray-800' : 'bg-white'} rounded-3xl`}>
              <h2 className="text-xl font-bold mb-4">Settings & Tools</h2>
              <div className="space-y-4">
                {[
                  { icon: <Settings size={20} />, title: "App Settings" },
                  { icon: <Bell size={20} />, title: "Notifications" },
                  { icon: <Calculator size={20} />, title: "Zakat Calculator" },
                  { icon: <Calendar size={20} />, title: "Islamic Calendar" },
                  { icon: <MessageCircle size={20} />, title: "Community" },
                  { icon: <Radio size={20} />, title: "Islamic Radio" }
                ].map((item, index) => (
                  <button 
                    key={index}
                    className={`w-full p-4 ${isDark ? 'bg-gray-700' : 'bg-gray-50'} rounded-xl flex items-center justify-between`}
                  >
                    <div className="flex items-center gap-3">
                      {item.icon}
                      <span>{item.title}</span>
                    </div>
                    <ChevronRight size={20} className="opacity-50" />
                  </button>
                ))}
              </div>
            </div>
          </div>
        );
    }
  };

  return (
    <div className={`min-h-screen ${isDark ? 'bg-gray-900 text-white' : 'bg-gradient-to-br from-orange-50 to-purple-50 text-gray-800'}`}>
      <div className="container mx-auto px-4 py-8">
        {/* Header */}
        <div className="flex justify-between items-center mb-8">
          <div>
            <h1 className="text-2xl font-bold">Assalamu'alaikum</h1>
            <p className="text-sm opacity-75">Welcome back, Brother</p>
          </div>
          <div className="flex gap-4">
            <button 
              onClick={() => setIsDark(!isDark)}
              className="p-2 rounded-full hover:bg-gray-200/20"
            >
              {isDark ? <Sun size={24} /> : <Moon size={24} />}
            </button>
            <button className="p-2 rounded-full hover:bg-gray-200/20">
              <Menu size={24} />
            </button>
          </div>
        </div>

        {/* Main Content */}
        {renderMainContent()}

        {/* Bottom Navigation */}
        <div className={`fixed bottom-0 left-0 right-0 ${isDark ? 'bg-gray-800' : 'bg-white'} shadow-lg rounded-t-3xl`}>
          <div className="container mx-auto px-4">
            <div className="flex justify-between py-4">
              {[
                { id: 'home', icon: <Clock size={24} /> },
                { id: 'quran', icon: <BookOpen size={24} /> },
                { id: 'qibla', icon: <Compass size={24} /> },
                { id: 'learn', icon: <Book size={24} /> },
                { id: 'more', icon: <Menu size={24} /> }
              ].map(item => (
                <button
                  key={item.id}
                  onClick={() => setActiveTab(item.id)}
                  className={`p-2 rounded-full ${activeTab === item.id ? 'text-green-500' : 'opacity-50'} hover:opacity-100 transition-opacity`}
                >
                  {item.icon}
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;