import '../tours.css';
function Tours() {
  const tours = [
    {
      title: "Casablanca Valley Wine",
      price: "$161",
      image:
        "https://images.unsplash.com/photo-1526772662000-3f88f10405ff",
    },
    {
      title: "Everest Base Camp",
      price: "$184",
      image:
        "https://images.unsplash.com/photo-1509644851067-c418f41fe9b7",
    },
    {
      title: "Cusco & Salkantay Trek",
      price: "$161",
      image:
        "https://images.unsplash.com/photo-1526779259212-6b0fd9b41b42",
    },
    {
      title: "Uluru and Kings Canyon",
      price: "$143",
      image:
        "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee",
    },
  ];

  return (
    <section className="tours-section">
      <h2>New and Most Popular Tours</h2>

      <div className="tours-grid">
        {tours.map((tour, index) => (
          <div key={index} className="tour-card">
            <img src={tour.image} alt={tour.title} />
            <div className="tour-overlay">
              <span className="price">From {tour.price}</span>
              <h3>{tour.title}</h3>
              <button>More Information</button>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Tours;
