
import React from 'react';
import { Link, useNavigate } from "react-router-dom";
import { ArrowRight, Mail, MapPin, Phone } from 'lucide-react';

export function Footer() {
  const navigate = useNavigate();
  const currentYear = new Date().getFullYear();
  
  const footerSections = [
    {
      title: "Platform",
      links: [
        { name: "Knowledge Hub", href: "/coming-soon" },
        { name: "Community", href: "/community" },
      ]
    },
    {
      title: "Resources",
      links: [
        { name: "Blog", href: "/coming-soon" },
        { name: "Case Studies", href: "/coming-soon" },
        { name: "Events", href: "/coming-soon" },
        { name: "Help Center", href: "/coming-soon" },
        { name: "FAQs", href: "/coming-soon" },
      ]
    },
    {
      title: "Company",
      links: [
        { name: "About Us", href: "/about" },
        { name: "Careers", href: "/coming-soon" },
        { name: "Contact", href: "/contact" },
        { name: "Partners", href: "/coming-soon" },
      ]
    },
    {
      title: "Legal",
      links: [
        { name: "Privacy Policy", href: "/coming-soon" },
        { name: "Terms of Service", href: "/coming-soon" },
        { name: "Cookie Policy", href: "/coming-soon" },
        { name: "Security", href: "/coming-soon" },
      ]
    }
  ];

  const ctaButtons = [
    { text: "Start My Career Journey", href: "/coming-soon", primary: true },
    { text: "Explore Knowledge Hub", href: "/coming-soon" },
    { text: "Join Our Community", href: "/community" },
    { text: "Schedule Mentorship", href: "/coming-soon" },
  ];

  return (
    <footer className="bg-white text-gray-800 border-t border-gray-200">
      {/* CTA Section */}
      {/* <div className="text-center py-16 border-b border-gray-200">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-lexend font-bold mb-6" style={{ color: '#0C7DA7' }}>
            Ready to Transform Your Future?
          </h2>
          <p className="text-gray-600 font-lexend mb-8 max-w-2xl mx-auto">
            Choose your path and start your AI-powered growth journey today
          </p>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 max-w-6xl mx-auto">
            {ctaButtons.map((button) => (
              <button
                key={button.text}
                onClick={() => navigate(button.href)}
                className={`group flex items-center justify-center px-6 py-3 rounded-full font-lexend font-medium transition-all duration-300 hover:scale-105 ${
                  button.primary
                    ? 'text-white hover:opacity-90'
                    : 'border text-white hover:text-white'
                }`}
                style={{
                  backgroundColor: button.primary ? '#0C7DA7' : 'transparent',
                  borderColor: '#0C7DA7',
                  color: button.primary ? 'white' : '#0C7DA7'
                }}
                onMouseEnter={(e) => {
                  if (!button.primary) {
                    e.currentTarget.style.backgroundColor = '#0C7DA7';
                    e.currentTarget.style.color = 'white';
                  }
                }}
                onMouseLeave={(e) => {
                  if (!button.primary) {
                    e.currentTarget.style.backgroundColor = 'transparent';
                    e.currentTarget.style.color = '#0C7DA7';
                  }
                }}
              >
                {button.text}
                <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
              </button>
            ))}
          </div>
        </div>
      </div> */}

      {/* Main Footer Content */}
      <div className="container mx-auto px-4 py-16">
        <div className="grid lg:grid-cols-6 gap-10">
          {/* Brand Section */}
          <div className="lg:col-span-2">
            <Link to="/" className="inline-block mb-6">
              <img 
                alt="Gurukul Code" 
                src="/lovable-uploads/Logos-05-removebg-preview.png" 
                className="h-12 w-auto"
              />
            </Link>
            <p className="text-gray-600 font-lexend mb-6 max-w-md">
              Blending traditional Gurukul mentorship with AI-driven career development, we empower learners at every stage of their journey.
            </p>
            
            {/* Contact Info */}
            <div className="space-y-3 text-sm text-gray-600 font-lexend mb-6">
              <div className="flex items-center">
                <Mail className="h-4 w-4 mr-2" style={{ color: '#0C7DA7' }} />
                hello@gurukulcode.com
              </div>
              <div className="flex items-center">
                <Phone className="h-4 w-4 mr-2" style={{ color: '#0C7DA7' }} />
                 +919922089689
              </div>
              <div className="flex items-center">
                <MapPin className="h-4 w-4 mr-2" style={{ color: '#0C7DA7' }} />
                Pune, India
              </div>
            </div>
            
            {/* Social Media */}
            <div className="flex space-x-4">
              <a href="#" className="hover:opacity-80 transition-colors" style={{ color: '#0C7DA7' }} aria-label="Twitter">
                <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
                </svg>
              </a>
              <a href="#" className="hover:opacity-80 transition-colors" style={{ color: '#0C7DA7' }} aria-label="LinkedIn">
                <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                </svg>
              </a>
              <a href="#" className="hover:opacity-80 transition-colors" style={{ color: '#0C7DA7' }} aria-label="Instagram">
                <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z" />
                </svg>
              </a>
              <a href="#" className="hover:opacity-80 transition-colors" style={{ color: '#0C7DA7' }} aria-label="YouTube">
                <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path d="M19.615 3.184c-3.604-.246-11.631-.245-15.23 0-3.897.266-4.356 2.62-4.385 8.816.029 6.185.484 8.549 4.385 8.816 3.6.245 11.626.246 15.23 0 3.897-.266 4.356-2.62 4.385-8.816-.029-6.185-.484-8.549-4.385-8.816zm-10.615 12.816v-8l8 3.993-8 4.007z" />
                </svg>
              </a>
            </div>
          </div>
          
          {/* Links Sections */}
          {footerSections.map((section) => (
            <div key={section.title} className="mt-6 lg:mt-0">
              <h3 className="text-lg font-lexend font-semibold mb-4" style={{ color: '#0C7DA7' }}>
                {section.title}
              </h3>
              <ul className="space-y-3">
                {section.links.map((link) => (
                  <li key={link.name}>
                    <Link
                      to={link.href}
                      className="text-gray-600 hover:text-sm font-lexend transition-colors"
                      onMouseEnter={(e) => e.currentTarget.style.color = '#0C7DA7'}
                      onMouseLeave={(e) => e.currentTarget.style.color = '#6b7280'}
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-gray-200">
        <div className="container mx-auto px-4 py-6">
          <div className="flex flex-col md:flex-row items-center justify-center text-sm text-gray-600 font-lexend">
            <div className="mb-4 md:mb-0">
              © {currentYear} Gurukul Code. All rights reserved.
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
