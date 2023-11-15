import Image from "next/image";
//image srcs
import mavenlogo from "./content/images/content-images/logo-maven.svg";
import bannersectionimg from "./content/images/content-images/banner-section-background.jpg";
import youtubeicon from "./content/images/style-images/icon-youtube.svg";
import instaicon from "./content/images/style-images/icon-insta.svg";
import metaicon from "./content/images/style-images/icon-meta.svg";
import appstorebtndesk from "./content/images/style-images/btn-app-store.svg";
import appstorebtnmob from "./content/images/style-images/btn-app-store-mobile.svg";
import playstorebtn from "./content/images/style-images/btn-play-store.svg";
import playstorebtnmob from "./content/images/style-images/btn-play-store-mobile.svg";
import btnplay from "./content/images/style-images/btn-play.svg";
import usercount from "./content/images/content-images/user-count.svg";
import bannercouples from "./content/images/content-images/banner-couples-holding-hands.png";
import bannercouplesmob from "./content/images/content-images/banner-couples-holding-hands-mobile.png";
import connectionreqicon from "./content/images/style-images/icon-connection-requests.svg";
import metaicon2 from "./content/images/style-images/icon-meta2.svg";
import expandconnecticon from "./content/images/style-images/icon-expand-connection.svg";
import connectionreq from "./content/images/style-images/icon-connection-requests.svg";
import bannerappinterface from "./content/images/content-images/banner-maven-app-interface.png";
import bannerappinterfacemob from "./content/images/content-images/banner-maven-app-interface-mobile.png";
import bannermavenmatches from "./content/images/content-images/banner-maven-matches.png";
import bannermavenmatchesmob from "./content/images/content-images/banner-maven-matches-mobile.png";
import bannerlucy from "./content/images/content-images/banner-lucy.png";
import bannerlucymob from "./content/images/content-images/banner-lucy-mobile.png";
import quoteicon from "./content/images/style-images/icon-quote.svg";
import verifiedprofiles from "./content/images/content-images/banner-verified-profiles.png";
import verifiedprofilesmob from "./content/images/content-images/banner-verified-profiles-mobile.png";
// import mavenlogo from "./content/images/content-images/logo-maven.svg";
// import mavenlogo from "./content/images/content-images/logo-maven.svg";
// import mavenlogo from "./content/images/content-images/logo-maven.svg";

function Home() {
  return (
    <div className="landing-page">
      {/* Header section starts */}
      <header>
        <nav
          className="navbar bg-transparent position-absolute w-100 z-index-1"
          data-bs-spy="scroll"
          data-bs-target="#navbarNav"
        >
          <div className="container">
            <div className="row w-100 position-relative mx-auto">
              <div className="col-12 col-md-3 p-0">
                <a className="navbar-brand" href="#home">
                  <img
                    src={mavenlogo.src}
                    alt="Maven Logo"
                    width={59}
                    height={59}
                  />
                </a>
              </div>
              <div className="col-12 col-md-9 p-0 d-none d-lg-block">
                <ul className="nav align-items-center justify-content-end h-100">
                  <li className="nav-item">
                    <a className="nav-link" href="#home">
                      Home
                    </a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link" href="#how">
                      How it works
                    </a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link" href="#features">
                      Features
                    </a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link" href="#testimonials">
                      Testimonials
                    </a>
                  </li>
                  <li className="nav-item purple-border-grad border-rounded-4">
                    <a className="nav-link" href="#contact">
                      Contact Us
                    </a>
                  </li>
                </ul>
              </div>
              <button
                className="navbar-toggler d-block d-lg-none"
                type="button"
                data-toggle="collapse"
                data-target="#navbarNav"
                aria-controls="navbarNav"
                aria-expanded="false"
                aria-label="Toggle navigation"
              >
                <span className="navbar-toggler-icon" />
              </button>
              <div className="collapse navbar-collapse" id="navbarNav">
                <ul className="navbar-nav ml-auto h-100">
                  <li className="nav-item">
                    <a className="nav-link" href="#home">
                      Home
                    </a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link" href="#how">
                      How it works
                    </a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link" href="#features">
                      Features
                    </a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link" href="#testimonials">
                      Testimonials
                    </a>
                  </li>
                  <li className="nav-item btn-contact">
                    <a className="nav-link" href="#contact">
                      Contact Us
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </nav>
      </header>
      {/* Header section ends */}
      <main>
        {/* Banner slider section */}
        <section
          className="banner-section bg-purple-dark-grad2 position-relative"
          style={{ marginBottom: "100px" }}
          id="home"
        >
          <div className="banner-background-image position-absolute w-100 d-none d-lg-block">
            <picture>
              <source srcSet={bannersectionimg.src} />
              <img
                src={bannersectionimg.src}
                alt="Banner section background image"
                width={1920}
                height={1068}
              />
            </picture>
          </div>
          <div className="floating-social-icons">
            <a href="#" className="social-icon">
              <img src={youtubeicon.src} alt="Google" width={45} height={45} />
            </a>
            <a href="#" className="social-icon">
              <img src={instaicon.src} alt="Instagram" width={45} height={45} />
            </a>
            <a href="#" className="social-icon">
              <img src={metaicon.src} alt="Meta" width={45} height={45} />
            </a>
          </div>
          <div className="container banner-content">
            <div className="row">
              <div className="col-md-6">
                <div className="content">
                  <h1>Embark on a Journey of Love</h1>
                  <p>
                    Find Your Maven, Find Your Match: Unveil Love's Potential
                  </p>
                  <div className="btn-group d-flex">
                    <div className="btn-app-store">
                      <picture>
                        <source
                          media="(min-width:992px)"
                          srcSet={appstorebtndesk.src}
                        />
                        <source media={true} srcSet={appstorebtnmob.src} />
                        <img
                          src={appstorebtndesk.src}
                          alt="App store button"
                          width={133}
                          height={51}
                        />
                      </picture>
                    </div>
                    <div className="btn-play-store">
                      <picture>
                        <source
                          media="(min-width:992px)"
                          srcSet={playstorebtn.src}
                        />
                        <source media="true" srcSet={playstorebtnmob.src} />
                        <img
                          src={playstorebtn.src}
                          alt="Play store button"
                          width={133}
                          height={51}
                        />
                      </picture>
                    </div>
                  </div>
                </div>
                <div className="intro-video media align-items-center">
                  <div className="img-block">
                    <picture>
                      <source srcSet={btnplay.src} />
                      <img
                        src={btnplay.src}
                        alt="Watch Intro Video"
                        width={100}
                        height={100}
                      />
                    </picture>
                  </div>
                  <div className="media-body">
                    <span>Watch</span>
                    <span>Intro Video</span>
                  </div>
                </div>
              </div>
              <div className="col-md-6">
                <div className="user-count d-flex justify-content-end">
                  <picture>
                    <source srcSet={usercount.src} />
                    <img
                      src={usercount.src}
                      alt="Maven user count"
                      width={320}
                      height={89}
                    />
                  </picture>
                </div>
                <div className="banner-image position-absolute">
                  <picture>
                    <source
                      media="(min-width:992px)"
                      srcSet={bannercouples.src}
                    />
                    <source srcSet={bannercouplesmob.src} />
                    <img
                      src={bannercouples.src}
                      alt="Banner Couples holding hands"
                      width={778}
                      height={519}
                    />
                  </picture>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* How It Works section */}
        <section className="how-it-works-section bg-purple-dark-grad" id="how">
          <div className="container">
            <div className="row">
              <div className="col-md-6 order-md-2">
                <h2 className="text-center text-lg-left">How It Works</h2>
                <div className="image-text-block d-none d-md-block">
                  <div className="row">
                    <div className="col">
                      <div className="media bg-grad-blur">
                        <div className="img-block">
                          <picture>
                            <source srcSet={expandconnecticon.src} />
                            <img
                              src={expandconnecticon.src}
                              alt="connection requests"
                              width={98}
                              height={98}
                            />
                          </picture>
                        </div>
                        <div className="media-body">
                          <h5>Send or accept Connection Requests</h5>
                          <p>
                            Send or accept connection requests to/from friends
                            or act as a mentor
                          </p>
                        </div>
                      </div>
                    </div>
                    <div className="col">
                      <div className="media bg-grad-blur mb-4">
                        <div className="img-block">
                          <picture>
                            <source srcSet={metaicon2.src} />
                            <img
                              src={metaicon2.src}
                              alt="Meta connection"
                              width={98}
                              height={98}
                            />
                          </picture>
                        </div>
                        <div className="media-body">
                          <h5>Connect: Meta, Insta and Snapchat</h5>
                          <p>
                            Link your Meta, Instagram or Snapchat account to
                            connect with friends
                          </p>
                        </div>
                      </div>
                      <div className="media bg-grad-blur">
                        <div className="img-block">
                          <picture>
                            <source srcSet={expandconnecticon.src} />
                            <img
                              src={expandconnecticon.src}
                              alt="Expand connection"
                              width={98}
                              height={98}
                            />
                          </picture>
                        </div>
                        <div className="media-body">
                          <h5>Expand, Explore, Thrive and Connect</h5>
                          <p>
                            Discover mutual interests and expand your social
                            circle within the app
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div
                  id="how-it-works-carousel"
                  className="how-it-works-carousel multicarousel carousel slide carousel-fade d-block d-md-none"
                  data-ride="carousel"
                >
                  <div className="carousel-inner image-text-block">
                    <div className="carousel-item active">
                      <div className="media bg-grad-blur">
                        <div className="img-block">
                          <picture>
                            <source srcSet={connectionreq.src} />
                            <img
                              src={connectionreq.src}
                              alt="connection requests"
                              width={98}
                              height={98}
                            />
                          </picture>
                        </div>
                        <div className="media-body">
                          <h5>Send or accept Connection Requests</h5>
                          <p>
                            Send or accept connection requests to/from friends
                            or act as a mentor
                          </p>
                        </div>
                      </div>
                    </div>
                    <div className="carousel-item">
                      <div className="media bg-grad-blur">
                        <div className="img-block">
                          <picture>
                            <source srcSet={metaicon2} />
                            <img
                              src={metaicon2}
                              alt="Meta connection"
                              width={98}
                              height={98}
                            />
                          </picture>
                        </div>
                        <div className="media-body">
                          <h5>Connect: Meta, Insta and Snapchat</h5>
                          <p>
                            Link your Meta, Instagram or Snapchat account to
                            connect with friends
                          </p>
                        </div>
                      </div>
                    </div>
                    <div className="carousel-item">
                      <div className="media bg-grad-blur">
                        <div className="img-block">
                          <picture>
                            <source srcSet={connectionreq.src} />
                            <img
                              src={connectionreq.src}
                              alt="Expand connection"
                              width={98}
                              height={98}
                            />
                          </picture>
                        </div>
                        <div className="media-body">
                          <h5>Expand, Explore, Thrive and Connect</h5>
                          <p>
                            Discover mutual interests and expand your social
                            circle within the app
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="carousel-control-wrapper">
                    <ol className="carousel-indicators">
                      <li
                        data-target="#how-it-works-carousel"
                        data-slide-to={0}
                        className="active"
                      />
                      <li
                        data-target="#how-it-works-carousel"
                        data-slide-to={1}
                      />
                      <li
                        data-target="#how-it-works-carousel"
                        data-slide-to={2}
                      />
                    </ol>
                  </div>
                </div>
              </div>
              <div className="col-md-6 order-md-1">
                <picture>
                  <source
                    media="(min-width:992px)"
                    srcSet={bannerappinterface.src}
                  />
                  <source srcSet={bannerappinterface.src} />
                  <img
                    src={bannerappinterface.src}
                    alt="Maven app interface"
                    width={591}
                    height={719}
                  />
                </picture>
              </div>
            </div>
          </div>
        </section>
        {/* Maven Approved Matches section */}
        <section
          className="approved-matches-section bg-purple-dark-grad2"
          id="matches"
        >
          <div className="container">
            <div className="section-heading text-center">
              <h2>Maven Approved Matches</h2>
              <p>
                The devastating and wide-ranging impact of ALS on people's lives
                is often not well known by the public.
              </p>
            </div>
            <div className="banner-image">
              <picture>
                <source
                  media="(min-width:992px)"
                  srcSet={bannermavenmatches.src}
                />
                <source srcSet={bannermavenmatchesmob.src} />
                <img
                  src={bannermavenmatches.src}
                  alt=""
                  width={1200}
                  height={496}
                />
              </picture>
            </div>
          </div>
        </section>
        {/* Verified Profiles section */}
        <section className="verified-profiles-section bg-purple-dark-grad">
          <div className="container position-relative">
            <div className="section-heading text-md-left">
              <h2>Only Real Verified Profiles Are Allowed To Join</h2>
              <p className="d-md-none">
                Unlock the power of trusted connections as our Mavens create
                meaningful matches, connecting you with their trusted friends
                for exciting new connections
              </p>
            </div>
            <div className="note-text">
              <p>
                "Join with confidence - we prfioritize safety and authenticity
                through strict profile verification."
              </p>
            </div>
            <div className="banner-image text-center">
              <picture>
                <source
                  media="(min-width:992px)"
                  srcSet={verifiedprofiles.src}
                />
                <source srcSet={verifiedprofilesmob.src} />
                <img
                  src={verifiedprofiles.src}
                  alt="Verified profiles banner"
                  width={1114}
                  height={456}
                />
              </picture>
            </div>
            <div className="box-layout bg-grey-dark" id="more">
              <div className="box-layout-heading text-center">
                <h3>A Note from Our Team</h3>
                <p>
                  "Team Insights: Discover Notes from Our Creators &amp;
                  Visionaries."
                </p>
              </div>
              <div className="row">
                <div className="col-4 d-flex justify-content-center banner-team-member">
                  <picture>
                    <source media="(min-width:992px)" srcSet={bannerlucy.src} />
                    <source srcSet={bannerlucymob.src} />
                    <img
                      src={bannerlucy.src}
                      alt="Lucy Co Founder"
                      width={278}
                      height={374}
                    />
                  </picture>
                </div>
                <div className="col-8 d-md-flex justify-content-between">
                  <div className="team-note">
                    <picture>
                      <source
                        media="(min-width:992px)"
                        srcSet={quoteicon.src}
                      />
                      <source srcSet={quoteicon.src} />
                      <img
                        src={quoteicon.src}
                        alt="Quote icon"
                        width={92}
                        height={70}
                      />
                    </picture>
                    <p className="font-weight-bold">Lucy Fernandes</p>
                    <p className="text-grey2">Co Founder</p>
                    <p>
                      Lorem ipsum dolor sit amet consectetur. Non magna semper
                      eu orci. Egestas lectus egestas tortor quisque eget ac
                      diam commodo. Ut diam mi ipsum ut volutpat iaculis dolor
                      diam.
                    </p>
                  </div>
                  <div className="team-info d-flex flex-md-column">
                    <div className="team-info-item d-flex flex-column">
                      <h4>15K+</h4>
                      <p>Dates and matches everyday</p>
                    </div>
                    <div className="team-info-item flex-column">
                      <h4>1458</h4>
                      <p>New member sign up everyday</p>
                    </div>
                    <div className="team-info-item flex-column">
                      <h4>30K+</h4>
                      <p>Members felis pulvinar cras</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* Footer section */}
        <footer className="bg-purple-dark2 py-5">
          <div className="container">
            <div className="accordion d-md-none" id="footerAccordion">
              <div className="card">
                <div className="card-header" id="servicesHeading">
                  <h5 className="mb-0">
                    <button
                      className="btn btn-link"
                      data-toggle="collapse"
                      data-target="#servicesCollapse"
                      aria-expanded="true"
                      aria-controls="servicesCollapse"
                    >
                      Services
                    </button>
                  </h5>
                </div>
                <div
                  id="servicesCollapse"
                  className="collapse show"
                  aria-labelledby="servicesHeading"
                  data-parent="#footerAccordion"
                >
                  <div className="card-body">
                    <ul>
                      <li>
                        <a href="#home">Home</a>
                      </li>
                      <li>
                        <a href="#how">How it works</a>
                      </li>
                      <li>
                        <a href="#matches">Maven approved matches</a>
                      </li>
                      <li>
                        <a href="#more">Note from team</a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
              <div className="card">
                <div className="card-header" id="quickLinksHeading">
                  <h5 className="mb-0">
                    <button
                      className="btn btn-link collapsed"
                      data-toggle="collapse"
                      data-target="#quickLinksCollapse"
                      aria-expanded="false"
                      aria-controls="quickLinksCollapse"
                    >
                      Quick Links
                    </button>
                  </h5>
                </div>
                <div
                  id="quickLinksCollapse"
                  className="collapse"
                  aria-labelledby="quickLinksHeading"
                  data-parent="#footerAccordion"
                >
                  <div className="card-body">
                    <ul>
                      <li>
                        <a href="#">FAQ</a>
                      </li>
                      <li>
                        <a href="#">Terms and conditions</a>
                      </li>
                      <li>
                        <a href="#">Privacy policy</a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
              <div className="card">
                <div className="card-header" id="contactUsHeading">
                  <h5 className="mb-0">
                    <button
                      className="btn btn-link collapsed"
                      data-toggle="collapse"
                      data-target="#contactUsCollapse"
                      aria-expanded="false"
                      aria-controls="contactUsCollapse"
                    >
                      Contact Us
                    </button>
                  </h5>
                </div>
                <div
                  id="contactUsCollapse"
                  className="collapse"
                  aria-labelledby="contactUsHeading"
                  data-parent="#footerAccordion"
                >
                  <div className="card-body">
                    <ul>
                      <li>
                        <a href="tel:(555) 555-1234">(555) 555-1234</a>
                      </li>
                      <li>
                        <a href="mailto:mavenmatch@gmail.com">
                          mavenmatch@gmail.com
                        </a>
                      </li>
                      <li>4016 Doane Street, Fremont CA 94538</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col-md-3">
                <a className="logo-image" href="#home">
                  <img
                    src={mavenlogo.src}
                    alt="Maven Logo"
                    width={56}
                    height={56}
                  />
                </a>
                <p className="text-white">
                  Experience meaningful connections with a touch of trusted
                  matchmaking.
                </p>
              </div>
              <div className="col-md-3 d-none d-md-block">
                <h4>Services</h4>
                <ul>
                  <li>
                    <a href="#home">Home</a>
                  </li>
                  <li>
                    <a href="#how">How it works</a>
                  </li>
                  <li>
                    <a href="#matches">Maven approved matches</a>
                  </li>
                  <li>
                    <a href="#more">Note from team</a>
                  </li>
                </ul>
              </div>
              <div className="col-md-3 d-none d-md-block">
                <h4>Quick Links</h4>
                <ul>
                  <li>
                    <a href="#">FAQ</a>
                  </li>
                  <li>
                    <a
                      target="_blank"
                      href="https://twitter.com/"
                      rel="noopener noreferrer"
                    >
                      Terms and conditions
                    </a>
                  </li>
                  <li>
                    <a href="#">Privacy policy</a>
                  </li>
                </ul>
              </div>
              <div className="col-md-3 d-none d-md-block">
                <h4>Contact Us</h4>
                <ul>
                  <li>
                    <a href="tel:(555) 555-1234">(555) 555-1234</a>
                  </li>
                  <li>
                    <a href="mailto:mavenmatch@gmail.com">
                      mavenmatch@gmail.com
                    </a>
                  </li>
                  <li>4016 Doane Street, Fremont CA 94538</li>
                </ul>
              </div>
            </div>
            <div className="footer-social-links">
              <p className="text-white">Follow us</p>
              <img
                loading="lazy"
                src="https://cdn.builder.io/api/v1/image/assets/TEMP/0da364e0-8bbc-4ead-b765-f0ad47ca31d8?apiKey=5151ddbef91541528bdb68746c0a3d02"
                className="img-fluid mt-1"
              />
            </div>
            <hr className="bg-purple mt-3" />
            <div className="footer-copyright text-center text-md-right mt-2">
              <p>© 2023 MAVEN MATCH | ALL RIGHTS RESERVED</p>
            </div>
          </div>
        </footer>
      </main>
    </div>
  );
}

export { Home as default };
