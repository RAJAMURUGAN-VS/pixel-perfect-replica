const Header = () => {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 px-4 py-4 md:px-8">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        <div className="font-stranger text-xl md:text-2xl glow-text tracking-[0.2em]">
          STRANGER<br />THINGS
        </div>
        
        <nav className="tech-border px-4 py-2 bg-card/80 backdrop-blur-sm">
          <span className="font-terminal text-lg md:text-xl text-foreground tracking-wider cursor-pointer hover:text-accent transition-colors">
            THE LATEST
          </span>
        </nav>
      </div>
    </header>
  );
};

export default Header;
