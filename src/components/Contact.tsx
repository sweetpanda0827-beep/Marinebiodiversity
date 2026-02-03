import { Mail, MessageSquare, Calendar, MapPin } from 'lucide-react';

export default function Contact() {
  return (
    <section id="contact" className="py-24 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <div className="inline-block bg-teal-100 text-teal-700 px-4 py-2 rounded-full text-sm font-semibold mb-4">
            Get In Touch
          </div>
          <h2 className="text-4xl sm:text-5xl font-bold text-slate-900 mb-4">
            Start Your Ocean Intelligence Journey
          </h2>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto">
            Ready to transform how you work with marine biodiversity data? Let's discuss how OceanMind AI can support your mission.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          <div>
            <div className="bg-gradient-to-br from-teal-600 via-blue-600 to-cyan-600 rounded-2xl p-12 text-white h-full">
              <h3 className="text-2xl font-bold mb-6">Why Partner With Us?</h3>
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="bg-white/20 p-3 rounded-lg">
                    <Mail className="h-6 w-6" />
                  </div>
                  <div>
                    <h4 className="font-semibold mb-1">Dedicated Support</h4>
                    <p className="text-white/90 text-sm">Our team of marine data experts is here to ensure your success.</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="bg-white/20 p-3 rounded-lg">
                    <Calendar className="h-6 w-6" />
                  </div>
                  <div>
                    <h4 className="font-semibold mb-1">Flexible Solutions</h4>
                    <p className="text-white/90 text-sm">Customizable platform configurations to match your specific needs.</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="bg-white/20 p-3 rounded-lg">
                    <MessageSquare className="h-6 w-6" />
                  </div>
                  <div>
                    <h4 className="font-semibold mb-1">Ongoing Innovation</h4>
                    <p className="text-white/90 text-sm">Regular updates with new data sources and AI capabilities.</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="bg-white/20 p-3 rounded-lg">
                    <MapPin className="h-6 w-6" />
                  </div>
                  <div>
                    <h4 className="font-semibold mb-1">Global Community</h4>
                    <p className="text-white/90 text-sm">Join a network of leading conservation organizations and researchers.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div>
            <form className="bg-slate-50 rounded-2xl p-8 border border-slate-200">
              <div className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-semibold text-slate-900 mb-2">
                    Full Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    className="w-full px-4 py-3 rounded-lg border border-slate-300 focus:ring-2 focus:ring-teal-600 focus:border-transparent outline-none transition-all"
                    placeholder="Dr. Jane Smith"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-semibold text-slate-900 mb-2">
                    Email Address
                  </label>
                  <input
                    type="email"
                    id="email"
                    className="w-full px-4 py-3 rounded-lg border border-slate-300 focus:ring-2 focus:ring-teal-600 focus:border-transparent outline-none transition-all"
                    placeholder="jane.smith@organization.org"
                  />
                </div>
                <div>
                  <label htmlFor="organization" className="block text-sm font-semibold text-slate-900 mb-2">
                    Organization
                  </label>
                  <input
                    type="text"
                    id="organization"
                    className="w-full px-4 py-3 rounded-lg border border-slate-300 focus:ring-2 focus:ring-teal-600 focus:border-transparent outline-none transition-all"
                    placeholder="Marine Research Institute"
                  />
                </div>
                <div>
                  <label htmlFor="interest" className="block text-sm font-semibold text-slate-900 mb-2">
                    Area of Interest
                  </label>
                  <select
                    id="interest"
                    className="w-full px-4 py-3 rounded-lg border border-slate-300 focus:ring-2 focus:ring-teal-600 focus:border-transparent outline-none transition-all"
                  >
                    <option>Species Conservation</option>
                    <option>Fisheries Management</option>
                    <option>Marine Protected Areas</option>
                    <option>Climate Research</option>
                    <option>Policy Development</option>
                    <option>Other</option>
                  </select>
                </div>
                <div>
                  <label htmlFor="message" className="block text-sm font-semibold text-slate-900 mb-2">
                    Message
                  </label>
                  <textarea
                    id="message"
                    rows={4}
                    className="w-full px-4 py-3 rounded-lg border border-slate-300 focus:ring-2 focus:ring-teal-600 focus:border-transparent outline-none transition-all resize-none"
                    placeholder="Tell us about your data needs and conservation goals..."
                  ></textarea>
                </div>
                <button
                  type="submit"
                  className="w-full bg-gradient-to-r from-teal-600 to-blue-600 text-white px-8 py-4 rounded-lg font-semibold hover:shadow-xl hover:scale-[1.02] transition-all duration-300"
                >
                  Send Message
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
