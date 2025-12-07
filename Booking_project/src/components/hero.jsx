import React, { useState } from "react";

function Hero() {
  const [loading, setLoading] = useState(true);

  return (
    <section className="hero">
      {loading && <div className="loader">Loading...</div>}
      <img
        src="https://images.unsplash.com/photo-1506744038136-46273834b3fb"
        alt="Hero"
        onLoad={() => setLoading(false)}
        style={{ display: loading ? "none" : "block" }}
      />
      {!loading && (
        <div className="hero-content">
          <h1>Explore the World with Wanderly</h1>
          <p>Luxury travel experiences tailored for you</p>
        </div>
      )}
    </section>
  );
}

export default Hero;
