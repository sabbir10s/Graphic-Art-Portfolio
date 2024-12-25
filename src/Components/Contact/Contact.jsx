import React from "react";
import emailjs from "@emailjs/browser";
import toast, { Toaster } from "react-hot-toast";
import { GrLinkedinOption } from "react-icons/gr";
import { AiOutlineTwitter } from "react-icons/ai";
import { FaBehance, FaDribbble, FaFacebookF, FaTwitter } from "react-icons/fa6";

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

  const ButtonStyle =
    "text-[#111827] hover:text-white hover:bg-primary duration-300 text-xl border border-secondary-200 hover:border-primary p-2";
  return (
    <>
      <Toaster position="top-center" reverseOrder={false} />
      <div id="contact">
        <div className="py-6 md:py-12 grid gap-16 grid-cols-1 lg:grid-cols-2 justify-center items-start">
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
              <div className="col-span-2">
                <p>shohelranashuvo01840@gmail.com</p>
                <p>hriditaislam1234@ gmail.com</p>
              </div>
            </div>

            <div className="grid grid-cols-3 border-b border-dashed border-text-success text-secondary-300 py-5">
              <div className="col-span-1 grid grid-cols-2 gap-5">
                <strong>Others</strong>
                <strong className="text-primary"> :</strong>
              </div>
              <div className="col-span-2 flex gap-5 text-primary text-lg">
                <a
                  target="_blank"
                  href="https://www.behance.net/shohelrana2a1c"
                  className={ButtonStyle}
                >
                  <FaBehance />
                </a>
                <a
                  target="_blank"
                  href="https://www.facebook.com/mdshohelrana.shobo"
                  className={ButtonStyle}
                >
                  <FaFacebookF />
                </a>
                <a
                  target="_blank"
                  href="https://x.com/Shohelr47833278"
                  className={ButtonStyle}
                >
                  <FaTwitter />
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
