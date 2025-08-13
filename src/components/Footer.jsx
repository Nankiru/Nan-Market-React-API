import { Link } from "react-router-dom";

const Footer = () => {
  
  return (
    <>
      <footer className="relative bg-white/60 backdrop-blur-md shadow-md text-black rounded-2xl overflow-hidden">
        {/* Animated background elements */}
        <div className="absolute top-0 left-0 w-full h-full overflow-hidden opacity-20">
          <div className="absolute top-20 left-10 w-32 h-32 bg-blue-500 rounded-full filter blur-3xl animate-float1" />
          <div className="absolute top-40 right-20 w-40 h-40 bg-purple-500 rounded-full filter blur-3xl animate-float2" />
          <div className="absolute bottom-10 left-1/2 w-48 h-48 bg-cyan-500 rounded-full filter blur-3xl animate-float3" />
        </div>
        {/* Main footer content */}
        <div className="relative max-w-7xl mx-auto px-6 py-16 sm:py-20 lg:px-8">
          {/* Grid layout */}
          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-12">
            {/* Logo/Name section with interactive effect */}
            <div className="group">
              <Link to="/" className="flex items-center space-x-2 mb-6">
                <div className="w-10 h-10 bg-gradient-to-r from-cyan-400 to-blue-500 rounded-lg flex items-center justify-center transform group-hover:rotate-12 transition duration-500">
                  <span className="text-xl font-bold">NM</span>
                </div>
                <h2 className="text-2xl font-bold bg-gradient-to-r from-[#f042ff] to-[#f775b1] bg-clip-text text-transparent">
                  Nan Market
                </h2>
              </Link>
              <p className="text-black mb-6">
                It could be a company called Nan's Market.
              </p>
              {/* Social media with hover glow */}
              <div className="flex space-x-4">
                <a
                  href="https://github.com/Nankiru"
                  className="w-10 h-10 rounded-full bg-gray-800 text-white flex items-center justify-center hover:bg-purple-500 hover:shadow-lg hover:shadow-blue-500/30 transition-all duration-300"
                >
                  <svg
                    className="w-5 h-5"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                  </svg>
                </a>
                <a
                  href="javascript:void(0)"
                  className="w-10 h-10 rounded-full bg-gray-800 text-white flex items-center justify-center hover:bg-red-500 hover:shadow-lg hover:shadow-sky-500/30 transition-all duration-300"
                >
                  <svg
                    className="w-5 h-5"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M19.615 3.184c-3.604-.246-11.631-.245-15.23 0-3.897.266-4.356 2.62-4.385 8.816.029 6.185.484 8.549 4.385 8.816 3.6.245 11.626.246 15.23 0 3.897-.266 4.356-2.62 4.385-8.816-.029-6.185-.484-8.549-4.385-8.816zm-10.615 12.816v-8l8 3.993-8 4.007z" />
                  </svg>
                </a>
                <a
                  href="https://web.facebook.com/khem.sopheanan.1"
                  className="w-10 h-10 rounded-full bg-gray-800 text-white flex items-center justify-center hover:bg-blue-500 hover:shadow-lg hover:shadow-purple-500/30 transition-all duration-300"
                >
                  <svg
                    className="w-5 h-5"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M22.675 0h-21.35c-.732 0-1.325.593-1.325 1.325v21.351c0 .731.593 1.324 1.325 1.324h11.495v-9.294h-3.128v-3.622h3.128v-2.671c0-3.1 1.893-4.788 4.659-4.788 1.325 0 2.463.099 2.795.143v3.24l-1.918.001c-1.504 0-1.795.715-1.795 1.763v2.313h3.587l-.467 3.622h-3.12v9.293h6.116c.73 0 1.323-.593 1.323-1.325v-21.35c0-.732-.593-1.325-1.325-1.325z" />
                  </svg>
                </a>
              </div>
            </div>
            {/* Quick links with hover effect */}
            <div>
              <h3 className="text-lg font-semibold mb-6 relative inline-block">
                <span className="relative z-10">Quick Links</span>
                <span className="absolute bottom-0 left-0 w-full h-1 bg-blue-500 transform scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-300" />
              </h3>
              <ul className="space-y-3">
                <li>
                  <Link
                    to="/"
                    className="text-gray-500 hover:text-pink-400 hover:pl-2 transition-all duration-300 flex items-center"
                  >
                    <span className="w-1 h-1 bg-blue-500 rounded-full mr-2 opacity-0 group-hover:opacity-100 transition duration-300" />
                    Home
                  </Link>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-gray-500 hover:text-pink-400 hover:pl-2 transition-all duration-300 flex items-center"
                  >
                    <span className="w-1 h-1 bg-blue-500 rounded-full mr-2 opacity-0 group-hover:opacity-100 transition duration-300" />
                    Projects
                  </a>
                </li>
                <li>
                  <a
                    href="/about"
                    className="text-gray-500 hover:text-pink-400 hover:pl-2 transition-all duration-300 flex items-center"
                  >
                    <span className="w-1 h-1 bg-blue-500 rounded-full mr-2 opacity-0 group-hover:opacity-100 transition duration-300" />
                    About Us
                  </a>
                </li>
                <li>
                  <a
                    href="/features"
                    className="text-gray-500 hover:text-pink-400 hover:pl-2 transition-all duration-300 flex items-center"
                  >
                    <span className="w-1 h-1 bg-blue-500 rounded-full mr-2 opacity-0 group-hover:opacity-100 transition duration-300" />
                    Features
                  </a>
                </li>
                <li>
                  <a
                    href="https://t.me/nan_fullstack"
                    className="text-gray-500 hover:text-pink-400 hover:pl-2 transition-all duration-300 flex items-center"
                  >
                    <span className="w-1 h-1 bg-blue-500 rounded-full mr-2 opacity-0 group-hover:opacity-100 transition duration-300" />
                    Contact
                  </a>
                </li>
              </ul>
            </div>
            {/* Contact info with animated icons */}
            <div>
              <h3 className="text-lg font-semibold mb-6">Contacts</h3>
              <ul className="space-y-4">
                <li className="flex items-start">
                  <div className="flex-shrink-0 mt-1">
                    <div className="w-8 h-8 bg-blue-500/20 rounded-full flex items-center justify-center animate-pulse">
                      <svg
                        className="w-4 h-4 text-blue-400"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                        />
                      </svg>
                    </div>
                  </div>
                  <div className="ml-3">
                    <p className="text-sm text-blue-400">Email</p>
                    <a
                      href="mailto:khemsopheanandev@gmail.com"
                      className="text-gray-400 hover:text-pink-400 transition"
                    >
                      khemsopheanandev@gmail.com
                    </a>
                  </div>
                </li>
                <li className="flex items-start">
                  <div className="flex-shrink-0 mt-1">
                    <div
                      className="w-8 h-8 bg-blue-500/20 rounded-full flex items-center justify-center animate-pulse"
                      style={{ animationDelay: "0.2s" }}
                    >
                      <svg
                        className="w-4 h-4 text-blue-400"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                        />
                      </svg>
                    </div>
                  </div>
                  <div className="ml-3">
                    <p className="text-sm text-blue-400">Phone</p>
                    <a
                      href="tel:+855090207392"
                      className="text-gray-400 hover:text-pink-400 transition"
                    >
                      +855 090 207 392
                    </a>
                  </div>
                </li>
              </ul>
            </div>
            {/* Newsletter with floating input */}
            <div>
              <h3 className="text-lg font-semibold mb-6">Stay Updated</h3>
              <p className="text-black mb-4">
                Subscribe to my newsletter for the latest updates.
              </p>
              <form className="mt-4">
                <div className="relative">
                  <input
                    type="email"
                    placeholder="Your email"
                    className="w-full bg-white/60 backdrop-blur-md shadow-md border border-white rounded-lg py-3 px-4 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent placeholder-gray-300 text-blue-400"
                  />
                  <button
                    type="submit"
                    className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-blue-500 hover:bg-gradient-to-r hover:from-[#f042ff] hover:to-[#f775b1] hover:text-white hover:scale-105 hover:shadow-2xl text-white rounded-lg px-4 py-1 transition"
                  >
                    <svg
                      className="w-5 h-5"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M14 5l7 7m0 0l-7 7m7-7H3"
                      />
                    </svg>
                  </button>
                </div>
              </form>
            </div>
          </div>
          {/* Bottom section with animated copyright */}
          <div className="mt-16 pt-8 border-t border-gray-800 flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 text-sm mb-4 md:mb-0">
              © <span id="year" className="text-blue-400" /><Link to='javascript:void(0)' onClick={() =>{alert('I luv U<3')}} className="hover:bg-gradient-to-r hover:from-[#f042ff] hover:to-[#f775b1] hover:bg-clip-text hover:text-transparent hover:transition-all hover:duration-300">  Khem Sopheanan Dev</Link>.
              All rights reserved.
            </p>
            <div className="flex space-x-6">
              <a
                href="javascript:void(0)"
                className="text-gray-400 hover:text-pink-400 transition"
              >
                Privacy Policy
              </a>
              <a
                href="javascript:void(0)"
                className="text-gray-400 hover:text-pink-400 transition"
              >
                Terms of Service
              </a>
              <a
                href="javascript:void(0)"
                className="text-gray-400 hover:text-pink-400 transition"
              >
                Cookies
              </a>
            </div>
          </div>
        </div>
        {/* Floating orb that follows cursor */}
        <div className="orb absolute w-64 h-64 rounded-full bg-gradient-to-r from-blue-500/10 to-purple-500/10 filter blur-3xl pointer-events-none" />
        <style
          dangerouslySetInnerHTML={{
            __html:
              "\n    /* Animations */\n    @keyframes float1 {\n      0%, 100% { transform: translate(0, 0); }\n      50% { transform: translate(20px, 20px); }\n    }\n    @keyframes float2 {\n      0%, 100% { transform: translate(0, 0); }\n      50% { transform: translate(-15px, 15px); }\n    }\n    @keyframes float3 {\n      0%, 100% { transform: translate(0, 0); }\n      50% { transform: translate(0, -20px); }\n    }\n    .animate-float1 { animation: float1 8s ease-in-out infinite; }\n    .animate-float2 { animation: float2 10s ease-in-out infinite; }\n    .animate-float3 { animation: float3 12s ease-in-out infinite; }\n\n    /* Orb follow effect */\n    .orb {\n      transform: translate(-50%, -50%);\n      opacity: 0.3;\n      transition: transform 0.1s ease-out;\n    }\n  ",
          }}
        />
      </footer>
    </>
  );
};

export default Footer;
