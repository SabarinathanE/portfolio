import React from "react";
import SectionTitle from "../../components/SectionTitle";
import { contact } from "../../resources/personal";

function Contact() {
  const contactData = contact[0];

  return (
    <div>
      <SectionTitle title="Say Hello" />

      <div className="flex sm:flex-col items-center justify-between lg:gap-8">
        <div className="flex flex-col">
          <p className="text-tertiary">{"{"}</p>
          {Object.entries(contactData).map(([key, value]) => (
            <p className="ml-5">
              <span className="text-tertiary">{key} : </span>
              <span className="text-tertiary">{contactData[key]}</span>
            </p>
          ))}

          <p className="text-tertiary">{"}"}</p>
        </div>
        <div className="h-[400px]">
          <dotlottie-player
            src="https://lottie.host/90cbecce-d9a7-445c-8d9c-180df71e2590/BkW0bLAg9A.json"
            background="transparent"
            speed="1"
            autoplay
          ></dotlottie-player>
        </div>
      </div>
    </div>
  );
}

export default Contact;
