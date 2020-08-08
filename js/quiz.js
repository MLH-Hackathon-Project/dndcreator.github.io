var character = {
    name: "",
    class: "",
    race: "",
    armour: 0,
    background: "",
    strScore: 0,
    strMod: 0,
    strThrow: 0,
    dexScore: 0,
    dexMod: 0,
    dexThrow: 0,
    conScore: 0,
    conMod: 0,
    conThrow: 0,
    intScore: 0,
    intMod: 0,
    intThrow: 0,
    wisScore: 0,
    wisMod: 0,
    wisThrow: 0,
    chaScore: 0,
    chaMod: 0,
    chaThrow: 0,
    personality: "",
    ideals: "",
    bonds: "",
    flaws: "",
    equipment: "",
    tools: "",
    features: "",
    langcount: 0,
    lang: "",
    acroProf: 0,
    acroScore: 0,
    animProf: 0,
    animScore: 0,
    arcaProf: 0,
    arcaScore: 0,
    athlProf: 0,
    athlScore: 0,
    decProf: 0,
    decScore: 0,
    hisProf: 0,
    hisScore: 0,
    insProf: 0,
    insScore: 0,
    intiProf: 0,
    intiScore: 0,
    invProf: 0,
    invScore: 0,
    medProf: 0,
    medScore: 0,
    natProf: 0,
    natScore: 0,
    percProf: 0,
    percScore: 0,
    perfProf: 0,
    perfScore: 0,
    persProf: 0,
    persScore: 0,
    relProf: 0,
    relScore: 0,
    sleiProf: 0,
    sleiScore: 0,
    steProf: 0,
    steScore: 0,
    survProf: 0,
    survScore: 0,

}

var backgrounds = [{
    //Acolyte
    backgroundName: "Acolyte",
    insProf: 1,
    relProf: 1,
    equipment:" A holy symbol (a gift to you when you entered the priesthood), a prayer book or prayer wheel, 5 sticks of incense, vestments, a set of common clothes, and a belt pouch containing 15 gp",
    langcount: 2,
    traits: [
        "I idolize a particular hero of my faith, and constantly refer to that person’s deeds and example.",
        "I can find common ground between the fiercest enemies, empathizing with them and always working toward peace.",
        "I see omens in every event and action. The gods try to speak to us, we just need to listen.",
        "Nothing can shake my optimistic attitude.",
        "I quote (or misquote) sacred texts and proverbs in almost every situation.",
        "I am tolerant (or intolerant) of other faiths and respect (or condemn) the worship of other gods.",                
        "I’ve enjoyed fine food, drink, and high society among my temple’s elite. Rough living grates on me.",
        "I’ve spent so long in the temple that I have little practical experience dealing with people in the outside world."
    ],
    ideals: [
        "Tradition. The ancient traditions of worship and sacrifice must be preserved and upheld. (Lawful)",
        "Charity. I always try to help those in need, no matter what the personal cost. (Good) find common ground between the fiercest enemies, empathizing with them and always working toward peace.",
        "Change. We must help bring about the changes the gods are constantly working in the world. (Chaotic)",
        "Power. I hope to one day rise to the top of my faith’s religious hierarchy. (Lawful)",
        "Faith. I trust that my deity will guide my actions. I have faith that if I work hard, things will go well. (Lawful)",
        "Aspiration. I seek to prove myself worthy of my god’s favor by matching my actions against his or her teachings. (Any)"
    ],
    bonds:[
        "I would die to recover an ancient relic of my faith that was lost long ago.",
        "I will someday get revenge on the corrupt temple hierarchy who branded me a heretic.",
        "I owe my life to the priest who took me in when my parents died.",
        "Everything I do is for the common people.",
        "I will do anything to protect the temple where I served.",
        "I seek to preserve a sacred text that my enemies consider heretical and seek to destroy."
    ],
    flaws:[
        "I judge others harshly, and myself even more severely.",
        "I put too much trust in those who wield power within my temple’s hierarchy.",
        "My piety sometimes leads me to blindly trust those that profess faith in my god.",
        "I am inflexible in my thinking.",
        "I am suspicious of strangers and expect the worst of them.",
        "Once I pick a goal, I become obsessed with it to the detriment of everything else in my life."
    ]


}, {
	//Noble
    backgroundName: "Noble",
    hisProf: 1,
    percProf: 1,
    tools: "One type of gaming set",
    equipment: "A set of fine clothes, a signet ring, a scroll of pedigree, and a purse containing 25 gp",
    langcount: 1,
    traits: ["My eloquent flattery makes everyone I talk to feel like the most wonderful and important person in the world.","The common folk love me for my kindness and generosity.","No one could doubt by looking at my regal bearing that I am a cut above the unwashed masses.","I take great pains to always look my best and follow the latest fashions.","I don't like to get my hands dirty, and I won't be caught dead in unsuitable accommodations.","Despite my noble birth, I do not place myself above other folk. We all have the same blood.","My favor, once lost, is lost forever.","If you do me an injury, I will crush you, ruin your name, and salt your fields."],
    ideals: ["Respect. Respect is due to me because of my position, but all people regardless of station deserve to be treated with dignity. (Good)","Responsibility. It is my duty to respect the authority of those above me, just as those below me must respect mine. (Lawful)","Independence. I must prove that I can handle myself without coddling from my family. (Chaotic)","Power. If I can attain more power, no one will tell me what to do. (Evil)","Family. Blood runs thicker than water. (Any)","Noble Obligation. It is my duty to protect and care for the people beneath me. (Good)"],
    bonds:["I will face any challenge to win the approval of my family.","My house's alliance with another noble family must be sustained at all costs.","Nothing is more important than the other members of my family.","I am in love with the heir of a family that my family despises.","My loyalty to my sovereign is unwavering.","The common folk must see me as a hero of the people."],
    flaws:["I secretly believe that everyone is beneath me.","I hide a truly scandalous secret that could ruin my family forever.","I too often hear veiled insults and threats in every word addressed to me, and I'm quick to anger.","I have an insatiable desire for carnal pleasures.","In fact, the world does revolve around me.","By my words and actions, I often bring shame to my family."]

}, {
	//Sailor
    backgroundName: "Sailor",
    athlProf: 1,
    percProf: 1,
    tools: "Navigator's tools, vehicles (water)",
    equipment: "A belaying pin (club), silk rope (50 feet), a lucky charm such as a rabbit foot or a small stone with a hole in the center (or you may roll for a random trinket on the Trinkets table in chapter 5), a set of common clothes, and a belt pouch containing 10 gp",
    traits: ["My friends know they can rely on me, no matter what.","I work hard so that I can play hard when the work is done.","I enjoy sailing into new ports and making new friends over a flagon of ale.","I stretch the truth for the sake of a good story.","To me, a tavern brawl is a nice way to get to know a new city.","I never pass up a friendly wager.","My language is as foul as an otyugh nest.","I like a job well done, especially if I can convince someone else to do it."],
    ideals: ["Respect. The thing that keeps a ship together is mutual respect between captain and crew. (Good)","Fairness. We all do the work, so we all share in the rewards. (Lawful)","Freedom. The sea is freedom—the freedom to go anywhere and do anything. (Chaotic)","Mastery. I'm a predator, and the other ships on the sea are my prey. (Evil)","People. I'm committed to my crewmates, not to ideals. (Neutral)","Aspiration. Someday, I'll own my own ship and chart my own destiny. (Any)"],
    bonds:["I'm loyal to my captain first, everything else second.","The ship is most important—crewmates and captains come and go.","I'll always remember my first ship.","In a harbor town, I have a paramour whose eyes nearly stole me from the sea.","I was cheated out of my fair share of the profits, and I want to get my due.","Ruthless pirates murdered my captain and crewmates, plundered our ship, and left me to die. Vengeance will be mine."],
    flaws:["I follow orders, even if I think they're wrong.","I'll say anything to avoid having to do extra work.","Once someone questions my courage, I never back down no matter how dangerous the situation.","Once I start drinking, it's hard for me to stop.","I can't help but pocket loose coins and other trinkets I come across.","My pride will probably lead to my destruction."]

}, {
	//Soldier
    backgroundName: "Soldier",
    athlProf: 1,
    intiProf: 1,
    tools: "One type of gaming set, vehicles (land)",
    equipment: "An insignia of rank, a trophy taken from a fallen enemy (a dagger, broken blade, or piece of a banner), a bone dice set or playing card set, a set of common clothes, and a belt pouch containing 10 gp",
    traits: ["I'm always polite and respectful.","I'm haunted by memories of war. I can't get the images of violence out of my mind.","I've lost too many friends, and I'm slow to make new ones.","I'm full of inspiring and cautionary tales from my military experience relevant to almost every combat situation.","I can stare down a hell hound without flinching.","I enjoy being strong and like breaking things.","I have a crude sense of humor.","I face problems head-on. A simple, direct solution is the best path to success."],
    ideals: ["Greater Good. Our lot is to lay down our lives in defense of others. (Good)","Responsibility. I do what I must and obey just authority. (Lawful)","Independence. When people follow orders blindly, they embrace a kind of tyranny. (Chaotic)","Might. In life as in war, the stronger force wins. (Evil)","Live and Let Live. Ideals aren't worth killing over or going to war for. (Neutral)","Nation. My city, nation, or people are all that matter. (Any)"],
    bonds:["I would still lay down my life for the people I served with.","Someone saved my life on the battlefield. To this day, I will never leave a friend behind.","My honor is my life.","I'll never forget the crushing defeat my company suffered or the enemies who dealt it.","Those who fight beside me are those worth dying for.","I fight for those who cannot fight for themselves."],
    flaws:["The monstrous enemy we faced in battle still leaves me quivering with fear.","I have little respect for anyone who is not a proven warrior.","I made a terrible mistake in battle that cost many lives—and I would do anything to keep that mistake secret.","My hatred of my enemies is blinding and unreasoning.","I obey the law, even if the law causes misery.","I'd rather eat my armor than admit when I'm wrong."],
    specilization: ["Officer","Scout","Infantry","Cavalry","Healer","Quartermaster","Standard-bearer","Support staff (cook, blacksmith, or the like)"]

}, {
	//Guild Artisan
    backgroundName: "Guild Artisan",
    insProf: 1,
    persProf: 1,
    tools: "One type of artisan's tools",
    equipment: "A set of artisan's tools (one of your choice), a letter of introduction from your guild, a set of traveler's clothes, and a belt pouch containing 15 gp",
    traits: ["I believe that anything worth doing is worth doing right. I can't help it—I'm a perfectionist.","I'm a snob who looks down on those who can't appreciate fine art.","I always want to know how things work and what makes people tick.","I'm full of witty aphorisms and have a proverb for every occasion.","I'm rude to people who lack my commitment to hard work and fair play.","I like to talk at length about my profession.","I don't part with my money easily and will haggle tirelessly to get the best deal possible.","I'm well known for my work, and I want to make sure everyone appreciates it. I'm always taken aback when people haven't heard of me."],
    ideals: ["Community. It is the duty of all civilized people to strengthen the bonds of community and the security of civilization. (Lawful)","Generosity. My talents were given to me so that I could use them to benefit the world. (Good)","Freedom. Everyone should be free to pursue his or her own livelihood. (Chaotic)","Greed. I'm only in it for the money. (Evil)","People. I'm committed to the people I care about, not to ideals. (Neutral)","Aspiration. I work hard to be the best there is at my craft. (Any)"],
    bonds:["The workshop where I learned my trade is the most important place in the world to me.","I created a great work for someone, and then found them unworthy to receive it. I'm still looking for someone worthy.","I owe my guild a great debt for forging me into the person I am today.","I pursue wealth to secure someone's love.","One day I will return to my guild and prove that I am the greatest artisan of them all.","I will get revenge on the evil forces that destroyed my place of business and ruined my livelihood."],
    flaws:["I'll do anything to get my hands on something rare or priceless.","I'm quick to assume that someone is trying to cheat me.","No one must ever learn that I once stole money from guild coffers.","I'm never satisfied with what I have—I always want more.","I would kill to acquire a noble title.","I'm horribly jealous of anyone who can outshine my handiwork. Everywhere I go, I'm surrounded by rivals."],
    specilization: ["Alchemists and apothecaries","Armorers, locksmiths, and finesmiths","Brewers, distillers, and vintners","Calligraphers, scribes, and scriveners","Carpenters, roofers, and plasterers","Cartographers, surveyors, and chart-makers","Cobblers and shoemakers","Cooks and bakers","Glassblowers and glaziers","Jewelers and gemcutters","Leatherworkers, skinners, and tanners","Masons and stonecutters","Painters, limners, and sign-makers","Potters and tile-makers","Shipwrights and sail-makers","Smiths and metal-forgers","Tinkers, pewterers, and casters","Wagon-makers and wheelwrights","Weavers and dyers","Woodcarvers, coopers, and bowyers"]

}, {
	//Entertainer
    backgroundName: "Entertainer",
    acroProf: 1,
    perfProf: 1,
    tools: "Disguise kit, one type of musical instrument",
    equipment: "A musical instrument (one of your choice), the favor of an admirer (love letter, lock of hair, or trinket), costume clothes, and a belt pouch containing 15 gp",
    traits: ["I know a story relevant to almost every situation.","Whenever I come to a new place, I collect local rumors and spread gossip.","I'm a hopeless romantic, always searching for that 'special someone'.","Nobody stays angry at me or around me for long, since I can defuse any amount of tension.","I love a good insult, even one directed at me.","I get bitter if I'm not the center of attention.","I'll settle for nothing less than perfection.","I change my mood or my mind as quickly as I change key in a song."],
    ideals: ["Beauty. When I perform, I make the world better than it was. (Good)","Tradition. The stories, legends, and songs of the past must never be forgotten, for they teach us who we are. (Lawful)","Creativity. The world is in need of new ideas and bold action. (Chaotic)","Greed. I'm only in it for the money and fame. (Evil)","People. I like seeing the smiles on people's faces when I perform. That's all that matters. (Neutral)","Honesty. Art should reflect the soul; it should come from within and reveal who we really are. (Any)"],
    bonds:["My instrument is my most treasured possession, and it reminds me of someone I love.","Someone stole my precious instrument, and someday I'll get it back.","I want to be famous, whatever it takes.","I idolize a hero of the old tales and measure my deeds against that person's.","I will do anything to prove myself superior to my hated rival.","I would do anything for the other members of my old troupe."],
    flaws:["I'll do anything to win fame and renown.","I'm a sucker for a pretty face.","A scandal prevents me from ever going home again. That kind of trouble seems to follow me around.","I once satirized a noble who still wants my head. It was a mistake that I will likely repeat.","I have trouble keeping my true feelings hidden. My sharp tongue lands me in trouble.","Despite my best efforts, I am unreliable to my friends."],
    specilization: ["Actor","Dancer","Fire-eater","Jester","Juggler","Instrumentalist","Poet","Singer","Storyteller","Tumbler"]

}, {
	//Entertainer
    backgroundName: "Entertainer",
    acroProf: 1,
    perfProf: 1,
    tools: "Disguise kit, one type of musical instrument",
    equipment: "A musical instrument (one of your choice), the favor of an admirer (love letter, lock of hair, or trinket), costume clothes, and a belt pouch containing 15 gp",
    traits: ["I know a story relevant to almost every situation.","Whenever I come to a new place, I collect local rumors and spread gossip.","I'm a hopeless romantic, always searching for that 'special someone'.","Nobody stays angry at me or around me for long, since I can defuse any amount of tension.","I love a good insult, even one directed at me.","I get bitter if I'm not the center of attention.","I'll settle for nothing less than perfection.","I change my mood or my mind as quickly as I change key in a song."],
    ideals: ["Beauty. When I perform, I make the world better than it was. (Good)","Tradition. The stories, legends, and songs of the past must never be forgotten, for they teach us who we are. (Lawful)","Creativity. The world is in need of new ideas and bold action. (Chaotic)","Greed. I'm only in it for the money and fame. (Evil)","People. I like seeing the smiles on people's faces when I perform. That's all that matters. (Neutral)","Honesty. Art should reflect the soul; it should come from within and reveal who we really are. (Any)"],
    bonds:["My instrument is my most treasured possession, and it reminds me of someone I love.","Someone stole my precious instrument, and someday I'll get it back.","I want to be famous, whatever it takes.","I idolize a hero of the old tales and measure my deeds against that person's.","I will do anything to prove myself superior to my hated rival.","I would do anything for the other members of my old troupe."],
    flaws:["I'll do anything to win fame and renown.","I'm a sucker for a pretty face.","A scandal prevents me from ever going home again. That kind of trouble seems to follow me around.","I once satirized a noble who still wants my head. It was a mistake that I will likely repeat.","I have trouble keeping my true feelings hidden. My sharp tongue lands me in trouble.","Despite my best efforts, I am unreliable to my friends."],
    specilization: ["Actor","Dancer","Fire-eater","Jester","Juggler","Instrumentalist","Poet","Singer","Storyteller","Tumbler"]

},

];

var questions = [{
    //Familiar or Unusual
	"choices": [
		{
			"label": "Familiar",
			"path": 1
		},
		{
			"label": "Unusual",
			"path": 2
		},
	]
}, {
	//Familiar
	"choices": [
		{
			"label": "Follow",
			"path": 3
		},
		{
			"label": "Adventure",
			"path": 4
		},
		{
			"label": "Create",
			"path": 5
		},
	]
}, {
	//Unusual
	"choices": [
		{
			"label": "Help",
			"path": 16
		},
		{
			"label": "Con",
			"path": 7
		},
		{
			"label": "Comprehend",
			"path": 8
        },
        {
			"label": "Seek",
			"path": 9
		},
	]
}, {
	//Follow
	"choices": [
		{
			"label": "Gods",
			"path": 10
		},
		{
			"label": "Gold",
			"path": 11
		},
	]
}, {
	//Adventure
	"choices": [
		{
			"label": "Sea",
			"path": 12
		},
		{
			"label": "Soil",
			"path": 13
		},
	]
}, {
	//Create
	"choices": [
		{
			"label": "Limited",
			"path": 14
		},
		{
			"label": "Unlimited",
			"path": 15
		},
	]
}, {
	//Help
	"choices": [
		{
			"label": "Ugly",
			"path": 4
		},
		{
			"label": "Uglier",
			"path": 4
		},
		{
			"label": "Ugliest",
			"path": 4
		},
	]
}, {
	//Con
	"choices": [
		{
			"label": "Steal",
			"path": 17
		},
		{
			"label": "Cheat",
			"path": 18
		},
	]
}, {
	//Comprehend
	"choices": [
		{
			"label": "Study",
			"path": 19
		},
		{
			"label": "Explore",
			"path": 20
		},
	]
}, {
	//Seek
	"choices": [
		{
			"label": "Solitude",
			"path": 21
		},
		{
			"label": "Comaraderie",
			"path": 22
		},
	]
}, {
	//Gods - Traits 
	"choices": [ 
		{
			"label": "Venerate",
            "path": 11,
            "slot": 1
		},
		{
			"label": "Reconcile",
            "path": 11,
            "slot": 2
        },
        {
			"label": "Listen",
            "path": 11,
            "slot": 3
        },
        {
			"label": "Love",
            "path": 11,
            "slot": 4
        },
	]
}, {
	//Gods - Traits 2
	"choices": [ 
		{
			"label": "Recall",
            "path": 12,
            "slot": 5
        },
        {
			"label": "Drink",
            "path": 12,
            "slot": 6
        },
        {
			"label": "Remain",
            "path": 12,
            "slot": 7
        },
        {
			"label": "Confine",
            "path": 12,
            "slot": 8
		},
	]
}, {
	//Gods Ideals
	"choices": [
		{
			"label": "Tradition",
            "path": 13,
            "slot": 1
		},
		{
			"label": "Charity",
            "path": 13,
            "slot": 2
        },
        {
			"label": "Change",
            "path": 13,
            "slot": 3
        },
        {
			"label": "Power",
            "path": 13,
            "slot": 4
        },
        {
			"label": "Faith",
            "path": 13,
            "slot": 5
        },
        {
			"label": "Aspiration",
            "path": 13,
            "slot": 6
        },
	]
}, {
	//Gods Bonds
	"choices": [
		{
			"label": "Vindcate",
            "path": 14,
            "slot": 1
		},
		{
			"label": "Compensate",
            "path": 14,
            "slot": 3
        },
        {
			"label": "Protect",
            "path": 14,
            "slot": 5
        },
	]
}, {
	//Gods Flaws
	"choices": [
		{
			"label": "Trust",
            "path": 15,
            "slot": 1
		},
		{
			"label": "Judge",
            "path": 15,
            "slot": 2
        },
        {
			"label": "Fixate",
            "path": 15,
            "slot": 3
        },
	]
},


];

var currentQuestion = 0,
    quizComplete = false;

$(document).ready(function () {

	updateQuestion();

});
//separating next Question
function nextQuestion() {
if (!quizComplete) {

		$('.choice').on('click', function() {

          value = $(this).attr('value');
          label = $(this).attr('choice');
          slot = $(this).attr('slot');
          console.log(label);
          console.log(value);
          console.log(slot);
            if(value == 10) {
                character.background = backgrounds[0].backgroundName;
                character.insProf = backgrounds[0].insPrf;
                character.relProf = backgrounds[0].relPrf;
                character.equipment = backgrounds[0].equipment;
                character.relProf = backgrounds[0].langcount;   
            } else if(value == 11){
                character.personality = backgrounds[0].traits[slot-1];
                console.log(character.personality);
            } else if(value == 12){
                character.ideals = backgrounds[0].ideals[slot-1];
                console.log(character.ideals);
            } else if(value == 13){
                character.bonds = backgrounds[0].bonds[Math.random() + (slot-1)];
                console.log(character.bonds);
            } else if(value == 14){
                character.flaws = backgrounds[0].flaws[Math.random() + (slot-1)];
                console.log(character.flaws);
                quizComplete = true;
                location.href = '/http://your.url.here'
            }
          
			currentQuestion = value;
		
			if (currentQuestion < questions.length) {
				updateQuestion();
			} else {
        quizComplete = true;
      }

		});
    
	}
}

function updateQuestion() {

	var question = questions[currentQuestion];
	//var questionText = $(document).find(".container > .question");
	var choiceList = $(document).find(".container > .choices");
	var numChoices = questions[currentQuestion].choices.length;

	// Set question text
	//$(questionText).text(question);

	// Clear current choices and update with new ones
	$(".choice").remove();

    var choice, path;
    
	for (i = 0; i < numChoices; i++) {
		choice = questions[currentQuestion].choices[i].label;
        path = questions[currentQuestion].choices[i].path;
        slot = questions[currentQuestion].choices[i].slot;
		$('<div class="choice" value=' + path + ' choice='+ choice +' slot='+slot+'>' + choice + '</div>').appendTo(choiceList);
	}
  //It needs to be called every update
  nextQuestion();
}