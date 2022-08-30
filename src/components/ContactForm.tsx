import React, { ReactElement } from "react";

export default function ContactForm(): ReactElement {
  return (
    <div>
      <form
        action="https://formspree.io/f/xjvlvekw"
        method="post"
        autoComplete="off"
      >
        <div className="flex flex-col">
          <label htmlFor="name">Name</label>
          <input
            id="name"
            type="text"
            name="name"
            placeholder="Argyle"
            required
            minLength={2}
            maxLength={64}
            className="mt-2 rounded border-gray-900 bg-gray-900 px-4 py-3 text-gray-200 placeholder:text-gray-500 placeholder:text-opacity-70"
          />
        </div>
        <div className="mt-8 flex flex-col">
          <label htmlFor="email">Email Address</label>
          <input
            id="email"
            type="email"
            name="email"
            placeholder="argyle@surferboypizza.com"
            required
            className="mt-2 rounded border-gray-900 bg-gray-900 px-4 py-3 text-gray-200 placeholder:text-gray-500 placeholder:text-opacity-70"
          />
        </div>
        <div className="mt-8 flex flex-col">
          <label htmlFor="message">Message</label>
          <textarea
            id="message"
            name="message"
            placeholder="Fruit on your pizza is gnarly, you say? Well, I say try before you deny."
            required
            minLength={2}
            maxLength={255}
            className="mt-2 h-40 resize-none rounded border-gray-900 bg-gray-900 px-4 py-3 text-gray-200 placeholder:text-gray-500 placeholder:text-opacity-70"
          ></textarea>
        </div>
        <button type="submit" className="btn mt-10">
          Send
        </button>
      </form>
    </div>
  );
}
