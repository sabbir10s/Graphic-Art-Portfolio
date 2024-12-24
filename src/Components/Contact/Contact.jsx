import React from "react";
import emailjs from "@emailjs/browser";
import toast, { Toaster } from "react-hot-toast";
import { GrLinkedinOption } from "react-icons/gr";
import { AiOutlineTwitter } from "react-icons/ai";

const Contact = () => {
  const sendEmail = (e) => {
    e.preventDefault();
    const name = e.target.name.value;
    emailjs
      .sendForm(
        "service_hejba76",
        "template_xxcvyor",
        e.target,
        "Eaihc3JItxJDAUTLh"
      )
      .then(
        (result) => {
          if (result.status === 200) {
            e.target.reset();
            toast.success(`Hey, ${name} your email successfully send`);
          }
        },
        (error) => {
          if (error) {
            toast.error(error.text);
          }
        }
      );
  };
  return (
    <>
      <Toaster position="top-center" reverseOrder={false} />
      <div id="contact">
        <div className="grid gap-16 grid-cols-1 lg:grid-cols-2 justify-center items-start">
          <div>
            <h2 className="text-secondary text-4xl">Contact us</h2>
            <p className="text-sm text-secondary-300 pt-2 pb-10">
              We are committed to processing the information in order to contact
              you and talk about your project.
            </p>
            <div className="grid grid-cols-3 border-b border-dashed border-text-success text-secondary-300 pb-5">
              <div className="col-span-1 grid grid-cols-2 gap-5">
                <strong> Address</strong>
                <strong> :</strong>
              </div>
              <p className=" col-span-2">Dhaka, Bangladesh</p>
            </div>
            <div className="grid grid-cols-3 border-b border-dashed border-text-success text-secondary-300 py-5">
              <div className="col-span-1 grid grid-cols-2 gap-5">
                <strong> Email</strong>
                <strong className="text-primary"> :</strong>
              </div>
              <p className=" col-span-2">contactus@gmail.com</p>
            </div>

            <div className="grid grid-cols-3 border-b border-dashed border-text-success text-secondary-300 py-5">
              <div className="col-span-1 grid grid-cols-2 gap-5">
                <strong>Social</strong>
                <strong className="text-primary"> :</strong>
              </div>
              <div className="col-span-2 flex gap-5 text-primary text-lg">
                <a
                  className="btn_effect border border-secondary bg-accent rounded-full p-2"
                  href="https://www.linkedin.com/in/sabbir10s/"
                  target="_blank"
                >
                  <GrLinkedinOption />
                </a>
                <a
                  className="btn_effect border border-secondary bg-accent rounded-full p-2"
                  href="https://twitter.com/sabbir10s"
                  target="_blank"
                >
                  <AiOutlineTwitter />
                </a>
              </div>
            </div>
          </div>

          <div>
            <form onSubmit={sendEmail}>
              <div className="flex gap-2">
                <div className="mb-6 w-full">
                  <input
                    type="text"
                    name="name"
                    className="text-sm rounded-lg border focus:border-primary outline-none block w-full p-2.5"
                    placeholder="Name"
                    required
                  />
                </div>
                <div className="mb-6 w-full">
                  <input
                    type="user_email"
                    name="email"
                    className="text-sm rounded-lg border focus:border-primary outline-none block w-full p-2.5"
                    placeholder="Email"
                    required
                  />
                </div>
              </div>
              <div className="mb-6">
                <input
                  type="text"
                  name="subject"
                  className="text-sm rounded-lg border focus:border-primary outline-none block w-full p-2.5"
                  placeholder="Subject"
                  required
                />
              </div>
              <div>
                <textarea
                  rows="8"
                  name="message"
                  className="text-sm rounded-lg border focus:border-primary outline-none block w-full p-2.5"
                  placeholder="Message..."
                ></textarea>
              </div>

              <button className="btn_effect bg-primary border border-primary text-white py-[10px] px-5 rounded mt-6">
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default Contact;
