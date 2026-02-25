"use client";

export default function Contact() {
  return (
    <div className="container position-relative">
      <div className="row">
        <div className="col-lg-6">
          <div className="pe-lg-5">
            <h2 className="h5">
              Let’s discuss your software or engineering needs.
            </h2>

            <p className="text-gray mb-0">
              Whether you're building a custom platform, modernizing your cloud
              infrastructure, or looking for specialized Java, .NET, or DevOps
              talent — JoinBits Technologies is ready to support your next step.
              Reach out and let’s explore how we can help accelerate your roadmap.
            </p>
          </div>
        </div>

        <div className="col-lg-6">
          <div className="row mb-60 mb-sm-50">
            {/* Contact Item */}
            <div className="col-sm-6 mb-xs-30 d-flex align-items-stretch">
              <div
                className="alt-features-item border-left mt-0 wow fadeScaleIn"
                data-wow-delay=".3s"
              >
                <div className="alt-features-icon">
                  <svg
                    width={24}
                    height={24}
                    viewBox="0 0 24 24"
                    fill="currentColor"
                  >
                    <path d="M24 21h-24v-18h24v18zm-23-16.477v15.477h22v-15.477l-10.999 10-11.001-10zm21.089-.523h-20.176l10.088 9.171 10.088-9.171z" />
                  </svg>
                </div>

                <h4 className="alt-features-title">Contact</h4>

                <div className="alt-features-descr clearlinks">
                  <div>
                    <a href="mailto:info@joinbitstech.com">
                      info@joinbitstech.com
                    </a>
                  </div>
                  <div>
                    <a href="tel:+18130000000">
                      +1 (813) 000-0000
                    </a>
                  </div>
                </div>
              </div>
            </div>

            {/* Location */}
            <div className="col-sm-6 d-flex align-items-stretch">
              <div
                className="alt-features-item border-left mt-0 wow fadeScaleIn"
                data-wow-delay=".5s"
              >
                <div className="alt-features-icon">
                  <svg
                    width={24}
                    height={24}
                    viewBox="0 0 24 24"
                    fill="currentColor"
                  >
                    <path d="M12 10c-1.104 0-2-.896-2-2s.896-2 2-2 2 .896 2 2-.896 2-2 2m0-5c-1.657 0-3 1.343-3 3s1.343 3 3 3 3-1.343 3-3-1.343-3-3-3m-7 2.602c0-3.517 3.271-6.602 7-6.602s7 3.085 7 6.602c0 3.455-2.563 7.543-7 14.527-4.489-7.073-7-11.072-7-14.527m7-7.602c-4.198 0-8 3.403-8 7.602 0 4.198 3.469 9.21 8 16.398 4.531-7.188 8-12.2 8-16.398 0-4.199-3.801-7.602-8-7.602" />
                  </svg>
                </div>

                <h4 className="alt-features-title">Location</h4>

                <div className="alt-features-descr">
                  United States<br />
                  Serving clients nationwide & remotely
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Contact Form + Map Section */}
      <div className="row wow fadeInUp" data-wow-delay="0.5s">

        <div className="col-md-6 mb-sm-50">
          <form
            onSubmit={(e) => e.preventDefault()}
            className="form contact-form pe-lg-5"
            id="contact_form"
          >
            <div className="row">
              <div className="col-lg-6">
                <div className="form-group">
                  <label htmlFor="name">Full Name</label>
                  <input
                    type="text"
                    name="name"
                    id="name"
                    className="input-lg round form-control"
                    placeholder="Enter your full name"
                    required
                  />
                </div>
              </div>

              <div className="col-lg-6">
                <div className="form-group">
                  <label htmlFor="email">Business Email</label>
                  <input
                    type="email"
                    name="email"
                    id="email"
                    className="input-lg round form-control"
                    placeholder="Enter your email"
                    required
                  />
                </div>
              </div>
            </div>

            <div className="form-group">
              <label htmlFor="message">Project Details</label>
              <textarea
                name="message"
                id="message"
                className="input-lg round form-control"
                style={{ height: 130 }}
                placeholder="Tell us about your software needs or engineering requirements"
                required
              />
            </div>

            <div className="row">
              <div className="col-lg-5">
                <div className="pt-20">
                  <button
                    className="submit_btn btn btn-mod btn-white btn-large btn-round btn-hover-anim"
                    id="submit_btn"
                  >
                    <span>Request Consultation</span>
                  </button>
                </div>
              </div>

              <div className="col-lg-7">
                <div className="form-tip pt-20 pt-sm-0 mt-sm-20">
                  <i className="icon-info size-16" />
                  All fields are required. By submitting this form, you agree to
                  our Terms & Conditions and Privacy Policy.
                </div>
              </div>
            </div>
          </form>
        </div>

        {/* Instead of random Google map, we keep a clean branded info box */}
        <div className="col-md-6 d-flex align-items-stretch">
          <div className="map-boxed d-flex align-items-center justify-content-center text-center p-5 bg-gray-light-1">
            <div>
              <h4>JoinBits Technologies</h4>
              <p className="text-gray">
                Custom Software Development<br />
                Cloud Integration & DevOps<br />
                Java & .NET Engineering Specialists
              </p>
              <p className="text-gray mb-0">
                We work with clients across the United States and globally.
              </p>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
}
