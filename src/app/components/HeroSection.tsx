'use client'

import { motion } from 'framer-motion'

export default function HeroSection() {
    return (
        <section className="flex flex-col items-center justify-center text-center py-20 px-4">
            <motion.h1
                initial={{ opacity: 0, y: -50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className="text-4xl md:text-6xl font-bold mb-6"
            >
                Salut, je suis <span className="text-blue-600">Développeur d'applications</span>
            </motion.h1>

            <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.3 }}
                className="text-lg md:text-xl text-gray-600 max-w-2xl"
            >
                Je crée des expériences numériques modernes et performantes. Découvrez mes réalisations ou contactez-moi !
            </motion.p>
        </section>
    )
}
