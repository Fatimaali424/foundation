import React from "react";

const Hero: React.FC = () => {
  return (
    <section 
      className="relative h-screen bg-cover bg-center flex flex-col items-center justify-center text-center px-4 sm:px-6 mix-blend-multiply"
      style={{ 
        backgroundImage: "url('/header.jpg')",
        backgroundSize:"cover",
      }}
    >
      {/* Text Container */}
      <div className="relative w-full max-w-[90%] sm:max-w-[80%] md:max-w-[60%] lg:max-w-[50%] text-center">
        {/* Title */}
        <h1 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-blue-900">
          WELCOME TO AMMANAH FOUNDATION
        </h1>

        {/* Description */}
        <p className="text-sm sm:text-base md:text-lg lg:text-xl mt-2 font-semibold text-pink-900">
          At Ammanah Foundation, we believe in the power of compassion, support, and positive <br />
          We believe youth can transform society when united and empowered.
        </p>

        {/* Animated Symbol */}
        <div className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl animate-pulse text-red-900 mt-0">
          ∞
        </div>
      </div>
    </section>
  );
};

export default Hero;

