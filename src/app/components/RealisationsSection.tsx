 'use client'

import {useState} from "react";
import Image from "next/image";

const posts = [
    {
        id: 1,
        title: 'Start Esport !',
        description: 'Site e-commerce pour de la vente de matériel de gaming et d\'esport.',
        imageUrl: 'start-esport.webp',
        date: 'Décembre 2022',
        category: 'E-commerce',
    },
    {
        id: 2,
        title: 'OverCode',
        description: 'Ancien site vitrine pour OverCode.',
        imageUrl: 'overcode.webp',
        date: 'Février 2023',
        category: 'Vitrine',
    },
    {
        id: 3,
        title: 'Paris Street Racing',
        description: 'Site E-commerce pour la vente de vêtements et accessoires de la communauté Paris Street Racing (PSR). OverCode était sponsor de PSR.',
        imageUrl: 'psr.webp',
        date: 'Juillet 2023',
        category: 'E-commerce',
    },
    {
        id: 4,
        title: 'HelloWork',
        description: 'Site Recruteur pour Hellowork, le leader dans la la mise en relation entre candidats et recruteurs.',
        imageUrl: 'hellowork.webp',
        date: 'Juin-Septembre 2023',
        category: 'Hubspot',
    },
    {
        id: 5,
        title: 'Check&Visit',
        description: 'Landing page pour Check&Visit, une application de gestion de visites immobilières.',
        imageUrl: 'checkandvisit.webp',
        date: 'Octobre 2023',
        category: 'Hubspot',
    },
    {
        id: 6,
        title: 'ThisisBlindtest',
        description: 'Site vitrine pour ThisisBlindtest, une application de blindtest musical.',
        imageUrl: 'thisisblindtest.webp',
        date: 'Novemnbre 2023',
        category: 'Hubspot',
    },
    {
        id: 7,
        title: 'Le Salon de Martine',
        description: 'Site Vitrine pour Le Salon de Martine, un salon de toilettage à Paris.',
        imageUrl: 'lesalondemartine.webp',
        date: 'Avril 2024',
        category: 'Vitrine',
    },
    {
        id: 8,
        title: 'Madame DE',
        description: 'Application de gestion d\'un magasin de dépot-vente de vêtements et accessoires.',
        imageUrl: 'madamede.webp',
        date: 'Novembre 2024 - Janvier 2025',
        category: 'ERP',
    },

]

export default function RealisationsSection() {

    const INITIAL_COUNT = 6;
    const [visibleCount, setVisibleCount] = useState(INITIAL_COUNT);

    // Trie les projets par id décroissant : 8, 7, 6...
    const sortedPosts = [...posts].sort((a, b) => b.id - a.id);

    // Sélectionne les projets visibles en fonction du compteur
    const visiblePosts = sortedPosts.slice(0, visibleCount);

    const handleShowMore = () => {
        setVisibleCount(posts.length);
    };

    return (
        <div className="bg-white py-24 sm:py-32">
            <div className="mx-auto max-w-7xl px-6 lg:px-8">
                <div className="mx-auto max-w-2xl text-center">
                    <h2 className="text-base/7 font-semibold text-secondary">Réalisations</h2>

                    <p className="text-balance text-4xl font-semibold tracking-tight text-gray-900 sm:text-5xl">
                        changer ce nom+
                    </p>
                    <p className="mt-2 text-lg/8 text-gray-600">Retrouvez ici les différents projets d&apos;applications Web ou Mobile pour les clients/partenaires de OverCode.</p>
                </div>
                <div className="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-x-8 gap-y-20 lg:mx-0 lg:max-w-none lg:grid-cols-3">
                    {visiblePosts.map((post) => (
                        <article key={post.id} className="flex flex-col items-start">
                            <div className="relative w-full">
                                <Image
                                    alt={post.title}
                                    width={400}
                                    height={300}
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
                                    <span className="relative z-10 rounded-full bg-gray-50 px-3 py-1.5 font-medium text-gray-600 hover:bg-gray-100">
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
                        </article>
                    ))}
                </div>
                {visibleCount < posts.length && (
                    <div className="mt-10 flex justify-center">
                        <button
                            onClick={handleShowMore} className="rounded-md cursor-pointer bg-primary px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-secondary focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent"
                        >
                            Voir plus
                        </button>
                    </div>
                )}
            </div>
        </div>
    )
}
