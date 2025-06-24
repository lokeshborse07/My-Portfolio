import React, { useState } from 'react';
import { Send, Github, Linkedin, Mail, PhoneCall } from 'lucide-react';
import GlowText from './GlowText';

interface FormState {
  name: string;
  email: string;
  message: string;
}

const Contact: React.FC = () => {
  const [formData, setFormData] = useState<FormState>({
    name: '',
    email: '',
    message: ''
  });
  
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);
  
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitSuccess(true);
      
      // Reset form after showing success message
      setTimeout(() => {
        setSubmitSuccess(false);
        setFormData({ name: '', email: '', message: '' });
      }, 3000);
    }, 1500);
  };

  return (
    <section id="contact" className="py-20 bg-black">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <GlowText text="Get In Touch" className="text-3xl md:text-4xl font-bold mb-4" />
          <div className="w-24 h-1 bg-cyan-400 mx-auto rounded-full"></div>
          <p className="text-gray-400 mt-4 max-w-2xl mx-auto">
            Have a project in mind or want to know more? Let's talk!
          </p>
        </div>
        
        <div className="max-w-5xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-10">
            {/* Contact Info */}
            <div className="lg:col-span-2 space-y-8">
              <div className="bg-gray-900 rounded-lg p-6 border border-gray-800 transition-all duration-300 hover:shadow-[0_0_20px_rgba(15,23,42,0.3)] hover:border-gray-700">
                <h3 className="text-xl font-semibold text-white mb-6">Contact Information</h3>
                
                <div className="space-y-4">
                  <div className="flex items-start space-x-4">
                    <div className="w-10 h-10 flex-shrink-0 flex items-center justify-center rounded-full bg-cyan-400 bg-opacity-10">
                      <Mail className="h-5 w-5 text-cyan-400" />
                    </div>
                    <div>
                      <p className="text-gray-400 text-sm">Email</p>
                      <a href="mailto:hello@example.com" className="text-white hover:text-cyan-400 transition-colors duration-300">lokeshborse.rcpit@gmail.com</a>
                    </div>
                  </div>
                  
                  <div className="flex items-start space-x-4">
                    <div className="w-10 h-10 flex-shrink-0 flex items-center justify-center rounded-full bg-cyan-400 bg-opacity-10">
                      <PhoneCall className="h-5 w-5 text-cyan-400" />
                    </div>
                    <div>
                      <p className="text-gray-400 text-sm">Phone</p>
                      <a href="tel:+1234567890" className="text-white hover:text-cyan-400 transition-colors duration-300">+91 9637732233</a>
                    </div>
                  </div>
                </div>
                
                <div className="mt-8">
                  <p className="text-gray-400 mb-4">Connect with me</p>
                  <div className="flex space-x-4">
                    <a 
                      href="https://github.com/lokeshborse07" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="w-10 h-10 flex items-center justify-center rounded-full bg-gray-800 text-gray-400 transition-all duration-300 hover:bg-gray-700 hover:text-cyan-400"
                    >
                      <Github size={18} />
                    </a>
                    <a 
                      href="https://www.linkedin.com/in/lokeshborse07/" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="w-10 h-10 flex items-center justify-center rounded-full bg-gray-800 text-gray-400 transition-all duration-300 hover:bg-gray-700 hover:text-cyan-400"
                    >
                      <Linkedin size={18} />
                    </a>
                    <a 
                      href="lokeshborse.rcpit@gmail.com"
                      className="w-10 h-10 flex items-center justify-center rounded-full bg-gray-800 text-gray-400 transition-all duration-300 hover:bg-gray-700 hover:text-cyan-400"
                    >
                      <Mail size={18} />
                    </a>
                  </div>
                </div>
              </div>
              
              <div className="bg-gray-900 rounded-lg p-6 border border-gray-800 transition-all duration-300 hover:shadow-[0_0_20px_rgba(15,23,42,0.3)] hover:border-gray-700">
              <h3 className="text-xl font-semibold text-white mb-4">Let's build the future together</h3>
<p className="text-gray-400">
  I'm currently seeking entry-level opportunities as a Java Developer or Backend Developer. If you're looking for a passionate and dedicated fresher ready to contribute and grow, I'd love to connect with you.
</p>
              </div>
            </div>
            
            {/* Contact Form */}
            <div className="lg:col-span-3">
              <form 
                onSubmit={handleSubmit}
                className="bg-gray-900 rounded-lg p-6 border border-gray-800 shadow-lg"
              >
                <h3 className="text-xl font-semibold text-white mb-6">Send a Message</h3>
                
                <div className="space-y-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-400 mb-2">
                      Your Name
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-lg bg-gray-800 border border-gray-700 text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-cyan-400 focus:border-transparent transition-all duration-300"
                      placeholder="John Doe"
                      required
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-400 mb-2">
                      Your Email
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-lg bg-gray-800 border border-gray-700 text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-cyan-400 focus:border-transparent transition-all duration-300"
                      placeholder="john@example.com"
                      required
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-gray-400 mb-2">
                      Your Message
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      rows={6}
                      value={formData.message}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-lg bg-gray-800 border border-gray-700 text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-cyan-400 focus:border-transparent transition-all duration-300"
                      placeholder="Tell me about your project..."
                      required
                    ></textarea>
                  </div>
                  
                  <div>
                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className={`w-full flex items-center justify-center gap-2 px-6 py-3 rounded-lg font-medium transition-all duration-300 ${
                        isSubmitting
                          ? 'bg-gray-700 text-gray-400 cursor-not-allowed'
                          : submitSuccess
                          ? 'bg-green-600 text-white'
                          : 'bg-cyan-500 text-white hover:bg-cyan-600'
                      }`}
                    >
                      {isSubmitting ? (
                        <>
                          <span className="animate-spin rounded-full h-5 w-5 border-b-2 border-white"></span>
                          <span>Sending...</span>
                        </>
                      ) : submitSuccess ? (
                        'Message Sent Successfully!'
                      ) : (
                        <>
                          <Send size={18} />
                          <span>Send Message</span>
                        </>
                      )}
                    </button>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;