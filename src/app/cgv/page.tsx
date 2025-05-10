import NavbarSection from "@/app/components/NavbarSection";

export default function Cgv() {
    return (
        <div className="bg-white py-8 sm:py-32">
            <div className="mx-auto max-w-7xl px-6 lg:px-8">
                <NavbarSection/>
                <ul className="px-0 sm:px-32 gap-y-4">
                    <li className="mt-8">
                        <h2 className="text-xl font-medium text-gray-900 mb-2">1. Préambule</h2>
                        <p className="text-base text-gray-700">
                            Les présentes Conditions Générales de Vente (CGV) régissent les relations contractuelles entre OverCode, entreprise individuelle gérée par Montassier Bryan, et tout client ayant recours à ses services de développement web et mobile, formation/conseils ou autres services proposés.
                            <br/>
                            Toute commande implique l&apos;acceptation pleine, entière et sans réserve des présentes CGV.
                        </p>
                    </li>
                    <li className="mt-4">
                        <h2 className="text-xl font-medium text-gray-900 mb-2">2. Champ d&apos;application</h2>
                        <p className="text-base text-gray-700">
                            Les présentes CGV s&apos;appliquent à toutes les prestations réalisées par OverCode, sauf dérogation écrite expressément acceptée par les deux parties. Elles prévalent sur tout autre document contradictoire.
                        </p>
                    </li>
                    <li className="mt-4">
                        <h2 className="text-xl font-medium text-gray-900 mb-2">3. Commande et engagement</h2>
                        <p className="text-base text-gray-700">
                            Toute commande ou modification de commande doit être formulée par écrit (email, devis signé, bon de commande) et validée expressément par OverCode.
                            <br/>
                            Aucune prestation ne débute sans confirmation formelle de la commande.
                            <br/>
                            Toute demande complémentaire, modification ou ajustement intervenant en cours de projet doit faire l&apos;objet d&apos;un accord écrit. À défaut, OverCode se réserve le droit de refuser ou de revaloriser les délais et tarifs.
                            <br/>
                            Exemple : une demande orale de modification de design ou de fonctionnalité ne sera pas prise en compte sans validation écrite du client et d&apos;OverCode.
                        </p>
                    </li>
                    <li className="mt-4">
                        <h2 className="text-xl font-medium text-gray-900 mb-2">4. Obligations du client</h2>
                        <p className="text-base text-gray-700">
                            Le client s&apos;engage à :
                            <ul role="list">
                                <li className="list-disc ml-6">Fournir toutes les informations nécessaires à la bonne exécution des prestations</li>
                                <li className="list-disc ml-6">Valider les livrables dans les délais convenus</li>
                                <li className="list-disc ml-6">Exprimer ses besoins de manière claire et complète</li>
                            </ul>
                            <br/>
                            OverCode ne pourra être tenue responsable des conséquences d&apos;un brief incomplet, contradictoire ou imprécis.
                        </p>
                    </li>
                    <li className="mt-4">
                        <h2 className="text-xl font-medium text-gray-900 mb-2">5. Délais et exécution</h2>
                        <p className="text-base text-gray-700">
                            Les délais de livraison sont fournis à titre indicatif sauf mention contraire dans le devis. Ils peuvent être révisés en cas de demandes nouvelles ou de retards dus au client.
                            <br/>
                            En cas de non-paiement, de demandes non validées, ou de force majeure, OverCode se réserve le droit de suspendre les prestations en cours, sans préjudice.
                        </p>
                    </li>
                    <li className="mt-4">
                        <h2 className="text-xl font-medium text-gray-900 mb-2">6. Prix, acomptes et paiements</h2>
                        <p className="text-base text-gray-700">
                            Les prix sont exprimés en euros, hors taxes (HT) ou toutes taxes comprises (TTC) selon mention.
                            <br/>
                            Sauf disposition contraire, un acompte minimum de 30 % est exigé à la commande. Le solde est payable selon les modalités définies au devis.
                            <br/>
                            En cas de retard de paiement :
                            <ul role="list">
                                <li className="list-disc ml-6">Des pénalités de retard de trois fois le taux d&apos;intérêt légal seront automatiquement appliquées</li>
                                <li className="list-disc ml-6">Une indemnité forfaitaire de 40 € pour frais de recouvrement sera exigible</li>
                                <li className="list-disc ml-6">OverCode pourra suspendre toute prestation en cours</li>
                            </ul>
                            <br/>
                            Aucune réduction unilatérale du montant facturé ne sera acceptée, même en cas de prétendue insatisfaction sans fondement contractuel écrit.
                        </p>
                    </li>
                    <li className="mt-4">
                        <h2 className="text-xl font-medium text-gray-900 mb-2">7. Non-conformité et réclamations</h2>
                        <p className="text-base text-gray-700">
                            Le client dispose d&apos;un délai de 7 jours calendaires à compter de la livraison pour formuler toute réclamation par écrit.
                            <br/>
                            Passé ce délai, les livrables seront considérés comme validés.
                            <br/>
                            Aucune réclamation ne pourra justifier un refus de paiement ou une réduction sans accord d&apos;OverCode.
                        </p>
                    </li>
                    <li className="mt-4">
                        <h2 className="text-xl font-medium text-gray-900 mb-2">8. Propriété intellectuelle</h2>
                        <p className="text-base text-gray-700">
                            Tous les livrables réalisés par OverCode demeurent sa propriété intellectuelle jusqu&apos;au paiement intégral des sommes dues.
                            <br/>
                            Une cession des droits (code source, design, etc.) peut être prévue, mais uniquement par écrit.
                            <br/>
                            Toute reproduction, modification ou exploitation non autorisée pourra entraîner des poursuites.
                        </p>
                    </li>
                    <li className="mt-4">
                        <h2 className="text-xl font-medium text-gray-900 mb-2">9. Responsabilités</h2>
                        <p className="text-base text-gray-700">
                            OverCode est tenue à une obligation de moyens, non de résultats. Sa responsabilité ne peut être engagée qu&apos;en cas de faute prouvée.
                            <br/>
                            Elle est en tout état de cause limitée au montant total de la commande.
                            <br/>
                            OverCode décline toute responsabilité pour les dommages indirects : perte de données, préjudice commercial, perte de chiffre d&apos;affaires, etc.
                        </p>
                    </li>
                    <li className="mt-4">
                        <h2 className="text-xl font-medium text-gray-900 mb-2">10. Confidentialité</h2>
                        <p className="text-base text-gray-700">
                            Les parties s&apos;engagent à la confidentialité des informations, données, et documents échangés.
                            <br/>
                            Sauf mention contraire écrite du client, OverCode est autorisée à mentionner le nom du client et la nature de la prestation réalisée à titre de référence.
                        </p>
                    </li>
                    <li className="mt-4">
                        <h2 className="text-xl font-medium text-gray-900 mb-2">11. Résiliation</h2>
                        <p className="text-base text-gray-700">
                            Le client peut résilier la prestation avec un préavis écrit de 30 jours. Toute prestation entamée sera facturée.
                            <br/>
                            OverCode pourra également résilier immédiatement en cas de non-paiement ou de manquement grave du client.
                            <br/>
                            Aucun remboursement ne sera accordé hors dispositions prévues dans une éventuelle garantie commerciale écrite.
                        </p>
                    </li>
                    <li className="mt-4">
                        <h2 className="text-xl font-medium text-gray-900 mb-2">12. Litiges et droit applicable</h2>
                        <p className="text-base text-gray-700">
                            Les présentes CGV sont régies par le droit français.
                            <br/>
                            En cas de litige, les parties s&apos;efforceront de trouver une solution amiable dans un délai de 30 jours. À défaut, la juridiction compétente sera celle du siège social d&apos;OverCode, même en cas de pluralité de défendeurs.
                        </p>
                    </li>
                    <li className="mt-4">
                        <h2 className="text-xl font-medium text-gray-900 mb-2">13. Force majeure</h2>
                        <p className="text-base text-gray-700">
                            OverCode ne pourra être tenue responsable en cas d&apos;impossibilité d&apos;exécution due à un cas de force majeure, tel que défini par la jurisprudence française.
                            <br/>
                            Si l&apos;empêchement dure plus de 30 jours consécutifs, chaque partie pourra résilier le contrat sans indemnité.
                        </p>
                    </li>
                    <li className="mt-4">
                        <h2 className="text-xl font-medium text-gray-900 mb-2">14. Validité partielle</h2>
                        <p className="text-base text-gray-700">
                            Si l&apos;une des clauses des présentes CGV est déclarée invalide, les autres restent pleinement applicables.
                        </p>
                    </li>
                </ul>
            </div>
        </div>
    );
}
