import { ChevronRightIcon, HomeIcon } from '@heroicons/react/20/solid'

const pages = [
    { name: 'Mentions légales', href: '#', current: true },
]

export default function NavbarSectionMentions() {
    return (
        <div>
            <nav aria-label="Breadcrumb" className="flex">
                <ol role="list" className="flex items-center space-x-4">
                    <li>
                        <div>
                            <a href="http://overcode.fr" className="text-primary hover:text-secondary">
                                <HomeIcon aria-hidden="true" className="size-5 shrink-0" />
                                <span className="sr-only">Accueil</span>
                            </a>
                        </div>
                    </li>
                    {pages.map((page) => (
                        <li key={page.name}>
                            <div className="flex items-center">
                                <ChevronRightIcon aria-hidden="true" className="size-5 shrink-0 text-primary" />
                                <a
                                    href={page.href}
                                    aria-current={page.current ? 'page' : undefined}
                                    className="ml-4 text-sm font-bold text-primary hover:text-accent"
                                >
                                    {page.name}
                                </a>
                            </div>
                        </li>
                    ))}
                </ol>
            </nav>
            <div className="mt-2 text-center">
                <div className="min-w-0 flex-1">
                    <h1 className="text-2xl/7 font-bold text-primary sm:truncate sm:text-3xl sm:tracking-tight">
                        { 'Mentions légales' }
                    </h1>
                </div>
            </div>
        </div>
    )
}
