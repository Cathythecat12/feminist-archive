const paragraphs = (text) =>
  text
    .trim()
    .split(/\n\s*\n/)
    .map((paragraph) => ({
      type: "paragraph",
      text: paragraph.trim(),
    }));

export const articles = [
  {
    id: "barbie-capitalism",
    language: "fr",
    hidden: true,
    title:
      "Le capitalisme patriarcal a reconditionné Barbie avec le féminisme… puis ils ont gagné encore plus d’argent ?",
    category: "Writing",
    author: "Feminist Archive",
    date: "20 mai 2026",
    readTime: "18 min read",
    image: "/images/barbie-cover3新版.PNG",
    excerpt:
      "Mattel critique désormais son propre passé au nom de l’anti-patriarcat, en injectant l’esprit de la liberté féministe dans les marchandises elles-mêmes. Et, ce faisant, l’entreprise réalise des profits plus importants que jamais.",
    tags: ["capitalisme", "féminisme", "Barbie", "idéologie", "marchandise"],
    contentBlocks: [
      {
        type: "paragraph",
        text:
          "En effet, l’ancien récit patriarcal ne pouvait plus se maintenir. Barbie ne pouvait plus être vendue aux femmes simplement comme un objet entièrement décoré.",
      },
      ...paragraphs(`
À l’origine, Barbie fonctionnait comme un modèle de ce à quoi une femme était censée ressembler. Les proportions de son corps étaient totalement irréalistes. Elle était éternellement jeune, éternellement mince, éternellement propre, préservée du travail et du poids du corps. Au fond, elle était un corps fantasmé par le regard masculin, figé pour toujours dans le plastique.

Dès le départ, Barbie n’a jamais été un jouet de la subjectivité. Elle était un jouet de la surface. L’activité centrale de la Barbie originelle n’était pas de « créer des histoires », mais de changer sans fin d’apparence : changer de vêtements, assortir des accessoires, se maquiller, décorer des pièces. Barbie existait comme un modèle d’apprentissage enseignant aux filles comment se transformer elles-mêmes en marchandises.
`),
      {
        type: "image",
        src: "/images/barbie-capitalism-01.jpg",
        caption: "Catalogue Barbie collector, édition été 2007",
      },
      ...paragraphs(`
Aujourd’hui, cependant, avec le développement de la conscience féministe, cette logique du produit est manifestement devenue invendable. Mattel ne peut plus tirer profit de la simple commercialisation d’une féminité dé-réalisée et marchandisée. Et c’est évidemment une bonne chose. Barbie promeut désormais l’idée que les femmes peuvent devenir n’importe qui : médecins, avocates, présidentes, astronautes.

Mais c’est précisément là que réside le véritable problème. Si Barbie peut devenir n’importe qui, alors il faut lui acheter davantage de choses. Davantage de vêtements. Davantage de voitures. Davantage d’accessoires. Davantage de maisons. Ainsi, les consommateurs de Barbie sont absorbés sans effort dans le système infini d’expansion marchande mis en place par Mattel.

Barbie nous dit célèbrement que : « Le patriarcat se cache aujourd’hui plus profondément. » Ce que le film ne mentionne jamais, cependant, c’est que le système de déversement marchand de Mattel s’est lui aussi dissimulé plus profondément.

L’ensemble du film construit continuellement deux mythes centraux.

Le premier mythe est le suivant : Barbieland n’est pas simplement un univers de jouets, mais un véritable univers féministe alternatif et vivant. Il est rempli de voitures de luxe, de villas, de produits de beauté, de mode et de performances identitaires. Chaque Barbie possède une subjectivité complète. Elles ne sont plus des poupées passives attendant d’être manipulées ; elles apparaissent comme des êtres véritablement vivants.

Le second mythe est que la Barbie protagoniste possède la capacité de franchir la frontière entre le fantasme et la réalité. Elle n’est plus simplement un jouet. Elle semble être plus vivante que la vie elle-même. Elle éprouve l’angoisse existentielle, possède un libre arbitre, traverse un processus de développement personnel et finit par devenir l’incarnation même de la liberté féminine.

Et c’est précisément ici que la logique narrative de Barbie s’aligne parfaitement avec la logique marchande de Mattel.

Car une fois que Barbie est transformée en quelque chose de véritablement « vivant », acheter des meubles, des villas, des voitures, du maquillage ou des accessoires de mode pour elle ne ressemble plus à une consommation ordinaire. Cela donne plutôt l’impression d’aider Barbie à construire un monde complet d’existence. La consommation elle-même est reconditionnée comme un acte de donation de vie.

Ainsi, au moment même où Barbie pénètre dans l’intériorité émotionnelle du public comme incarnation de la liberté féminine, l’investissement affectif dans son système marchand atteint simultanément un sommet sans précédent.
`),
      {
        type: "heading",
        text: "Le génie du film réside dans le fait qu’il permet à Mattel de se caricaturer lui-même.",
      },
      ...paragraphs(`
Dans le film, les vieux dirigeants masculins blancs sont tournés en ridicule, moqués et placés dans la position de la négation. Le public est ainsi conduit à croire que le film a déjà accompli sa critique du patriarcat et du capital. Mais en réalité, ce qui est sacrifié n’est que l’image du capitaliste. Ce qui demeure intact, c’est le système marchand lui-même.
`),
      {
        type: "image",
        src: "/images/barbie1.jpg",
      },
      ...paragraphs(`
Les capitalistes contemporains ne maintiennent plus de continuité avec leurs propres produits. Le capital accepte volontiers de se placer lui-même dans la position de sa propre négation. Les dirigeants de Mattel représentés dans le film apparaissent comme des hommes blancs dépassés, patriarcaux, ridicules et stupides. Ces vieux stratèges se mettent sans honte dans le rôle des méchants idéologiques afin de séduire un public vaguement social-libéral. Mais ce qui est réellement nié n’est que l’image du capitaliste, et non la marchandise elle-même.

Barbie, en tant que marchandise, occupe au contraire sans difficulté la position de l’affirmation. Elle apparaît anti-patriarcale, anti-commerciale, voire apparemment anti-capitaliste. Elle se ressuscite elle-même à travers une posture qui semble dépasser la logique marchande, acquérant ainsi un charisme subjectif inédit.

Et c’est précisément cette posture « anti-commerciale » qui ouvre une brèche dans l’ordre psychologique auparavant cohérent de l’anti-consumérisme du spectateur. Ce n’est qu’alors que la marchandise peut véritablement pénétrer dans le sujet.
`),
      {
        type: "statement",
        lines: [
          "Autrefois, ils gagnaient des sommes colossales grâce au commercialisme direct.",
          "Aujourd’hui, ils se critiquent eux-mêmes sous la bannière de l’anti-capitalisme, réinjectant dans les marchandises elles-mêmes des concepts tels que la « liberté », l’« éveil » et le « féminisme », concepts qui étaient pourtant destinés à critiquer le capitalisme.",
          "Puis ils gagnent encore plus d’argent qu’auparavant.",
        ],
      },
      {
        type: "heading",
        text: "Barbie devient de plus en plus humaine. Les êtres humains deviennent de plus en plus semblables à Barbie.",
      },
      {
        type: "quote",
        text:
          "Les pieds pointés de Barbie ont finalement touché le sol. Alors maintenant, la manière de prouver que l’on est féministe consiste à acheter d’énormes quantités de vêtements roses, à s’habiller comme Barbie et à aller voir Barbie au cinéma ?",
      },
      ...paragraphs(`
Les marchandises capitalistes contemporaines ne sont plus simplement consommées par les individus. Elles ont commencé à organiser la subjectivité elle-même.

Barbie, en tant que marchandise, ne possède aucune conscience véritable. Elle doit accomplir sa propre « spiritualisation » à travers les émotions du public, à travers l’identification, la passion féministe et la projection symbolique. En d’autres termes, la subjectivité de Barbie est une subjectivité empruntée. Et plus le public se projette en Barbie, plus Barbie semble devenir vivante.

Une structure profondément absurde apparaît alors.

À la surface, le film raconte la transformation de Barbie, de jouet en être humain. Mais simultanément, le processus inverse se produit également : les êtres humains commencent à devenir des prolongements de Barbie elle-même. Les sujets sont recodés par les marchandises. Les individus commencent à se remodeler activement comme des signes-marchandises.

Les corps des femmes participant à ce phénomène deviennent des surfaces de performance idéologique. Les gens commencent à porter du rose, à s’habiller comme Barbie, à prendre des selfies dans les cinémas, à mettre en scène une « esthétique Barbie » dans les espaces publics. Les sujets eux-mêmes deviennent des supports de l’idéologie marchande.

Le capitalisme possède un talent extraordinaire pour reconvertir la présence des symboles politiques en circuits de consommation. En réalité, le capital de la mode avait déjà commencé à investir dans les vêtements et accessoires roses inspirés de Barbie bien avant la sortie du film. Dès que celui-ci est arrivé dans les salles, l’industrie de la mode rose, les cosmétiques, les collaborations de marques, les selfies sur les réseaux sociaux et les publications de sorties au cinéma ont été instantanément activés. Le symbolisme féministe lui-même est devenu un carburant pour l’expansion capitaliste.
`),
      {
        type: "image",
        src: "/images/barbie-capitalism-03.jpg",
      },
      ...paragraphs(`
L’ancien problème était que les gens objectivaient Barbie et instrumentalisaient le corps féminin. Mais aujourd’hui, un autre extrême est apparu : les sujets eux-mêmes commencent à se soumettre au signifiant Barbie.

Les individus organisent leur existence autour des marchandises, tandis que les marchandises deviennent elles-mêmes le nouveau centre de la subjectivation.

Théoriquement, le film aurait dû orienter le public vers les conditions réelles des femmes : le travail des femmes, les structures patriarcales, les questions de subjectivité elles-mêmes. Au lieu de cela, tout glisse rapidement vers le rose, les tenues Barbie, les selfies Barbie, l’esthétique Barbie et les communautés symboliques Barbie.

Les gens n’entrent plus réellement dans la réalité des femmes. Ils consomment le sentiment même du féminisme. Et lorsque les symboles commencent à dévorer le contenu, les êtres humains et les marchandises commencent à s’idolâtrer mutuellement.
`),
      {
        type: "heading",
        text: "Barbie ne devrait pas devenir notre maître.",
      },
      ...paragraphs(`
Le féminisme ne devrait pas devenir une nouvelle idole symbolique. Sinon, nous cessons de réfléchir sur nous-mêmes et nous nous mettons à imiter sans fin une prétendue « image correcte de la femme », même lorsque cette image paraît progressiste et émancipatrice.

Lorsqu’un objet devient excessivement symbolisé, les individus ne peuvent plus véritablement s’approcher de l’objet lui-même.
`),
    ],
  },

  {
    id: "butler-women-subject-heterosexual-matrix",
    language: "fr",
    hidden: true,
    title:
      "Le féminisme cherche à représenter les femmes, mais les « femmes » pourraient être produites par le pouvoir lui-même.",
    category: "Reviews",
    author: "Feminist Archive",
    date: "31 mai 2026",
    readTime: "4 min read",
    image: "/images/文章素材图9.png",
    excerpt:
      "À partir de Gender Trouble, ce guide réexamine la manière dont le sujet « femmes » est produit par le droit, le langage, les institutions et la matrice hétérosexuelle.",
    tags: ["Butler", "Gender Trouble", "matrice hétérosexuelle", "sujet"],
    contentBlocks: [
      ...paragraphs(`
Le féminisme traditionnel suppose souvent que les femmes existent d’abord : les femmes sont opprimées, le féminisme parle en leur nom et lutte pour l’égalité de leurs droits. Mais cette position contient une prémisse implicite : celle selon laquelle les « femmes » constituent déjà un groupe objectif préexistant.

Foucault soutient que les systèmes juridiques de pouvoir produisent les sujets avant de les représenter. Autrement dit, le droit et le pouvoir ne rencontrent pas simplement un groupe déjà existant ; ils fabriquent les objets mêmes qu’ils gouvernent. Le droit détermine qui compte comme citoyen et qui compte comme criminel, qui est considéré comme malade mental et qui est considéré comme normal, et c’est à travers ces classifications que de telles identités sont socialement produites. Il n’y a pas d’abord le sujet, puis la loi. La loi produit le sujet, puis prétend simplement le représenter.

Si le droit peut produire des sujets, les « femmes » pourraient-elles elles aussi être produites ? Lorsque les féministes répètent : « Je représente les femmes », une question apparaît : peut-être que la définition des « femmes » n’est pas donnée naturellement, mais est coproduite par le droit, la médecine, l’éducation, les institutions familiales et les normes de genre.

Dès lors, lorsque le féminisme affirme : « Nous représentons les femmes », il risque d’accepter involontairement la définition de la « femme » fournie par le système de pouvoir même qu’il devrait critiquer. Butler écrit que le sujet féministe devient une formation discursive du système politique qu’il était censé combattre.

Pourquoi s’agit-il d’un problème politique ? Parce que toute constitution d’un sujet implique une exclusion. Si nous disons : femme = X, quelqu’un sera nécessairement exclu. Chaque fois que les « femmes » sont définies, certaines personnes sont simultanément rejetées hors de cette définition.

Butler critique l’idée d’une féminité universelle. Le féminisme traditionnel affirme souvent : toutes les femmes sont opprimées par le patriarcat ; par conséquent, toutes les femmes partagent des intérêts communs. Butler considère cette position comme trop simpliste. L’identité d’une personne est façonnée simultanément par le genre, la classe sociale, la race, la nationalité, la sexualité, la situation géographique et bien d’autres facteurs. Une femme blanche de classe moyenne vivant en Grande-Bretagne et une femme vivant dans la pauvreté peuvent être confrontées à des structures d’oppression très différentes.

Nous supposons souvent qu’il existe d’abord des femmes, puis que le droit les représente. Mais ne pourrait-on pas inverser cette relation ? Le droit produit les « femmes », puis déclare : « Je ne fais que les représenter. » La théorie du contrat social raconte une histoire similaire : il existerait d’abord des individus libres qui concluent ensuite un contrat pour fonder l’État. Mais est-ce réellement le cas ? Ou bien l’État définit-il d’abord ce qui compte comme individu avant de prétendre que celui-ci a toujours existé ? C’est pourquoi Butler suggère qu’il n’existe peut-être aucun sujet antérieur à la loi.
`),
      {
        type: "highlight",
        color: "#1f6f63",
        text:
          "La construction de la catégorie des femmes comme sujet cohérent et stable constitue-t-elle une régulation involontaire et une réification des rapports de genre ? Une telle réification ne contredirait-elle pas les objectifs mêmes du féminisme ?",
      },
      ...paragraphs(`
Butler ne dit pas que les femmes n’existent pas. Elle critique l’essentialisme : l’idée selon laquelle la « femme » constituerait une essence unifiée et selon laquelle toutes les femmes partageraient une même nature, une même expérience et une même identité.

Pour Butler, les « femmes » sont une catégorie politique continuellement construite à travers l’histoire. Plus précisément, la femme n’est pas une substance, mais un processus : un effet des rapports de pouvoir.
`),
      {
        type: "heading",
        text: "La matrice hétérosexuelle",
      },
      ...paragraphs(`
L’identité de « femme » semble stable parce que la société moderne suppose que le « corps féminin », le « genre féminin » et le « désir pour les hommes » doivent nécessairement coïncider.

Pour Butler, la figure apparemment stable de la « femme » est un effet produit par ce système. Dès lors que les lesbiennes, les personnes bisexuelles, les personnes transgenres et les personnes non binaires apparaissent, cette structure stable commence à se fissurer.

Il y a ici un avertissement : lorsque le féminisme construit les femmes comme un sujet cohérent et stable, cette catégorie n’est-elle pas elle-même construite par le patriarcat, ou plus largement par la société et l’histoire ?

Dans une certaine mesure, la catégorie des femmes n’acquiert sa stabilité et sa cohérence qu’au sein de la matrice hétérosexuelle. Si le féminisme ne critique pas la catégorie « femmes » elle-même, il risque de reproduire les structures de pouvoir existantes au lieu de libérer les sujets.

Si le sujet « femmes » est lui-même produit par des rapports de pouvoir, alors le féminisme ne devrait pas traiter les « femmes » comme un fondement naturel et indiscutable. Le faire empêche de voir les mécanismes mêmes qui produisent cette identité.

Le paradoxe est peut-être le suivant : le féminisme ne peut véritablement comprendre ce que signifie parler au nom des femmes ou les représenter qu’à partir du moment où il commence à remettre en question le sujet « femmes » lui-même.
`),
      {
        type: "source",
        text:
          "Source : Judith Butler, Gender Trouble: Feminism and the Subversion of Identity (1990), chapitre 1, section 1.",
      },
    ],
  },

  {
    id: "pansexualism-freudian-psychoanalysis",
    language: "fr",
    hidden: true,
    title:
      "Le pansexualisme : une interprétation vulgarisée de la psychanalyse freudienne réduisant toute activité psychique à la sexualité",
    category: "Writing",
    author: "Feminist Archive",
    date: "16 juin 2026",
    readTime: "7 min read",
    image: "/images/泛性主义.png",
    excerpt:
      "Le pansexualisme prétend rendre hommage à la psychanalyse, mais il en constitue en réalité une profonde méprise.",
    tags: ["psychanalyse", "Freud", "pansexualisme", "inconscient", "discours"],
    contentBlocks: [
      ...paragraphs(`
Le pansexualisme désigne l’idée selon laquelle l’ensemble des activités psychiques, des impulsions psychologiques, des structures du désir, voire l’art, la religion et la personnalité humaine, peuvent finalement être réduits à des mécanismes sexualisés tels que le refoulement sexuel, le complexe d’Œdipe, le désir incestueux envers la mère, le meurtre symbolique du père, les fantasmes incestueux, le stade oral ou le stade anal. Cette interprétation prétend rendre hommage à la psychanalyse, mais elle en constitue en réalité une profonde méprise.

On peut considérer le pansexualisme comme une forme de culte de la psychologie populaire. Il transforme la psychanalyse en un outil psychologique censé tout expliquer. Selon cette perspective, il suffirait d’interpréter un comportement comme l’expression d’un « refoulement sexuel », d’un « blocage du désir » ou d’une « structure œdipienne » pour accéder à la vérité profonde d’un individu. Une telle explication demeure pourtant extrêmement grossière. Elle ne pénètre jamais le cœur véritable de la psychanalyse ; elle se contente de saisir les éléments les plus facilement consommables des premières théories de Freud pour les ériger en principe explicatif universel.

De nombreuses personnes qui se réclament de la psychanalyse ne s’orientent finalement pas vers une analyse rationnelle, mais vers le mysticisme, la spiritualisation ou diverses formes d’interprétations ésotériques. C’est notamment le cas de certains courants de la psychologie jungienne (Jungian Psychology) ou de certains cercles restreints consacrés à Lacan. Chez eux, la psychanalyse semble parfois se transformer en une forme de mystique moderne. En apparence, elle se présente comme critique et profonde ; en réalité, elle continue de dépendre d’une autorité. Simplement, l’autorité ne provient plus de la science ou de la religion, mais d’une communauté académique, d’un cercle de savoir ou d’un maître psychanalyste. Celui qui est reconnu comme maître obtient alors le privilège d’interpréter les êtres humains.

Le pansexualisme tente de réconcilier la nature et l’humanité à travers les phénomènes psychiques. D’un côté, l’être humain possède des désirs, des pulsions et des instincts qui semblent relever de la nature ; de l’autre, il dispose de la raison, de la réflexion et de la conscience de soi, qui semblent appartenir à l’ordre de l’esprit et de la subjectivité. Le pansexualisme utilise alors la sexualité ou l’Éros pour relier ces deux dimensions, en expliquant tout comme le produit d’une économie du désir. Si la libido est refoulée, elle se transforme en symptôme ; si elle est totalement libérée, elle engendre le désordre. L’état dit normal correspondrait alors à une répartition adéquate du désir sous la régulation du principe de réalité. Cette vision paraît proche de la distinction freudienne classique entre le principe de plaisir (Pleasure Principle) et le principe de réalité (Reality Principle).

Telle est la structure typique du pansexualisme : tous les problèmes deviennent des problèmes d’économie libidinale, et toute distinction entre normalité et pathologie dépend de la manière dont la sexualité est organisée. Pourtant, cette médiation demeure trop simpliste. La psychanalyse authentique ne considère pas la raison comme l’ordre et le désir comme le chaos. Au contraire, la raison, la réflexion et le langage eux-mêmes sont traversés de ruptures, de désordres et de symptômes.
`),
      {
        type: "heading",
        text: "La psychanalyse concerne fondamentalement le discours, non la sexualité",
      },
      ...paragraphs(`
La véritable préoccupation de la psychanalyse n’est pas la sexualité, ou du moins celle-ci n’en constitue pas le centre fondamental. Freud a certes utilisé des notions telles que le refoulement sexuel, le complexe d’Œdipe ou la libido. Mais réduire la psychanalyse à ces concepts revient à n’en saisir que la surface. Ce qui importe réellement, c’est la manière dont la psychanalyse révèle que le sujet est structuré par le langage et par les systèmes symboliques. L’inconscient n’est pas un entrepôt souterrain où seraient stockés des désirs et des souvenirs ; il constitue un mécanisme de circulation symbolique. Il n’est ni une « conscience latente », ni une mystérieuse substance cachée dans les profondeurs de l’être, ni la simple question de savoir si l’on désire sa mère. Il est la manière dont le langage lui-même fonctionne à travers le sujet.
`),
      {
        type: "heading",
        text: "L’inconscient (Unconscious), la conscience (Consciousness) et le préconscient (Preconscious)",
      },
      ...paragraphs(`
Beaucoup imaginent l’inconscient comme une cave où seraient conservés désirs, traumatismes et souvenirs. Cette représentation est erronée. L’inconscient ressemble davantage à un mécanisme en mouvement, comparable à un système linguistique, à un système symbolique ou à un programme fonctionnant automatiquement. Il est en activité permanente. La conscience, quant à elle, n’est qu’un « message d’erreur » produit au cours de ce fonctionnement.

Autrement dit, l’inconscient n’est pas une substance mais un mouvement ; la conscience n’est pas davantage un maître stable, mais un effet produit par l’opération du système symbolique. Lorsque nous parlons, ce n’est pas toujours un « moi » transparent qui maîtrise pleinement le sens. Le langage circule de lui-même, les signifiants se déplacent et le système symbolique poursuit son activité. Nous croyons savoir ce que nous voulons dire, alors que le sens est souvent organisé après coup. Le sujet entend ce qu’il a dit, puis attribue rétrospectivement une signification à ses propres paroles.

Le préconscient n’est pas non plus un filtre qui censurerait les contenus avant leur expression. Il ressemble davantage à un mécanisme de révision a posteriori. Il n’empêche pas certaines choses d’être dites ; il intervient après coup pour examiner ce qui paraît maladroit, honteux, problématique ou nécessitant une reformulation. Ainsi, la conscience, le préconscient et l’inconscient ne sont pas des organes psychiques fixes, mais différentes modalités du mouvement discursif.

La psychanalyse ne devrait pas être mystifiée. Elle devrait être comprise comme une pratique lucide, comme une opération symbolique accomplie dans le dialogue. La relation entre l’analyste et l’analysant n’est pas une conversation entre égaux, mais une relation discursive asymétrique. La tâche de la psychanalyse n’est pas de déclarer que « tous vos problèmes proviennent du refoulement sexuel », mais de permettre au sujet de reconnaître, à travers la parole, les ruptures, les répétitions, les symptômes et les structures désirantes qui traversent son propre discours.

L’analyste ne doit pas se transformer en Grand Autre (Grand Autre) objet de vénération pour l’analysant. Il ne doit pas exploiter le transfert afin de susciter l’amour, la dépendance ou l’adoration. L’éthique authentique de la psychanalyse exige au contraire que l’analyste reconnaisse qu’il ne possède aucune réponse ultime et qu’il ne se présente pas comme un maître détenteur de la vérité. Faute de quoi, la psychanalyse risque de se transformer en une relation d’autorité quasi sectaire, en une industrie du « maître spirituel » coûteuse, opaque et fondée sur la dépendance psychologique.

Ainsi, le pansexualisme reconduit la psychanalyse à une forme de réalisme psychologique et de culte mystique de l’autorité. Ce faisant, il trahit précisément ce qu’il y a de plus critique et de plus subversif dans la psychanalyse elle-même.
`),
    ],
  },
];
