import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Clock, MapPin } from 'lucide-react';

export function AgendaSection() {
  const [activeDay, setActiveDay] = useState(1);

  type AgendaItem = {
    time: string;
    title: string;
    loc: string;
    tag: string;
    color: string;
    speaker?: string;
  };

  const days = [
    { id: 1, date: 'July 16', label: 'Day 1' },
    { id: 2, date: 'July 17', label: 'Day 2' },
    { id: 3, date: 'July 18', label: 'Day 3' },
  ];

  const agenda: Record<number, AgendaItem[]> = {
    1: [
      { time: '08:00 - 09:00', title: 'Registration & Welcome Coffee', loc: 'Main Lobby', tag: 'General', color: '#59A9DC' },
      { time: '09:00 - 09:30', title: 'Opening Ceremony', loc: 'Main Stage', speaker: 'Vitalik Buterin', tag: 'Keynote', color: '#FF72AA' },
      { time: '09:30 - 10:30', title: 'The State of Ethereum', loc: 'Ethereum Core Room', tag: 'Keynote', color: '#FF72AA' },
      { time: '10:45 - 11:45', title: 'Building DeFi in Emerging Markets', loc: 'Main Stage', tag: 'Panel', color: '#F5DB5E' },
      { time: '11:45 - 13:00', title: 'Lunch & Networking', loc: 'Courtyard', tag: 'Break', color: '#59A9DC' },
      { time: '13:00 - 15:00', title: 'Smart Contract Security Workshop', loc: 'Workshop Room A', tag: 'Workshop', color: '#FF72AA' },
    ],
    2: [
      { time: '09:30 - 11:00', title: 'Ethereum Staking Workshop', loc: 'Workshop Room B', tag: 'Workshop', color: '#F5DB5E' },
      { time: '11:00 - 12:30', title: 'Privacy Tools on Ethereum', loc: 'Tech Stage', tag: 'Privacy', color: '#FF72AA' },
      { time: '14:00 - 16:00', title: 'Hackathon Mentoring', loc: 'Hackathon Area', tag: 'Hackathon', color: '#59A9DC' },
    ],
    3: [
      { time: '10:00 - 12:00', title: 'Grand Finale & Demos', loc: 'Main Stage', tag: 'Main Stage', color: '#FF72AA' },
      { time: '14:00 - 16:00', title: 'Awards Ceremony', loc: 'Main Stage', tag: 'Awards', color: '#F5DB5E' },
    ]
  };

  return (
    <section id="agenda" className="py-24 px-6 bg-[#00121D] relative">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="inline-block px-4 py-1.5 bg-[#FF72AA]/10 border border-[#FF72AA]/20 rounded-full text-[#FF72AA] text-sm font-black mb-6 uppercase tracking-widest"
          >
            SCHEDULE
          </motion.div>
          <h2 className="text-4xl md:text-6xl font-black text-white mb-6 uppercase" style={{ fontFamily: 'Outfit, sans-serif' }}>
            Three Days of <span className="text-[#FF72AA]">Innovation</span>
          </h2>
          <p className="text-white/40 text-lg max-w-2xl mx-auto font-medium">
            Packed agenda with keynotes, workshops, panels, and networking opportunities.
          </p>
        </div>

        {/* Custom Day Toggle matching PNG */}
        <div className="flex justify-center gap-4 mb-16">
          {days.map((day) => (
            <button
              key={day.id}
              onClick={() => setActiveDay(day.id)}
              className={`flex flex-col items-center px-8 py-4 rounded-2xl transition-all duration-300 min-w-[120px] ${activeDay === day.id
                ? 'bg-[#FF72AA] text-white shadow-xl shadow-[#FF72AA]/20'
                : 'bg-white/5 text-white/40 hover:bg-white/10 hover:text-white'
                }`}
            >
              <span className="text-lg font-black">{day.label}</span>
              <span className={`text-[10px] font-bold uppercase tracking-widest ${activeDay === day.id ? 'opacity-80' : 'opacity-40'}`}>
                {day.date}
              </span>
            </button>
          ))}
        </div>

        <div className="space-y-4">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeDay}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              className="space-y-4"
            >
              {agenda[activeDay as keyof typeof agenda].map((item, idx) => (
                <div
                  key={idx}
                  className="bg-white/[0.03] border border-white/5 rounded-[24px] p-6 flex flex-col md:flex-row md:items-center gap-6 group hover:bg-white/[0.06] hover:border-white/10 transition-all cursor-default"
                >
                  <div className="flex items-center gap-3 md:w-48 flex-shrink-0">
                    <Clock className="w-4 h-4 text-white/20" />
                    <span className="text-white font-black text-lg">{item.time}</span>
                  </div>

                  <div className="flex-grow">
                    <h3 className="text-xl font-black text-white mb-1 group-hover:text-[#FF72AA] transition-colors uppercase tracking-tight">
                      {item.title}
                    </h3>
                    <div className="flex items-center gap-2 text-white/30 text-sm font-bold">
                      <MapPin className="w-3 h-3" />
                      {item.loc}
                      {item.speaker && <span className="flex items-center gap-2 ml-2"><span className="w-1 h-1 rounded-full bg-white/20" /> {item.speaker}</span>}
                    </div>
                  </div>

                  <div className="shrink-0 flex items-center justify-between md:justify-end gap-6">
                    <span
                      className="px-4 py-1.5 rounded-full text-[10px] font-black uppercase tracking-widest border"
                      style={{
                        color: item.color,
                        borderColor: `${item.color}44`,
                        backgroundColor: `${item.color}11`
                      }}
                    >
                      {item.tag}
                    </span>
                  </div>
                </div>
              ))}
            </motion.div>
          </AnimatePresence>
        </div>

        <div className="mt-20 text-center">
          <button className="px-10 py-5 bg-white/5 border border-white/10 text-white rounded-2xl font-black text-lg hover:bg-[#FF72AA] hover:text-[#001929] hover:border-transparent transition-all">
            DOWNLOAD FULL SCHEDULE (PDF)
          </button>
        </div>
      </div>
    </section>
  );
}
