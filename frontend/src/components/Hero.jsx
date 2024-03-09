import React from "react";

const Hero = () => {
  return (
    <div>
      <div className=" mb-5" style={{maxWidth : "82vw"}}>
        <div className="row p-4 pb-0 pe-lg-0 pt-lg-5 align-items-center rounded-3 border shadow-lg">
          <div className="col-lg-7 p-3 p-lg-5 pt-lg-3">
            <h1 className="display-4 fw-bold lh-1 text-body-emphasis">
              Connect with Tutors for Inspirational Language Journeys!
            </h1>
            <p className="lead">
              Welcome to a transformative language learning experience! Our
              platform is a vibrant hub where students and dedicated tutors come
              together to embark on a journey of linguistic discovery. Whether
              you're craving fluency in a new language or looking to refine your
              existing skills, we provide a seamless connection between eager
              learners and experienced tutors.
            </p>
            <p className="lead">
              Immerse yourself in a supportive community that fosters a love for
              languages. Our platform goes beyond traditional learning, offering
              personalized lessons tailored to your unique goals and pace. With
              a diverse pool of passionate tutors, each session becomes an
              opportunity to not just learn a language but to live it.
            </p>
            <div className="d-grid gap-2 d-md-flex justify-content-md-start mb-4 mb-lg-3">
              <button
                type="button"
                className="btn btn-success btn-lg px-4 me-md-2 fw-bold"
                fdprocessedid="h9lnt7"
              >
                Get Started
              </button>
            </div>
          </div>
          <div className="col-lg-4 offset-lg-1 p-0 overflow-hidden shadow-lg">
            <img
              className="rounded-lg-3"
              src="https://cdn.dribbble.com/users/1878035/screenshots/14355910/media/19863b4c2fa0328c465d730228abfe95.png?resize=400x300&vertical=center"
              alt=""
              width="500"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
