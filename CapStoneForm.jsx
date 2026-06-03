import "./CapStoneform.css";

function CapStoneform() {
  return (
    <main className="page-content">
      <section className="section" aria-labelledby="contact-heading">
        <header className="section-header">
          <h1 id="contact-heading" className="heading">
            Have Questions About Planetary Science?
          </h1>

          <p className="subtext">
            Interested in learning more about space, astronomy, or how planetary
            data is collected and analyzed?
            <br />
            Reach out and we’ll get back to you.
          </p>
        </header>

        <form
          className="form"
          action="#"
          method="post"
          aria-label="Planetary science contact form"
        >
          <div className="form-row">
            <div className="form-group">
              <label htmlFor="name">
                Full Name
                <span className="required" aria-hidden="true">
                  *
                </span>
              </label>

              <input
                id="name"
                name="fullName"
                type="text"
                placeholder="Full name"
                autoComplete="name"
                required
              />
            </div>

            <div className="form-group">
              <label htmlFor="email">
                Email
                <span className="required" aria-hidden="true">
                  *
                </span>
              </label>

              <input
                id="email"
                name="email"
                type="email"
                placeholder="example@example.com"
                autoComplete="email"
                required
              />
            </div>
          </div>

          <div className="form-row">
            <div className="form-group">
              <label htmlFor="phone">
                Phone Number
                <span className="required" aria-hidden="true">
                  *
                </span>
              </label>

              <input
                id="phone"
                name="phone"
                type="tel"
                placeholder="Please enter a valid phone number."
                autoComplete="tel"
                required
              />
            </div>

            <div className="form-group">
              <label htmlFor="message">
                Message
                <span className="required" aria-hidden="true">
                  *
                </span>
              </label>

              <textarea
                id="message"
                name="message"
                placeholder="Enter your message"
                maxLength="100"
                required
              />

              <p className="char-count" aria-live="polite">
                100 characters
              </p>
            </div>
          </div>

          <button className="submit-btn" type="submit">
            <span>Submit</span>
            <span className="arrow" aria-hidden="true">
              ›
            </span>
          </button>
        </form>
      </section>
    </main>
  );
}

export default CapStoneform;
