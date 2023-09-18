import React from "react";
import SendMessageLong from "./shared-components/SendMessageLong";

export default function ListingDetailsRight() {
  return (
    <div className="flex flex-col items-center justify-center h-full">
      <div>
        <form className="max-w-md w-full">
          <div className="flex flex-col items-center">
            <h1 className="font-semibold text-4xl">Interested?</h1>
            <h1 className="mt-2 font-light">Contact us about this property</h1>
          </div>
          <div className="mt- flex justify-left">
            <div className="flex flex-col mr-10">
              <label className="font-semibold text-sm">First name</label>
              <input className="w-[200px] border border-gray-300 rounded-lg drop-shadow-sm placeholder-black text-sm font-light" type="text" id="fname" name="fname" placeholder="First name" />
            </div>
            <div className="flex flex-col">
              <label className="font-semibold text-sm">Last name</label>
              <input className="w-[200px] h-[40px] border border-gray-300 rounded-lg drop-shadow-sm placeholder-black text-sm font-light" type="text" id="lname" name="lname" placeholder="Last name" />
            </div>
          </div>
          <div className="flex flex-col mt-4">
            <label className="font-semibold text-sm" for="fname">
              Phone Number
            </label>
            <input className="w-[280px] h-[40px] border border-gray-300 rounded-lg drop-shadow-sm placeholder-black text-sm font-light" type="number" id="phone" name="phone" placeholder="+64 (02) 1212-3456" />
          </div>
          <div className="flex flex-col mt-4">
            <label className="font-semibold text-sm" for="email">
              E-mail
            </label>
            <input className="w-full h-[40px] border border-gray-300 rounded-lg drop-shadow-sm placeholder-black text-sm font-light" type="email" id="email" name="email" placeholder="+64 (02) 1212-3456" />
          </div>
          <div className="flex items-center mt-6">
            <input className="w-[20px] h-[20px] border-2 border-gray-300 rounded drop-shadow-sm" type="checkbox" value="" id="checkboxDefault" />
            <label className="ml-3 font-light text-sm hover:cursor-pointer">General Enquiry</label>
            <input className="w-[20px] h-[20px] ml-16 border-2 border-gray-300 rounded drop-shadow-sm" type="checkbox" value="" id="checkboxDefault" />
            <label className="ml-3 font-light text-sm hover:cursor-pointer">Book a viewing</label>
          </div>
          <div className="flex flex-col mt-5">
            <label className="font-semibold text-sm" for="fname">
              Message
            </label>
            <textarea className="border border-gray-300 rounded-lg drop-shadow-sm placeholder-black text-sm font-light resize-none" rows="6" cols="33"></textarea>
          </div>
          <div className="flex items-center mt-6">
            <input className="w-[20px] h-[20px] border-2 border-gray-300 rounded drop-shadow-sm" type="checkbox" value="" id="checkboxDefault" />
            <label className="ml-3 font-light text-sm hover:cursor-pointer">You agree to our friendly privacy policy</label>
          </div>
          <SendMessageLong />
        </form>
      </div>
    </div>
  );
}
