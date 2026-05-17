export function FloatingShapes() {
  return (
    <>
      <div className="blob w-96 h-96 bg-accent-300/30 -top-20 -left-20" />
      <div className="blob w-72 h-72 bg-primary-300/30 top-20 right-10 animate-float-slow" />
      <div className="blob w-80 h-80 bg-accent-200/40 bottom-0 left-1/3 animate-float-reverse" />
      <div className="floating-icon top-24 left-12 text-5xl animate-float">
        <i className="fa-solid fa-stethoscope" />
      </div>
      <div className="floating-icon top-40 right-10 text-4xl animate-float-reverse" style={{ animationDelay: '1.2s' }}>
        <i className="fa-solid fa-heart-pulse text-emergency/20" />
      </div>
      <div className="floating-icon bottom-16 left-1/4 text-5xl animate-float-slow" style={{ animationDelay: '0.6s' }}>
        <i className="fa-solid fa-user-doctor" />
      </div>
      <div className="floating-icon top-1/3 right-1/4 text-4xl animate-float" style={{ animationDelay: '2s' }}>
        <i className="fa-solid fa-pills" />
      </div>
    </>
  );
}

export function MeshBackground({ className = '' }) {
  return (
    <div
      className={`absolute inset-0 -z-10 ${className}`}
      style={{
        backgroundImage:
          'radial-gradient(at 20% 20%, rgba(46,196,182,0.18) 0px, transparent 50%), radial-gradient(at 80% 0%, rgba(10,108,184,0.18) 0px, transparent 50%), radial-gradient(at 0% 80%, rgba(46,196,182,0.12) 0px, transparent 50%), radial-gradient(at 90% 90%, rgba(10,108,184,0.10) 0px, transparent 50%)',
      }}
    />
  );
}
