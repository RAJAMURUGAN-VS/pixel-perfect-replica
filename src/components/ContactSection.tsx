import { useState } from 'react';
import { motion } from 'framer-motion';
import heroImage from '@/assets/hero-background.jpg';

const ContactSection = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
  
    const mailTo = "rendezvous@rmd.ac.in";
    const subject = encodeURIComponent(formData.subject);
    const body = encodeURIComponent(
      `Name: ${formData.name}\nEmail: ${formData.email}\n\nMessage:\n${formData.message}`
    );
  
    // Open user's email client
    window.location.href = `mailto:${mailTo}?subject=${subject}&body=${body}`;
  
    setIsSubmitting(false);
    setSubmitStatus('success');
    setFormData({ name: '', email: '', subject: '', message: '' });
  
    setTimeout(() => setSubmitStatus('idle'), 3000);
  };
  

  const contactInfo = [
    {
      icon: '📍',
      title: 'LOCATION',
      content: 'R.M.D. Engineering College, Kavaraipettai, Chennai - 601206',
    },
    {
      icon: '📧',
      title: 'EMAIL',
      content: 'rendezvous@rmd.ac.in',
    },
  ];

  const contactPersons = [
    {
      name: 'Lakshmi Sri',
      phone: '+91 73057 55115',
    },
    {
      name: 'Yeswanth Raj',
      phone: '+91 96558 99020',
    },
    {
      name: 'Rakesh S',
      phone: '+91 90252 30709',
    },
  ];

  return (
    <section className="relative min-h-screen overflow-hidden">
      {/* Background */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${heroImage})` }}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-background/90 via-background/70 to-background" />
      </div>

      {/* Content */}
      <div className="relative z-10 pt-24 pb-12 px-4 md:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.25, 0.46, 0.45, 0.94] }}
          className="max-w-6xl mx-auto"
        >
          <h2 className="font-stranger text-2xl md:text-3xl glow-text mb-12 tracking-wider text-center">
            CONTACT US
          </h2>

          <div className="grid md:grid-cols-2 gap-12">
            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2, ease: [0.25, 0.46, 0.45, 0.94] }}
            >
              <div className="tech-border bg-card/80 backdrop-blur-sm p-8">
                <h3 className="font-stranger text-xl text-accent mb-6 tracking-wider">
                  SEND A MESSAGE
                </h3>

                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <label className="font-terminal text-sm text-muted-foreground tracking-wider block mb-2">
                      NAME
                    </label>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="w-full bg-background/50 border border-border/50 rounded px-4 py-3 font-terminal text-foreground focus:border-accent focus:outline-none transition-colors"
                      placeholder="Enter your name"
                    />
                  </div>

                  <div>
                    <label className="font-terminal text-sm text-muted-foreground tracking-wider block mb-2">
                      EMAIL
                    </label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full bg-background/50 border border-border/50 rounded px-4 py-3 font-terminal text-foreground focus:border-accent focus:outline-none transition-colors"
                      placeholder="Enter your email"
                    />
                  </div>

                  <div>
                    <label className="font-terminal text-sm text-muted-foreground tracking-wider block mb-2">
                      SUBJECT
                    </label>
                    <input
                      type="text"
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      required
                      className="w-full bg-background/50 border border-border/50 rounded px-4 py-3 font-terminal text-foreground focus:border-accent focus:outline-none transition-colors"
                      placeholder="Enter subject"
                    />
                  </div>

                  <div>
                    <label className="font-terminal text-sm text-muted-foreground tracking-wider block mb-2">
                      MESSAGE
                    </label>
                    <textarea
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      required
                      rows={5}
                      className="w-full bg-background/50 border border-border/50 rounded px-4 py-3 font-terminal text-foreground focus:border-accent focus:outline-none transition-colors resize-none"
                      placeholder="Enter your message"
                    />
                  </div>

                  <motion.button
                    type="submit"
                    disabled={isSubmitting}
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    className="w-full btn-investigate disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    {isSubmitting ? 'TRANSMITTING...' : 'TRANSMIT MESSAGE'}
                  </motion.button>

                  {submitStatus === 'success' && (
                    <motion.p
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      className="font-terminal text-sm text-green-400 text-center"
                    >
                      Message transmitted successfully!
                    </motion.p>
                  )}
                </form>
              </div>
            </motion.div>

            {/* Contact Info */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.4, ease: [0.25, 0.46, 0.45, 0.94] }}
              className="space-y-6"
            >
              <div className="tech-border bg-card/80 backdrop-blur-sm p-8">
                <h3 className="font-stranger text-xl text-accent mb-6 tracking-wider">
                  COORDINATES
                </h3>

                <div className="space-y-6">
                  {contactInfo.map((info, index) => (
                    <motion.div
                      key={info.title}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.5, delay: 0.6 + index * 0.1 }}
                      className="flex items-start gap-4"
                    >
                      <span className="text-2xl">{info.icon}</span>
                      <div>
                        <h4 className="font-terminal text-sm text-accent tracking-wider mb-1">
                          {info.title}
                        </h4>
                        <p className="font-terminal text-base text-muted-foreground">
                          {info.content}
                        </p>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>

              {/* Map Placeholder */}
              {/* Map */}
<div className="tech-border bg-card/80 backdrop-blur-sm p-8">
  <h3 className="font-stranger text-xl text-accent mb-6 tracking-wider">
    DIMENSIONAL RIFT LOCATION
  </h3>

  <div className="aspect-video rounded overflow-hidden border border-border/30">
    <iframe
      title="RMD Engineering College Location"
      src="https://www.google.com/maps?q=13.359259,80.142094&z=15&output=embed"
      width="100%"
      height="100%"
      loading="lazy"
      referrerPolicy="no-referrer-when-downgrade"
      className="w-full h-full"
    />
  </div>
</div>


              {/* Contact Persons */}
              <div className="tech-border bg-card/80 backdrop-blur-sm p-8">
                <h3 className="font-stranger text-xl text-accent mb-6 tracking-wider">
                  CONTACT PERSONS
                </h3>
                <div className="space-y-4">
                  {contactPersons.map((person, index) => (
                    <motion.div
                      key={person.name}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.5, delay: 0.8 + index * 0.1 }}
                      className="flex items-start gap-4"
                    >
                      <span className="text-2xl">📱</span>
                      <div>
                        <h4 className="font-terminal text-sm text-accent tracking-wider mb-1">
                          {person.name}
                        </h4>
                        <a
                          href={`tel:${person.phone.replace(/\s/g, '')}`}
                          className="font-terminal text-base text-muted-foreground hover:text-accent transition-colors"
                        >
                          {person.phone}
                        </a>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>

              {/* Social Links */}
              <div className="tech-border bg-card/80 backdrop-blur-sm p-8">
                <h3 className="font-stranger text-xl text-accent mb-6 tracking-wider">
                  TRANSMISSION CHANNELS
                </h3>
                <div className="flex gap-4">
                  <motion.a
                    href="https://www.instagram.com/rendezvous_2k26"
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.05, y: -2 }}
                    className="flex-1 tech-border bg-background/50 py-3 text-center font-terminal text-sm text-muted-foreground hover:text-accent transition-colors"
                  >
                    INSTAGRAM
                  </motion.a>
                </div>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ContactSection;
