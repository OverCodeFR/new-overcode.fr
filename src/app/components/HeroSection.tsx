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
                <div className="mx-auto max-w-7xl px-6 py-32 sm:py-40 lg:px-8">
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
                                <a href="#" className="inline-flex space-x-6">
                                    <span className="rounded-full inline-flex items-center gap-x-1.5 bg-indigo-600/10 px-3 py-1 text-sm/6 font-semibold text-indigo-600 ring-1 ring-inset ring-indigo-600/10">
                                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor"
                                             aria-hidden="true" className="h-6 text-green-500">
                                            <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z" clip-rule="evenodd"></path>
                                        </svg>
                                        Disponible pour vos besoins
                                    </span>
                                </a>
                            </div>
                            <h1 className="max-w-2xl text-balance text-5xl font-semibold tracking-tight text-gray-900 lg:col-span-2 xl:col-auto">
                                Applications web et mobiles sur mesure – Bretagne & Grand Ouest
                            </h1>
                            <div className="mt-6 max-w-xl lg:mt-6">
                                <p className="text-pretty text-lg font-medium text-gray-500 sm:text-xl/8">
                                    Anim aute id magna aliqua ad ad non deserunt sunt. Qui irure qui lorem cupidatat commodo. Elit sunt amet
                                    fugiat veniam occaecat fugiat aliqua. Anim aute id magna aliqua ad ad non deserunt sunt. Qui irure qui
                                    lorem cupidatat commodo.
                                </p>
                                <div className="mt-6 flex items-center gap-x-6">
                                    <a
                                        href="#"
                                        className="rounded-md bg-indigo-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                                    >
                                        Get started
                                    </a>
                                    <a href="#" className="text-sm/6 font-semibold text-gray-900">
                                        Learn more <span aria-hidden="true">→</span>
                                    </a>
                                </div>
                            </div>
                        </div>
                        <div className="col-span-1 hidden lg:block">
                            <img
                                alt=""
                                src="https://images.unsplash.com/photo-1567532900872-f4e906cbf06a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1280&q=80"
                                className="spect-[6/5] w-full max-w-lg rounded-2xl object-cover lg:max-w-none"
                            />
                        </div>
                    </div>
                </div>
                <div className="absolute inset-x-0 bottom-0 -z-10 h-24 bg-gradient-to-t from-white sm:h-32" />
            </div>
        </div>
    )
}


// import { ChevronRightIcon } from '@heroicons/react/20/solid'
//
// import Image from 'next/image'
//
// export default function HeroSection() {
//     return (
//         <div className="relative isolate overflow-hidden bg-white">
//             <svg
//                 aria-hidden="true"
//                 className="absolute inset-0 -z-10 size-full stroke-gray-200 [mask-image:radial-gradient(100%_100%_at_top_right,white,transparent)]"
//             >
//                 <defs>
//                     <pattern
//                         x="50%"
//                         y={-1}
//                         id="0787a7c5-978c-4f66-83c7-11c213f99cb7"
//                         width={200}
//                         height={200}
//                         patternUnits="userSpaceOnUse"
//                     >
//                         <path d="M.5 200V.5H200" fill="none" />
//                     </pattern>
//                 </defs>
//                 <rect fill="url(#0787a7c5-978c-4f66-83c7-11c213f99cb7)" width="100%" height="100%" strokeWidth={0} />
//             </svg>
//             <div className="mx-auto max-w-7xl px-6 pb-24 pt-10 sm:pb-32 lg:flex lg:px-8 lg:py-40">
//                 <div className="mx-auto max-w-2xl lg:mx-0 lg:shrink-0 lg:pt-8">
//                     <Image
//                         src="/images/overcode-text.webp"
//                         alt="OverCode"
//                         width={300}
//                         height={40}
//                         className="w-auto h-20 -ml-10"
//                     />
//                     <div className="mt-0">
//                         <a href="#" className="inline-flex space-x-6">
//                             <span className="rounded-full inline-flex items-center gap-x-1.5 bg-indigo-600/10 px-3 py-1 text-sm/6 font-semibold text-indigo-600 ring-1 ring-inset ring-indigo-600/10">
//                                 <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor"
//                                      aria-hidden="true" className="h-6 text-green-500">
//                                     <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z" clip-rule="evenodd"></path>
//                                 </svg>
//                                 Disponible pour vos besoins
//                             </span>
//                         </a>
//                     </div>
//                     <h1 className="mt-10 text-pretty text-5xl font-semibold tracking-tight text-gray-900 sm:text-6xl">
//                         Applications web et mobiles sur mesure – Bretagne & Grand Ouest
//                     </h1>
//                     <p className="mt-8 text-pretty text-lg font-medium text-gray-500 sm:text-xl/8">
//                         Anim aute id magna aliqua ad ad non deserunt sunt. Qui irure qui lorem cupidatat commodo. Elit sunt amet
//                         fugiat veniam occaecat.
//                     </p>
//                     <div className="mt-10 flex items-center gap-x-6">
//                         <a
//                             href="#"
//                             className="rounded-md bg-indigo-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
//                         >
//                             Get started
//                         </a>
//                         <a href="#" className="text-sm/6 font-semibold text-gray-900">
//                             Learn more <span aria-hidden="true">→</span>
//                         </a>
//                     </div>
//                 </div>
//                 <div className="mx-auto mt-16 flex max-w-2xl sm:mt-24 lg:ml-10 lg:mr-0 lg:mt-0 lg:max-w-none lg:flex-none xl:ml-32">
//                     <div className="max-w-3xl flex-none sm:max-w-5xl lg:max-w-none">
//                         <div className="-m-2 rounded-xl p-2 lg:-m-4 lg:rounded-2xl lg:p-4">
//                             <Image
//                                 alt="App screenshot"
//                                 src="/images/programmer.webp"
//                                 width={2432}
//                                 height={1442}
//                                 className="w-[60rem] rounded-md"
//                             />
//                         </div>
//                     </div>
//                 </div>
//             </div>
//         </div>
//     )
// }
