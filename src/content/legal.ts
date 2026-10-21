// Terms and Privacy — the canonical legal text (moved from the old scripts/legal.js).
// Paragraphs may contain trusted inline markup (mailto links). Keep the 4 languages in sync.
import type { Locale } from "@/i18n/locales";

export const CONTACT_EMAIL = "hi@routewise.app";

export const legalDocuments = {
  "en": {
    "metaTitle": "RouteWise - Terms and Privacy",
    "brandSubtitle": "Delivery routes with less wasted time.",
    "home": "Home",
    "privacyNav": "Privacy",
    "termsNav": "Terms",
    "kicker": "Legal",
    "title": "Privacy policy and terms on one page.",
    "intro": "These documents explain how RouteWise uses data, processes subscriptions, and defines the conditions for using the app.",
    "footer": "Optimize routes, import addresses, and send deliveries to the right map.",
    "privacy": {
      "title": "RouteWise Privacy Policy",
      "updated": "Last updated: October 21, 2026",
      "intro": "This policy explains what information RouteWise uses, why it is used, who processes it, and what choices you have over your data.",
      "sections": [
        [
          "1. Overview",
          [
            "RouteWise helps delivery drivers organize stops, import address lists, optimize routes, open navigation in external apps, and track delivery history.",
            "This policy applies to the RouteWise app, the routewise.app website, and the account, address search, import, label scanning, route, backup, and subscription features connected to the product."
          ]
        ],
        [
          "2. Data you provide",
          [
            "Account data: email address, user identifier, language preference, plan, and subscription status.",
            "Delivery data: stops (names, addresses, coordinates, and notes), delivery history, address lists and files you import, and photos of labels or documents you scan, plus your app settings such as the navigation app you prefer."
          ]
        ],
        [
          "3. Data on your device and backup",
          [
            "Your stops and delivery history are stored on your device, linked to your account. Session tokens are kept in the device's secure storage.",
            "When backup and sync is available in your version of the app, your stops and delivery history are also stored on RouteWise servers, linked to your account, so you can restore them after reinstalling or on another device. When you delete a stop, it is removed from our servers; we keep only its identifier and deletion date so your other devices remove it too."
          ]
        ],
        [
          "4. Location, maps, and routes",
          [
            "With your permission, the app uses your current location on the device to center the map and order your stops.",
            "When you search for an address or optimize a route, we send the search text, your current location (as a starting point or to rank results), and your stops' addresses and coordinates through our servers to Google Maps Platform. We do not keep a history of your location."
          ]
        ],
        [
          "5. Label scanning, imports, and images",
          [
            "When you scan a label, the text is read on your device first. If that isn't enough, a reduced copy of the photo is sent to RouteWise servers and to OpenAI to extract the address.",
            "We send the files, text, and photos you import to RouteWise servers and process them with OpenAI and Google Maps Platform to build the review list. RouteWise does not keep these photos or files after processing; OpenAI and Google may keep what they receive for a limited time under their own policies. Only use content you are allowed to process."
          ]
        ],
        [
          "6. Account and email",
          [
            "We use Supabase for sign-in and account data. Supabase also hosts the RouteWise database.",
            "We send account emails, such as email confirmation and password reset, through an email delivery provider."
          ]
        ],
        [
          "7. Subscriptions and payments",
          [
            "If you subscribe to RouteWise Pro, the App Store (on iPhone) or Google Play (on Android) handles the purchase, and RevenueCat manages your subscription status using your RouteWise user identifier.",
            "RouteWise does not receive your payment card data from Apple, Google, or RevenueCat."
          ]
        ],
        [
          "8. Usage limits and diagnostics",
          [
            "We count, per account and per day, the address lookups, label scans, and imports you use, to apply your plan's limits and show your remaining usage.",
            "When the app crashes or hits an error, we send a report to Sentry with technical details (app version, device, request identifier) and your user identifier, without your addresses, stop names, photos, email, or tokens. Our server logs follow the same rule. On routewise.app, we count page visits with Vercel Web Analytics, which uses no cookies and does not identify you. RouteWise does not show ads, does not sell your data, and does not track you across other apps or websites."
          ]
        ],
        [
          "9. Service providers and international transfers",
          [
            "RouteWise uses these providers, each only for its function: Supabase (accounts and database), Render (RouteWise servers), Vercel (website and its visit counts), Google Maps Platform (address search, places, and routes), OpenAI (reading addresses from photos and imports), Apple, Google Play, and RevenueCat (subscriptions), Sentry (error reports), and an email delivery provider (account emails).",
            "These providers may process data outside your country, including in the United States, under their own security and privacy obligations."
          ]
        ],
        [
          "10. Your choices",
          [
            "You can deny location or camera access; some features will be limited or unavailable.",
            "You can delete your account in the app. This removes your profile, stops, delivery history, data backed up on our servers, usage records, and other RouteWise records tied to your user identifier.",
            "You can also request access to, correction of, or deletion of your data by writing to <a href=\"mailto:hi@routewise.app\">hi@routewise.app</a>."
          ]
        ],
        [
          "11. Retention and security",
          [
            "We keep your data while your account is active and as needed to provide the service, comply with legal obligations, resolve disputes, and protect the platform.",
            "We delete your account from RouteWise systems immediately. Copies kept by our providers, such as database backups, error reports, and payment-store records, expire on those providers' retention schedules (error reports, for example, after up to 90 days), unless the law requires keeping them longer.",
            "No system is 100% secure. We use reasonable protection measures, but cannot guarantee absolute security against all threats."
          ]
        ],
        [
          "12. Brazilian LGPD rights",
          [
            "For users in Brazil, personal data processing follows the Brazilian General Personal Data Protection Law, Law No. 13,709/2018 (LGPD). RouteWise acts as controller for personal data used for account, support, subscription, and app operation, except where a service provider acts as an independent controller for its own services.",
            "Legal bases may include contract performance, consent, compliance with legal or regulatory obligations, regular exercise of rights, legitimate interests, and fraud prevention, depending on the feature and context.",
            "You may request confirmation of processing, access, correction, anonymization, blocking or deletion of unnecessary or non-compliant data, portability where applicable, information about sharing, review of automated decisions where applicable, and withdrawal of consent.",
            "To exercise LGPD rights or contact the privacy channel, email <a href=\"mailto:hi@routewise.app\">hi@routewise.app</a>. You may also file a complaint with Brazil’s National Data Protection Authority (ANPD) when applicable."
          ]
        ],
        [
          "13. Contact",
          [
            "For privacy questions or data requests, contact <a href=\"mailto:hi@routewise.app\">hi@routewise.app</a>."
          ]
        ]
      ]
    },
    "terms": {
      "title": "RouteWise Terms of Use",
      "updated": "Last updated: June 9, 2026",
      "intro": "These terms explain the conditions for using the RouteWise app, the website, and RouteWise Pro.",
      "sections": [
        [
          "1. Acceptance and parties",
          [
            "By installing, accessing, or using RouteWise, you agree to these terms. If you do not agree, do not use the app or website.",
            "These terms are between you and RouteWise. Apple is not responsible for the app, its content, or support."
          ]
        ],
        [
          "2. Product scope",
          [
            "RouteWise is a productivity tool for delivery drivers. It helps organize destinations, import address lists, optimize routes, and open navigation in compatible apps.",
            "RouteWise is an assistance tool. You remain responsible for driving decisions, road safety, and compliance with local laws."
          ]
        ],
        [
          "3. License",
          [
            "We grant you a limited, personal, non-exclusive, non-transferable, revocable, and non-sublicensable license to use the app on devices you own or control.",
            "Use on Apple devices must also comply with Apple Media Services rules and other applicable App Store terms. Android use must also comply with Google Play terms."
          ]
        ],
        [
          "4. Use restrictions",
          [
            "You may not copy, distribute, sell, rent, sublicense, modify, or exploit the app beyond what these terms allow.",
            "You may not reverse engineer, decompile, disassemble, attempt to extract source code, bypass technical protection measures, or create derivative works from the app except where applicable law prohibits this restriction."
          ]
        ],
        [
          "5. Third-party services and technical data",
          [
            "RouteWise depends on third-party services for maps, autocomplete, routing, AI/OCR, authentication, sync, subscriptions, diagnostics, and infrastructure.",
            "By using RouteWise, you agree that technical data, diagnostics, usage metrics, errors, and operational data needed to maintain, secure, and improve the app may be collected and processed."
          ]
        ],
        [
          "6. RouteWise Pro subscription",
          [
            "RouteWise may offer auto-renewable subscriptions under the RouteWise Pro name, including RouteWise Pro Monthly with a 1-month term and RouteWise Pro Annual with a 1-year term.",
            "Final pricing varies by country, currency, taxes, and store. The applicable price is always shown in the purchase flow and store confirmation screen before any charge.",
            "The subscription renews automatically at the end of each period unless canceled at least 24 hours before the end of the current period for App Store purchases. Equivalent Google Play rules apply to Android purchases.",
            "You can review, manage, or cancel the subscription in Apple ID subscription settings or Google Play subscriptions. Refunds follow the policies of the applicable store."
          ]
        ],
        [
          "7. Support, warranty, and Apple",
          [
            "Maintenance and support for RouteWise are provided by RouteWise, not Apple. Contact hi@routewise.app for support.",
            "If the app fails to conform to an applicable warranty, you may notify Apple. Apple may refund the purchase price paid for the app where applicable. Other than that, Apple has no warranty, maintenance, or support obligation for RouteWise.",
            "Apple and its subsidiaries are third-party beneficiaries of these terms and, upon your acceptance, may enforce these terms against you in that capacity."
          ]
        ],
        [
          "8. Intellectual property and legal compliance",
          [
            "All rights in RouteWise, including software, brand, design, text, structure, and product content, belong to RouteWise or its licensors.",
            "You represent that you are not located in a country subject to a U.S. government embargo, that you are not in a country designated by the U.S. government as supporting terrorism, and that you are not listed on any U.S. government prohibited or restricted party list."
          ]
        ],
        [
          "9. Availability and limitation of liability",
          [
            "GPS, distance, time, traffic, geocoding, OCR, and route optimization depend on permissions, device signal, entered data, and third-party services. Results should be treated as estimates.",
            "To the maximum extent permitted by law, RouteWise is not liable for indirect, incidental, special, punitive, or consequential damages related to app use, data loss, service unavailability, routing decisions, or third-party provider behavior."
          ]
        ],
        [
          "10. Changes and contact",
          [
            "We may update these terms from time to time. The latest version published on the website should be treated as the current version.",
            "Contact: <a href=\"mailto:hi@routewise.app\">hi@routewise.app</a>."
          ]
        ]
      ]
    }
  },
  "pt": {
    "metaTitle": "RouteWise - Termos e Privacidade",
    "brandSubtitle": "Rotas de entrega com menos desperdício.",
    "home": "Início",
    "privacyNav": "Privacidade",
    "termsNav": "Termos",
    "kicker": "Legal",
    "title": "Política de privacidade e termos em uma página.",
    "intro": "Estes documentos explicam como o RouteWise usa dados, processa assinaturas e define as condições de uso do app.",
    "footer": "Otimize rotas, importe endereços e envie entregas para o mapa certo.",
    "privacy": {
      "title": "Política de Privacidade do RouteWise",
      "updated": "Última atualização: 21 de outubro de 2026",
      "intro": "Esta política explica quais informações o RouteWise usa, por que elas são usadas, quem as processa e quais escolhas você tem sobre seus dados.",
      "sections": [
        [
          "1. Visão geral",
          [
            "O RouteWise ajuda entregadores a organizar paradas, importar listas de endereços, otimizar rotas, abrir a navegação em apps externos e acompanhar o histórico de entregas.",
            "Esta política se aplica ao app RouteWise, ao site routewise.app e aos recursos de conta, busca de endereços, importação, leitura de etiquetas, rotas, backup e assinatura ligados ao produto."
          ]
        ],
        [
          "2. Dados que você fornece",
          [
            "Dados de conta: e-mail, identificador de usuário, preferência de idioma, plano e estado da assinatura.",
            "Dados de entrega: paradas (nomes, endereços, coordenadas e observações), histórico de entregas, listas e arquivos de endereços que você importa e fotos de etiquetas ou documentos que você lê com a câmera, além das configurações do app, como o app de navegação preferido."
          ]
        ],
        [
          "3. Dados no seu aparelho e backup",
          [
            "Suas paradas e seu histórico de entregas ficam armazenados no seu aparelho, ligados à sua conta. Os tokens de sessão ficam no armazenamento seguro do aparelho.",
            "Quando o backup e a sincronização estiverem disponíveis na sua versão do app, suas paradas e seu histórico de entregas também ficam armazenados nos servidores do RouteWise, ligados à sua conta, para você recuperá-los ao reinstalar o app ou em outro aparelho. Quando você exclui uma parada, ela é removida dos nossos servidores; guardamos só o identificador e a data da exclusão para que seus outros aparelhos também a removam."
          ]
        ],
        [
          "4. Localização, mapas e rotas",
          [
            "Com a sua permissão, o app usa a sua localização atual no aparelho para centralizar o mapa e ordenar suas paradas.",
            "Quando você busca um endereço ou otimiza uma rota, enviamos o texto da busca, a sua localização atual (como ponto de partida ou para ordenar os resultados) e os endereços e coordenadas das suas paradas, pelos nossos servidores, à Google Maps Platform. Não guardamos histórico da sua localização."
          ]
        ],
        [
          "5. Leitura de etiquetas, importação e imagens",
          [
            "Quando você lê uma etiqueta, o texto é lido primeiro no seu aparelho. Se isso não bastar, uma cópia reduzida da foto é enviada aos servidores do RouteWise e à OpenAI para extrair o endereço.",
            "Enviamos os arquivos, textos e fotos que você importa aos servidores do RouteWise e os processamos com a OpenAI e a Google Maps Platform para montar a lista de revisão. O RouteWise não guarda essas fotos e arquivos depois do processamento; a OpenAI e o Google podem mantê-los por tempo limitado, conforme suas próprias políticas. Use apenas conteúdo que você tem autorização para processar."
          ]
        ],
        [
          "6. Conta e e-mail",
          [
            "Usamos o Supabase para o login e os dados de conta. O Supabase também hospeda o banco de dados do RouteWise.",
            "Enviamos os e-mails da conta, como confirmação de e-mail e redefinição de senha, por um provedor de envio de e-mails."
          ]
        ],
        [
          "7. Assinaturas e pagamentos",
          [
            "Se você assinar o RouteWise Pro, a App Store (no iPhone) ou o Google Play (no Android) cuida da compra, e o RevenueCat gerencia o estado da sua assinatura com o seu identificador de usuário do RouteWise.",
            "O RouteWise não recebe os dados do seu cartão de pagamento da Apple, do Google nem do RevenueCat."
          ]
        ],
        [
          "8. Limites de uso e diagnóstico",
          [
            "Contamos, por conta e por dia, as buscas de endereço, leituras de etiqueta e importações que você usa, para aplicar os limites do seu plano e mostrar quanto ainda resta.",
            "Quando o app trava ou encontra um erro, enviamos um relatório ao Sentry com detalhes técnicos (versão do app, aparelho, identificador da requisição) e o seu identificador de usuário, sem seus endereços, nomes de paradas, fotos, e-mail ou tokens. Os logs dos nossos servidores seguem a mesma regra. No site routewise.app, contamos as visitas às páginas com o Vercel Web Analytics, que não usa cookies e não identifica você. O RouteWise não exibe anúncios, não vende seus dados e não rastreia você em outros apps ou sites."
          ]
        ],
        [
          "9. Prestadores de serviço e transferência internacional",
          [
            "O RouteWise usa estes prestadores, cada um só para a sua função: Supabase (contas e banco de dados), Render (servidores do RouteWise), Vercel (site e contagem de visitas), Google Maps Platform (busca de endereços, lugares e rotas), OpenAI (leitura de endereços em fotos e importações), Apple, Google Play e RevenueCat (assinaturas), Sentry (relatórios de erro) e um provedor de envio de e-mails (e-mails da conta).",
            "Esses prestadores podem processar dados fora do seu país, inclusive nos Estados Unidos, conforme suas próprias obrigações de segurança e privacidade."
          ]
        ],
        [
          "10. Suas escolhas",
          [
            "Você pode negar o acesso à localização ou à câmera; alguns recursos ficarão limitados ou indisponíveis.",
            "Você pode excluir sua conta no app. Isso remove seu perfil, paradas, histórico de entregas, dados guardados em backup nos nossos servidores, registros de uso e outros registros do RouteWise ligados ao seu identificador de usuário.",
            "Você também pode pedir acesso, correção ou exclusão dos seus dados escrevendo para <a href=\"mailto:hi@routewise.app\">hi@routewise.app</a>."
          ]
        ],
        [
          "11. Retenção e segurança",
          [
            "Mantemos seus dados enquanto sua conta estiver ativa e pelo tempo necessário para fornecer o serviço, cumprir obrigações legais, resolver disputas e proteger a plataforma.",
            "Excluímos sua conta dos sistemas do RouteWise imediatamente. Cópias mantidas pelos nossos prestadores, como backups do banco de dados, relatórios de erro e registros das lojas de pagamento, expiram conforme os prazos de retenção desses prestadores (os relatórios de erro, por exemplo, em até 90 dias), salvo quando a lei exigir guardá-las por mais tempo.",
            "Nenhum sistema é 100% seguro. Usamos medidas razoáveis de proteção, mas não podemos garantir segurança absoluta contra todas as ameaças."
          ]
        ],
        [
          "12. Direitos na LGPD",
          [
            "Para usuários no Brasil, o tratamento de dados pessoais segue a Lei Geral de Proteção de Dados Pessoais, Lei nº 13.709/2018 (LGPD). O RouteWise atua como controlador dos dados pessoais usados para conta, suporte, assinatura e operação do app, salvo quando um prestador de serviço atua como controlador independente nos próprios serviços.",
            "As bases legais podem incluir execução de contrato, consentimento, cumprimento de obrigação legal ou regulatória, exercício regular de direitos, legítimo interesse e prevenção à fraude, conforme o recurso usado e o contexto do tratamento.",
            "Você pode solicitar confirmação de tratamento, acesso, correção, anonimização, bloqueio ou eliminação de dados desnecessários ou tratados em desconformidade, portabilidade quando aplicável, informação sobre compartilhamento, revisão de decisões automatizadas quando houver e revogação de consentimento.",
            "Para exercer direitos previstos na LGPD ou falar com o encarregado/canal de privacidade, envie um e-mail para <a href=\"mailto:hi@routewise.app\">hi@routewise.app</a>. Se entender necessário, você também pode apresentar reclamação à Autoridade Nacional de Proteção de Dados (ANPD)."
          ]
        ],
        [
          "13. Contato",
          [
            "Para dúvidas de privacidade ou pedidos sobre seus dados, entre em contato: <a href=\"mailto:hi@routewise.app\">hi@routewise.app</a>."
          ]
        ]
      ]
    },
    "terms": {
      "title": "Termos de Uso do RouteWise",
      "updated": "Última atualização: 9 de junho de 2026",
      "intro": "Estes termos explicam as condições para usar o app RouteWise, o site e o RouteWise Pro.",
      "sections": [
        [
          "1. Aceitação e partes",
          [
            "Ao instalar, acessar ou usar o RouteWise, você concorda com estes termos. Se não concordar, não use o app nem o site.",
            "Estes termos são entre você e o RouteWise. A Apple não é responsável pelo app, pelo conteúdo ou pelo suporte do app."
          ]
        ],
        [
          "2. Escopo do produto",
          [
            "O RouteWise é uma ferramenta de produtividade para entregadores. Ele ajuda a organizar destinos, importar listas de endereços, otimizar rotas e abrir navegação em apps compatíveis.",
            "O RouteWise é uma ferramenta de apoio. Você continua responsável por suas decisões ao dirigir, pela segurança no trânsito e por cumprir leis locais."
          ]
        ],
        [
          "3. Licença",
          [
            "Concedemos a você uma licença limitada, pessoal, não exclusiva, intransferível, revogável e não sublicenciável para usar o app em dispositivos que você possui ou controla.",
            "O uso em dispositivos Apple também deve cumprir as regras dos Apple Media Services e demais termos aplicáveis da App Store. Em Android, também se aplicam os termos do Google Play."
          ]
        ],
        [
          "4. Restrições de uso",
          [
            "Você não pode copiar, distribuir, vender, alugar, sublicenciar, modificar ou explorar o app além do que estes termos permitem.",
            "Você não pode fazer engenharia reversa, decompilar, desmontar, tentar extrair o código-fonte, burlar proteções técnicas ou criar obras derivadas do app, exceto quando a lei aplicável não permitir essa restrição."
          ]
        ],
        [
          "5. Serviços de terceiros e dados técnicos",
          [
            "O RouteWise depende de serviços de terceiros para mapas, autocomplete, roteamento, IA/OCR, autenticação, sincronização, assinatura, diagnósticos e infraestrutura.",
            "Ao usar o RouteWise, você concorda que dados técnicos, diagnósticos, métricas de uso, erros e dados operacionais necessários podem ser coletados e processados para manter, proteger e melhorar o app."
          ]
        ],
        [
          "6. Assinatura RouteWise Pro",
          [
            "O RouteWise pode oferecer assinaturas auto-renováveis chamadas RouteWise Pro, incluindo RouteWise Pro Monthly, com período de 1 mês, e RouteWise Pro Annual, com período de 1 ano.",
            "O preço final varia por país, moeda, tributos e loja usada. O valor aplicável sempre aparece no fluxo de compra e na tela de confirmação da loja antes de qualquer cobrança.",
            "A assinatura renova automaticamente ao fim de cada período, salvo cancelamento pelo menos 24 horas antes do fim do período atual quando comprada pela App Store. Regras equivalentes da Google Play se aplicam para compras no Android.",
            "Você pode revisar, gerenciar ou cancelar a assinatura nas configurações de assinatura do Apple ID ou na área de assinaturas do Google Play. Reembolsos seguem as políticas da loja aplicável."
          ]
        ],
        [
          "7. Suporte, garantia e Apple",
          [
            "A manutenção e o suporte do RouteWise são fornecidos pelo RouteWise, não pela Apple. Para suporte, entre em contato por hi@routewise.app.",
            "Se o app não cumprir uma garantia aplicável, você pode notificar a Apple. Nesse caso, a Apple poderá reembolsar o preço pago pelo app, quando aplicável. Além disso, a Apple não tem obrigação de garantia, manutenção ou suporte relacionada ao RouteWise.",
            "A Apple e suas subsidiárias são beneficiárias terceiras destes termos e, após sua aceitação, poderão fazer valer estes termos contra você nessa condição."
          ]
        ],
        [
          "8. Propriedade intelectual e conformidade legal",
          [
            "Todos os direitos do RouteWise, incluindo software, marca, design, textos, estrutura e conteúdo do produto, pertencem ao RouteWise ou a seus licenciadores.",
            "Você declara que não está localizado em país sujeito a embargo do governo dos EUA, que não está em país designado pelo governo dos EUA como apoiador de terrorismo e que não está em listas governamentais de partes proibidas ou restritas."
          ]
        ],
        [
          "9. Disponibilidade e limitação de responsabilidade",
          [
            "GPS, distância, tempo, trânsito, geocodificação, OCR e otimização de rotas dependem de permissões, sinal do dispositivo, dados inseridos e serviços de terceiros. Resultados devem ser tratados como estimativas.",
            "Na máxima extensão permitida por lei, o RouteWise não se responsabiliza por danos indiretos, incidentais, especiais, punitivos ou consequenciais relacionados ao uso do app, perda de dados, indisponibilidade, decisões de rota ou comportamento de terceiros."
          ]
        ],
        [
          "10. Mudanças e contato",
          [
            "Podemos atualizar estes termos ocasionalmente. A versão mais recente publicada no site deve ser tratada como a versão vigente.",
            "Contato: <a href=\"mailto:hi@routewise.app\">hi@routewise.app</a>."
          ]
        ]
      ]
    }
  },
  "fr": {
    "metaTitle": "RouteWise - Conditions et confidentialité",
    "brandSubtitle": "Des itinéraires de livraison avec moins de temps perdu.",
    "home": "Accueil",
    "privacyNav": "Confidentialité",
    "termsNav": "Conditions",
    "kicker": "Légal",
    "title": "Politique de confidentialité et conditions sur une seule page.",
    "intro": "Ces documents expliquent comment RouteWise utilise les données, traite les abonnements et définit les conditions d’utilisation de l’app.",
    "footer": "Optimisez les itinéraires, importez les adresses et envoyez les livraisons vers la bonne carte.",
    "privacy": {
      "title": "Politique de confidentialité de RouteWise",
      "updated": "Dernière mise à jour : 21 octobre 2026",
      "intro": "Cette politique explique quelles informations RouteWise utilise, pourquoi elles sont utilisées, qui les traite et quels choix vous avez sur vos données.",
      "sections": [
        [
          "1. Aperçu",
          [
            "RouteWise aide les livreurs à organiser leurs arrêts, importer des listes d’adresses, optimiser leurs itinéraires, ouvrir la navigation dans des apps externes et suivre l’historique des livraisons.",
            "Cette politique s’applique à l’app RouteWise, au site routewise.app et aux fonctions de compte, de recherche d’adresses, d’importation, de lecture d’étiquettes, d’itinéraires, de sauvegarde et d’abonnement liées au produit."
          ]
        ],
        [
          "2. Données que vous fournissez",
          [
            "Données de compte : adresse courriel, identifiant d’utilisateur, langue préférée, forfait et état de l’abonnement.",
            "Données de livraison : arrêts (noms, adresses, coordonnées et notes), historique des livraisons, listes et fichiers d’adresses que vous importez et photos d’étiquettes ou de documents que vous numérisez, ainsi que les réglages de l’app, comme l’app de navigation que vous préférez."
          ]
        ],
        [
          "3. Données sur votre appareil et sauvegarde",
          [
            "Vos arrêts et votre historique de livraisons sont stockés sur votre appareil, liés à votre compte. Les jetons de session sont conservés dans le stockage sécurisé de l’appareil.",
            "Lorsque la sauvegarde et la synchronisation sont offertes dans votre version de l’app, vos arrêts et votre historique de livraisons sont aussi stockés sur les serveurs de RouteWise, liés à votre compte, pour que vous puissiez les récupérer après une réinstallation ou sur un autre appareil. Quand vous supprimez un arrêt, il est retiré de nos serveurs; nous conservons seulement son identifiant et la date de suppression pour que vos autres appareils le suppriment aussi."
          ]
        ],
        [
          "4. Localisation, cartes et itinéraires",
          [
            "Avec votre permission, l’app utilise votre position actuelle sur l’appareil pour centrer la carte et ordonner vos arrêts.",
            "Quand vous cherchez une adresse ou optimisez un itinéraire, nous envoyons le texte de recherche, votre position actuelle (comme point de départ ou pour classer les résultats) ainsi que les adresses et coordonnées de vos arrêts, par nos serveurs, à Google Maps Platform. Nous ne conservons pas d’historique de votre position."
          ]
        ],
        [
          "5. Lecture d’étiquettes, importation et images",
          [
            "Quand vous numérisez une étiquette, le texte est d’abord lu sur votre appareil. Si ce n’est pas suffisant, une copie réduite de la photo est envoyée aux serveurs de RouteWise et à OpenAI pour extraire l’adresse.",
            "Nous envoyons les fichiers, textes et photos que vous importez aux serveurs de RouteWise et les traitons avec OpenAI et Google Maps Platform pour préparer la liste de révision. RouteWise ne conserve pas ces photos ni ces fichiers après le traitement; OpenAI et Google peuvent conserver ce qu’ils reçoivent pendant une durée limitée selon leurs propres politiques. Utilisez seulement du contenu que vous êtes autorisé à traiter."
          ]
        ],
        [
          "6. Compte et courriel",
          [
            "Nous utilisons Supabase pour la connexion et les données de compte. Supabase héberge aussi la base de données de RouteWise.",
            "Nous envoyons les courriels du compte, comme la confirmation de l’adresse courriel et la réinitialisation du mot de passe, par un fournisseur d’envoi de courriels."
          ]
        ],
        [
          "7. Abonnements et paiements",
          [
            "Si vous vous abonnez à RouteWise Pro, l’App Store (sur iPhone) ou Google Play (sur Android) gère l’achat, et RevenueCat gère l’état de votre abonnement avec votre identifiant d’utilisateur RouteWise.",
            "RouteWise ne reçoit pas les données de votre carte de paiement d’Apple, de Google ni de RevenueCat."
          ]
        ],
        [
          "8. Limites d’utilisation et diagnostics",
          [
            "Nous comptons, par compte et par jour, les recherches d’adresses, lectures d’étiquettes et importations que vous utilisez, pour appliquer les limites de votre forfait et vous montrer ce qu’il vous reste.",
            "Quand l’app plante ou rencontre une erreur, nous envoyons un rapport à Sentry avec des détails techniques (version de l’app, appareil, identifiant de la requête) et votre identifiant d’utilisateur, sans vos adresses, noms d’arrêts, photos, courriel ni jetons. Les journaux de nos serveurs suivent la même règle. Sur routewise.app, nous comptons les visites des pages avec Vercel Web Analytics, qui n’utilise pas de témoins (cookies) et ne vous identifie pas. RouteWise n’affiche pas de publicité, ne vend pas vos données et ne vous suit pas dans d’autres apps ou sites Web."
          ]
        ],
        [
          "9. Fournisseurs de services et transferts internationaux",
          [
            "RouteWise utilise ces fournisseurs, chacun seulement pour sa fonction : Supabase (comptes et base de données), Render (serveurs de RouteWise), Vercel (site Web et décompte des visites), Google Maps Platform (recherche d’adresses, lieux et itinéraires), OpenAI (lecture d’adresses dans les photos et les importations), Apple, Google Play et RevenueCat (abonnements), Sentry (rapports d’erreur) et un fournisseur d’envoi de courriels (courriels du compte).",
            "Ces fournisseurs peuvent traiter des données hors de votre pays, notamment aux États-Unis, selon leurs propres obligations de sécurité et de confidentialité."
          ]
        ],
        [
          "10. Vos choix",
          [
            "Vous pouvez refuser l’accès à la localisation ou à l’appareil photo; certaines fonctions seront alors limitées ou indisponibles.",
            "Vous pouvez supprimer votre compte dans l’app. Cela retire votre profil, vos arrêts, votre historique de livraisons, les données sauvegardées sur nos serveurs, vos registres d’utilisation et les autres données de RouteWise liées à votre identifiant d’utilisateur.",
            "Vous pouvez aussi demander l’accès à vos données, leur correction ou leur suppression en écrivant à <a href=\"mailto:hi@routewise.app\">hi@routewise.app</a>."
          ]
        ],
        [
          "11. Conservation et sécurité",
          [
            "Nous conservons vos données tant que votre compte est actif et aussi longtemps que nécessaire pour fournir le service, respecter nos obligations légales, régler des différends et protéger la plateforme.",
            "Nous supprimons votre compte des systèmes de RouteWise immédiatement. Les copies conservées par nos fournisseurs, comme les sauvegardes de la base de données, les rapports d’erreur et les registres des boutiques de paiement, expirent selon leurs propres délais de conservation (jusqu’à 90 jours pour les rapports d’erreur, par exemple), sauf si la loi exige de les garder plus longtemps.",
            "Aucun système n’est sûr à 100 %. Nous utilisons des mesures de protection raisonnables, mais ne pouvons garantir une sécurité absolue contre toutes les menaces."
          ]
        ],
        [
          "12. Droits prévus par la LGPD (Brésil)",
          [
            "Pour les utilisateurs au Brésil, le traitement des données personnelles suit la Lei Geral de Proteção de Dados Pessoais, Loi nº 13.709/2018 (LGPD). RouteWise agit comme contrôleur des données personnelles utilisées pour le compte, le soutien, l’abonnement et le fonctionnement de l’app, sauf lorsqu’un fournisseur agit comme contrôleur indépendant pour ses propres services.",
            "Les bases légales peuvent inclure l’exécution du contrat, le consentement, le respect d’obligations légales ou réglementaires, l’exercice régulier de droits, l’intérêt légitime et la prévention de la fraude, selon la fonction utilisée et le contexte.",
            "Vous pouvez demander la confirmation du traitement, l’accès, la correction, l’anonymisation, le blocage ou la suppression des données inutiles ou traitées de façon non conforme, la portabilité lorsque applicable, des informations sur le partage, la révision de décisions automatisées lorsque applicable et le retrait du consentement.",
            "Pour exercer vos droits LGPD ou contacter le canal de confidentialité, écrivez à <a href=\"mailto:hi@routewise.app\">hi@routewise.app</a>. Vous pouvez également déposer une réclamation auprès de l’Autoridade Nacional de Proteção de Dados (ANPD) lorsque applicable."
          ]
        ],
        [
          "13. Contact",
          [
            "Pour toute question de confidentialité ou demande concernant vos données, écrivez à <a href=\"mailto:hi@routewise.app\">hi@routewise.app</a>."
          ]
        ]
      ]
    },
    "terms": {
      "title": "Conditions d’utilisation de RouteWise",
      "updated": "Dernière mise à jour : 9 juin 2026",
      "intro": "Ces conditions expliquent les règles d’utilisation de l’app RouteWise, du site et de RouteWise Pro.",
      "sections": [
        [
          "1. Acceptation et parties",
          [
            "En installant, consultant ou utilisant RouteWise, vous acceptez ces conditions. Si vous n’acceptez pas, n’utilisez pas l’app ni le site.",
            "Ces conditions sont conclues entre vous et RouteWise. Apple n’est pas responsable de l’app, de son contenu ou du soutien."
          ]
        ],
        [
          "2. Portée du produit",
          [
            "RouteWise est un outil de productivité pour livreurs. Il aide à organiser les destinations, importer des listes d’adresses, optimiser les itinéraires et ouvrir la navigation dans des apps compatibles.",
            "RouteWise est un outil d’assistance. Vous restez responsable de vos décisions de conduite, de la sécurité routière et du respect des lois locales."
          ]
        ],
        [
          "3. Licence",
          [
            "Nous vous accordons une licence limitée, personnelle, non exclusive, non transférable, révocable et non sous-licenciable pour utiliser l’app sur les appareils que vous possédez ou contrôlez.",
            "L’utilisation sur appareils Apple doit aussi respecter les règles Apple Media Services et les autres conditions applicables de l’App Store. L’utilisation Android doit aussi respecter les conditions Google Play."
          ]
        ],
        [
          "4. Restrictions d’utilisation",
          [
            "Vous ne pouvez pas copier, distribuer, vendre, louer, sous-licencier, modifier ou exploiter l’app au-delà de ce que ces conditions autorisent.",
            "Vous ne pouvez pas faire de rétro-ingénierie, décompiler, désassembler, tenter d’extraire le code source, contourner les protections techniques ou créer des œuvres dérivées de l’app, sauf si la loi applicable interdit cette restriction."
          ]
        ],
        [
          "5. Services tiers et données techniques",
          [
            "RouteWise dépend de services tiers pour les cartes, autocomplete, routage, IA/OCR, authentification, synchronisation, abonnements, diagnostics et infrastructure.",
            "En utilisant RouteWise, vous acceptez que les données techniques, diagnostics, métriques d’utilisation, erreurs et données opérationnelles nécessaires au maintien, à la sécurité et à l’amélioration de l’app puissent être collectées et traitées."
          ]
        ],
        [
          "6. Abonnement RouteWise Pro",
          [
            "RouteWise peut offrir des abonnements auto-renouvelables sous le nom RouteWise Pro, incluant RouteWise Pro Monthly avec une durée de 1 mois et RouteWise Pro Annual avec une durée de 1 an.",
            "Le prix final varie selon le pays, la devise, les taxes et la boutique. Le prix applicable est toujours affiché dans le flux d’achat et l’écran de confirmation de la boutique avant toute facturation.",
            "L’abonnement se renouvelle automatiquement à la fin de chaque période sauf annulation au moins 24 heures avant la fin de la période en cours pour les achats App Store. Les règles équivalentes de Google Play s’appliquent aux achats Android.",
            "Vous pouvez consulter, gérer ou annuler l’abonnement dans les réglages d’abonnement Apple ID ou dans les abonnements Google Play. Les remboursements suivent les politiques de la boutique applicable."
          ]
        ],
        [
          "7. Soutien, garantie et Apple",
          [
            "La maintenance et le soutien de RouteWise sont fournis par RouteWise, pas par Apple. Pour le soutien, contactez hi@routewise.app.",
            "Si l’app ne respecte pas une garantie applicable, vous pouvez en aviser Apple. Apple peut rembourser le prix payé pour l’app lorsque applicable. À part cela, Apple n’a aucune obligation de garantie, maintenance ou soutien pour RouteWise.",
            "Apple et ses filiales sont bénéficiaires tiers de ces conditions et, après votre acceptation, peuvent faire appliquer ces conditions contre vous à ce titre."
          ]
        ],
        [
          "8. Propriété intellectuelle et conformité légale",
          [
            "Tous les droits de RouteWise, y compris le logiciel, la marque, le design, les textes, la structure et le contenu du produit, appartiennent à RouteWise ou à ses concédants.",
            "Vous déclarez ne pas être situé dans un pays soumis à un embargo du gouvernement américain, ne pas être dans un pays désigné par le gouvernement américain comme soutenant le terrorisme et ne pas figurer sur une liste gouvernementale américaine de parties interdites ou restreintes."
          ]
        ],
        [
          "9. Disponibilité et limitation de responsabilité",
          [
            "Le GPS, la distance, le temps, le trafic, le géocodage, l’OCR et l’optimisation d’itinéraire dépendent des permissions, du signal de l’appareil, des données entrées et des services tiers. Les résultats doivent être traités comme des estimations.",
            "Dans la mesure maximale permise par la loi, RouteWise n’est pas responsable des dommages indirects, incidents, spéciaux, punitifs ou consécutifs liés à l’utilisation de l’app, la perte de données, l’indisponibilité, les décisions d’itinéraire ou le comportement de fournisseurs tiers."
          ]
        ],
        [
          "10. Changements et contact",
          [
            "Nous pouvons mettre à jour ces conditions de temps à autre. La dernière version publiée sur le site doit être traitée comme la version en vigueur.",
            "Contact : <a href=\"mailto:hi@routewise.app\">hi@routewise.app</a>."
          ]
        ]
      ]
    }
  },
  "es": {
    "metaTitle": "RouteWise - Términos y Privacidad",
    "brandSubtitle": "Rutas de entrega con menos tiempo perdido.",
    "home": "Inicio",
    "privacyNav": "Privacidad",
    "termsNav": "Términos",
    "kicker": "Legal",
    "title": "Política de privacidad y términos en una sola página.",
    "intro": "Estos documentos explican cómo RouteWise usa datos, procesa suscripciones y define las condiciones de uso de la app.",
    "footer": "Optimiza rutas, importa direcciones y envía entregas al mapa correcto.",
    "privacy": {
      "title": "Política de Privacidad de RouteWise",
      "updated": "Última actualización: 21 de octubre de 2026",
      "intro": "Esta política explica qué información usa RouteWise, por qué se usa, quién la procesa y qué opciones tienes sobre tus datos.",
      "sections": [
        [
          "1. Descripción general",
          [
            "RouteWise ayuda a los repartidores a organizar paradas, importar listas de direcciones, optimizar rutas, abrir la navegación en apps externas y seguir el historial de entregas.",
            "Esta política se aplica a la app RouteWise, al sitio routewise.app y a las funciones de cuenta, búsqueda de direcciones, importación, lectura de etiquetas, rutas, copia de seguridad y suscripción vinculadas al producto."
          ]
        ],
        [
          "2. Datos que proporcionas",
          [
            "Datos de cuenta: correo electrónico, identificador de usuario, preferencia de idioma, plan y estado de la suscripción.",
            "Datos de entrega: paradas (nombres, direcciones, coordenadas y notas), historial de entregas, listas y archivos de direcciones que importas y fotos de etiquetas o documentos que escaneas, además de la configuración de la app, como la app de navegación que prefieres."
          ]
        ],
        [
          "3. Datos en tu dispositivo y copia de seguridad",
          [
            "Tus paradas y tu historial de entregas se guardan en tu dispositivo, vinculados a tu cuenta. Los tokens de sesión se guardan en el almacenamiento seguro del dispositivo.",
            "Cuando la copia de seguridad y la sincronización estén disponibles en tu versión de la app, tus paradas y tu historial de entregas también se guardan en los servidores de RouteWise, vinculados a tu cuenta, para que puedas recuperarlos al reinstalar la app o en otro dispositivo. Cuando eliminas una parada, se borra de nuestros servidores; solo conservamos su identificador y la fecha de eliminación para que tus otros dispositivos también la eliminen."
          ]
        ],
        [
          "4. Ubicación, mapas y rutas",
          [
            "Con tu permiso, la app usa tu ubicación actual en el dispositivo para centrar el mapa y ordenar tus paradas.",
            "Cuando buscas una dirección u optimizas una ruta, enviamos el texto de búsqueda, tu ubicación actual (como punto de partida o para ordenar los resultados) y las direcciones y coordenadas de tus paradas, a través de nuestros servidores, a Google Maps Platform. No guardamos un historial de tu ubicación."
          ]
        ],
        [
          "5. Lectura de etiquetas, importación e imágenes",
          [
            "Cuando escaneas una etiqueta, el texto se lee primero en tu dispositivo. Si no es suficiente, una copia reducida de la foto se envía a los servidores de RouteWise y a OpenAI para extraer la dirección.",
            "Enviamos los archivos, textos y fotos que importas a los servidores de RouteWise y los procesamos con OpenAI y Google Maps Platform para preparar la lista de revisión. RouteWise no conserva estas fotos ni archivos después del procesamiento; OpenAI y Google pueden conservar lo que reciben por un tiempo limitado según sus propias políticas. Usa solo contenido que tengas autorización para procesar."
          ]
        ],
        [
          "6. Cuenta y correo electrónico",
          [
            "Usamos Supabase para el inicio de sesión y los datos de cuenta. Supabase también aloja la base de datos de RouteWise.",
            "Enviamos los correos de la cuenta, como la confirmación del correo y el restablecimiento de contraseña, a través de un proveedor de envío de correos."
          ]
        ],
        [
          "7. Suscripciones y pagos",
          [
            "Si te suscribes a RouteWise Pro, la App Store (en iPhone) o Google Play (en Android) gestiona la compra, y RevenueCat administra el estado de tu suscripción con tu identificador de usuario de RouteWise.",
            "RouteWise no recibe los datos de tu tarjeta de pago de Apple, Google ni RevenueCat."
          ]
        ],
        [
          "8. Límites de uso y diagnóstico",
          [
            "Contamos, por cuenta y por día, las búsquedas de direcciones, lecturas de etiquetas e importaciones que usas, para aplicar los límites de tu plan y mostrarte cuánto te queda.",
            "Cuando la app falla o encuentra un error, enviamos un informe a Sentry con detalles técnicos (versión de la app, dispositivo, identificador de la solicitud) y tu identificador de usuario, sin tus direcciones, nombres de paradas, fotos, correo ni tokens. Los registros de nuestros servidores siguen la misma regla. En routewise.app contamos las visitas a las páginas con Vercel Web Analytics, que no usa cookies y no te identifica. RouteWise no muestra anuncios, no vende tus datos y no te rastrea en otras apps o sitios web."
          ]
        ],
        [
          "9. Proveedores de servicios y transferencias internacionales",
          [
            "RouteWise usa estos proveedores, cada uno solo para su función: Supabase (cuentas y base de datos), Render (servidores de RouteWise), Vercel (sitio web y conteo de visitas), Google Maps Platform (búsqueda de direcciones, lugares y rutas), OpenAI (lectura de direcciones en fotos e importaciones), Apple, Google Play y RevenueCat (suscripciones), Sentry (informes de errores) y un proveedor de envío de correos (correos de la cuenta).",
            "Estos proveedores pueden procesar datos fuera de tu país, incluso en Estados Unidos, conforme a sus propias obligaciones de seguridad y privacidad."
          ]
        ],
        [
          "10. Tus opciones",
          [
            "Puedes negar el acceso a la ubicación o a la cámara; algunas funciones quedarán limitadas o no estarán disponibles.",
            "Puedes eliminar tu cuenta en la app. Esto borra tu perfil, paradas, historial de entregas, datos respaldados en nuestros servidores, registros de uso y otros registros de RouteWise vinculados a tu identificador de usuario.",
            "También puedes solicitar acceso, corrección o eliminación de tus datos escribiendo a <a href=\"mailto:hi@routewise.app\">hi@routewise.app</a>."
          ]
        ],
        [
          "11. Conservación y seguridad",
          [
            "Conservamos tus datos mientras tu cuenta esté activa y el tiempo necesario para prestar el servicio, cumplir obligaciones legales, resolver disputas y proteger la plataforma.",
            "Eliminamos tu cuenta de los sistemas de RouteWise de inmediato. Las copias que conservan nuestros proveedores, como copias de seguridad de la base de datos, informes de errores y registros de las tiendas de pago, expiran según los plazos de conservación de esos proveedores (los informes de errores, por ejemplo, en hasta 90 días), salvo que la ley exija conservarlas por más tiempo.",
            "Ningún sistema es 100 % seguro. Usamos medidas de protección razonables, pero no podemos garantizar seguridad absoluta frente a todas las amenazas."
          ]
        ],
        [
          "12. Derechos según la LGPD de Brasil",
          [
            "Para usuarios en Brasil, el tratamiento de datos personales sigue la Lei Geral de Proteção de Dados Pessoais, Ley nº 13.709/2018 (LGPD). RouteWise actúa como controlador de los datos personales usados para cuenta, soporte, suscripción y operación de la app, salvo cuando un proveedor actúa como controlador independiente en sus propios servicios.",
            "Las bases legales pueden incluir ejecución de contrato, consentimiento, cumplimiento de obligación legal o regulatoria, ejercicio regular de derechos, interés legítimo y prevención de fraude, según la función usada y el contexto del tratamiento.",
            "Puedes solicitar confirmación de tratamiento, acceso, corrección, anonimización, bloqueo o eliminación de datos innecesarios o tratados en incumplimiento, portabilidad cuando aplique, información sobre compartición, revisión de decisiones automatizadas cuando exista y revocación del consentimiento.",
            "Para ejercer derechos previstos por la LGPD o contactar el canal de privacidad, envía un correo a <a href=\"mailto:hi@routewise.app\">hi@routewise.app</a>. Si lo consideras necesario, también puedes presentar una reclamación ante la Autoridade Nacional de Proteção de Dados (ANPD)."
          ]
        ],
        [
          "13. Contacto",
          [
            "Para preguntas de privacidad o solicitudes sobre tus datos, contacta a <a href=\"mailto:hi@routewise.app\">hi@routewise.app</a>."
          ]
        ]
      ]
    },
    "terms": {
      "title": "Términos de Uso de RouteWise",
      "updated": "Última actualización: 9 de junio de 2026",
      "intro": "Estos términos explican las condiciones para usar la app RouteWise, el sitio y RouteWise Pro.",
      "sections": [
        [
          "1. Aceptación y partes",
          [
            "Al instalar, acceder o usar RouteWise, aceptas estos términos. Si no estás de acuerdo, no uses la app ni el sitio.",
            "Estos términos son entre tú y RouteWise. Apple no es responsable por la app, su contenido o el soporte de la app."
          ]
        ],
        [
          "2. Alcance del producto",
          [
            "RouteWise es una herramienta de productividad para repartidores. Ayuda a organizar destinos, importar listas de direcciones, optimizar rutas y abrir navegación en apps compatibles.",
            "RouteWise es una herramienta de apoyo. Tú sigues siendo responsable por tus decisiones al conducir, por la seguridad vial y por cumplir las leyes locales."
          ]
        ],
        [
          "3. Licencia",
          [
            "Te concedemos una licencia limitada, personal, no exclusiva, intransferible, revocable y no sublicenciable para usar la app en dispositivos que posees o controlas.",
            "El uso en dispositivos Apple también debe cumplir las reglas de Apple Media Services y otros términos aplicables de la App Store. En Android, también aplican los términos de Google Play."
          ]
        ],
        [
          "4. Restricciones de uso",
          [
            "No puedes copiar, distribuir, vender, alquilar, sublicenciar, modificar o explotar la app más allá de lo permitido por estos términos.",
            "No puedes realizar ingeniería inversa, descompilar, desensamblar, intentar extraer el código fuente, eludir protecciones técnicas o crear obras derivadas de la app, excepto cuando la ley aplicable no permita esta restricción."
          ]
        ],
        [
          "5. Servicios de terceros y datos técnicos",
          [
            "RouteWise depende de servicios de terceros para mapas, autocompletado, enrutamiento, IA/OCR, autenticación, sincronización, suscripciones, diagnósticos e infraestructura.",
            "Al usar RouteWise, aceptas que datos técnicos, diagnósticos, métricas de uso, errores y datos operativos necesarios pueden recopilarse y procesarse para mantener, proteger y mejorar la app."
          ]
        ],
        [
          "6. Suscripción RouteWise Pro",
          [
            "RouteWise puede ofrecer suscripciones autorrenovables llamadas RouteWise Pro, incluyendo RouteWise Pro Monthly, con periodo de 1 mes, y RouteWise Pro Annual, con periodo de 1 año.",
            "El precio final varía por país, moneda, impuestos y tienda usada. El valor aplicable siempre aparece en el flujo de compra y en la pantalla de confirmación de la tienda antes de cualquier cobro.",
            "La suscripción se renueva automáticamente al final de cada periodo, salvo cancelación al menos 24 horas antes del fin del periodo actual cuando se compra en App Store. Reglas equivalentes de Google Play aplican para compras en Android.",
            "Puedes revisar, gestionar o cancelar la suscripción en la configuración de suscripciones del Apple ID o en el área de suscripciones de Google Play. Los reembolsos siguen las políticas de la tienda aplicable."
          ]
        ],
        [
          "7. Soporte, garantía y Apple",
          [
            "El mantenimiento y soporte de RouteWise son proporcionados por RouteWise, no por Apple. Para soporte, contacta hi@routewise.app.",
            "Si la app no cumple una garantía aplicable, puedes notificar a Apple. En ese caso, Apple podrá reembolsar el precio pagado por la app, cuando aplique. Fuera de eso, Apple no tiene obligación de garantía, mantenimiento o soporte relacionada con RouteWise.",
            "Apple y sus subsidiarias son terceros beneficiarios de estos términos y, después de tu aceptación, podrán hacer valer estos términos contra ti en esa condición."
          ]
        ],
        [
          "8. Propiedad intelectual y cumplimiento legal",
          [
            "Todos los derechos de RouteWise, incluyendo software, marca, diseño, textos, estructura y contenido del producto, pertenecen a RouteWise o a sus licenciantes.",
            "Declaras que no estás ubicado en un país sujeto a embargo del gobierno de EE. UU., que no estás en un país designado por el gobierno de EE. UU. como patrocinador del terrorismo y que no estás en listas gubernamentales de partes prohibidas o restringidas."
          ]
        ],
        [
          "9. Disponibilidad y limitación de responsabilidad",
          [
            "GPS, distancia, tiempo, tráfico, geocodificación, OCR y optimización de rutas dependen de permisos, señal del dispositivo, datos ingresados y servicios de terceros. Los resultados deben tratarse como estimaciones.",
            "En la máxima medida permitida por la ley, RouteWise no se responsabiliza por daños indirectos, incidentales, especiales, punitivos o consecuentes relacionados con el uso de la app, pérdida de datos, indisponibilidad, decisiones de ruta o comportamiento de terceros."
          ]
        ],
        [
          "10. Cambios y contacto",
          [
            "Podemos actualizar estos términos ocasionalmente. La versión más reciente publicada en el sitio debe considerarse la versión vigente.",
            "Contacto: <a href=\"mailto:hi@routewise.app\">hi@routewise.app</a>."
          ]
        ]
      ]
    }
  }
} as const;

export const legalMetaDescriptions: Record<Locale, string> = {
  "en": "RouteWise privacy policy and terms of use in English, Portuguese, French, and Spanish.",
  "pt": "Política de privacidade e termos de uso do RouteWise em português, inglês, francês e espanhol.",
  "fr": "Politique de confidentialité et conditions d’utilisation de RouteWise en anglais, portugais, français et espagnol.",
  "es": "Política de privacidad y términos de uso de RouteWise en inglés, portugués, francés y español."
};

// Account deletion steps, linked from Google Play's data safety form (MOB-44). Retention matches privacy sections 10–11.
export const accountDeletion: Record<Locale, {
  nav: string;
  title: string;
  updated: string;
  intro: string;
  sections: readonly (readonly [string, readonly string[]])[];
}> = {
  "en": {
    "nav": "Delete account",
    "title": "Delete your RouteWise account",
    "updated": "Last updated: October 21, 2026",
    "intro": "You can delete your RouteWise account (developer: Hoff Silva) and its data at any time, in the app or by email.",
    "sections": [
      [
        "1. Delete it in the app",
        [
          "Open RouteWise and sign in.",
          "Go to Profile and tap Delete account.",
          "Confirm. The account is deleted right away and you are signed out."
        ]
      ],
      [
        "2. Ask by email",
        [
          "If you can't open the app, write to <a href=\"mailto:hi@routewise.app\">hi@routewise.app</a> from the email of your account and ask us to delete it. We delete the account and reply when it's done."
        ]
      ],
      [
        "3. What is deleted",
        [
          "Your profile, stops, delivery history, data backed up on our servers, usage records, and other RouteWise records tied to your user identifier."
        ]
      ],
      [
        "4. What is kept, and for how long",
        [
          "Copies kept by our providers, such as database backups, error reports, and payment-store records, expire on those providers' retention schedules (error reports, for example, after up to 90 days), unless the law requires keeping them longer."
        ]
      ],
      [
        "5. Subscriptions",
        [
          "Deleting your account does not cancel a RouteWise Pro subscription. Cancel it in your App Store or Google Play subscription settings to avoid future charges."
        ]
      ],
      [
        "6. Delete some data without deleting the account",
        [
          "You can delete stops in the app at any time. If your stops are backed up, deleted stops are also removed from our servers."
        ]
      ]
    ]
  },
  "pt": {
    "nav": "Excluir conta",
    "title": "Excluir sua conta do RouteWise",
    "updated": "Última atualização: 21 de outubro de 2026",
    "intro": "Você pode excluir sua conta do RouteWise (desenvolvedor: Hoff Silva) e os dados dela a qualquer momento, pelo app ou por e-mail.",
    "sections": [
      [
        "1. Excluir pelo app",
        [
          "Abra o RouteWise e entre na sua conta.",
          "Vá em Perfil e toque em Excluir conta.",
          "Confirme. A conta é excluída na hora e você sai do app."
        ]
      ],
      [
        "2. Pedir por e-mail",
        [
          "Se não conseguir abrir o app, escreva para <a href=\"mailto:hi@routewise.app\">hi@routewise.app</a> a partir do e-mail da sua conta e peça a exclusão. Excluímos a conta e respondemos quando estiver feito."
        ]
      ],
      [
        "3. O que é excluído",
        [
          "Seu perfil, paradas, histórico de entregas, dados com backup nos nossos servidores, registros de uso e outros registros do RouteWise ligados ao seu identificador de usuário."
        ]
      ],
      [
        "4. O que fica guardado, e por quanto tempo",
        [
          "Cópias mantidas pelos nossos prestadores, como backups do banco de dados, relatórios de erro e registros das lojas de pagamento, expiram conforme os prazos de retenção desses prestadores (relatórios de erro, por exemplo, em até 90 dias), salvo quando a lei exigir guardá-las por mais tempo."
        ]
      ],
      [
        "5. Assinaturas",
        [
          "Excluir a conta não cancela a assinatura do RouteWise Pro. Cancele nas configurações de assinatura da App Store ou do Google Play para evitar novas cobranças."
        ]
      ],
      [
        "6. Excluir alguns dados sem excluir a conta",
        [
          "Você pode excluir paradas no app a qualquer momento. Se suas paradas têm backup, as excluídas também são removidas dos nossos servidores."
        ]
      ]
    ]
  },
  "fr": {
    "nav": "Supprimer le compte",
    "title": "Supprimer votre compte RouteWise",
    "updated": "Dernière mise à jour : 21 octobre 2026",
    "intro": "Vous pouvez supprimer votre compte RouteWise (développeur : Hoff Silva) et ses données à tout moment, dans l’app ou par courriel.",
    "sections": [
      [
        "1. Supprimer dans l’app",
        [
          "Ouvrez RouteWise et connectez-vous.",
          "Allez dans Profil et touchez Supprimer le compte.",
          "Confirmez. Le compte est supprimé immédiatement et vous êtes déconnecté."
        ]
      ],
      [
        "2. Demander par courriel",
        [
          "Si vous ne pouvez pas ouvrir l’app, écrivez à <a href=\"mailto:hi@routewise.app\">hi@routewise.app</a> à partir du courriel de votre compte et demandez la suppression. Nous supprimons le compte et vous répondons une fois que c’est fait."
        ]
      ],
      [
        "3. Ce qui est supprimé",
        [
          "Votre profil, vos arrêts, votre historique de livraisons, les données sauvegardées sur nos serveurs, les registres d’utilisation et les autres données RouteWise liées à votre identifiant d’utilisateur."
        ]
      ],
      [
        "4. Ce qui est conservé, et pendant combien de temps",
        [
          "Les copies conservées par nos fournisseurs, comme les sauvegardes de la base de données, les rapports d’erreur et les registres des boutiques de paiement, expirent selon les délais de conservation de ces fournisseurs (jusqu’à 90 jours pour les rapports d’erreur, par exemple), sauf si la loi exige de les conserver plus longtemps."
        ]
      ],
      [
        "5. Abonnements",
        [
          "Supprimer votre compte n’annule pas l’abonnement RouteWise Pro. Annulez-le dans les réglages d’abonnement de l’App Store ou de Google Play pour éviter de futurs frais."
        ]
      ],
      [
        "6. Supprimer certaines données sans supprimer le compte",
        [
          "Vous pouvez supprimer des arrêts dans l’app à tout moment. Si vos arrêts sont sauvegardés, les arrêts supprimés sont aussi retirés de nos serveurs."
        ]
      ]
    ]
  },
  "es": {
    "nav": "Eliminar cuenta",
    "title": "Eliminar tu cuenta de RouteWise",
    "updated": "Última actualización: 21 de octubre de 2026",
    "intro": "Puedes eliminar tu cuenta de RouteWise (desarrollador: Hoff Silva) y sus datos en cualquier momento, desde la app o por correo.",
    "sections": [
      [
        "1. Eliminarla desde la app",
        [
          "Abre RouteWise e inicia sesión.",
          "Ve a Perfil y toca Eliminar cuenta.",
          "Confirma. La cuenta se elimina de inmediato y se cierra la sesión."
        ]
      ],
      [
        "2. Pedirlo por correo",
        [
          "Si no puedes abrir la app, escribe a <a href=\"mailto:hi@routewise.app\">hi@routewise.app</a> desde el correo de tu cuenta y pide la eliminación. Eliminamos la cuenta y te respondemos cuando esté hecho."
        ]
      ],
      [
        "3. Qué se elimina",
        [
          "Tu perfil, paradas, historial de entregas, datos respaldados en nuestros servidores, registros de uso y otros registros de RouteWise vinculados a tu identificador de usuario."
        ]
      ],
      [
        "4. Qué se conserva y por cuánto tiempo",
        [
          "Las copias que conservan nuestros proveedores, como copias de seguridad de la base de datos, informes de errores y registros de las tiendas de pago, expiran según los plazos de conservación de esos proveedores (los informes de errores, por ejemplo, en hasta 90 días), salvo que la ley exija conservarlas más tiempo."
        ]
      ],
      [
        "5. Suscripciones",
        [
          "Eliminar tu cuenta no cancela la suscripción a RouteWise Pro. Cancélala en los ajustes de suscripción de la App Store o de Google Play para evitar cargos futuros."
        ]
      ],
      [
        "6. Eliminar algunos datos sin eliminar la cuenta",
        [
          "Puedes eliminar paradas en la app en cualquier momento. Si tus paradas tienen respaldo, las eliminadas también se borran de nuestros servidores."
        ]
      ]
    ]
  }
};
