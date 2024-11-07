
const sampleListings = [
  {
      title: "Goa",
      location: "India",
      description: "A tropical paradise known for its stunning beaches and vibrant nightlife.",
      image: "https://unsplash.com/photos/the-sun-is-setting-over-the-ocean-with-a-palm-tree-in-the-foreground-I9qh1Q_tgfU",
      activities: ["Beach hopping", "Water sports", "Nightlife"],
      bestTimeToVisit: "November to February",
      tips: ["Book accommodations in advance during peak season", "Try local seafood delicacies"]
  },
  {
      title: "Andaman and Nicobar Islands",
      location: "India",
      description: "Famous for its pristine beaches, crystal-clear waters, and coral reefs.",
      image: "https://plus.unsplash.com/premium_photo-1705363013491-0ed4a7a4fe99?q=80&w=774&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      activities: ["Snorkeling", "Scuba diving", "Island hopping"],
      bestTimeToVisit: "October to May",
      tips: ["Carry cash as ATMs may be limited", "Respect local customs and marine life"]
  },
  {
      title: "Himachal Pradesh",
      location: "India",
      description: "Renowned for its scenic mountains, trekking routes, and adventure sports.",
      image: "https://plus.unsplash.com/premium_photo-1661963083312-8adde31d9900?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8aGltYWNoYWwlMjBwcmFkZXNofGVufDB8fDB8fHww",
      activities: ["Trekking", "Paragliding", "Camping"],
      bestTimeToVisit: "March to June", // Updated value
      tips: ["Pack warm clothes even in summer", "Hire local guides for trekking"]
  },
  {
      title: "Rajasthan",
      location: "India",
      description: "Known for its royal palaces, historic forts, and vibrant culture.",
      image: "https://unsplash.com/photos/indian-cameleer-camel-driver-bedouin-with-camel-silhouettes-in-sand-dunes-of-thar-desert-on-sunset-caravan-in-rajasthan-travel-tourism-background-safari-adventure-jaisalmer-rajasthan-india-FNSeC1DE4wc",
      activities: ["Camel safari", "Visit forts and palaces", "Cultural festivals"],
      bestTimeToVisit: "October to March",
      tips: ["Stay hydrated and wear sunscreen", "Explore local handicrafts and souvenirs"]
  },
  {
      title: "Kerala",
      location: "India",
      description: "Famous for its backwaters, lush greenery, and unique culture.",
      image: "https://unsplash.com/photos/a-houseboat-sailing-in-alappuzha-backwaters-in-kerala-state-in-india-RPCQYqLBoYE",
      activities: ["Houseboat cruises", "Ayurvedic treatments", "Cultural shows"],
      bestTimeToVisit: "September to March",
      tips: ["Book houseboat stays in advance", "Try local dishes like appam and stew"]
  },
  {
      title: "Uttarakhand",
      location: "India",
      description: "Renowned for its spiritual significance, hill stations, and trekking opportunities.",
      image: "https://unsplash.com/photos/green-trees-and-green-grass-field-during-daytime-lnXFFBFuISo",
      activities: ["Pilgrimage visits", "Trekking", "Nature walks"],
      bestTimeToVisit: "March to June", 
      tips: ["Check weather conditions before trekking", "Respect local traditions and customs"]
  },
  {
      title: "Sikkim",
      location: "India",
      description: "Known for its beautiful landscapes, rich biodiversity, and Buddhist monasteries.",
      image: "https://plus.unsplash.com/premium_photo-1697730418140-064a5b6c2e17?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8c2lra2ltfGVufDB8fDB8fHww",
      activities: ["Visit monasteries", "Trekking", "Bird watching"],
      bestTimeToVisit: "March to May", 
      tips: ["Carry warm clothing throughout the year", "Try local Sikkimese cuisine"]
  },
  {
      title: "Mumbai",
      location: "India",
      description: "A bustling city known for its film industry, beaches, and vibrant culture.",
      image: "https://plus.unsplash.com/premium_photo-1681550097108-187abe10d445?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8bXVtYmFpfGVufDB8fDB8fHww",
      activities: ["Visit film studios", "Explore local markets", "Enjoy nightlife"],
      bestTimeToVisit: "November to February",
      tips: ["Use public transport to avoid traffic", "Explore street food delicacies"]
  },
  {
      title: "Bengaluru",
      location: "India",
      description: "Famous for its gardens, tech scene, and nearby hill stations.",
      image: "https://media.gettyimages.com/id/1382384512/photo/bangalore-or-bengaluru.jpg?b=1&s=612x612&w=0&k=20&c=vgHQrLCAuox0ggArWxnXQnmnmFonEVBnmsUqAixP0Mc=",
      activities: ["Visit tech parks", "Explore gardens", "Local shopping"],
      bestTimeToVisit: "October to February",
      tips: ["Try local filter coffee", "Visit during the weekend for events"]
  },
  {
      title: "Punjab",
      location: "India",
      description: "Known for its rich culture, delicious food, and the Golden Temple.",
      image: "https://unsplash.com/photos/people-walking-near-white-concrete-building-during-daytime-rmvKPryg47I",
      activities: ["Visit the Golden Temple", "Enjoy Punjabi cuisine", "Cultural festivals"],
      bestTimeToVisit: "October to March",
      tips: ["Respect the local customs at religious sites", "Taste the local dishes like butter chicken and sarson da saag"]
     },
    {
      title: "Santorini",
      location: "Greece",
      description: "A picturesque island known for its stunning sunsets, white-washed buildings, and crystal-clear waters.",
      image: "https://unsplash.com/photos/santorini-sunset-view",
      activities: ["Sunset viewing", "Wine tasting", "Boat tours"],
      bestTimeToVisit: "April to October",
      tips: ["Book tours in advance", "Stay hydrated under the sun"]
    },
    {
      title: "Kyoto",
      location: "Japan",
      description: "Renowned for its classical Buddhist temples, gardens, and cherry blossoms.",
      image: "https://unsplash.com/photos/kyoto-temple",
      activities: ["Temple tours", "Cherry blossom viewing", "Tea ceremonies"],
      bestTimeToVisit: "March to May",
      tips: ["Wear comfortable shoes", "Respect temple etiquettes"]
    },
    {
      title: "Machu Picchu",
      location: "Peru",
      description: "An iconic ancient Inca city located in the Andes Mountains.",
      image: "https://unsplash.com/photos/machu-picchu-peru",
      activities: ["Hiking", "Photography", "Historical tours"],
      bestTimeToVisit: "April to October",
      tips: ["Prepare for high altitude", "Book tickets in advance"]
    },
    {
      title: "Paris",
      location: "France",
      description: "The city of love, known for its art, culture, and iconic Eiffel Tower.",
      image: "https://unsplash.com/photos/eiffel-tower",
      activities: ["Museum visits", "Sightseeing", "Gastronomy tours"],
      bestTimeToVisit: "June to August",
      tips: ["Avoid peak hours at tourist spots", "Try local cafes"]
    },
    {
      title: "Cape Town",
      location: "South Africa",
      description: "A vibrant city with stunning coastal views, mountains, and wine regions.",
      image: "https://unsplash.com/photos/cape-town-coast",
      activities: ["Safari tours", "Mountain hiking", "Wine tasting"],
      bestTimeToVisit: "November to March",
      tips: ["Stay sun-protected", "Use reliable transport"]
    },
    {
      title: "Queenstown",
      location: "New Zealand",
      description: "A top destination for adventure sports, surrounded by mountains and lakes.",
      image: "https://unsplash.com/photos/queenstown-lake",
      activities: ["Bungee jumping", "Skiing", "Cruises"],
      bestTimeToVisit: "December to February",
      tips: ["Pack adventure gear", "Respect local nature reserves"]
    },
    {
      title: "Rome",
      location: "Italy",
      description: "Famous for its ancient ruins, Renaissance art, and vibrant street life.",
      image: "https://unsplash.com/photos/colosseum-rome",
      activities: ["Museum visits", "Walking tours", "Culinary experiences"],
      bestTimeToVisit: "April to June",
      tips: ["Stay hydrated", "Pre-book popular attractions"]
    },
    {
      title: "Cairo",
      location: "Egypt",
      description: "Home to the iconic pyramids and rich in ancient history and culture.",
      image: "https://unsplash.com/photos/cairo-pyramids",
      activities: ["Pyramid tours", "Museum visits", "Shopping at bazaars"],
      bestTimeToVisit: "October to April",
      tips: ["Dress appropriately", "Carry sunscreen"]
    },
    {
      title: "Dubai",
      location: "United Arab Emirates",
      description: "A city of luxury, skyscrapers, shopping malls, and desert adventures.",
      image: "https://unsplash.com/photos/dubai-cityscape",
      activities: ["Desert safari", "Shopping", "Dhow cruise"],
      bestTimeToVisit: "November to April",
      tips: ["Respect local customs", "Avoid outdoor activities in summer"]
    },
    {
      title: "Buenos Aires",
      location: "Argentina",
      description: "Known for its rich culture, tango, and vibrant street life.",
      image: "https://unsplash.com/photos/buenos-aires-street",
      activities: ["Tango shows", "Cultural tours", "Dining experiences"],
      bestTimeToVisit: "March to May",
      tips: ["Learn basic Spanish phrases", "Try local steak dishes"]
    },
    {
      title: "Bali",
      location: "Indonesia",
      description: "A tropical paradise famous for its beaches, temples, and lush landscapes.",
      image: "https://unsplash.com/photos/bali-temple",
      activities: ["Surfing", "Temple visits", "Yoga retreats"],
      bestTimeToVisit: "April to October",
      tips: ["Respect temple attire rules", "Stay eco-friendly"]
    },
    {
      title: "Reykjavik",
      location: "Iceland",
      description: "Gateway to stunning landscapes, geysers, waterfalls, and the Northern Lights.",
      image: "https://unsplash.com/photos/iceland-geyser",
      activities: ["Northern lights viewing", "Hot springs", "Glacier tours"],
      bestTimeToVisit: "September to March",
      tips: ["Pack warm clothing", "Stay on marked trails"]
    },
    {
      title: "Hawaii",
      location: "USA",
      description: "An island paradise known for its volcanoes, beaches, and diverse ecosystems.",
      image: "https://unsplash.com/photos/hawaii-beach",
      activities: ["Snorkeling", "Hiking", "Cultural shows"],
      bestTimeToVisit: "March to September",
      tips: ["Rent a car for island hopping", "Explore lesser-known beaches"]
    },
    {
      title: "Edinburgh",
      location: "Scotland",
      description: "Known for its historic castles, cobblestone streets, and the annual Fringe Festival.",
      image: "https://unsplash.com/photos/edinburgh-castle",
      activities: ["Castle visits", "Whiskey tasting", "Hiking"],
      bestTimeToVisit: "May to September",
      tips: ["Pack a raincoat", "Book festival tickets early"]
    },
    {
      title: "Istanbul",
      location: "Turkey",
      description: "A city bridging Europe and Asia, known for its historic sites and bustling bazaars.",
      image: "https://unsplash.com/photos/istanbul-bazaar",
      activities: ["Historical site visits", "Shopping", "Cruises on the Bosphorus"],
      bestTimeToVisit: "April to May",
      tips: ["Respect religious customs", "Bargain at bazaars"]
    },
    {
      title: "Bangkok",
      location: "Thailand",
      description: "A vibrant city known for its temples, markets, and street food.",
      image: "https://unsplash.com/photos/bangkok-temple",
      activities: ["Temple tours", "Shopping", "Food tasting"],
      bestTimeToVisit: "November to February",
      tips: ["Dress modestly at temples", "Try street food with caution"]
    },
    {
      title: "Amsterdam",
      location: "Netherlands",
      description: "Famous for its canals, museums, and relaxed atmosphere.",
      image: "https://unsplash.com/photos/amsterdam-canals",
      activities: ["Canal cruises", "Museum tours", "Cycling"],
      bestTimeToVisit: "April to October",
      tips: ["Avoid peak hours at museums", "Rent a bike for easy transport"]
    },
    {
      title: "Sydney",
      location: "Australia",
      description: "Known for its stunning harbor, iconic Opera House, and beautiful beaches.",
      image: "https://unsplash.com/photos/sydney-opera-house",
      activities: ["Opera House tour", "Beach visits", "Surfing"],
      bestTimeToVisit: "September to November",
      tips: ["Use public transport", "Swim only in designated areas"]
    },
    {
      title: "Toronto",
      location: "Canada",
      description: "A multicultural city known for its landmarks like the CN Tower and vibrant neighborhoods.",
      image: "https://unsplash.com/photos/toronto-cn-tower",
      activities: ["City tours", "Shopping", "Dining"],
      bestTimeToVisit: "May to September",
      tips: ["Dress warmly in winter", "Try food from various cultures"]
    },
    {
      title: "Petra",
      location: "Jordan",
      description: "An ancient city carved into rose-red sandstone cliffs, a true wonder of the world.",
      image: "https://unsplash.com/photos/petra-jordan",
      activities: ["Historical tours", "Photography", "Camel rides"],
      bestTimeToVisit: "October to April",
      tips: ["Wear comfortable walking shoes", "Bring water"]
    }
  
];

module.exports = { data: sampleListings };
