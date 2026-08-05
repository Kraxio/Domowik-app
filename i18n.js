(() => {
  const languages = ['pl', 'en', 'de', 'fr', 'es', 'uk', 'cs'];
  const rows = [
    ["Język strony","Page language","Seitensprache","Langue de la page","Idioma de la página","Мова сторінки","Jazyk stránky"],
    ["Przejdź do treści","Skip to content","Zum Inhalt springen","Aller au contenu","Saltar al contenido","Перейти до вмісту","Přejít k obsahu"],
    ["Otwórz menu","Open menu","Menü öffnen","Ouvrir le menu","Abrir menú","Відкрити меню","Otevřít nabídku"],
    ["Zamknij menu","Close menu","Menü schließen","Fermer le menu","Cerrar menú","Закрити меню","Zavřít nabídku"],
    ["Dlaczego Domowik","Why Domowik","Warum Domowik","Pourquoi Domowik","Por qué Domowik","Чому Domowik","Proč Domowik"],
    ["Funkcje","Features","Funktionen","Fonctionnalités","Funciones","Функції","Funkce"],
    ["Zobacz aplikację","See the app","App ansehen","Voir l’application","Ver la aplicación","Переглянути застосунок","Prohlédnout aplikaci"],
    ["Prywatność","Privacy","Datenschutz","Confidentialité","Privacidad","Приватність","Soukromí"],
    ["Polityka prywatności","Privacy policy","Datenschutzerklärung","Politique de confidentialité","Política de privacidad","Політика приватності","Zásady ochrany soukromí"],
    ["Kontakt","Contact","Kontakt","Contact","Contacto","Контакти","Kontakt"],
    ["Prywatny organizer domu","A private home organizer","Privater Haushaltsorganizer","Organisateur privé de la maison","Organizador privado del hogar","Приватний органайзер дому","Soukromý organizér domácnosti"],
    ["Cały dom.","Your whole home.","Das ganze Zuhause.","Toute la maison.","Todo tu hogar.","Увесь дім.","Celá domácnost."],
    ["Jedno miejsce.","One place.","Ein Ort.","Un seul endroit.","Un solo lugar.","Одне місце.","Jedno místo."],
    ["Rzeczy, terminy, finanse i codzienne listy — uporządkowane w jednej aplikacji, z danymi pod Twoją kontrolą.","Items, deadlines, finances and everyday lists — organized in one app, with your data under your control.","Gegenstände, Termine, Finanzen und Alltagslisten — in einer App organisiert, mit Daten unter deiner Kontrolle.","Objets, échéances, finances et listes du quotidien — organisés dans une seule application, avec vos données sous votre contrôle.","Objetos, fechas, finanzas y listas cotidianas, organizados en una sola aplicación y con tus datos bajo control.","Речі, терміни, фінанси та щоденні списки — упорядковані в одному застосунку, а дані під вашим контролем.","Předměty, termíny, finance a každodenní seznamy — uspořádané v jedné aplikaci, s daty pod vaší kontrolou."],
    ["Pobierz z","Get it on","Laden bei","Disponible sur","Disponible en","Завантажити з","Stáhnout z"],
    ["Zobacz, jak działa","See how it works","So funktioniert es","Voir comment ça marche","Ver cómo funciona","Подивитися, як це працює","Podívat se, jak funguje"],
    ["Bez obowiązkowego konta","No account required","Kein Konto erforderlich","Sans compte obligatoire","Sin cuenta obligatoria","Без обов’язкового акаунта","Bez povinného účtu"],
    ["Dane przechowywane lokalnie","Data stored locally","Daten lokal gespeichert","Données stockées localement","Datos guardados localmente","Дані зберігаються локально","Data uložená lokálně"],
    ["Działa offline","Works offline","Funktioniert offline","Fonctionne hors ligne","Funciona sin conexión","Працює офлайн","Funguje offline"],
    ["Przedmioty","Items","Gegenstände","Objets","Objetos","Предмети","Předměty"],
    ["Terminy","Deadlines","Termine","Échéances","Fechas","Терміни","Termíny"],
    ["Finanse","Finances","Finanzen","Finances","Finanzas","Фінанси","Finance"],
    ["Listy i zadania","Lists and tasks","Listen und Aufgaben","Listes et tâches","Listas y tareas","Списки та завдання","Seznamy a úkoly"],
    ["Mniej rozproszonych informacji","Less scattered information","Weniger verstreute Informationen","Moins d’informations dispersées","Menos información dispersa","Менше розпорошеної інформації","Méně roztříštěných informací"],
    ["Dom nie mieści się w jednej notatce","Your home does not fit in one note","Ein Zuhause passt nicht in eine Notiz","Une maison ne tient pas dans une seule note","Tu hogar no cabe en una sola nota","Дім не вміщується в одній нотатці","Domácnost se nevejde do jedné poznámky"],
    ["Terminy w kalendarzu, zakupy na kartce, wydatki w arkuszu, a zdjęcie paragonu gdzieś w galerii. Domowik łączy te informacje wokół codziennych spraw Twojego domu.","Deadlines in a calendar, shopping on paper, expenses in a spreadsheet and a receipt photo lost in the gallery. Domowik brings this information together around everyday home life.","Termine im Kalender, Einkäufe auf Papier, Ausgaben in einer Tabelle und ein Belegfoto irgendwo in der Galerie. Domowik führt diese Informationen rund um den Haushaltsalltag zusammen.","Des échéances dans le calendrier, des courses sur papier, des dépenses dans un tableur et une photo de reçu perdue dans la galerie. Domowik réunit ces informations autour du quotidien de la maison.","Fechas en el calendario, compras en papel, gastos en una hoja de cálculo y una foto del recibo perdida en la galería. Domowik reúne esta información en torno al día a día del hogar.","Терміни в календарі, покупки на папері, витрати в таблиці, а фото чека десь у галереї. Domowik об’єднує цю інформацію навколо щоденних домашніх справ.","Termíny v kalendáři, nákupy na papíře, výdaje v tabulce a fotka účtenky někde v galerii. Domowik tyto informace spojuje kolem každodenního chodu domácnosti."],
    ["Wiesz, co masz","Know what you have","Wissen, was du hast","Savoir ce que vous avez","Saber qué tienes","Знати, що у вас є","Vědět, co máte"],
    ["Zapisuj rzeczy, zdjęcia, lokalizacje, wartość oraz dane zakupu.","Save items, photos, locations, values and purchase details.","Gegenstände, Fotos, Orte, Werte und Kaufdaten speichern.","Enregistrez les objets, photos, emplacements, valeurs et informations d’achat.","Guarda objetos, fotos, ubicaciones, valores y datos de compra.","Зберігайте речі, фото, місця, вартість і дані про покупку.","Ukládejte předměty, fotografie, umístění, hodnotu a údaje o nákupu."],
    ["Pamiętasz, co ważne","Remember what matters","Wichtiges im Blick behalten","Garder l’essentiel en mémoire","Recordar lo importante","Пам’ятати важливе","Pamatovat na důležité"],
    ["Łącz terminy z przedmiotami i przeglądaj sprawy na liście lub w kalendarzu.","Link deadlines to items and view them in a list or calendar.","Termine mit Gegenständen verknüpfen und als Liste oder im Kalender ansehen.","Associez les échéances aux objets et consultez-les dans une liste ou un calendrier.","Vincula fechas con objetos y consúltalas en una lista o calendario.","Пов’язуйте терміни з предметами й переглядайте справи у списку або календарі.","Propojte termíny s předměty a prohlížejte je v seznamu nebo kalendáři."],
    ["Zachowujesz kontrolę","Stay in control","Die Kontrolle behalten","Garder le contrôle","Mantener el control","Зберігати контроль","Mít vše pod kontrolou"],
    ["Dane zostają lokalnie, a backup i eksport uruchamiasz wtedy, gdy chcesz.","Data stays local, and you start backups and exports whenever you choose.","Daten bleiben lokal; Backup und Export startest du selbst.","Les données restent en local, et vous lancez la sauvegarde ou l’export quand vous le souhaitez.","Los datos permanecen en local y tú decides cuándo crear una copia o exportarlos.","Дані залишаються локально, а резервне копіювання й експорт запускаєте ви.","Data zůstávají lokálně a zálohu či export spouštíte, kdy chcete."],
    ["Jedna aplikacja, wiele codziennych spraw","One app for many everyday needs","Eine App für viele Alltagsthemen","Une application pour de nombreux besoins quotidiens","Una aplicación para muchas tareas cotidianas","Один застосунок для багатьох щоденних справ","Jedna aplikace pro mnoho každodenních potřeb"],
    ["Porządek, który ma kontekst","Organization with context","Ordnung mit Zusammenhang","Une organisation qui garde le contexte","Organización con contexto","Порядок із контекстом","Pořádek se souvislostmi"],
    ["Domowik nie jest tylko listą. Przedmiot może mieć zdjęcia, dane zakupu i własne terminy, a domowe finanse oraz listy pozostają obok.","Domowik is more than a list. An item can include photos, purchase details and its own deadlines, while home finances and lists stay close at hand.","Domowik ist mehr als eine Liste. Ein Gegenstand kann Fotos, Kaufdaten und eigene Termine enthalten; Finanzen und Listen bleiben griffbereit.","Domowik est plus qu’une liste. Un objet peut contenir des photos, des informations d’achat et ses propres échéances, tandis que finances et listes restent à portée de main.","Domowik es más que una lista. Un objeto puede incluir fotos, datos de compra y sus propias fechas, mientras que las finanzas y listas siguen a mano.","Domowik — це більше, ніж список. Предмет може мати фото, дані про покупку та власні терміни, а фінанси й списки залишаються поруч.","Domowik je víc než seznam. Předmět může mít fotografie, údaje o nákupu a vlastní termíny, zatímco finance a seznamy zůstávají po ruce."],
    ["Katalog domowych rzeczy","Home item catalog","Katalog für Haushaltsgegenstände","Catalogue des objets de la maison","Catálogo de objetos del hogar","Каталог домашніх речей","Katalog domácích předmětů"],
    ["Wyszukuj, filtruj i grupuj przedmioty. Dodawaj zdjęcia, lokalizacje, kategorie, wartość oraz dane zakupu.","Search, filter and group items. Add photos, locations, categories, values and purchase details.","Gegenstände suchen, filtern und gruppieren. Fotos, Orte, Kategorien, Werte und Kaufdaten ergänzen.","Recherchez, filtrez et regroupez les objets. Ajoutez photos, emplacements, catégories, valeurs et informations d’achat.","Busca, filtra y agrupa objetos. Añade fotos, ubicaciones, categorías, valores y datos de compra.","Шукайте, фільтруйте та групуйте предмети. Додавайте фото, місця, категорії, вартість і дані про покупку.","Vyhledávejte, filtrujte a seskupujte předměty. Přidávejte fotografie, umístění, kategorie, hodnotu a údaje o nákupu."],
    ["Widok listy i siatki","List and grid views","Listen- und Rasteransicht","Vues liste et grille","Vistas de lista y cuadrícula","Перегляд списком і сіткою","Zobrazení seznamu a mřížky"],
    ["Podsumowanie wartości","Value summary","Wertübersicht","Récapitulatif de valeur","Resumen de valor","Підсумок вартості","Souhrn hodnoty"],
    ["Do 6 zdjęć w Premium","Up to 6 photos with Premium","Bis zu 6 Fotos mit Premium","Jusqu’à 6 photos avec Premium","Hasta 6 fotos con Premium","До 6 фото з Premium","Až 6 fotografií s Premium"],
    ["Terminy i kalendarz","Deadlines and calendar","Termine und Kalender","Échéances et calendrier","Fechas y calendario","Терміни та календар","Termíny a kalendář"],
    ["Gwarancje, przeglądy, opłaty i inne ważne daty — ogólne albo przypisane do konkretnej rzeczy.","Warranties, inspections, bills and other important dates — general or linked to a specific item.","Garantien, Wartungen, Zahlungen und andere wichtige Daten — allgemein oder einem Gegenstand zugeordnet.","Garanties, entretiens, paiements et autres dates importantes — générales ou liées à un objet précis.","Garantías, revisiones, pagos y otras fechas importantes, generales o vinculadas a un objeto concreto.","Гарантії, огляди, платежі та інші важливі дати — загальні або прив’язані до конкретного предмета.","Záruky, kontroly, platby a další důležitá data — obecná nebo přiřazená ke konkrétnímu předmětu."],
    ["Finanse domowe","Home finances","Haushaltsfinanzen","Finances du foyer","Finanzas del hogar","Домашні фінанси","Domácí finance"],
    ["Konta, wpływy, wydatki, kategorie i wykresy dają szybki obraz domowego budżetu.","Accounts, income, expenses, categories and charts give you a quick view of the household budget.","Konten, Einnahmen, Ausgaben, Kategorien und Diagramme zeigen den Haushaltsplan auf einen Blick.","Comptes, revenus, dépenses, catégories et graphiques donnent une vue rapide du budget du foyer.","Cuentas, ingresos, gastos, categorías y gráficos ofrecen una visión rápida del presupuesto del hogar.","Рахунки, доходи, витрати, категорії та графіки швидко показують стан домашнього бюджету.","Účty, příjmy, výdaje, kategorie a grafy rychle ukážou stav domácího rozpočtu."],
    ["Listy na co dzień","Everyday lists","Listen für den Alltag","Listes du quotidien","Listas cotidianas","Щоденні списки","Každodenní seznamy"],
    ["Zakupy według sklepów, pakowanie z postępem i zadania z datą, adresem oraz notatką.","Shopping by store, packing with progress, and tasks with a date, address and note.","Einkäufe nach Geschäften, Packlisten mit Fortschritt und Aufgaben mit Datum, Adresse und Notiz.","Courses par magasin, préparation des bagages avec progression et tâches avec date, adresse et note.","Compras por tienda, equipaje con progreso y tareas con fecha, dirección y nota.","Покупки за магазинами, пакування з прогресом і завдання з датою, адресою та нотаткою.","Nákupy podle obchodů, balení s průběhem a úkoly s datem, adresou a poznámkou."],
    ["Wygląd po Twojemu","Your preferred look","Dein Look","Une apparence à votre goût","A tu estilo","Вигляд на ваш смак","Vzhled podle vás"],
    ["Tryb jasny, ciemny lub automatyczny oraz sześć motywów kolorystycznych.","Light, dark or automatic mode, plus six color themes.","Heller, dunkler oder automatischer Modus und sechs Farbthemen.","Mode clair, sombre ou automatique, plus six thèmes de couleurs.","Modo claro, oscuro o automático y seis temas de color.","Світлий, темний або автоматичний режим і шість кольорових тем.","Světlý, tmavý nebo automatický režim a šest barevných motivů."],
    ["Backup i eksport","Backup and export","Backup und Export","Sauvegarde et export","Copia y exportación","Резервна копія та експорт","Záloha a export"],
    ["Twórz pełną kopię JSON, eksportuj wybrane moduły, przedmioty do CSV i terminy do ICS.","Create a full JSON backup, export selected modules, items to CSV and deadlines to ICS.","Vollständiges JSON-Backup erstellen, ausgewählte Module, Gegenstände als CSV und Termine als ICS exportieren.","Créez une sauvegarde JSON complète, exportez les modules choisis, les objets en CSV et les échéances en ICS.","Crea una copia JSON completa y exporta módulos, objetos a CSV y fechas a ICS.","Створюйте повну копію JSON, експортуйте вибрані модулі, предмети в CSV, а терміни в ICS.","Vytvořte úplnou zálohu JSON, exportujte vybrané moduly, předměty do CSV a termíny do ICS."],
    ["Zobacz Domowika w działaniu","See Domowik in action","Domowik in Aktion","Voir Domowik en action","Ver Domowik en acción","Побачити Domowik у дії","Podívejte se na Domowik v praxi"],
    ["Przejrzyście od pierwszego spojrzenia","Clear at first glance","Klar auf den ersten Blick","Clair au premier regard","Claro desde el primer vistazo","Зрозуміло з першого погляду","Přehledné na první pohled"],
    ["Przesuń galerię i zobacz najważniejsze obszary aplikacji.","Swipe through the gallery to see the app’s key areas.","Durch die Galerie wischen und die wichtigsten App-Bereiche ansehen.","Faites défiler la galerie pour découvrir les principaux espaces de l’application.","Desliza la galería para ver las áreas principales de la aplicación.","Гортайте галерею та перегляньте головні розділи застосунку.","Procházejte galerii a prohlédněte si hlavní části aplikace."],
    ["Wiesz, co masz","Know what you have","Wissen, was du hast","Savoir ce que vous avez","Saber qué tienes","Знати, що у вас є","Vědět, co máte"],
    ["Katalog przedmiotów","Item catalog","Gegenstandskatalog","Catalogue d’objets","Catálogo de objetos","Каталог предметів","Katalog předmětů"],
    ["Terminy pod kontrolą","Deadlines under control","Termine im Blick","Échéances sous contrôle","Fechas bajo control","Терміни під контролем","Termíny pod kontrolou"],
    ["Lista najbliższych spraw","Upcoming matters","Anstehende Termine","Prochaines échéances","Próximos asuntos","Найближчі справи","Nejbližší záležitosti"],
    ["Cały miesiąc przed Tobą","The whole month ahead","Der ganze Monat im Blick","Tout le mois à venir","Todo el mes por delante","Увесь місяць попереду","Celý měsíc před vámi"],
    ["Kalendarz terminów i zadań","Deadline and task calendar","Termin- und Aufgabenkalender","Calendrier des échéances et tâches","Calendario de fechas y tareas","Календар термінів і завдань","Kalendář termínů a úkolů"],
    ["Kontroluj domowy budżet","Keep track of the home budget","Haushaltsbudget im Blick","Suivez le budget du foyer","Controla el presupuesto del hogar","Контролюйте домашній бюджет","Mějte domácí rozpočet pod kontrolou"],
    ["Konta, wydatki i wykresy","Accounts, expenses and charts","Konten, Ausgaben und Diagramme","Comptes, dépenses et graphiques","Cuentas, gastos y gráficos","Рахунки, витрати та графіки","Účty, výdaje a grafy"],
    ["Zakupy bez chaosu","Shopping without chaos","Einkaufen ohne Chaos","Des courses sans chaos","Compras sin caos","Покупки без хаосу","Nákupy bez chaosu"],
    ["Produkty według sklepów","Products grouped by store","Produkte nach Geschäft","Produits regroupés par magasin","Productos agrupados por tienda","Товари за магазинами","Produkty podle obchodů"],
    ["Dopasuj wygląd","Customize the look","Aussehen anpassen","Personnalisez l’apparence","Personaliza el aspecto","Налаштуйте вигляд","Přizpůsobte vzhled"],
    ["Wygodny tryb ciemny","Comfortable dark mode","Angenehmer Dunkelmodus","Mode sombre confortable","Modo oscuro cómodo","Зручний темний режим","Pohodlný tmavý režim"],
    ["Prywatność z natury","Private by design","Von Grund auf privat","Privé par conception","Privado por diseño","Приватність за задумом","Soukromí už v základu"],
    ["Twoje dane zostają pod Twoją kontrolą","Your data stays under your control","Deine Daten bleiben unter deiner Kontrolle","Vos données restent sous votre contrôle","Tus datos permanecen bajo tu control","Ваші дані залишаються під вашим контролем","Vaše data zůstávají pod vaší kontrolou"],
    ["Domowik nie ma własnego backendu do przechowywania Twojej domowej bazy. Nie musisz zakładać konta, a aplikacja może działać offline.","Domowik has no backend for storing your home database. You do not need an account, and the app can work offline.","Domowik hat kein eigenes Backend für deine Haushaltsdaten. Du brauchst kein Konto, und die App kann offline funktionieren.","Domowik n’a pas de serveur pour stocker votre base domestique. Aucun compte n’est requis et l’application peut fonctionner hors ligne.","Domowik no tiene un servidor propio para guardar tu base doméstica. No necesitas una cuenta y la aplicación puede funcionar sin conexión.","Domowik не має власного сервера для зберігання вашої домашньої бази. Реєстрація не потрібна, а застосунок може працювати офлайн.","Domowik nemá vlastní server pro ukládání domácí databáze. Účet není nutný a aplikace může fungovat offline."],
    ["Lokalny zapis","Local storage","Lokale Speicherung","Stockage local","Almacenamiento local","Локальне зберігання","Lokální uložení"],
    ["Rzeczy, terminy, finanse i listy są przechowywane na urządzeniu.","Items, deadlines, finances and lists are stored on the device.","Gegenstände, Termine, Finanzen und Listen werden auf dem Gerät gespeichert.","Objets, échéances, finances et listes sont stockés sur l’appareil.","Objetos, fechas, finanzas y listas se guardan en el dispositivo.","Речі, терміни, фінанси та списки зберігаються на пристрої.","Předměty, termíny, finance a seznamy se ukládají v zařízení."],
    ["Kopia na Twoich zasadach","Backup on your terms","Backup nach deinen Regeln","Une sauvegarde selon vos règles","Una copia a tu manera","Резервна копія за вашими правилами","Záloha podle vás"],
    ["Pełny backup wykonujesz samodzielnie, kiedy go potrzebujesz.","You create a full backup yourself whenever you need it.","Ein vollständiges Backup erstellst du selbst, wenn du es brauchst.","Vous créez vous-même une sauvegarde complète quand vous en avez besoin.","Tú creas una copia completa cuando la necesitas.","Повну резервну копію ви створюєте самостійно, коли потрібно.","Úplnou zálohu si vytvoříte sami, kdykoli ji potřebujete."],
    ["Otwarty eksport","Open export","Offener Export","Export ouvert","Exportación abierta","Відкритий експорт","Otevřený export"],
    ["Zapisuj dane jako JSON, CSV lub ICS i przenoś je świadomie.","Save data as JSON, CSV or ICS and move it deliberately.","Daten als JSON, CSV oder ICS speichern und bewusst übertragen.","Enregistrez les données en JSON, CSV ou ICS et transférez-les en toute connaissance de cause.","Guarda los datos como JSON, CSV o ICS y transfiérelos de forma consciente.","Зберігайте дані у JSON, CSV або ICS і переносіть їх свідомо.","Ukládejte data jako JSON, CSV nebo ICS a přenášejte je vědomě."],
    ["Ważne:","Important:","Wichtig:","Important :","Importante:","Важливо:","Důležité:"],
    ["dane nie synchronizują się automatycznie. Przed zmianą telefonu lub odinstalowaniem aplikacji wykonaj backup.","data does not sync automatically. Create a backup before changing phones or uninstalling the app.","Daten werden nicht automatisch synchronisiert. Erstelle vor einem Telefonwechsel oder der Deinstallation ein Backup.","les données ne se synchronisent pas automatiquement. Faites une sauvegarde avant de changer de téléphone ou de désinstaller l’application.","los datos no se sincronizan automáticamente. Crea una copia antes de cambiar de teléfono o desinstalar la aplicación.","дані не синхронізуються автоматично. Перед зміною телефона або видаленням застосунку створіть резервну копію.","data se nesynchronizují automaticky. Před výměnou telefonu nebo odinstalováním aplikace vytvořte zálohu."],
    ["Zacznij bezpłatnie","Start for free","Kostenlos starten","Commencez gratuitement","Empieza gratis","Почніть безкоштовно","Začněte zdarma"],
    ["Więcej możliwości z Domowik Premium","More possibilities with Domowik Premium","Mehr Möglichkeiten mit Domowik Premium","Plus de possibilités avec Domowik Premium","Más posibilidades con Domowik Premium","Більше можливостей із Domowik Premium","Více možností s Domowik Premium"],
    ["Podstawowe funkcje są dostępne bez opłat. Premium rozszerza limity i odblokowuje narzędzia dla bardziej wymagających domowych baz.","Core features are available free of charge. Premium expands limits and unlocks tools for larger home databases.","Die Grundfunktionen sind kostenlos. Premium erweitert Limits und schaltet Werkzeuge für größere Haushaltsdatenbanken frei.","Les fonctions essentielles sont gratuites. Premium étend les limites et débloque des outils pour les bases domestiques plus importantes.","Las funciones básicas son gratuitas. Premium amplía los límites y desbloquea herramientas para bases domésticas más grandes.","Основні функції доступні безкоштовно. Premium розширює ліміти й відкриває інструменти для більших домашніх баз.","Základní funkce jsou zdarma. Premium rozšiřuje limity a odemyká nástroje pro větší domácí databáze."],
    ["Dobry początek","A good start","Ein guter Anfang","Un bon début","Un buen comienzo","Хороший початок","Dobrý začátek"],
    ["Najważniejsze moduły do codziennej organizacji domu.","The essential modules for everyday home organization.","Die wichtigsten Module für die tägliche Haushaltsorganisation.","Les modules essentiels pour organiser la maison au quotidien.","Los módulos esenciales para organizar el hogar a diario.","Основні модулі для щоденної організації дому.","Základní moduly pro každodenní organizaci domácnosti."],
    ["Do 20 przedmiotów","Up to 20 items","Bis zu 20 Gegenstände","Jusqu’à 20 objets","Hasta 20 objetos","До 20 предметів","Až 20 předmětů"],
    ["Do 2 zdjęć na przedmiot","Up to 2 photos per item","Bis zu 2 Fotos pro Gegenstand","Jusqu’à 2 photos par objet","Hasta 2 fotos por objeto","До 2 фото на предмет","Až 2 fotografie na předmět"],
    ["Finanse z jednym kontem","Finances with one account","Finanzen mit einem Konto","Finances avec un compte","Finanzas con una cuenta","Фінанси з одним рахунком","Finance s jedním účtem"],
    ["Zakupy, pakowanie i zadania","Shopping, packing and tasks","Einkaufen, Packen und Aufgaben","Courses, bagages et tâches","Compras, equipaje y tareas","Покупки, пакування та завдання","Nákupy, balení a úkoly"],
    ["Backup oraz eksport","Backup and export","Backup und Export","Sauvegarde et export","Copia y exportación","Резервна копія та експорт","Záloha a export"],
    ["Więcej przestrzeni na dom","More room for your home","Mehr Platz für dein Zuhause","Plus d’espace pour votre maison","Más espacio para tu hogar","Більше простору для дому","Více prostoru pro domácnost"],
    ["Rozszerzone możliwości dla większej liczby rzeczy, danych i codziennych planów.","Expanded possibilities for more items, data and everyday plans.","Erweiterte Möglichkeiten für mehr Gegenstände, Daten und Alltagspläne.","Des possibilités étendues pour davantage d’objets, de données et de projets quotidiens.","Más posibilidades para más objetos, datos y planes cotidianos.","Розширені можливості для більшої кількості речей, даних і щоденних планів.","Rozšířené možnosti pro více předmětů, dat a každodenních plánů."],
    ["Bez limitu liczby przedmiotów","No item limit","Keine Begrenzung der Gegenstände","Nombre d’objets illimité","Sin límite de objetos","Без обмеження кількості предметів","Bez limitu počtu předmětů"],
    ["Do 6 zdjęć na przedmiot","Up to 6 photos per item","Bis zu 6 Fotos pro Gegenstand","Jusqu’à 6 photos par objet","Hasta 6 fotos por objeto","До 6 фото на предмет","Až 6 fotografií na předmět"],
    ["Wiele kont i szersza historia finansów","Multiple accounts and broader financial history","Mehrere Konten und längere Finanzhistorie","Plusieurs comptes et historique financier étendu","Varias cuentas y un historial financiero más amplio","Кілька рахунків і ширша фінансова історія","Více účtů a širší historie financí"],
    ["Zapisane listy zakupów i pakowania","Saved shopping and packing lists","Gespeicherte Einkaufs- und Packlisten","Listes de courses et de bagages enregistrées","Listas de compras y equipaje guardadas","Збережені списки покупок і пакування","Uložené nákupní a balicí seznamy"],
    ["Nawyki, serie i statystyki","Habits, streaks and statistics","Gewohnheiten, Serien und Statistiken","Habitudes, séries et statistiques","Hábitos, rachas y estadísticas","Звички, серії та статистика","Návyky, série a statistiky"],
    ["Dodatkowe szablony i eksport finansów","Additional templates and financial export","Zusätzliche Vorlagen und Finanzexport","Modèles supplémentaires et export financier","Plantillas adicionales y exportación financiera","Додаткові шаблони та експорт фінансів","Další šablony a export financí"],
    ["Zobacz w Google Play","See on Google Play","Bei Google Play ansehen","Voir sur Google Play","Ver en Google Play","Переглянути в Google Play","Zobrazit na Google Play"],
    ["Najczęstsze pytania","Frequently asked questions","Häufige Fragen","Questions fréquentes","Preguntas frecuentes","Поширені запитання","Časté dotazy"],
    ["Krótko i bez ukrywania ważnych ograniczeń.","Short answers without hiding important limitations.","Kurz und ohne wichtige Einschränkungen zu verschweigen.","Des réponses courtes, sans cacher les limites importantes.","Respuestas breves, sin ocultar limitaciones importantes.","Коротко й без приховування важливих обмежень.","Stručně a bez skrývání důležitých omezení."],
    ["Masz inne pytanie? Napisz do nas →","Another question? Contact us →","Noch eine Frage? Schreib uns →","Une autre question ? Écrivez-nous →","¿Otra pregunta? Escríbenos →","Є інше запитання? Напишіть нам →","Máte další otázku? Napište nám →"],
    ["Czy muszę zakładać konto?","Do I need to create an account?","Muss ich ein Konto erstellen?","Dois-je créer un compte ?","¿Tengo que crear una cuenta?","Чи потрібно створювати акаунт?","Musím si vytvořit účet?"],
    ["Nie. Domowik nie wymaga własnego konta. Dane aplikacji są przechowywane lokalnie na urządzeniu.","No. Domowik does not require an account. App data is stored locally on the device.","Nein. Domowik benötigt kein Konto. Die App-Daten werden lokal auf dem Gerät gespeichert.","Non. Domowik ne nécessite aucun compte. Les données sont stockées localement sur l’appareil.","No. Domowik no requiere una cuenta. Los datos se guardan localmente en el dispositivo.","Ні. Domowik не вимагає акаунта. Дані застосунку зберігаються локально на пристрої.","Ne. Domowik nevyžaduje účet. Data aplikace se ukládají lokálně v zařízení."],
    ["Czy Domowik działa bez internetu?","Does Domowik work without internet?","Funktioniert Domowik ohne Internet?","Domowik fonctionne-t-il sans Internet ?","¿Domowik funciona sin internet?","Чи працює Domowik без інтернету?","Funguje Domowik bez internetu?"],
    ["Podstawowe funkcje działają bez internetu. Połączenie może być potrzebne między innymi podczas zakupu Premium w Google Play lub przekazywania terminu do Kalendarza Google.","Core features work without internet. A connection may be needed, for example, when buying Premium on Google Play or sending a deadline to Google Calendar.","Die Grundfunktionen arbeiten ohne Internet. Eine Verbindung kann etwa beim Premium-Kauf über Google Play oder beim Übertragen eines Termins in Google Kalender nötig sein.","Les fonctions essentielles fonctionnent sans Internet. Une connexion peut notamment être nécessaire pour acheter Premium sur Google Play ou transférer une échéance vers Google Agenda.","Las funciones básicas funcionan sin internet. Puede hacer falta conexión, por ejemplo, para comprar Premium en Google Play o enviar una fecha a Google Calendar.","Основні функції працюють без інтернету. З’єднання може знадобитися, зокрема, під час купівлі Premium у Google Play або передавання терміну до Google Календаря.","Základní funkce fungují bez internetu. Připojení může být potřeba například při nákupu Premium na Google Play nebo předání termínu do Kalendáře Google."],
    ["Jak przenieść dane na nowy telefon?","How do I move data to a new phone?","Wie übertrage ich Daten auf ein neues Telefon?","Comment transférer mes données vers un nouveau téléphone ?","¿Cómo traslado los datos a un teléfono nuevo?","Як перенести дані на новий телефон?","Jak přenést data do nového telefonu?"],
    ["Na starym urządzeniu utwórz pełną kopię JSON w Ustawieniach, a następnie zaimportuj ją na nowym. Dane nie synchronizują się automatycznie.","Create a full JSON backup in Settings on the old device, then import it on the new one. Data does not sync automatically.","Auf dem alten Gerät in den Einstellungen ein vollständiges JSON-Backup erstellen und auf dem neuen importieren. Daten werden nicht automatisch synchronisiert.","Sur l’ancien appareil, créez une sauvegarde JSON complète dans les réglages, puis importez-la sur le nouveau. Les données ne se synchronisent pas automatiquement.","Crea una copia JSON completa en Ajustes en el dispositivo antiguo e impórtala en el nuevo. Los datos no se sincronizan automáticamente.","На старому пристрої створіть повну копію JSON у Налаштуваннях, а потім імпортуйте її на новому. Дані не синхронізуються автоматично.","Na starém zařízení vytvořte v Nastavení úplnou zálohu JSON a na novém ji importujte. Data se nesynchronizují automaticky."],
    ["Co mogę przechowywać przy przedmiocie?","What can I store with an item?","Was kann ich bei einem Gegenstand speichern?","Que puis-je enregistrer avec un objet ?","¿Qué puedo guardar con un objeto?","Що можна зберігати разом із предметом?","Co mohu uložit k předmětu?"],
    ["Nazwę, lokalizację, kategorię, notatkę, ilość, wartość, datę i miejsce zakupu, zdjęcia oraz powiązane terminy.","Name, location, category, note, quantity, value, purchase date and place, photos and linked deadlines.","Name, Ort, Kategorie, Notiz, Menge, Wert, Kaufdatum und -ort, Fotos und verknüpfte Termine.","Nom, emplacement, catégorie, note, quantité, valeur, date et lieu d’achat, photos et échéances associées.","Nombre, ubicación, categoría, nota, cantidad, valor, fecha y lugar de compra, fotos y fechas vinculadas.","Назву, місце, категорію, нотатку, кількість, вартість, дату й місце покупки, фото та пов’язані терміни.","Název, umístění, kategorii, poznámku, množství, hodnotu, datum a místo nákupu, fotografie a související termíny."],
    ["Czym różni się Premium?","What is different with Premium?","Was bietet Premium zusätzlich?","Que propose Premium ?","¿Qué cambia con Premium?","Чим відрізняється Premium?","V čem se liší Premium?"],
    ["Premium znosi limit liczby przedmiotów i rozszerza m.in. zdjęcia, finanse, zapisane listy, szablony oraz moduł nawyków.","Premium removes the item limit and expands photos, finances, saved lists, templates and the habits module.","Premium hebt das Gegenstandslimit auf und erweitert unter anderem Fotos, Finanzen, gespeicherte Listen, Vorlagen und Gewohnheiten.","Premium supprime la limite d’objets et étend notamment les photos, les finances, les listes enregistrées, les modèles et les habitudes.","Premium elimina el límite de objetos y amplía fotos, finanzas, listas guardadas, plantillas y hábitos.","Premium прибирає ліміт предметів і розширює фото, фінанси, збережені списки, шаблони та модуль звичок.","Premium ruší limit předmětů a rozšiřuje fotografie, finance, uložené seznamy, šablony a modul návyků."],
    ["W jakich językach działa aplikacja?","Which languages does the app support?","Welche Sprachen unterstützt die App?","Quelles langues l’application prend-elle en charge ?","¿Qué idiomas admite la aplicación?","Які мови підтримує застосунок?","Které jazyky aplikace podporuje?"],
    ["Interfejs zawiera wersje: polską, angielską, niemiecką, francuską, hiszpańską, ukraińską i czeską.","The interface is available in Polish, English, German, French, Spanish, Ukrainian and Czech.","Die Oberfläche ist auf Polnisch, Englisch, Deutsch, Französisch, Spanisch, Ukrainisch und Tschechisch verfügbar.","L’interface est disponible en polonais, anglais, allemand, français, espagnol, ukrainien et tchèque.","La interfaz está disponible en polaco, inglés, alemán, francés, español, ucraniano y checo.","Інтерфейс доступний польською, англійською, німецькою, французькою, іспанською, українською та чеською.","Rozhraní je dostupné v polštině, angličtině, němčině, francouzštině, španělštině, ukrajinštině a češtině."],
    ["Twój dom. Jedna aplikacja.","Your home. One app.","Dein Zuhause. Eine App.","Votre maison. Une application.","Tu hogar. Una aplicación.","Ваш дім. Один застосунок.","Váš domov. Jedna aplikace."],
    ["Zacznij porządkować dom po swojemu","Start organizing your home your way","Organisiere dein Zuhause auf deine Weise","Commencez à organiser votre maison à votre façon","Empieza a organizar tu hogar a tu manera","Почніть упорядковувати дім по-своєму","Začněte si organizovat domov po svém"],
    ["Rzeczy, terminy, finanse i listy — lokalnie, przejrzyście i zawsze pod ręką.","Items, deadlines, finances and lists — local, clear and always at hand.","Gegenstände, Termine, Finanzen und Listen — lokal, übersichtlich und griffbereit.","Objets, échéances, finances et listes — en local, clairement et toujours à portée de main.","Objetos, fechas, finanzas y listas: en local, claros y siempre a mano.","Речі, терміни, фінанси та списки — локально, зрозуміло й завжди під рукою.","Předměty, termíny, finance a seznamy — lokálně, přehledně a vždy po ruce."],
    ["Prywatne centrum organizacji domu.","A private center for home organization.","Private Zentrale für die Haushaltsorganisation.","Centre privé d’organisation de la maison.","Centro privado para organizar el hogar.","Приватний центр організації дому.","Soukromé centrum organizace domácnosti."],
    ["Domowik. Wszystkie prawa zastrzeżone.","Domowik. All rights reserved.","Domowik. Alle Rechte vorbehalten.","Domowik. Tous droits réservés.","Domowik. Todos los derechos reservados.","Domowik. Усі права захищено.","Domowik. Všechna práva vyhrazena."],
    ["Bez obowiązkowego konta · Dane lokalne · Offline-first","No account required · Local data · Offline-first","Kein Konto erforderlich · Lokale Daten · Offline-first","Sans compte obligatoire · Données locales · Offline-first","Sin cuenta obligatoria · Datos locales · Offline-first","Без обов’язкового акаунта · Локальні дані · Offline-first","Bez povinného účtu · Lokální data · Offline-first"],
    ["Domowik — cały dom w jednym miejscu","Domowik — your whole home in one place","Domowik — das ganze Zuhause an einem Ort","Domowik — toute la maison en un seul endroit","Domowik — todo tu hogar en un solo lugar","Domowik — увесь дім в одному місці","Domowik — celá domácnost na jednom místě"],
    ["Domowik porządkuje domowe rzeczy, terminy, finanse i listy. Bez obowiązkowego konta, z danymi przechowywanymi lokalnie.","Domowik organizes home items, deadlines, finances and lists. No account required, with data stored locally.","Domowik organisiert Gegenstände, Termine, Finanzen und Listen. Ohne Pflichtkonto, mit lokal gespeicherten Daten.","Domowik organise les objets, échéances, finances et listes de la maison. Sans compte obligatoire, avec des données stockées localement.","Domowik organiza objetos, fechas, finanzas y listas del hogar. Sin cuenta obligatoria y con datos guardados localmente.","Domowik упорядковує домашні речі, терміни, фінанси та списки. Без обов’язкового акаунта, з локальним зберіганням даних.","Domowik organizuje domácí předměty, termíny, finance a seznamy. Bez povinného účtu, s daty uloženými lokálně."],
    ["Katalog rzeczy, terminy, finanse i codzienne listy w jednej prywatnej aplikacji.","An item catalog, deadlines, finances and everyday lists in one private app.","Gegenstandskatalog, Termine, Finanzen und Alltagslisten in einer privaten App.","Catalogue d’objets, échéances, finances et listes du quotidien dans une application privée.","Catálogo de objetos, fechas, finanzas y listas cotidianas en una aplicación privada.","Каталог речей, терміни, фінанси та щоденні списки в одному приватному застосунку.","Katalog předmětů, termíny, finance a každodenní seznamy v jedné soukromé aplikaci."],
    ["Bez konta","No account","Kein Konto","Sans compte","Sin cuenta","Без акаунта","Bez účtu"],
    ["Lokalnie","Locally","Lokal","En local","En local","Локально","Lokálně"],
    ["Offline","Offline","Offline","Hors ligne","Sin conexión","Офлайн","Offline"],
    ["📦 Przedmioty","📦 Items","📦 Gegenstände","📦 Objets","📦 Objetos","📦 Предмети","📦 Předměty"],
    ["📅 Terminy","📅 Deadlines","📅 Termine","📅 Échéances","📅 Fechas","📅 Терміни","📅 Termíny"],
    ["📊 Finanse","📊 Finances","📊 Finanzen","📊 Finances","📊 Finanzas","📊 Фінанси","📊 Finance"],
    ["📝 Listy i zadania","📝 Lists and tasks","📝 Listen und Aufgaben","📝 Listes et tâches","📝 Listas y tareas","📝 Списки та завдання","📝 Seznamy a úkoly"],
    ["Katalog przedmiotów w aplikacji Domowik z kategoriami, lokalizacjami i wartością rzeczy","Domowik item catalog with categories, locations and item values","Domowik-Gegenstandskatalog mit Kategorien, Orten und Werten","Catalogue d’objets Domowik avec catégories, emplacements et valeurs","Catálogo de objetos de Domowik con categorías, ubicaciones y valores","Каталог предметів Domowik із категоріями, місцями та вартістю","Katalog předmětů Domowik s kategoriemi, umístěním a hodnotami"],
    ["Katalog przedmiotów z kategoriami, lokalizacjami i wartością rzeczy","Item catalog with categories, locations and item values","Gegenstandskatalog mit Kategorien, Orten und Werten","Catalogue d’objets avec catégories, emplacements et valeurs","Catálogo de objetos con categorías, ubicaciones y valores","Каталог предметів із категоріями, місцями та вартістю","Katalog předmětů s kategoriemi, umístěním a hodnotami"],
    ["Lista nadchodzących terminów z datami i oznaczeniem spraw cyklicznych","Upcoming deadlines with dates and recurring markers","Anstehende Termine mit Daten und Wiederholungsmarkierungen","Échéances à venir avec dates et indications de récurrence","Próximas fechas con indicación de eventos recurrentes","Найближчі терміни з датами й позначенням повторень","Nadcházející termíny s daty a označením opakování"],
    ["Miesięczny kalendarz terminów z wydarzeniami wybranego dnia","Monthly deadline calendar with events for the selected day","Monatskalender mit Terminen des ausgewählten Tages","Calendrier mensuel avec les événements du jour sélectionné","Calendario mensual con eventos del día seleccionado","Місячний календар із подіями вибраного дня","Měsíční kalendář s událostmi vybraného dne"],
    ["Przegląd finansów domowych z saldem, wpływami, wydatkami i wykresem","Home finance overview with balance, income, expenses and chart","Haushaltsfinanzübersicht mit Saldo, Einnahmen, Ausgaben und Diagramm","Vue des finances du foyer avec solde, revenus, dépenses et graphique","Resumen financiero del hogar con saldo, ingresos, gastos y gráfico","Огляд домашніх фінансів із балансом, доходами, витратами та графіком","Přehled domácích financí se zůstatkem, příjmy, výdaji a grafem"],
    ["Lista zakupów z produktami pogrupowanymi według sklepów","Shopping list with products grouped by store","Einkaufsliste mit nach Geschäften gruppierten Produkten","Liste de courses avec produits regroupés par magasin","Lista de compras con productos agrupados por tienda","Список покупок із товарами, згрупованими за магазинами","Nákupní seznam s produkty seskupenými podle obchodů"],
    ["Ekran finansów domowych w trybie ciemnym","Home finance screen in dark mode","Haushaltsfinanzen im Dunkelmodus","Écran des finances du foyer en mode sombre","Pantalla de finanzas del hogar en modo oscuro","Екран домашніх фінансів у темному режимі","Obrazovka domácích financí v tmavém režimu"],
    ["5 rzeczy","5 items","5 Gegenstände","5 objets","5 objetos","5 предметів","5 předmětů"],
    ["za 7 dni","in 7 days","in 7 Tagen","dans 7 jours","en 7 días","через 7 днів","za 7 dní"],
    ["Przegląd","Inspection","Wartung","Entretien","Revisión","Огляд","Kontrola"],
    ["Przegląd samochodu","Car inspection","Fahrzeugprüfung","Contrôle du véhicule","Revisión del coche","Огляд автомобіля","Kontrola vozidla"],
    ["jutro, 15:00","tomorrow, 15:00","morgen, 15:00","demain, 15:00","mañana, 15:00","завтра, 15:00","zítra, 15:00"],
    ["LIP","JUL","JUL","JUIL.","JUL","ЛИП","ČVC"],
    ["Pieczywo","Bread","Brot","Pain","Pan","Хліб","Pečivo"],
    ["Mleko","Milk","Milch","Lait","Leche","Молоко","Mléko"],
    ["Filtry do wody","Water filters","Wasserfilter","Filtres à eau","Filtros de agua","Фільтри для води","Vodní filtry"],
    ["Główna nawigacja","Main navigation","Hauptnavigation","Navigation principale","Navegación principal","Головна навігація","Hlavní navigace"],
    ["Nawigacja w stopce","Footer navigation","Fußzeilennavigation","Navigation du pied de page","Navegación del pie","Навігація внизу сторінки","Navigace v zápatí"],
    ["Poprzedni screenshot","Previous screenshot","Vorheriger Screenshot","Capture précédente","Captura anterior","Попередній знімок","Předchozí snímek"],
    ["Następny screenshot","Next screenshot","Nächster Screenshot","Capture suivante","Captura siguiente","Наступний знімок","Další snímek"],
    ["Sterowanie galerią","Gallery controls","Galerie-Steuerung","Commandes de la galerie","Controles de la galería","Керування галереєю","Ovládání galerie"],
    ["Screenshoty aplikacji","App screenshots","App-Screenshots","Captures de l’application","Capturas de la aplicación","Знімки екрана застосунку","Snímky aplikace"],
    ["Najważniejsze wyróżniki","Key benefits","Wichtigste Vorteile","Principaux avantages","Ventajas principales","Головні переваги","Hlavní výhody"],
    ["Obszary aplikacji","App areas","App-Bereiche","Espaces de l’application","Áreas de la aplicación","Розділи застосунку","Části aplikace"],
    ["Kolory motywów","Theme colors","Designfarben","Couleurs des thèmes","Colores de temas","Кольори тем","Barvy motivů"],
    ["Domowik — strona główna","Domowik — home page","Domowik — Startseite","Domowik — accueil","Domowik — inicio","Domowik — головна сторінка","Domowik — hlavní stránka"],
    ["Domowik — wróć na początek strony","Domowik — back to the top","Domowik — zurück nach oben","Domowik — retour en haut","Domowik — volver arriba","Domowik — повернутися нагору","Domowik — zpět nahoru"]
    ["Poradniki","Guides","Ratgeber","Guides","Guías","Порадники","Průvodci"],
  ];

  const languageNames = {
    pl: 'Polski', en: 'English', de: 'Deutsch', fr: 'Français',
    es: 'Español', uk: 'Українська', cs: 'Čeština',
  };
  const maps = Object.fromEntries(languages.map((language, index) => [
    language,
    new Map(rows.map((row) => [row[0], row[index]])),
  ]));
  const normalize = (value) => value.replace(/\s+/g, ' ').trim();
  let currentLanguage = 'pl';

  const textEntries = [];
  const walker = document.createTreeWalker(document.body, NodeFilter.SHOW_TEXT, {
    acceptNode(node) {
      const parent = node.parentElement;
      if (!normalize(node.nodeValue) || !parent) return NodeFilter.FILTER_REJECT;
      if (parent.closest('script, style, noscript, [data-year], [data-language]')) {
        return NodeFilter.FILTER_REJECT;
      }
      return NodeFilter.FILTER_ACCEPT;
    },
  });
  while (walker.nextNode()) {
    const node = walker.currentNode;
    textEntries.push({ node, source: normalize(node.nodeValue) });
  }

  const attributeEntries = [];
  document.querySelectorAll('[alt], [aria-label], [title]').forEach((element) => {
    for (const attribute of ['alt', 'aria-label', 'title']) {
      if (element.hasAttribute(attribute)) {
        attributeEntries.push({ element, attribute, source: element.getAttribute(attribute) });
      }
    }
  });

  const titleSource = document.title;
  const description = document.querySelector('meta[name="description"]');
  const ogTitle = document.querySelector('meta[property="og:title"]');
  const ogDescription = document.querySelector('meta[property="og:description"]');
  const ogImageAlt = document.querySelector('meta[property="og:image:alt"]');
  const twitterTitle = document.querySelector('meta[name="twitter:title"]');
  const twitterDescription = document.querySelector('meta[name="twitter:description"]');
  const twitterImageAlt = document.querySelector('meta[name="twitter:image:alt"]');
  const ogLocale = document.querySelector('meta[property="og:locale"]');
  const ogLocales = {
    pl: 'pl_PL', en: 'en_US', de: 'de_DE', fr: 'fr_FR',
    es: 'es_ES', uk: 'uk_UA', cs: 'cs_CZ',
  };
  const metadata = [
    { element: description, source: description?.content },
    { element: ogTitle, source: ogTitle?.content },
    { element: ogDescription, source: ogDescription?.content },
    { element: ogImageAlt, source: ogImageAlt?.content },
    { element: twitterTitle, source: twitterTitle?.content },
    { element: twitterDescription, source: twitterDescription?.content },
    { element: twitterImageAlt, source: twitterImageAlt?.content },
  ].filter((entry) => entry.element && entry.source);

  function translate(source, language = currentLanguage) {
    return maps[language]?.get(source) || source;
  }

  function setLanguage(language, persist = true) {
    if (!languages.includes(language)) language = 'pl';
    currentLanguage = language;
    document.documentElement.lang = language;
    document.title = translate(titleSource, language);

    textEntries.forEach(({ node, source }) => {
      const original = node.nodeValue;
      const leading = original.match(/^\s*/)?.[0] || '';
      const trailing = original.match(/\s*$/)?.[0] || '';
      node.nodeValue = `${leading}${translate(source, language)}${trailing}`;
    });
    attributeEntries.forEach(({ element, attribute, source }) => {
      element.setAttribute(attribute, translate(source, language));
    });
    metadata.forEach(({ element, source }) => {
      element.content = translate(source, language);
    });
    if (ogLocale) ogLocale.content = ogLocales[language];

    const selector = document.querySelector('[data-language]');
    if (selector) selector.value = language;
    if (persist) {
      try { localStorage.setItem('domowik:website-language', language); } catch { /* no-op */ }
    }
    document.dispatchEvent(new CustomEvent('domowik:languagechange', { detail: { language } }));
  }

  const selector = document.querySelector('[data-language]');
  selector?.addEventListener('change', (event) => setLanguage(event.target.value));
  selector?.querySelectorAll('option').forEach((option) => {
    const name = languageNames[option.value];
    if (name) option.title = name;
  });

let initialLanguage = 'pl';

try {
  const requested = new URLSearchParams(window.location.search).get('lang');
  const saved = localStorage.getItem('domowik:website-language');

  if (languages.includes(requested)) {
    initialLanguage = requested;
  } else if (languages.includes(saved)) {
    initialLanguage = saved;
  } else {
    // Pierwsza wizyta - zawsze polski
    initialLanguage = 'pl';
  }

} catch {
  initialLanguage = 'pl';
}

setLanguage(initialLanguage, false);

  window.domowikI18n = {
    get language() { return currentLanguage; },
    setLanguage,
    translate: (source) => translate(source),
  };
})();
