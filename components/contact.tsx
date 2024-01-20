import { ContactForm } from "./contact-form";
import Socials from "./socials";

export default function Contact() {
  return (
    <section id="contact" className="pt-4 text-center lg:text-left">
      <h2 className="relative top-8 px-36 md:top-10">Lets Talk!</h2>
      <div className="flex flex-col justify-between gap-44 bg-custombg2 px-16 py-20 md:px-36 lg:flex-row">
        <div className="flex flex-1 flex-col justify-between gap-12">
          <div className="">
            <p>
              Whether you're on a personal quest for mindful living or a fellow
              psychologist with a shared passion for self-development, we're
              eager to connect with you.
            </p>
            <br />
            <p>
              At Clueless, we believe in the power of community, collaboration,
              and growth.
            </p>
          </div>

          <div className="flex flex-col justify-between gap-6">
            <div id="email">
              <h3>Email</h3>
              <span className="font-bold">
                <a href="mailto:support@clueless.com">support@clueless.com</a>
              </span>
            </div>

            <Socials />
          </div>
        </div>

        <ContactForm className="flex-1" />
      </div>
    </section>
  );
}
