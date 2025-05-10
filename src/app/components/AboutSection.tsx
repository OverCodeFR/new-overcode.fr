export default function AboutSection() {
    return (
        <div className="overflow-hidden bg-white py-8" id="a-propos">
            <div className="mx-auto max-w-2xl px-6 lg:max-w-7xl lg:px-8">
                <div className="max-w-4xl">
                    <p className="text-base/7 font-semibold text-secondary">A propos</p>
                    <h2 className="mt-2 text-pretty text-4xl font-semibold tracking-tight text-gray-900 sm:text-5xl">
                        Développement web & mobile sur mesure dans l&apos;Ouest
                    </h2>
                    <p className="mt-6 text-xl/8 text-gray-700">
                        Basé entre Nantes et Rennes, OverCode accompagne les entreprises, startups et indépendants dans la création d&apos;outils digitaux performants : sites vitrines, e-commerces, applications web et mobiles.
                    </p>
                </div>
                <section className="mt-20 grid grid-cols-1 lg:grid-cols-2 lg:gap-x-8 lg:gap-y-16">
                    <div className="lg:pr-8">
                        <h2 className="text-pretty text-2xl font-semibold tracking-tight text-gray-900">Les objectifs</h2>
                        <p className="mt-6 text-base/7 text-gray-600">
                            Notre objectif est simple : concevoir des solutions robustes, modernes et évolutives qui répondent vraiment aux besoins métiers. Chaque projet est développé sur mesure avec une approche orientée utilisateur, en combinant performance, design et accessibilité.

                        </p>
                        <p className="mt-8 text-base/7 text-gray-600">
                            Nous privilégions une collaboration de proximité, transparente et agile. En travaillant principalement avec des acteurs de l&apos;Ouest (Loire-Atlantique, Bretagne, Vendée), nous restons accessibles, réactifs et à l&apos;écoute de nos clients.

                        </p>
                    </div>
                    <div className="hidden sm:block lg:row-span-2 lg:-mr-16 xl:mr-auto">
                        <div className="-mx-8 grid grid-cols-2 gap-4 sm:-mx-16 sm:grid-cols-4 lg:mx-0 lg:grid-cols-2 lg:gap-4 xl:gap-8">
                            <div className="aspect-square overflow-hidden rounded-xl shadow-xl outline-1 -outline-offset-1 outline-black/10">
                                <img
                                    alt=""
                                    src="/images/programming.webp"
                                    className="block size-full object-cover"
                                />
                            </div>
                            <div className="-mt-8 aspect-square overflow-hidden rounded-xl shadow-xl outline-1 -outline-offset-1 outline-black/10 lg:-mt-40">
                                <img
                                    alt=""
                                    src="/images/overcode.webp"
                                    className="block size-full object-cover"
                                />
                            </div>

                        </div>
                    </div>
                </section>
            </div>
        </div>
    )
}
