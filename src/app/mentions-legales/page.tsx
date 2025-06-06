import NavbarSectionMentions from "@/app/components/NavbarSectionMentions";

export default function Cgv() {
    return (
        <div className="bg-white py-8 sm:py-32">
            <div className="mx-auto max-w-7xl px-6 lg:px-8">
                <NavbarSectionMentions/>
                <ul className="px-0 sm:px-32 gap-y-4">
                    <li className="mt-8">
                        <h2 className="text-xl font-medium text-gray-900 mb-2">Éditeur du site</h2>
                        <p className="text-base text-gray-700">
                            Le présent site est édité par :
                            <br />
                            <strong>OverCode - Montassier Bryan</strong>
                            <br />
                            Statut : Entreprise individuelle
                            <br />
                            SIRET : 89930429900014
                            <br />
                            Adresse : 10 Rue Cécile Sauvage, 85000 La Roche-sur-Yon
                            <br />
                            Téléphone : 06 22 05 07 88
                            <br />
                            Email : <a href="mailto:contact@overcode.fr">contact@overcode.fr</a>
                            <br />
                            Directeur de la publication : Montassier Bryan
                        </p>
                    </li>
                    <li className="mt-4">
                        <h2 className="text-xl font-medium text-gray-900 mb-2">Hébergeur du site</h2>
                        <p className="text-base text-gray-700">
                            Le site est hébergé par :
                            <br />
                            <strong>Netlify, Inc.</strong>
                            <br />
                            Société de droit américain
                            <br />
                            Adresse : 44 Montgomery Street, Suite 300, San Francisco, California 94104, États-Unis
                            <br />
                            Site web : <a href="https://www.netlify.com" target="_blank" rel="noopener noreferrer">netlify.com</a>
                        </p>
                    </li>
                    <li className="mt-4">
                        <h2 className="text-xl font-medium text-gray-900 mb-2">Propriété intellectuelle</h2>
                        <p className="text-base text-gray-700">
                            L’ensemble du contenu du site (textes, graphismes, logo, code, etc.) est la propriété exclusive de OverCode, sauf indication contraire.
                            <br />
                            Toute reproduction, représentation, modification, publication, adaptation de tout ou partie des éléments du site, quel que soit le moyen ou le procédé utilisé, est interdite sans l’autorisation écrite préalable de OverCode.
                            <br />
                            Toute exploitation non autorisée pourra être poursuivie conformément aux dispositions du Code de la propriété intellectuelle.
                        </p>
                    </li>
                    <li className="mt-4">
                        <h2 className="text-xl font-medium text-gray-900 mb-2">Protection des données personnelles</h2>
                        <p className="text-base text-gray-700">
                            Le site ne collecte aucune donnée personnelle.
                            <br />
                            Aucune information nominative n&apos;est stockée, transmise ou traitée via ce site.
                        </p>
                    </li>
                    <li className="mt-4">
                        <h2 className="text-xl font-medium text-gray-900 mb-2">Cookies</h2>
                        <p className="text-base text-gray-700">
                            Le site peut utiliser des cookies à des fins de mesure d’audience ou de bon fonctionnement.
                            <br/>
                            L’utilisateur peut s’opposer à l’enregistrement de ces cookies en configurant son navigateur ou via la bannière dédiée lors de la première visite.
                        </p>
                    </li>
                    <li className="mt-4">
                        <h2 className="text-xl font-medium text-gray-900 mb-2">Responsabilité</h2>
                        <p className="text-base text-gray-700">
                            OverCode ne saurait être tenue responsable des éventuelles erreurs ou omissions dans les informations diffusées, ni de l’usage qui pourrait être fait des informations accessibles sur le site.
                        </p>
                    </li>
                </ul>
            </div>
        </div>
    );
}
