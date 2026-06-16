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
