import React, { useState } from 'react';
import { Mail, Phone, Github, Linkedin, File, Check, Send, Loader2 } from 'lucide-react';
import { profile } from '../data/profile';
import { useScrollAnimation } from '../hooks/useScrollAnimation';

export function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const { ref: contactRef, isInView: contactInView } = useScrollAnimation();
  const { ref: formRef, isInView: formInView } = useScrollAnimation();

  const validateForm = () => {
    const newErrors: Record<string, string> = {};
    
    if (!formData.name.trim()) {
      newErrors.name = 'Le nom est requis';
    }
    
    if (!formData.email.trim()) {
      newErrors.email = 'L\'email est requis';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = 'Email invalide';
    }
    
    if (!formData.message.trim()) {
      newErrors.message = 'Le message est requis';
    } else if (formData.message.trim().length < 10) {
      newErrors.message = 'Le message doit contenir au moins 10 caractères';
    }
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { id, value } = e.target;
    setFormData(prev => ({ ...prev, [id]: value }));
    
    // Clear error when user starts typing
    if (errors[id]) {
      setErrors(prev => ({ ...prev, [id]: '' }));
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!validateForm()) return;
    
    setIsSubmitting(true);
    
    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 2000));
    
    // Create mailto link
    const subject = `Contact depuis le portfolio - ${formData.name}`;
    const body = `Nom: ${formData.name}%0D%0AEmail: ${formData.email}%0D%0A%0D%0AMessage:%0D%0A${formData.message}`;
    window.location.href = `mailto:${profile.email}?subject=${subject}&body=${body}`;
    
    setIsSubmitting(false);
    setIsSubmitted(true);
    
    // Reset form after 3 seconds
    setTimeout(() => {
      setFormData({ name: '', email: '', message: '' });
      setIsSubmitted(false);
    }, 3000);
  };

  return (
    <section id="contact" className="py-24 bg-gray-50 dark:bg-gray-800/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 
          ref={contactRef}
          className={`text-3xl font-bold text-center text-gray-900 dark:text-white mb-12 ${
            contactInView ? 'animate-fade-in-down' : 'opacity-0'
          }`}
        >
          Contact
        </h2>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div 
            className={`${
              contactInView ? 'animate-slide-in-left' : 'opacity-0'
            }`}
          >
            <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-6">Contactez-moi</h3>
            <p className="text-gray-600 dark:text-gray-300 mb-8">
              N'hésitez pas à me contacter pour discuter de projets de stage ou pour toute question.
            </p>
            <div className="space-y-6">
              <div className="flex items-center group">
                <Mail className="h-6 w-6 text-indigo-600 dark:text-indigo-400 mr-4 group-hover:scale-110 transition-transform" />
                <span className="text-gray-600 dark:text-gray-300">{profile.email}</span>
              </div>
              <div className="flex items-center group">
                <Phone className="h-6 w-6 text-indigo-600 dark:text-indigo-400 mr-4 group-hover:scale-110 transition-transform" />
                <span className="text-gray-600 dark:text-gray-300">{profile.phone}</span>
              </div>
              <div className="pt-4 space-y-4">
                <a 
                  href={`https://github.com/${profile.social.github}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center text-gray-600 dark:text-gray-300 hover:text-indigo-600 dark:hover:text-indigo-400 transition-all group"
                >
                  <Github className="h-6 w-6 mr-4 group-hover:scale-110 transition-transform" />
                  <span>GitHub</span>
                </a>
                <a 
                  href={`https://linkedin.com/in/${profile.social.linkedin}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center text-gray-600 dark:text-gray-300 hover:text-indigo-600 dark:hover:text-indigo-400 transition-all group"
                >
                  <Linkedin className="h-6 w-6 mr-4 group-hover:scale-110 transition-transform" />
                  <span>LinkedIn</span>
                </a>
                <a 
                  href={profile.social.cv}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center text-gray-600 dark:text-gray-300 hover:text-indigo-600 dark:hover:text-indigo-400 transition-all group"
                >
                  <File className="h-6 w-6 mr-4 group-hover:scale-110 transition-transform" />
                  <span>CV</span>
                </a>
              </div>
            </div>
          </div>
          <form 
            ref={formRef}
            onSubmit={handleSubmit} 
            className={`space-y-6 ${
              formInView ? 'animate-slide-in-right' : 'opacity-0'
            }`}
          >
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-gray-700 dark:text-gray-300">
                Nom
              </label>
              <input
                type="text"
                id="name"
                value={formData.name}
                onChange={handleChange}
                className={`mt-1 block w-full px-4 py-2 rounded-md border ${
                  errors.name 
                    ? 'border-red-500 focus:border-red-500 focus:ring-red-500' 
                    : 'border-gray-300 dark:border-gray-600 focus:border-indigo-500 focus:ring-indigo-500'
                } dark:bg-gray-700 dark:text-white shadow-sm transition-colors`}
                disabled={isSubmitting}
              />
              {errors.name && (
                <p className="mt-1 text-sm text-red-600 dark:text-red-400">{errors.name}</p>
              )}
            </div>
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-700 dark:text-gray-300">
                Email
              </label>
              <input
                type="email"
                id="email"
                value={formData.email}
                onChange={handleChange}
                className={`mt-1 block w-full px-4 py-2 rounded-md border ${
                  errors.email 
                    ? 'border-red-500 focus:border-red-500 focus:ring-red-500' 
                    : 'border-gray-300 dark:border-gray-600 focus:border-indigo-500 focus:ring-indigo-500'
                } dark:bg-gray-700 dark:text-white shadow-sm transition-colors`}
                disabled={isSubmitting}
              />
              {errors.email && (
                <p className="mt-1 text-sm text-red-600 dark:text-red-400">{errors.email}</p>
              )}
            </div>
            <div>
              <label htmlFor="message" className="block text-sm font-medium text-gray-700 dark:text-gray-300">
                Message
              </label>
              <textarea
                id="message"
                rows={4}
                value={formData.message}
                onChange={handleChange}
                className={`mt-1 block w-full px-4 py-2 rounded-md border ${
                  errors.message 
                    ? 'border-red-500 focus:border-red-500 focus:ring-red-500' 
                    : 'border-gray-300 dark:border-gray-600 focus:border-indigo-500 focus:ring-indigo-500'
                } dark:bg-gray-700 dark:text-white shadow-sm transition-colors resize-none`}
                disabled={isSubmitting}
              />
              {errors.message && (
                <p className="mt-1 text-sm text-red-600 dark:text-red-400">{errors.message}</p>
              )}
            </div>
            <button
              type="submit"
              disabled={isSubmitting || isSubmitted}
              className={`w-full py-3 px-6 rounded-lg transition-all transform hover:scale-105 flex items-center justify-center space-x-2 ${
                isSubmitted
                  ? 'bg-green-600 hover:bg-green-700 text-white'
                  : 'bg-indigo-600 hover:bg-indigo-700 dark:bg-indigo-500 dark:hover:bg-indigo-600 text-white'
              } disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none`}
            >
              {isSubmitting ? (
                <>
                  <Loader2 className="h-5 w-5 animate-spin" />
                  <span>Envoi en cours...</span>
                </>
              ) : isSubmitted ? (
                <>
                  <Check className="h-5 w-5" />
                  <span>Envoyé avec succès!</span>
                </>
              ) : (
                <>
                  <Send className="h-5 w-5" />
                  <span>Envoyer</span>
                </>
              )}
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}