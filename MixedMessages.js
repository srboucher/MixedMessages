const messages = {
  'bad jokes': [
    "I bought some shoes from a drug dealer.  I don't know what he laced them with, but I was tripping all day!",
    'What do you call a bear without any teeth?  A gummy bear!',
    'Why did the golfer change his pants?  Because he got a hole in one!',
    'How do you make holy water?  You boil the hell out of it.',
    'What do you get when you cross a snowman with a vampire?  Frostbite.',
    "Why don't they play poker in the jungle?  Too many cheetahs!",
    'What do you call someone with no body and no nose?  Nobody knows!',
    'How does Moses make his tea?  Hebrews it!',
    'What did the janitor say when he jumped out of the closet?  Supplies!',
    "Why shouldn't you write with a broken pencil?  Because it's pointless!",
    'What did the buffalo say when his son left?  Bison!',
    "Sometimes I tuck my knees into my chest and lean forward.  That's just how I roll.",
    "What do you call a man who can't stand?  Neil.",
    'Did you hear about the two thieves who stole a calendar?  They each got six months.',
    'I used to hate facial hair, but then it grew on me.',
    'Why did Adele cross the road?  To say hello from the other side.',
    "Why did Snoop Dogg need an umbrella?  Fo' Drizzle.",
    "What's Forrest Gump's password?  1forrest1",
    'How many bugs do you need to rent out an apartment?  Tenants.',
    "What do you call cheese that isn't yours?  Nacho Cheese.",
    'Two cannibals are eating a clown. One says to the other: Does this taste funny to you?',
    'What do you get from a pampered cow?  Spoiled milk!',
    "What do you call a boomerang that doesn't come back?  A stick",
  ],
  'demotivational quotes': [
    'Everyone has a purpose in life. Perhaps yours is watching television',
    "Life hack: you can't do anything wrong if you don't do anything at all",
    'The meaning of life is to find your gift. So good luck with that.',
    'When life knocks you down, stay there and take a nap',
    'Today is the first day of the rest of your life. But so was yesterday, and look how that turned out',
    'It could be that your purpose in life is to serve as a warning to others',
    "Try hard and don't worry if you fail because everyone expected that",
    'The road to success is always under construction',
    'You can have results or excuses. Excuses it is',
    'They say money talks. But, all mine says is goodbye',
    'The best things in life are actually really expensive',
    "It's true hard work never killed anybody, but I figure, why take the chance?",
    "There's always someone on Youtube that can do it better than you",
    'Meetings ??? None of us is as dumb as all of us',
    'Everybody sucks at something',
    'Dream big. Then settle',
    'My five-year plan is to watch everything on Netflix',
    "Eat that cake because it's somebody's birthday somewhere",
    "If you're happy and you know it no one cares",
    'The two most common elements in the universe are hydrogen and stupidity',
    "The only reason some people get lost in thought is that it's an unfamiliar territory",
  ],
  'dad jokes': [
    'Which bear is the most condescending?  A pan-duh',
    "What's brown and sticky?  A stick",
    'Want to know why nurses like red crayons?  Sometimes they have to draw blood',
    'What would the Terminator be called in his retirement?  The Exterminator',
    'My wife asked me to go get 6 cans of Sprite from the grocery store.  I realized when I got home that I had picked 7 up',
    'Why do bees have sticky hair? Because they use a honeycomb',
    'Why do some couples go to the gym?  Because they want their relationship to work out',
    "Did you hear about the kidnapping at school?  It's fine, he woke up",
    'When does a joke become a ???dad joke???? When it becomes apparent',
    'Why is Peter Pan always flying? Because he Neverlands',
    'I used to hate facial hair, but then it grew on me',
    'Why did the coach go to the bank? To get his quarterback',
    "I was going to tell a time-traveling joke, but you guys didn't like it",
    'Why do melons have weddings? Because they cantaloupe',
    "Want to hear a joke about construction? I'm still working on it",
    'What does a house wear?  Address',
    "My wife and I decided we don't want kids.  We will tell them tonight",
  ],
  randomMessage() {
    function randomNum(arr) {
      return Math.floor(Math.random() * arr.length);
    }
    const randBadJoke = this['bad jokes'][randomNum(this["bad jokes"])];
    const randDemotiveQuote = this['demotivational quotes'][randomNum(this["demotivational quotes"])];
    const randDadJoke = this['dad jokes'][randomNum(this["dad jokes"])];

    return `Want to hear a really bad joke?  How about,\n ${randBadJoke}.\n\n Ok maybe something to motivate you for the day!\n ${randDemotiveQuote}.\n Oops!\n\n Well at least this will probably make you laugh,\n ${randDadJoke}`; 
  }
};

console.log(messages.randomMessage());

