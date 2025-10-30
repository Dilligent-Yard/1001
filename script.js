// Game state
const gameState = {
    heroName: '',
    dogName: '',
    martialArt: '',
    currentChapter: 'prologue'
};

// Story content
const storyContent = {
    prologue: {
        title: 'PROLOGUE: THE UNKINDNESS OF RAVENS',
        text: `The screen flickers, casting ghost-light across the stained wallpaper of your single-room apartment. The rain hasn't stopped for three days. It drums a relentless, syncopated rhythm against the windowpane, a natural metronome for your own decaying thoughts. You take a slow pull from a bottle of something cheap and amber, the burn a familiar, almost comforting failure.

On the screen, he is smiling. Aegis. The name itself is a monument to arrogance, a claim of absolute protection. His costume is impossibly white, his jawline a triumph of geometry. He is seated on a plush talk-show set, the host laughing at some modestly deflected witticism.

"We're just grateful to serve," Aegis says, his voice a baritone calibrated for public trust. "When you have the power to make a difference, the only real choice is to use it."

You almost choke on your drink. The only real choice. How simple. How clean. The philosophy of the powerful, wrapped in a soundbite and sold to the masses who desperately want to believe that strength and goodness are conjoined twins.

Your eyes drift from the screen, taking in the room. A sink holds yesterday's dishes. A single, frayed armchair faces the television. And on the threadbare rug, snoring softly, is your dog. The only creature in this godforsaken city whose trust you haven't managed to bankrupt.

You think, not for the first time, of the ancient Greeks. They understood. Their heroes were flawed, wretched things, harried by the gods and their own passions. Heracles didn't clean stables for a public relations tour; he did it because he was cursed, drowning in a blood-guilt he could never wash away. That was honest. Modern heroism is just a product, and Aegis is its gleaming, market-tested CEO.

The interview cuts to a highlight reel: Aegis deflecting energy blasts, carrying civilians from burning buildings, trading quips with villains who pose no real threat. It's a ballet, a choreographed dance where the outcome is never in doubt. They call this the Golden Age of Heroes. You call it the Gilded Age. Scratch the surface gold, and you find the same old rot beneath.

You had your own brief, inglorious moment in the sun. A name they've forgotten. A costume mothballed in a trunk. You fought, you bled, and you learned the one truth they never print on the posters: for every person you save, there's another you fail. And the world has a longer memory for failure.

The dog shifts in its sleep, legs twitching as it chases some phantom rabbit in its dreams. A simpler existence. To be loved by a dog is to understand a kind of unconditional grace that human society is incapable of producing. It is the one pure contract you have left.

Aegis is talking about the new threat now. The one the news channels have dubbed "Smile." No one knows what they look like, what they want. Only that they leave a calling card: a wide, crudely drawn smiley face at the scenes of their operations—operations that are not robberies, but intricate acts of social sabotage, psychological warfare. They aren't stealing money; they're eroding faith.

"This 'Smile' individual is a coward," Aegis declares, his face a mask of righteous certainty. "Hiding in the shadows, attacking the very fabric of our society. We will find them, and we will bring them to justice."

You mute the television. The silence is immediately filled by the rain and the low, grinding hum of the city below. A coward? Perhaps. Or perhaps Smile is the only honest one left. They aren't pretending to fix a broken system; they're just drawing a big, mocking smiley face on its corpse.

You lean back, the springs in the chair groaning in protest. This is your life now. A spectator to the grand, meaningless pageant. But even a failed hero is still, at his core, a creature of action. And as you look at your dog, at the empty bottle, at the flickering image of a man who represents everything you couldn't be, you feel the old, rusty gears of thought begin to turn. Maybe Smile has a point. Maybe the only rational response to a world this absurd is not to save it, but to laugh in its face.

But first, you need to remember who you are. Or who you were.`
    },
    chapter1_intro: {
        text: `The image of that mocking smiley face burns into your retina long after the news segment ends. Aegis's hollow proclamation—"We will bring them to justice"—still hangs in the stale air, a testament to the simplistic narratives they feed the public. Justice. A child's word for a complex, ugly world.

The weight of the evening settles on you, a physical pressure. The bottle is empty. The dog is awake, looking at you with that simple, unasked question in its eyes: What now? The monologue in your mind is a torrent, but the body must still move. It must perform its trivial, meaningless rituals.`
    },
    chapter1_choices: {
        question: 'What do you do?',
        choices: [
            {
                id: 'walk-dog',
                text: 'Take the dog for a walk in the rain.',
                outcome: `You push yourself up from the chair, your joints complaining with a chorus of pops and creaks that rival the rain. "Come on, boy," you grumble, the sound of the leash clicking is enough to send [DOG_NAME_LOWER] into a frantic, happy dance at your feet. A surge of something almost like affection cuts through the cynicism. This, at least, is an honest transaction.

Outside, the city is a watercolor painting bleeding into the gutters. Neon signs from the ramen shop and the pawnbroker below your apartment smear across the wet pavement. [DOG_NAME_UPPER] strains against the leash, sniffing at the base of a lamppost as if deciphering the most important news of the day. You, however, scan the street. You see a young couple huddled under an umbrella, laughing. You see a man in a suit, soaked and staring at his phone, his face a mask of pure despair. Two sides of the human coin, minted in the same worthless alloy.

They walk past each other, you think, isolated islands in a sea of concrete and artificial light. They believe their struggles are unique, their joys profound. They don't see the machinery. They don't see that Smile might be the only one who truly sees the joke. The rain soaks through your worn jacket, a cold reminder that nature is indifferent, and the city is malicious. The walk is a short, damp circuit, but it serves its purpose. It reminds you that you still exist, if only as a ghost on these streets.`
            },
            {
                id: 'clean-sidearm',
                text: 'Clean your sidearm, a relic from your past.',
                outcome: `You don't get up. Instead, you lean over and pull a heavy, metal lockbox from beneath your bed. The key is on your keychain, nestled between keys to doors you no longer have the right to open. Inside, resting on a bed of faded velvet, is a sleek, well-maintained SIG Sauer P226. It is a tool of ultimate pragmatism. No super-strength needed, no energy blasts. Just physics, pressure, and a profound, final statement.

You take it out, the weight a familiar, grim comfort. The disassembly is a meditation, a kata of futility. Each part—slide, barrel, spring—is wiped clean, oiled, and reassembled with a ritualistic precision Aegis could never understand. His power is a spectacle. This is a secret. This is the great equalizer the brochures for the Heroic Academy never mentioned.

They talk about subduing, about capturing, you muse, running the cloth along the cold, machined steel. They operate in a world of rules and cameras. But this... this speaks a simpler language. The language of stop. Is that what Smile understands? That some problems aren't meant to be solved, but ended? You slot the magazine back into the grip with a solid, satisfying click. The sound is a period at the end of a sentence. For a moment, you feel a sliver of control in a world designed to rob you of it.`
            },
            {
                id: 'stare-window',
                text: 'Stare out the window at the neon-lit city.',
                outcome: `You remain in your chair, but turn it slightly to face the window. The rain traces desperate, fleeting paths down the grimy glass. Beyond it, the city sprawls like a digital fungus, a canyon of steel and light. You can just make out the glittering spires of the Apex Tower, where the Heroic Guild has its headquarters. A beacon of hope, they call it. You see a lighthouse on a shore of skulls, guiding more ships to wreck themselves on the rocks.

[DOG_NAME_UPPER] whines softly and rests his head on your knee. You absently stroke his ear. Look at them all, you think, your gaze sweeping over the countless illuminated windows. Each one a cage. Each one containing a life of quiet desperation, manufactured crises, and purchased happiness. They scurry, they consume, they reproduce, and they die, believing in the hero on the screen who tells them it all means something. It's a magnificent, self-perpetuating fraud.

A siren wails in the distance, a sound as common as the rain. Someone else's disaster. Someone else's moment for a hero to shine. You don't even wonder what it is anymore. You just watch the lights blur and swim in the rain, a spectator to the beautiful, terrible lie. Smile isn't a villain; they're a critic. And you are finally starting to appreciate their review.`
            },
            {
                id: 'check-fridge',
                text: 'Check the nearly empty fridge for a forgotten beer.',
                outcome: `With a sigh that comes from the very depths of your soul, you heave yourself out of the chair and shuffle the three steps to the miniature refrigerator. The door opens with a reluctant whine, revealing a landscape of profound disappointment. A half-empty jar of pickles, a plastic container with something unidentifiable and fuzzy, a crust of bread. The light flickers.

A perfect microcosm, you think. The promised land of sustenance, revealed as a barren wasteland. A monument to failed planning and evaporated hope. Your fingers brush against a single, lone can tucked away in the back, condensation cold against your skin. You pull it out. It's a generic, store-brand beer you must have bought in a moment of ultimate fiscal despair.

You pop the tab. The hiss is a small, pathetic celebration. The first sip is flat and bitter. Appropriate, you muse, leaning against the fridge door. The universe provides a metaphor, even in its most mundane cruelties. You search for solace, for a cheap chemical respite from the unbearable weight of consciousness, and what you find is lukewarm and tasteless. Is this not the human condition in a single, aluminum shell? You take another long, resigned drink. It doesn't help. But then, you never really thought it would.`
            }
        ]
    },
    maya_text: {
        text: `The flat, bitter beer sits in your stomach, a lukewarm anchor in a sea of static and rain. Your dog, [DOG_NAME_LOWER], whines again, sensing the shift in your mood, the tightening coil of inaction. You are about to drain the can and surrender fully to the armchair's embrace when your phone vibrates on the crate that serves as your coffee table.

Not a call. A text. The only person who ever texts you is Maya. Your former handler. The one who still, against all reason and evidence, believes the embers of who you were can still produce a spark.

The message is stark, devoid of her usual cynical asides.`,
        message: `Active alarm. First People's Bank, 44th and Grant. Two supers, low-tier brutes. Police are cordoning, but heroes are 8 minutes out. Civilians trapped inside.`,
        aftermath: `The world narrows. The rain outside seems to quiet, the flicker of the television fading into a dull hum. This is it. The moment you dissect in your darkest hours. The pivot point. The universe, in its infinite, mocking irony, has slid a choice onto the barrel of your life like a single, worn round.

You can walk out that door. You can step back into the rain, not as a spectator, but as a participant. You can feel the old weight of the world press down on your shoulders, the weight you swore you'd never carry again. You can test Maya's faith. You can test your own.

Or.

You can finish your beer. You can mute your phone. You can listen to the rain and the sirens and acknowledge, finally, that some ships are meant to sink. That to intervene is to validate the broken system. That the greatest act of philosophical defiance is sometimes… nothing at all.`
    },
    bank_choice: {
        question: 'What is your choice, [HERO_NAME]?',
        choices: [
            {
                id: 'go-to-bank',
                text: 'Go to the Bank.',
                outcome: `A strange calm settles over you. The philosophical debates, the raging monologues—they vanish, replaced by a cold, procedural clarity. The time for thought is over. Now, there is only motion.

You don't speak. You move.

First, the lockbox. The key turns with a smooth, well-oiled click. You lift the SIG Sauer, but tonight calls for something more… persuasive. Beneath it lies the worn leather of a shoulder holster, and next to that, the cold, black steel of a non-lethal tactical shotgun, loaded with beanbag rounds. A argument-ender for those with superhuman durability.

You strap on the holster, the weight of the sidearm a familiar ghost against your ribs. You check the load on the shotgun, the heavy shuck-shuck sound a promise of violence. This is not the tool of a hero like Aegis. This is the tool of a pragmatist. This is the language you understand.

Then, you walk to the closet. You open it, and the smell of mothballs and memory washes over you. Hanging there, amidst your mundane jackets and worn jeans, is the suit. Your suit. Not the bright, spandex circus of the modern hero. This is tactical gear, dyed a dark, charcoal grey, scuffed and scarred from a hundred forgotten skirmishes. There is no symbol on the chest. You gave that up long ago. The absence of a symbol is your symbol now.

You shed your civilian skin like a snake shedding a past life. The reinforced fabric hugs your body, a second skin of purpose and regret. You pull the tactical vest over it, slotting extra magazines into their pouches. Finally, you take the dark, featureless helmet from the shelf. It offers no reassuring smile, no heroic jawline. It is a blank slate, a void. The face of a man who has nothing left to prove, and everything to lose.

You look at yourself in the mirror. A specter from a past life stares back. Not a hero. A consequence.

You turn to your dog. "Hold the fort, boy," you say, your voice rough.

Then, you open your window, letting the roar of the city and the sting of the rain flood in. The fire escape is slick and cold. You don't look back.`
            },
            {
                id: 'stay-here',
                text: 'Stay Here.',
                outcome: `You look at the phone. You look at the rain-streaked window. You look at your dog, whose world is so simple, so pure.

And you make your choice.

You finish the beer, the aluminum crumpling in your fist with a sound of finality. You place the empty can carefully on the crate. You stand, walk to the window, and watch the distant, flashing blues and reds of the response units. A spectacle unfolding without you. You are not a part of it. You have chosen not to be.

You mutter to yourself, a eulogy for the man you almost were. "To act is to grant the premise that the play is worth saving. That the heroes are real, the villains can be defeated, and the audience will be grateful. But the play is a farce. The heroes are actors. The villains are just the critics who got bored of their seats. And the audience… the audience is already heading for the exits."

You sit back down. The game is over. You have chosen your side. The side of the comfortable, the quiet, the mediocre. The philosophy of the armchair is the only one you have the courage to live by. You have stared into the abyss of action and found it easier to simply close your eyes.`,
                isEnding: true,
                endingTitle: 'THE END',
                endingText: 'You have chosen the certainty of your own failure over the uncertainty of a fight. You have settled. There is no deeper humiliation for a soul that once dreamed of being great.'
            }
        ]
    },
    arrival_at_bank: {
        text: `The rain is a cold, needling kiss against your helmet as you descend the fire escape, the metal groaning a familiar protest under your weight. The city sounds rise to meet you—the distant, frantic sirens, the hum of traffic, the muffled chaos of the street. You drop the last few feet into the alley behind your building, landing in a shallow puddle that splashes your dark greaves. The water, like this city, always finds a way to seep in.

A short, sprinting dash through slick backstreets brings you to 44th and Grant. The scene is a curated portrait of modern crisis. Police cruisers have formed a haphazard perimeter, their lights painting the bank's marble facade in frantic strokes of blue and red. Officers crouch behind open doors, rifles pointed at a void they are afraid to fill. The crowd, held back behind sawhorses, is a single, gawking organism, their phones held aloft like digital candles in a vigil for their own morality.

They are waiting for a hero in white. They will get a ghost in grey.

You scale a drainage pipe on the building opposite the bank, your movements fluid and silent, a testament to a body honed by a lifetime of discipline. You find a perch on a low rooftop, giving you a clear view through the bank's large, plate-glass windows.

Inside, the story is clear. Two hulking figures, easily seven feet tall, their skin exhibiting the telltale, rocky texture of low-tier brute-class metahumans. Crusher and Boulder, according to the police chatter buzzing in your discreet earpiece. They are smashing teller stations, their roars muffled by the glass. A dozen civilians are kneeling on the floor, hands on their heads. Fear is a vapor you can almost smell from here.

The police strategy is clear: containment. Wait for the heavy hitters. Wait for Aegis. It's the safe play. The by-the-book play. The play that ignores the simple truth that every second in a situation like this is a lifetime of terror for those inside.

You are not here to wait. You are here to act. But how you act has always been your choice. Your martial art wasn't just a way to fight; it was a way of thinking. And now, it dictates your entry.`
    },
    bank_approach: {
        question: 'How do you make your move?',
        choices: [
            {
                id: 'direct',
                text: 'The Direct Approach: Use the environment. Create a distraction at the front and breach from the side. Simple, aggressive.'
            },
            {
                id: 'unconventional',
                text: 'The Unconventional Entry: Don\'t go through the door. Find another way in that they would never expect.'
            },
            {
                id: 'patient',
                text: 'The Patient Takedown: Isolate one of the brutes. Take him out quickly and silently before the other knows what\'s happening.'
            },
            {
                id: 'psychological',
                text: 'The Psychological Play: Don\'t attack their bodies first. Attack their minds. Sow confusion and fear.'
            }
        ]
    },
    bank_outcomes: {
        direct: {
            intro: 'This is a game of force and misdirection. You need to pull their gaze away from your point of entry.',
            'krav-maga': 'You spot a police cruiser with its engine still running. A quick, brutal sprint, a leap into the driver\'s seat, and you slam the vehicle into a cluster of empty cruisers near the bank\'s main entrance. The shriek of grinding metal is your symphony. As the two brutes turn to the noise, roaring in confusion, you are already moving, a grey phantom slipping through a shattered side window. Your style teaches you to use any tool, any chaos, to gain the upper hand. The chaos is now your weapon.',
            'jeet-kune-do': 'You don\'t need a car. You need a moment. You grab a heavy chunk of loose brick from the roof parapet. You don\'t just throw it; you intercept the brutes\' focus. You hurl it through a high window on the far side of the bank\'s front. The sudden, unexpected shatter of glass makes both brutes flinch and turn, their bulky bodies moving as one slow unit. In the space between their perception and their reaction, you flow inside, an unstoppable force entering through the path of least resistance. Your style is about adaptability; you have adapted their alertness into your entry point.',
            'brazilian-jiu-jitsu': 'The distraction isn\'t an object, it\'s a person. You identify the more aggressive brute, Crusher, as the key. You need to unbalance the situation. Using a police loudspeaker you "acquire" from an unattended cruiser, you shout a taunt specifically at him, questioning his strength, his leadership. You enrage him, pulling his focus and, crucially, making him step away from his partner. You\'ve now "isolated the limb." You breach as their partnership is psychologically broken. Your style is about using an opponent\'s energy against them; you have used Crusher\'s ego to create an opening.',
            'muay-thai': 'You don\'t believe in subtle distractions. You create an impact. You leap from your roof, landing on the roof of a police van with a deafening CRUNCH. The entire vehicle shudders. Every eye, inside and outside the bank, snaps to you for a split second. It\'s all you need. You are a battering ram of motion, crashing directly through the bank\'s front door, a whirlwind of implied force. Your style embraces the overwhelming; you have announced your presence not with a whisper, but with a war cry of action.'
        },
        unconventional: {
            intro: 'Doors are for guests. You are an uninvited complication.',
            'krav-maga': 'The air vent on the roof. It\'s small, tight, and undignified. It is also completely unguarded. You pry the grate off without a sound and slide into the tight, dark metal shaft. It\'s a claustrophobic\'s nightmare, but it\'s a direct line to the enemy\'s flank. Your style disregards pride for efficiency. You will emerge from the darkness like a verdict.',
            'jeet-kune-do': 'You notice the bank\'s decorative ledges and architectural details. It\'s not a path; it\'s a series of points. You flow across the face of the building, finding purchase where none seems to exist, moving with a dancer\'s precision until you are hanging upside down from a second-floor lintel above the main lobby. You drop into their blind spot, silent as a shadow. Your style is formless; you have used the environment not as an obstacle, but as a multitude of pathways.',
            'brazilian-jiu-jitsu': 'The bank has a basement-level delivery entrance. It\'s locked and reinforced. Instead of forcing it, you find a weak point: the hinge pins. Using a multitool from your belt, you drive them out with precise, quiet taps. The entire door, once a formidable barrier, now swings inward at your touch, its own weight and structure turned against it. You understand that the strongest system has a pivot point. You just found it.',
            'muay-thai': 'The "unconventional entry" to you is the most direct line through any barrier. A quick assessment shows a weakened structural column on the side of the building, recently damaged by the brutes. A few focused, shin-shattering kicks from you in just the right spot cause a section of the drywall and insulation to collapse inward, creating your own door. You don\'t find a way in; you make one, with relentless, destructive force.'
        },
        patient: {
            intro: 'Divide and conquer. The oldest strategy, refined by your art.',
            'krav-maga': 'You identify Boulder as the slightly slower, more methodical one. You use a flashbang grenade, not to stun both, but to create a screen and disorient him alone. While Crusher is yelling and waving smoke away, you are already on Boulder, a silent, brutal whirlwind targeting the vulnerable points at the back of his knees and his neck. He collapses with a guttural choke before he can even call for help. Your style is about ending threats with maximum efficiency. One threat is now ended.',
            'jeet-kune-do': 'You notice the bank\'s layout has a separate manager\'s office. You create a small noise—a tap on the glass—that draws Crusher to investigate. The moment he steps through the doorway, you are there. You are water. You flow around his attack, using his momentum to slam the door shut behind him, trapping him in the small room with you. In close quarters, his brute strength is a hindrance. You have absorbed his advance and redirected it into a trap.',
            'brazilian-jiu-jitsu': 'You wait. You watch their pattern. Boulder moves to a isolated spot to pry open a vault door, putting his back to a pillar. This is your moment. You slide in, a whisper of grey. You don\'t punch or kick. You wrap yourself around his massive leg like a serpent, applying a crushing leg lock. The meta-human tendons groan. He lets out a shocked cry of pain and crashes to the ground, immobilized. You have taken the largest, strongest part of him and made it his greatest weakness.',
            'muay-thai': 'Your patience is the calm before the storm. You watch Crusher patrolling near the bank\'s entrance. You calculate the timing. As he turns to walk back, you explode from your hiding spot. Your first blow is a devastating knee to his kidney. The second, a shin kick to the back of his standing leg. He stumbles, isolated from his partner by a wave of pure, concussive pain. You haven\'t just isolated him; you have broken his rhythm and his stance, the foundation of any fighter.'
        },
        psychological: {
            intro: 'The mind is the first, and most vulnerable, battlefield.',
            'krav-maga': 'Psychology is just another weapon. You use the bank\'s own internal security system against them. Hacking into the PA from your wrist-mounted computer, you play a soundbite of Aegis\'s signature sonic-boom arrival. The brutes panic, spinning around, expecting the hero. They are looking for a cape when you come from the shadows, already taking down the first one while his brain is still processing the lie. Your style is about survival, and the most efficient way to survive is to make your enemy afraid to die.',
            'jeet-kune-do': 'You become a ghost. You move through the bank\'s blind spots, using vents and dropped ceilings. You don\'t strike yet. You whisper taunts, tap on surfaces, turn lights on and off in different rooms. You are everywhere and nowhere. The brutes begin to argue, their confidence shattering. They are no longer a team; they are two frightened individuals. You are the un-expressible truth, the void that dismantles their form.',
            'brazilian-jiu-jitsu': 'You apply pressure to the psychological joint of their partnership. You take out the bank\'s lights, plunging the main hall into darkness save for the flashing red of the alarm. Then, using a voice modulator, you imitate Boulder\'s voice over the PA, blaming Crusher for the mess. The resulting roar of betrayal is your signal to engage. You have used their own connection as the lever to break them apart.',
            'muay-thai': 'Your psychology is one of overwhelming presence. You don\'t hide. You step into the main lobby and simply stand there. You don\'t speak. You just radiate an aura of imminent, destructive violence. You clench your fists, the leather of your gloves creaking in the sudden silence. You are a statue of pure intent. The two brutes stop what they are doing, unnerved by the silent, faceless threat. Their hesitation is your first victory. You have engaged them not with a strike, but with the promise of an endless, punishing barrage.'
        }
    },
    combat_intro: {
        text: `The world shrinks to the echoing marble vault of the bank lobby. Your chosen tactic has left you facing one of the brutes—Crusher. His partner is down, but the bigger one is now fully focused on you. He charges, a freight train of rage and rock-like flesh.

"I'LL CRUSH YOU INTO PASTE!" he roars, his fist swinging in a wide, devastating arc meant to pulp a car engine.`
    },
    combat: {
        turn1: {
            intro: `The fist whistles past your head as you duck, the wind of it ruffling your tactical suit. You're inside his guard now, the sweet spot where his strength becomes a liability.`,
            choices: [
                {
                    id: 'target-leg',
                    text: 'Target the Leg: Compromise his foundation. A brutal, low kick to his knee joint. Let him learn the price of being top-heavy.',
                    outcome: 'You pivot, channeling your body\'s torque into a savage kick aimed directly at the side of his knee. The impact echoes—a sickening thwack of reinforced bone meeting hyper-dense tendon. Crusher bellows in pain and surprise, his leg buckling. A spiderweb of cracks appears on the stony skin around his joint. He\'s hobbled, but far from out.'
                },
                {
                    id: 'close-distance',
                    text: 'Close the Distance: Get too close for him to swing properly. Use elbows and knees in a dirty, close-range barrage.',
                    outcome: 'You surge forward, inside the arc of his swing. Your world becomes the smell of his sweat and the grunt of his breath. You drive a hard elbow into his floating ribs, feeling something give with a satisfying crunch. A follow-up knee smashes into his thigh. He grabs you by the shoulder, his fingers like industrial vices, and hurls you back against a teller\'s counter. The breath explodes from your lungs, but he\'s now bleeding from a shallow cut over his eye. You\'ve drawn first blood.'
                }
            ]
        },
        turn2: {
            intro: `Crusher is angrier, more reckless. He limps forward, swinging a backhand that shatters a marble pillar. Chips of stone pepper your helmet like shotgun pellets.`,
            choices: [
                {
                    id: 'use-environment',
                    text: 'Use the Environment: Lure him into compromising his own position. Make him smash his way into a trap.',
                    outcome: 'You backpedal, leading him towards the wreckage of the security gate. He takes the bait, stomping after you. As he brings a fist down to crush you, you roll aside. His fist plows through the floor, tangling in the mangled, electrified wires of the gate. A surge of electricity makes him convulse, smoke rising from his arm. He\'s stunned, his rocky skin blackened and smoldering.'
                },
                {
                    id: 'weaponize-debris',
                    text: 'Weaponize a Debris: Grab a shard of broken marble or a length of steel rebar. A weapon is a force multiplier.',
                    outcome: 'You snatch a sharp, spear-like fragment of a shattered granite countertop. As he lunges, you don\'t retreat. You meet him, jamming the stone shard into the meat of his shoulder where the rocky plating is thinnest. It sinks in with a wet, tearing sound. Crusher screams, a raw, animal sound of agony. He backhands you in retaliation, the blow glancing off your helmet but still making your vision swim with stars. You\'re hurt, but he\'s got a piece of the bank sticking out of him.'
                }
            ]
        },
        turn3: {
            intro: `He's bleeding, burned, and furious. The brute is now a wounded animal, and far more dangerous. He tears the granite shard from his shoulder with a roar and charges, aiming to tackle you through the wall.`,
            choices: [
                {
                    id: 'dirty-tactic',
                    text: 'Dirty Tactic: Go for a debilitating strike to a vulnerable area. The eyes, the throat. This isn\'t a duel; it\'s a survival.',
                    outcome: 'As he closes, you feign a stumble. The moment he overextends, your hand strikes like a cobra, fingers rigid, aiming for his throat. You connect with his Adam\'s apple. There\'s a gurgling, choking sound. He staggers back, clutching his neck, his eyes wide with a new, primal fear. He can\'t breathe. The fight is changing.'
                },
                {
                    id: 'aggressive-counter',
                    text: 'Aggressive Counter: Meet his charge with your own. A leaping knee or a spear-hand strike to the injured shoulder. Break the will along with the body.',
                    outcome: 'You see the blood pouring from his shoulder wound. You don\'t evade. You run straight at him, leaping at the last second. Your knee drives directly into the bloody crater where the granite was. The sound is nauseating—a wet, crushing pop. Crusher\'s charge turns into a stumble of pure agony. He crashes to one knee, catching himself with his fists, vomiting a string of bloody spit onto the polished floor.'
                }
            ]
        },
        turn4: {
            intro: `Crusher is on a knee, broken, bleeding, and gasping. But his eyes still burn with hate. He looks up at you, a mountain of ruined flesh and defiance. One more move ends this.`,
            choices: [
                {
                    id: 'finishing-blow',
                    text: 'The Finishing Blow: End it. A precise, ruthless strike to the temple or the base of the skull. He made his choice.',
                    outcome: 'There is no ceremony. No grand speech. You step in, your body coiling. You deliver a single, perfectly focused blow—a palm heel strike that snaps his head back with a sound like a gunshot. His body goes rigid, then slumps to the floor, a final breath sighing out of him. The fight is over. The lobby is silent save for the drip of his blood and the frantic pounding of your own heart. You stand over the corpse, a killer in a grey suit. There is no victory here, only a conclusion.',
                    isKill: true,
                    endingType: 'Lethal Force'
                },
                {
                    id: 'philosophical-point',
                    text: 'The Philosophical Point: Make him surrender. Force him to acknowledge his defeat, to choose living in shame over dying proud.',
                    outcome: 'You stand over him, not striking. "Yield," you growl, your voice distorted by the helmet. "Choose to live with this failure. It is a heavier burden than death." He looks up, hate and confusion warring in his eyes. With a shuddering, defeated gasp, he slumps, his face hitting the cold marble. "I yield," he chokes out. You step back. He is alive, but you have killed his spirit. You have proven that a man with no powers can break a superhuman will. It is, in its own way, far more brutal.',
                    isKill: false,
                    endingType: 'Forced Surrender'
                }
            ]
        }
    },
    aftermath_intro: {
        text: `The adrenaline bleeds from your system, leaving behind the raw, aching truth of the violence. Crusher's body—or his unconscious form, if you spared him—lies as a monument in the center of the ruined bank. The civilians are staring at you, their savior, with a mixture of awe and terror. You are not Aegis. You are not a comforting image. You are the necessary evil that saved them, and that truth is written in the blood on the marble floor.

Before the first police officer can work up the courage to breach, your private comm line crackles to life. It's Maya. Her voice is dry, stripped of congratulation.`,
        maya_message: `"The show's over. Cops are coming in. Egress route is the same way you came in, unless you fancy a dozen interviews and a bill for the structural damage. Move."`,
        escape: `You don't need telling twice. You are a ghost again, melting back into the alleyways, the rain washing the blood from your suit but not from your memory. By the time you collapse back into the aching familiarity of your armchair, the media is already spinning the narrative. "Mystery Vigilante Thwarts Bank Heist!" "A New Dark Hero Emerges?"

Your phone rings. It's her. You hit accept.`,
        maya_opening: `"Well. You still have the touch. And a flair for the dramatic. The networks are having a field day. They don't know whether to call you a hero or a menace."`,
        pause: `She pauses. You can hear the click of a lighter, the exhale of smoke.`,
        maya_question: `"Talk to me, [HERO_NAME]. What's the verdict?"`
    },
    maya_conversation: {
        turn1: {
            choices: [
                {
                    id: 'necessary',
                    text: 'It was necessary. Nothing more.',
                    response: `"The calculus was simple," you reply, your voice flat. "Their actions merited a response. I was the available response. There is no deeper meaning. It was a transaction of force."`,
                    maya_reply: `"A transaction. Cold. Even for you. But practical. I can work with practical."`
                },
                {
                    id: 'useful',
                    text: 'It felt... good. To be useful again.',
                    response: `You let out a long, slow breath, the tension in your knuckles finally easing. "For a few minutes... I wasn't a philosopher in a rotting chair. I was a tool being used for its intended purpose. There's a purity in that. A terrible, addictive purity."`,
                    maya_reply: `"Careful. That's how they get you hooked again. That 'purity' is what they sell to the kids in the academies. It's a lie, but... I'm glad you're not completely dead inside."`
                },
                {
                    id: 'scum',
                    text: 'They were just brutes. Scum. The world is cleaner now.',
                    response: `A grim satisfaction colours your tone. "They were animals. Smashing what they couldn't understand. I put down a rabid dog. The world doesn't need more heroes; it needs more pest control."`,
                    maya_reply: `"Hmph. Charming. Don't let the press hear you say that. 'Pest Control' doesn't look good on a merchandising deal. But point taken."`
                }
            ]
        },
        turn2: {
            intro: `"The brutes were pawns. Muscle for hire. But the money they were after... it wasn't for them. The pattern matches the last three 'meaningless' heists. This was a funding run."`,
            pause: 'Another drag on her cigarette.',
            question: `"It's for Smile. They're building a war chest. This wasn't random chaos. It was a strategic move. What does that tell you?"`,
            choices: [
                {
                    id: 'businessman',
                    text: 'It tells me Smile is a businessman. This is just cost-benefit analysis.',
                    response: `"Of course," you nod, almost smiling. "He outsources the risk. He stays clean, hands off, while the dumb muscle takes the fall. He's not a revolutionary; he's a CEO of chaos. Efficient. I can almost respect it."`,
                    maya_reply: `"Respect is a dangerous word. But you're right. This is professional. Which makes him more dangerous than any ranting ideologue."`
                },
                {
                    id: 'revolutionary',
                    text: 'It tells me he\'s a revolutionary. He needs resources for a larger attack.',
                    response: `"He's not just trying to make a point," you say, the pieces clicking into a grim picture. "He's building an army, or a weapon. This is phase one. The graffiti, the interviews... it's all misdirection. The real work is being funded in plain sight."`,
                    maya_reply: `"That's the thought that keeps me up at night. This was a logistics operation. And we just slowed him down. We didn't stop him."`
                },
                {
                    id: 'mocking',
                    text: 'It tells me he\'s mocking us. Using crude thugs to fund his sophisticated joke.',
                    response: `You let out a hollow laugh. "Don't you see? It's the ultimate punchline. He uses the most primitive, predictable form of crime—the bank heist—to fund his war on modern society. He's highlighting how archaic and vulnerable our systems are, even as he exploits them. The man is an artist."`,
                    maya_reply: `"An artist with a body count. I prefer my art to be less... lethal."`
                }
            ]
        },
        turn3: {
            intro: `"So. You're back in the game. For now. The police are confused, the Guild is intrigued, and I... I have a stack of other problems that could use your particular, pessimistic skill set."`,
            pause: 'She lets the offer hang in the static-filled silence.',
            question: `"This was a taste. Do you want the next course? Or was this a one-time relapse?"`,
            choices: [
                {
                    id: 'interested',
                    text: 'I\'m not a hero. But Smile... interests me. I\'m in.',
                    response: `"Smile is the only one who seems to see the same rotten joke I do," you admit, staring at your bloodied knuckles. "I want to see the punchline. Not to stop it. To understand it. Send me the files."`,
                    maya_reply: `"I knew it. The philosopher finds his muse. Fine. Don't get yourself killed trying to have a deep conversation with a terrorist. I'll be in touch."`,
                    continues: true,
                    endingType: 'Pursuit of Understanding'
                },
                {
                    id: 'money',
                    text: 'I need the money. Make the next job worth my while.',
                    response: `You cut through the philosophy with brutal pragmatism. "Spare me the grand narrative, Maya. My fridge is empty and the landlord doesn't accept philosophical insights as payment. If you have work, make it profitable work."`,
                    maya_reply: `"Now that's the [HERO_NAME] I remember. Always ready to cheapen the moment. Fine. The next one pays double. Try not to spend it all on cheap whiskey."`,
                    continues: true,
                    endingType: 'Mercenary Work'
                },
                {
                    id: 'done',
                    text: 'This changes nothing. I did what I had to. Don\'t expect a repeat.',
                    response: `You feel the weight of the armour, the ghost of the violence. It's a shackle. "This was a moment of weakness. A lapse in judgment. The system is still broken. I am still broken. Do not call me again."`,
                    maya_reply: `A long, silent pause. "Understood. I'll leave you to your... thoughts. For what it's worth... it was good to see you again. Even like this." The line goes dead.`,
                    continues: false,
                    endingType: 'Return to Solitude'
                }
            ]
        }
    },
    final_reflection: {
        continues: 'You are alone again. The rain hasn\'t stopped. But the world outside your window feels different now. You\'ve stepped back into the current, and the tide is pulling you towards a man with a smile.',
        ends: 'You are alone again. The rain hasn\'t stopped. The world is the same as it was before. You saved a dozen people, and tomorrow you will sit in your chair and watch the world decay. Nothing has changed. You are still you.'
    }
};

// Martial arts data
const martialArts = [
    {
        id: 'krav-maga',
        name: 'Krav Maga',
        description: 'Brutal, efficient, and pragmatic. It is not a sport; it is the art of survival, of ending threats by any means necessary. It taught you the grim arithmetic of violence.'
    },
    {
        id: 'jeet-kune-do',
        name: 'Jeet Kune Do',
        description: 'The style of no style. A philosophy of adaptability, of absorbing what is useful and discarding what is not. It was a reflection of your mind, once—fluid, questioning, and formless.'
    },
    {
        id: 'brazilian-jiu-jitsu',
        name: 'Brazilian Jiu-Jitsu',
        description: 'The struggle on the ground, where leverage defeats strength. You learned that everyone, no matter how powerful, can be brought low. A fitting metaphor for your current perspective.'
    },
    {
        id: 'muay-thai',
        name: 'Muay Thai',
        description: 'The art of eight limbs. A relentless, punishing dance of fists, elbows, knees, and shins. It is an unflinching acceptance of pain, both given and received.'
    }
];

// Initialize the game
function init() {
    displayPrologue();
}

// Display the prologue
function displayPrologue() {
    const storyDiv = document.getElementById('story-content');
    const story = storyContent.prologue;
    
    // Split text into paragraphs
    const paragraphs = story.text.split('\n\n').map(p => p.trim()).filter(p => p);
    
    let html = `<h2>${story.title}</h2>`;
    paragraphs.forEach(p => {
        html += `<p>${p}</p>`;
    });
    
    storyDiv.innerHTML = html;
    
    // Display character creation choices
    displayCharacterCreation();
}

// Display character creation form
function displayCharacterCreation() {
    const choicesDiv = document.getElementById('choices-container');
    
    let html = `
        <div class="choice-group">
            <label class="choice-label">What is your name? (This is the name you fought under, the one now gathering dust in the city's forgotten records.)</label>
            <input type="text" id="hero-name" class="text-input" placeholder="Enter your hero name..." maxlength="30">
            <div class="error-message" id="hero-name-error">Please enter your hero name.</div>
        </div>
        
        <div class="choice-group">
            <label class="choice-label">Your dog is your only constant companion. What do you call him?</label>
            <input type="text" id="dog-name" class="text-input" placeholder="Enter your dog's name..." maxlength="20">
            <div class="error-message" id="dog-name-error">Please enter your dog's name.</div>
        </div>
        
        <div class="choice-group">
            <label class="choice-label">You have no superpowers. Your only strength was the discipline of the body, the honed edge of a mastered martial art. Which one did you dedicate your life to?</label>
            <div class="martial-arts-grid">
    `;
    
    martialArts.forEach(art => {
        html += `
            <label class="martial-art-option" data-art="${art.id}">
                <input type="radio" name="martial-art" value="${art.id}">
                <div class="martial-art-title">${art.name}</div>
                <div class="martial-art-description">${art.description}</div>
            </label>
        `;
    });
    
    html += `
            </div>
            <div class="error-message" id="martial-art-error">Please select a martial art.</div>
        </div>
        
        <button class="submit-button" id="submit-choices">Continue</button>
    `;
    
    choicesDiv.innerHTML = html;
    
    // Add event listeners
    addCharacterCreationListeners();
}

// Add event listeners for character creation
function addCharacterCreationListeners() {
    // Martial art selection
    const artOptions = document.querySelectorAll('.martial-art-option');
    artOptions.forEach(option => {
        option.addEventListener('click', function() {
            artOptions.forEach(opt => opt.classList.remove('selected'));
            this.classList.add('selected');
            const radio = this.querySelector('input[type="radio"]');
            radio.checked = true;
            gameState.martialArt = radio.value;
            
            // Hide error if visible
            document.getElementById('martial-art-error').style.display = 'none';
        });
    });
    
    // Hero name input
    document.getElementById('hero-name').addEventListener('input', function() {
        gameState.heroName = this.value.trim();
        if (gameState.heroName) {
            document.getElementById('hero-name-error').style.display = 'none';
        }
    });
    
    // Dog name input
    document.getElementById('dog-name').addEventListener('input', function() {
        gameState.dogName = this.value.trim();
        if (gameState.dogName) {
            document.getElementById('dog-name-error').style.display = 'none';
        }
    });
    
    // Submit button
    document.getElementById('submit-choices').addEventListener('click', validateAndSubmit);
}

// Validate and submit character creation
function validateAndSubmit() {
    let isValid = true;
    
    // Validate hero name
    if (!gameState.heroName) {
        document.getElementById('hero-name-error').style.display = 'block';
        isValid = false;
    }
    
    // Validate dog name
    if (!gameState.dogName) {
        document.getElementById('dog-name-error').style.display = 'block';
        isValid = false;
    }
    
    // Validate martial art
    if (!gameState.martialArt) {
        document.getElementById('martial-art-error').style.display = 'block';
        isValid = false;
    }
    
    if (isValid) {
        proceedToNextChapter();
    }
}

// Proceed to next chapter
function proceedToNextChapter() {
    gameState.currentChapter = 'chapter1';
    
    // Update the story content area
    const storyDiv = document.getElementById('story-content');
    const intro = storyContent.chapter1_intro;
    
    // Split text into paragraphs
    const paragraphs = intro.text.split('\n\n').map(p => p.trim()).filter(p => p);
    
    let html = '';
    paragraphs.forEach(p => {
        html += `<p>${p}</p>`;
    });
    
    storyDiv.innerHTML = html;
    
    // Display the choices
    displayChapter1Choices();
    
    // Scroll to the story content
    storyDiv.scrollIntoView({ behavior: 'smooth' });
}

// Display Chapter 1 choices
function displayChapter1Choices() {
    const choicesDiv = document.getElementById('choices-container');
    const choicesData = storyContent.chapter1_choices;
    
    let html = `
        <div class="choice-label">${choicesData.question}</div>
        <div class="action-choices">
    `;
    
    choicesData.choices.forEach(choice => {
        html += `
            <button class="action-choice-button" data-choice="${choice.id}">
                ${choice.text}
            </button>
        `;
    });
    
    html += `
        </div>
    `;
    
    choicesDiv.innerHTML = html;
    
    // Add event listeners to choice buttons
    const choiceButtons = document.querySelectorAll('.action-choice-button');
    choiceButtons.forEach(button => {
        button.addEventListener('click', function() {
            const choiceId = this.getAttribute('data-choice');
            handleChapter1Choice(choiceId);
        });
    });
}

// Handle Chapter 1 choice selection
function handleChapter1Choice(choiceId) {
    const choicesData = storyContent.chapter1_choices;
    const selectedChoice = choicesData.choices.find(c => c.id === choiceId);
    
    if (!selectedChoice) return;
    
    // Store the choice
    gameState.firstAction = choiceId;
    
    // Get the outcome text and replace dog name placeholders
    let outcomeText = selectedChoice.outcome;
    
    // Replace dog name placeholders
    const dogNameLower = gameState.dogName || 'your dog';
    const dogNameUpper = gameState.dogName || 'Your dog';
    
    outcomeText = outcomeText.replace(/\[DOG_NAME_LOWER\]/g, dogNameLower);
    outcomeText = outcomeText.replace(/\[DOG_NAME_UPPER\]/g, dogNameUpper);
    
    // Display the outcome
    const storyDiv = document.getElementById('story-content');
    const paragraphs = outcomeText.split('\n\n').map(p => p.trim()).filter(p => p);
    
    let html = '';
    paragraphs.forEach(p => {
        html += `<p>${p}</p>`;
    });
    
    storyDiv.innerHTML = html;
    
    // Clear choices temporarily
    const choicesDiv = document.getElementById('choices-container');
    choicesDiv.innerHTML = '<button class="submit-button" id="continue-button">Continue</button>';
    
    // Add continue button listener
    document.getElementById('continue-button').addEventListener('click', showMayaText);
    
    // Scroll to the new content
    storyDiv.scrollIntoView({ behavior: 'smooth' });
}

// Show Maya's text message
function showMayaText() {
    const mayaData = storyContent.maya_text;
    const storyDiv = document.getElementById('story-content');
    
    // Replace placeholders
    const dogNameLower = gameState.dogName || 'your dog';
    let text = mayaData.text.replace(/\[DOG_NAME_LOWER\]/g, dogNameLower);
    
    // Parse paragraphs
    const textParagraphs = text.split('\n\n').map(p => p.trim()).filter(p => p);
    const aftermathParagraphs = mayaData.aftermath.split('\n\n').map(p => p.trim()).filter(p => p);
    
    let html = '';
    textParagraphs.forEach(p => {
        html += `<p>${p}</p>`;
    });
    
    // Add the phone message in a special styled div
    html += `
        <div class="phone-message">
            <div class="phone-header">Maya:</div>
            <div class="phone-text">${mayaData.message}</div>
            <div class="phone-location">📍 Coordinates pin dropped</div>
        </div>
    `;
    
    aftermathParagraphs.forEach(p => {
        html += `<p>${p}</p>`;
    });
    
    storyDiv.innerHTML = html;
    
    // Show the critical choice
    displayBankChoice();
    
    // Scroll to the new content
    storyDiv.scrollIntoView({ behavior: 'smooth' });
}

// Display the bank choice
function displayBankChoice() {
    const choicesDiv = document.getElementById('choices-container');
    const choicesData = storyContent.bank_choice;
    
    // Replace hero name in question
    const question = choicesData.question.replace(/\[HERO_NAME\]/g, gameState.heroName);
    
    let html = `
        <div class="choice-label critical-choice">${question}</div>
        <div class="action-choices">
    `;
    
    choicesData.choices.forEach(choice => {
        html += `
            <button class="action-choice-button ${choice.isEnding ? 'ending-choice' : ''}" data-choice="${choice.id}">
                ${choice.text}
            </button>
        `;
    });
    
    html += `
        </div>
    `;
    
    choicesDiv.innerHTML = html;
    
    // Add event listeners to choice buttons
    const choiceButtons = document.querySelectorAll('.action-choice-button');
    choiceButtons.forEach(button => {
        button.addEventListener('click', function() {
            const choiceId = this.getAttribute('data-choice');
            handleBankChoice(choiceId);
        });
    });
}

// Handle bank choice
function handleBankChoice(choiceId) {
    const choicesData = storyContent.bank_choice;
    const selectedChoice = choicesData.choices.find(c => c.id === choiceId);
    
    if (!selectedChoice) return;
    
    // Store the choice
    gameState.bankChoice = choiceId;
    
    // Get the outcome text
    let outcomeText = selectedChoice.outcome;
    
    // Display the outcome
    const storyDiv = document.getElementById('story-content');
    const paragraphs = outcomeText.split('\n\n').map(p => p.trim()).filter(p => p);
    
    let html = '';
    paragraphs.forEach(p => {
        html += `<p>${p}</p>`;
    });
    
    storyDiv.innerHTML = html;
    
    const choicesDiv = document.getElementById('choices-container');
    
    // Check if this is an ending
    if (selectedChoice.isEnding) {
        const martialArtName = martialArts.find(art => art.id === gameState.martialArt).name;
        
        choicesDiv.innerHTML = `
            <div class="ending-container">
                <div class="ending-title">${selectedChoice.endingTitle}</div>
                <p style="text-indent: 0; text-align: center; font-style: italic; color: #999; margin: 20px 0;">
                    ${selectedChoice.endingText}
                </p>
                <div class="character-summary">
                    <p style="text-indent: 0; margin-bottom: 10px;"><strong>Final Character Summary:</strong></p>
                    <p style="text-indent: 0;">Name: <span style="color: #b8860b;">${gameState.heroName}</span></p>
                    <p style="text-indent: 0;">Companion: <span style="color: #b8860b;">${gameState.dogName}</span></p>
                    <p style="text-indent: 0;">Martial Art: <span style="color: #b8860b;">${martialArtName}</span></p>
                    <p style="text-indent: 0;">Path Chosen: <span style="color: #666;">Inaction</span></p>
                </div>
                <button class="submit-button" onclick="location.reload()">Start Over</button>
            </div>
        `;
    } else {
        // Continue to bank scene
        choicesDiv.innerHTML = '<button class="submit-button" id="continue-to-bank">Continue</button>';
        document.getElementById('continue-to-bank').addEventListener('click', showBankArrival);
    }
    
    // Scroll to the new content
    storyDiv.scrollIntoView({ behavior: 'smooth' });
}

// Show bank arrival scene
function showBankArrival() {
    const arrivalData = storyContent.arrival_at_bank;
    const storyDiv = document.getElementById('story-content');
    
    // Parse paragraphs
    const paragraphs = arrivalData.text.split('\n\n').map(p => p.trim()).filter(p => p);
    
    let html = '';
    paragraphs.forEach(p => {
        html += `<p>${p}</p>`;
    });
    
    storyDiv.innerHTML = html;
    
    // Show approach choices
    displayBankApproach();
    
    // Scroll to the new content
    storyDiv.scrollIntoView({ behavior: 'smooth' });
}

// Display bank approach choices
function displayBankApproach() {
    const choicesDiv = document.getElementById('choices-container');
    const approachData = storyContent.bank_approach;
    
    let html = `
        <div class="choice-label">${approachData.question}</div>
        <div class="action-choices">
    `;
    
    approachData.choices.forEach(choice => {
        html += `
            <button class="action-choice-button approach-choice" data-approach="${choice.id}">
                ${choice.text}
            </button>
        `;
    });
    
    html += `
        </div>
    `;
    
    choicesDiv.innerHTML = html;
    
    // Add event listeners to approach buttons
    const approachButtons = document.querySelectorAll('.approach-choice');
    approachButtons.forEach(button => {
        button.addEventListener('click', function() {
            const approachId = this.getAttribute('data-approach');
            handleBankApproach(approachId);
        });
    });
}

// Handle bank approach selection
function handleBankApproach(approachId) {
    // Store the approach choice
    gameState.bankApproach = approachId;
    gameState.combatChoices = []; // Initialize combat choices array
    
    // Get the outcome based on approach and martial art
    const outcomes = storyContent.bank_outcomes[approachId];
    const martialArtOutcome = outcomes[gameState.martialArt];
    
    if (!martialArtOutcome) {
        console.error('No outcome found for', approachId, gameState.martialArt);
        return;
    }
    
    // Build the full outcome text
    const fullOutcome = outcomes.intro + '\n\n' + martialArtOutcome;
    
    // Display the outcome
    const storyDiv = document.getElementById('story-content');
    const paragraphs = fullOutcome.split('\n\n').map(p => p.trim()).filter(p => p);
    
    let html = '';
    paragraphs.forEach(p => {
        html += `<p>${p}</p>`;
    });
    
    storyDiv.innerHTML = html;
    
    // Show continue to combat button
    const choicesDiv = document.getElementById('choices-container');
    choicesDiv.innerHTML = '<button class="submit-button" id="start-combat">Continue</button>';
    document.getElementById('start-combat').addEventListener('click', startCombat);
    
    // Scroll to the new content
    storyDiv.scrollIntoView({ behavior: 'smooth' });
}

// Start combat sequence
function startCombat() {
    const combatIntro = storyContent.combat_intro;
    const storyDiv = document.getElementById('story-content');
    
    // Parse combat intro
    const paragraphs = combatIntro.text.split('\n\n').map(p => p.trim()).filter(p => p);
    
    let html = '<h2 style="text-align: center; color: #ff6b6b; margin-bottom: 20px;">TURN 1</h2>';
    paragraphs.forEach(p => {
        html += `<p>${p}</p>`;
    });
    
    storyDiv.innerHTML = html;
    
    // Show Turn 1 choices
    displayCombatTurn(1);
    
    // Scroll to the new content
    storyDiv.scrollIntoView({ behavior: 'smooth' });
}

// Display combat turn choices
function displayCombatTurn(turnNumber) {
    const turnData = storyContent.combat[`turn${turnNumber}`];
    const storyDiv = document.getElementById('story-content');
    const choicesDiv = document.getElementById('choices-container');
    
    // Add turn intro to story
    const currentHtml = storyDiv.innerHTML;
    storyDiv.innerHTML = currentHtml + `<p>${turnData.intro}</p>`;
    
    // Display choices
    let html = '<div class="action-choices combat-choices">';
    
    turnData.choices.forEach(choice => {
        html += `
            <button class="action-choice-button combat-choice" data-turn="${turnNumber}" data-choice="${choice.id}">
                ${choice.text}
            </button>
        `;
    });
    
    html += '</div>';
    
    choicesDiv.innerHTML = html;
    
    // Add event listeners
    const combatButtons = document.querySelectorAll('.combat-choice');
    combatButtons.forEach(button => {
        button.addEventListener('click', function() {
            const turn = parseInt(this.getAttribute('data-turn'));
            const choiceId = this.getAttribute('data-choice');
            handleCombatChoice(turn, choiceId);
        });
    });
}

// Handle combat choice
function handleCombatChoice(turnNumber, choiceId) {
    const turnData = storyContent.combat[`turn${turnNumber}`];
    const selectedChoice = turnData.choices.find(c => c.id === choiceId);
    
    if (!selectedChoice) return;
    
    // Store the choice
    gameState.combatChoices.push(choiceId);
    
    // Display the outcome
    const storyDiv = document.getElementById('story-content');
    const currentHtml = storyDiv.innerHTML;
    storyDiv.innerHTML = currentHtml + `<p class="combat-outcome">${selectedChoice.outcome}</p>`;
    
    // Check if this is the final turn
    if (turnNumber === 4) {
        showCombatResult(selectedChoice);
    } else {
        // Continue to next turn
        const choicesDiv = document.getElementById('choices-container');
        choicesDiv.innerHTML = '<button class="submit-button" id="next-turn">Continue</button>';
        
        document.getElementById('next-turn').addEventListener('click', function() {
            // Add turn header
            const nextTurn = turnNumber + 1;
            const currentHtml = storyDiv.innerHTML;
            storyDiv.innerHTML = currentHtml + `<h2 style="text-align: center; color: #ff6b6b; margin: 30px 0 20px 0;">TURN ${nextTurn}</h2>`;
            
            // Display next turn
            displayCombatTurn(nextTurn);
            
            // Scroll to new content
            storyDiv.scrollIntoView({ behavior: 'smooth', block: 'end' });
        });
    }
    
    // Scroll to the new content
    storyDiv.scrollIntoView({ behavior: 'smooth', block: 'end' });
}

// Show final combat result
function showCombatResult(finalChoice) {
    const choicesDiv = document.getElementById('choices-container');
    const martialArtName = martialArts.find(art => art.id === gameState.martialArt).name;
    
    // Get approach name
    const approachNames = {
        'direct': 'Direct Approach',
        'unconventional': 'Unconventional Entry',
        'patient': 'Patient Takedown',
        'psychological': 'Psychological Play'
    };
    
    // Build combat summary
    const combatSummary = gameState.combatChoices.map((choice, index) => {
        const choiceNames = {
            'target-leg': 'Target Leg',
            'close-distance': 'Close Distance',
            'use-environment': 'Environment',
            'weaponize-debris': 'Weaponize Debris',
            'dirty-tactic': 'Dirty Tactic',
            'aggressive-counter': 'Aggressive Counter'
        };
        return choiceNames[choice] || choice;
    }).join(' → ');
    
    choicesDiv.innerHTML = `
        <div class="combat-result ${finalChoice.isKill ? 'lethal-result' : 'nonlethal-result'}">
            <h3 style="text-align: center; color: ${finalChoice.isKill ? '#ff6b6b' : '#b8860b'}; margin-bottom: 20px;">
                FIGHT COMPLETE: ${finalChoice.endingType}
            </h3>
            <button class="submit-button" id="continue-aftermath">Continue</button>
        </div>
    `;
    
    // Add listener for aftermath
    document.getElementById('continue-aftermath').addEventListener('click', showAftermath);
    
    // Scroll to the result
    choicesDiv.scrollIntoView({ behavior: 'smooth' });
}

// Show aftermath scene
function showAftermath() {
    const aftermathData = storyContent.aftermath_intro;
    const storyDiv = document.getElementById('story-content');
    gameState.mayaChoices = []; // Initialize Maya conversation choices
    
    // Build aftermath narrative
    let html = '<h2 style="text-align: center; color: #b8860b; margin-bottom: 20px;">AFTERMATH</h2>';
    
    // Add intro text
    const introParagraphs = aftermathData.text.split('\n\n').map(p => p.trim()).filter(p => p);
    introParagraphs.forEach(p => {
        html += `<p>${p}</p>`;
    });
    
    // Add Maya's message in a comm style
    html += `
        <div class="comm-message">
            <div class="comm-header">MAYA (COMM):</div>
            <div class="comm-text">${aftermathData.maya_message}</div>
        </div>
    `;
    
    // Add escape text
    const escapeParagraphs = aftermathData.escape.split('\n\n').map(p => p.trim()).filter(p => p);
    escapeParagraphs.forEach(p => {
        html += `<p>${p}</p>`;
    });
    
    // Add Maya's opening
    html += `
        <div class="comm-message">
            <div class="comm-header">MAYA:</div>
            <div class="comm-text">${aftermathData.maya_opening}</div>
        </div>
    `;
    
    html += `<p class="pause-text">${aftermathData.pause}</p>`;
    
    // Replace hero name in question
    const question = aftermathData.maya_question.replace(/\[HERO_NAME\]/g, gameState.heroName);
    html += `
        <div class="comm-message">
            <div class="comm-header">MAYA:</div>
            <div class="comm-text">${question}</div>
        </div>
    `;
    
    storyDiv.innerHTML = html;
    
    // Show Turn 1 choices
    displayMayaTurn(1);
    
    // Scroll to the new content
    storyDiv.scrollIntoView({ behavior: 'smooth' });
}

// Display Maya conversation turn
function displayMayaTurn(turnNumber) {
    const turnData = storyContent.maya_conversation[`turn${turnNumber}`];
    const choicesDiv = document.getElementById('choices-container');
    
    // Display choices
    let html = '<div class="action-choices maya-choices">';
    
    turnData.choices.forEach(choice => {
        html += `
            <button class="action-choice-button maya-choice" data-turn="${turnNumber}" data-choice="${choice.id}">
                ${choice.text}
            </button>
        `;
    });
    
    html += '</div>';
    
    choicesDiv.innerHTML = html;
    
    // Add event listeners
    const mayaButtons = document.querySelectorAll('.maya-choice');
    mayaButtons.forEach(button => {
        button.addEventListener('click', function() {
            const turn = parseInt(this.getAttribute('data-turn'));
            const choiceId = this.getAttribute('data-choice');
            handleMayaChoice(turn, choiceId);
        });
    });
}

// Handle Maya conversation choice
function handleMayaChoice(turnNumber, choiceId) {
    const turnData = storyContent.maya_conversation[`turn${turnNumber}`];
    const selectedChoice = turnData.choices.find(c => c.id === choiceId);
    
    if (!selectedChoice) return;
    
    // Store the choice
    gameState.mayaChoices.push(choiceId);
    
    // Display the player's response and Maya's reply
    const storyDiv = document.getElementById('story-content');
    const currentHtml = storyDiv.innerHTML;
    
    let newHtml = currentHtml;
    newHtml += `<p class="player-response"><em>${selectedChoice.response}</em></p>`;
    newHtml += `
        <div class="comm-message maya-reply">
            <div class="comm-header">MAYA:</div>
            <div class="comm-text">${selectedChoice.maya_reply.replace(/\[HERO_NAME\]/g, gameState.heroName)}</div>
        </div>
    `;
    
    storyDiv.innerHTML = newHtml;
    
    // Check if this is the final turn
    if (turnNumber === 3) {
        showFinalOutcome(selectedChoice);
    } else {
        // Continue to next turn
        const choicesDiv = document.getElementById('choices-container');
        choicesDiv.innerHTML = '<button class="submit-button" id="next-maya-turn">Continue</button>';
        
        document.getElementById('next-maya-turn').addEventListener('click', function() {
            // Add next turn setup if needed
            const nextTurn = turnNumber + 1;
            const nextTurnData = storyContent.maya_conversation[`turn${nextTurn}`];
            const currentHtml = storyDiv.innerHTML;
            
            let html = currentHtml;
            
            // Add turn intro
            html += `
                <div class="comm-message">
                    <div class="comm-header">MAYA:</div>
                    <div class="comm-text">${nextTurnData.intro}</div>
                </div>
            `;
            
            if (nextTurnData.pause) {
                html += `<p class="pause-text">${nextTurnData.pause}</p>`;
            }
            
            if (nextTurnData.question) {
                html += `
                    <div class="comm-message">
                        <div class="comm-header">MAYA:</div>
                        <div class="comm-text">${nextTurnData.question}</div>
                    </div>
                `;
            }
            
            storyDiv.innerHTML = html;
            
            // Display next turn
            displayMayaTurn(nextTurn);
            
            // Scroll to new content
            storyDiv.scrollIntoView({ behavior: 'smooth', block: 'end' });
        });
    }
    
    // Scroll to the new content
    storyDiv.scrollIntoView({ behavior: 'smooth', block: 'end' });
}

// Show final outcome
function showFinalOutcome(finalChoice) {
    const storyDiv = document.getElementById('story-content');
    const choicesDiv = document.getElementById('choices-container');
    const martialArtName = martialArts.find(art => art.id === gameState.martialArt).name;
    
    // Get approach name
    const approachNames = {
        'direct': 'Direct Approach',
        'unconventional': 'Unconventional Entry',
        'patient': 'Patient Takedown',
        'psychological': 'Psychological Play'
    };
    
    // Add final reflection
    const currentHtml = storyDiv.innerHTML;
    const reflection = finalChoice.continues ? 
        storyContent.final_reflection.continues : 
        storyContent.final_reflection.ends;
    
    storyDiv.innerHTML = currentHtml + `<p class="final-reflection">${reflection}</p>`;
    
    // Build Maya conversation summary
    const mayaSummary = gameState.mayaChoices.map((choice, index) => {
        const choiceNames = {
            'necessary': 'Necessary',
            'useful': 'Useful',
            'scum': 'Pest Control',
            'businessman': 'Businessman',
            'revolutionary': 'Revolutionary',
            'mocking': 'Mocking',
            'interested': 'Interested',
            'money': 'Money',
            'done': 'Done'
        };
        return choiceNames[choice] || choice;
    }).join(' → ');
    
    // Build combat summary
    const combatSummary = gameState.combatChoices.map((choice, index) => {
        const choiceNames = {
            'target-leg': 'Leg',
            'close-distance': 'Close',
            'use-environment': 'Env',
            'weaponize-debris': 'Weapon',
            'dirty-tactic': 'Dirty',
            'aggressive-counter': 'Aggressive',
            'finishing-blow': 'Kill',
            'philosophical-point': 'Surrender'
        };
        return choiceNames[choice] || choice;
    }).join(' → ');
    
    if (finalChoice.continues) {
        // Story continues
        choicesDiv.innerHTML = `
            <div class="final-outcome continues-outcome">
                <h3 style="text-align: center; color: #b8860b; margin-bottom: 20px;">
                    CHAPTER COMPLETE: ${finalChoice.endingType}
                </h3>
                <div class="character-summary">
                    <p style="text-indent: 0; margin-bottom: 15px;"><strong>Your Complete Journey:</strong></p>
                    <p style="text-indent: 0;">Hero Name: <span style="color: #b8860b;">${gameState.heroName}</span></p>
                    <p style="text-indent: 0;">Companion: <span style="color: #b8860b;">${gameState.dogName}</span></p>
                    <p style="text-indent: 0;">Martial Art: <span style="color: #b8860b;">${martialArtName}</span></p>
                    <p style="text-indent: 0;">Bank Entry: <span style="color: #b8860b;">${approachNames[gameState.bankApproach]}</span></p>
                    <p style="text-indent: 0;">Combat: <span style="color: #999; font-size: 0.9em;">${combatSummary}</span></p>
                    <p style="text-indent: 0;">Perspective: <span style="color: #999; font-size: 0.9em;">${mayaSummary}</span></p>
                    <p style="text-indent: 0;">Motivation: <span style="color: #b8860b;">${finalChoice.endingType}</span></p>
                    <p style="text-indent: 0; text-align: center; margin-top: 30px; font-style: italic; color: #b8860b;">
                        To be continued...
                    </p>
                    <p style="text-indent: 0; text-align: center; margin-top: 10px; font-style: italic; color: #888;">
                        (The hunt for Smile continues in the next chapter)
                    </p>
                </div>
            </div>
        `;
    } else {
        // Story ends - player refuses to continue
        choicesDiv.innerHTML = `
            <div class="final-outcome ending-outcome">
                <h3 style="text-align: center; color: #666; margin-bottom: 20px;">
                    ENDING: ${finalChoice.endingType}
                </h3>
                <p style="text-indent: 0; text-align: center; font-style: italic; color: #999; margin: 20px 0;">
                    You saved them, but you couldn't save yourself. The chair awaits.
                </p>
                <div class="character-summary">
                    <p style="text-indent: 0; margin-bottom: 15px;"><strong>Final Summary:</strong></p>
                    <p style="text-indent: 0;">Hero Name: <span style="color: #b8860b;">${gameState.heroName}</span></p>
                    <p style="text-indent: 0;">Companion: <span style="color: #b8860b;">${gameState.dogName}</span></p>
                    <p style="text-indent: 0;">Martial Art: <span style="color: #b8860b;">${martialArtName}</span></p>
                    <p style="text-indent: 0;">Bank Entry: <span style="color: #b8860b;">${approachNames[gameState.bankApproach]}</span></p>
                    <p style="text-indent: 0;">Combat: <span style="color: #999; font-size: 0.9em;">${combatSummary}</span></p>
                    <p style="text-indent: 0;">Final Choice: <span style="color: #666;">${finalChoice.endingType}</span></p>
                </div>
                <button class="submit-button" onclick="location.reload()">Start Over</button>
            </div>
        `;
    }
    
    // Scroll to the result
    choicesDiv.scrollIntoView({ behavior: 'smooth' });
}

// Start the game when page loads
document.addEventListener('DOMContentLoaded', init);

