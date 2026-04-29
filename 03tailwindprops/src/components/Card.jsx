import React from "react";

function Card({username, btnText="read more"}) {
    console.log(username);
    

  return (
    <div className="max-w-sm rounded-2xl overflow-hidden shadow-lg bg-white mb-4">
      <img
        className="w-full h-48 object-cover"
        src="https://images.pexels.com/photos/18148937/pexels-photo-18148937.jpeg"
        alt="Card Image"
      />

      <div className="p-6">
        <h2 className="text-xl font-semibold text-grey-200 mb-2">{username} </h2>

        <p className="text-gray-600 text-sm mb-4">
          This is a simple Tailwind CSS cah2rd example. You can use it for
          products, blogs, or profiles.
        </p>

        <button className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-lg transition">
          {btnText}
        </button>
      </div>
    </div>
  );
}

export default Card;
