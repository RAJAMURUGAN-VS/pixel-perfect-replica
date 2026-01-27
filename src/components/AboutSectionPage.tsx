import { motion } from 'framer-motion';
import AboutSlider from './AboutSlider';

const AboutSection = () => {
  return (
    <section className="relative min-h-screen overflow-hidden">
      {/* Content */}
      <div className="relative z-10 pt-20 sm:pt-24">
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
          className="max-w-4xl mx-auto px-3 sm:px-4 md:px-8 py-6 sm:py-12"
        >
          <div className="tech-border bg-card/80 backdrop-blur-sm p-4 sm:p-6 md:p-8 mb-4 sm:mb-8">
            <h3 className="font-terminal text-lg sm:text-xl md:text-2xl text-accent tracking-wider mb-3 sm:mb-4">
              — RENDEZVOUS 2K26
            </h3>
            <p className="font-terminal text-sm sm:text-base md:text-lg text-muted-foreground leading-relaxed tracking-wide mb-4 sm:mb-8">
              Welcome to <span className="text-foreground">Rendezvous 2K26</span>, a
              National Level Symposium organized by the Department of Computer Science
              and Engineering, R.M.D Engineering College. The event blends technical
              innovation with non-technical excitement, fostering creativity,
              collaboration, and competitive spirit.
            </p>
          </div>

          {/* College Rules */}
          <div className="tech-border bg-card/80 backdrop-blur-sm p-4 sm:p-6 md:p-8 mb-4 sm:mb-8">
            <h3 className="font-terminal text-lg sm:text-xl md:text-2xl text-accent tracking-wider mb-3 sm:mb-4">
              — COLLEGE RULES
            </h3>

            <ul className="list-disc pl-4 sm:pl-6 space-y-1.5 sm:space-y-2 font-terminal text-xs sm:text-sm md:text-base text-muted-foreground tracking-wide mb-6 sm:mb-10">
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
          <div className="tech-border bg-card/80 backdrop-blur-sm p-4 sm:p-6 md:p-8 mb-4 sm:mb-8">
            <h3 className="font-terminal text-lg sm:text-xl md:text-2xl text-accent tracking-wider mb-3 sm:mb-4">
              — ABOUT COLLEGE
            </h3>

            <p className="font-terminal text-xs sm:text-sm md:text-base text-muted-foreground leading-relaxed tracking-wide mb-3 sm:mb-4">
              RMDEC aspires to be a premier institution offering quality technical
              education and research with strong application expertise. The college
              nurtures creativity, professionalism, academic excellence, ethics, and
              responsibility while promoting a maker culture of learning and doing.
            </p>

            <a
              href="https://rmd.ac.in/index.html"
              target="_blank"
              rel="noreferrer"
              className="inline-block font-terminal text-xs sm:text-sm tracking-wider text-neon-cyan border border-neon-cyan px-3 sm:px-4 py-1.5 sm:py-2 mb-6 sm:mb-10 hover:bg-neon-cyan/20 transition"
            >
              KNOW MORE
            </a>
          </div>

          {/* About Department */}
          <div className="tech-border bg-card/80 backdrop-blur-sm p-4 sm:p-6 md:p-8 mb-4 sm:mb-8">
            <h3 className="font-terminal text-lg sm:text-xl md:text-2xl text-accent tracking-wider mb-3 sm:mb-4">
              — ABOUT DEPARTMENT
            </h3>

            <p className="font-terminal text-xs sm:text-sm md:text-base text-muted-foreground leading-relaxed tracking-wide mb-3 sm:mb-4">
              The B.E Computer Science and Engineering program has a strong legacy of
              excellence. The department emphasizes fundamentals, innovation, and
              hands-on industrial exposure through Centers of Excellence in Big Data,
              Cyber Security, Cloud Computing, and Digital Enterprise.
            </p>

            <a
              href="https://rmd.ac.in/dept/cse/index.html"
              target="_blank"
              rel="noreferrer"
              className="inline-block font-terminal text-xs sm:text-sm tracking-wider text-neon-cyan border border-neon-cyan px-3 sm:px-4 py-1.5 sm:py-2 mb-8 sm:mb-12 hover:bg-neon-cyan/20 transition"
            >
              KNOW MORE
            </a>
          </div>

          {/* Schedule */}
          <div className="tech-border bg-card/80 backdrop-blur-sm p-4 sm:p-6 md:p-8 mb-4 sm:mb-8">
            <h3 className="font-terminal text-lg sm:text-xl md:text-2xl text-accent tracking-wider mb-3 sm:mb-4">
              — EVENTS
            </h3>

            <div className="overflow-x-auto -mx-2 sm:mx-0">
              <table className="w-full border-collapse font-terminal text-xs sm:text-sm text-muted-foreground min-w-[500px]">
                <thead>
                  <tr className="border-b border-foreground/20">
                    <th className="p-2 sm:p-3 text-left">Event</th>
                    <th className="p-2 sm:p-3 text-left">Student Coordinator</th>
                    <th className="p-2 sm:p-3 text-left">Contact</th>
                    <th className="p-2 sm:p-3 text-left">Venue</th>
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
                      name: "Stranger Tunes",
                      studentCoordinator: "NIVETHA J",
                      contact: "6380388354",
                      venue: "CSE DEPARTMENT",
                    },
                    {
                      name: "The da vinci code",
                      studentCoordinator: "KIRUTHIKA S T",
                      contact: "9360308572",
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
                      <td className="p-2 sm:p-3">{event.name}</td>
                      <td className="p-2 sm:p-3">{event.studentCoordinator}</td>
                      <td className="p-2 sm:p-3">{event.contact}</td>
                      <td className="p-2 sm:p-3">CSE DEPARTMENT</td>
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
