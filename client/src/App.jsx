import { useState } from "react";
import bg_img from "./assets/bg-2.jpg"; 
import icon from "./assets/logo.png"

function App() {
  return (
    <div
      className="relative min-h-screen min-w-screen bg-cover bg-center flex items-center justify-center"
      style={{ backgroundImage: `url(${bg_img})` }}
    >
      <div className="absolute backdrop-blur-sm inset-0 bg-black/40"></div>
      <div className="bg-white/30 rounded-sm absolute top-0 left-0 m-4"> 
         <img src={icon} className="w-full h-12 "/>
         </div>
      {/* Content over the image */}
      <div className="p-8 max-w-5xl text-center z-20 mt-16">
        
      
        <h1 className=" font-montserrat text-2xl md:text-4xl font-bold mb-6 text-white/90">
        Join the Waitlist <br/><span className="text-4xl md:text-6xl text-white ">Your Property Could Be Earning More.</span> 
        </h1>
        <p className="mb-6 text-white font-hav font-mono">
        We're inviting a limited group of landlords to list on our new platform before launch.<br/> Don’t miss out on first-mover benefits!
        </p>
        <form  className="flex flex-col md:flex-row w-full gap-3 px-0 md:px-36">
          
          <input
            required
            type="email"
            placeholder="Email Address"
            className="w-full md:w-3/4 p-2 border border-slate-300 bg-white focus:outline-none active:outline-none"

          />
          <div
            type="submit"
            className=" fo font-inter w-full md:w-1/4 h-fit bg-white/30 text-white font-semibold py-2 px-4 border-2 border-white/80 cursor-pointer hover:bg-white/50 hover:text-neutral-800"
          >
            Join Waitlist
          </div>
        </form>
        {/* <div className="text-base text-white  font-sans self-stretch text-center mt-4">
            Are you an agent? <a href="#" className="text-yellow-500 underline"><span  className="text-blue-500 underline">Join here</span></a>
          </div> */}
      </div>
    </div>
  );
}

export default App;
