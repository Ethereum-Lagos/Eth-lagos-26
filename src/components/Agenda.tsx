import { motion } from 'motion/react';
import { Calendar, Clock, MapPin, Search, Filter } from 'lucide-react';
import { useState } from 'react';

export function Agenda() {
  const [selectedDay, setSelectedDay] = useState(0);
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedType, setSelectedType] = useState<string | null>(null);

  const days = [
    {
      date: 'Day 1 - March 15, 2026',
      events: [
        {
          time: '09:00 AM',
          title: 'Opening Ceremony',
          speaker: 'ETH Lagos Team',
          location: 'Main Hall',
          type: 'Keynote',
          description: 'Welcome address and conference overview',
        },
        {
          time: '10:30 AM',
          title: 'The Future of Ethereum in Africa',
          speaker: 'Vitalik Buterin',
          location: 'Main Hall',
          type: 'Keynote',
          description: 'Exploring opportunities and challenges for Ethereum adoption in Africa',
        },
        {
          time: '12:00 PM',
          title: 'Building Scalable dApps',
          speaker: 'Sarah Chen',
          location: 'Tech Stage',
          type: 'Workshop',
          description: 'Hands-on workshop on building production-ready decentralized applications',
        },
        {
          time: '01:00 PM',
          title: 'Lunch & Networking',
          speaker: 'All Attendees',
          location: 'Food Court',
          type: 'Break',
          description: 'Connect with fellow attendees and enjoy local cuisine',
        },
        {
          time: '02:00 PM',
          title: 'DeFi Panel Discussion',
          speaker: 'Industry Leaders',
          location: 'Main Hall',
          type: 'Panel',
          description: 'The state of DeFi and its impact on financial inclusion',
        },
        {
          time: '03:30 PM',
          title: 'Coffee Break & Expo',
          speaker: 'All Attendees',
          location: 'Expo Hall',
          type: 'Break',
          description: 'Visit sponsor booths and enjoy refreshments',
        },
        {
          time: '04:00 PM',
          title: 'Smart Contract Security',
          speaker: 'Michael Okonkwo',
          location: 'Dev Room',
          type: 'Workshop',
          description: 'Best practices for auditing and securing smart contracts',
        },
        {
          time: '05:30 PM',
          title: 'Day 1 Closing & Networking',
          speaker: 'All Attendees',
          location: 'Main Hall',
          type: 'Social',
          description: 'Evening networking session with drinks and music',
        },
      ],
    },
    {
      date: 'Day 2 - March 16, 2026',
      events: [
        {
          time: '09:00 AM',
          title: 'NFTs and Digital Identity',
          speaker: 'Amina Mohammed',
          location: 'Creative Lab',
          type: 'Talk',
          description: 'How NFTs are reshaping digital ownership and identity in Africa',
        },
        {
          time: '10:30 AM',
          title: 'Layer 2 Solutions Deep Dive',
          speaker: 'John Smith',
          location: 'Tech Stage',
          type: 'Workshop',
          description: 'Understanding and implementing L2 scaling solutions',
        },
        {
          time: '12:00 PM',
          title: 'Lunch Break',
          speaker: 'All Attendees',
          location: 'Food Court',
          type: 'Break',
          description: 'Networking lunch with local delicacies',
        },
        {
          time: '01:00 PM',
          title: 'Hackathon Kickoff',
          speaker: 'Dev Team',
          location: 'Hack Space',
          type: 'Event',
          description: 'Official start of the 48-hour hackathon challenge',
        },
        {
          time: '02:00 PM',
          title: 'Web3 UX/UI Best Practices',
          speaker: 'Emma Williams',
          location: 'Design Studio',
          type: 'Workshop',
          description: 'Creating user-friendly Web3 experiences',
        },
        {
          time: '03:30 PM',
          title: 'DAO Governance Models',
          speaker: 'Panel of Experts',
          location: 'Main Hall',
          type: 'Panel',
          description: 'Exploring effective governance structures for DAOs',
        },
        {
          time: '05:00 PM',
          title: 'Regional Blockchain Adoption',
          speaker: 'African Founders',
          location: 'Main Hall',
          type: 'Talk',
          description: 'Success stories from African blockchain startups',
        },
        {
          time: '06:30 PM',
          title: 'Evening Social & Hackathon continues',
          speaker: 'All Attendees',
          location: 'Multiple Venues',
          type: 'Social',
          description: 'Networking event while hackathon teams continue building',
        },
      ],
    },
    {
      date: 'Day 3 - March 17, 2026',
      events: [
        {
          time: '09:00 AM',
          title: 'Tokenomics & Economics',
          speaker: 'Industry Experts',
          location: 'Main Hall',
          type: 'Talk',
          description: 'Designing sustainable token economies',
        },
        {
          time: '10:30 AM',
          title: 'Zero-Knowledge Proofs Workshop',
          speaker: 'Research Team',
          location: 'Tech Stage',
          type: 'Workshop',
          description: 'Introduction to ZK technology and privacy solutions',
        },
        {
          time: '12:00 PM',
          title: 'Hackathon Submission Deadline',
          speaker: 'Hackathon Teams',
          location: 'Hack Space',
          type: 'Event',
          description: 'Final submissions for hackathon projects',
        },
        {
          time: '01:00 PM',
          title: 'Lunch & Demo Prep',
          speaker: 'All Attendees',
          location: 'Food Court',
          type: 'Break',
          description: 'Final meal while teams prepare presentations',
        },
        {
          time: '02:00 PM',
          title: 'Hackathon Presentations',
          speaker: 'Finalist Teams',
          location: 'Main Hall',
          type: 'Event',
          description: 'Top teams present their projects to judges',
        },
        {
          time: '04:00 PM',
          title: 'Awards & Closing Ceremony',
          speaker: 'ETH Lagos Team',
          location: 'Main Hall',
          type: 'Keynote',
          description: 'Prize distribution and conference wrap-up',
        },
        {
          time: '05:30 PM',
          title: 'Closing Party',
          speaker: 'All Attendees',
          location: 'Main Hall',
          type: 'Social',
          description: 'Celebration with music, food, and networking',
        },
      ],
    },
  ];

  const getTypeColor = (type: string) => {
    const colors = {
      Keynote: 'bg-purple-500/20 text-purple-400 border-purple-500/30',
      Workshop: 'bg-cyan-500/20 text-cyan-400 border-cyan-500/30',
      Panel: 'bg-pink-500/20 text-pink-400 border-pink-500/30',
      Talk: 'bg-green-500/20 text-green-400 border-green-500/30',
      Event: 'bg-orange-500/20 text-orange-400 border-orange-500/30',
      Social: 'bg-blue-500/20 text-blue-400 border-blue-500/30',
      Break: 'bg-gray-500/20 text-gray-400 border-gray-500/30',
    };
    return colors[type as keyof typeof colors] || colors.Talk;
  };

  const eventTypes = ['All', 'Keynote', 'Workshop', 'Panel', 'Talk', 'Event', 'Social'];

  const filteredEvents = days[selectedDay].events.filter(event => {
    const matchesSearch = event.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         event.speaker.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         event.description.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesType = !selectedType || selectedType === 'All' || event.type === selectedType;
    return matchesSearch && matchesType;
  });

  return (
    <section id="agenda" className="py-24 px-6 bg-gray-900/50">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl text-white mb-6">
            Event <span className="text-purple-400">Agenda</span>
          </h2>
          <p className="text-xl text-gray-400">
            Three days packed with knowledge, networking, and innovation
          </p>
        </motion.div>

        {/* Day Selector */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="flex flex-wrap justify-center gap-3 mb-8"
        >
          {days.map((day, index) => (
            <button
              key={index}
              onClick={() => setSelectedDay(index)}
              className={`px-6 py-3 rounded-lg border transition-all ${
                selectedDay === index
                  ? 'bg-purple-600 border-purple-500 text-white shadow-lg shadow-purple-500/30'
                  : 'bg-gray-800/50 border-purple-500/20 text-gray-400 hover:border-purple-500/50'
              }`}
            >
              Day {index + 1}
            </button>
          ))}
        </motion.div>

        {/* Search and Filters */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-8 space-y-4"
        >
          <div className="relative">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-500" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search sessions, speakers, or topics..."
              className="w-full bg-gray-800/50 border border-purple-500/20 rounded-lg pl-12 pr-4 py-3 text-white placeholder-gray-500 focus:border-purple-500/50 focus:outline-none transition-colors"
            />
          </div>

          <div className="flex items-center gap-2 overflow-x-auto pb-2">
            <Filter className="w-5 h-5 text-gray-500 flex-shrink-0" />
            {eventTypes.map((type) => (
              <button
                key={type}
                onClick={() => setSelectedType(type === 'All' ? null : type)}
                className={`px-4 py-2 rounded-lg border whitespace-nowrap transition-all ${
                  (type === 'All' && !selectedType) || selectedType === type
                    ? getTypeColor(type) + ' border-opacity-100'
                    : 'bg-gray-800/30 border-purple-500/20 text-gray-400 hover:border-purple-500/40'
                }`}
              >
                {type}
              </button>
            ))}
          </div>
        </motion.div>

        {/* Events List */}
        <div>
          <div className="flex items-center gap-3 mb-6">
            <Calendar className="w-6 h-6 text-purple-400" />
            <h3 className="text-2xl text-white">{days[selectedDay].date}</h3>
          </div>

          {filteredEvents.length === 0 ? (
            <div className="text-center py-12 text-gray-400">
              No sessions found matching your criteria.
            </div>
          ) : (
            <div className="space-y-4">
              {filteredEvents.map((event, eventIndex) => (
                <motion.div
                  key={eventIndex}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: eventIndex * 0.05 }}
                  className="bg-gray-900/50 border border-purple-500/20 rounded-xl p-6 hover:border-purple-500/50 transition-all hover:shadow-lg hover:shadow-purple-500/10"
                >
                  <div className="flex flex-col md:flex-row md:items-start gap-4">
                    <div className="flex items-center gap-2 text-purple-400 min-w-[120px]">
                      <Clock className="w-4 h-4" />
                      <span>{event.time}</span>
                    </div>

                    <div className="flex-1">
                      <div className="flex flex-wrap items-center gap-3 mb-2">
                        <h4 className="text-xl text-white">{event.title}</h4>
                        <span className={`px-3 py-1 rounded-full text-sm border ${getTypeColor(event.type)}`}>
                          {event.type}
                        </span>
                      </div>
                      <p className="text-gray-400 text-sm mb-3">{event.description}</p>
                      <div className="flex flex-wrap gap-4 text-gray-400 text-sm">
                        <span>Speaker: <span className="text-purple-400">{event.speaker}</span></span>
                        <div className="flex items-center gap-1">
                          <MapPin className="w-4 h-4" />
                          <span>{event.location}</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
