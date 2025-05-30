'use client'

import Image from 'next/image'

export default function HeroSection() {
    return (
        <div className="bg-white">
            <div className="relative isolate overflow-hidden bg-gradient-to-b from-indigo-100/20">
                <div
                    aria-hidden="true"
                    className="absolute inset-y-0 right-1/2 -z-10 -mr-96 w-[200%] origin-top-right skew-x-[-30deg] bg-white shadow-xl shadow-indigo-600/10 ring-1 ring-indigo-50 sm:-mr-80 lg:-mr-96"
                />
                <div className="mx-auto max-w-7xl px-6 py-8 sm:py-20 lg:px-8">
                    <div className="mx-auto max-w-2xl lg:mx-0 lg:grid lg:max-w-none lg:grid-cols-2 lg:gap-x-16 lg:gap-y-8 items-center xl:gap-x-8">
                        <div className="col-span-1">
                            <Image
                                src="/images/overcode-text.webp"
                                alt="OverCode"
                                width={300}
                                height={40}
                                className="w-auto h-20 -ml-3"
                            />
                            <div className="mb-6">
                                <a href="#mailto:contact@overcode.fr" className="inline-flex space-x-6">
                                    <span className="rounded-full inline-flex items-center gap-x-1.5 bg-indigo-600/10 px-3 py-1 text-sm/6 font-semibold text-primary ring-1 ring-inset ring-secondary-600/10">
                                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor"
                                             aria-hidden="true" className="h-6 text-green-500">
                                            <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z" clipRule="evenodd"></path>
                                        </svg>
                                        Disponible pour vos besoins
                                    </span>
                                </a>
                            </div>
                            <h1 className="max-w-2xl text-balance text-4xl sm:text-5xl font-semibold tracking-tight text-gray-900 lg:col-span-2 xl:col-auto">
                                Applications web et mobiles sur mesure – Bretagne & Grand Ouest
                            </h1>
                            <div className="mt-6 max-w-xl lg:mt-6">
                                <p className="text-pretty text-md font-medium text-gray-500 sm:text-lg/8">
                                    Nous concevons des applications web, sites e-commerce et solutions mobiles sur mesure pour les entreprises et indépendants de Bretagne et du Grand Ouest. Du design à la mise en ligne, OverCode vous accompagne à chaque étape pour créer votre solution.
                                </p>
                                <div className="mt-6 flex items-center gap-x-6">
                                    <a
                                        href="mailto:contact@overcode.fr"
                                        className="rounded-md bg-primary px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-secondary focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent"
                                    >
                                        Prendre contact
                                    </a>
                                    <a href="#a-propos" className="text-sm/6 font-semibold text-gray-900 hover:text-gray-600">
                                        A propos <span aria-hidden="true">→</span>
                                    </a>
                                </div>
                            </div>
                        </div>
                        <div className="col-span-1 hidden lg:block">
                            <Image
                                width={400}
                                height={300}
                                alt="Overcode - Développeur"
                                src="/images/programmer.webp"
                                className="aspect-auto w-full max-w-lg object-cover lg:max-w-none"
                            />
                        </div>
                    </div>
                </div>
                <div className="absolute inset-x-0 bottom-0 -z-10 h-24 bg-gradient-to-t from-white sm:h-32" />
            </div>
        </div>
    )
}