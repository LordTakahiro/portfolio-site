// Import card images
import eyeOfNythgoth from '../assets/Eye of Nyth\'goth.png';
import returnFromGrave from '../assets/Return from the Grave.png';
import sanguineSanctum from '../assets/Sanguine Sanctum.png';
import scarSwornKnight from '../assets/Scar-Sworn Knight.png';
import velnecros from '../assets/Vel\'necros, Archlich of the Withering Veil.png';

// Import Unity test images
import mainTest from '../assets/main test.png';
import testImage0 from '../assets/test image 0.png';
import testImage1 from '../assets/test image 1.png';
import testImage2 from '../assets/test image 2.png';
import testImage3 from '../assets/test image 3.png';
import testImage4 from '../assets/test image 4.png';
import testImage5 from '../assets/test image 5.png';

export const projectContent = {
  "champions-of-rymora": {
    overview: "Champions of Rymora is a fully original strategic trading card game featuring zone-based combat, hidden information, reactive timing windows, and faction-driven deckbuilding. The project includes a complete rules engine, 300+ card prototypes, faction identities, and a full gameplay loop designed for competitive and casual play.",

    carouselImages: [
      { src: eyeOfNythgoth, alt: "Eye of Nyth'goth Card", caption: "Eye of Nyth'goth" },
      { src: returnFromGrave, alt: "Return from the Grave Card", caption: "Return from the Grave" },
      { src: sanguineSanctum, alt: "Sanguine Sanctum Card", caption: "Sanguine Sanctum" },
      { src: scarSwornKnight, alt: "Scar-Sworn Knight Card", caption: "Scar-Sworn Knight" },
      { src: velnecros, alt: "Vel'necros, Archlich of the Withering Veil Card", caption: "Vel'necros, Archlich of the Withering Veil" }
    ],

    sections: [
      {
        title: "Core Design Pillars",
        content: [
          "**Meaningful Positioning:** Movement between Standby, Defense, and Battleground zones creates tactical depth.",
          "**Hidden Information:** Assets can be Hidden/Unhidden, enabling bluffing, traps, and timing mindgames.",
          "**Reactive Play:** A Chain system allows players to respond during any phase, creating dynamic interactions.",
          "**Low RNG, High Strategy:** Separate Energy deck reduces resource variance while preserving decision-making.",
          "**Faction Identity:** Each color represents a distinct mechanical philosophy and synergy loop."
        ]
      },
      {
        title: "What Makes It Unique",
        items: [
          {
            subtitle: "Zone-Based Combat System",
            text: "Units move between zones, gaining or losing abilities depending on position."
          },
          {
            subtitle: "Hidden/Unhidden Mechanic",
            text: "Assets can be set facedown, then revealed at key moments for powerful effects."
          },
          {
            subtitle: "Energy Deck System",
            text: "A dedicated 20-card Energy deck ensures consistent resource flow and strategic energy management."
          },
          {
            subtitle: "Chain Timing Engine",
            text: "A last-in, first-out reactive stack similar to TCGs like MTG/Yu-Gi-Oh, but tuned for faster, more readable play."
          },
          {
            subtitle: "Faction Combinations",
            text: "Six primary colors + White (neutral) allow 63 possible faction identities."
          }
        ]
      },
      {
        title: "My Contributions",
        items: [
          "Designed the entire rules engine, including turn structure, zone system, combat rules, chain/timing system, keyword framework, targeting rules, and state-based actions",
          "Created 300+ prototype cards across all factions",
          "Built faction identities and synergy loops",
          "Designed keywords (Ripple, Venomous, Hidden, Ambush, etc.)",
          "Developed playtest philosophy and balancing approach",
          "Wrote comprehensive ruleset documentation",
          "Designed card templates and early visual identity",
          "Built lore foundations for factions and champions"
        ]
      },
      {
        title: "Sample Mechanics",
        items: [
          {
            subtitle: "Inevitable March",
            text: "Units that automatically advance every turn, eventually crossing onto the opponent's field and pushing through their zones to create relentless, escalating pressure."
          },
          {
            subtitle: "Madness",
            text: "Forces opponents to choose from multiple negative effects each turn, applying psychological pressure and resource strain."
          },
          {
            subtitle: "Ripple",
            text: "Movement-based chain reactions that force repositioning."
          },
          {
            subtitle: "Hidden",
            text: "Facedown assets that can be revealed later for surprise effects."
          },
          {
            subtitle: "Venomous",
            text: "Damage that applies lingering counters that trigger over time."
          },
          {
            subtitle: "Fragment",
            text: "Structures and units that break into smaller tokens on destruction."
          },
          {
            subtitle: "Ambush",
            text: "Allows units to be played during any phase."
          }
        ]
      },
      {
        title: "Design Goals",
        content: [
          "Encourage tactical decision-making every turn",
          "Reward planning, positioning, and timing",
          "Minimize randomness without removing surprise",
          "Support competitive depth and casual accessibility",
          "Build a scalable system for expansions and faction growth"
        ]
      },
      {
        title: "Development Status",
        items: [
          "**Ruleset:** 90% complete",
          "**Card Pool:** 40 cards per faction in progress",
          "**Playtesting:** Physical prototype printing next",
          "**Art:** AI placeholder art (to be replaced by commissioned artists)",
          "**Publishing Plan:** Kickstarter to fund art + first print run"
        ]
      },
      {
        title: "What I Learned",
        content: [
          "How to design a full TCG rules engine from scratch",
          "How to balance complexity vs. accessibility",
          "How to build faction identities that feel distinct but fair",
          "How to write clear, unambiguous rules text",
          "How to structure a game for long-term scalability",
          "How to collaborate on a multi-year design project"
        ]
      },
      {
        title: "Request Full Rules",
        content: [
          "Full ruleset available upon request for hiring managers or collaborators."
        ]
      }
    ]
  },

  "unity-battle-system": {
    overview: "A fully functional, pixel-art style 2D turn-based battle system built in Unity and designed for modular integration into any RPG project. Originally developed as part of a larger game with quests, inventory, shops, and scene management, the system was later extracted and refactored into a standalone framework for potential commercial release.",

    links: [
      { title: "Watch Video Demo", url: "https://youtu.be/S38Y-rttv64?si=wyMtzLOMOjJPTTVf", type: "youtube" }
    ],

    carouselImages: [
      { src: mainTest, alt: "Unity Battle System Main Screen", caption: "Main Battle Screen" },
      { src: testImage0, alt: "Combat UI", caption: "Combat Interface" },
      { src: testImage1, alt: "Magic Menu", caption: "Magic System" },
      { src: testImage2, alt: "Item Usage", caption: "Item Usage" },
      { src: testImage3, alt: "Battle Rewards", caption: "Victory Screen" },
      { src: testImage4, alt: "Game Over Screen", caption: "Game Over State" },
      { src: testImage5, alt: "Battle Scene", caption: "Battle Environment" }
    ],

    sections: [
      {
        title: "Core Features",
        items: [
          {
            subtitle: "Turn-Based Combat Loop",
            text: "Player and enemy turns alternate using a clean state machine."
          },
          {
            subtitle: "Battle Menu System",
            text: "Includes Attack, Magic, Items, and Flee options with dynamic targeting and input flow."
          },
          {
            subtitle: "Elemental Magic System",
            text: "Supports multiple spells (Water Geyser, Flame Phoenix, Black Hole, etc.) with damage types and effects."
          },
          {
            subtitle: "Item Usage System",
            text: "Fully functional inventory integration with healing items and quantity tracking."
          },
          {
            subtitle: "Enemy AI",
            text: "Simple logic for enemy targeting and ability usage."
          },
          {
            subtitle: "Victory / Defeat States",
            text: "Includes Game Over screen with roguelite-style loss: drop items and return to town."
          },
          {
            subtitle: "Battle Rewards System",
            text: "Displays experience gain, item drops, and gold earned after combat."
          },
          {
            subtitle: "Debug Tools",
            text: "\"Set HP to 1\" buttons for testing edge cases and defeat conditions."
          }
        ]
      },
      {
        title: "Audio Integration",
        content: [
          "Battle Music",
          "Victory and Defeat Themes",
          "Main Menu Music",
          "SFX for attacks, spells, and item usage"
        ]
      },
      {
        title: "Modular Architecture",
        content: [
          "Designed as a plug-and-play combat module",
          "Can be dropped into any Unity project with minimal setup",
          "Decoupled from quest, inventory, and shop systems",
          "Uses clean scene transitions and manager scripts for easy integration"
        ]
      },
      {
        title: "Original Game Context",
        content: [
          "Originally part of a full RPG prototype featuring:",
          "- Quest system",
          "- Inventory and item shop (buy/sell)",
          "- Random battle encounters",
          "- Scene switching and overworld traversal",
          "- Dialogue and event triggers",
          "",
          "Battle system was extracted to allow reuse and potential sale on the Unity Asset Store."
        ]
      },
      {
        title: "Technical Highlights",
        content: [
          "State-driven turn manager",
          "Dynamic UI updates for health, mana, and targeting",
          "ScriptableObject-based spell and item definitions",
          "Scene-based transitions with persistent data",
          "Debug hooks for testing edge cases and failure states"
        ]
      },
      {
        title: "Challenges & Solutions",
        items: [
          {
            subtitle: "Asset Licensing",
            text: "Original art sourced from multiple locations; currently reviewing for commercial use."
          },
          {
            subtitle: "Modularity",
            text: "Refactored tightly coupled systems into standalone components with clean interfaces."
          },
          {
            subtitle: "Balance Testing",
            text: "Implemented debug tools to simulate low-health scenarios and edge-case interactions."
          }
        ]
      },
      {
        title: "What I Learned",
        content: [
          "How to build a reusable combat system from scratch",
          "How to refactor monolithic systems into modular architecture",
          "How to integrate UI, audio, and gameplay logic cleanly",
          "How to prepare a Unity package for commercial release",
          "How to design for both player experience and developer usability"
        ]
      }
    ]
  },

  "fal-shari": {
    overview: "This lore bible details the origins, evolution, and ideology of the Fal'shari, a siphon-based fel research order founded by Seraphine Dawnseeker and later expanded through her collaboration with Doctor Aldrich Sinclaire. The project integrates directly into World of Warcraft's timeline, locations, and magical cosmology, while introducing two original characters whose arcs intertwine through ambition, catastrophe, and shared obsession.",

    links: [
      { title: "Seraphine's Journal", url: "https://docs.google.com/document/d/11qhFr_j_sT-mtXf_RRfTCN-NZMHsexvKLf0ZxtPPk4k/edit?usp=drive_link", type: "document" },
      { title: "Aldrich's Research Notes", url: "https://docs.google.com/document/d/16QOBB9tSAEUihH8L97p45uhUygNCS8MtVJXQTd1Cssk/edit?usp=drive_link", type: "document" },
      { title: "Seraphine's Address to the Fal'shari", url: "https://docs.google.com/document/d/16tfl-M77CSCprxUiDfyGNhZny0dvwEnnKaAPIQvhImU/edit?usp=drive_link", type: "document" }
    ],

    sections: [
      {
        title: "The Fal'shari \"The Hungering Touch\"",
        content: [
          "The Fal'shari are a fel-driven research collective operating out of repurposed mana-forges in Netherstorm. Their doctrine is built on:",
          "",
          "**Siphonomancy** — the extraction, refinement, and transfer of life essence",
          "- Fel-mediated transformation",
          "- Synthetic vessel creation",
          "- Resurrection experiments",
          "- Trait transfer and enhancement",
          "- Essence harvesting from living, dead, and demonic sources",
          "",
          "They are not a cult. They are not a military. They are a scientific order with no moral constraints."
        ]
      },
      {
        title: "Manaforge Network",
        items: [
          {
            subtitle: "The Cradle (Manaforge Ara)",
            text: "Central hub. Doctrine refinement. Essence harvesting. Initiate strengthening."
          },
          {
            subtitle: "The Womb (Manaforge B'naar)",
            text: "Bioarcane forge. Synthetic organs, grafts, and full artificial bodies."
          },
          {
            subtitle: "The Eye (Manaforge Coruu)",
            text: "Seers monitoring life-energy flows across Outland. Early Nether-siphon attempts."
          },
          {
            subtitle: "The Husk (Manaforge Duro)",
            text: "Initiate trials. Psychological and physical transformation. \"Sacrifice is elevation.\""
          },
          {
            subtitle: "The Maw (Manaforge Ultris)",
            text: "Extreme experimentation. Fel-void-life blending. Attempts at sentient siphons."
          }
        ]
      },
      {
        title: "Seraphine Dawnseeker — Founder of Siphonomancy",
        content: [
          "**Origin:**",
          "A blood elf magister who survived the fall of Silvermoon, followed Kael'thas to Outland, and became fascinated with fel not as destruction, but as a tool for life-force manipulation.",
          "",
          "**Her transformation includes:**",
          "- Ritual exposure to fel",
          "- Loss of physical sight in a catastrophic experiment",
          "- Gaining direct perception of life energies",
          "- Developing the first siphoning conduits",
          "- Healing through sacrifice",
          "- Early trait-transfer experiments",
          "- Creation of the first resurrection matrix",
          "",
          "**Philosophy:**",
          "Seraphine believes life is a finite resource, healing always has a cost, creation requires destruction, essence can be redistributed like currency, fel is the perfect mediator for life-force transfer, and death is a barrier to be bypassed, not respected."
        ]
      },
      {
        title: "Aldrich Sinclaire — Co-Architect of the Fal'shari",
        content: [
          "**Origin:**",
          "A human plague researcher from Stormwind whose work with arcane-grain hybrids, Corrupted Blood, and fel-infused pathogens made him a pioneer in biological essence pathways.",
          "",
          "**His descent includes:**",
          "- Secret human trials",
          "- Hybrid pathogen creation",
          "- Fel-plague development",
          "- Selective infection targeting",
          "- Escape from Stormwind",
          "- Forsaken collaboration",
          "- Discovery of fel as a transformative catalyst",
          "- Recruitment by Tavorian",
          "- Joining Seraphine in the Ghostlands",
          "",
          "**Contribution to Siphonomancy:**",
          "Aldrich provides the precision Seraphine lacked. His pathogens create guided channels inside hosts, selective trait pathways, controlled mutation patterns, essence \"plumbing\" for transfers, and biological interfaces for synthetic vessels."
        ]
      },
      {
        title: "Shared Themes",
        content: [
          "Transformation through catastrophe",
          "Obsession disguised as enlightenment",
          "The pursuit of knowledge without restraint",
          "The belief that the world is too limited, too fragile, too afraid",
          "The conviction that they can build something better"
        ]
      },
      {
        title: "Why This Project Matters",
        content: [
          "This lore bible demonstrates:",
          "- Deep understanding of Warcraft's cosmology",
          "- Ability to integrate original characters into canon timelines",
          "- Creation of a faction with coherent doctrine, structure, and purpose",
          "- Development of a unique magic system grounded in existing lore",
          "- Strong character arcs with emotional and thematic weight",
          "- Worldbuilding that feels authentically Blizzard in tone"
        ]
      }
    ]
  },

  "fangs-oneshot": {
    overview: "Fangs of the Frost Wyrm is a complete 3–5 hour D&D 5e one-shot adventure designed for 4th-level characters. It focuses on wilderness survival, environmental pressure, and a climactic confrontation with a juvenile white dragon. The adventure includes a full narrative arc, tactical encounters, environmental hazards, and a structured lair battle.",

    links: [
      { title: "Download Main Adventure", url: "https://drive.google.com/uc?export=download&id=1ozGTcSxEbrksd9puRn-12caCFMx2JmwP", type: "download" },
      { title: "Download Companion Guide", url: "https://drive.google.com/uc?export=download&id=1rSnRhl79ZS4XV2BwNrJsrvEc28QUzJss", type: "download" },
      { title: "Download Player Resources", url: "https://drive.google.com/uc?export=download&id=1M63_JDrhgYsCApkl6j-Vqyw5pdx4tudP", type: "download" }
    ],

    sections: [
      {
        title: "Design Goals",
        content: [
          "Deliver a tightly paced, easy-to-run one-shot for DMs",
          "Emphasize environmental danger (cold, blizzard, terrain)",
          "Create a memorable dragon hunt with escalating tension",
          "Provide optional content for replayability or extended sessions",
          "Support DMs with clear structure, maps, and prep-friendly layout"
        ]
      },
      {
        title: "What's Included",
        items: [
          {
            subtitle: "Main Adventure",
            text: "Frosthold village setup, wilderness journey (forest → river → foothills → mountain), blizzard timeline system, dragon tracking mechanics, Shiverbite's lair (3 chambers), and final boss encounter with tactical terrain."
          },
          {
            subtitle: "Companion Guide",
            text: "Optional encounters for each region, expanded NPCs and village events, environmental complications, additional lair approaches, random tables for replay value, and difficulty tuning tools."
          },
          {
            subtitle: "Player Resources & Bestiary",
            text: "Four pregenerated 4th-level Guild hunters, complete stat blocks for all creatures used, dragon-hunting equipment, and harvesting rules and rewards."
          }
        ]
      },
      {
        title: "Key Systems",
        items: [
          {
            subtitle: "Blizzard Timer",
            text: "Dynamic time pressure affecting travel and survival."
          },
          {
            subtitle: "Environmental Hazards",
            text: "Cold saves, exhaustion, thin ice, avalanches."
          },
          {
            subtitle: "Tracking Mechanics",
            text: "Survival checks tied to terrain and clues."
          },
          {
            subtitle: "Lair Design",
            text: "Multi-chamber structure with hazards and tactical options."
          },
          {
            subtitle: "Rival Hunters",
            text: "Optional complication adding urgency or conflict."
          }
        ]
      },
      {
        title: "My Contributions",
        content: [
          "Wrote the full adventure narrative and encounter flow",
          "Designed environmental mechanics and blizzard timeline",
          "Created Shiverbite's stat block, tactics, and lair actions",
          "Built optional content for extended play",
          "Authored pregen characters and bestiary entries",
          "Structured the module for DM usability and clarity"
        ]
      }
    ]
  },

  "fangs-cyoa": {
    overview: "This is a solo \"Choose Your Own Adventure\" adaptation of the Fangs of the Frost Wyrm one-shot. It transforms the original group-based module into a fully branching narrative experience with player-driven choices, state tracking, and multiple endings. The reader takes the role of a Hunter's Guild operative navigating the final act of the story.",

    sections: [
      {
        title: "Design Goals",
        content: [
          "Adapt a traditional 5e adventure into a solo-play narrative",
          "Preserve tactical decision-making without a DM",
          "Build meaningful branching paths with long-term consequences",
          "Create emotional depth through character choices and dragon interaction",
          "Maintain replayability through multiple endings and state-based variations"
        ]
      },
      {
        title: "Core Systems",
        items: [
          {
            subtitle: "Branching Narrative Structure",
            text: "Multiple approach paths to the dragon's lair, variable states for Keric (alive, injured, delirious, dead), dragon alertness and emotional state, blizzard timing affecting available choices, and combat, diplomacy, stealth, and escape routes."
          },
          {
            subtitle: "Dragon Diplomacy System",
            text: "Persuasion-based negotiation tree, emotional state tracking, rapport bonuses from earlier choices, and multiple peaceful resolutions."
          },
          {
            subtitle: "Reputation Tracks",
            text: "**Warrior** — direct, forceful, combat-leaning choices. **Diplomat** — empathy, negotiation, restraint. **Hunter** — tactical, survival-focused decisions. Reputation influences available dialogue, outcomes, and endings."
          },
          {
            subtitle: "Choice-Driven Consequences",
            text: "Branches that meaningfully alter the final confrontation, fail-forward design to avoid dead ends, and multiple endings: victory, alliance, escape, tragedy, blizzard entrapment, etc."
          }
        ]
      },
      {
        title: "My Contributions",
        content: [
          "Designed the branching narrative architecture",
          "Converted linear adventure beats into modular choice nodes",
          "Built the dragon diplomacy system and emotional-state logic",
          "Created reputation-based gating for narrative paths",
          "Wrote Act I and II passages and choice structures (Act III in development)",
          "Managed scope and complexity through reusable narrative states"
        ]
      },
      {
        title: "Challenges & Solutions",
        items: [
          {
            subtitle: "Scope Creep",
            text: "Solved by converting scenes into reusable state nodes."
          },
          {
            subtitle: "Branch Explosion",
            text: "Controlled through reputation gates and shared outcomes."
          },
          {
            subtitle: "Continuity",
            text: "Built a tracking system for equipment, injuries, and time."
          },
          {
            subtitle: "Tone Consistency",
            text: "Maintained the Hunter's Guild voice across branches."
          }
        ]
      }
    ]
  },

  "crestfall": {
    overview: "Crestfall is a character-driven supernatural horror novel set in 1996, following five college students who travel into rural Pennsylvania to search for their two missing friends. What begins as a simple road trip becomes a descent into an isolated region where the natural world behaves incorrectly, the fog itself seems sentient, and the forest hides something ancient, predatory, and aware.",

    sections: [
      {
        title: "Premise",
        content: [
          "Two college students, Josh and Ashley, vanish during a weekend trip to a remote lake. After two weeks with no contact, their friends decide to retrace their route themselves. What they find is a stretch of forested highway where:",
          "",
          "- The trees do not move in the wind",
          "- The fog induces unnatural sleep",
          "- The road seems to isolate them from the outside world",
          "- Something human-shaped appears in the mist",
          "",
          "Their search becomes a fight for survival as the group realizes the disappearance wasn't an accident, and the region itself may be predatory."
        ]
      },
      {
        title: "Genre & Tone",
        content: [
          "- Supernatural horror",
          "- Road-trip mystery",
          "- \"Lost in the woods\" dread",
          "- 90s grounded realism",
          "- Slow escalation into the uncanny",
          "- Emphasis on atmosphere, tension, and character psychology",
          "",
          "Tone influences include: The Ritual, Blair Witch, It Follows, and The Mist, but with a distinctly grounded, character-focused voice."
        ]
      },
      {
        title: "Main Characters",
        items: [
          {
            subtitle: "Marcus Chen",
            text: "Analytical, introverted, tech-savvy. Josh's roommate and the one who discovers the MapQuest trail. The emotional anchor of the group. His determination to find Josh drives the plot forward."
          },
          {
            subtitle: "Sarah Rodriguez",
            text: "Med student, calm under pressure. Ashley's closest friend. Rational thinker who tries to explain the supernatural events scientifically. Her medical knowledge becomes crucial after the crash."
          },
          {
            subtitle: "Tommy Brennan",
            text: "Mechanically skilled, physically capable. The driver of the truck. Grew up in rural Pennsylvania and knows the region. First to see the impossible figure in the road."
          },
          {
            subtitle: "Rebecca Walsh",
            text: "Sensitive, intuitive, artistic. Has dreams and impressions that hint at the supernatural. Her instincts often detect danger before the others. Suffers the worst injuries in the crash."
          },
          {
            subtitle: "David Kim",
            text: "Skeptic, sarcastic, conflict-prone. The voice of denial and rationalization. His tension with Rebecca adds interpersonal stakes."
          },
          {
            subtitle: "Josh & Ashley (Missing)",
            text: "Their disappearance is the catalyst. Ashley's photography and Josh's browser history provide the only clues. Their fate becomes the central mystery."
          }
        ]
      },
      {
        title: "Setting",
        content: [
          "**Northwestern Pennsylvania, 1996**",
          "A region of dense, ancient forests, abandoned towns, forgotten highways, mist-choked valleys, and a sense of isolation amplified by pre-smartphone technology.",
          "",
          "**Route 666**",
          "A real, remote forest road that becomes the story's central artery. In Crestfall, it is unnaturally quiet, devoid of wildlife, surrounded by motionless trees, blanketed in fog that induces sleep, and home to a figure that appears without casting a shadow.",
          "",
          "The setting itself becomes an antagonist."
        ]
      },
      {
        title: "Key Narrative Elements",
        items: [
          {
            subtitle: "The Disappearance",
            text: "Josh and Ashley vanish after following a MapQuest route to a lake. Their last known location is a gas station in Titusville."
          },
          {
            subtitle: "The Road Trip",
            text: "The remaining friends follow the same path, retracing every turn."
          },
          {
            subtitle: "The Fog",
            text: "A supernatural phenomenon that induces sleep, muffles sound, obscures the road, and seems to \"reach\" for the truck."
          },
          {
            subtitle: "The Figure in the Road",
            text: "An elderly man with reflective eyes who stands motionless, speaks without sound, casts no shadow, and disappears when passed."
          },
          {
            subtitle: "The Crash",
            text: "Two tires explode simultaneously, sending the truck off the road. Injuries, panic, and isolation escalate the stakes."
          },
          {
            subtitle: "The Forest",
            text: "Alive. Watching. Wrong."
          }
        ]
      },
      {
        title: "Themes",
        content: [
          "Friendship under pressure",
          "The limits of rationality",
          "Isolation and helplessness",
          "The uncanny in the mundane",
          "The danger of curiosity",
          "The predatory nature of forgotten places"
        ]
      },
      {
        title: "My Contributions",
        content: [
          "Wrote the full narrative, characters, and worldbuilding",
          "Developed the supernatural rules and atmospheric tension",
          "Structured the pacing for escalating dread",
          "Built a grounded 90s setting without modern technology",
          "Crafted interpersonal dynamics that heighten the horror",
          "Designed the \"Crestfall region\" as a character in itself"
        ]
      }
    ]
  }
};
