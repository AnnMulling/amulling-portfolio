"use client";

import Image from "next/image"
import profile from "@/public/profile.png"
import { motion } from "framer-motion"
import Link from "next/link";
import { BsArrowRight, BsLinkedin } from "react-icons/bs";
import { HiDownload } from "react-icons/hi";
import { FaGithubSquare } from "react-icons/fa";
import { useSectionInView } from "@/lib/hooks";
import { useActiveSectionContext } from "@/context/active-section-context";


export default function Intro() {
    const {ref} = useSectionInView("Home", 0.5);
      const { setActiveSection, setTimeOfLastClick } = useActiveSectionContext();

    return (
        <section ref={ref} id="home" className="mb-28 max-w[50rem] text-center sm:mb-0 scroll-mt-[100rem]">
            <div className="flex items-center justify-center">
                <div className="relative">
                    <motion.div
                        initial={{ opacity: 0, scale: 0 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{
                            type: "tween",
                            duration: 0.25,
                        }}
                    >
                        <Image
                            src={profile}
                            alt="profile-image"
                            width="192"
                            height="192"
                            quality="95"
                            priority={true}
                            className="h-24 w-24 rounded-full object-cover border-[0.35rem] border-white shadow-xl"

                        />
                    </motion.div>
                    <motion.span
                        className="absolute bottom-0 left-0 text-4xl"
                        initial={{ opacity: 0, scale: 0 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{
                            type: "spring'",
                            stiffness: 125,
                            delay: 0.1,
                            duration: 0.7,
                        }}
                    > 🌟 </motion.span>
                </div>
            </div>
            <motion.h1
                className="mb-10 mt-4 px-4 text-xl font-medium !leading-[1.5]"
                initial={{ opacity: 0, y: 100 }}
                animate={{ opacity: 1, y: 0 }}
            >
                <span className="font-bold">I'm Ann Mulling.</span> I'm a{" "}
                <span className="font-bold">Jr. full-stack developer</span>
                I enjoy building <span className="italic">sites & apps</span>. My focus is{" "}
                <span className="underline">React (Next.js)</span>.
            </motion.h1>
            {/* <p>
                <span className="font-bold">I'm Ann Mulling</span> I'm a {""}
                <span className="font-bold">Jr. Full-Stack developer</span> I speak Thai and English.
                    I'm a creative and easy-going individual who loves tackling new challenges.
                <br></br>
                    I bring a mix of curiosity and adaptability to everything I do.
                    Whether it's collaborating with others or diving into solo projects,
                    I'm always up for a good adventure.

                <br></br>
                    In my free time, I find joy in the <span className="font-semibold">art of baking🧁</span>,
                    experimenting with flavors and textures to create delicious treats that bring joy to others.
                <br></br>
                <span className="font-semibold">
                "Full stack software engineering provides the perfect canvas for me to express creativity
                in both logical and visual ways, and I love every bit of it"
                </span>

            </p> */}
            <motion.div
                className="flex flex-col sm:flex-row items-center justify-center gap-2 px-4 text-lg font-medium"
                initial={{ opacity: 0, y: 100 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{
                    delay: 0.1,
                }}
            >
                <Link
                    href="#contact"
                    className="group bg-gray-900 text-white px-7 py-3 flex items-center gap-2 rounded-full outline-none focus:scale-110 hover:scale-110 hover:bg-gray-950 active:scale-105 transition-all"
                    onClick={() => {
                        setActiveSection("Contact");
                        setTimeOfLastClick(Date.now());
                    }}
                >
                    Contact me here
                    <BsArrowRight className="opacity-70 group-hover:translate-x-1 transition" />
                </Link>

                <a
                    href="/CV.pdf" download
                    className=" group bg-white px-7 py-3 flex items-center gap-2 rounded-full outline-none focus:scale-110 hover:scale-110 active:scale-105 transition-all cursor-pointer border borderBlack dark:bg-white/10"
                >Download CV <HiDownload className="opacity-60 group-hover:translate-y-1 transition" />
                </a>

                <a
                    href="https://www.linkedin.com/in/ann-m-653708227/" target="_blank"
                    className="bg-white p-4 text-gray-700 flex items-center gap-2 rounded-full outline-none focus:scale-[1.15] hover:scale-[1.15] hover:text-gray-950 ctive:scale-105 transition-all cursor-pointer border borderBlack dark:bg-white/10 dark:text-white/60">
                    <BsLinkedin />
                </a>
                <a
                    href="https://github.com/AnnMulling" target="_blank"
                    className="bg-white p-4 text-gray-700 flex items-center gap-2 rounded-full outline-none focus:scale-[1.15] hover:scale-[1.15]  hover:text-gray-950 active:scale-105 transition-all cursor-pointer border borderBlack dark:bg-white/10 dark:text-white/60">
                    <FaGithubSquare />
                </a>
            </motion.div>
        </section>
    )
};
