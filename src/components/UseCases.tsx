import { Fish, Anchor, Scale, AlertTriangle, BookOpen, TrendingUp } from 'lucide-react';

const useCases = [
  {
    icon: Fish,
    title: 'Species Conservation',
    description: 'Track endangered species populations, migration patterns, and habitat changes to inform targeted conservation strategies.',
    benefits: ['Population monitoring', 'Habitat mapping', 'Threat assessment'],
    color: 'from-teal-600 to-blue-600',
  },
  {
    icon: Anchor,
    title: 'Marine Protected Areas',
    description: 'Optimize MPA placement and monitor effectiveness using comprehensive biodiversity and environmental data.',
    benefits: ['Site selection', 'Impact assessment', 'Compliance monitoring'],
    color: 'from-blue-600 to-cyan-600',
  },
  {
    icon: Scale,
    title: 'Fisheries Management',
    description: 'Support sustainable fishing practices with real-time stock assessments and ecosystem health indicators.',
    benefits: ['Stock assessment', 'Quota optimization', 'Bycatch reduction'],
    color: 'from-cyan-600 to-teal-600',
  },
  {
    icon: AlertTriangle,
    title: 'Climate Impact Analysis',
    description: 'Understand how climate change affects marine ecosystems through long-term trend analysis and predictive modeling.',
    benefits: ['Temperature tracking', 'Acidification monitoring', 'Range shift prediction'],
    color: 'from-teal-600 to-blue-600',
  },
  {
    icon: BookOpen,
    title: 'Research & Discovery',
    description: 'Accelerate marine science with integrated datasets that enable new discoveries and hypothesis testing.',
    benefits: ['Data exploration', 'Correlation analysis', 'Publication support'],
    color: 'from-blue-600 to-cyan-600',
  },
  {
    icon: TrendingUp,
    title: 'Policy Development',
    description: 'Inform evidence-based policy decisions with comprehensive ocean health metrics and impact projections.',
    benefits: ['Policy modeling', 'Impact visualization', 'Stakeholder reporting'],
    color: 'from-cyan-600 to-teal-600',
  },
];

export default function UseCases() {
  return (
    <section id="use-cases" className="py-24 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-slate-50 to-white">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <div className="inline-block bg-cyan-100 text-cyan-700 px-4 py-2 rounded-full text-sm font-semibold mb-4">
            Use Cases
          </div>
          <h2 className="text-4xl sm:text-5xl font-bold text-slate-900 mb-4">
            Driving Conservation Impact
          </h2>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto">
            From research to policy, our platform empowers diverse stakeholders to make data-driven decisions that protect ocean ecosystems.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {useCases.map((useCase, index) => (
            <div
              key={index}
              className="bg-white p-8 rounded-2xl border border-slate-200 hover:shadow-2xl transition-all duration-300 group hover:-translate-y-1"
            >
              <div className={`bg-gradient-to-br ${useCase.color} w-14 h-14 rounded-xl flex items-center justify-center mb-6 shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                <useCase.icon className="h-7 w-7 text-white" />
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-3">{useCase.title}</h3>
              <p className="text-slate-600 mb-4 leading-relaxed">{useCase.description}</p>
              <div className="space-y-2">
                {useCase.benefits.map((benefit, i) => (
                  <div key={i} className="flex items-center space-x-2">
                    <div className="w-1.5 h-1.5 rounded-full bg-teal-600"></div>
                    <span className="text-sm text-slate-700">{benefit}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div className="bg-slate-900 rounded-2xl p-12 text-white">
          <div className="max-w-4xl mx-auto">
            <h3 className="text-3xl font-bold mb-6 text-center">Real-World Success Stories</h3>
            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-white/10 backdrop-blur-sm p-6 rounded-xl border border-white/20">
                <div className="text-teal-400 font-semibold mb-2">Pacific Marine Reserve</div>
                <p className="text-slate-300 text-sm leading-relaxed">
                  Used OceanMind AI to identify critical habitat zones, resulting in a 40% increase in protected area effectiveness and measurable species recovery.
                </p>
              </div>
              <div className="bg-white/10 backdrop-blur-sm p-6 rounded-xl border border-white/20">
                <div className="text-blue-400 font-semibold mb-2">Sustainable Fisheries Initiative</div>
                <p className="text-slate-300 text-sm leading-relaxed">
                  Integrated real-time data reduced bycatch by 35% while maintaining fishing yields through optimized quota management and spatial planning.
                </p>
              </div>
              <div className="bg-white/10 backdrop-blur-sm p-6 rounded-xl border border-white/20">
                <div className="text-cyan-400 font-semibold mb-2">Climate Research Consortium</div>
                <p className="text-slate-300 text-sm leading-relaxed">
                  Accelerated research timelines by 60% through unified access to decades of ocean temperature, chemistry, and biodiversity data.
                </p>
              </div>
              <div className="bg-white/10 backdrop-blur-sm p-6 rounded-xl border border-white/20">
                <div className="text-teal-400 font-semibold mb-2">National Policy Framework</div>
                <p className="text-slate-300 text-sm leading-relaxed">
                  Informed evidence-based legislation protecting 500,000 km² of ocean through comprehensive ecosystem health assessments.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
