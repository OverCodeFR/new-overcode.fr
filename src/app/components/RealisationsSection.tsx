const posts = [
    {
        id: 1,
        title: 'Start Esport !',
        href: 'startesport',
        description:
            'Site e-commerce pour de la vente de matériel de gaming et d\'esport.',
        imageUrl:
            'start-esport.webp',
        date: 'Décembre 2022',
        category: 'E-commerce',
    },
    {
        id: 2,
        title: 'OverCode',
        href: 'overcode',
        description:
            'Ancien site vitrine pour OverCode.',
        imageUrl:
            'overcode.webp',
        date: 'Février 2023',
        category: 'Vitrine',
    },
    {
        id: 3,
        title: 'Paris Street Racing',
        href: 'psr',
        description:
            'Site E-commerce pour la vente de vêtements et accessoires de la communauté Paris Street Racing (PSR). OverCode était sponsor de PSR.',
        imageUrl:
            'overcode.webp',
        date: 'Juillet 2023',
        category: 'E-commerce',
    },
    {
        id: 4,
        title: 'HelloWork',
        href: 'hellowork',
        description:
            'Site Recruteur pour Hellowork, le leader dans la la mise en relation entre candidats et recruteurs.',
        imageUrl:
            'hellowork.webp',
        date: 'Juin-Septembre 2023',
        category: 'Vitrine',
    },
    {
        id: 5,
        title: 'Check&Visit',
        href: 'hellowork',
        description:
            'Site Recruteur pour Hellowork, le leader dans la la mise en relation entre candidats et recruteurs.',
        imageUrl:
            'hellowork.webp',
        date: 'Juin-Septembre 2023',
        category: 'Vitrine',
    },
    {
        id: 6,
        title: 'ThisisBlindtest',
        href: 'hellowork',
        description:
            'Site Recruteur pour Hellowork, le leader dans la la mise en relation entre candidats et recruteurs.',
        imageUrl:
            'hellowork.webp',
        date: 'Juin-Septembre 2023',
        category: 'Vitrine',
    },
    {
        id: 7,
        title: 'Le Salon de Martine',
        href: 'lsm',
        description:
            'Site Recruteur pour Hellowork, le leader dans la la mise en relation entre candidats et recruteurs.',
        imageUrl:
            'hellowork.webp',
        date: 'Avril 2024',
        category: 'Vitrine',
    },
    {
        id: 7,
        title: 'Madame DE',
        href: 'madamede',
        description:
            'Site Recruteur pour Hellowork, le leader dans la la mise en relation entre candidats et recruteurs.',
        imageUrl:
            'hellowork.webp',
        date: 'Janvier 2025',
        category: 'Vitrine',
    },

]

export default function RealisationsSection() {
    return (
        <div className="bg-white py-24 sm:py-32">
            <div className="mx-auto max-w-7xl px-6 lg:px-8">
                <div className="mx-auto max-w-2xl text-center">
                    <h2 className="text-balance text-4xl font-semibold tracking-tight text-gray-900 sm:text-5xl">
                        Réalisations
                    </h2>
                    <p className="mt-2 text-lg/8 text-gray-600">Retrouvez ici les différents projets publics d&apos;applications Web ou Mobile pour les clients/partenaires de OverCode.</p>
                </div>
                <div className="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-x-8 gap-y-20 lg:mx-0 lg:max-w-none lg:grid-cols-3">
                    {posts.map((post) => (
                        <article key={post.id} className="flex flex-col items-start justify-between">
                            <a href={`/realisations/${post.href}`}>
                            <div className="relative w-full">
                                <img
                                    src={`/images/realisations/${post.imageUrl}`}
                                    className="aspect-video w-full rounded-2xl bg-gray-800 object-cover object-left-top sm:aspect-[2/1] lg:aspect-[3/2]"
                                />
                                <div className="absolute inset-0 rounded-2xl ring-1 ring-inset ring-gray-900/10" />
                            </div>
                            <div className="max-w-xl">
                                <div className="mt-4 flex items-center gap-x-4 text-xs">
                                    <time className="text-gray-500">
                                        {post.date}
                                    </time>
                                    <span
                                        className="relative z-10 rounded-full bg-gray-50 px-3 py-1.5 font-medium text-gray-600 hover:bg-gray-100"
                                    >
                                        {post.category}
                                    </span>
                                </div>
                                <div className="group relative">
                                    <h3 className="mt-3 text-lg/6 font-semibold text-gray-900 group-hover:text-gray-600">
                                        {post.title}
                                    </h3>
                                    <p className="mt-5 line-clamp-3 text-sm/6 text-gray-600">{post.description}</p>
                                </div>
                            </div>
                            </a>
                        </article>
                    )).slice().reverse()}
                </div>
            </div>
        </div>
    )
}
