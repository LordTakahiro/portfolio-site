import championsImg from '../assets/Champions of Rymora.png';
import battlerImg from '../assets/Battler.png';
import crestfallImg from '../assets/Crestfall.png';
import cyoaImg from '../assets/CYOA.png';
import falshariImg from '../assets/Fal\'Shari.png';
import oneShotImg from '../assets/One-Shot.png';

export const projects = [
  {
    id: 1,
    title: "Champions of Rymora",
    description: "A fully original strategic trading card game featuring zone-based combat, hidden information, reactive timing windows, and faction-driven deckbuilding. Complete rules engine, 300+ card prototypes, faction identities, and full gameplay loop designed for competitive and casual play.",
    tags: ["TCG", "Systems Design", "GDD", "Balancing", "Game Design"],
    featured: true,
    notionUrl: "https://www.notion.so/Champions-of-Rymora-Game-Design-Project-2f5d8290663f8065b120f6f870c5287a",
    image: championsImg
  },
  {
    id: 2,
    title: "Unity Turn-Based Battle System",
    description: "A fully functional, pixel-art style 2D turn-based battle system built in Unity and designed for modular integration into any RPG project. Features turn-based combat loop, elemental magic system, enemy AI, and battle rewards. Includes video demo.",
    tags: ["Unity", "C#", "Combat Systems", "Technical Design", "Modular Architecture"],
    featured: true,
    notionUrl: "https://www.notion.so/Unity-Turn-Based-Battle-System-2f5d8290663f801cb158f1edb21f82a1",
    image: battlerImg
  },
  {
    id: 3,
    title: "Fal'shari – Warcraft Lore Bible",
    description: "An extensive worldbuilding project featuring the Fal'shari, a fel-driven research collective, with deep lore for original characters Seraphine Dawnseeker and Doctor Aldrich Sinclaire. Integrates directly into World of Warcraft's timeline, locations, and magical cosmology.",
    tags: ["Narrative Design", "Worldbuilding", "Character Design", "Lore", "Writing"],
    featured: true,
    notionUrl: "https://www.notion.so/Fal-shari-Aldrich-Sinclaire-Seraphine-Dawnseeker-Warcraft-Lore-Bible-2f5d8290663f80f79281da70ede51c66",
    image: falshariImg
  },
  {
    id: 4,
    title: "Fangs of the Frost Wyrm – D&D 5e One-Shot",
    description: "A complete 3-5 hour D&D 5e one-shot adventure designed for 4th-level characters. Features wilderness survival, environmental pressure, blizzard timeline system, and a climactic dragon hunt. Includes main adventure, companion guide, and player resources.",
    tags: ["D&D 5e", "Adventure Design", "Encounter Design", "Narrative Design"],
    featured: false,
    notionUrl: "https://www.notion.so/Fangs-of-the-Frost-Wyrm-D-D-5e-One-Shot-Adventure-2f5d8290663f80618df0ee017987a4f2",
    image: oneShotImg
  },
  {
    id: 5,
    title: "Fangs of the Frost Wyrm – CYOA",
    description: "Solo 'Choose Your Own Adventure' adaptation with fully branching narrative, player-driven choices, state tracking, and multiple endings. Features dragon diplomacy system, reputation tracks (Warrior/Diplomat/Hunter), and fail-forward design.",
    tags: ["Interactive Fiction", "Branching Narrative", "CYOA", "Narrative Systems"],
    featured: false,
    notionUrl: "https://www.notion.so/Fangs-of-the-Frost-Wyrm-Solo-Branching-Path-Adventure-CYOA-2f5d8290663f8014a59ce160963ffc0a",
    image: cyoaImg
  },
  {
    id: 6,
    title: "Crestfall – Horror Novel",
    description: "Character-driven supernatural horror novel set in 1996. Five college students search for missing friends in rural Pennsylvania, encountering sentient fog, motionless forests, and an ancient predatory presence. Blends psychological dread with slow-burn tension.",
    tags: ["Horror", "Writing", "Narrative Design", "Character Development"],
    featured: false,
    notionUrl: "https://www.notion.so/Crestfall-Horror-Novel-Opening-2f5d8290663f80c093e0f893cc9fe758",
    image: crestfallImg
  }
];

export const skills = [
  "Systems Design",
  "Narrative Design",
  "Unity",
  "C++",
  "GDD/TDD Writing",
  "Worldbuilding",
  "Full-Stack Development",
  "Technical Design"
];
