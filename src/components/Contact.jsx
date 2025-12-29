import React, { useRef, useState } from "react";
import emailjs from "emailjs-com";
import {
  Mail,
  MapPin,
  Clock,
  Github,
  Linkedin,
  Copy,
} from "lucide-react";
import { BsWhatsapp } from "react-icons/bs";

const Contact = () => {
  const formRef = useRef();
  const [status, setStatus] = useState(null);
const [copied, setCopied] = useState(false);

  const sendEmail = (e) => {
    e.preventDefault();

    const formData = new FormData(formRef.current);
    formData.set("time", new Date().toLocaleString());

    const templateParams = {};
    formData.forEach((value, key) => {
      templateParams[key] = value;
    });

    emailjs
      .send(
        "service_vm9x8ah",
        "template_7b8jbof",
        templateParams,
        "i6jP6CnJdDJDJSeHb"
      )
      .then(
        (result) => {
          setStatus("SUCCESS");
          formRef.current.reset();
          setTimeout(() => setStatus(null), 5000);
        },
        (error) => {
          setStatus("FAILED");
          console.error(error.text);
        }
      );
  };

  return (
    <section className="bg-[#fcfdff] py-20 px-6">
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 lg:gap-20 items-start">
        {/* Left Side: Contact Information */}
        <div>
          <h2 className="text-5xl font-extrabold mb-10 text-slate-900 tracking-tight">
            Contact <span className="text-cyan-400">Information</span>
          </h2>

          <div className="space-y-4 mb-12">
            {/* Email Card */}
            <div className="flex items-center gap-5 p-5 bg-white border border-slate-100 rounded-2xl shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07)]">
              <div className="p-3 bg-indigo-50 text-cyan-500 rounded-xl">
                <Mail size={26} />
              </div>
              <div>
                <p className="font-bold text-slate-900 text-lg">Email</p>
                <p className="text-slate-500 font-medium">
                  jerinloncheu@gmail.com
                </p>
                
<button
  onClick={() => {
    navigator.clipboard.writeText("jerinloncheu@gmail.com")
      .then(() => setCopied(true))
      .catch(() => setCopied(false));

    setTimeout(() => setCopied(false), 3000); 
  }}
  className="flex items-center gap-1 text-cyan-500 text-sm mt-1 font-semibold hover:text-cyan-600 transition-colors"
>
  <Copy size={14} /> {copied ? "Copied!" : "Copy"}
</button>
              </div>
            </div>

            {/* Location Card */}
            <div className="flex items-center gap-5 p-5 bg-white border border-slate-100 rounded-2xl shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07)]">
              <div className="p-3 bg-indigo-50 text-cyan-500 rounded-xl">
                <MapPin size={26} />
              </div>
              <div>
                <p className="font-bold text-slate-900 text-lg">Location</p>
                <p className="text-slate-500 font-medium">
                  Chittagong, Bangladesh
                </p>
              </div>
            </div>

            {/* Availability Card */}
            <div className="flex items-center gap-5 p-5 bg-white border border-slate-100 rounded-2xl shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07)]">
              <div className="p-3 bg-indigo-50 text-cyan-500 rounded-xl">
                <Clock size={26} />
              </div>
              <div>
                <p className="font-bold text-slate-900 text-lg">Availability</p>
                <p className="text-slate-500 font-medium text-sm md:text-base">
                  Available for new opportunities
                </p>
              </div>
            </div>
          </div>

          {/* Social Section */}
          <div>
            <h3 className="text-2xl font-bold mb-6 text-slate-900">
              Connect With Me
            </h3>
            <div className="flex flex-wrap gap-3">
              <SocialBtn
                icon={<Github size={20} />}
                label="GitHub"
                href="https://github.com/zingrin"
              />

              <SocialBtn
                icon={<Linkedin size={20} />}
                label="LinkedIn"
                href="https://www.linkedin.com/in/zingrin"
              />

              <SocialBtn
                icon={<BsWhatsapp size={20} />}
                label="WhatsApp"
                href="https://wa.me/8801755171954"
              />
            </div>
          </div>
        </div>

        {/* Right Side: Form */}
        <form
          ref={formRef}
          onSubmit={sendEmail}
          className="space-y-4"
          noValidate
        >
          <input
            type="text"
            name="from_name"
            placeholder="Enter Your Name"
            required
            className="w-full px-4 py-3 rounded-md bg-gray-100 text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-cyan-400"
          />
          <input
            type="email"
            name="from_email"
            placeholder="Enter Your Email"
            required
            className="w-full px-4 py-3 rounded-md bg-gray-100 text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-cyan-400"
          />
          <input
            type="text"
            name="subject"
            placeholder="Enter Your Subject"
            required
            className="w-full px-4 py-3 rounded-md bg-gray-100 text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-cyan-400"
          />
          <textarea
            name="message"
            placeholder="Enter Your Message"
            rows="5"
            required
            className="w-full px-4 py-3 rounded-md bg-gray-100 text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-cyan-400"
          ></textarea>

          <button
            type="submit"
            className="w-full bg-cyan-600 text-white font-semibold py-3 rounded-md hover:bg-cyan-500 transition duration-300"
          >
            Submit
          </button>

          {status === "SUCCESS" && (
            <p className="text-green-600 mt-4">Message sent successfully!</p>
          )}
          {status === "FAILED" && (
            <p className="text-red-600 mt-4">Failed to send message. Try again.</p>
          )}
        </form>
      </div>
    </section>
  );
};

// Updated Social Button
const SocialBtn = ({ icon, label, href }) => (
  <a
    href={href}
    target="_blank"
    rel="noopener noreferrer"
    className="flex items-center gap-2 px-5 py-2.5 bg-white border border-slate-200 rounded-xl shadow-sm hover:shadow-md hover:border-indigo-200 transition-all text-slate-700 font-semibold text-sm"
  >
    <span className="text-slate-600">{icon}</span>
    {label}
  </a>
);

export default Contact;
