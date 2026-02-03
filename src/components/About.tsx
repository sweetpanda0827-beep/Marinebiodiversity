import { Target, Eye, Heart } from 'lucide-react';

export default function About() {
  return (
    <section id="about" className="py-24 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold text-slate-900 mb-4">
            About OceanMind AI
          </h2>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto">
            We're revolutionizing marine conservation through intelligent data integration and AI-powered insights.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-16">
          <div className="bg-gradient-to-br from-teal-50 to-blue-50 p-8 rounded-2xl border border-teal-100 hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
            <div className="bg-gradient-to-br from-teal-600 to-blue-600 w-14 h-14 rounded-xl flex items-center justify-center mb-6 shadow-lg">
              <Target className="h-7 w-7 text-white" />
            </div>
            <h3 className="text-2xl font-bold text-slate-900 mb-3">Our Mission</h3>
            <p className="text-slate-600 leading-relaxed">
              To create a unified platform that breaks down data silos and empowers researchers, policymakers, and conservationists with actionable ocean intelligence.
            </p>
          </div>

          <div className="bg-gradient-to-br from-blue-50 to-cyan-50 p-8 rounded-2xl border border-blue-100 hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
            <div className="bg-gradient-to-br from-blue-600 to-cyan-600 w-14 h-14 rounded-xl flex items-center justify-center mb-6 shadow-lg">
              <Eye className="h-7 w-7 text-white" />
            </div>
            <h3 className="text-2xl font-bold text-slate-900 mb-3">Our Vision</h3>
            <p className="text-slate-600 leading-relaxed">
              A world where comprehensive marine biodiversity data drives informed decisions, leading to healthier oceans and thriving ecosystems for future generations.
            </p>
          </div>

          <div className="bg-gradient-to-br from-cyan-50 to-teal-50 p-8 rounded-2xl border border-cyan-100 hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
            <div className="bg-gradient-to-br from-cyan-600 to-teal-600 w-14 h-14 rounded-xl flex items-center justify-center mb-6 shadow-lg">
              <Heart className="h-7 w-7 text-white" />
            </div>
            <h3 className="text-2xl font-bold text-slate-900 mb-3">Our Impact</h3>
            <p className="text-slate-600 leading-relaxed">
              Supporting global conservation efforts by providing unprecedented access to integrated marine data, enabling faster response times and better-informed strategies.
            </p>
          </div>
        </div>

        <div className="bg-gradient-to-r from-slate-900 to-slate-800 rounded-2xl p-12 text-white">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h3 className="text-3xl font-bold mb-6">Why Data Integration Matters</h3>
              <p className="text-slate-300 leading-relaxed mb-4">
                Marine biodiversity data is scattered across countless databases, research institutions, and government agencies. This fragmentation hinders our ability to understand and protect ocean ecosystems.
              </p>
              <p className="text-slate-300 leading-relaxed">
                OceanMind AI bridges these gaps, creating a comprehensive, real-time view of ocean health that transforms how we approach marine conservation.
              </p>
            </div>
            <div className="grid grid-cols-2 gap-6">
              <div className="bg-white/10 backdrop-blur-sm p-6 rounded-xl border border-white/20">
                <div className="text-3xl font-bold text-teal-400 mb-2">85%</div>
                <div className="text-sm text-slate-300">Faster Data Access</div>
              </div>
              <div className="bg-white/10 backdrop-blur-sm p-6 rounded-xl border border-white/20">
                <div className="text-3xl font-bold text-blue-400 mb-2">100+</div>
                <div className="text-sm text-slate-300">Partner Organizations</div>
              </div>
              <div className="bg-white/10 backdrop-blur-sm p-6 rounded-xl border border-white/20">
                <div className="text-3xl font-bold text-cyan-400 mb-2">24/7</div>
                <div className="text-sm text-slate-300">Monitoring</div>
              </div>
              <div className="bg-white/10 backdrop-blur-sm p-6 rounded-xl border border-white/20">
                <div className="text-3xl font-bold text-teal-400 mb-2">50K+</div>
                <div className="text-sm text-slate-300">Species Tracked</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
