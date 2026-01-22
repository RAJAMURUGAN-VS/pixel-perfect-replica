import { motion } from 'framer-motion'

const AboutDetails = () => {
  return (
    <section id="anomalies" className="relative py-20 px-4 md:px-8">
      <div className="max-w-6xl mx-auto">

        {/* Main Content Box */}
        <motion.div
          initial={{ opacity: 0, y: 50, scale: 0.98 }}
          whileInView={{ opacity: 1, y: 0, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="tech-border bg-card/60 backdrop-blur-sm p-8 md:p-12 relative overflow-hidden"
        >
          {/* About Symposium */}
          <h3 className="font-terminal text-xl md:text-2xl text-accent tracking-wider mb-4">
            — RENDEZVOUS 2K25
          </h3>

          <p className="font-terminal text-base md:text-lg text-muted-foreground leading-relaxed tracking-wide mb-8">
            Welcome to <span className="text-foreground">Rendezvous 2K25</span>, a
            National Level Symposium organized by the Department of Computer Science
            and Engineering, R.M.D Engineering College. The event blends technical
            innovation with non-technical excitement, fostering creativity,
            collaboration, and competitive spirit.
          </p>

          {/* College Rules */}
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

          {/* About College */}
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

          {/* About Department */}
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

          {/* Schedule */}
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
                  '--',
                  '--',
                  '--',
                  '--',
                  '--',
                  '--',
                ].map(event => (
                  <tr key={event} className="border-b border-foreground/10">
                    <td className="p-3">{event}</td>
                    <td className="p-3">--</td>
                    <td className="p-3">--</td>
                    <td className="p-3">CSE DEPARTMENT</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* Decorative Element */}
          <motion.div
            animate={{ y: [0, -10, 0] }}
            transition={{ duration: 6, repeat: Infinity }}
            className="absolute bottom-8 right-8"
          >
            <div className="w-8 h-8 border-2 border-foreground/50 rotate-45" />
          </motion.div>

          {/* Scan Lines */}
          <div className="absolute inset-0 pointer-events-none opacity-30">
            <div
              className="absolute inset-0"
              style={{
                backgroundImage: `repeating-linear-gradient(
                  0deg,
                  transparent,
                  transparent 4px,
                  hsl(var(--neon-cyan) / 0.1) 4px,
                  hsl(var(--neon-cyan) / 0.1) 8px
                )`,
              }}
            />
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default AboutDetails
