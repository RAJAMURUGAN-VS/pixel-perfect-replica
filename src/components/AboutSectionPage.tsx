import { motion } from 'framer-motion';
import AboutSlider from './AboutSlider';
import heroImage from '@/assets/hero-background.jpg';

const AboutSection = () => {
  return (
    <section className="relative min-h-screen overflow-hidden">
      {/* Background */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${heroImage})` }}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-background/80 via-background/60 to-background" />
      </div>

      {/* Content */}
      <div className="relative z-10 pt-24">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.25, 0.46, 0.45, 0.94] }}
        >
          <AboutSlider />
        </motion.div>

        {/* Additional About Content */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3, ease: [0.25, 0.46, 0.45, 0.94] }}
          className="max-w-4xl mx-auto px-4 md:px-8 py-12"
        >
          <div className="tech-border bg-card/80 backdrop-blur-sm p-8 mb-8">
            <h3 className="font-terminal text-xl md:text-2xl text-accent tracking-wider mb-4">
              — RENDEZVOUS 2K26
            </h3>
            <p className="font-terminal text-base md:text-lg text-muted-foreground leading-relaxed tracking-wide mb-8">
              Welcome to <span className="text-foreground">Rendezvous 2K26</span>, a
              National Level Symposium organized by the Department of Computer Science
              and Engineering, R.M.D Engineering College. The event blends technical
              innovation with non-technical excitement, fostering creativity,
              collaboration, and competitive spirit.
            </p>
          </div>

          {/* College Rules */}
          <div className="tech-border bg-card/80 backdrop-blur-sm p-8 mb-8">
            <h3 className="font-terminal text-xl md:text-2xl text-accent tracking-wider mb-4">
              — COLLEGE RULES
            </h3>

            <ul className="list-disc pl-6 space-y-2 font-terminal text-sm md:text-base text-muted-foreground tracking-wide mb-10">
              <li>ID card is mandatory for entry into the college.</li>
              <li>Prior registration via Google Form is required.</li>
              <li>No registration fees will be collected.</li>
              <li>Participation certificates will be provided.</li>
              <li>Winners will be rewarded with cash prizes.</li>
              <li>Mobile phones are not allowed inside the campus.</li>
              <li>Strict formal dress code must be followed.</li>
              <li>Transport and food will be provided.</li>
            </ul>
          </div>

          {/* About College */}
          <div className="tech-border bg-card/80 backdrop-blur-sm p-8 mb-8">
            <h3 className="font-terminal text-xl md:text-2xl text-accent tracking-wider mb-4">
              — ABOUT COLLEGE
            </h3>

            <p className="font-terminal text-sm md:text-base text-muted-foreground leading-relaxed tracking-wide mb-4">
              RMDEC aspires to be a premier institution offering quality technical
              education and research with strong application expertise. The college
              nurtures creativity, professionalism, academic excellence, ethics, and
              responsibility while promoting a maker culture of learning and doing.
            </p>

            <a
              href="https://rmd.ac.in/index.html"
              target="_blank"
              rel="noreferrer"
              className="inline-block font-terminal text-sm tracking-wider text-neon-cyan border border-neon-cyan px-4 py-2 mb-10 hover:bg-neon-cyan/20 transition"
            >
              KNOW MORE
            </a>
          </div>

          {/* About Department */}
          <div className="tech-border bg-card/80 backdrop-blur-sm p-8 mb-8">
            <h3 className="font-terminal text-xl md:text-2xl text-accent tracking-wider mb-4">
              — ABOUT DEPARTMENT
            </h3>

            <p className="font-terminal text-sm md:text-base text-muted-foreground leading-relaxed tracking-wide mb-4">
              The B.E Computer Science and Engineering program has a strong legacy of
              excellence. The department emphasizes fundamentals, innovation, and
              hands-on industrial exposure through Centers of Excellence in Big Data,
              Cyber Security, Cloud Computing, and Digital Enterprise.
            </p>

            <a
              href="https://rmd.ac.in/dept/cse/index.html"
              target="_blank"
              rel="noreferrer"
              className="inline-block font-terminal text-sm tracking-wider text-neon-cyan border border-neon-cyan px-4 py-2 mb-12 hover:bg-neon-cyan/20 transition"
            >
              KNOW MORE
            </a>
          </div>

          {/* Schedule */}
          <div className="tech-border bg-card/80 backdrop-blur-sm p-8 mb-8">
            <h3 className="font-terminal text-xl md:text-2xl text-accent tracking-wider mb-4">
              — SCHEDULE
            </h3>

            <div className="overflow-x-auto">
              <table className="w-full border-collapse font-terminal text-sm text-muted-foreground">
                <thead>
                  <tr className="border-b border-foreground/20">
                    <th className="p-3 text-left">Event</th>
                    <th className="p-3 text-left">Student Coordinator</th>
                    <th className="p-3 text-left">Contact</th>
                    <th className="p-3 text-left">Venue</th>
                  </tr>
                </thead>
                <tbody>
                  {[
                    {
                      name: "Paper Presentation",
                      studentCoordinator: "JAYA KUMAR S",
                      contact: "9123540151",
                      venue: "CSE DEPARTMENT",
                    },
                    {
                      name: "Claw CTF",
                      studentCoordinator: "KEERTHI K P",
                      contact: "9360174225",
                      venue: "CSE DEPARTMENT",
                    },
                    {
                      name: "Vibe-A-Thon",
                      studentCoordinator: "RAJAMURUGAN V S",
                      contact: "8015766399",
                      venue: "CSE DEPARTMENT",
                    },
                    {
                      name: "The da vinci code",
                      studentCoordinator: "KRUTHIKA S T",
                      contact: "9360308572",
                      venue: "CSE DEPARTMENT",
                    },
                    {
                      name: "Stranger Tunes",
                      studentCoordinator: "NIVETHA J",
                      contact: "6380388354",
                      venue: "CSE DEPARTMENT",
                    },
                    {
                      name: "Ipl Auction",
                      studentCoordinator: "KARUNAMOORTHI R",
                      contact: "9025681889",
                      venue: "CSE DEPARTMENT",
                    },
                  ].map(event => (
                    <tr key={event.name} className="border-b border-foreground/10">
                      <td className="p-3">{event.name}</td>
                      <td className="p-3">{event.studentCoordinator}</td>
                      <td className="p-3">{event.contact}</td>
                      <td className="p-3">CSE DEPARTMENT</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default AboutSection;
