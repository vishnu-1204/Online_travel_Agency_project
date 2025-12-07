import '../features.css';

function Features() {
  const features = [
    "Memorable Experiences",
    "Ultimate Flexibility",
    "Extended Customization",
    "Customer Satisfaction",
  ];

  return (
    <section className="features">
      {features.map((f, i) => (
        <div key={i} className="feature-box">
          <h3>{f}</h3>
          <p>High quality travel services for luxury travelers.</p>
        </div>
      ))}
    </section>
  );
}

export default Features;
