import React from "react";
import "./contact.css";

const Contact = () => {
  return (
    <section className="contact section" id="contact">
      <h2 className="section__title">Get in touch</h2>
      <span className="section__subtitle">Contact Me</span>

      <div className="contact__container container grid">
        <div className="contact__content">
          <h3 className="contact__title">Talk to me</h3>

          <div className="contact__info">
            <div className="contact__card">
              <i className="bx bx-mail-send contact__card-icon"></i>

              <h3 className="contact__card-title">Email</h3>
              <span className="contact__card-data">gurungnavin@icloud.com</span>

              <a
                href="mailto:examplemail@gmail.com.com"
                className="contact__button"
              >
                {" "}
                Write me{" "}
                <i className="bx bx-right-arrow-alt contact__button-icon"></i>
              </a>
            </div>

            <div className="contact__card">
              <svg
               width="36"
               height="36"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 32 32"
                id="line"
              >
                <g data-name="line chat chatting message">
                  <path d="M30 13.14a1 1 0 0 0-1 1 8.66 8.66 0 0 1-.18 1.67 1.36 1.36 0 0 0 0 .2 7.1 7.1 0 0 1-.82 2.25 10.77 10.77 0 0 1-2.79 3.33 43.64 43.64 0 0 1-8.76 5.85l.17-.85A1.76 1.76 0 0 0 15 24.48c-6.44-.57-11.29-5-11.29-10.34C3.69 8.4 9.37 3.72 16.34 3.72a13.3 13.3 0 0 1 10.85 5.06 1 1 0 0 0 1.62-1.18 15.32 15.32 0 0 0-12.47-5.88c-8.08 0-14.65 5.57-14.65 12.42 0 6.3 5.52 11.56 12.88 12.31L14 29.08a1 1 0 0 0 .37 1 1 1 0 0 0 .61.21 1 1 0 0 0 .45-.11 49.34 49.34 0 0 0 11-7.06 12.55 12.55 0 0 0 3.24-3.89 8.75 8.75 0 0 0 1.1-3.08s0-.08 0-.12a10.64 10.64 0 0 0 .23-1.89 1 1 0 0 0-1-1Z"></path>
                  <path d="M7 11a1 1 0 0 0-1 1v5a1 1 0 0 0 1 1h3a1 1 0 0 0 0-2H8v-4a1 1 0 0 0-1-1zm5 1v5a1 1 0 0 0 2 0v-5a1 1 0 0 0-2 0zm7 0v2.15l-2.22-2.77a1 1 0 0 0-1.11-.32A1 1 0 0 0 15 12v5a1 1 0 0 0 2 0v-2.15l2.22 2.78A1 1 0 0 0 20 18a1 1 0 0 0 .33-.06A1 1 0 0 0 21 17v-5a1 1 0 0 0-2 0zm7 1a1 1 0 0 0 0-2h-3a1 1 0 0 0-1 1v5a1 1 0 0 0 1 1h3a1 1 0 0 0 0-2h-2v-.5h2a1 1 0 0 0 0-2h-2V13z"></path>
                </g>
              </svg>

              <h3 className="contact__card-title">Line</h3>
              <span className="contact__card-data">07043770567</span>

              <a
                href="https://line.me/ti/p/8sGfXJJvXE"
                className="contact__button"
              >
                {" "}
                Click me{" "}
                <i className="bx bx-right-arrow-alt contact__button-icon"></i>
              </a>
            </div>

            <div className="contact__card">
              <i className="bx bxl-messenger contact__card-icon"></i>

              <h3 className="contact__card-title">Messenger</h3>
              <span className="contact__card-data">/navingurung</span>

              <a href="https://m.me/crypticalcoder" className="contact__button">
                {" "}
                Write me{" "}
                <i className="bx bx-right-arrow-alt contact__button-icon"></i>
              </a>
            </div>
          </div>
        </div>
        <div className="contact__content">
          <h3 className="contact__title">write me your message</h3>

          <form className="contact__form">
            <div className="contact__form-div">
              <label htmlFor="" className="contact__form-tag">
                Name
              </label>
              <input
                type="text"
                name="name"
                className="contact__form-input"
                placeholder="お名前"
              />
            </div>

            <div className="contact__form-div">
              <label htmlFor="" className="contact__form-tag">
                Mail
              </label>
              <input
                type="email"
                name="email"
                className="contact__form-input"
                placeholder="メールアドレス"
              />
            </div>

            <div className="contact__form-div contact__form-area">
              <label htmlFor="" className="contact__form-tag">
                Messages
              </label>
              <textarea
                name="messages"
                cols="30"
                rows="10"
                className="contact__form-input"
                placeholder="お問い合わせ内容"
              ></textarea>
            </div>
            <button className="button button--flex">
              内容を送信する
              <svg
                class="button__icon"
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
              >
                <path
                  d="M14.2199 21.9352C13.0399 21.9352 11.3699 21.1052 10.0499 17.1352L9.32988 14.9752L7.16988 14.2552C3.20988 12.9352 2.37988 11.2652 2.37988 10.0852C2.37988 8.91525 3.20988 7.23525 7.16988 5.90525L15.6599 3.07525C17.7799 2.36525 19.5499 2.57525 20.6399 3.65525C21.7299 4.73525 21.9399 6.51525 21.2299 8.63525L18.3999 17.1252C17.0699 21.1052 15.3999 21.9352 14.2199 21.9352ZM7.63988 7.33525C4.85988 8.26525 3.86988 9.36525 3.86988 10.0852C3.86988 10.8052 4.85988 11.9052 7.63988 12.8252L10.1599 13.6652C10.3799 13.7352 10.5599 13.9152 10.6299 14.1352L11.4699 16.6552C12.3899 19.4352 13.4999 20.4252 14.2199 20.4252C14.9399 20.4252 16.0399 19.4352 16.9699 16.6552L19.7999 8.16525C20.3099 6.62525 20.2199 5.36525 19.5699 4.71525C18.9199 4.06525 17.6599 3.98525 16.1299 4.49525L7.63988 7.33525Z"
                  fill="var(--container-color)"
                ></path>
                <path
                  d="M10.11 14.7052C9.92005 14.7052 9.73005 14.6352 9.58005 14.4852C9.29005 14.1952 9.29005 13.7152 9.58005 13.4252L13.16 9.83518C13.45 9.54518 13.93 9.54518 14.22 9.83518C14.51 10.1252 14.51 10.6052 14.22 10.8952L10.64 14.4852C10.5 14.6352 10.3 14.7052 10.11 14.7052Z"
                  fill="var(--container-color)"
                ></path>
              </svg>
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
