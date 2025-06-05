import React from 'react';
import { Menu, X, Code2 } from 'lucide-react';
import { useScrollPosition } from '../hooks/useScrollPosition';
import { useLocation, Link } from 'react-router-dom';

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);
  const scrollPosition = useScrollPosition();
  const location = useLocation();
  const isProjectPage = location.pathname.includes('/project/');
  const isLearningPage = location.pathname === '/learning';

  const navItems = [
    { label: 'Accueil', href: '#home' },
    { label: 'À propos', href: '#about' },
    { label: 'Portfolio', href: '#portfolio' },
    { label: 'Compétences', href: '#skills' },
    { label: 'Contact', href: '#contact' },
    { label: 'Mes apprentissages', href: '/learning', isPage: true },
  ];

  const handleNavClick = (href: string, isPage?: boolean) => {
    if (!isPage) {
      if (isLearningPage || isProjectPage) {
        window.location.href = '/' + href;
      } else {
        const element = document.querySelector(href);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        }
      }
    }
    setIsMenuOpen(false);
  };

  return (
    <header className={`fixed w-full z-50 transition-all duration-300 ${
      scrollPosition > 0 || isMenuOpen ? 'bg-white/80 backdrop-blur-md shadow-sm' : 'bg-transparent'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          <Link to="/" className="flex items-center space-x-2">
            <Code2 className="h-8 w-8 text-indigo-600" />
            <span className="text-xl font-bold text-gray-900">DevPortfolio</span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-8">
            {navItems.map((item) => (
              item.isPage ? (
                <Link
                  key={item.href}
                  to={item.href}
                  className="text-gray-700 hover:text-indigo-600 transition-colors cursor-pointer"
                >
                  {item.label}
                </Link>
              ) : (
                <a
                  key={item.href}
                  href={isProjectPage || isLearningPage ? undefined : item.href}
                  onClick={() => handleNavClick(item.href, item.isPage)}
                  className="text-gray-700 hover:text-indigo-600 transition-colors cursor-pointer"
                >
                  {item.label}
                </a>
              )
            ))}
          </nav>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle menu"
          >
            {isMenuOpen ? (
              <X className="h-6 w-6 text-gray-900" />
            ) : (
              <Menu className="h-6 w-6 text-gray-900" />
            )}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden bg-white">
            <div className="px-2 pt-2 pb-3 space-y-1">
              {navItems.map((item) => (
                item.isPage ? (
                  <Link
                    key={item.href}
                    to={item.href}
                    className="block px-3 py-2 text-gray-700 hover:text-indigo-600 transition-colors cursor-pointer"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    {item.label}
                  </Link>
                ) : (
                  <a
                    key={item.href}
                    href={isProjectPage || isLearningPage ? undefined : item.href}
                    onClick={() => handleNavClick(item.href, item.isPage)}
                    className="block px-3 py-2 text-gray-700 hover:text-indigo-600 transition-colors cursor-pointer"
                  >
                    {item.label}
                  </a>
                )
              ))}
            </div>
          </div>
        )}
      </div>
    </header>
  );
}