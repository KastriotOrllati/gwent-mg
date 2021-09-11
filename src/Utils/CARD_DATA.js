const CARD_INFO = [
  {
    name: "Roche: Merciless",
    prov: "pp12",
    type: "unit",
    strength: "4",
    faction: "northern",
    border: "gold",
    legendary: true,
    src: "roche.mp4",
    tooltip: (
      <p>
        deploy: Damage an enemy unit by 2.
        <br />
        deathblow: Gain zeal.
        <br />
        order: spawn a Blue Stripes Commando and summon it to this row.
      </p>
    ),
  },
  {
    name: "Wild Boar of the Sea",
    prov: "pp12",
    type: "unit",
    strength: "4",
    faction: "skellige",
    border: "gold",
    legendary: true,
    src: "boar.mp4",
    tooltip: (
      <p>
        deploy melee: Damage all damaged enemy units by 1, then damage all enemy
        units by 1.
      </p>
    ),
  },
  {
    name: "Tinboy",
    prov: "pp12",
    type: "unit",
    strength: "4",
    faction: "syndicate",
    border: "gold",
    legendary: true,
    src: "tinboy.mp4",
    tooltip: (
      <p>
        deploy: Damage all enemy units on a row by 2.
        <br />
        tribute 8: Damge all enemy units by 2 instead.
      </p>
    ),
  },
  {
    name: "Syanna",
    prov: "pp12",
    type: "unit",
    strength: "3",
    faction: "neutral",
    border: "gold",
    legendary: true,
    src: "syanna.mp4",
    tooltip: (
      <p>
        order: Repeat the deploy ability of the next unit you play during this
        turn.
      </p>
    ),
  },

  {
    name: "Uma's Curse",
    prov: "pp11",
    type: "special",
    faction: "neutral",
    border: "gold",
    legendary: true,
    src: "uma.mp4",
    tooltip: <p>create and play a gold unit from any faction.</p>,
  },
  {
    name: "Collusion",
    prov: "pp11",
    type: "special",
    faction: "syndicate",
    border: "gold",
    legendary: true,
    src: "collusion.mp4",
    tooltip: (
      <p>
        If you control a unit with the gang category:
        <br />
        Blindeyes - Increase all other effects by 1.
        <br />
        Crownsplitters - Boost an allied unit with the lowest power by 4.
        <br />
        Cutups - Damage an enemy unit with the highest power by 4.
        <br />
        Firesworn - spawn 2 Firesworn Zealot in a random allied row.
        <br />
        Tidecloaks - Gain 3 coins.
      </p>
    ),
  },
  {
    name: "Olaf",
    prov: "pp11",
    type: "unit",
    strength: "8",
    faction: "skellige",
    border: "gold",
    legendary: true,
    src: "olaf.mp4",
    tooltip: <p>order: Boost Olaf by twice the amount he is damaged.</p>,
  },
  {
    name: "Damien de la Tour",
    prov: "pp11",
    type: "unit",
    strength: "5",
    faction: "nilfgaard",
    border: "gold",
    legendary: true,
    src: "damien.mp4",
    tooltip: <p>order (melee): Re-enable your Leader's ability.</p>,
  },
  {
    name: "Vincent Van Moorlehem",
    prov: "pp11",
    type: "unit",
    strength: "5",
    faction: "nilfgaard",
    border: "gold",
    legendary: true,
    src: "vincent.mp4",
    tooltip: <p>deploy: Destroy an enemy unit with status.</p>,
  },
  {
    name: "Ithlinne Aegli",
    prov: "pp11",
    type: "unit",
    strength: "5",
    faction: "scoiatael",
    border: "gold",
    legendary: true,
    src: "aegli.mp4",
    tooltip: <p>deploy: Boost a Scoia'tael unit in your hand by 4.</p>,
  },
  {
    name: "Ruhin",
    prov: "pp11",
    type: "unit",
    strength: "4",
    faction: "monsters",
    border: "gold",
    legendary: true,
    src: "ruhin.mp4",
    tooltip: (
      <p>
        deathwish: On allied turn end, summon this unit from your graveyard to a
        random allied row.
      </p>
    ),
  },
  {
    name: "Queen Adalia",
    prov: "pp11",
    type: "unit",
    strength: "3",
    faction: "northern",
    border: "gold",
    legendary: true,
    src: "adalia.mp4",
    tooltip: (
      <p>
        deploy: spawn and play a base copy of a bronze unit from your hand, then
        give it a shield.
      </p>
    ),
  },
  {
    name: "Avallac'h: Sage",
    prov: "pp11",
    type: "unit",
    strength: "1",
    faction: "neutral",
    border: "gold",
    legendary: true,
    src: "avallac.mp4",
    tooltip: <p>Play an artifact from your deck.</p>,
  },

  {
    name: "Karathi Heatwave",
    prov: "p10",
    type: "special",
    faction: "neutral",
    border: "gold",
    legendary: true,
    src: "heatwave.mp4",
    tooltip: <p>banish a unit or an artifact.</p>,
  },
];

export default CARD_INFO;
