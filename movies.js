// Our list
const movies = [
  {
    id: 1,
    title: "The Teachers",
    description: "A team of super intelligent teachers attempt to stop World War III.",
    year: 1993,
    genre: "Sci-Fi",
    poster: "images/theTeachers.jpg",
    tags: ""
  },
  {
    id: 2,
    title: "Inception",
    description: "A thief who steals secrets through dream-sharing technology.",
    year: 2010,
    genre: "Sci-Fi",
    poster: "images/inception.jpg"
  },
  {
    id: 3,
    title: "Interstellar",
    description: "A team of explorers travel through a wormhole in space.",
    year: 2014,
    genre: "Sci-Fi",
    poster: "images/interstellar.jpg"
  },
  {
    id: 4,
    title: "The Dark Knight",
    description: "Batman faces the Joker in Gotham City.",
    year: 2008,
    genre: "Action",
    poster: "images/darkknight.jpg"
  },
  {
    id: 5,
    title: "The Great Gatsby",
    description: "Man falls in love.",
    year: 2013,
    genre: "drama",
    poster: "images/the great gatsby.jpg"
  },
    {
    id: 6,
    title: "Someone like you",
    description: "Dawson searches for his hb sister.",
    year: 2024,
    genre: "romance",
    poster: "images/someonelikeyou.jpg"
  },
  {
    id: 7,
    title: "Five Nights at Freddys",
    description: "security gaurd tries to survive.",
    year: 2023,
    genre: "mystery",
    poster: "images/fivenightsatfreddys.jpg"
  },
  {
    id: 8,
    title: "Halloween",
    description: "Michael myers tries to unalive people.",
    year: 1978,
    genre: "horror",
    poster: "images/halloween.jpg"
  },
  {
    id: 9,
    title: "The Karate Kid",
    description: "Danial tries to win the all valley.",
    year: 1984,
    genre: "drama",
    poster: "images/karatekid.jpg"
  },
  {
    id: 10,
    title: "The Karate Kid 2",
    description: "Danial battles in japan.",
    year: 1986,
    genre: "action",
    poster: "images/karatekid2.jpg"
  },
  {
    id: 11,
    title: "The Karate Kid 3",
    description: "Danial battles in the all valley again but with higher stakes.",
    year: 1989,
    genre: "drama",
    poster: "images/karatekid3.jpg"
  },
  {
    id: 12,
    title: "500 days of summer",
    description: "A hopeless romantic seeks to find love",
    year: 2009, 
    genre: "romance",
    poster: "images/500 days.jpg"
  },
  {
    id: 13,
    title: "Titanic",
    description: "a poor child seeks love in a rich women",
    year: 2009, 
    genre: "romance",
    poster: "images/titanic.jpg"
  },
  {
    id: 14,
    title: "De De Pyaar De 2",
    description: "51-year-old Ashish (Ajay Devgn) and his younger girlfriend Ayesha (Rakul Preet Singh) as they navigate family approval",
    year: 2025,
    genre: "romance",
    poster: "images/de de.jpg"
  },
  {
    id: 15,
    title: "Money Hiest",
    description: "the gang robs a bank for a fellow member",
    year: 2024,
    genre: "action",
    poster: "images/money hiest.jpg"
  },
  {
    id: 16,
    title: "The Notebook",
    description: "The story about a notebook",
    year: 2004,
    genre: "romance",
    poster: "images/notebook.jpg"
  },
  {
    id: 17,
    title: "Fire and Ice",
    description: "a movie about love fire and ice",
    year: 2001,
    genre: "romance",
    poster: "images/FI.jpg"
  },
  {
    id: 18,
    title: "People We meet on vaction",
    description: "love story about falling in love on a cruise",
    year: 2026,
    genre: "romance",
    poster: "images/people we meet.jpg"
  },
  {
    id: 19,
    title: "Love Again",
    description: "two lovers fall in love again",
    year: 2023,
    genre: "romance",
    poster: "images/Love Again.jpg"
  },
  {
    id: 20,
    title: "Nobody",
    description: "Nobody fights to get his property back",
    year: 2021,
    genre: "action",
    poster: "images/nobody.jpg"
  },
  {
    id: 21,
    title: "Nobody 2",
    description: "Nobody goes on vaction and encounters trouble",
    year: 2025,
    genre: "action",
    poster: "images/Nobody 2.jpg"
  },
  {
    id: 22,
    title: "Wraith of Man",
    description: "A man goes after the ones that took some thing from him",
    year: 2021,
    genre: "action",
    poster: "images/Wraith of Man.jpg"
  },
  {
    id: 23,
    title: "Edge of Tomorrow",
    description: "Man goes relives tomorrow to save the world",
    year: 2014,
    genre: "action",
    poster: "images/Edge of Tomorrow.jpg"
  },
  {
    id: 24,
    title: "Good Will Hunting",
    description: "Man teaches another about life",
    year: 1997,
    genre: "Drama",
    poster: "images/Good Will Hunting.jpg"
  },
  {
    id: 25,
    title: "Forest Gump",
    description: "Man deals with life of war",
    year: 1994,
    genre: "Drama",
    poster: "images/.jpg"
  },
  {
    id: 26,
    title: "Meet Joe Black",
    description: "The devil becomes a human to find love",
    year: 1998,
    genre: "Drama",
    poster: "images/Meet Joe Black.jpg"
  },
  {
    id: 27,
    title: "Edward Scissorhands",
    description: "man with scissors for hands lives life",
    year: 1990,
    genre: "Drama",
    poster: "images/Edward Scissorhands.jpg"
  },
  {
    id: 28,
    title: "Jaws",
    description: "a evil shark swims through the deep sea",
    year: 1975,
    genre: "Horror",
    poster: "images/Jaws.jpg"
  },
  {
    id: 29,
    title: "The Texas Chainsaw Massacre",
    description: "man with chainsaw kill people",
    year: 1974,
    genre: "Horror",
    poster: "images/chainsaw massacre.jpg"
  },
  {
    id: 30,
    title: "It",
    description: "clown tries to take kids",
    year: 2017,
    genre: "Horror",
    poster: "images/It.jpg"
  },
  {
    id: 31,
    title: "It 2",
    description: "clown tries to take adults this time",
    year: 2019,
    genre: "Horror",
    poster: "images/It 2.jpg"
  },
  {
    id: 32,
    title: "Scream 7",
    description: "scary man tries to kill people",
    year: 2026,
    genre: "Horror",
    poster: "images/Scream 7.jpg"
  },
  {
    id: 33,
    title: "Annabelle",
    description: "Scary doll tries to scare people",
    year: 2014,
    genre: "Horror",
    poster: "images/annabelle.jpg"
  },
  {
    id: 33,
    title: "Nightmare on Elm Street 2",
    description: "Freddy goes through peoples minds in their sleep",
    year: "placeholder",
    genre: "Horror",
    poster: "images/.jpg"
  },
  {
    id: 34,
    title: "",
    description: "",
    year: "placeholder",
    genre: "Horror",
    poster: "images/.jpg"
  },
  {
    id: 35,
    title: "",
    description: "",
    year: "placeholder",
    genre: "Mystery",
    poster: "images/.jpg"
  },
  {
    id: 36,
    title: "",
    description: "",
    year: "placeholder",
    genre: "Mystery",
    poster: "images/.jpg"
  },
  {
    id: 37,
    title: "",
    description: "",
    year: "placeholder",
    genre: "Mystery",
    poster: "images/.jpg"
  },
  {
    id: 38,
    title: "",
    description: "",
    year: "placeholder",
    genre: "Mystery",
    poster: "images/.jpg"
  },
  {
    id: 39,
    title: "",
    description: "",
    year: "placeholder",
    genre: "Mystery",
    poster: "images/.jpg"
  },
  {
    id: 40,
    title: "",
    description: "",
    year: "placeholder",
    genre: "Mystery",
    poster: "images/.jpg"
  },
  {
    id: 41,
    title: "",
    description: "",
    year: "placeholder",
    genre: "Mystery",
    poster: "images/.jpg"
  },


];