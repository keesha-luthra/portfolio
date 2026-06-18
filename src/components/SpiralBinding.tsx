export default function SpiralBinding() {
  return (
    <div className="fixed top-0 bottom-0 left-0 md:left-4 lg:left-8 w-6 md:w-8 z-40 pointer-events-none flex flex-col justify-evenly py-4 opacity-90">
      {Array.from({ length: 30 }).map((_, i) => (
        <div key={i} className="relative w-full h-3">
          {/* The metal ring */}
          <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-b from-gray-300 via-gray-400 to-gray-500 rounded-full shadow-[2px_2px_4px_rgba(0,0,0,0.4)] transform -rotate-12 border border-gray-600" />
          {/* Hole punch into the paper */}
          <div className="absolute top-1 -right-3 w-3 h-3 bg-[var(--color-background)] rounded-full shadow-[inset_1px_1px_3px_rgba(0,0,0,0.3)] mix-blend-multiply" />
        </div>
      ))}
    </div>
  );
}
