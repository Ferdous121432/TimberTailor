/* eslint-disable */
import React from "react";

function ContactInfo() {
  const contactDetails = [
    {
      icon: "https://cdn.builder.io/api/v1/image/assets/TEMP/4fc9ceebda7e74d0cba66da2084316bad98ff378379670278bdb61e9f3b1682a?placeholderIfAbsent=true&apiKey=5f7c255a63be4d4b97b4f114fa9e17d0",
      title: "Address",
      content: "Mirkadim, Munshiganj, Bangladesh",
    },
    {
      icon: "https://cdn.builder.io/api/v1/image/assets/TEMP/ad8b6da666f5399b42c73c5cfc73c18a3f5b302e8fa6cee72c0a12fccc36bda4?placeholderIfAbsent=true&apiKey=5f7c255a63be4d4b97b4f114fa9e17d0",
      title: "Phone",
      content: "Mobile: +(880) 1722-249835",
    },
    {
      icon: "https://cdn.builder.io/api/v1/image/assets/TEMP/33fdf35fddf9339c521220ac850f018805dee7707ded888dd5bd951d83937b10?placeholderIfAbsent=true&apiKey=5f7c255a63be4d4b97b4f114fa9e17d0",
      title: "Working Time",
      content: "Monday-Friday: 9:00 - 22:00\nSaturday-Sunday: 9:00 - 21:00",
    },
  ];

  return (
    <div className="max-md:ml-0 max-md:w-full flex w-[38%] flex-col">
      <div className="max-md:px-5 max-md:mt-10 mx-auto mt-16 flex w-full flex-col bg-white px-12 pb-16 pt-12 text-black">
        {contactDetails.map((detail, index) => (
          <div
            key={index}
            className="max-md:mt-10 max-md:ml-2 mt-11 flex items-start gap-8 self-start"
          >
            <img
              loading="lazy"
              src={detail.icon}
              alt={`${detail.title} icon`}
              className="aspect-square w-[30px] shrink-0 object-contain"
            />
            <div className="mt-3 flex flex-col">
              <h3 className="self-start text-2xl font-medium">
                {detail.title}
              </h3>
              <p className="text-base whitespace-pre-line">{detail.content}</p>
            </div>
          </div>
        ))}
        <div className="mt-8 flex justify-center">
          <a
            href="https://wa.me/8801722249835"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 rounded-md bg-green-500 px-4 py-2 text-white"
          >
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/6/6b/WhatsApp.svg"
              alt="WhatsApp"
              className="h-5 w-5"
            />
            <span>Chat on WhatsApp</span>
          </a>
        </div>
      </div>
    </div>
  );
}

export default ContactInfo;
