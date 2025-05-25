import { useState, useEffect } from "react";

export default function Contact({ listing }) {
  const [landlord, setLandlord] = useState(null);
  const [message, setMessage] = useState("");

  const onChange = (e) => {
    setMessage(e.target.value);
  };

  useEffect(() => {
    const fetchLandlord = async () => {
      try {
        const res = await fetch(`/api/user/${listing.userRef}`);
        const data = await res.json();
        setLandlord(data);
      } catch (error) {
        console.log(error);
      }
    };
    fetchLandlord();
  }, [listing.userRef]);

  const handleSendEmail = () => {
    const gmailUrl = `https://mail.google.com/mail/?view=cm&fs=1&to=${encodeURIComponent(
      landlord.email
    )}&su=${encodeURIComponent(
      `Regarding ${listing.name}`
    )}&body=${encodeURIComponent(message)}`;

    window.open(gmailUrl, "_blank", "width=600,height=400");
  };

  return (
    <>
      {landlord && (
        <div className="flex flex-col gap-3">
          <p>
            Contact <span className="font-semibold">{landlord.username}</span>{" "}
            for{" "}
            <span className="font-semibold">{listing.name.toLowerCase()}</span>
          </p>
          <textarea
            name="message"
            id="message"
            rows="2"
            value={message}
            onChange={onChange}
            placeholder="Type your message here..."
            className="w-full p-3 border rounded-lg"
          ></textarea>
          <button
            onClick={handleSendEmail}
            className="text-center bg-slate-700 text-white p-3 rounded-lg hover:opacity-95"
          >
            Send Message
          </button>
        </div>
      )}
    </>
  );
}
