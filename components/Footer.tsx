export default function Footer() {
  return (
    <footer className="border-t border-black/10 mt-16">
      <div className="max-w-7xl mx-auto px-6 py-10">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-8">
          <div>
            <h3 className="text-xl font-bold mb-2">AustroVis</h3>
            <p className="text-sm text-black/60 max-w-md">
              A workshop series focused on visualization and visual analytics at Austrian universities.
            </p>
          </div>
          <div className="flex flex-col gap-4">
            <h4 className="text-sm font-semibold">Connect</h4>
            <a 
              href="https://discord.gg/rbkSzsxP47" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-sm text-black/60 hover:text-black transition-colors"
            >
              Discord
            </a>
            <a 
              href="https://github.com/austrovis" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-sm text-black/60 hover:text-black transition-colors"
            >
              GitHub
            </a>
          </div>
        </div>
        <div className="mt-8 pt-6 border-t border-black/10 text-center text-sm text-black/60 space-y-2">
          <p>
            Code by{' '}
            <a 
              href="https://github.com/velitchko" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-black hover:underline font-medium"
            >
              @velitchko
            </a>
          </p>
          <p>
            <a 
              href="https://github.com/austrovis/austrovis" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-black/60 hover:text-black hover:underline transition-colors"
            >
              View source & report issues →
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}
