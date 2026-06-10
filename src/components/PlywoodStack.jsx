export function PlywoodStack() {
  return (
    <div className="relative mt-11 h-60 max-sm:h-48" aria-hidden="true">
      {Array.from({ length: 8 }).map((_, index) => (
        <span
          className="plywood-layer animate-stack-settle"
          key={index}
          style={{
            '--offset': `${index * 7}px`,
            animationDelay: `${index * 45}ms`,
          }}
        />
      ))}
    </div>
  );
}
