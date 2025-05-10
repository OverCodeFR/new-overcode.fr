import Image from "next/image";
import {EnvelopeIcon} from "@heroicons/react/20/solid";

const navigation = {
    solutions: [
        { name: 'A propos', href: '#a-propos' },
        { name: 'Services', href: '#services' },
        { name: 'Réalisations', href: '#realisations' },
        { name: 'Contact', href: '#contact' },
    ],
    socials: [
        { name: 'X', href: 'https://x.com/OverCode_' },
        { name: 'LinkedIn', href: 'https://www.linkedin.com/company/overcode-fr' },
        { name: 'Github', href: 'https://github.com/OverCodeFR' },
    ],
    legal: [
        { name: 'CGV', href: '/cgv' },
        { name: 'Mentions légales', href: '/mentions-legales' },
    ],
    projects: [
        { name: 'DriftOver', href: '#' },
        { name: 'Outfinity', href: '#' },
    ],
    social: [
        {
            name: 'X',
            href: 'https://x.com/OverCode_',
            icon: (props: React.SVGProps<SVGSVGElement>) => (
                <svg fill="currentColor" viewBox="0 0 24 24" {...props}>
                    <path d="M13.6823 10.6218L20.2391 3H18.6854L12.9921 9.61788L8.44486 3H3.2002L10.0765 13.0074L3.2002 21H4.75404L10.7663 14.0113L15.5685 21H20.8131L13.6819 10.6218H13.6823ZM11.5541 13.0956L10.8574 12.0991L5.31391 4.16971H7.70053L12.1742 10.5689L12.8709 11.5655L18.6861 19.8835H16.2995L11.5541 13.096V13.0956Z" />
                </svg>
            ),
        },
        {
            name: 'GitHub',
            href: 'https://github.com/OverCodeFR',
            icon: (props: React.SVGProps<SVGSVGElement>) => (
                <svg fill="currentColor" viewBox="0 0 24 24" {...props}>
                    <path
                        fillRule="evenodd"
                        d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"
                        clipRule="evenodd"
                    />
                </svg>
            ),
        },
        {
            name: 'LinkedIn',
            href: 'https://www.linkedin.com/company/overcode-fr',
            icon: (props: React.SVGProps<SVGSVGElement>) => (
                <svg fill="currentColor" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" {...props}>
                    <path d="M416 32H31.9C14.3 32 0 46.5 0 64.3v383.4C0 465.5 14.3 480 31.9 480H416c17.6 0 32-14.5 32-32.3V64.3c0-17.8-14.4-32.3-32-32.3zM135.4 416H69V202.2h66.5V416zm-33.2-243c-21.3 0-38.5-17.3-38.5-38.5S80.9 96 102.2 96c21.2 0 38.5 17.3 38.5 38.5 0 21.3-17.2 38.5-38.5 38.5zm282.1 243h-66.4V312c0-24.8-.5-56.7-34.5-56.7-34.6 0-39.9 27-39.9 54.9V416h-66.4V202.2h63.7v29.2h.9c8.9-16.8 30.6-34.5 62.9-34.5 67.2 0 79.7 44.3 79.7 101.9V416z"/>
                </svg>
            ),
        },
    ],
}

const year = new Date().getFullYear()

export default function FooterSection() {
    return (
        <footer className="bg-white">
            <div className="mx-auto max-w-7xl px-6 py-8 lg:px-8">
                <div className="mx-auto max-w-2xl text-center">
                    <hgroup>
                        <h2 className="text-base/7 font-semibold text-secondary">Contact</h2>
                        <p className="mt-2 text-balance text-4xl font-semibold tracking-tight text-gray-900 sm:text-5xl">
                            Votre solution à portée de main
                        </p>
                    </hgroup>
                    <p className="mx-auto mt-6 max-w-2xl text-pretty text-lg/8 text-gray-600">
                        Prêt à concrétiser votre projet ? Échangeons ensemble — à distance ou autour d&apos;un café dans l&apos;Ouest (Rennes, Nantes, Bretagne, Vendée) !
                    </p>
                    <div className="mt-8 flex justify-center gap-x-8">
                        <a
                            href="mailto:contact@overcode.fr"
                            className="rounded-md bg-primary px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-secondary focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent inline-flex gap-2 items-center"
                        >
                            <svg xmlns="http://www.w3.org/2000/svg" className="w-5" viewBox="0 0 512 512" fill="currentColor">
                                <path d="M88 0C74.7 0 64 10.7 64 24c0 38.9 23.4 59.4 39.1 73.1l1.1 1C120.5 112.3 128 119.9 128 136c0 13.3 10.7 24 24 24s24-10.7 24-24c0-38.9-23.4-59.4-39.1-73.1l-1.1-1C119.5 47.7 112 40.1 112 24c0-13.3-10.7-24-24-24zM32 192c-17.7 0-32 14.3-32 32L0 416c0 53 43 96 96 96l192 0c53 0 96-43 96-96l16 0c61.9 0 112-50.1 112-112s-50.1-112-112-112l-48 0L32 192zm352 64l16 0c26.5 0 48 21.5 48 48s-21.5 48-48 48l-16 0 0-96zM224 24c0-13.3-10.7-24-24-24s-24 10.7-24 24c0 38.9 23.4 59.4 39.1 73.1l1.1 1C232.5 112.3 240 119.9 240 136c0 13.3 10.7 24 24 24s24-10.7 24-24c0-38.9-23.4-59.4-39.1-73.1l-1.1-1C231.5 47.7 224 40.1 224 24z"/></svg>
                            Boire un café ensemble
                        </a>
                        <a
                            href="mailto:contact@overcode.fr"
                            className="rounded-md bg-accent px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-secondary focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent inline-flex gap-2 items-center"
                        >
                            <EnvelopeIcon className="w-5"/>Discuter de votre projet
                        </a>
                    </div>
                </div>
                <div className="mt-24 border-t border-gray-900/10 pt-12 xl:grid xl:grid-cols-3 xl:gap-8">
                    <Image
                        width={300}
                        height={40}
                        alt="Logo OverCode"
                        src="/images/overcode-logo.webp"
                        className="h-9 w-auto"
                    />
                    <div className="mt-16 grid grid-cols-4 gap-8 xl:col-span-2 xl:mt-0">
                        <div>
                            <h3 className="text-sm/6 font-semibold text-gray-950">Plan du site</h3>
                            <ul role="list" className="mt-6 space-y-4">
                                {navigation.solutions.map((item) => (
                                    <li key={item.name}>
                                        <a href={item.href} className="text-sm/6 text-gray-600 hover:text-gray-900">
                                            {item.name}
                                        </a>
                                    </li>
                                ))}
                            </ul>
                        </div>
                        <div className="mt-10 md:mt-0">
                            <h3 className="text-sm/6 font-semibold text-gray-950">Liens divers</h3>
                            <ul role="list" className="mt-6 space-y-4">
                                {navigation.legal.map((item) => (
                                    <li key={item.name}>
                                        <a href={item.href} className="text-sm/6 text-gray-600 hover:text-gray-900">
                                            {item.name}
                                        </a>
                                    </li>
                                ))}
                            </ul>
                        </div>
                        <div className="mt-10 md:mt-0">
                            <h3 className="text-sm/6 font-semibold text-gray-950">Réseaux sociaux</h3>
                            <ul role="list" className="mt-6 space-y-4">
                                {navigation.socials.map((item) => (
                                    <li key={item.name}>
                                        <a href={item.href} target="_blank" rel="noopener noreferrer" className="text-sm/6 text-gray-600 hover:text-gray-900">
                                            {item.name}
                                        </a>
                                    </li>
                                ))}
                            </ul>
                        </div>
                        <div className="mt-10 md:mt-0">
                            <h3 className="text-sm/6 font-semibold text-gray-950">Liens divers</h3>
                            <ul role="list" className="mt-6 space-y-4">
                                {navigation.projects.map((item) => (
                                    <li key={item.name}>
                                        <a href={item.href} target="_blank" rel="noopener noreferrer" className="text-sm/6 text-gray-600 hover:text-gray-900">
                                            {item.name}
                                        </a>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>
                </div>
                <div className="mt-12 border-t border-gray-900/10 pt-8 md:flex md:items-center md:justify-between">
                    <div className="flex gap-x-6 md:order-2">
                        {navigation.social.map((item) => (
                            <a key={item.name} href={item.href} target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-gray-800">
                                <span className="sr-only">{item.name}</span>
                                <item.icon aria-hidden="true" className="size-6" />
                            </a>
                        ))}
                    </div>
                    <p className="mt-8 text-sm/6 text-gray-600 md:order-1 md:mt-0">
                        &copy; 2021-{ year } <span className={'text-primary font-medium'}>OverCode</span>. Tous droits réservés.
                    </p>
                </div>
            </div>
        </footer>
    )
}