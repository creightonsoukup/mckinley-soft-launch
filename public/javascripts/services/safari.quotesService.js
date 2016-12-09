angular.module('MyApp')

  .service('quotesService', function () {

      this.idex
      this.quotes = [{quote: "The things you do for yourself are gone when you are gone, but the things you do for others remain as your legacy.", author: "Kalu Kalu"},
{quote: "Let us always meet each other with smile, for the smile is the beginning of love.", author: "Mother Teresa"},{quote: "Never doubt what a small group of people can do to change the world. It's the only thing that ever has.", author: "Margaret Mead"}, {quote: "Let your dreams be bigger than your fears and your actions be louder than your words.", author: "Unknown"},{quote: "To get something you’ve never had, you must be willing to do something you’ve never done.", author: "Unknown"}, {quote: "The best way to find yourself, is to lose yourself in the service of others.", author: "Unknown"}, {quote: "Every day is a gift, that's why they call it the present.", author: "Unknown"}, {quote: "Kindness is the language which the deaf can hear and the blind can see.", author: "Mark Twain"}, {quote: "May your walls know joy, may every room hold laughter, and every window open to great possibility.", author: "Mary Anne Radmacher"}, {quote: "Let us make one point, that we meet each other with a smile, when it is difficult to smile. Smile at each other, make time for each other in your family.", author: "Mother Teresa"}, {quote: "Every piece of the universe, even the tiniest little snow crystal, matters somehow. I have a place in the pattern, and so do you.", author: "T.A. Barron"}, {quote: "Help others without any reason and give without the expectation of receiving anything in return.", author: "Roy T. Bennett, The Light in the Heart"}, {quote: "I don't think you ever stop giving. I really don't. I think it's an on-going process. And it's not just about being able to write a check. It's being able to touch somebody's life.", author: "Oprah Winfrey"}, {quote: "Kindness in words creates confidence. Kindness in thinking creates profoundness. Kindness in giving creates love.", author: "Lao Tzu"}, {quote: "Blessed is the season which engages the whole world in conspiracy of love.", author: "Hamilton Wright"}, {quote: "The best and most beautiful things in the world cannot be seen or even touched. They must be felt with the heart.", author: "Helen Keller"}, {quote: "Too many people holidays are not voyages of discovery, but a ritual of reassurance.", author: "Philip Andrew Adams"}
]

this.pickRandomQuote = function () {
  this.index = Math.floor(Math.random() * 16) + 1
  return this.quotes[this.index]
}

  })
