import { useState } from "react";
import bg_img from "../assets/bg-2.jpg"; 
import icon from "../assets/logo.png"
import { Link } from "react-router-dom";
import Modal from "../components/Modal"

function LandingPage() {
  const [formData, setFormData] = useState({
    email: "",
    date: new Date().toISOString().split("T")[0],
  });

  const [loading, setLoading] = useState(false);
  const [openModal, setOpenModal]= useState(false);
  const handleSubmitForm = (e) => {
    e.preventDefault();
    setLoading(true);

    const sheetURL = "https://script.google.com/macros/s/AKfycbzyjdlWKzo-8ZtVYE5CAwvWI6D24GLen2S7Hc3h4DF0S6Pvp6S4Vy_E62SIOXICLAwnlg/exec";

    fetch(sheetURL, {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: `Email=${formData.email}&Date=${formData.date}`,
    })
      .then((response) => response.text())
      .then((data) => {
        //alert("Submitted Successfully.", data);
        setOpenModal(true);
        setFormData({
          email: "",
          date: new Date().toISOString().split("T")[0],
        });
      })
      .catch((error) => console.error(error))
      .finally(() => setLoading(false));
  };

  return (
    <div
      className="relative min-h-screen min-w-screen bg-cover bg-center flex flex-col items-center justify-center"
      style={{ backgroundImage: `url(${bg_img})` }}
    >
      <div className="absolute backdrop-blur-sm inset-0 bg-black/40"></div>
      <div className="bg-white/30 rounded-sm absolute top-0 left-0 m-4"> 
         <img src={icon} className="w-full h-12 "/>
         </div>
         <div className="absolute top-0 right-0 mr-4 mt-7 p-1 bg-white/30 w-fit z-40 flex items-center justify-center ">
     <Link to="/privacy-policy" className=" underline text-blue-800 font-semibold">Privacy Policy</Link>
     </div>
      {/* Content over the image */}
      <div className="p-4 md:p-8 max-w-5xl text-center z-20 mt-16">
        
      
        <h1 className=" font-montserrat text-xl md:text-4xl font-bold mb-6 text-white/90">
        Join the Waitlist <br/><span className="text-3xl md:text-6xl text-white ">Your Property Deserves Better Care and an Upgrade.</span> 
        </h1>
        <p className="mb-6 text-white font-hav font-mono">
        We are inviting a limited group of landlords for a revolutionary property management service platform. 
        <br/>Be the first to join us!
        </p>
        <form onSubmit={handleSubmitForm}  className="flex flex-col md:flex-row w-full gap-3 px-0 md:px-36">
          
          <input
            required
            label="Email"
            type="email"
            name="email"
            value={formData.email}
            onChange={(e) =>
              setFormData((prev) => ({
                ...prev,
                [e.target.name]: e.target.value,
              }))
            }
            placeholder="Email Address"
            className="w-full md:w-3/4 p-2 border border-slate-300 bg-white focus:outline-none active:outline-none"

          />
          <button
            disabled={loading}
            type="submit"
            className=" fo font-inter w-full md:w-1/4 h-fit bg-white/30 text-white font-semibold py-2 px-4 border-2 border-white/80 cursor-pointer hover:bg-white/50 hover:text-neutral-800"
          >
              {loading ? "Joining..." : "Join Waitlist"}
          </button>
        </form>
       
        {/* <div className="text-base text-white  font-sans self-stretch text-center mt-4">
            Are you an agent? <a href="#" className="text-yellow-500 underline"><span  className="text-blue-500 underline">Join here</span></a>
          </div> */}
         
      </div>

      <Modal isOpen={openModal} onClose={()=>setOpenModal(false)} >
<div className=" flex flex-col items-center justify-center m-4 ">
      <p className="text-gray-800 text-base font-mono">Thank you for your interest!</p>
        <h3 className="text-2xl font-montserrat font-bold mt-2 text-gray-900">
          We will contact you shortly.
        </h3>
        </div>
      </Modal>
    </div>
    
  );
}

export default LandingPage;



