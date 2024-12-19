"use client"

import React from 'react'
import SectionHeading from './section-heading'
import { motion } from 'framer-motion';

export default function About() {
    return (
        <motion.section
            className="mb-24 max-w-[45rem] text-center leading-8 sm:mb-40"
            initial={{ opacity: 0, y: 100}}
            animate={{ opacity: 1, y: 0}}
            transition={{ delay: 0.175 }}
        >
            <SectionHeading>About me</SectionHeading>
            <p className="mb-3">
                I'm a creative and easy-going individual who loves tackling new challenges.
                I bring a mix of curiosity and adaptability to everything I do.
                Whether it's collaborating with others or diving into solo projects,
                I'm always up for a good adventure.
            </p>
            <p>
                In my free time, I find joy in the art of baking🧁,
                experimenting with flavors and textures to create delicious treats that bring joy to others.
            </p>
            <p> "Full stack software engineering provides the perfect canvas for me to express creativity
                in both logical and visual ways, and I love every bit of it"
            </p>
        </motion.section>
    )
}
