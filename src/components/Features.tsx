import { Database, Brain, Activity, Shield, Zap, Globe } from 'lucide-react';

const features = [
  {
    icon: Database,
    title: 'Unified Data Integration',
    description: 'Seamlessly aggregate data from diverse sources including satellite imagery, sensor networks, research databases, and citizen science initiatives into a single, coherent platform.',
    gradient: 'from-teal-600 to-blue-600',
  },
  {
    icon: Brain,
    title: 'AI-Powered Analytics',
    description: 'Advanced machine learning algorithms identify patterns, predict trends, and uncover insights that would be impossible to detect through manual analysis.',
    gradient: 'from-blue-600 to-cyan-600',
  },
  {
    icon: Activity,
    title: 'Real-Time Monitoring',
    description: 'Track ocean conditions, species movements, and environmental changes as they happen with live data feeds and automated alert systems.',
    gradient: 'from-cyan-600 to-teal-600',
  },
  {
    icon: Globe,
    title: 'Global Coverage',
    description: 'Access comprehensive data from all major ocean basins and coastal regions, enabling truly global perspectives on marine biodiversity.',
    gradient: 'from-teal-600 to-blue-600',
  },
  {
    icon: Zap,
    title: 'Rapid Deployment',
    description: 'Get started quickly with intuitive interfaces and pre-built dashboards. No technical expertise required to access powerful insights.',
    gradient: 'from-blue-600 to-cyan-600',
  },
  {
    icon: Shield,
    title: 'Data Security',
    description: 'Enterprise-grade security ensures your research data remains protected while facilitating appropriate collaboration and sharing.',
    gradient: 'from-cyan-600 to-teal-600',
  },
];

export default function Features() {
  return (
    <section id="features" className="py-24 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-slate-50 to-white">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <div className="inline-block bg-teal-100 text-teal-700 px-4 py-2 rounded-full text-sm font-semibold mb-4">
            Platform Features
          </div>
          <h2 className="text-4xl sm:text-5xl font-bold text-slate-900 mb-4">
            Powerful Tools for Ocean Intelligence
          </h2>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto">
            Everything you need to understand, analyze, and protect marine ecosystems in one comprehensive platform.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="bg-white p-8 rounded-2xl border border-slate-200 hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 group"
            >
              <div className={`bg-gradient-to-br ${feature.gradient} w-14 h-14 rounded-xl flex items-center justify-center mb-6 shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                <feature.icon className="h-7 w-7 text-white" />
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-3">{feature.title}</h3>
              <p className="text-slate-600 leading-relaxed">{feature.description}</p>
            </div>
          ))}
        </div>

        <div className="mt-16 bg-gradient-to-br from-teal-600 via-blue-600 to-cyan-600 rounded-2xl p-12 text-white relative overflow-hidden">
          <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGRlZnM+PHBhdHRlcm4gaWQ9ImdyaWQiIHdpZHRoPSI2MCIgaGVpZ2h0PSI2MCIgcGF0dGVyblVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+PHBhdGggZD0iTSAxMCAwIEwgMCAwIDAgMTAiIGZpbGw9Im5vbmUiIHN0cm9rZT0icmdiYSgyNTUsMjU1LDI1NSwwLjEpIiBzdHJva2Utd2lkdGg9IjEiLz48L3BhdHRlcm4+PC9kZWZzPjxyZWN0IHdpZHRoPSIxMDAlIiBoZWlnaHQ9IjEwMCUiIGZpbGw9InVybCgjZ3JpZCkiLz48L3N2Zz4=')] opacity-30"></div>
          <div className="relative z-10 text-center max-w-3xl mx-auto">
            <h3 className="text-3xl font-bold mb-4">Ready to Transform Ocean Data?</h3>
            <p className="text-lg text-white/90 mb-8">
              Join leading research institutions and conservation organizations already using OceanMind AI to drive meaningful change.
            </p>
            <button className="bg-white text-teal-600 px-8 py-4 rounded-full font-semibold text-lg hover:shadow-2xl hover:scale-105 transition-all duration-300">
              Request a Demo
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
