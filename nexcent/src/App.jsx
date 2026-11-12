
import React from "react";

const clients = ["◇◇", "◈", "▣", "♧", "◎", "∞"];

const community = [
  {
    icon: "bi-people",
    title: "Membership Organisations",
    text: "Our membership management software provides full automation of membership renewals and payments."
  },
  {
    icon: "bi-buildings",
    title: "National Associations",
    text: "Manage your association, engage members and grow your community."
  },
  {
    icon: "bi-people-fill",
    title: "Clubs And Groups",
    text: "Bring people together and make it easier to manage your group."
  }
];

const articles = [
  {
    image: "https://images.unsplash.com/photo-1556761175-b413da4baf72?w=700",
    title: "Creating Streamlined Safeguarding Processes with OneRen"
  },
  {
    image: "https://images.unsplash.com/photo-1497366754035-f200968a6e72?w=700",
    title: "What are your safeguarding responsibilities?"
  },
  {
    image: "https://images.unsplash.com/photo-1497366811353-6870744d04b2?w=700",
    title: "Revamping the Membership Model"
  }
];

function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-white">
      <div className="container">

        <a className="navbar-brand fw-bold" href="#">
          <i className="bi bi-grid-3x3-gap-fill text-success"></i>
          Nexcent
        </a>

        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbar"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbar">

          <ul className="navbar-nav mx-auto">
            <li className="nav-item">
              <a className="nav-link" href="#home">Home</a>
            </li>

            <li className="nav-item">
              <a className="nav-link" href="#features">Features</a>
            </li>

            <li className="nav-item">
              <a className="nav-link" href="#community">Community</a>
            </li>

            <li className="nav-item">
              <a className="nav-link" href="#blog">Blog</a>
            </li>

            <li className="nav-item">
              <a className="nav-link" href="#pricing">Pricing</a>
            </li>
          </ul>

          <a href="#register" className="btn btn-success">
            Register Now <i className="bi bi-arrow-right"></i>
          </a>

        </div>
      </div>
    </nav>
  );
}

function Hero() {
  return (
    <section className="hero" id="home">
      <div className="container">
        <div className="row align-items-center">

          <div className="col-lg-6">
            <h1>
              Lessons and insights
              <span> from 8 years</span>
            </h1>

            <p>
              Where to grow your business as a photographer:
              site or social media?
            </p>

            <button className="btn btn-success">
              Register
            </button>
          </div>

          <div className="col-lg-6 text-center">
            <img
              src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=700"
              className="img-fluid hero-img"
              alt="Dashboard illustration"
            />
          </div>

        </div>

        <div className="text-center mt-4">
          <i className="bi bi-circle-fill text-success mx-1"></i>
          <i className="bi bi-circle-fill text-success mx-1 opacity-50"></i>
          <i className="bi bi-circle-fill text-success mx-1 opacity-50"></i>
        </div>
      </div>
    </section>
  );
}

function Clients() {
  return (
    <section className="container text-center section">
      <h2>Our Clients</h2>

      <p className="text-muted">
        We have been working with some Fortune 500+ clients
      </p>

      <div className="row mt-5">

        {clients.map((client, index) => (
          <div className="col-4 col-md-2 mb-3" key={index}>
            <h2 className="client-logo">{client}</h2>
          </div>
        ))}

      </div>
    </section>
  );
}

function Community() {
  return (
    <section className="container section" id="community">

      <div className="text-center">
        <h2>Manage your entire community</h2>
        <h2>in a single system</h2>

        <p className="text-muted">
          Who is Nexcent suitable for?
        </p>
      </div>

      <div className="row mt-4">

        {community.map((item, index) => (
          <div className="col-md-4 mb-4" key={index}>

            <div className="community-card text-center">

              <i className={`bi ${item.icon} community-icon`}></i>

              <h3>{item.title}</h3>

              <p>{item.text}</p>

            </div>

          </div>
        ))}

      </div>
    </section>
  );
}

function Feature() {
  return (
    <section className="container section" id="features">
      <div className="row align-items-center">

        <div className="col-lg-5 text-center">
          <img
            src="https://images.unsplash.com/photo-1551650975-87deedd944c3?w=600"
            className="img-fluid feature-img"
            alt="Mobile application"
          />
        </div>

        <div className="col-lg-7">

          <h2>
            The unseen of spending three years at Pixelgrade
          </h2>

          <p className="text-muted mt-3">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            Sed sit amet justo ipsum. Sed accumsan quam vitae est
            varius fringilla. Pellentesque placerat vestibulum lorem
            sed porta.
          </p>

          <button className="btn btn-success">
            Learn More
          </button>

        </div>

      </div>
    </section>
  );
}

function Statistics() {
  const stats = [
    ["2,245,341", "Members", "bi-people"],
    ["46,328", "Clubs", "bi-diagram-3"],
    ["828,867", "Event Bookings", "bi-calendar-check"],
    ["1,926,436", "Payments", "bi-credit-card"]
  ];

  return (
    <section className="statistics section">
      <div className="container">

        <div className="row align-items-center">

          <div className="col-lg-5">
            <h2>
              Helping a local
              <span> business reinvent itself</span>
            </h2>

            <p>We reached here with our hard work and dedication.</p>
          </div>

          <div className="col-lg-7">
            <div className="row">

              {stats.map((item, index) => (
                <div className="col-6 mb-4" key={index}>

                  <div className="d-flex align-items-center gap-3">

                    <i className={`bi ${item[2]} stat-icon`}></i>

                    <div>
                      <h4>{item[0]}</h4>
                      <p>{item[1]}</p>
                    </div>

                  </div>

                </div>
              ))}

            </div>
          </div>

        </div>
      </div>
    </section>
  );
}

function SecondFeature() {
  return (
    <section className="container section" id="pricing">
      <div className="row align-items-center">

        <div className="col-lg-5 text-center">
          <img
            src="https://images.unsplash.com/photo-1512428559087-560fa5ceab42?w=600"
            className="img-fluid feature-img"
            alt="Mobile design"
          />
        </div>

        <div className="col-lg-7">

          <h2>How to design your site footer like we did</h2>

          <p className="text-muted mt-3">
            Donec a eros justo. Fusce egestas tristique ultrices.
            Nam tempor, augue nec tincidunt molestie, massa nunc
            varius arcu, at scelerisque elit erat a magna.
          </p>

          <button className="btn btn-success">
            Learn More
          </button>

        </div>

      </div>
    </section>
  );
}

function Customer() {
  return (
    <section className="customer section">
      <div className="container">

        <div className="row align-items-center">

          <div className="col-lg-4 text-center">
            <i className="bi bi-image customer-icon"></i>
          </div>

          <div className="col-lg-8">

            <p>
              Maecenas dignissim justo eget nulla rutrum molestie.
              Maecenas lobortis sem dui, vel rutrum risus tincidunt
              ullamcorper.
            </p>

            <h5 className="text-success">Tim Smith</h5>

            <p className="text-muted">
              British Dragon Boat Racing Association
            </p>

            <div className="d-flex justify-content-between flex-wrap">

              <div className="d-flex gap-3">
                {clients.map((client, index) => (
                  <h4 key={index}>{client}</h4>
                ))}
              </div>

              <a href="#blog" className="text-success fw-bold">
                Meet all customers →
              </a>

            </div>

          </div>
        </div>
      </div>
    </section>
  );
}

function Blog() {
  return (
    <section className="container section" id="blog">

      <div className="text-center">
        <h2>Caring is the new marketing</h2>

        <p className="text-muted">
          The Nexcent blog is the best place to read about
          the latest membership insights, trends and more.
        </p>
      </div>

      <div className="row mt-4">

        {articles.map((article, index) => (
          <div className="col-md-4 mb-4" key={index}>

            <div className="blog-card">

              <img src={article.image} alt={article.title} />

              <div className="blog-content">

                <h5>{article.title}</h5>

                <a href="#register">
                  Read More →
                </a>

              </div>

            </div>

          </div>
        ))}

      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="footer" id="register">

      <div className="container text-center">

        <h1>
          Pellentesque suscipit
          <br />
          fringilla libero eu.
        </h1>

        <button className="btn btn-success mt-3">
          Get a Demo →
        </button>

        <hr className="mt-5" />

        <div className="d-flex justify-content-between align-items-center flex-wrap">

          <h3>Nexcent</h3>

          <p>Copyright © 2024 Nexcent. All rights reserved.</p>

          <div className="d-flex gap-3">
            <i className="bi bi-instagram"></i>
            <i className="bi bi-twitter-x"></i>
            <i className="bi bi-youtube"></i>
          </div>

        </div>

      </div>
    </footer>
  );
}

function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <Clients />
      <Community />
      <Feature />
      <Statistics />
      <SecondFeature />
      <Customer />
      <Blog />
      <Footer />
    </>
  );
}

export default App;
