export type SectionTuple = readonly [title: string, paragraph: string];

type LocalizedLegalPages = {
  terms: readonly SectionTuple[];
  cookies: readonly SectionTuple[];
};

export type LegalLocale =
  | 'de'
  | 'en'
  | 'sk'
  | 'cs'
  | 'uk'
  | 'pl'
  | 'ru'
  | 'fr'
  | 'it'
  | 'es'
  | 'pt'
  | 'nl'
  | 'hu'
  | 'ro'
  | 'bg'
  | 'hr'
  | 'sl'
  | 'sv'
  | 'da'
  | 'fi'
  | 'et'
  | 'lv'
  | 'lt'
  | 'el'
  | 'mt'
  | 'ga';

export const legalPageTranslations: Record<LegalLocale, LocalizedLegalPages> = {
  de: {
    terms: [
      [
        'Geltungsbereich',
        'Diese Bedingungen regeln die Nutzung von {{host}} sowie aller Informationen, Medien und Kontaktmöglichkeiten, die über die Website bereitgestellt werden.',
      ],
      [
        'Unverbindliche Inhalte',
        'Alle Inhalte dieser Website dienen ausschließlich der allgemeinen Information. Aus der Nutzung der Website entsteht weder ein Vertrag noch ein Anspruch auf die Erbringung von Leistungen.',
      ],
      [
        'Geistiges Eigentum',
        'Texte, Bilder, Marken, Layouts und sonstige Inhalte sind durch die einschlägigen Rechte des geistigen Eigentums geschützt. Wiederverwendung, Verbreitung oder Bearbeitung bedürfen einer vorherigen Zustimmung.',
      ],
      [
        'Zulässige Nutzung',
        'Die Website darf nur rechtmäßig und ohne Beeinträchtigung von Verfügbarkeit, Sicherheit oder der Nutzung durch andere verwendet werden. Automatisiertes Auslesen oder Missbrauch der Kontaktwege ist unzulässig.',
      ],
      [
        'Haftung',
        'Wir bemühen uns um zutreffende und verfügbare Inhalte, übernehmen jedoch keine Gewähr für Vollständigkeit, Richtigkeit oder unterbrechungsfreie Verfügbarkeit. Zwingende gesetzliche Haftung bleibt unberührt.',
      ],
      [
        'Externe Links und anwendbares Recht',
        'Für verlinkte Websites Dritter sind ausschließlich deren Betreiber verantwortlich. Es gilt das Recht von {{country}}.',
      ],
    ],
    cookies: [
      [
        'Verwendete Speichertechnologien',
        'Diese Website verwendet ausschließlich notwendige Speichertechnologien. Dazu gehören die Speicherung der Spracheinstellung sowie ein lokales Browser-Merkmal, das sich merkt, ob der Cookie-Hinweis bereits geschlossen wurde.',
      ],
      [
        'Zweck der Verwendung',
        'Diese Einträge unterstützen die Grundfunktionen der Website, halten die gewählte Sprache konsistent und verhindern, dass der Hinweis nach dem Schließen bei jedem Seitenaufruf erneut erscheint.',
      ],
      [
        'Arten der Speicherung',
        'Abhängig vom Routing kann die gewählte Sprache in einem notwendigen Cookie gespeichert werden. Der Status des Hinweisbanners wird im lokalen Browser-Speicher unter dem Schlüssel "{{storageKey}}" abgelegt.',
      ],
      [
        'Keine Analyse- oder Marketing-Cookies',
        'Derzeit setzt diese Website keine Analyse-, Werbe- oder Marketing-Cookies ein.',
      ],
      [
        'Browser-Einstellungen',
        'Sie können Cookies und lokale Speicherinhalte jederzeit in Ihrem Browser löschen oder blockieren. Dadurch können Spracheinstellungen zurückgesetzt werden oder der Hinweis erneut erscheinen.',
      ],
    ],
  },
  en: {
    terms: [
      [
        'Scope',
        'These terms govern the use of {{host}} and all information, media and contact options made available through the website.',
      ],
      [
        'Informational Content',
        'All content on this website is provided for general information only. Using the website does not create a contract or an entitlement to receive services.',
      ],
      [
        'Intellectual Property',
        'Texts, visuals, trademarks, layouts and other content remain protected by applicable intellectual property laws. Reuse, distribution or modification requires prior permission.',
      ],
      [
        'Acceptable Use',
        'The website may only be used lawfully and without interfering with availability, security or the experience of other users. Automated scraping or abuse of contact channels is prohibited.',
      ],
      [
        'Liability',
        'We strive to keep the website accurate and available, but we do not guarantee completeness, accuracy or uninterrupted uptime. Mandatory statutory liability remains unaffected.',
      ],
      [
        'External Links and Governing Law',
        'Linked third-party websites remain the responsibility of their respective operators. These terms are governed by the laws of {{country}}.',
      ],
    ],
    cookies: [
      [
        'Used Storage Technologies',
        'This website uses only essential storage technologies. This includes language preference storage and a local browser flag used to remember when the cookie notice has been dismissed.',
      ],
      [
        'Purpose of Use',
        'These entries support core website behaviour, keep the selected language consistent and prevent the notice from reappearing on every page view after dismissal.',
      ],
      [
        'Storage Types',
        'Depending on routing behaviour, the selected locale may be stored in an essential cookie. The dismissal state for the notice is stored in browser local storage under the key "{{storageKey}}".',
      ],
      [
        'No Analytics or Marketing Cookies',
        'At the current state of the website, no analytics, advertising or marketing cookies are set.',
      ],
      [
        'Browser Controls',
        'You can remove or block cookies and local storage entries in your browser settings at any time. Doing so may reset language preferences or cause the notice to appear again.',
      ],
    ],
  },
  sk: {
    terms: [
      [
        'Pôsobnosť',
        'Tieto podmienky upravujú používanie stránky {{host}} a všetkých informácií, médií a kontaktných možností dostupných prostredníctvom webu.',
      ],
      [
        'Informatívny obsah',
        'Všetok obsah tejto webovej stránky slúži iba na všeobecnú informáciu. Používaním webu nevzniká zmluva ani nárok na poskytnutie služieb.',
      ],
      [
        'Duševné vlastníctvo',
        'Texty, vizuály, ochranné známky, rozloženie a ďalší obsah sú chránené príslušnými právami duševného vlastníctva. Opätovné použitie, šírenie alebo úpravy vyžadujú predchádzajúci súhlas.',
      ],
      [
        'Prípustné používanie',
        'Web možno používať len zákonným spôsobom a bez narušenia dostupnosti, bezpečnosti alebo používania inými osobami. Automatizované sťahovanie obsahu alebo zneužívanie kontaktných kanálov je zakázané.',
      ],
      [
        'Zodpovednosť',
        'Usilujeme sa o presný a dostupný obsah, no nezaručujeme úplnosť, správnosť ani nepretržitú dostupnosť. Povinná zákonná zodpovednosť zostáva nedotknutá.',
      ],
      [
        'Externé odkazy a rozhodné právo',
        'Za obsah prepojených webových stránok tretích strán zodpovedajú výlučne ich prevádzkovatelia. Tieto podmienky sa riadia právom štátu {{country}}.',
      ],
    ],
    cookies: [
      [
        'Používané technológie ukladania',
        'Táto webová stránka používa iba nevyhnutné technológie ukladania. Patrí sem uloženie jazykových preferencií a lokálny údaj v prehliadači, ktorý si pamätá zatvorenie upozornenia na cookies.',
      ],
      [
        'Účel použitia',
        'Tieto údaje podporujú základné fungovanie webu, zachovávajú zvolený jazyk a zabraňujú tomu, aby sa upozornenie po jeho zatvorení zobrazovalo pri každom otvorení stránky.',
      ],
      [
        'Typy ukladania',
        'V závislosti od spôsobu routovania môže byť zvolený jazyk uložený v nevyhnutnom cookie. Stav upozornenia sa ukladá do lokálneho úložiska prehliadača pod kľúčom "{{storageKey}}".',
      ],
      [
        'Žiadne analytické ani marketingové cookies',
        'V aktuálnom stave webová stránka nepoužíva analytické, reklamné ani marketingové cookies.',
      ],
      [
        'Ovládanie v prehliadači',
        'Cookies a lokálne uložené údaje môžete kedykoľvek odstrániť alebo zablokovať v nastaveniach prehliadača. Môže to obnoviť jazykové nastavenia alebo spôsobiť opätovné zobrazenie upozornenia.',
      ],
    ],
  },
  cs: {
    terms: [
      [
        'Rozsah použití',
        'Tyto podmínky upravují používání webu {{host}} a všech informací, médií a kontaktních možností dostupných prostřednictvím této stránky.',
      ],
      [
        'Informativní obsah',
        'Veškerý obsah této webové stránky slouží pouze k obecným informacím. Používáním webu nevzniká smlouva ani nárok na poskytnutí služeb.',
      ],
      [
        'Duševní vlastnictví',
        'Texty, vizuály, ochranné známky, rozvržení a další obsah jsou chráněny příslušnými právy duševního vlastnictví. Opětovné použití, šíření nebo úpravy vyžadují předchozí souhlas.',
      ],
      [
        'Přípustné užívání',
        'Web lze používat pouze zákonným způsobem a bez narušení dostupnosti, bezpečnosti nebo používání ostatními. Automatizované stahování obsahu nebo zneužívání kontaktních kanálů je zakázáno.',
      ],
      [
        'Odpovědnost',
        'Usilujeme o správný a dostupný obsah, ale nezaručujeme úplnost, správnost ani nepřetržitou dostupnost. Povinná zákonná odpovědnost zůstává nedotčena.',
      ],
      [
        'Externí odkazy a rozhodné právo',
        'Za obsah odkazovaných webů třetích stran odpovídají výhradně jejich provozovatelé. Tyto podmínky se řídí právem státu {{country}}.',
      ],
    ],
    cookies: [
      [
        'Používané technologie ukládání',
        'Tato webová stránka používá pouze nezbytné technologie ukládání. Patří sem ukládání jazykových preferencí a místní údaj v prohlížeči, který si pamatuje zavření upozornění na cookies.',
      ],
      [
        'Účel použití',
        'Tyto záznamy podporují základní fungování webu, zachovávají zvolený jazyk a zabraňují tomu, aby se upozornění po zavření zobrazovalo při každém otevření stránky.',
      ],
      [
        'Typy ukládání',
        'V závislosti na routování může být zvolený jazyk uložen v nezbytném cookie. Stav upozornění se ukládá do místního úložiště prohlížeče pod klíčem "{{storageKey}}".',
      ],
      [
        'Žádné analytické ani marketingové cookies',
        'V aktuálním stavu webová stránka nepoužívá analytické, reklamní ani marketingové cookies.',
      ],
      [
        'Ovládání v prohlížeči',
        'Cookies a místně uložená data můžete kdykoli odstranit nebo zablokovat v nastavení prohlížeče. To může obnovit jazykové preference nebo způsobit opětovné zobrazení upozornění.',
      ],
    ],
  },
  uk: {
    terms: [
      [
        'Сфера дії',
        'Ці умови регулюють використання сайту {{host}} та всієї інформації, матеріалів і способів зв’язку, доступних через вебсайт.',
      ],
      [
        'Інформаційний вміст',
        'Увесь вміст цього сайту надається лише для загального ознайомлення. Використання сайту не створює договору або права на отримання послуг.',
      ],
      [
        'Інтелектуальна власність',
        'Тексти, зображення, торговельні марки, макети та інший вміст захищені відповідними правами інтелектуальної власності. Повторне використання, поширення чи зміна потребують попереднього дозволу.',
      ],
      [
        'Допустиме використання',
        'Сайт можна використовувати лише законно та без втручання в доступність, безпеку чи досвід інших користувачів. Автоматичне зчитування даних або зловживання каналами зв’язку заборонені.',
      ],
      [
        'Відповідальність',
        'Ми прагнемо забезпечити точність і доступність інформації, але не гарантуємо повноту, точність чи безперебійну роботу сайту. Обов’язкова відповідальність за законом залишається чинною.',
      ],
      [
        'Зовнішні посилання та застосовне право',
        'За вміст сторонніх сайтів, на які ведуть посилання, відповідають виключно їхні оператори. Ці умови регулюються законодавством {{country}}.',
      ],
    ],
    cookies: [
      [
        'Використовувані технології зберігання',
        'Цей сайт використовує лише необхідні технології зберігання. Це включає збереження мовних налаштувань і локальний прапорець браузера, який запам’ятовує закриття повідомлення про cookie.',
      ],
      [
        'Мета використання',
        'Ці записи підтримують основну роботу сайту, зберігають вибрану мову та не дозволяють повідомленню з’являтися при кожному відкритті сторінки після його закриття.',
      ],
      [
        'Типи зберігання',
        'Залежно від маршрутизації вибрана локаль може зберігатися в необхідному cookie. Стан повідомлення зберігається в локальному сховищі браузера під ключем "{{storageKey}}".',
      ],
      [
        'Без аналітичних чи маркетингових cookie',
        'У поточному стані сайт не встановлює аналітичні, рекламні чи маркетингові cookie.',
      ],
      [
        'Налаштування браузера',
        'Ви можете будь-коли видалити або заблокувати cookie та записи локального сховища в налаштуваннях браузера. Це може скинути мовні налаштування або знову показати повідомлення.',
      ],
    ],
  },
  pl: {
    terms: [
      [
        'Zakres',
        'Niniejsze warunki regulują korzystanie z witryny {{host}} oraz wszystkich informacji, materiałów i możliwości kontaktu udostępnianych za pośrednictwem strony.',
      ],
      [
        'Treści informacyjne',
        'Wszystkie treści na tej stronie mają wyłącznie charakter informacyjny. Korzystanie z witryny nie tworzy umowy ani prawa do otrzymania usług.',
      ],
      [
        'Własność intelektualna',
        'Teksty, materiały graficzne, znaki towarowe, układy i inne treści są chronione odpowiednimi prawami własności intelektualnej. Ponowne wykorzystanie, rozpowszechnianie lub modyfikacja wymagają wcześniejszej zgody.',
      ],
      [
        'Dozwolone korzystanie',
        'Ze strony można korzystać wyłącznie zgodnie z prawem i bez zakłócania jej dostępności, bezpieczeństwa lub korzystania przez innych użytkowników. Zautomatyzowane pobieranie danych lub nadużywanie kanałów kontaktowych jest zabronione.',
      ],
      [
        'Odpowiedzialność',
        'Dokładamy starań, aby treści były poprawne i dostępne, ale nie gwarantujemy ich kompletności, poprawności ani nieprzerwanej dostępności. Obowiązkowa odpowiedzialność ustawowa pozostaje bez zmian.',
      ],
      [
        'Linki zewnętrzne i prawo właściwe',
        'Za treści na stronach podmiotów trzecich, do których prowadzą linki, odpowiadają wyłącznie ich operatorzy. Niniejsze warunki podlegają prawu {{country}}.',
      ],
    ],
    cookies: [
      [
        'Stosowane technologie przechowywania',
        'Ta strona używa wyłącznie niezbędnych technologii przechowywania. Obejmuje to zapisywanie preferencji językowych oraz lokalny znacznik w przeglądarce, który pamięta zamknięcie komunikatu o cookies.',
      ],
      [
        'Cel użycia',
        'Te wpisy wspierają podstawowe działanie strony, utrzymują wybrany język i zapobiegają ponownemu pojawianiu się komunikatu przy każdym otwarciu strony po jego zamknięciu.',
      ],
      [
        'Rodzaje przechowywania',
        'W zależności od routingu wybrana lokalizacja językowa może być zapisana w niezbędnym pliku cookie. Stan komunikatu jest przechowywany w pamięci lokalnej przeglądarki pod kluczem "{{storageKey}}".',
      ],
      [
        'Brak analitycznych i marketingowych plików cookie',
        'W obecnym stanie witryna nie ustawia analitycznych, reklamowych ani marketingowych plików cookie.',
      ],
      [
        'Ustawienia przeglądarki',
        'W każdej chwili możesz usunąć lub zablokować pliki cookie oraz wpisy pamięci lokalnej w ustawieniach przeglądarki. Może to zresetować preferencje językowe lub spowodować ponowne wyświetlenie komunikatu.',
      ],
    ],
  },
  ru: {
    terms: [
      [
        'Сфера действия',
        'Настоящие условия регулируют использование сайта {{host}} и всей информации, материалов и способов связи, доступных через этот сайт.',
      ],
      [
        'Информационный контент',
        'Весь контент на этом сайте предоставляется только в общих информационных целях. Использование сайта не создаёт договор и не даёт права требовать оказания услуг.',
      ],
      [
        'Интеллектуальная собственность',
        'Тексты, изображения, товарные знаки, макеты и другой контент защищены применимыми правами интеллектуальной собственности. Повторное использование, распространение или изменение требуют предварительного разрешения.',
      ],
      [
        'Допустимое использование',
        'Сайт можно использовать только законным образом и без нарушения доступности, безопасности или опыта других пользователей. Автоматический сбор данных и злоупотребление каналами связи запрещены.',
      ],
      [
        'Ответственность',
        'Мы стремимся поддерживать точность и доступность сайта, но не гарантируем полноту, точность или бесперебойную работу. Обязательная ответственность по закону остаётся в силе.',
      ],
      [
        'Внешние ссылки и применимое право',
        'За содержание сторонних сайтов, на которые ведут ссылки, отвечают исключительно их владельцы. Настоящие условия регулируются законодательством {{country}}.',
      ],
    ],
    cookies: [
      [
        'Используемые технологии хранения',
        'Этот сайт использует только необходимые технологии хранения. Сюда входит сохранение языковых настроек и локальный флаг браузера, который запоминает закрытие уведомления о cookie.',
      ],
      [
        'Цель использования',
        'Эти записи поддерживают базовую работу сайта, сохраняют выбранный язык и не позволяют уведомлению появляться при каждом открытии страницы после его закрытия.',
      ],
      [
        'Типы хранения',
        'В зависимости от маршрутизации выбранная локаль может храниться в необходимом cookie. Состояние уведомления хранится в локальном хранилище браузера под ключом "{{storageKey}}".',
      ],
      [
        'Без аналитических и маркетинговых cookie',
        'В текущем состоянии сайт не устанавливает аналитические, рекламные или маркетинговые cookie.',
      ],
      [
        'Настройки браузера',
        'Вы можете в любое время удалить или заблокировать cookie и записи локального хранилища в настройках браузера. Это может сбросить языковые настройки или снова показать уведомление.',
      ],
    ],
  },
  fr: {
    terms: [
      [
        'Champ d’application',
        'Les présentes conditions régissent l’utilisation de {{host}} ainsi que de toutes les informations, de tous les médias et des possibilités de contact mis à disposition sur le site.',
      ],
      [
        'Contenu informatif',
        'L’ensemble du contenu de ce site est fourni à titre d’information générale uniquement. L’utilisation du site ne crée aucun contrat ni droit à obtenir des services.',
      ],
      [
        'Propriété intellectuelle',
        'Les textes, visuels, marques, mises en page et autres contenus sont protégés par les droits de propriété intellectuelle applicables. Toute réutilisation, diffusion ou modification nécessite une autorisation préalable.',
      ],
      [
        'Utilisation autorisée',
        'Le site ne peut être utilisé que de manière licite et sans nuire à sa disponibilité, à sa sécurité ou à l’expérience des autres utilisateurs. L’extraction automatisée de données ou l’usage abusif des canaux de contact est interdit.',
      ],
      [
        'Responsabilité',
        'Nous nous efforçons de maintenir un contenu exact et disponible, mais nous ne garantissons ni l’exhaustivité, ni l’exactitude, ni une disponibilité ininterrompue. Les responsabilités légales impératives demeurent inchangées.',
      ],
      [
        'Liens externes et droit applicable',
        'Le contenu des sites tiers liés relève exclusivement de la responsabilité de leurs exploitants. Les présentes conditions sont régies par le droit de {{country}}.',
      ],
    ],
    cookies: [
      [
        'Technologies de stockage utilisées',
        'Ce site utilise uniquement des technologies de stockage essentielles. Cela comprend l’enregistrement des préférences linguistiques ainsi qu’un indicateur local dans le navigateur permettant de mémoriser la fermeture de l’avis sur les cookies.',
      ],
      [
        'Finalité de l’utilisation',
        'Ces éléments prennent en charge le fonctionnement de base du site, conservent la langue sélectionnée et empêchent l’avis de réapparaître à chaque affichage de page après sa fermeture.',
      ],
      [
        'Types de stockage',
        'Selon le fonctionnement du routage, la langue choisie peut être stockée dans un cookie essentiel. L’état de l’avis est conservé dans le stockage local du navigateur sous la clé "{{storageKey}}".',
      ],
      [
        'Aucun cookie d’analyse ou de marketing',
        'Dans l’état actuel du site, aucun cookie d’analyse, publicitaire ou marketing n’est déposé.',
      ],
      [
        'Paramètres du navigateur',
        'Vous pouvez supprimer ou bloquer les cookies et les entrées de stockage local à tout moment dans les paramètres de votre navigateur. Cela peut réinitialiser les préférences linguistiques ou faire réapparaître l’avis.',
      ],
    ],
  },
  it: {
    terms: [
      [
        'Ambito di applicazione',
        'Le presenti condizioni disciplinano l’uso di {{host}} e di tutte le informazioni, i contenuti multimediali e le possibilità di contatto rese disponibili tramite il sito.',
      ],
      [
        'Contenuti informativi',
        'Tutti i contenuti di questo sito sono forniti esclusivamente a scopo informativo generale. L’uso del sito non crea alcun contratto né alcun diritto a ricevere servizi.',
      ],
      [
        'Proprietà intellettuale',
        'Testi, elementi visivi, marchi, layout e altri contenuti restano protetti dalle norme applicabili in materia di proprietà intellettuale. Il riutilizzo, la distribuzione o la modifica richiedono un’autorizzazione preventiva.',
      ],
      [
        'Uso consentito',
        'Il sito può essere utilizzato solo in modo lecito e senza interferire con disponibilità, sicurezza o esperienza degli altri utenti. Sono vietati lo scraping automatizzato e l’uso improprio dei canali di contatto.',
      ],
      [
        'Responsabilità',
        'Ci impegniamo a mantenere il sito accurato e disponibile, ma non garantiamo completezza, correttezza o continuità del servizio. Restano ferme le responsabilità obbligatorie previste dalla legge.',
      ],
      [
        'Link esterni e legge applicabile',
        'I siti di terzi collegati restano sotto la responsabilità dei rispettivi gestori. Le presenti condizioni sono regolate dalle leggi di {{country}}.',
      ],
    ],
    cookies: [
      [
        'Tecnologie di archiviazione utilizzate',
        'Questo sito utilizza solo tecnologie di archiviazione essenziali. Ciò include il salvataggio delle preferenze linguistiche e un indicatore locale del browser che ricorda la chiusura dell’avviso sui cookie.',
      ],
      [
        'Finalità dell’uso',
        'Questi elementi supportano il funzionamento di base del sito, mantengono coerente la lingua selezionata e impediscono all’avviso di riapparire a ogni apertura di pagina dopo la chiusura.',
      ],
      [
        'Tipi di archiviazione',
        'A seconda del comportamento del routing, la locale selezionata può essere memorizzata in un cookie essenziale. Lo stato dell’avviso viene salvato nella memoria locale del browser con la chiave "{{storageKey}}".',
      ],
      [
        'Nessun cookie analitico o di marketing',
        'Nello stato attuale del sito non vengono impostati cookie analitici, pubblicitari o di marketing.',
      ],
      [
        'Controlli del browser',
        'Puoi rimuovere o bloccare i cookie e le voci della memoria locale in qualsiasi momento dalle impostazioni del browser. Ciò può reimpostare le preferenze linguistiche o far riapparire l’avviso.',
      ],
    ],
  },
  es: {
    terms: [
      [
        'Ámbito de aplicación',
        'Estas condiciones regulan el uso de {{host}} y de toda la información, los materiales y las opciones de contacto disponibles a través del sitio web.',
      ],
      [
        'Contenido informativo',
        'Todo el contenido de este sitio web se ofrece únicamente con fines de información general. El uso del sitio no crea un contrato ni un derecho a recibir servicios.',
      ],
      [
        'Propiedad intelectual',
        'Los textos, imágenes, marcas, diseños y demás contenidos están protegidos por los derechos de propiedad intelectual aplicables. La reutilización, distribución o modificación requiere autorización previa.',
      ],
      [
        'Uso permitido',
        'El sitio web solo puede utilizarse de forma lícita y sin interferir con su disponibilidad, seguridad o la experiencia de otros usuarios. Se prohíbe la extracción automatizada de datos y el uso indebido de los canales de contacto.',
      ],
      [
        'Responsabilidad',
        'Nos esforzamos por mantener el sitio exacto y disponible, pero no garantizamos su integridad, exactitud ni disponibilidad ininterrumpida. La responsabilidad legal obligatoria no se ve afectada.',
      ],
      [
        'Enlaces externos y ley aplicable',
        'Los sitios web de terceros enlazados siguen siendo responsabilidad exclusiva de sus respectivos operadores. Estas condiciones se rigen por las leyes de {{country}}.',
      ],
    ],
    cookies: [
      [
        'Tecnologías de almacenamiento utilizadas',
        'Este sitio web utiliza únicamente tecnologías de almacenamiento esenciales. Esto incluye el guardado de las preferencias de idioma y un indicador local del navegador que recuerda si ya se ha cerrado el aviso de cookies.',
      ],
      [
        'Finalidad del uso',
        'Estas entradas respaldan el funcionamiento básico del sitio, mantienen el idioma seleccionado y evitan que el aviso vuelva a aparecer en cada visita después de haberlo cerrado.',
      ],
      [
        'Tipos de almacenamiento',
        'Según el comportamiento del enrutado, la configuración regional seleccionada puede almacenarse en una cookie esencial. El estado del aviso se guarda en el almacenamiento local del navegador con la clave "{{storageKey}}".',
      ],
      [
        'Sin cookies analíticas ni de marketing',
        'En el estado actual del sitio web no se configuran cookies analíticas, publicitarias ni de marketing.',
      ],
      [
        'Controles del navegador',
        'Puedes eliminar o bloquear las cookies y las entradas de almacenamiento local en la configuración del navegador en cualquier momento. Esto puede restablecer las preferencias de idioma o hacer que el aviso vuelva a mostrarse.',
      ],
    ],
  },
  pt: {
    terms: [
      [
        'Âmbito de aplicação',
        'Estes termos regulam a utilização de {{host}} e de todas as informações, conteúdos multimédia e opções de contacto disponibilizadas através do website.',
      ],
      [
        'Conteúdo informativo',
        'Todo o conteúdo deste website é fornecido apenas para informação geral. A utilização do website não cria qualquer contrato nem confere direito à prestação de serviços.',
      ],
      [
        'Propriedade intelectual',
        'Textos, elementos visuais, marcas, layouts e outros conteúdos permanecem protegidos pelos direitos de propriedade intelectual aplicáveis. A reutilização, distribuição ou modificação requer autorização prévia.',
      ],
      [
        'Utilização permitida',
        'O website só pode ser utilizado de forma lícita e sem interferir com a disponibilidade, a segurança ou a experiência de outros utilizadores. É proibida a recolha automatizada de dados e o uso abusivo dos canais de contacto.',
      ],
      [
        'Responsabilidade',
        'Empenhamo-nos em manter o website correto e disponível, mas não garantimos a sua integralidade, exatidão ou disponibilidade ininterrupta. A responsabilidade legal obrigatória mantém-se inalterada.',
      ],
      [
        'Links externos e lei aplicável',
        'Os websites de terceiros associados permanecem sob a responsabilidade exclusiva dos respetivos operadores. Estes termos regem-se pelas leis de {{country}}.',
      ],
    ],
    cookies: [
      [
        'Tecnologias de armazenamento utilizadas',
        'Este website utiliza apenas tecnologias de armazenamento essenciais. Isto inclui o armazenamento das preferências de idioma e um indicador local do navegador que memoriza o fecho do aviso de cookies.',
      ],
      [
        'Finalidade da utilização',
        'Estes registos suportam o funcionamento básico do website, mantêm o idioma selecionado e evitam que o aviso volte a aparecer a cada visita após ter sido fechado.',
      ],
      [
        'Tipos de armazenamento',
        'Consoante o comportamento do encaminhamento, a localidade selecionada pode ser guardada num cookie essencial. O estado do aviso é armazenado no armazenamento local do navegador com a chave "{{storageKey}}".',
      ],
      [
        'Sem cookies analíticos nem de marketing',
        'No estado atual do website não são definidos cookies analíticos, publicitários ou de marketing.',
      ],
      [
        'Controlos do navegador',
        'Pode remover ou bloquear cookies e entradas de armazenamento local nas definições do navegador a qualquer momento. Isto pode repor as preferências de idioma ou fazer com que o aviso volte a surgir.',
      ],
    ],
  },
  nl: {
    terms: [
      [
        'Toepassingsgebied',
        'Deze voorwaarden regelen het gebruik van {{host}} en alle informatie, media en contactmogelijkheden die via de website beschikbaar worden gesteld.',
      ],
      [
        'Informatieve inhoud',
        'Alle inhoud op deze website is uitsluitend bedoeld voor algemene informatie. Het gebruik van de website creëert geen overeenkomst en geeft geen recht op diensten.',
      ],
      [
        'Intellectueel eigendom',
        'Teksten, beelden, handelsmerken, lay-outs en andere inhoud blijven beschermd door de toepasselijke intellectuele eigendomsrechten. Hergebruik, verspreiding of wijziging vereist voorafgaande toestemming.',
      ],
      [
        'Toegestaan gebruik',
        'De website mag alleen rechtmatig worden gebruikt en zonder de beschikbaarheid, veiligheid of ervaring van andere gebruikers te verstoren. Geautomatiseerd scrapen of misbruik van contactkanalen is verboden.',
      ],
      [
        'Aansprakelijkheid',
        'Wij streven ernaar de website correct en beschikbaar te houden, maar garanderen geen volledigheid, juistheid of ononderbroken beschikbaarheid. Verplichte wettelijke aansprakelijkheid blijft onverminderd van kracht.',
      ],
      [
        'Externe links en toepasselijk recht',
        'Voor gelinkte websites van derden zijn uitsluitend hun respectieve beheerders verantwoordelijk. Op deze voorwaarden is het recht van {{country}} van toepassing.',
      ],
    ],
    cookies: [
      [
        'Gebruikte opslagtechnologieën',
        'Deze website gebruikt alleen essentiële opslagtechnologieën. Hieronder vallen het opslaan van taalvoorkeuren en een lokale browsermarkering die onthoudt of de cookiemelding is gesloten.',
      ],
      [
        'Doel van het gebruik',
        'Deze vermeldingen ondersteunen de basiswerking van de website, houden de gekozen taal consistent en voorkomen dat de melding na het sluiten bij elk paginabezoek opnieuw verschijnt.',
      ],
      [
        'Soorten opslag',
        'Afhankelijk van het routeringsgedrag kan de geselecteerde locale in een essentiële cookie worden opgeslagen. De status van de melding wordt in de lokale browseropslag bewaard onder de sleutel "{{storageKey}}".',
      ],
      [
        'Geen analytische of marketingcookies',
        'In de huidige staat van de website worden geen analytische, advertentie- of marketingcookies geplaatst.',
      ],
      [
        'Browserinstellingen',
        'U kunt cookies en vermeldingen in de lokale opslag op elk moment verwijderen of blokkeren via uw browserinstellingen. Hierdoor kunnen taalvoorkeuren worden gereset of kan de melding opnieuw verschijnen.',
      ],
    ],
  },
  hu: {
    terms: [
      [
        'Hatály',
        'Ezek a feltételek a(z) {{host}} webhely használatát, valamint a weboldalon elérhető valamennyi információt, médiatartalmat és kapcsolati lehetőséget szabályozzák.',
      ],
      [
        'Tájékoztató tartalom',
        'A weboldalon található minden tartalom kizárólag általános tájékoztatásul szolgál. A weboldal használata nem hoz létre szerződést és nem keletkeztet szolgáltatásnyújtásra vonatkozó jogosultságot.',
      ],
      [
        'Szellemi tulajdon',
        'A szövegek, képi elemek, védjegyek, elrendezések és egyéb tartalmak a vonatkozó szellemi tulajdonjogi szabályok védelme alatt állnak. Az újbóli felhasználás, terjesztés vagy módosítás előzetes engedélyhez kötött.',
      ],
      [
        'Megengedett használat',
        'A weboldal kizárólag jogszerűen és úgy használható, hogy az ne zavarja a rendelkezésre állást, a biztonságot vagy más felhasználók élményét. Az automatizált adatgyűjtés és a kapcsolati csatornák visszaélésszerű használata tilos.',
      ],
      [
        'Felelősség',
        'Törekszünk arra, hogy a weboldal pontos és elérhető legyen, de nem garantáljuk a teljességet, a pontosságot vagy a folyamatos rendelkezésre állást. A kötelező jogszabályi felelősség változatlanul fennmarad.',
      ],
      [
        'Külső hivatkozások és alkalmazandó jog',
        'A hivatkozott harmadik fél weboldalaiért kizárólag azok üzemeltetői felelnek. Ezekre a feltételekre {{country}} joga alkalmazandó.',
      ],
    ],
    cookies: [
      [
        'Használt tárolási technológiák',
        'Ez a weboldal kizárólag alapvető tárolási technológiákat használ. Ide tartozik a nyelvi beállítások mentése és egy helyi böngészőjelző, amely megjegyzi, hogy a sütiértesítést bezárták-e.',
      ],
      [
        'A használat célja',
        'Ezek a bejegyzések támogatják a weboldal alapvető működését, egységesen megőrzik a kiválasztott nyelvet, és megakadályozzák, hogy az értesítés minden oldalletöltéskor újra megjelenjen a bezárás után.',
      ],
      [
        'Tárolási típusok',
        'Az útvonalkezelés működésétől függően a kiválasztott területi beállítás egy szükséges sütiben tárolható. Az értesítés állapota a böngésző helyi tárhelyén kerül mentésre a(z) "{{storageKey}}" kulcs alatt.',
      ],
      [
        'Nincsenek analitikai vagy marketing sütik',
        'A weboldal jelenlegi állapotában nem állít be analitikai, hirdetési vagy marketing célú sütiket.',
      ],
      [
        'Böngészőbeállítások',
        'A sütiket és a helyi tárhely bejegyzéseit bármikor törölheti vagy letilthatja a böngésző beállításaiban. Ez visszaállíthatja a nyelvi preferenciákat, vagy az értesítés újbóli megjelenését okozhatja.',
      ],
    ],
  },
  ro: {
    terms: [
      [
        'Domeniu de aplicare',
        'Acești termeni reglementează utilizarea {{host}} și a tuturor informațiilor, materialelor media și opțiunilor de contact puse la dispoziție prin intermediul site-ului.',
      ],
      [
        'Conținut informativ',
        'Tot conținutul acestui site este furnizat doar în scop de informare generală. Utilizarea site-ului nu creează un contract și nu conferă un drept de a primi servicii.',
      ],
      [
        'Proprietate intelectuală',
        'Textele, elementele vizuale, mărcile, aspectele grafice și alte conținuturi rămân protejate de drepturile de proprietate intelectuală aplicabile. Reutilizarea, distribuirea sau modificarea necesită permisiune prealabilă.',
      ],
      [
        'Utilizare permisă',
        'Site-ul poate fi utilizat doar în mod legal și fără a afecta disponibilitatea, securitatea sau experiența altor utilizatori. Colectarea automată de date și utilizarea abuzivă a canalelor de contact sunt interzise.',
      ],
      [
        'Răspundere',
        'Depunem eforturi pentru a menține site-ul corect și disponibil, dar nu garantăm caracterul complet, exactitatea sau funcționarea neîntreruptă. Răspunderea legală obligatorie rămâne neafectată.',
      ],
      [
        'Linkuri externe și lege aplicabilă',
        'Site-urile terților către care există linkuri rămân în responsabilitatea exclusivă a operatorilor lor. Acești termeni sunt guvernați de legile din {{country}}.',
      ],
    ],
    cookies: [
      [
        'Tehnologii de stocare utilizate',
        'Acest site folosește doar tehnologii esențiale de stocare. Acestea includ salvarea preferințelor de limbă și un indicator local din browser care reține dacă notificarea privind cookie-urile a fost închisă.',
      ],
      [
        'Scopul utilizării',
        'Aceste înregistrări susțin funcționarea de bază a site-ului, păstrează limba selectată și împiedică reapariția notificării la fiecare afișare a paginii după închidere.',
      ],
      [
        'Tipuri de stocare',
        'În funcție de comportamentul rutării, limba selectată poate fi stocată într-un cookie esențial. Starea notificării este salvată în stocarea locală a browserului sub cheia "{{storageKey}}".',
      ],
      [
        'Fără cookie-uri de analiză sau marketing',
        'În starea actuală a site-ului nu sunt setate cookie-uri de analiză, publicitate sau marketing.',
      ],
      [
        'Setările browserului',
        'Puteți elimina sau bloca oricând cookie-urile și intrările din stocarea locală din setările browserului. Acest lucru poate reseta preferințele de limbă sau poate face ca notificarea să apară din nou.',
      ],
    ],
  },
  bg: {
    terms: [
      [
        'Обхват',
        'Тези условия уреждат използването на {{host}} и цялата информация, материали и възможности за контакт, предоставени чрез сайта.',
      ],
      [
        'Информационно съдържание',
        'Цялото съдържание на този сайт е предоставено само за обща информация. Използването на сайта не създава договор и не дава право на получаване на услуги.',
      ],
      [
        'Интелектуална собственост',
        'Текстовете, изображенията, търговските марки, оформленията и другото съдържание са защитени от приложимите права на интелектуална собственост. Повторното използване, разпространението или промените изискват предварително разрешение.',
      ],
      [
        'Допустима употреба',
        'Сайтът може да се използва само законосъобразно и без да се засяга неговата достъпност, сигурност или работата за други потребители. Автоматизираното извличане на данни и злоупотребата с каналите за контакт са забранени.',
      ],
      [
        'Отговорност',
        'Стремим се да поддържаме сайта точен и достъпен, но не гарантираме пълнота, точност или непрекъсната наличност. Задължителната отговорност по закон остава непроменена.',
      ],
      [
        'Външни връзки и приложимо право',
        'Съдържанието на свързаните сайтове на трети страни остава изцяло отговорност на техните оператори. Тези условия се уреждат от законите на {{country}}.',
      ],
    ],
    cookies: [
      [
        'Използвани технологии за съхранение',
        'Този сайт използва само необходими технологии за съхранение. Това включва запазване на езиковите предпочитания и локален индикатор в браузъра, който помни дали известието за бисквитки е било затворено.',
      ],
      [
        'Цел на използването',
        'Тези записи поддържат основната работа на сайта, запазват избрания език и предотвратяват повторната поява на известието при всяко отваряне на страница след затварянето му.',
      ],
      [
        'Видове съхранение',
        'В зависимост от начина на маршрутизиране избраната локализация може да се съхранява в необходима бисквитка. Състоянието на известието се пази в локалното хранилище на браузъра под ключ "{{storageKey}}".',
      ],
      [
        'Без аналитични и маркетингови бисквитки',
        'В текущото състояние на сайта не се задават аналитични, рекламни или маркетингови бисквитки.',
      ],
      [
        'Настройки на браузъра',
        'Можете по всяко време да премахнете или блокирате бисквитките и записите в локалното хранилище от настройките на браузъра. Това може да нулира езиковите предпочитания или отново да покаже известието.',
      ],
    ],
  },
  hr: {
    terms: [
      [
        'Područje primjene',
        'Ovi uvjeti uređuju korištenje stranice {{host}} i svih informacija, medija te mogućnosti kontakta dostupnih putem web-stranice.',
      ],
      [
        'Informativni sadržaj',
        'Sav sadržaj na ovoj web-stranici služi isključivo za opće informiranje. Korištenje stranice ne stvara ugovor niti pravo na pružanje usluga.',
      ],
      [
        'Intelektualno vlasništvo',
        'Tekstovi, vizuali, žigovi, rasporedi i ostali sadržaji zaštićeni su primjenjivim pravima intelektualnog vlasništva. Ponovna uporaba, distribucija ili izmjena zahtijevaju prethodno odobrenje.',
      ],
      [
        'Dopuštena uporaba',
        'Web-stranica smije se koristiti samo zakonito i bez ometanja dostupnosti, sigurnosti ili iskustva drugih korisnika. Automatizirano prikupljanje podataka i zlouporaba kontaktnih kanala su zabranjeni.',
      ],
      [
        'Odgovornost',
        'Nastojimo održavati sadržaj točnim i dostupnim, ali ne jamčimo potpunost, točnost ni neprekidnu dostupnost. Obvezna zakonska odgovornost ostaje nepromijenjena.',
      ],
      [
        'Vanjske poveznice i mjerodavno pravo',
        'Za sadržaj povezanih web-stranica trećih strana isključivo odgovaraju njihovi operatori. Ovi uvjeti uređeni su pravom države {{country}}.',
      ],
    ],
    cookies: [
      [
        'Korištene tehnologije pohrane',
        'Ova web-stranica koristi samo nužne tehnologije pohrane. To uključuje spremanje jezičnih postavki i lokalni zapis u pregledniku koji pamti je li obavijest o kolačićima zatvorena.',
      ],
      [
        'Svrha uporabe',
        'Ti zapisi podupiru osnovno funkcioniranje stranice, zadržavaju odabrani jezik i sprječavaju ponovno prikazivanje obavijesti pri svakom učitavanju stranice nakon zatvaranja.',
      ],
      [
        'Vrste pohrane',
        'Ovisno o načinu usmjeravanja, odabrana lokalizacija može se spremiti u nužni kolačić. Stanje obavijesti sprema se u lokalnu pohranu preglednika pod ključem "{{storageKey}}".',
      ],
      [
        'Bez analitičkih ili marketinških kolačića',
        'U trenutačnom stanju web-stranica ne postavlja analitičke, oglasne ni marketinške kolačiće.',
      ],
      [
        'Postavke preglednika',
        'Kolačiće i zapise lokalne pohrane možete u svakom trenutku ukloniti ili blokirati u postavkama preglednika. To može resetirati jezične postavke ili uzrokovati ponovno prikazivanje obavijesti.',
      ],
    ],
  },
  sl: {
    terms: [
      [
        'Področje uporabe',
        'Ti pogoji urejajo uporabo spletnega mesta {{host}} ter vseh informacij, medijev in možnosti za stik, ki so na voljo prek spletnega mesta.',
      ],
      [
        'Informativna vsebina',
        'Vsa vsebina na tem spletnem mestu je namenjena izključno splošnemu obveščanju. Uporaba spletnega mesta ne ustvarja pogodbe ali pravice do prejemanja storitev.',
      ],
      [
        'Intelektualna lastnina',
        'Besedila, vizualni elementi, blagovne znamke, postavitve in druge vsebine so zaščitene z veljavnimi pravicami intelektualne lastnine. Ponovna uporaba, razširjanje ali spreminjanje zahtevajo predhodno dovoljenje.',
      ],
      [
        'Dovoljena uporaba',
        'Spletno mesto se sme uporabljati le zakonito in brez poseganja v dostopnost, varnost ali izkušnjo drugih uporabnikov. Avtomatizirano zajemanje podatkov in zloraba kontaktnih poti sta prepovedana.',
      ],
      [
        'Odgovornost',
        'Prizadevamo si, da bi bilo spletno mesto pravilno in dostopno, vendar ne jamčimo za popolnost, točnost ali neprekinjeno razpoložljivost. Obvezna zakonska odgovornost ostaja nespremenjena.',
      ],
      [
        'Zunanje povezave in veljavno pravo',
        'Za vsebino povezanih spletnih mest tretjih oseb so odgovorni izključno njihovi upravljavci. Ti pogoji se presojajo po pravu države {{country}}.',
      ],
    ],
    cookies: [
      [
        'Uporabljene tehnologije shranjevanja',
        'To spletno mesto uporablja samo nujne tehnologije shranjevanja. To vključuje shranjevanje jezikovnih nastavitev in lokalni zapis v brskalniku, ki si zapomni zaprtje obvestila o piškotkih.',
      ],
      [
        'Namen uporabe',
        'Ti zapisi podpirajo osnovno delovanje spletnega mesta, ohranjajo izbrani jezik in preprečujejo, da bi se obvestilo po zaprtju prikazalo ob vsakem ogledu strani.',
      ],
      [
        'Vrste shranjevanja',
        'Glede na delovanje usmerjanja je lahko izbrana lokalizacija shranjena v nujnem piškotku. Stanje obvestila se shrani v lokalno shrambo brskalnika pod ključem "{{storageKey}}".',
      ],
      [
        'Brez analitičnih ali marketinških piškotkov',
        'V trenutnem stanju spletno mesto ne nastavlja analitičnih, oglaševalskih ali marketinških piškotkov.',
      ],
      [
        'Nastavitve brskalnika',
        'Piškotke in vnose lokalne shrambe lahko kadar koli odstranite ali blokirate v nastavitvah brskalnika. To lahko ponastavi jezikovne nastavitve ali povzroči, da se obvestilo znova prikaže.',
      ],
    ],
  },
  sv: {
    terms: [
      [
        'Tillämpningsområde',
        'Dessa villkor reglerar användningen av {{host}} och all information, media och kontaktmöjligheter som görs tillgängliga via webbplatsen.',
      ],
      [
        'Informativt innehåll',
        'Allt innehåll på denna webbplats tillhandahålls endast som allmän information. Användningen av webbplatsen skapar inget avtal och ger ingen rätt till tjänster.',
      ],
      [
        'Immateriella rättigheter',
        'Texter, bilder, varumärken, layouter och annat innehåll skyddas av tillämpliga immaterialrättsliga regler. Återanvändning, spridning eller ändring kräver föregående tillstånd.',
      ],
      [
        'Tillåten användning',
        'Webbplatsen får endast användas lagligt och utan att påverka tillgänglighet, säkerhet eller andra användares upplevelse. Automatiserad insamling av data eller missbruk av kontaktkanaler är förbjudet.',
      ],
      [
        'Ansvar',
        'Vi strävar efter att hålla webbplatsen korrekt och tillgänglig, men vi garanterar inte fullständighet, riktighet eller oavbruten tillgänglighet. Tvingande lagstadgat ansvar påverkas inte.',
      ],
      [
        'Externa länkar och tillämplig lag',
        'Innehållet på länkade tredjepartswebbplatser är respektive operatörs ansvar. Dessa villkor regleras av lagarna i {{country}}.',
      ],
    ],
    cookies: [
      [
        'Använda lagringstekniker',
        'Denna webbplats använder endast nödvändiga lagringstekniker. Detta omfattar lagring av språkpreferenser och en lokal markering i webbläsaren som kommer ihåg om cookie-meddelandet har stängts.',
      ],
      [
        'Syftet med användningen',
        'Dessa poster stöder webbplatsens grundläggande funktion, håller det valda språket konsekvent och förhindrar att meddelandet visas igen vid varje sidvisning efter att det har stängts.',
      ],
      [
        'Typer av lagring',
        'Beroende på hur routningen fungerar kan vald språkversion lagras i en nödvändig cookie. Meddelandets status lagras i webbläsarens lokala lagring under nyckeln "{{storageKey}}".',
      ],
      [
        'Inga analys- eller marknadsföringscookies',
        'I webbplatsens nuvarande skick sätts inga analys-, annons- eller marknadsföringscookies.',
      ],
      [
        'Webbläsarinställningar',
        'Du kan när som helst ta bort eller blockera cookies och poster i lokal lagring i webbläsarens inställningar. Detta kan återställa språkpreferenser eller göra att meddelandet visas igen.',
      ],
    ],
  },
  da: {
    terms: [
      [
        'Anvendelsesområde',
        'Disse vilkår regulerer brugen af {{host}} og alle oplysninger, medier og kontaktmuligheder, der stilles til rådighed via websitet.',
      ],
      [
        'Informativt indhold',
        'Alt indhold på dette website leveres kun til generel information. Brugen af websitet skaber ingen aftale og giver ingen ret til at modtage ydelser.',
      ],
      [
        'Immaterielle rettigheder',
        'Tekster, visuelle elementer, varemærker, layouts og andet indhold er beskyttet af gældende immaterielle rettigheder. Genbrug, distribution eller ændring kræver forudgående tilladelse.',
      ],
      [
        'Tilladt brug',
        'Websitet må kun bruges lovligt og uden at forstyrre tilgængelighed, sikkerhed eller andre brugeres oplevelse. Automatiseret indsamling af data eller misbrug af kontaktkanaler er forbudt.',
      ],
      [
        'Ansvar',
        'Vi bestræber os på at holde websitet korrekt og tilgængeligt, men vi garanterer ikke fuldstændighed, nøjagtighed eller uafbrudt tilgængelighed. Ufravigeligt lovbestemt ansvar forbliver upåvirket.',
      ],
      [
        'Eksterne links og gældende ret',
        'Indholdet på linkede tredjepartswebsites er de respektive operatørers ansvar. Disse vilkår er underlagt lovgivningen i {{country}}.',
      ],
    ],
    cookies: [
      [
        'Anvendte lagringsteknologier',
        'Dette website anvender kun nødvendige lagringsteknologier. Det omfatter lagring af sprogpræferencer og en lokal browsermarkering, der husker, om cookie-meddelelsen er blevet lukket.',
      ],
      [
        'Formålet med brugen',
        'Disse poster understøtter websitets grundlæggende funktion, bevarer det valgte sprog og forhindrer, at meddelelsen vises igen ved hver sidevisning efter lukning.',
      ],
      [
        'Typer af lagring',
        'Afhængigt af routingen kan den valgte lokalisering gemmes i en nødvendig cookie. Meddelelsens status gemmes i browserens lokale lagring under nøglen "{{storageKey}}".',
      ],
      [
        'Ingen analyse- eller marketingcookies',
        'I websitets nuværende tilstand sættes der ingen analyse-, annonce- eller marketingcookies.',
      ],
      [
        'Browserindstillinger',
        'Du kan til enhver tid fjerne eller blokere cookies og poster i lokal lagring i browserens indstillinger. Det kan nulstille sprogpræferencer eller få meddelelsen til at vises igen.',
      ],
    ],
  },
  fi: {
    terms: [
      [
        'Soveltamisala',
        'Nämä ehdot säätelevät sivuston {{host}} käyttöä sekä kaikkia verkkosivuston kautta tarjottavia tietoja, mediasisältöjä ja yhteydenottotapoja.',
      ],
      [
        'Informatiivinen sisältö',
        'Kaikki tämän verkkosivuston sisältö tarjotaan ainoastaan yleiseksi tiedoksi. Verkkosivuston käyttö ei muodosta sopimusta eikä oikeutta palvelujen saamiseen.',
      ],
      [
        'Immateriaalioikeudet',
        'Tekstit, visuaaliset elementit, tavaramerkit, asettelut ja muu sisältö ovat sovellettavien immateriaalioikeuksien suojaamia. Uudelleenkäyttö, jakelu tai muokkaus edellyttää ennakkolupaa.',
      ],
      [
        'Sallittu käyttö',
        'Verkkosivustoa saa käyttää vain lainmukaisesti ja häiritsemättä sen saatavuutta, turvallisuutta tai muiden käyttäjien käyttökokemusta. Automaattinen tiedonkeruu ja yhteydenottokanavien väärinkäyttö on kielletty.',
      ],
      [
        'Vastuu',
        'Pyrimme pitämään verkkosivuston oikeana ja saatavilla, mutta emme takaa täydellisyyttä, paikkansapitävyyttä tai keskeytymätöntä saatavuutta. Pakottava lakisääteinen vastuu säilyy ennallaan.',
      ],
      [
        'Ulkoiset linkit ja sovellettava laki',
        'Linkitettyjen kolmansien osapuolten verkkosivustojen sisällöstä vastaavat yksinomaan niiden ylläpitäjät. Näihin ehtoihin sovelletaan {{country}}:n lakia.',
      ],
    ],
    cookies: [
      [
        'Käytetyt tallennustekniikat',
        'Tämä verkkosivusto käyttää vain välttämättömiä tallennustekniikoita. Näihin kuuluu kieliasetusten tallentaminen sekä selaimen paikallinen merkintä, joka muistaa evästeilmoituksen sulkemisen.',
      ],
      [
        'Käytön tarkoitus',
        'Nämä tiedot tukevat sivuston perustoimintaa, säilyttävät valitun kielen ja estävät ilmoitusta näkymästä uudelleen jokaisella sivulatauksella sen sulkemisen jälkeen.',
      ],
      [
        'Tallennustyypit',
        'Reitityksen toiminnasta riippuen valittu kieliasetus voidaan tallentaa välttämättömään evästeeseen. Ilmoituksen tila tallennetaan selaimen paikalliseen tallennustilaan avaimella "{{storageKey}}".',
      ],
      [
        'Ei analytiikka- tai markkinointievästeitä',
        'Verkkosivuston nykyisessä tilassa ei aseteta analytiikka-, mainos- tai markkinointievästeitä.',
      ],
      [
        'Selaimen asetukset',
        'Voit poistaa tai estää evästeet ja paikallisen tallennustilan merkinnät milloin tahansa selaimesi asetuksissa. Tämä voi nollata kieliasetukset tai aiheuttaa ilmoituksen näyttämisen uudelleen.',
      ],
    ],
  },
  et: {
    terms: [
      [
        'Kohaldamisala',
        'Need tingimused reguleerivad veebisaidi {{host}} kasutamist ning kogu teavet, meediasisu ja kontaktivõimalusi, mis on veebisaidi kaudu kättesaadavad.',
      ],
      [
        'Informatiivne sisu',
        'Kogu selle veebisaidi sisu on esitatud üksnes üldiseks teavituseks. Veebisaidi kasutamine ei loo lepingut ega õigust teenuste saamiseks.',
      ],
      [
        'Intellektuaalomand',
        'Tekstid, visuaalid, kaubamärgid, paigutused ja muu sisu on kaitstud kohaldatavate intellektuaalomandi õigustega. Taaskasutamine, levitamine või muutmine nõuab eelnevat luba.',
      ],
      [
        'Lubatud kasutus',
        'Veebisaiti tohib kasutada ainult seaduslikult ning selle kättesaadavust, turvalisust või teiste kasutajate kogemust häirimata. Andmete automaatne kogumine ja kontaktkanalite kuritarvitamine on keelatud.',
      ],
      [
        'Vastutus',
        'Püüame hoida veebisaiti täpse ja kättesaadavana, kuid ei taga täielikkust, õigsust ega katkestusteta kättesaadavust. Kohustuslik seadusjärgne vastutus jääb muutumatuks.',
      ],
      [
        'Välised lingid ja kohaldatav õigus',
        'Lingitud kolmandate osapoolte veebisaitide sisu eest vastutavad üksnes nende haldajad. Nendele tingimustele kohaldatakse {{country}} õigust.',
      ],
    ],
    cookies: [
      [
        'Kasutatavad salvestustehnoloogiad',
        'See veebisait kasutab ainult hädavajalikke salvestustehnoloogiaid. See hõlmab keele-eelistuste salvestamist ja brauseri kohalikku märget, mis jätab meelde küpsisteate sulgemise.',
      ],
      [
        'Kasutamise eesmärk',
        'Need kirjed toetavad veebisaidi põhifunktsioone, hoiavad valitud keele järjepidevana ja takistavad teatel pärast sulgemist igal lehevaatamisel uuesti ilmumast.',
      ],
      [
        'Salvestuse tüübid',
        'Olenevalt marsruutimise toimimisest võidakse valitud lokaad salvestada hädavajalikku küpsisesse. Teate olek salvestatakse brauseri kohalikku salvestusse võtme "{{storageKey}}" all.',
      ],
      [
        'Analüütilisi ega turundusküpsiseid ei kasutata',
        'Veebisaidi praeguses seisus ei seata analüütilisi, reklaami- ega turundusküpsiseid.',
      ],
      [
        'Brauseri seaded',
        'Saate küpsiseid ja kohaliku salvestuse kirjeid igal ajal brauseri seadetes eemaldada või blokeerida. See võib lähtestada keele-eelistused või põhjustada teate uuesti ilmumise.',
      ],
    ],
  },
  lv: {
    terms: [
      [
        'Piemērošanas joma',
        'Šie noteikumi regulē vietnes {{host}} izmantošanu, kā arī visu informāciju, medijus un saziņas iespējas, kas pieejamas vietnē.',
      ],
      [
        'Informatīvs saturs',
        'Viss šīs vietnes saturs tiek sniegts tikai vispārīgas informācijas nolūkos. Vietnes izmantošana nerada līgumu un nepiešķir tiesības saņemt pakalpojumus.',
      ],
      [
        'Intelektuālais īpašums',
        'Teksti, vizuālie materiāli, preču zīmes, izkārtojumi un cits saturs ir aizsargāti ar piemērojamām intelektuālā īpašuma tiesībām. Atkārtotai izmantošanai, izplatīšanai vai pārveidošanai ir nepieciešama iepriekšēja atļauja.',
      ],
      [
        'Atļautā izmantošana',
        'Vietni drīkst izmantot tikai likumīgi un netraucējot tās pieejamību, drošību vai citu lietotāju pieredzi. Automatizēta datu iegūšana un saziņas kanālu ļaunprātīga izmantošana ir aizliegta.',
      ],
      [
        'Atbildība',
        'Mēs cenšamies uzturēt vietni precīzu un pieejamu, taču negarantējam pilnīgumu, pareizību vai nepārtrauktu pieejamību. Obligātā likumā noteiktā atbildība netiek ierobežota.',
      ],
      [
        'Ārējās saites un piemērojamie tiesību akti',
        'Par saistīto trešo personu vietņu saturu atbild tikai to operatori. Uz šiem noteikumiem attiecas {{country}} tiesību akti.',
      ],
    ],
    cookies: [
      [
        'Izmantotās glabāšanas tehnoloģijas',
        'Šī vietne izmanto tikai būtiskas glabāšanas tehnoloģijas. Tas ietver valodas iestatījumu saglabāšanu un lokālu pārlūka atzīmi, kas atceras sīkdatņu paziņojuma aizvēršanu.',
      ],
      [
        'Izmantošanas mērķis',
        'Šie ieraksti nodrošina vietnes pamatdarbību, saglabā izvēlēto valodu un novērš paziņojuma atkārtotu rādīšanu katrā lapas atvēršanas reizē pēc tā aizvēršanas.',
      ],
      [
        'Glabāšanas veidi',
        'Atkarībā no maršrutēšanas darbības izvēlētā lokalizācija var tikt saglabāta būtiskā sīkdatnē. Paziņojuma statuss tiek saglabāts pārlūka lokālajā krātuvē ar atslēgu "{{storageKey}}".',
      ],
      [
        'Nav analītisko vai mārketinga sīkdatņu',
        'Pašreizējā vietnes stāvoklī netiek iestatītas analītiskās, reklāmas vai mārketinga sīkdatnes.',
      ],
      [
        'Pārlūka iestatījumi',
        'Jūs jebkurā laikā varat dzēst vai bloķēt sīkdatnes un lokālās krātuves ierakstus pārlūka iestatījumos. Tas var atiestatīt valodas izvēles vai izraisīt paziņojuma atkārtotu parādīšanos.',
      ],
    ],
  },
  lt: {
    terms: [
      [
        'Taikymo sritis',
        'Šios sąlygos reglamentuoja svetainės {{host}} naudojimą ir visą informaciją, mediją bei kontaktų galimybes, pateikiamas per svetainę.',
      ],
      [
        'Informacinis turinys',
        'Visas šios svetainės turinys pateikiamas tik bendram informavimui. Naudojimasis svetaine nesukuria sutarties ir nesuteikia teisės gauti paslaugas.',
      ],
      [
        'Intelektinė nuosavybė',
        'Tekstai, vaizdai, prekių ženklai, išdėstymai ir kitas turinys yra saugomi taikomų intelektinės nuosavybės teisių. Pakartotinis naudojimas, platinimas ar keitimas galimas tik gavus išankstinį leidimą.',
      ],
      [
        'Leidžiamas naudojimas',
        'Svetainė gali būti naudojama tik teisėtai ir netrikdant jos prieinamumo, saugumo ar kitų naudotojų patirties. Automatizuotas duomenų rinkimas ir piktnaudžiavimas kontaktų kanalais yra draudžiami.',
      ],
      [
        'Atsakomybė',
        'Stengiamės, kad svetainė būtų tiksli ir prieinama, tačiau negarantuojame jos išsamumo, tikslumo ar nepertraukiamo veikimo. Privaloma teisinė atsakomybė lieka galioti.',
      ],
      [
        'Išorinės nuorodos ir taikoma teisė',
        'Už susietų trečiųjų šalių svetainių turinį atsako tik jų operatoriai. Šioms sąlygoms taikoma {{country}} teisė.',
      ],
    ],
    cookies: [
      [
        'Naudojamos saugojimo technologijos',
        'Ši svetainė naudoja tik būtinas saugojimo technologijas. Tai apima kalbos nustatymų saugojimą ir vietinį naršyklės žymeklį, kuris įsimena, ar slapukų pranešimas buvo uždarytas.',
      ],
      [
        'Naudojimo tikslas',
        'Šie įrašai palaiko pagrindinį svetainės veikimą, išlaiko pasirinktą kalbą ir neleidžia pranešimui vėl pasirodyti kiekvieną kartą atidarant puslapį po jo uždarymo.',
      ],
      [
        'Saugojimo tipai',
        'Priklausomai nuo maršruto veikimo, pasirinkta lokalė gali būti saugoma būtinoje slapuko reikšmėje. Pranešimo būsena saugoma naršyklės vietinėje saugykloje su raktu "{{storageKey}}".',
      ],
      [
        'Be analitinių ar rinkodaros slapukų',
        'Dabartinėje svetainės būsenoje nenustatomi analitiniai, reklaminiai ar rinkodaros slapukai.',
      ],
      [
        'Naršyklės nustatymai',
        'Bet kuriuo metu galite pašalinti arba užblokuoti slapukus ir vietinės saugyklos įrašus savo naršyklės nustatymuose. Tai gali atkurti kalbos nustatymus arba vėl parodyti pranešimą.',
      ],
    ],
  },
  el: {
    terms: [
      [
        'Πεδίο εφαρμογής',
        'Οι παρόντες όροι διέπουν τη χρήση του {{host}} και όλων των πληροφοριών, μέσων και δυνατοτήτων επικοινωνίας που παρέχονται μέσω της ιστοσελίδας.',
      ],
      [
        'Ενημερωτικό περιεχόμενο',
        'Όλο το περιεχόμενο αυτής της ιστοσελίδας παρέχεται μόνο για γενική ενημέρωση. Η χρήση της ιστοσελίδας δεν δημιουργεί σύμβαση ούτε δικαίωμα λήψης υπηρεσιών.',
      ],
      [
        'Πνευματική ιδιοκτησία',
        'Τα κείμενα, τα οπτικά στοιχεία, τα εμπορικά σήματα, οι διατάξεις και κάθε άλλο περιεχόμενο προστατεύονται από τα εφαρμοστέα δικαιώματα πνευματικής ιδιοκτησίας. Η επαναχρησιμοποίηση, διανομή ή τροποποίηση απαιτεί προηγούμενη άδεια.',
      ],
      [
        'Επιτρεπτή χρήση',
        'Η ιστοσελίδα επιτρέπεται να χρησιμοποιείται μόνο νόμιμα και χωρίς να επηρεάζεται η διαθεσιμότητα, η ασφάλεια ή η εμπειρία άλλων χρηστών. Η αυτοματοποιημένη συλλογή δεδομένων και η καταχρηστική χρήση των καναλιών επικοινωνίας απαγορεύονται.',
      ],
      [
        'Ευθύνη',
        'Καταβάλλουμε προσπάθεια να διατηρούμε την ιστοσελίδα ακριβή και διαθέσιμη, αλλά δεν εγγυόμαστε πληρότητα, ακρίβεια ή αδιάλειπτη διαθεσιμότητα. Η υποχρεωτική νόμιμη ευθύνη παραμένει ανεπηρέαστη.',
      ],
      [
        'Εξωτερικοί σύνδεσμοι και εφαρμοστέο δίκαιο',
        'Το περιεχόμενο των συνδεδεμένων ιστοσελίδων τρίτων παραμένει αποκλειστική ευθύνη των αντίστοιχων διαχειριστών τους. Οι παρόντες όροι διέπονται από τους νόμους της {{country}}.',
      ],
    ],
    cookies: [
      [
        'Χρησιμοποιούμενες τεχνολογίες αποθήκευσης',
        'Αυτή η ιστοσελίδα χρησιμοποιεί μόνο απαραίτητες τεχνολογίες αποθήκευσης. Αυτό περιλαμβάνει την αποθήκευση των προτιμήσεων γλώσσας και μια τοπική ένδειξη του προγράμματος περιήγησης που θυμάται αν έχει κλείσει η ειδοποίηση για τα cookies.',
      ],
      [
        'Σκοπός χρήσης',
        'Αυτές οι εγγραφές υποστηρίζουν τη βασική λειτουργία της ιστοσελίδας, διατηρούν σταθερή την επιλεγμένη γλώσσα και εμποδίζουν την επανεμφάνιση της ειδοποίησης σε κάθε προβολή σελίδας μετά το κλείσιμό της.',
      ],
      [
        'Τύποι αποθήκευσης',
        'Ανάλογα με τη λειτουργία της δρομολόγησης, η επιλεγμένη τοπική ρύθμιση μπορεί να αποθηκευτεί σε ένα απαραίτητο cookie. Η κατάσταση της ειδοποίησης αποθηκεύεται στον τοπικό χώρο αποθήκευσης του προγράμματος περιήγησης με το κλειδί "{{storageKey}}".',
      ],
      [
        'Χωρίς cookies ανάλυσης ή μάρκετινγκ',
        'Στην τρέχουσα κατάσταση της ιστοσελίδας δεν ορίζονται cookies ανάλυσης, διαφήμισης ή μάρκετινγκ.',
      ],
      [
        'Ρυθμίσεις προγράμματος περιήγησης',
        'Μπορείτε να αφαιρέσετε ή να αποκλείσετε cookies και εγγραφές τοπικής αποθήκευσης οποιαδήποτε στιγμή από τις ρυθμίσεις του προγράμματος περιήγησης. Αυτό μπορεί να επαναφέρει τις προτιμήσεις γλώσσας ή να προκαλέσει την εκ νέου εμφάνιση της ειδοποίησης.',
      ],
    ],
  },
  mt: {
    terms: [
      [
        "Kamp ta' applikazzjoni",
        'Dawn it-termini jirregolaw l-użu ta’ {{host}} u tal-informazzjoni, il-midja u l-mezzi ta’ kuntatt kollha magħmula disponibbli permezz tal-websajt.',
      ],
      [
        'Kontenut informattiv',
        'Il-kontenut kollu ta’ din il-websajt huwa pprovdut biss għal informazzjoni ġenerali. L-użu tal-websajt ma joħloqx kuntratt u lanqas dritt biex tirċievi servizzi.',
      ],
      [
        'Proprjetà intellettwali',
        'It-testi, l-elementi viżwali, it-trademarks, il-layouts u kontenut ieħor jibqgħu protetti bid-drittijiet applikabbli tal-proprjetà intellettwali. Użu mill-ġdid, distribuzzjoni jew modifika jeħtieġu permess minn qabel.',
      ],
      [
        'Użu permess',
        'Il-websajt tista’ tintuża biss b’mod legali u mingħajr ma taffettwa d-disponibbiltà, is-sigurtà jew l-esperjenza ta’ utenti oħra. Il-ġbir awtomatizzat ta’ data u l-abbuż tal-kanali ta’ kuntatt huma pprojbiti.',
      ],
      [
        'Responsabbiltà',
        'Aħna nistinkaw biex inżommu l-websajt preċiża u disponibbli, iżda ma niggarantux kompletezza, eżattezza jew disponibbiltà bla interruzzjoni. Ir-responsabbiltà obbligatorja skont il-liġi tibqa’ tapplika.',
      ],
      [
        'Links esterni u liġi applikabbli',
        'Il-kontenut ta’ websajts ta’ partijiet terzi marbuta jibqa’ r-responsabbiltà esklużiva tal-operaturi rispettivi tagħhom. Dawn it-termini huma rregolati mil-liġijiet ta’ {{country}}.',
      ],
    ],
    cookies: [
      [
        "Teknoloġiji ta' ħażna użati",
        'Din il-websajt tuża biss teknoloġiji ta’ ħażna essenzjali. Dan jinkludi s-salvataġġ tal-preferenzi tal-lingwa u indikatur lokali fil-browser li jiftakar jekk l-avviż tal-cookies ingħalaqx jew le.',
      ],
      [
        "Għan tal-użu",
        'Dawn l-entrati jappoġġjaw il-funzjonament bażiku tal-websajt, iżommu l-lingwa magħżula konsistenti u jipprevjenu li l-avviż jerġa’ jidher ma’ kull żjara wara li jingħalaq.',
      ],
      [
        "Tipi ta' ħażna",
        'Skont kif taħdem ir-routing, il-lokalità magħżula tista’ tinħażen f’cookie essenzjali. L-istat tal-avviż jinħażen fil-ħażna lokali tal-browser taħt iċ-ċavetta "{{storageKey}}".',
      ],
      [
        'L-ebda cookie analitika jew ta’ marketing',
        'Fl-istat attwali tal-websajt ma jiġux issettjati cookies analitiċi, ta’ reklamar jew ta’ marketing.',
      ],
      [
        'Kontrolli tal-browser',
        'Tista’ tneħħi jew timblokka cookies u entrati tal-ħażna lokali fi kwalunkwe ħin mis-settings tal-browser tiegħek. Dan jista’ jerġa’ jistabbilixxi l-preferenzi tal-lingwa jew jikkawża li l-avviż jerġa’ jidher.',
      ],
    ],
  },
  ga: {
    terms: [
      [
        'Raon feidhme',
        'Rialaíonn na téarmaí seo úsáid {{host}} agus gach faisnéis, meán agus rogha teagmhála a chuirtear ar fáil tríd an suíomh gréasáin.',
      ],
      [
        'Ábhar faisnéiseach',
        'Cuirtear an t-ábhar go léir ar an suíomh seo ar fáil chun críocha faisnéise ginearálta amháin. Ní chruthaíonn úsáid an tsuímh aon chonradh ná ceart chun seirbhísí a fháil.',
      ],
      [
        'Maoin intleachtúil',
        'Tá téacsanna, amhairc, trádmharcanna, leagan amach agus ábhar eile cosanta ag na cearta maoine intleachtúla is infheidhme. Teastaíonn cead roimh ré chun iad a athúsáid, a dháileadh nó a mhodhnú.',
      ],
      [
        'Úsáid cheadaithe',
        'Ní cheadaítear an suíomh a úsáid ach ar bhealach dleathach agus gan cur isteach ar infhaighteacht, ar shlándáil ná ar thaithí úsáideoirí eile. Tá cosc ar bhailiú sonraí uathoibrithe agus ar mhí-úsáid na gcainéal teagmhála.',
      ],
      [
        'Dliteanas',
        'Déanaimid ár ndícheall an suíomh a choinneáil cruinn agus ar fáil, ach ní ráthaímid iomláine, cruinneas ná infhaighteacht gan bhriseadh. Fanann dliteanas éigeantach reachtúil gan athrú.',
      ],
      [
        'Naisc sheachtracha agus an dlí is infheidhme',
        'Fanann ábhar suíomhanna gréasáin tríú páirtí atá nasctha faoi fhreagracht a n-oibreoirí féin amháin. Tá na téarmaí seo faoi réir dhlíthe {{country}}.',
      ],
    ],
    cookies: [
      [
        'Teicneolaíochtaí stórála a úsáidtear',
        'Ní úsáideann an suíomh seo ach teicneolaíochtaí stórála riachtanacha. Áirítear leis sin roghanna teanga a shábháil agus marcáil áitiúil sa bhrabhsálaí a mheabhraíonn ar dúnadh an fógra faoi fhianáin.',
      ],
      [
        'Cuspóir na húsáide',
        'Tacaíonn na hiontrálacha seo le feidhmiú bunúsach an tsuímh, coinníonn siad an teanga roghnaithe comhsheasmhach agus cuireann siad cosc ar an bhfógra teacht aníos arís ar gach amharc leathanaigh tar éis é a dhúnadh.',
      ],
      [
        'Cineálacha stórála',
        'Ag brath ar iompar an ródaithe, d’fhéadfadh an locale roghnaithe a bheith stóráilte i bhfianán riachtanach. Stóráiltear stádas an fhógra i stóras áitiúil an bhrabhsálaí faoin eochair "{{storageKey}}".',
      ],
      [
        'Gan fianáin anailíse ná margaíochta',
        'Sa staid reatha den suíomh, ní shocraítear aon fhianáin anailíse, fógraíochta ná margaíochta.',
      ],
      [
        'Rialuithe an bhrabhsálaí',
        'Is féidir leat fianáin agus iontrálacha stórála áitiúla a bhaint nó a bhac ag am ar bith i socruithe do bhrabhsálaí. D’fhéadfadh sé seo roghanna teanga a athshocrú nó an fógra a chur le feiceáil arís.',
      ],
    ],
  },
};

export function getLegalPageTranslations(locale: string) {
  return legalPageTranslations[locale as LegalLocale] ?? legalPageTranslations.en;
}
