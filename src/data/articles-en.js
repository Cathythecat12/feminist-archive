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
    id: "archive-of-refusal",
    hidden: true,
    title: "Archive of Refusal",
    category: "Writing",
    author: "Feminist Archive",
    date: "20 May 2026",
    readTime: "18 min read",
    image: "/images/barbie-cover3.jpg",
    excerpt:
      "On dissent, memory, and the forms of life that resist easy incorporation.",
    tags: ["archive", "refusal", "memory"],

    content: `Refusal is often misunderstood as absence.

But refusal is not silence, passivity, or withdrawal from the social world. In many cases, refusal is a mode of preserving thought against premature incorporation.

Modern digital culture constantly pressures subjects to become immediately visible, immediately productive, and immediately legible. Feminist writing must sometimes resist this acceleration.

An archive therefore is not merely a storage system. It is also a political structure that determines what remains visible across time.

To preserve difficult thought is itself a feminist practice.`
  },

  {
    id: "publishing-slowly",
    hidden: true,
    title: "On Publishing Slowly",
    category: "Writing",
    author: "Editorial",
    date: "May 2026",
    excerpt:
      "Why independent feminist publishing should resist algorithmic speed.",
    tags: ["publishing", "editorial", "slowness"],
    image: "/images/1.png",
    content: `Publishing slowly is not nostalgia.

It is a refusal of the contemporary demand that all writing become content.

The speed of algorithmic circulation destroys memory. Texts appear, disappear, and become socially exhausted within hours.

Feminist Archive attempts to preserve another temporality of reading.

A slower archive allows writing to remain intellectually alive beyond visibility metrics.`
  },

  {
    id: "barbie-capitalism",
    title: "Patriarchal Capitalism Repackaged Barbie with Feminism… And Then They Made Even More Money?",
    category: "Writing",
    author: "Feminist Archive",
    date: "20 May 2026",
    readTime: "18 min read",
    image: "/images/barbie-cover3新版.PNG",
    excerpt:
      "Mattel now criticizes itself in the name of anti-patriarchy, injecting the spirit of feminist freedom into commodities themselves — and as a result, they profit more than ever before.",
    tags: [
      "capitalism",
      "feminism",
      "commodity critique",
      "Barbie",
      "ideology",
    ],
  
    contentBlocks: [
      {
        type: "paragraph",
        text:
          "Indeed, the old patriarchal narrative could no longer sustain itself. Barbie could no longer continue to be sold to women merely as a fully decorated object.",
      },
  
      ...paragraphs(`
  Originally, Barbie functioned as a model of how women were supposed to be seen. Her body proportions were wildly unrealistic. She was eternally young, eternally slim, eternally clean, untouched by labor, untouched by bodily weight. At her core, she was a male fantasy body permanently frozen in plastic.
  
  From the very beginning, Barbie was never a toy of subjectivity. She was a toy of surface. The core activity of early Barbie was never “creating stories,” but endlessly changing appearances: changing outfits, matching accessories, applying makeup, decorating rooms. Barbie existed as a training model teaching girls how to transform themselves into commodities. `),
  
  {
    type: "image",
    src: "/images/barbie-capitalism-01.jpg",
    caption: "Summer 2007 edition of the Barbie collector catalogue",
  },

...paragraphs(`

  Today, however, with the advancement of feminist consciousness, this product logic has clearly become unsellable. Mattel can no longer profit simply by marketing a de-realized, commodified femininity. That is, of course, a good thing. Barbie now promotes the idea that women can become anyone: doctors, lawyers, presidents, astronauts.
  
  But here lies the real problem. If Barbie can become anyone, then you must buy her more things. More clothes. More cars. More accessories. More houses. As a result, Barbie consumers are effortlessly absorbed into Mattel’s endless system of bundled commodity expansion.
  
  Barbie famously tells us that: “Patriarchy hides itself more deeply now.” What the film never mentions, however, is that Mattel’s commodity dumping system has also hidden itself more deeply.
  
  The entire film continuously constructs two central myths. The first myth is this: Barbieland is not merely a toy world, but a genuinely “living” feminist alternate universe. It is filled with luxury cars, mansions, beauty products, fashion, and identity performance. Every Barbie possesses full subjectivity. They are no longer passive plastic dolls waiting to be manipulated; they appear as genuinely living beings.
  
  The second myth is this: the protagonist Barbie possesses the ability to cross the boundary between fantasy and reality. She is not merely a toy. She is somehow more alive than aliveness itself. She possesses existential anxiety, free will, personal growth, and ultimately becomes the embodiment of female freedom itself.
  
  And it is precisely here that the narrative logic of Barbie perfectly aligns with the commodity logic of Mattel. Because once Barbie is transformed into something truly “alive,” purchasing furniture, mansions, cars, makeup, and fashion accessories for your Barbie no longer feels like ordinary consumption. Instead, it begins to feel as though you are helping her construct a complete world of existence. Consumption itself becomes repackaged as an act of giving life. Thus, at the exact moment when Barbie enters the emotional interiority of audiences as the embodiment of female freedom, emotional investment in Barbie’s commodity system simultaneously reaches an unprecedented peak.
  `),
  {
    type: "heading",
    text: "The brilliance of the film lies in the fact that it allows Mattel to caricature itself.",
  },
  ...paragraphs(`
  In the film, the old white male executives are mocked, ridiculed, and placed in the position of negation. Audiences are therefore led to believe that the film has already completed its critique of patriarchy and capital. But in reality, what gets sacrificed is merely the image of the capitalist. What remains fully intact is the commodity system itself.
  `),
  
      {
        type: "image",
        src: "/images/barbie1.jpg",
      
      },
  
      ...paragraphs(`
  Contemporary capitalists no longer maintain continuity with their own products. Capital willingly places itself in the position of self-negation. The Mattel executives depicted in the film are outdated, patriarchal, ridiculous, foolish old white men. These cunning old men shamelessly place themselves into the role of ideological villains in order to appeal to vaguely left-liberal audiences. But what is actually negated is only the image of the capitalist, not the commodity itself.
  
  Barbie, as commodity, instead smoothly occupies the position of affirmation. She appears anti-patriarchal, anti-commercial, even seemingly anti-capitalist. She resurrects herself through a posture that appears to transcend commodity logic itself, and in doing so acquires unprecedented subjective charisma.
  
  And it is precisely this “anti-commercial” posture that opens a rupture within the spectator’s previously coherent anti-consumerist psychological order. Only then can the commodity truly flow into the subject.

  `),
  {
    type: "statement",
    lines: [
      "Once, they made enormous amounts of money through direct commercialism.",
      "Today, they criticize themselves under the banner of anti-capitalism, reinjecting “freedom,” “awakening,” and “feminism” — concepts originally meant to critique capitalism — back into commodities themselves.",
      "Then they make even more money than before.",
    ],
  },
  {
    type: "heading",
    text: "Barbie is becoming increasingly human — humans are becoming increasingly like Barbie.",
  },
      {
        type: "quote",
        text:
          "Barbie’s pointed feet finally touched the ground. So now the way you prove yourself to be feminist is by buying huge amounts of pink clothing, dressing like Barbie, and going to the theater to watch Barbie?",
      },
  
      ...paragraphs(`

  
  Contemporary capitalist commodities are no longer merely consumed by people. They have begun organizing subjectivity itself.
  
  Barbie, as commodity, possesses no genuine consciousness of her own. She must complete her own “spiritualization” through the emotions of audiences, through identification, feminist passion, and symbolic projection. In other words: Barbie’s subjectivity is borrowed subjectivity. And the more audiences project themselves into Barbie, the more alive Barbie appears to become.
  
  Thus an extremely absurd structure emerges. On the surface, the film depicts Barbie transforming from toy into human. But simultaneously, the reverse process also occurs: humans begin transforming into extensions of Barbie herself. Subjects become re-coded by commodities. People begin actively reshaping themselves into commodity-signs. The bodies of women participating in this phenomenon become ideological performance surfaces. People begin wearing pink, dressing like Barbie, taking selfies in movie theaters, performing “Barbie aesthetics” in public spaces. Subjects themselves become media for commodity ideology.
  
  Capitalism is extraordinarily skilled at transforming the presence of political symbols back into circuits of consumption. In reality, fashion capital had already begun investing in pink Barbie-style clothing and accessories long before the film’s release. Once the movie arrived, pink fashion industries, cosmetics, brand collaborations, social media selfies, and theater check-ins were instantly activated. Feminist symbolism itself became fuel for capitalist expansion.  `),

  
      {
        type: "image",
        src: "/images/barbie-capitalism-03.jpg",
  
      },
      ...paragraphs(`
  The old problem was that people objectified Barbie and instrumentalized the female body. But today another extreme has emerged: subjects themselves begin surrendering to the Barbie-signifier. People organize their existence around commodities, while commodities themselves become the new center of subjectivation.
  
  Theoretically, the film should have directed audiences toward women’s real conditions: women’s labor, patriarchal structures, questions of subjectivity itself. Instead, everything rapidly slides toward pinkness, Barbie outfits, Barbie selfies, Barbie aesthetics, Barbie symbolic communities. People no longer truly enter women’s reality. They consume the feeling of feminism itself. And once symbols begin devouring content, humans and commodities begin mutually idolizing one another.`),
  
  {
    type: "heading",
    text: "Barbie should not become our master.",
  },
  
  ...paragraphs(`
  Feminism should not become another symbolic idol. Otherwise, we cease reflecting upon ourselves, and instead endlessly imitate some supposedly “correct female image,” even when that image appears progressive and liberatory. Once an object becomes excessively symbolized, people can no longer truly approach the object itself.
  `),
    ],
  },

  {
    id: "sexual-liberationism-erotic-nihilism",
    title:
      "Modern “sexual liberationism” is not genuine freedom, but rather the erotic nihilism that emerges when humanism, liberalism, and global capitalism are pushed to their extreme limits.",
    category: "Writing",
    author: "Feminist Archive",
    date: "15 June 2026",
    readTime: "17 min read",
    image: "/images/sappho-and-alcaeus-social.jpg",
    excerpt:
      "Why does modernity present bodily freedom, sexual diversity, and the freedom to choose one’s desires as forms of liberation, only to end up drawing the subject into perversion, consumption, fetishism, and the capitalist order?",
    tags: ["sexual liberation", "Lacan", "capitalism", "fetishism", "feminism"],
    contentBlocks: [
      {
        type: "heading",
        text: "Sexual Liberationism as the Endpoint of Humanism",
      },
      ...paragraphs(`
Secular humanism originally emphasized “human beings,” “freedom,” “the body,” and “diversity.” Yet it contains an internal contradiction: on the one hand, it seeks to recognize diversity; on the other hand, it still attempts to preserve a universal conception of humanity as a whole.

This contradiction was originally mediated through appeals to “nature,” environmentalism, and the objective world. Later, this conception of nature became further internalized into the human body itself, leading to the following logic: if nature deserves respect, then my bodily nature deserves respect first. If my body belongs to me, then my sexuality, my desires, and the ways I use my body should also be entirely free.

Thus “bodily freedom” gradually slides into “sexual freedom.” Yet a problem emerges here: sexuality is not a purely external bodily activity but an intensely internal erotic structure. If liberal principles are crudely applied to sexuality, teleology begins to collapse.

That is to say, people no longer know what they truly want. All that remains are displays, consumption, classifications, labels, and experiences of various sexualities. What emerges is a colorful nihilism. Not the gray nihilism of decadence, but a colorful nihilism wrapped in diversity, identities, sexual labels, and postmodern fantasies.
`),
      {
        type: "heading",
        text: "“Sexuality as a Liberal Fantasy”",
      },
      ...paragraphs(`
There is no pure “sex itself”; there are only different kinds of sexualities organized through symbolic systems, culture, and ideology.

This clearly reflects a Foucauldian problematic: sexuality is not a natural fact but an object produced through discourse, power, and knowledge.

Yet the author also criticizes a more superficial aspect of Foucauldian thought, arguing that if one merely studies different sexualities in a detached and descriptive manner, one risks becoming trapped in a postmodern illusion: as though recognizing difference, diversity, and identity labels were itself liberation.

These forms of diversity can themselves be absorbed and commodified by capitalism and liberalism.

Sexual liberationism did not emerge in isolation. It arose within the broader context of global capitalism. Although it appears liberating on the surface, it is in fact a mechanism of purposeless enjoyment operating within global capitalism.
`),
      {
        type: "heading",
        text: "The Lacanian Section: Why Does It Lead Toward “Perversion”?",
      },
      ...paragraphs(`
According to Lacan’s formula of fantasy, the subject is constitutively lacking. The subject can never fully coincide with itself and is perpetually searching for something capable of filling its absence. This object is the objet petit a.

The objet petit a is not a concrete object but a remainder within the structure of desire, the thing that the subject believes can make it whole. For some people this may be romantic love; for others it may be power, prestige, wealth, or a particular identity. The subject desires an object not because the object itself possesses any special value, but because the subject projects its own lack onto it.

The ordinary structure of fantasy is roughly this: the subject ($) confronting the objet petit a.

The subject itself is empty, barred, and incomplete. The objet petit a is the remainder of desire, something that appears external yet is in fact the most intimate thing. For example, a man may discover that he has no genuine place within a male community and therefore projects his lack onto a woman. The woman becomes his objet petit a, as though she could prove his value, his place, and his completeness. This is fantasy.

But where does perversion emerge?

Perversion emerges when the objet petit a moves behind the subject and occupies the position of the Big Other.

In the normal structure of fantasy, the subject remains constrained by some form of ethical or symbolic order. However, once the objet petit a occupies the position of the Big Other, a perverse structure emerges. The subject, which ought to be sustained by ethics and communal symbolic structures, becomes governed by the object of desire itself. The object ceases to be merely the target of desire and becomes the one issuing commands.

The subject no longer says, “I desire it.” Instead, the subject feels that “it demands that I desire it.”

The object of desire becomes a commandment. The subject continuously hears a hidden injunction: Enjoy, for my sake. Desire, for my sake. Obey, for my sake. This is the true structure of perversion.

In other words, the subject should be sustained by ethical order, symbolic order, and the Big Other. Instead, some erotic object, desired commodity, or bodily sign comes to command the subject.

Lacan’s late work contains a famous formulation: “The superego says: Enjoy!”

Enjoy for me. This is the core of perversion.

Traditional society tells you: Do not do this. Do not desire. Do not enjoy. Modern society tells you: Desire. Enjoy. Be yourself. Discover your true self. This is one of the strangest features of modern capitalism. In the past, enjoyment generated guilt. Today, failing to enjoy generates guilt. Consequently, the modern subject becomes trapped in a new anxiety: Have I enjoyed enough? At this point, enjoyment is no longer freedom but an obligation.
`),
      {
        type: "heading",
        text: "Eroticism Could Be Sublimated, but Perversion Externalizes It",
      },
      ...paragraphs(`
A crucial distinction must be made here: genuine erotic desire can be sublimated, spiritualized, and internalized. Perversion, by contrast, externalizes, bodily materializes, and behavioralizes erotic desire.

When one truly loves another person, fantasy may involve holding hands, walking side by side, sharing a life together, or attaining spiritual intimacy. Perversion cannot tolerate this intensity of inner experience and therefore transforms erotic desire into external acts, taboos, bodily operations, stimuli, and fetishes.

Thus the pervert is a “failed lover.” Unable to become a lover, the subject retreats into object worship.
`),
      {
        type: "heading",
        text: "Masochism: Enjoying the Silence of the Big Other",
      },
      ...paragraphs(`
The central point of masochism is that the masochist is not controlled by the sadist. Rather, the masochist manipulates the sadist. The masochist arranges for the other person to beat, humiliate, or harm them. On the surface, the masochist appears dominated; in reality, the other person has been transformed into an instrument. What the masochist truly enjoys is not pain itself but the silence of the Big Other.

It is as though the masochist asks: Big Other, what exactly do you want from me? The Big Other does not answer. The masochist therefore answers on behalf of the Big Other: The Big Other wants me to suffer. I am the object of the Big Other’s love. The more I suffer, the more I prove that I have been chosen. The core of masochism is therefore the attempt to confirm oneself as the beloved child of the Big Other through suffering.
`),
      {
        type: "heading",
        text: "Sadism: Seeing on Behalf of the Big Other",
      },
      ...paragraphs(`
The logic of sadism is the opposite. The sadist believes that the Big Other is blind and cannot see, and therefore the sadist must see on its behalf. By causing others pain, the sadist attempts to short-circuit their own gaze and the gaze of the Big Other. The sadist’s enjoyment comes from the feeling: I see on behalf of the Big Other. I enforce order on behalf of the Big Other. I make others suffer because a higher command requires it.

For this reason, many forms of moral rigorism, political violence, and patriarchal punishment can be interpreted through a sadistic structure: they appear to be exercises of justice while secretly deriving enjoyment in the name of the Big Other.
`),
      {
        type: "heading",
        text: "Several “Static Fetishes”: All Are Relations to the Big Other",
      },
      ...paragraphs(`
Necrophilia, somnophilia, and amaurophilia are not fundamentally about particular acts but about different states of the Big Other. In necrophilia, the Big Other is dead, deaf, and blind. The subject treats the corpse as an embodiment of the Big Other and turns itself into an instrument of the Big Other’s enjoyment. In somnophilia, the Big Other is asleep. The subject allows the Big Other to continue dreaming, suspending ethical injunctions. In amaurophilia, the Big Other cannot see but can still hear, or perhaps only pretends to see. The subject enjoys the experience of “the gaze within blindness.”

These three forms can be summarized as: sleeping with the Big Other. Perversion appears to be a relationship with a concrete object, but it is actually a relationship with a particular state of the Big Other.
`),
      {
        type: "heading",
        text: "Perversion in Public Space: Exhibitionism, Frotteurism, and Cross-Dressing",
      },
      ...paragraphs(`
The core of exhibitionism is not “letting others see me” but forcing others to close their eyes, thereby proving that the Big Other is watching. Others avert their gaze because social order is present. Consequently, the exhibitionist feels: the Big Other sees me, and I see myself being seen by the Big Other.

The core of frotteurism is partiality. It depends upon concealment, noise, crowds, fragments of bodies, and fragments of voices. The subject feels that they are seeing or hearing something concealed on behalf of the Big Other.

The core of cross-dressing is not simple androgyny but compelling the Big Other to acknowledge the existence of sexual difference. Its enjoyment comes from the feeling: I see that the Big Other is pretending not to see. I know that the Big Other knows sexual difference exists. I stand at the boundary of sexual difference.

The article therefore argues that cross-dressing is productive but not revolutionary. It can generate insight, yet it still presupposes the existence of the Big Other.
`),
      {
        type: "heading",
        text: "The Most Extreme Form: Pedophilia",
      },
      ...paragraphs(`
Pedophilia is among the most extreme and disturbing forms of perverse structure. The reason is not simply that it violates an external moral norm but that it reveals the deepest logic of perversion itself.

People often assume that evil arises when ethical, legal, or sacred authority is denied. It is commonly imagined that the most horrifying acts become possible because someone ceases to believe in authority or limitations. Yet the opposite may be true. Such individuals do not conclude that everything is permitted because they do not believe in the Big Other. Rather, they believe too strongly in the Big Other. They imagine that once they have completely devoted themselves to the Big Other, they are entitled to commit the most obscene acts while interpreting them as sacrifice, holiness, or love.

Within this structure, the subject does not believe that they are satisfying personal desires. On the contrary, they believe that they have entirely devoted themselves to some higher being. This higher being may be God, Truth, Destiny, History, Purity, Love, or any other principle granted absolute legitimacy. Once the subject believes they have become an instrument of this sacred order, responsibility for their actions disappears. In fantasy, the agent is no longer “I” but the Big Other itself.

It is here that perversion reaches its extreme form. The subject mistakes their own desire for the desire of the Big Other and mistakes their enjoyment for the command of the Big Other. The subject no longer says, “I want this.” Instead, the subject says, “A higher power requires this.”

Thus the most obscene desires acquire the holiest appearance. The most violent impulses obtain the most elevated justifications. Evil no longer appears as evil but instead appears as love, sacrifice, devotion, education, salvation, or sacred duty.

One might therefore rewrite Dostoevsky’s famous proposition. The problem is not that “if God does not exist, everything is permitted.” The truly terrifying possibility is the reverse: if the Big Other exists, everything becomes permitted. If the subject believes that God absolutely exists and that they can directly represent God, then anything can be justified. Every action becomes part of a sacred plan. Every desire can be packaged as the demand of a higher order. Every injury can be disguised as love.

The fundamental illusion is that the subject completely identifies their own desire with the will of the Big Other. Responsibility for desire is transferred to an imagined absolute authority. Once this transfer is complete, the most extreme obscenity and the most extreme sanctity become intertwined. The more sacred the justification, the more effectively it conceals dark enjoyment. The more elevated the mission, the more likely it is to conceal desires that cannot be acknowledged.
`),
      {
        type: "heading",
        text: "Voyeurism: Not Seeing Others, but Remaining Unseen",
      },
      ...paragraphs(`
The essence of voyeurism is not “I see someone else’s naked body” but “I am not seen.” More fundamentally, it is: I see the Big Other looking at someone else. When the victim discovers that they have been watched and experiences shame, fear, or despair, the voyeur receives confirmation that social order and the gaze of the Big Other still exist. The voyeur’s enjoyment comes from activating the gaze of the Big Other.
`),
      {
        type: "heading",
        text: "Fetishism: Toward a Critique of Capitalism",
      },
      ...paragraphs(`
Fetishism is not merely the love of objects. It is the projection of intersubjectivity onto objects. The isolated subject cannot establish genuine relationships with others and therefore projects erotic desire, other minds, and intersubjectivity onto shoes, clothing, socks, and various commodities.

This naturally leads to Marx’s theory of commodity fetishism: human relations become relations between things; things become personified; people become objectified; desire becomes absorbed into commodities. Thus fetishism becomes the interface through which sexual liberationism connects with global capitalism. Sexual liberationism therefore does not ultimately lead to freedom. It leads to commodification, fetishization, and a capitalist economy of desire.
`),
      {
        type: "heading",
        text: "From a Feminist Perspective",
      },
      ...paragraphs(`
Consequently, if women’s bodily freedom is understood merely as “I can consume, display, and choose how to use my body,” it will inevitably be recoded by global capitalism and the patriarchal gaze into a colorful nihilism.

Contemporary liberalism tells women: you have the right to display your body, cultivate your sexuality, and choose your desires. The problem is that this “freedom” has often already been shaped in advance by digital platforms, consumer culture, the male gaze, and the beauty industry. Women appear to be making free choices, yet in reality they are frequently compelled to demonstrate their freedom through self-commodification.

A genuinely feminist sexual liberation would not mean allowing women to become more freely available as objects of desire. It would mean enabling women to reclaim the position of the subject: the position from which desire is defined, the gaze is refused, relationships are organized, and meaning is produced.

Patriarchal capitalism does not need a complete female subject. It needs only marketable fragments of femininity: legs, waists, faces, voices, youthfulness, gentleness, cuteness, or danger. Women are fragmented into a series of fetishes and are then encouraged to mistake that fragmentation for self-expression.
`),
    ],
  },

  {
    id: "feminism-art-capitalism",
    layout: "psyche",
    title:
      "The Most Successful Triumph of Capitalism Is Not the Suppression of Feminism, but Convincing Feminism That Participation in the Existing Order Is Liberation",
    subtitle:
      "Feminism, Art, Capitalism: When feminism shifts from transforming power structures to seeking entry into them, it begins to turn from a politics of liberation into a component of capitalist ideology.",
    category: "Reviews",
    author: "Feminist Archive",
    date: "June 2026",
    readTime: "7 min read",
    image: "/images/FeminismArtCapitalism.png",
    excerpt:
      "When feminism shifts from transforming power structures to seeking entry into them, it begins to turn from a politics of liberation into a component of capitalist ideology.",
    tags: ["feminism", "art", "capitalism", "Marxism", "ideology"],
    recommendedArticleIds: [
      "barbie-capitalism",
      "reproduction-is-labour",
      "self-objectification-beauty-myth",
    ],
    contentBlocks: [
      {
        type: "lead",
        text:
          "In contemporary capitalist societies, feminism appears to have achieved unprecedented victories. Women have entered universities, corporate boardrooms, parliaments and governments, as well as art institutions, museums, and the global art market. More and more women artists are gaining recognition, and an increasing number of feminist issues have entered the public sphere of discussion. On the surface, gender equality seems to be gradually becoming a reality.",
      },
      {
        type: "paragraph",
        text:
          "However, in Feminism, Art, Capitalism, Angela Dimitrakaki argues that this optimistic narrative conceals a deeper problem: is feminism transforming capitalism, or is it increasingly being appropriated by capitalism itself?",
      },
      {
        type: "quote",
        text:
          "The greatest danger facing contemporary feminism does not come from its explicit opponents, but precisely from its own success.",
      },
      ...paragraphs(`
Dimitrakaki points out that over the past several decades, feminism has increasingly been redefined as a story of individual success. Successful women are presented as symbols of social progress, while independence, confidence, professional achievement, and purchasing power are celebrated as key indicators of women’s liberation. Within this narrative, equality appears to have been achieved so long as women are granted the same opportunities as men to compete, to become entrepreneurs, investors, artists, or political leaders.

Yet this understanding implicitly accepts the fundamental premise of capitalist society: that the social order itself does not need to change; it merely needs to include more women. The problem is that an exploitative structure does not automatically become just because more women are admitted into it. A female corporate executive may still participate in the production of poverty and inequality. A female politician may likewise uphold existing structures of power. If oppressive institutions remain intact, granting more women the opportunity to participate in oppression is not the same as achieving liberation.

According to the author, feminism in the neoliberal era has gradually abandoned its critique of capitalism and redirected its focus toward personal choice and individual freedom. Women are encouraged to continuously invest in themselves, improve themselves, and cultivate themselves in order to succeed through market competition. Freedom is increasingly understood as the freedom to consume, the freedom to pursue a career, and the freedom of self-realization.

However, such freedoms are often accessible only to those who already possess significant resources. The vast majority of women remain constrained by working conditions, economic inequality, class structures, and the dynamics of global capital. Feminism thus risks transforming itself from a collective political movement into an individualized ethic of success.

The art world provides one of the clearest illustrations of this transformation. Many feminist artistic practices originally possessed a distinctly critical character. They challenged patriarchy, questioned the disciplining of bodies, opposed the objectification of women, and sought to expose the mechanisms through which social power operates. Yet capitalism possesses a remarkable capacity: it can not only tolerate criticism but also convert criticism itself into a commodity.

An artwork originally intended to resist market logic can be purchased by collectors at extraordinary prices, exhibited at international biennials, transformed into an investment asset, and made to generate profit within the cultural industries. Radical political language becomes a cultural brand. Challenging artistic practices become integrated into the circuits of cultural production. The critical nature of art does not automatically prevent its commodification. On the contrary, criticality itself can become a significant source of market value.
`),
      {
        type: "recommendations",
        title: "You may also like",
      },
      ...paragraphs(`
For this reason, the greatest strength of contemporary capitalism lies not in suppressing resistance but in absorbing it. It can transform revolutionary language into advertising slogans, emancipatory demands into brand identities, and critical art into cultural capital. Feminism therefore faces a profound danger: the more successfully it enters mainstream culture, the more likely it is to lose its original political edge.

When feminism becomes a fashion trend, an identity label, or a marketing strategy, it may no longer pose a threat to the existing order. Instead, it risks becoming one of the order’s most effective components.

Dimitrakaki further argues that art should not remain confined to the level of identity representation. Merely presenting women’s experiences, telling women’s stories, or emphasizing women’s identities is insufficient to constitute a genuinely emancipatory politics. If art neglects questions of labour, production relations, class structures, and global flows of capital, it can offer only a cultural critique while leaving untouched the economic foundations that sustain oppression.

Feminist art with genuine emancipatory potential must therefore do more than challenge patriarchy; it must also challenge capitalism. It must concern itself not only with who is speaking, but also with who is labouring. It must focus not only on cultural representation but also on material production.

Feminism, Art, Capitalism seeks to restore a connection between feminism and Marxism that has been increasingly severed. Dimitrakaki argues that women’s oppression does not arise solely from gender relations. Rather, it is deeply intertwined with the capitalist mode of production. Capitalism depends upon cheap labour, unpaid care work, and mechanisms of social reproduction within the household, burdens that are disproportionately carried by women. Unless these economic structures are challenged, many feminist achievements will ultimately be reabsorbed and repurposed by capitalism.

True women’s liberation does not mean enabling more women to successfully integrate into the existing order. It means rethinking and transforming the social structures that generate inequality in the first place. The progress of a society cannot be measured merely by whether women gain access to centres of power. It must also be measured by whether those centres of power themselves are transformed. Otherwise, feminism may ultimately become capitalism’s most successful ideology, because it convinces people that gaining the opportunity to participate in exploitation is equivalent to achieving liberation.
`),
    ],
  },

  {
    id: "butler-women-subject-heterosexual-matrix",
    title:
      "Feminism Tries to Represent Women, but “Women” May Be Produced by Power Itself.",
    category: "Reviews",
    author: "Feminist Archive",
    date: "31 May 2026",
    readTime: "4 min read",
    sidebarText:
      "Feminist Archive writes. This essay belongs to the Feminist Archive classic reading guide programme, and offers a guide to Judith Butler’s Gender Trouble.",
    image: "/images/文章素材图9.png",
    excerpt:
      "Beginning from Gender Trouble, this guide rethinks how the subject “women” is produced by law, language, institutions, and the heterosexual matrix.",
    tags: ["Butler", "Gender Trouble", "heterosexual matrix", "subject"],
    contentBlocks: [
      ...paragraphs(`
Traditional feminism often assumes that “women” exist first: women are oppressed, feminism speaks on their behalf, and feminism fights for women’s equal rights. But this contains a hidden premise: that “women” already exists as an objective group.

Foucault argues that juridical systems of power produce subjects and then represent them. In other words, law and power do not simply encounter a pre-existing group of people; rather, they manufacture the objects they govern. Law says who counts as a citizen and who counts as a criminal, who is mentally ill and who is normal, and through those classifications such identities become socially produced. It is not first subject, then law. Law produces the subject, and then claims merely to represent it.

If law can produce subjects, could “women” also be produced? When feminists repeatedly say “I represent women,” the question appears: perhaps the definition of “women” is not naturally given, but jointly produced by law, medicine, education, family institutions, and gender norms.

At that point, when feminism says “we represent women,” it may unintentionally accept the definition of “woman” supplied by the very system of power it should be criticizing. Butler writes that the feminist subject becomes a discursive formation of the political system it was supposed to oppose.

Why is this a political problem? Because every formation of a subject involves exclusion. If we say woman = X, someone will necessarily be excluded. Every time “women” is defined, some people are also pushed outside that definition.

Butler criticizes the idea of universal womanhood. Traditional feminism often says: all women are oppressed by patriarchy, therefore all women share common interests. Butler thinks this is too simple. A person’s identity is shaped simultaneously by gender, class, race, nationality, sexuality, geography, and more. A white middle-class woman in Britain and a woman living in poverty may encounter very different structures of oppression.

We often assume: first there are women, then law represents them. But could it be the other way around: law produces “women,” and then declares, “I am only representing women”? Social contract theory offers a similar story: first there are free individuals, then they sign a contract and establish the state. But is that really so? Or does the state first define what counts as an individual, and then pretend that the individual has always existed? This is why Butler suggests that there may be no subject prior to the law.
`),
      {
        type: "highlight",
        color: "#1f6f63",
        text:
          "Is the construction of the category of women as a coherent and stable subject an unwitting regulation and reification of gender relations? Would such reification not run against the aims of feminism itself?",
      },
      ...paragraphs(`
Butler is not saying that women do not exist. She is criticizing essentialism: the idea that “woman” is a unified essence, and that all women share a common nature, experience, and identity.

For Butler, “women” is a political category repeatedly constructed across history. More precisely, woman is not a substance, but a process: an effect of relations of power.
`),
      {
        type: "heading",
        text: "The Heterosexual Matrix",
      },
      ...paragraphs(`
The identity “woman” appears stable because modern society assumes that “female body,” “feminine gender,” and “desire for men” must align.

For Butler, the seemingly stable figure of “woman” is an effect produced by this system. Once lesbians, bisexual people, trans people, and non-binary people appear, that stable structure begins to come apart.

Here there is a warning: when feminism constructs women as a coherent and stable subject, is that category not itself constructed by patriarchy, or by society and history more broadly?

To a certain extent, the category of women gains its stability and coherence only within the heterosexual matrix. If feminism does not criticize the category “women” itself, it may repeat existing structures of power rather than liberating subjects.

If “women” as a subject is itself produced through relations of power, then feminism should not treat “women” as a natural and unquestionable foundation. Doing so prevents us from seeing the mechanisms that produce this identity in the first place.

Perhaps the paradox is this: feminism can truly understand what it means to speak for or represent women only when it begins to question the subject “women” itself.
`),
      {
        type: "source",
        text:
          "Source: Judith Butler, Gender Trouble: Feminism and the Subversion of Identity (1990), Chapter 1, Section 1.",
      },
    ],
  },

  {
    id: "butler-sex-natural-or-constructed",
    title:
      "Is the “Sex” on Which “Women” and “Men” Are Based Really Natural?",
    category: "Reviews",
    author: "Feminist Archive",
    date: "1 June 2026",
    readTime: "5 min read",
    sidebarText:
      "Feminist Archive writes. This essay belongs to the Feminist Archive classic reading guide programme, and offers a guide to Judith Butler’s Gender Trouble.",
    image: "/images/文章素材图11.png",
    excerpt:
      "Starting from the classic sex/gender distinction, this guide asks whether so-called biological sex truly comes before culture, language, and classification.",
    tags: ["Butler", "Gender Trouble", "sex", "gender", "subject"],
    contentBlocks: [
      ...paragraphs(`
Most feminists have inherited a classic formula: sex = nature, gender = culture. Female bodies are trained into femininity; male bodies are trained into masculinity. The purpose of this formula was important. It allowed feminists to refute the claim that women are naturally destined to be a certain way. Biological sex may be given, the argument goes, but gender is constructed.

Yet if gender is constructed, why is sex not constructed too? When a doctor sees an infant and says that a vagina means girl and a penis means boy, there is already a standard of classification at work. The body has already passed through a social sorting system.

This leads to a radical question: what exactly is biological sex? Chromosomes? Hormones? Genitals? Anatomy? In reality there are XXY chromosomes, XO chromosomes, androgen insensitivity syndrome, intersex bodies, and many other variations. Where, then, does the binary classification of female/male come from?

There is another problem. If feminism says “woman is socially constructed,” does it merely replace biological determinism with cultural determinism? Simone de Beauvoir’s famous line, “One is not born, but rather becomes, woman,” is often misunderstood as saying that women’s bodies are trained into womanhood. But Beauvoir is more radical than that. She does not say that a woman’s body becomes woman; she says that someone becomes woman.

Butler’s famous argument is that perhaps sex has always already been gender. The classification of “female body” and “male body” is itself already a cultural process. Traditional philosophy often imagines that “mind” uses the “body” as a tool, or that “culture” acts upon the “body.” Butler rejects both models, because the body itself is also discursively constructed.

Beauvoir argues that man is the Subject and woman is the Other. Woman is defined as not-man. But Luce Irigaray goes further: woman is not even the Other. To become the Other, one must first be recognized as occupying a position within the system. Woman is not granted that position. “Woman” cannot be adequately represented by existing language because that language is already male-centered.

From Plato to Descartes to Sartre, Western philosophy often assumes a substantial subject: first there is a subject, then it has attributes. “The person” has “gender.” Butler asks: why not think the reverse? What if gendered practices produce the subject? It is not that I do women’s things because I am a woman. Rather, I repeatedly do what is understood as women’s things, and through that repetition I am recognized as a woman.
`),
      {
        type: "highlight",
        color: "#6f5940",
        text:
          "Perhaps sex has always already been gender. The classification of “female body” and “male body” is itself already a cultural process.",
      },
      {
        type: "source",
        text:
          "Source: Judith Butler, Gender Trouble: Feminism and the Subversion of Identity (1990), Chapter 1, Section 1.",
      },
    ],
  },

  {
    id: "butler-coalition-without-unified-women",
    title: "If There Is No Unified “Women,” How Can Feminism Do Politics?",
    category: "Reviews",
    author: "Feminist Archive",
    date: "1 June 2026",
    readTime: "4 min read",
    sidebarText:
      "Feminist Archive writes. This essay belongs to the Feminist Archive classic reading guide programme, and offers a guide to Judith Butler’s Gender Trouble.",
    image: "/images/文章素材图10.png",
    excerpt:
      "If “women” is not a unified object, can feminist politics still exist? Butler turns toward open coalitions, common action, and identities formed through political practice.",
    tags: ["Butler", "Gender Trouble", "coalition", "feminism", "subject"],
    contentBlocks: [
      ...paragraphs(`
Earlier in the chapter, Irigaray argues that Western civilization is phallogocentric. Philosophy, language, logic, epistemology, and the very concept of the subject are organized around masculine centrality. Butler agrees that this critique is powerful. But she immediately asks: does the entire world truly obey one single patriarchal structure? Are women in non-Western countries oppressed in exactly the same way? Clearly not. Irigaray criticizes universalism, but risks producing another universalism of her own: the claim that every place belongs to one same patriarchal system.

This returns us to Butler’s first question. Much feminist theory quietly assumes that women share a common experience: femininity, maternity, feminine writing, common oppression, and so on. But are the experiences of a white middle-class woman, a poor Black woman, and a lesbian really the same? “Women” is not a unified object.
`),
      {
        type: "heading",
        text: "If There Is No Unified Women, How Can Feminism Do Politics?",
      },
      ...paragraphs(`
Traditional politics and many left movements begin with shared identity and then build alliances: “we are all women, therefore let us unite.” Butler reverses this. First there is action; then there is coalition. Identity may even be produced within the coalition. Feminism should not first define what woman is and only then organize politics. It should act first, and allow identities to form and change through action.

Butler asks: why must unity come first? Why can political action not begin from disagreement? A coalition may include lesbians, heterosexual women, Black women, working-class women. Their positions may conflict. Yet on a specific issue, they can still act together. Action does not require identity to be unified. Instead of defining women first and then building solidarity, feminism should open coalitions that are continually reorganized. Coalition is not the result of identity; identity can be the result of coalition.

Gender is a complex assemblage whose final form is always deferred. Woman is never finished, and there is no final definition. History changes, culture changes, practice changes. Woman is not an essence but a process.

Feminism does not need a unified identity of “women” as its foundation. On the contrary, political coalitions should be built upon the openness, incompletion, and contestability of identity.
`),
      {
        type: "highlight",
        color: "#506b62",
        text:
          "Action does not require identity to be unified. Coalition is not the result of identity; identity can be the result of coalition.",
      },
      {
        type: "source",
        text:
          "Source: Judith Butler, Gender Trouble: Feminism and the Subversion of Identity (1990), Chapter 1, Section 1.",
      },
    ],
  },

  {
    id: "butler-gender-power-repetition-subversion",
    title:
      "Gender Is Not Something Liberated Only After Escaping Power. Gender Is Produced Through Power, Language, Desire, and Repeated Practice.",
    category: "Reviews",
    author: "Feminist Archive",
    date: "1 June 2026",
    readTime: "13 min read",
    sidebarText:
      "Feminist Archive writes. This essay belongs to the Feminist Archive classic reading guide programme, and offers a guide to Judith Butler’s Gender Trouble.",
    image: "/images/文章素材图14.png",
    excerpt:
      "Subverting gender order does not mean finding a pure body outside power, but repeating, appropriating, parodying, and displacing norms from within.",
    tags: ["Butler", "Gender Trouble", "performativity", "heterosexual matrix", "power"],
    contentBlocks: [
      {
        type: "lead",
        text:
          "To subvert the gender order is not to search for a pure body or pure desire outside power. It is to work inside existing norms through repetition, appropriation, parody, and displacement, making those norms lose their appearance of naturalness.",
      },
      ...paragraphs(`
The traditional view says that I have a stable identity, that this identity persists over time, and that gender is one of its attributes. For example: I am a woman, therefore I am gentle, wear skirts, and love men. Butler asks the question in reverse: is the stable “I” already produced by gender norms? It is not that people first possess gender. Rather, gender norms make certain bodies intelligible, and only then are those bodies recognized as persons. Butler’s claim is radical: to be understood socially as a “normal person,” one usually must first be placed within a recognizable gender order.

A gender becomes “intelligible” because it aligns several terms: biological sex, social gender, object of desire, and sexual practice. The modern heterosexual matrix wants a “female body,” “woman identity,” “feminine style,” and “desire for men”; or a “male body,” “man identity,” “masculine style,” and “desire for women.” When this chain breaks, society reads the person as abnormal, unintelligible, or failed. A masculine woman or a feminine man exposes the fact that “normal gender” is not natural fact, but a regulatory system.

Statements such as “I am a woman” or “I am a man” appear to describe an inner truth. But this “inner truth” is produced by norms. Society repeatedly requires you to perform a certain coherence; you perform that coherence; then society says: look, this is your true identity.

Butler compares several explanations. Irigaray says Western language is male-centered, and woman cannot truly be represented within it. Foucault says categories such as man and woman are produced by mechanisms that regulate sexuality. Wittig says gender categories serve compulsory heterosexuality: man is disguised as the universal human, while woman is marked as gendered.

Butler absorbs these insights without fully accepting any single one of them. Her point is that gender identity is not a natural attribute, but a product jointly made by power, language, and systems of desire.

The “metaphysics of substance” is a grammatical illusion, like subject + predicate: woman is gentle; man is masculine. Such grammar makes us think that there is first a substance called woman, and then she possesses the attribute of gentleness. Butler borrows Nietzsche’s critique: there is no doer behind the deed; the doer is a fiction added after the deed. It is not that there is first a woman who then acts like a woman. Rather, certain acts are repeatedly understood as gendered, and those acts gather together to produce the effect that “she is a woman.”
`),
      {
        type: "highlight",
        color: "#7b5b35",
        text:
          "Nietzsche says that the doer is only a fiction added to the deed. Butler applies this to gender: behind gender expression there is no true gender core.",
      },
      ...paragraphs(`
Gender identity appears to be an inner essence, but it is actually the stabilized effect of normative repetition. Identity is performatively constituted by the very expressions that are taken to be its results.

Gender order is maintained through repetition; therefore subversion can also occur only through repetition. The question is not how to escape power, but how to repeat its signs from within power while making those signs depart from their original function. Gender is not an innate essence, but a stylized repetition of bodily acts. The political task is to create “gender trouble,” so that seemingly natural categories such as men, women, heterosexuality, homosexuality, bodies, and desires appear as what they are: constructed.
`),
      {
        type: "heading",
        text: "A Feminist Fantasy Under Critique",
      },
      ...paragraphs(`
Many feminist theories assume that without a subject there can be no agency, and without an “I” there can be no resistance. Butler has already criticized this assumption. But the next question is unavoidable: if the subject itself is produced by power, can we still act?

Butler’s answer is yes: deviation can emerge within the repetition of norms.
`),
      {
        type: "heading",
        text: "Four Views of Gender",
      },
      ...paragraphs(`
For Wittig, gender is a mark produced by the heterosexual regime. “Woman” is not a natural fact but an oppressive category manufactured by heterosexuality. Women are not oppressed because women naturally exist; rather, the mechanism of oppression requires the category “woman.” Butler agrees with this point.

But Butler also criticizes Wittig. At times, Wittig seems to believe that lesbianism, non-reproductive sexuality, and anti-heterosexual practice can escape the gender system itself. Butler finds this too utopian.

For Irigaray, the problem lies in the structure of language. Language itself is phallogocentric. Woman is not simply misused by language; the structure of language excludes woman. Butler finds this suggestive, but worries that it may create a myth of “true female sexuality” or “female language.”

For Lacanian theory, gender comes from prohibition and the symbolic order. Masculine and feminine positions are produced by the Name-of-the-Father, the incest taboo, and the symbolic law. Gender is not natural, but the result of prohibition. Butler does not fully accept this either, because Lacanian theory can make paternal law seem too powerful, universal, and nearly impossible to change.

Butler is closest here to Foucault. She argues that we should not imagine a sexuality before power, a body outside power, or a pure liberation after power, because sexuality itself is produced by relations of power.
`),
      {
        type: "highlight",
        color: "#7b5b35",
        text:
          "Sexuality and power are coextensive. Resistance is not escape from power, but a rearrangement of its effects from within.",
      },
      {
        type: "heading",
        text: "What Is a Strategy of Displacement?",
      },
      ...paragraphs(`
Displacement means repeating the old gender signs while making them no longer serve the old order.

For example, heterosexuality says: masculine = man; feminine = woman; men desire women; women desire men. But in lesbian, gay, queer, drag, and butch/femme practices, these signs are recombined: female body + masculine style; male body + feminine style; same-sex desire + heterosexual signs. These are not merely imitations of heterosexuality.

Butler says: homosexuality is not a copy of heterosexuality; heterosexuality itself is also a copy. If heterosexuality is also produced through repetition, then it has no sacred original status.

In traditional thinking, people fail to see that heterosexuality is a repeated construction masquerading as an original. Same-sex practices, female masculinity, and male femininity expose that supposed original as only another repetition. Its elements can be recombined like a game of arrangement; they are not naturally bound together.

The political force of homosexuality, drag, and gender displacement is that they reveal so-called natural gender to be performed, repeated, and trained.
`),
      {
        type: "note",
        text:
          "Of course, this idea has now been widely accepted in many feminist and queer contexts. But because Gender Trouble was first published in 1990, Feminist Archive remains close to the original text in order to help readers at different stages think through its argument carefully.",
      },
      ...paragraphs(`
Gender is an effect. It is real because it truly shapes bodies, desires, identities, and social treatment. But it is not an essence. Returning to Beauvoir’s phrase, “One is not born, but rather becomes, woman,” Butler adds that this becoming has no endpoint. Woman is a process that is continually produced. Through repeated gestures, movements, clothing, tones of voice, and forms of desire, the body is styled into a recognizable gender.

Gender order is maintained through repetition; therefore subversion can also occur only through repetition. The question is not how to escape power, but how to repeat its signs from within power while making those signs depart from their original function. Gender is not an innate essence, but a stylized repetition of bodily acts. The political task is to create “gender trouble,” so that seemingly natural categories such as men, women, heterosexuality, homosexuality, bodies, and desires appear as what they are: constructed.
`),
      {
        type: "source",
        text:
          "Source: Judith Butler, Gender Trouble: Feminism and the Subversion of Identity (1990), Chapter 1.",
      },
    ],
  },

  {
    id: "butler-repetition-subversion-gender-trouble",
    title:
      "Gender Order Is Maintained Through Repetition, So Subversion Can Only Happen Through Repetition Too.",
    category: "Reviews",
    author: "Feminist Archive",
    date: "2 June 2026",
    readTime: "6 min read",
    sidebarText:
      "Feminist Archive writes. This essay belongs to the Feminist Archive classic reading guide programme, and offers a guide to Judith Butler’s Gender Trouble.",
    image: "/images/文章素材图21.png",
    excerpt:
      "For Butler, the political task is to create gender trouble, making seemingly natural categories of gender, body, and desire appear as constructed.",
    tags: ["Butler", "Gender Trouble", "performativity", "displacement", "power"],
    contentBlocks: [
      {
        type: "lead",
        text:
          "For Butler, the political task is to create “gender trouble,” so that seemingly natural categories such as men, women, heterosexuality, homosexuality, bodies, and desires appear as what they are: constructed.",
      },
      {
        type: "heading",
        text: "A Feminist Fantasy Under Critique",
      },
      ...paragraphs(`
Many feminist theories assume that without a subject there can be no agency, and without an “I” there can be no resistance. Butler has already criticized this assumption. But the next question is unavoidable: if the subject itself is produced by power, can we still act?

Butler’s answer is yes: deviation can emerge within the repetition of norms.
`),
      {
        type: "heading",
        text: "Four Views of Gender",
      },
      ...paragraphs(`
For Wittig, gender is a mark produced by the heterosexual regime. “Woman” is not a natural fact but an oppressive category manufactured by heterosexuality. Women are not oppressed because women naturally exist; rather, the mechanism of oppression requires the category “woman.” Butler agrees with this point.

But Butler also criticizes Wittig. At times, Wittig seems to believe that lesbianism, non-reproductive sexuality, and anti-heterosexual practice can escape the gender system itself. Butler finds this too utopian.

For Irigaray, the problem lies in the structure of language. Language itself is phallogocentric. Woman is not simply misused by language; the structure of language excludes woman. Butler finds this suggestive, but worries that it may create a myth of “true female sexuality” or “female language.”

For Lacanian theory, gender comes from prohibition and the symbolic order. Masculine and feminine positions are produced by the Name-of-the-Father, the incest taboo, and the symbolic law. Gender is not natural, but the result of prohibition. Butler does not fully accept this either, because Lacanian theory can make paternal law seem too powerful, universal, and nearly impossible to change.

Butler is closest here to Foucault. She argues that we should not imagine a sexuality before power, a body outside power, or a pure liberation after power, because sexuality itself is produced by relations of power.
`),
      {
        type: "highlight",
        color: "#236f64",
        text:
          "Sexuality and power are coextensive. Resistance is not escape from power, but a rearrangement of its effects from within.",
      },
      {
        type: "heading",
        text: "What Is a Strategy of Displacement?",
      },
      ...paragraphs(`
Displacement means repeating the old gender signs while making them no longer serve the old order.

For example, heterosexuality says: masculine = man; feminine = woman; men desire women; women desire men. But in lesbian, gay, queer, drag, and butch/femme practices, these signs are recombined: female body + masculine style; male body + feminine style; same-sex desire + heterosexual signs. These are not merely imitations of heterosexuality.

Butler says: homosexuality is not a copy of heterosexuality; heterosexuality itself is also a copy. If heterosexuality is also produced through repetition, then it has no sacred original status.

In traditional thinking, people fail to see that heterosexuality is a repeated construction masquerading as an original. Same-sex practices, female masculinity, and male femininity expose that supposed original as only another repetition. Its elements can be recombined like a game of arrangement; they are not naturally bound together.

The political force of homosexuality, drag, and gender displacement is that they reveal so-called natural gender to be performed, repeated, and trained.
`),
      {
        type: "note",
        text:
          "Of course, this idea has now been widely accepted in many feminist and queer contexts. But because Gender Trouble was first published in 1990, Feminist Archive remains close to the original text in order to help readers at different stages think through its argument carefully.",
      },
      {
        type: "highlight",
        color: "#236f64",
        text:
          "Heterosexuality itself is also a copy. If heterosexuality is produced through repetition, then it has no sacred original status.",
      },
      ...paragraphs(`
Butler goes on to say that gender is an effect. It is real because it truly shapes bodies, desires, identities, and social treatment, but it is not an essence. Money is not a natural object either, but its effects are real.

She extends Beauvoir’s claim that “One is not born, but rather becomes, woman.” This becoming has no endpoint. It is not simply that a little girl grows up and finally becomes woman. Rather, woman is a process that is continually produced. This is why Butler describes gender as a stylization of the body. Through repeated gestures, movements, clothing, tones of voice, and forms of desire, the body is styled into a recognizable gender.

Since gender order is maintained through repetition, subversion can only happen through repetition too. The question is not how to escape power, but how to repeat its signs from within power while making those signs depart from their original function. Gender is not an innate essence, but a stylized repetition of bodily acts. The political task is to create “gender trouble,” so that seemingly natural categories such as men, women, heterosexuality, homosexuality, bodies, and desires appear as what they are: constructed.
`),
      {
        type: "source",
        text:
          "Source: Judith Butler, Gender Trouble: Feminism and the Subversion of Identity (1990), Chapter 1.",
      },
    ],
  },

  {
    id: "butler-origin-myth-sexual-order",
    title:
      "How Is Gender Order Produced? Why Do Men, Women, and Heterosexuality Feel So Natural?",
    category: "Reviews",
    author: "Feminist Archive",
    date: "1 June 2026",
    readTime: "5 min read",
    sidebarText:
      "Feminist Archive writes. This essay belongs to the Feminist Archive classic reading guide programme, and offers a guide to Judith Butler’s Gender Trouble.",
    image: "/images/文章素材图15.png",
    excerpt:
      "Butler criticizes origin myths about patriarchy, natural sex, and a time before law, asking how gender order is produced by narrative, kinship, psychoanalysis, and power.",
    tags: ["Butler", "Gender Trouble", "origin myth", "nature culture", "power"],
    contentBlocks: [
      {
        type: "heading",
        text: "Critiquing the Origin Myth",
      },
      ...paragraphs(`
Butler begins by criticizing a common idea within feminism. Many feminists say that there was once a freer time, then patriarchy appeared and women were oppressed. Or they say that there was once a matriarchal society, later displaced by patriarchy, and that the future means returning to that lost past.

Butler argues that this resembles the storytelling method of patriarchy itself. Every system of power likes to say: something happened in the past, therefore today’s order is justified. Religion tells the story of Eden; states tell founding myths; psychoanalysis tells the story of the Oedipus complex; patriarchy tells stories about the origin of the family.

Butler doubts whether this “past before the law” really existed. Very often, the so-called past is created by the present.
`),
      {
        type: "image",
        src: "/images/文章素材图16.png",
        caption: "Feminist Archive visual archive",
      },
      {
        type: "heading",
        text: "Against the Nature/Culture Binary",
      },
      ...paragraphs(`
Butler then turns to Lévi-Strauss. Lévi-Strauss argues that nature is processed by culture and becomes society, just as raw food becomes cooked food.

Many feminists borrowed this model: biological sex is processed by culture and becomes gender. This became a classic claim of second-wave feminism.

But how do we know that sex is natural? Who defines what counts as nature? Who decides that two sexes are natural facts? Medicine, law, the state, and scientific discourse all participate in such definitions. Biological sex itself is therefore also a cultural production.
`),
      {
        type: "highlight",
        color: "#5f6f54",
        text: "Sex has always already been gender.",
      },
      {
        type: "heading",
        text: "Why Does Feminism Search for a Time Before the Law?",
      },
      ...paragraphs(`
Butler understands the feminist motivation. If something existed before the law, then patriarchy is not eternal. This has obvious liberatory force.

The problem is that if one claims that the true woman, the original woman, or the authentic woman exists deep in history, one has produced a new essentialism.

Butler will then examine several routes.

First: Lévi-Strauss and kinship theory. Why do women become objects of exchange?

Second: Freud and the Oedipus complex. Why must desire be organized as heterosexual?

Third: Lacan, the Name-of-the-Father, and the symbolic order. Why must subject formation pass through gendering?

Fourth: Foucault and the production of power. Why is heterosexuality disguised as nature?

This is the beginning of the first section of Chapter 2 of Gender Trouble.
`),
      {
        type: "source",
        text:
          "Source: Judith Butler, Gender Trouble: Feminism and the Subversion of Identity (1990), Chapter 2, Section 1.",
      },
    ],
  },
  {
    id: "reproduction-is-labour",
    title: "Reproduction Is Also a Form of Labour",
    category: "Writing",
    author: "Feminist Archive",
    date: "June 2026",
    readTime: "5 min read",
    image: "/images/BirthStrike封面图.png",
    heroCaption:
      "Cover image from Birth Strike: The Hidden Fight Over Women’s Work by Jenny Brown.",
    excerpt:
      "Capitalist societies have long relied on women to bear children, raise them, perform domestic work, and care for the elderly, while rendering this labour largely invisible.",
    tags: [
      "reproductive labour",
      "care work",
      "capitalism",
      "feminism",
      "reproductive justice",
    ],
    contentBlocks: [
      ...paragraphs(`
As more and more women choose to delay childbirth, have fewer children, or not have children at all, this reflects a broader social phenomenon: women are becoming less willing to bear the costs of reproduction and caregiving unconditionally.

One reason is that the cost of raising children in modern society continues to rise. Housing, education, healthcare, and childcare expenses have all increased, while wage growth has largely stagnated. This creates a contradiction: capitalism requires a constant supply of new workers, yet it continually raises the cost of producing and raising the next generation. As a result, an increasing number of people can no longer afford to have children.

However, the issue is not simply the rising cost of childrearing. It is also that reproduction itself has long been excluded from the definition of “labor.”
`),
      {
        type: "heading",
        text: "Domestic Labor and the Exclusion of Reproductive Work from the Definition of Labor",
      },
      ...paragraphs(`
In modern economic systems, labor is typically measured through wages and market exchange. Work performed in factories, offices, and commercial activities can be quantified, recorded, and ultimately incorporated into GDP and other indicators of economic growth. Yet a vast amount of labor performed within households has historically remained outside these systems of measurement. Caring for an infant does not generate wages. Cooking for family members does not constitute a market transaction. Caring for the elderly or the sick is likewise difficult to capture through conventional economic indicators.

Capitalism depends not only on factory labor but also on domestic labor. Workers are able to go to work each day because someone prepares meals, does laundry, raises children, and cares for the sick. These activities produce and sustain labor power itself. Yet capitalism generally does not pay for this labor.

Marxist feminist scholars have developed the concept of social reproduction. They argue that capitalism depends not only on the production of commodities but also on the ongoing production and reproduction of labor power. Activities such as raising children, providing education, caregiving, and maintaining households do not directly produce commodities, yet they continuously create and sustain the people who will enter the labor market.

If factories produce commodities, then households produce workers.

However, capitalism generally pays wages only after labor power enters the market, while avoiding responsibility for most of the costs involved in creating that labor power in the first place. Childbearing, childrearing, housework, and caregiving produce the people necessary for society to function, yet these activities have long been treated as private responsibilities.

Marxist feminist scholar Silvia Federici argues in her book Caliban and the Witch that the development of capitalism was accompanied not only by the expansion of factories and markets but also by the reorganization of women’s bodies and reproductive labor. As modern capitalist society emerged, childbirth, childrearing, and domestic work gradually came to be defined as women’s “natural duties” rather than as forms of labor that create social value.

This transformation was not a natural development but a historical process. By interpreting caregiving work as “motherly love,” “responsibility,” or “female nature,” society effectively carried out an ideological process of naturalization. Activities that were once recognized as labor were redefined as instinctive female behaviors, thereby obscuring their economic value and social function.

When childbirth is described as an act of love, when housework is framed as a woman’s proper duty, and when caregiving is understood as a natural responsibility, people often overlook the enormous amounts of time, physical effort, and emotional labor involved. Motherhood becomes sanctified, while the labor itself becomes invisible.

Every child who is born may eventually become a worker, taxpayer, consumer, and participant in maintaining social institutions. Society as a whole benefits from population reproduction. Yet the economic costs, physical risks, and career sacrifices associated with childbirth and childrearing are largely borne by individual families, and within those families they often fall disproportionately on women.

This creates a structural asymmetry: the benefits of reproduction are socialized, while the costs of reproduction are privatized.
`),
      {
        type: "heading",
        text: "Reproductive Freedom",
      },
      ...paragraphs(`
When discussing reproductive issues, people often refer to reproductive freedom. However, reproductive freedom means more than simply having access to contraception and abortion. It also means having full autonomy over one’s reproductive capacity and the ability to make decisions about reproduction without coercion.

Historically, women have often faced two opposing forms of oppression.

The first is forced reproduction. This includes abortion bans, restrictions on contraception, the association of women’s social value with motherhood, expectations that women must marry and have children, and the treatment of childlessness as abnormal. Under such conditions, women are deprived of the right to refuse reproduction. Movements for contraception and abortion rights therefore sought to secure women’s bodily autonomy and control over their own reproductive decisions.

The second is forced non-reproduction, a form of oppression that is often overlooked. Historically, the United States implemented forced sterilization programs targeting Black women, people with disabilities, Indigenous women, and other marginalized groups, while also restricting the reproductive rights of poor women. The underlying logic of these policies was that certain people’s children “should not be born.”

For this reason, feminist scholars and activists later developed the concept of Reproductive Justice. Reproductive justice encompasses not only the right not to have children but also the right to have children. It concerns not only legal freedom but also the material conditions that make genuine choice possible.

If a person has the legal right to have children but lacks the means to support and raise them, or if a person has the legal right not to have children but lacks access to contraception and abortion services, then those rights remain merely formal rights rather than substantive freedoms.

A society that depends on reproductive and caregiving labor to sustain itself, while refusing to recognize its value or share its costs, will ultimately face more than a declining birth rate. It will face a crisis in the entire system of social reproduction.

Under such conditions, the growing number of women who choose to delay childbirth, have fewer children, or remain childfree can be understood as a response to longstanding inequalities in the distribution of labor and responsibility. If reproductive rights remain incomplete and reproductive labor continues to go unrecognized, it is unfair to demand that women assume even greater responsibility for childbearing and domestic work.

A society that continually relies on women’s reproductive labor to sustain its social and economic order, while refusing to acknowledge its value and bear its costs, will ultimately confront not only declining fertility rates but also a crisis in the very mechanisms through which society reproduces itself.
`),
    ],
  },

  {
    id: "self-objectification-beauty-myth",
    title:
      "Women Are Disciplined into Self-Objectification: Constantly Monitoring, Correcting, and Evaluating Their Own Bodies",
    category: "Writing",
    author: "Feminist Archive",
    date: "June 2026",
    readTime: "4 min read",
    image: "/images/Selfobjectification.jpg",
    excerpt:
      "Social control over women has not disappeared as women have gained greater freedom. Instead, it has shifted from external institutional constraints to internalized bodily discipline.",
    tags: ["beauty myth", "self-objectification", "discipline", "body", "feminism"],
    contentBlocks: [
      {
        type: "lead",
        text:
          "Social control over women has not disappeared as women have gained greater freedom. Instead, it has shifted from external institutional constraints to internalized forms of control through beauty standards and bodily management.",
      },
      {
        type: "image",
        src: "/images/Selfobjectification.jpg",
        caption: "Cover image from Auguste Toulmouche’s Vanity, 1889.",
      },
      ...paragraphs(`
As women have gained increasing freedom in education, employment, and political participation, society has not ceased to control them. Rather, the mechanisms of control have been relocated to the realm of physical appearance. This phenomenon is often described as the Beauty Myth. The term "myth" refers to the way society presents a particular set of beauty standards as natural, universal, timeless, and objective, when in fact these standards are historically contingent, commercially produced, and politically shaped.

Society continually sends women the message that their value depends upon their appearance. At the same time, the standards they are expected to meet remain perpetually unattainable. Women must be young, thin, wrinkle-free, sexually attractive, and constantly desirable. Yet whenever one standard is achieved, a new one emerges. The Beauty Myth therefore does not exist to make women beautiful. Rather, it functions to ensure that women never feel beautiful enough.

In the past, social control over women was exercised primarily through legal restrictions, limitations on education, and economic dependence. As these forms of control gradually weakened, new mechanisms emerged. Women increasingly came to invest significant amounts of time, energy, and money in managing their appearance. Consequently, dieting, cosmetic procedures, plastic surgery, and anti-aging practices became new sources of social pressure.

In the workplace, many women are expected not only to demonstrate professional competence but also to maintain an appropriate and attractive appearance. Men and women are often evaluated according to different standards. In the fields of media and advertising, idealized images of women are constantly produced and circulated. These representations are typically extraordinarily young, exceptionally thin, and seemingly flawless, standards that are nearly impossible for real people to achieve. Similarly, anxieties surrounding food and the body are not natural phenomena. Diet culture, eating disorders, and body-image insecurity are closely connected to socially constructed ideals of beauty.

According to Michel Foucault, power in modern society no longer operates primarily through violence or legal coercion. Instead, it functions through discipline. Many women gradually learn to view themselves through the eyes of others. Rather than asking, “What do I want?”, they begin by asking, “Do I appear attractive enough?” This phenomenon has later been described by many scholars as self-objectification. Women are not only subjected to the gaze of others; they also begin to see themselves from the perspective of the observer. In this condition, women are not merely watched by others. They become active participants in their own surveillance, continuously monitoring, judging, and evaluating themselves.
`),
    ],
  },

  {
    id: "pansexualism-freudian-psychoanalysis",
    title:
      "“Pansexualism”: The Vulgarized Interpretation of Freudian Psychoanalysis as the Reduction of All Mental Activity to Sexual Desire",
    category: "Writing",
    author: "Feminist Archive",
    date: "16 June 2026",
    readTime: "7 min read",
    image: "/images/泛性主义.png",
    excerpt:
      "So-called pansexualism appears to celebrate psychoanalysis, yet it actually misunderstands it by transforming psychoanalysis back into psychological realism and mystical authority worship.",
    tags: ["psychoanalysis", "Freud", "pansexualism", "unconscious", "discourse"],
    contentBlocks: [
      ...paragraphs(`
So-called pansexualism is the view that all human mental activities, psychological impulses, structures of desire, and even art, religion, and personality can ultimately be reduced to sexual repression, the Oedipus complex, maternal desire, patricidal impulses, incestuous fantasies, the oral stage, the anal stage, and similar sexualized mechanisms. While this perspective appears to celebrate psychoanalysis, it actually fundamentally misunderstands it.

Pansexualism can be understood as a form of popular psychological fetishism. It treats psychoanalysis as a universal psychological tool capable of explaining everything. It assumes that once a person’s behavior has been interpreted in terms of “sexual repression,” “frustrated desire,” or an “Oedipal structure,” one has already uncovered the deepest truth about that person. Yet such explanations are extremely crude. They never reach the core of psychoanalysis itself. Instead, they seize upon the aspects of Freud’s early theory that are most easily consumed by the public and expand them into a universal explanatory framework.

Many people who claim to study psychoanalysis ultimately do not move toward rational analysis. Instead, they drift toward mysticism, spiritualization, or various forms of esoteric interpretation. This tendency can be observed in certain strands of Jungian psychology and in some niche circles devoted to discussing Lacan. In these contexts, psychoanalysis is transformed into a form of modern occultism. It appears anti-traditional and profound on the surface, but in reality it continues to depend upon authority. The only difference is that the source of authority shifts from science or religion to academic communities, knowledge networks, or psychoanalytic masters. Whoever occupies the position of the master acquires the authority to interpret human beings.

Pansexualism attempts to reconcile nature and humanity through psychological phenomena. On the one hand, human beings possess desires, impulses, and instincts, which seem to belong to the domain of natural law. On the other hand, they possess reason, reflection, and self-consciousness, which appear to belong to the realm of spirit and subjectivity. Pansexualism uses “sex” or “eros” as the bridge between these two domains, explaining everything as a consequence of the economy of desire. Repressed sexuality supposedly becomes symptoms, while unrestricted sexuality supposedly produces chaos. Consequently, normality is defined as the proper management of desire under the reality principle. This interpretation appears close to Freud’s classical distinction between the Pleasure Principle and the Reality Principle.

This is the characteristic structure of pansexualism: all problems become problems of libidinal economy, and all distinctions between normality and pathology depend upon whether sexuality has been properly organized. Yet this reconciliation remains overly simplistic, because genuine psychoanalysis does not regard reason as order and desire as disorder. On the contrary, reason, reflection, and language themselves are saturated with ruptures, disturbances, and symptoms.
`),
      {
        type: "heading",
        text: "Psychoanalysis Is Fundamentally Concerned with Discourse, Not Sex",
      },
      ...paragraphs(`
What psychoanalysis is truly concerned with is not sex, or at least not sex as its central concern, but discourse.

Freud certainly employed concepts such as sexual repression, the Oedipus complex, and libido. However, to treat these concepts as the entirety of psychoanalysis is to grasp only its surface. What truly matters is psychoanalysis’s revelation of how the subject is constituted through language and symbolic systems.

The unconscious is not an underground storage room in which desires and memories are hidden. Rather, it is a mechanism of symbolic operations. The unconscious is neither a “latent consciousness” nor some mysterious ontological depth lurking in darkness, nor is it reducible to questions such as whether one harbors incestuous desires. It is the very mode through which language operates within the subject.
`),
      {
        type: "heading",
        text: "The Unconscious, Consciousness, and the Preconscious",
      },
      ...paragraphs(`
Many people imagine the unconscious as a basement in which desires, traumas, and memories are stored. This understanding is fundamentally mistaken.

The unconscious is better understood as a process or mechanism of movement, analogous to a linguistic system, a symbolic network, or an automatically functioning program. It is constantly in operation. Consciousness, by contrast, is merely an “error message” produced within this process of operation.

In other words, the unconscious is not a substance but a movement. Likewise, consciousness is not a stable master governing the psyche; it is an effect generated by the functioning of symbolic systems. When people speak, meaning is often not fully controlled by a transparent “I.” Rather, language itself flows and symbolic structures themselves operate. We imagine that we know exactly what we mean, yet meaning is frequently organized only afterward. The subject merely hears what has already been said and subsequently supplies it with coherence and significance.

The preconscious should not be understood as a filter that screens content before expression. It functions more like a retrospective mechanism of review. It does not prevent certain things from being said in advance. Rather, after discourse has unfolded, it returns to inspect what appears awkward, shameful, problematic, or in need of reformulation. Thus consciousness, the preconscious, and the unconscious should not be regarded as fixed psychological organs. They are distinct mechanisms operating within the movement of discourse itself.

Psychoanalysis should not be mystified. It ought to be understood as a lucid practice, a form of symbolic work carried out through dialogue.

The relationship between analyst and analysand is not one of equal conversation. It is an asymmetrical discursive relation. The task of psychoanalysis is not to tell people that all their problems originate in sexual repression. Rather, it seeks, through discourse, to enable the subject to recognize the ruptures, repetitions, symptoms, and structures of desire embedded within their own speech.

The analyst must not transform themselves into a revered Big Other for the analysand. Nor should they exploit transference in order to make the analysand fall in love with them, become dependent upon them, or treat them as a mysterious authority. The genuine ethics of psychoanalysis requires the analyst to acknowledge that they possess no ultimate answer and cannot present themselves as a master in possession of truth.

Otherwise, psychoanalysis degenerates into a cult-like structure of authority, becoming an expensive and mystified industry of gurus who foster psychological dependence among their followers.

Pansexualism ultimately transforms psychoanalysis back into a form of psychological realism and mystical authority worship. In doing so, it betrays the most critical and subversive dimensions of psychoanalysis itself.
`),
    ],
  },
];
