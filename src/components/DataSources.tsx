import { Satellite, Waves, FlaskConical, Users, Ship, Camera } from 'lucide-react';

const dataSources = [
  {
    icon: Satellite,
    title: 'Satellite Imagery',
    description: 'High-resolution ocean observations from multiple satellite systems',
    sources: ['NASA', 'ESA', 'NOAA', 'Copernicus'],
    color: 'teal',
  },
  {
    icon: Waves,
    title: 'Ocean Sensors',
    description: 'Real-time data from buoys, gliders, and autonomous vehicles',
    sources: ['Argo Floats', 'Moored Arrays', 'Wave Buoys', 'Tide Gauges'],
    color: 'blue',
  },
  {
    icon: FlaskConical,
    title: 'Research Databases',
    description: 'Scientific data from global marine research institutions',
    sources: ['OBIS', 'GBIF', 'WoRMS', 'FishBase'],
    color: 'cyan',
  },
  {
    icon: Users,
    title: 'Citizen Science',
    description: 'Community-contributed observations and monitoring data',
    sources: ['iNaturalist', 'eBird', 'Reef Check', 'Secchi Disk'],
    color: 'teal',
  },
  {
    icon: Ship,
    title: 'Vessel Tracking',
    description: 'Shipping routes and fishing activity monitoring systems',
    sources: ['AIS Data', 'VMS', 'Global Fishing Watch', 'MarineTraffic'],
    color: 'blue',
  },
  {
    icon: Camera,
    title: 'Underwater Imagery',
    description: 'Visual data from underwater cameras and ROV systems',
    sources: ['ROV Footage', 'Drop Cameras', 'BRUV', 'Coral Reefs'],
    color: 'cyan',
  },
];

export default function DataSources() {
  return (
    <section id="data-sources" className="py-24 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <div className="inline-block bg-blue-100 text-blue-700 px-4 py-2 rounded-full text-sm font-semibold mb-4">
            Data Sources
          </div>
          <h2 className="text-4xl sm:text-5xl font-bold text-slate-900 mb-4">
            Comprehensive Data Integration
          </h2>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto">
            We aggregate and harmonize data from the world's leading marine observation systems and research networks.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {dataSources.map((source, index) => (
            <div
              key={index}
              className={`bg-gradient-to-br from-${source.color}-50 to-${source.color}-100/50 p-8 rounded-2xl border border-${source.color}-200 hover:shadow-xl transition-all duration-300 hover:scale-105`}
            >
              <div className={`bg-gradient-to-br from-${source.color}-600 to-${source.color}-700 w-12 h-12 rounded-xl flex items-center justify-center mb-6 shadow-lg`}>
                <source.icon className="h-6 w-6 text-white" />
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-2">{source.title}</h3>
              <p className="text-slate-600 text-sm mb-4 leading-relaxed">{source.description}</p>
              <div className="flex flex-wrap gap-2">
                {source.sources.map((item, i) => (
                  <span
                    key={i}
                    className={`bg-white/80 text-${source.color}-700 px-3 py-1 rounded-full text-xs font-medium border border-${source.color}-200`}
                  >
                    {item}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 grid md:grid-cols-3 gap-8">
          <div className="bg-slate-50 p-8 rounded-2xl border border-slate-200">
            <div className="text-4xl font-bold text-teal-600 mb-2">50+</div>
            <div className="text-slate-900 font-semibold mb-2">Data Providers</div>
            <p className="text-slate-600 text-sm">Partnerships with leading institutions worldwide</p>
          </div>
          <div className="bg-slate-50 p-8 rounded-2xl border border-slate-200">
            <div className="text-4xl font-bold text-blue-600 mb-2">10M+</div>
            <div className="text-slate-900 font-semibold mb-2">Data Records</div>
            <p className="text-slate-600 text-sm">Continuously growing database of observations</p>
          </div>
          <div className="bg-slate-50 p-8 rounded-2xl border border-slate-200">
            <div className="text-4xl font-bold text-cyan-600 mb-2">99.9%</div>
            <div className="text-slate-900 font-semibold mb-2">Uptime</div>
            <p className="text-slate-600 text-sm">Reliable access to critical ocean data</p>
          </div>
        </div>
      </div>
    </section>
  );
}
