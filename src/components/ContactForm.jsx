import {useState , useRef} from 'react'
import emailjs from "@emailjs/browser";
const ContactForm = () => {
  const form = useRef();
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("");

  const sendEmail = (e) => {
    e.preventDefault();
    setLoading(true);

    emailjs.sendForm(
      "service_qotu17i",
      "template_ie68ivd",
      form.current,
      "NQ88s095dWV66_x_1"
    )
    .then(
      (result) => {
        console.log(result.text);
        setMessage("Email sent successfully!");
        setLoading(false);
        form.current.reset();
      },
      (error) => {
        console.log(error.text);
        setMessage("Something went wrong, try again.");
        setLoading(false);
      }
    );
  };

  return (
    <div className="contact-form w-[90%] cursor-none trail-text">
      <form ref={form} onSubmit={sendEmail} className="flex flex-col gap-4">
        <input
          type="text"
          name="name"
          placeholder=" Name"
          required
          className="bg-gray-900 p-2 rounded "
        />
        <input
          type="email"
          name="email"
          placeholder="Email"
          required
          className="bg-gray-900 p-2 rounded"
        />
        <textarea
          name="message"
          placeholder="Message"
          required
          className="bg-gray-900 p-2 rounded"
        />
        <button
          type="submit"
          className="bg-blue-500 text-white py-2 rounded"
          disabled={loading}
        >
          {loading ? "Sending..." : "Send"}
        </button>
      </form>

      {message && (
        <p className="mt-4 text-center text-green-500 font-semibold">{message}</p>
      )}
    </div>
  );
};

export default ContactForm