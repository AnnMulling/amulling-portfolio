import React from 'react'
import SectionHeading from './section-heading'
import { FaPaperPlane } from 'react-icons/fa'

export default function Contact() {
  return <section id="contact" className="mb-20 sm:mb-28 w-[min(100%,38rem)]">
    <SectionHeading>Contact me</SectionHeading>
    <p className="text-gray-700">Please contact me directly at
        <a className="underline" href="mailto:p.annmulling@gmail.com">
            p.annmulling@gmail.com
        </a>
        or through this form.
    </p>

    <form className="mt-10 flex flex-col">
        <input className="h-14 rounded-lg borderBlack"
        type="email"
        />
        <textarea className="h-52 my-3 rounded-lg borderBlack p-4" />
        <button className="group flex items-center justify-center gap-2 h-[3rem] w-[8rem] bg-gray-900 text-white rounded-full outline-none transition-all"
        type="submit"
        >Submit <FaPaperPlane className="text-xs opacity-70 transition-all group-hover:translate-x-1 group-hover:-translate-y-1"/>{" "}
        </button>
    </form>
  </section>
}
