export default function CTASection() {
    return (
        <div className="bg-white">
            <div className="mx-auto max-w-7xl py-24 sm:px-6 sm:py-32 lg:px-8">
                <div className="relative isolate overflow-hidden bg-gray-900 px-6 py-24 text-center shadow-2xl sm:rounded-3xl sm:px-16">
                    <h2 className="text-balance text-4xl font-semibold tracking-tight text-white sm:text-5xl">
                        Un <span className="text-red-300">besoin</span>, une <span
                        className="text-green-300">solution</span>
                    </h2>
                    <p className="mx-auto mt-6 max-w-full text-pretty text-lg/8 text-gray-300">
                        En passant par le développement d'un site complet, d'un e-commerce, d'une application de gestion (ERP) ou d'un site vitrine, OverCode vous accompagne dans la création de votre projet web en répondant à vos besoins par la meilleure solution.
                    </p>
                    <div className="mt-10 flex items-center justify-center gap-x-6">
                        <a
                            href="mailto:contact@overcode.fr"
                            className="rounded-md bg-white px-3.5 py-2.5 text-sm font-semibold text-gray-900 shadow-sm hover:bg-gray-100 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
                        >
                            Prendre contact
                        </a>
                        <a href="#" className="text-sm/6 font-semibold text-white">
                            Learn more <span aria-hidden="true">→</span>
                        </a>
                    </div>
                    <svg
                        viewBox="0 0 1024 1024"
                        aria-hidden="true"
                        className="absolute left-1/2 top-1/2 -z-10 size-[64rem] -translate-x-1/2 [mask-image:radial-gradient(closest-side,white,transparent)]"
                    >
                        <circle r={512} cx={512} cy={512} fill="url(#827591b1-ce8c-4110-b064-7cb85a0b1217)" fillOpacity="0.7" />
                        <defs>
                            <radialGradient id="827591b1-ce8c-4110-b064-7cb85a0b1217">
                                <stop stopColor="#4E205AFF" />
                                <stop offset={1} stopColor="#E935C1" />
                            </radialGradient>
                        </defs>
                    </svg>
                </div>
            </div>
        </div>
    )
}
