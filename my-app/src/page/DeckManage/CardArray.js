const CardData = {
  gameName: "My Card Game",
  cards: [
    {
      id: 1,
      name: "The Guy in the 4000$ Suit",
      rarity: 4,
      imageUrl: "https://i.imgur.com/wy19LfG.png",
      type: "Standard",
      description:
        "Gain +4 Recognition per turn, Gain +10 Confidence, Lose -15 Social Skills.",
      flavourText:
        "Why don’t I just take a whiz through this 5000 dollar suit? COME ON!",
    },
    {
      id: 2,
      name: "Stress Seminar",
      rarity: 1,
      imageUrl: "https://i.imgur.com/nUK2zWY.png",
      type: "Versus",
      description:
        "Stress, if higher -10 Recognition, if lower +10 Recognition. +10 Stress.",
      flavourText:
        "Anyone still experiencing stress by the end of the day will be FIRED!",
    },
    {
      id: 3,
      name: "Phone A Friend",
      rarity: 1,
      imageUrl: "https://i.imgur.com/AYD6f2Q.png",
      type: "Skill Check",
      description:
        "If Intelligence > 120, gain +10 Recognition, +5 Stress, +10 Confidence . +10 Social Skills If Intelligence < 120 lose -10 Recognition, -10 Confidence, -10 Social Skills, Gain +15 Stress.",
      flavourText:
        "Anyone still experiencing stress by the end of the day will be FIRED!",
    },
    {
      id: 4,
      name: "Trapped by a Spider",
      rarity: 2,
      imageUrl: "https://i.imgur.com/udqnbG5.png",
      type: "Standard",
      description:
        "Lose -5 Recognition per turn, -5 Confidence, Gain +20 Stress.",
      flavourText:
        "The Spider has managed to walk behind me, and it’s between me and the door. So I can’t get out",
    },
    {
      id: 5,
      name: "Loud Typing",
      rarity: 2,
      imageUrl: "https://i.imgur.com/hWnfpUt.png",
      type: "Standard",
      description:
        "Lose -2 Recognition per turn, Lose -5 Social Skills, Gain 10+ Stress, +5 Work Ethic.",
      flavourText: "Can you stop!",
    },
    {
      id: 6,
      name: "Neuralyzer",
      rarity: 3,
      imageUrl: "https://i.imgur.com/OOtfQhG.png",
      type: "Instant",
      description:
        "Send Either all of the cards on your side of the field to the graveyard, or send all of the cards on your opponent’s side of the field to the graveyard.",
      flavourText:
        "Wait a minute. You just flash that thing, it erases her memory, and you just make up a new one?",
    },
    {
      id: 7,
      name: "Called in to Work",
      rarity: 1,
      imageUrl: "https://i.imgur.com/1VAuebX.png",
      type: "Standard",
      description:
        "Gain +5 Recognition per turn, Gain +15 Work Ethic, +10 Stress, lose -5 Social Skill.",
      flavourText: "I’m not even supposed to be here today…",
    },
    {
      id: 8,
      name: "Smoke Break",
      rarity: 1,
      imageUrl: "https://i.imgur.com/ls7SjH7.png",
      type: "Instant",
      description: "Removes -50 Stress",
      flavourText: "Jaysus I need a rollie",
    },
    {
      id: 9,
      name: "The Red Door",
      rarity: 1,
      imageUrl: "https://i.imgur.com/jXfbTpx.png",
      type: "Standard",
      description:
        "Lose -4 Recognition per turn,  Lose -5 Work Ethic, Gain +10 Creativity.",
      flavourText:
        "What could possibly be behind that damn door, I haven’t slept, I’m up all night thinking about it…",
    },
    {
      id: 10,
      name: "Turned Goth",
      rarity: 4,
      imageUrl: "https://i.imgur.com/VTDJ31T.png",
      type: "Instant",
      description: "Play a card from the graveyard.",
      flavourText: "I just found this fresh new band, it’s called Bauhaus.",
    },
    {
      id: 11,
      name: "New Boss",
      rarity: 1,
      imageUrl: "https://i.imgur.com/RH1WpJn.png",
      type: "Instant",
      description:
        "Removes all Standard cards from the board, they are sent directly to the Graveyard.",
      flavourText: "26? And you’re my new boss?",
    },
    {
      id: 12,
      name: "Dating the Manager’s Daughter",
      rarity: 1,
      imageUrl: "https://i.imgur.com/FJnXy9B.png",
      type: "Skill Check",
      description:
        "If Confidence > 140, lose -40 Stress. Gain +10 Social Skills. If Confidence < 120 lose -10 Recognition, -15 Confidence, -15 Social Skills, Gain +30 Stress.",
      flavourText: "I can explain… oh wait no I can’t.",
    },
    {
      id: 13,
      name: "Business VS Card",
      rarity: 1,
      imageUrl: "https://i.imgur.com/MJQpOEM.png",
      type: "Versus",
      description:
        "If Confidence + Social Skills player > opponent, lose -40 Stress. Gain +10 Social Skills. If Confidence + Social Skills < less than opponent lose -10 Recognition, -20 Confidence, -20 Social Skills, Gain +30 Stress.",
      flavourText:
        "Look at that subtle off-white coloring. The tasteful thickness of it. Oh, my God. It even has a watermark.",
    },
    {
      id: 14,
      name: "Act Annoyed",
      rarity: 1,
      imageUrl: "https://i.imgur.com/DIGE3Pt.png",
      type: "Instant",
      description:
        " +3 Recognition for two turns, +20 Stress +20 Confidence,-10 Social Skills",
      flavourText:
        "Yeah, when you look annoyed all the time, people think that you're busy.",
    },
    {
      id: 15,
      name: "Duvet Day",
      rarity: 1,
      imageUrl: "https://i.imgur.com/NrPZVum.png",
      type: "Instant",
      description:
        "-5 Recognition -40 Stress +20 Confidence, +10 Creativty, +10 Social Skills",
      flavourText: "BEEP.BEEP.BEEP.BEEP",
    },
    {
      id: 16,
      name: "Forget-Me-Know",
      rarity: 1,
      imageUrl: "https://i.imgur.com/micCdBg.png",
      type: "Instant",
      description:
        "Last card played effects reversed: -20 Stress, -10 Social Skills, 10 Confidence",
      flavourText: "Sssshhhh. Shhhhh. There now, its ok go to sleep",
    },
    {
      id: 17,
      name: "Voodoo DOLL",
      rarity: 1,
      imageUrl: "https://i.imgur.com/dn7iJnU.png",
      type: "Standard",
      description: "-3 Recognition, -5 All Base Skills, + 5 Stress",
      flavourText:
        "I can feel something hanging over me, like some dark force that makes me want to not recycle",
    },
    {
      id: 18,
      name: "Accidental Nazi",
      rarity: 4,
      imageUrl: "https://i.imgur.com/ppYAWOg.png",
      type: "Standard",
      description:
        "-5 Recognition, -10 Social Skills, +10 Confidence, +10 Work Ethic +10 Stress",
      flavourText: "I hear you’re a racist now",
    },
    {
      id: 19,
      name: "Pan Pipe Dreams",
      rarity: 1,
      imageUrl: "https://i.imgur.com/97Dlg7n.png",
      type: "Instant",
      description: "-50 Stress, -15 Work Ethic, -10 Social Skills",
      flavourText: "The soothing sounds of the Andes-but in the office",
    },
    {
      id: 20,
      name: "Elephant in the room",
      rarity: 1,
      imageUrl: "https://i.imgur.com/KgSOIk1.png",
      type: "Standard",
      description: "-3 Recognition for 2 turns,  +10 Stress",
      flavourText: "You didn’t get the memo on bring your pet to work",
    },
    {
      id: 21,
      name: "Waste Disposal",
      rarity: 1,
      imageUrl: "https://i.imgur.com/EH5M1Uk.png",
      type: "Standard",
      description: "-3 Recognition, -10 Social Skills, -10 Confidence",
      flavourText:
        "Disregard of the companies green policies is a sackable offence",
    },
    {
      id: 22,
      name: "Defamation email got caught.",
      rarity: 1,
      imageUrl: "https://i.imgur.com/a3Sbv6J.png",
      type: "Standard",
      description:
        "Lose -20 Recognition, Gain +20 Stress, Lose -20 Social Skills",
      flavourText: "Why did I send that e-mail!",
    },
    {
      id: 23,
      name: "Didn’t save your work",
      rarity: 1,
      imageUrl: "https://i.imgur.com/duHwTij.png",
      type: "Standard",
      description: "Gain -5 Recognition, Gain -10 Confidence, Gain +20 Stress",
      flavourText: "Bollocks, I did that again! My whole day is lost!!!!",
    },
    {
      id: 24,
      name: "Watching Inappropriate Content.",
      rarity: 2,
      imageUrl: "https://i.imgur.com/cTd3f1P.png",
      type: "Standard",
      description:
        "Lose -25 Recognition, Lose -10 Social Skills, Gain +20 Stress.",
      flavourText: "Oh man, I knew it would happen someday!",
    },
    {
      id: 25,
      name: "Hey boss, lunch is on me today!",
      rarity: 1,
      imageUrl: "https://i.imgur.com/szIn8TC.png",
      type: "Standard",
      description:
        "Gain +15 Recognition, Gain +10 Social Skills, Lose -10 Stress.",
      flavourText: "Better avail that the boss is in a good mood today",
    },
    {
      id: 26,
      name: "All emails are answered!",
      rarity: 1,
      imageUrl: "https://i.imgur.com/TjSOzDZ.png",
      type: "Standard",
      description:
        "Gain +15 Recognition, Gain  +10 Social Skills, Gain +10 Stress.",
      flavourText:
        "Well done! You answered all your emails and are on top of your job!",
    },
    {
      id: 27,
      name: "Sick Leave",
      rarity: 1,
      imageUrl: "https://i.imgur.com/i1Q62lM.png",
      type: "Instant",
      description: "-30 Stress",
      flavourText:
        "I don’t know if I laugh or cry, but it’s good to be away from the job for a while…!",
    },
    {
      id: 28,
      name: "Office Gossip",
      rarity: 2,
      imageUrl: "https://i.imgur.com/pFBDvqy.png",
      type: "Standard",
      description:
        "Lose -10 Recognition, Lose -10 Social Skills, Lose -10 Work Ethic",
      flavourText:
        "I was so happy to find out Stanley was having an affair got to tell everyone! ",
    },
    {
      id: 29,
      name: "Brought in your famous chili",
      rarity: 2,
      imageUrl: "https://i.imgur.com/DBUC0JI.png",
      type: "Standard",
      description:
        "Gain +10 Recognition, Gain +10 Social Skills, Lose -5 Stress.",
      flavourText: "The trick is to undercook the onions. ",
    },
    {
      id: 30,
      name: "Manage yourself",
      rarity: 1,
      imageUrl: "https://i.imgur.com/ee17MoU.png",
      type: "Standard",
      description:
        "Gain +10 Recognition, Lose -5 Social Skills, Lose -5 Confidence.",
      flavourText:
        "I've been managing my department for several years now and I am not easy to manage",
    },
    {
      id: 31,
      name: "Office Plant Whisperer",
      rarity: 1,
      imageUrl: "https://i.imgur.com/Fuu2fQP.png",
      type: "Standard",
      description: "Gain +5 Recognition, Gain +5 Work Ethic, Lose -5 Stress",
      flavourText:
        "Who knew all plants needed to survive was water and sunlight",
    },
    {
      id: 32,
      name: "Overtime",
      rarity: 2,
      imageUrl: "https://i.imgur.com/x3TZ9kC.png",
      type: "Standard",
      description: "Gain +20 Recognition, Gain +5 Work Ethic, Gain +15 Stress",
      flavourText: "Who needs sleep anyway?",
    },
    {
      id: 33,
      name: "Parking Space Bandit",
      rarity: 1,
      imageUrl: "https://i.imgur.com/5WpxAjs.png",
      type: "Standard",
      description:
        "Lose -10 Recognition, Lose -10 Work Ethic, Lose -20 Social Skills",
      flavourText: "First come, first served, right?",
    },
    {
      id: 34,
      name: "Water Cooler Epiphanies",
      rarity: 1,
      imageUrl: "https://i.imgur.com/vibEDuv.png",
      type: "Standard",
      description:
        "Gain +10 Recognition, Lose -5 Stress, Gain +5 Social Skills",
      flavourText: "I just had the best idea by the water cooler.",
    },
    {
      id: 35,
      name: "Elevator Pitch",
      rarity: 2,
      imageUrl: "https://i.imgur.com/KG9eI0T.png",
      type: "Standard",
      description:
        "Gain +20 Recognition, Gain +10 Work Ethic, Gain +20 Social Skills, Gain +5 Stress",
      flavourText: "Going up? Let me tell you about my project.",
    },
    {
      id: 36,
      name: "PowerPoint Perfection",
      rarity: 1,
      imageUrl: "https://i.imgur.com/Q7NbuZ5.png",
      type: "Standard",
      description:
        "Gain +20 Recognition, Gain +5 Work Ethic, Gain +10 Confidence",
      flavourText: "My PowerPoint game is strong today.",
    },
    {
      id: 37,
      name: "Cubicle Feng Shui",
      rarity: 2,
      imageUrl: "https://i.imgur.com/RWK42X7.png",
      type: "Standard",
      description: "Gain +5 Recognition, Gain +5 Work Ethic, Lose -5 Stress",
      flavourText: "Who said cubicles can't be Zen?",
    },
    {
      id: 38,
      name: "Print Master",
      rarity: 3,
      imageUrl: "https://i.imgur.com/eBP2hjd.png",
      type: "Standard",
      description:
        "Gain +5 Recognition, Gain +5 Work Ethic, Gain +5 Confidence",
      flavourText: "No paper jam stands a chance against me.",
    },
    {
      id: 39,
      name: "Office Supply Thief",
      rarity: 4,
      imageUrl: "https://i.imgur.com/eUbWLMq.png",
      type: "Standard",
      description:
        "Lose -20 Recognition, Lose -5 Work Ethic, Lose -10 Social Skills",
      flavourText: "Hey, have you seen my stapler?",
    },
    {
      id: 40,
      name: "Microwave Mishap",
      rarity: 4,
      imageUrl: "https://i.imgur.com/VN61C4x.png",
      type: "Standard",
      description:
        "Lose -5 Recognition, Gain +10 Stress, Lose -5 Social Skills, Lose -5 Confidence",
      flavourText: "So, maybe I shouldn't have microwaved that.",
    },
    {
      id: 41,
      name: "Awkward Handshake",
      rarity: 2,
      imageUrl: "https://i.imgur.com/K6oHtme.png",
      type: "Standard",
      description:
        "Lose -10 Recognition, Lose -10 Confidence, Lose -15 Social Skills",
      flavourText: "Do I go for the fist bump or the handshake?",
    },
    {
      id: 42,
      name: "Mass Email Mishap",
      rarity: 2,
      imageUrl: "https://i.imgur.com/U26NrsD.png",
      type: "Standard",
      description:
        "Lose -20 Recognition, Lose -10 Social Skills, Gain +10 Stress, Lose -5 Work Ethic",
      flavourText: "The entire office didn't need to know that.",
    },
    {
      id: 43,
      name: "New Look",
      rarity: 4,
      imageUrl: "https://i.imgur.com/gDTKnsd.png",
      type: "Standard",
      description: "Gain +20 Recognition, Gain +10 Stress.",
      flavourText: "Such style, Such grace, who knew.",
    },
    {
      id: 44,
      name: "Office Quiz Showdown",
      rarity: 3,
      imageUrl: "https://i.imgur.com/EU5fFgQ.png",
      type: "Versus",
      description:
        "Whomever has the higher intelligence level. Winner gains +20 Recognition. ",
      flavourText: "Put your knowledge to the test.",
    },
    {
      id: 45,
      name: "Head Office Visit",
      rarity: 2,
      imageUrl: "https://i.imgur.com/YkhGcvo.png",
      type: "Skill Check",
      description:
        "Based on Confidence. If Confidence is above 120, gain +10 Recognition for 2 turns. If below, lose -10 Recognition.",
      flavourText: "Look busy, it's head office.",
    },
    {
      id: 46,
      name: "Sticky Note Battle",
      rarity: 1,
      imageUrl: "https://i.imgur.com/zDvrJZT.png",
      type: "Versus",
      description:
        "Passive-aggressively battle your opponent with sticky notes. Based on Work Ethic. If a player has a higher Work Ethic, they gain +10 Recognition; if lower, they lose -10 Recognition.",
      flavourText: "What is this.",
    },
    {
      id: 47,
      name: "Bloatware Sabotage",
      rarity: 2,
      imageUrl: "https://i.imgur.com/EkjcnXc.png",
      type: "Skill Check",
      description:
        "Sabotage your opponent's workflow by installing bloatware on their PC. Requires 120 Intelligence and Confidence. If higher, reduce the opponent's Recognition by 10; if lower, reduce your own Recognition by 5 for 3 turns.",
      flavourText: "Why is this so slow?",
    },
    {
      id: 48,
      name: "Michael Jackson Dance-Off",
      rarity: 4,
      imageUrl: "https://i.imgur.com/tbLGcfQ.png",
      type: "Versus",
      description:
        " Michael Jackson dance-off at the office party. Player with Higher Confidence +15 Recognition. +10 stress, +10 social skills for both players, -10 work ethic",
      flavourText: "Shamone.",
    },
    {
      id: 49,
      name: "Meeting Miscommunication",
      rarity: 1,
      imageUrl: "https://i.imgur.com/ddaH50V.png",
      type: "Skill Check",
      description:
        "In a meeting, fail to pass on relevant information to the other player. If their Confidence is above 140, they gain 20 Recognition. If lower, they lose 15 Recognition.",
      flavourText: "Communication is key.",
    },
    {
      id: 50,
      name: "Valentine's Day",
      rarity: 2,
      imageUrl: "https://i.imgur.com/9uvB2XI.png",
      type: "Skill Check",
      description:
        "You write your boss a Valentine's card from the opponent. If your Intelligence and Social Skills are both above 120, your opponent gets +10 Recognition and +10 Stress, while you gain a boost of +10 to all stats and -20 Stress. If unsuccessful, you get -5 for all stats and -15 Recognition.",
      flavourText: "I choo, choo, choose you!",
    },
    {
      id: 51,
      name: "Small Talk Football",
      rarity: 4,
      imageUrl: "https://i.imgur.com/oTH5Pss.png",
      type: "versus",
      description:
        "In this challenge, you and your opponent engage in small talk about football. The player with the higher social skills gains +10 to each stat and -10 stress.",
      flavourText:
        "That’s the thing about Arsenal, they always try to walk it in the net.",
    },
    {
      id: 52,
      name: "Office Showdown",
      rarity: 3,
      imageUrl: "https://i.imgur.com/EcYDCZP.png",
      type: "Versus",
      description:
        "Battle for the bonus : Compare work ethic, social skills, and confidence. Winner gains +15 Recognition and +10 Work Ethic. If you lose, lose -10 Recognition and -5 Work Ethic.",
      flavourText: "There can be only one.",
    },
    {
      id: 53,
      name: "The Fugayzi",
      rarity: 2,
      imageUrl: "https://i.imgur.com/L467HO7.png",
      type: "Skill check",
      description:
        "If your Social Skills and Confidence are greater than 130, gain -30 Stress. If not, lose -10 Recognition.",
      flavourText: "It's all a fugayzi, you know what a fugayzi is?",
    },
    {
      id: 54,
      name: "That's not punch",
      rarity: 2,
      imageUrl: "https://i.imgur.com/6o1zznc.png",
      type: "Skill Check",
      description:
        "If stress is over 120 - you drink the punch and lose 10 Recognition. If under, you skip the punch and gain +10 Work Ethic, +10 Social Skills, and +10 Confidence.",
      flavourText: "Somebody didn't read the sign on the bowl.",
    },
    {
      id: 55,
      name: "Loud Humming Coworker",
      rarity: 1,
      imageUrl: "https://i.imgur.com/FIDzrpV.png",
      type: "Versus",
      description:
        "If your stress is higher than your opponent's stress, you lose 10 recognition but your stress is reduced by 20. If your stress is lower, you gain 10 recognition.",
      flavourText: "I'm gonna kill you.",
    },
    {
      id: 56,
      name: "Avoid Ian",
      rarity: 3,
      imageUrl: "https://i.imgur.com/iSTI2rp.png",
      type: "Skill Check",
      description:
        "If confidence is less than 120, Ian reduces -20 work ethic and +20 stress. If confidence is higher, escape and gain +5 in all stats and reduce stress by 10.",
      flavourText:
        "Ian seems nice, until you talk to him for more than 5 minutes.",
    },
    {
      id: 57,
      name: "Affirmations",
      rarity: 2,
      imageUrl: " https://i.imgur.com/HBBUCCv.png",
      type: "Standard",
      description:
        "If work ethic is higher than 120, reduce stress by 20 and boost all other stats by 5. If lower, increase stress by 10 for 3 turns and lose 5 recognition.",
      flavourText:
        "Repeating positive affirmations can have a powerful effect on your mindset.",
    },
    {
      id: 58,
      name: "Friday Bake Off",
      rarity: 1,
      imageUrl: "https://i.imgur.com/NHBHedv.png",
      type: "Versus",
      description:
        "Player with higher Intelligence and Confidence gets +5 Recognition for 3 turns, loser - 5 and + 10 Stress",
      flavourText: "Whose dish will come out on top?",
    },
    {
      id: 59,
      name: "Faux Pas",
      rarity: 1,
      imageUrl: "https://i.imgur.com/VCZnhai.png",
      type: "Skill Check",
      description:
        "If Social Skills and Confidence > Stress Levels and >120, +5 Recognition, +5 Confidence, +5 Social Skills. If under, -5 Recognition, -5 Confidence, -5 Social Skills",
      flavourText:
        "That was not the appropriate thing to say in that situation.",
    },
    {
      id: 60,
      name: "Omlette du fromage",
      rarity: 2,
      imageUrl: "https://i.imgur.com/TROMY27.png",
      type: "Standard",
      description:
        "Everyone thinks you can speak French. If confidence is over 130, boost recognition by 5, social skills by 10, and stress by 10. If under, lose 5 recognition and 10 intelligence.",
      flavourText: " Je ne suis pas travailleur acharné.",
    },
    {
      id: 61,
      name: "Dark Humour",
      rarity: 1,
      imageUrl: "https://i.imgur.com/FTeFT6z.png",
      type: "Skill Check",
      description: "If social skills are above 130, +5 recognition, -10 stress",
      flavourText:
        "Sometimes, laughter is the best medicine...even if it's a little twisted.",
    },
    {
      id: 62,
      name: "Pictures of Your Dog",
      rarity: 1,
      imageUrl: "https://i.imgur.com/O5Qye13.png",
      type: "Standard",
      description:
        "If Social Skills are less than 140, lose -5 all stats, +10 stress, -5 recognition. If higher, gain +10 recognition.",
      flavourText: "Wow, what a cute dog!",
    },
    {
      id: 63,
      name: "Extra Hours",
      rarity: 2,
      type: "Standard",
      imageUrl: "https://i.imgur.com/yk9WpQ1.png",
      type: "Versus",
      description:
        "If your work ethic is higher than your opponent's, gain +10 Work Ethic, +20 Stress, +10 Recognition, but lose -5 in all other skills. If lower, lose -10 Work Ethic, +5 Recognition, but gain -20 Stress and +5 in all other skills.",
      flavourText: "Another day, another dollar.",
    },
    {
      id: 64,
      name: "Too Political",
      rarity: 2,
      imageUrl: "https://i.imgur.com/57hXuE2.png",
      type: "Standard",
      description:
        "If intelligence is less than 130, you lose -5 recognition, -5 intelligence, -5 social skills. If higher, +5 recognition, +5 intelligence, +5 social skills.",
      flavourText: "Let's stick to talking about the weather.",
    },
    {
      id: 65,
      name: "Happy Birthday",
      rarity: 1,
      imageUrl: "https://i.imgur.com/r94yFSP.png",
      type: "Standard",
      description: "+5 boost to confidence, social skills, recognition",
      flavourText: "Another year wiser!",
    },
    {
      id: 66,
      name: "Conspiracy Theorist",
      rarity: 1,
      imageUrl: "https://i.imgur.com/uDUCGDh.png",
      type: "Standard",
      description: "-5 Recognition, -5 Intelligence, +5 Confidence, -5 Stress",
      flavourText: "Chemtrails bro.",
    },
    {
      id: 67,
      name: "Yoga Session",
      rarity: 3,
      imageUrl: "https://i.imgur.com/uAaDaxx.png",
      type: "Standard",
      description:
        "-20 stress, +5 boost to social skills, confidence, intelligence, work ethic",
      flavourText: "Find your inner peace and productivity.",
    },
    {
      id: 68,
      name: "Fake Flu",
      rarity: 3,
      imageUrl: "https://i.imgur.com/6Hg3owJ.png",
      type: "Standard",
      description:
        "Call in sick, -10 Work Ethic, -5 Recognition, -20 Stress, +5 Other Skills",
      flavourText: "Sometimes a mental health day is just what you need.",
    },
    {
      id: 69,
      name: "Smelling Good",
      rarity: 1,
      imageUrl: "https://i.imgur.com/0q6cJgC.png",
      type: "Standard",
      description: "All stats are boosted by 5 (excluding stress)",
      flavourText: "When you look good and smell good, you feel good.",
    },
    {
      id: 70,
      name: "IT Specialist",
      rarity: 1,
      imageUrl: "https://i.imgur.com/PxcYF9N.png",
      type: "Skill Check",
      description:
        "Turn it off and turn it back on. If intelligence is over 120, boost all stats by 5 and increase stress by 10.",
      flavourText: "Have you tried turning it off and on again?",
    },
  ],
};

export default CardData;
