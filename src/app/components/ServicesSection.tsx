import {
    GlobeAltIcon,
    ComputerDesktopIcon,
    Cog6ToothIcon,
    FingerPrintIcon,
    UsersIcon, DevicePhoneMobileIcon,
} from '@heroicons/react/20/solid'

const features = [
    {
        name: 'Site vitrine/e-commerce.',
        description: 'Nous concevons des sites vitrines et boutiques en ligne sur mesure, modernes et optimisés pour le référencement naturel (SEO), afin de présenter votre activité et vendre vos produits efficacement.',
        icon: ComputerDesktopIcon,
    },
    {
        name: 'Application mobile.',
        description: 'Développement d\'applications mobiles natives ou hybrides (iOS & Android), intuitives et performantes, pour répondre aux besoins spécifiques de vos utilisateurs et renforcer votre présence mobile.',
        icon: DevicePhoneMobileIcon,
    },
    {
        name: 'CMS.',
        description: 'Mise en place, personnalisation et optimisation de CMS comme WordPress ou HubSpot, pour une gestion autonome et simplifiée de votre contenu en ligne.',
        icon: GlobeAltIcon,
    },
    {
        name: 'Logiciel sur-mesure/métier.',
        description: 'Développement de solutions logicielles personnalisées, parfaitement adaptées à vos processus métiers, pour gagner en efficacité, productivité et compétitivité.',
        icon: FingerPrintIcon,
    },
    {
        name: 'API.',
        description: 'Conception et intégration d’API robustes pour connecter vos applications entre elles, automatiser vos flux de données et faciliter les échanges avec des services tiers.',
        icon: Cog6ToothIcon,
    },
    {
        name: 'Formations/conseils.',
        description: 'Nous proposons des formations personnalisées et du conseil technique sur les technologies web et mobiles utilisées dans vos projets, pour monter en compétence ou faire les bons choix stratégiques.',
        icon: UsersIcon,
    },
]

export default function ServicesSection() {
    return (
        <div className="bg-white py-8 sm:py-32" id="services">
            <div className="mx-auto max-w-7xl px-6 lg:px-8">
                <div className="mx-auto max-w-2xl text-center">
                    <h2 className="text-base/7 font-semibold text-secondary">Services</h2>
                    <p className="text-balance text-4xl font-semibold tracking-tight text-gray-900 sm:text-5xl">
                        Développez vos projets avec nous
                    </p>
                    <p className="mt-2 text-lg/8 text-gray-600">Retrouvez ici les différents services proposés par OverCode, si vous ne trouvez pas votre besoin, n&apos;hésitez pas à nous contacter pour en discuter et étudier vos besoins ensemble.</p>
                </div>
            </div>
            <div className="mx-auto mt-16 max-w-7xl px-6 sm:mt-20 md:mt-24 lg:px-8">
                <dl className="mx-auto grid max-w-2xl grid-cols-1 gap-x-6 gap-y-10 text-base/7 text-gray-600 sm:grid-cols-2 lg:mx-0 lg:max-w-none lg:grid-cols-3 lg:gap-x-8 lg:gap-y-16">
                    {features.map((feature) => (
                        <div key={feature.name} className="relative pl-9">
                            <dt className="inline font-semibold text-gray-900">
                                <feature.icon aria-hidden="true" className="absolute left-1 top-1 size-5 text-primary" />
                                {feature.name}
                            </dt>{' '}
                            <dd className="inline">{feature.description}</dd>
                        </div>
                    ))}
                </dl>
            </div>
        </div>
    )
}
