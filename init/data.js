
const sampleListings = [
  {
      title: "Goa",
      location: "India",
      description: "A tropical paradise known for its stunning beaches and vibrant nightlife.",
      image: "https://i.pinimg.com/originals/83/a0/7f/83a07fe80df3ef1fe5a966cd0c457644.jpg",
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
      image: "https://upload.wikimedia.org/wikipedia/commons/thumb/f/f5/Kee_monastery_Spiti_Valley_%28edited%29.jpg/1024px-Kee_monastery_Spiti_Valley_%28edited%29.jpg",
      activities: ["Trekking", "Paragliding", "Camping"],
      bestTimeToVisit: "March to June", // Updated value
      tips: ["Pack warm clothes even in summer", "Hire local guides for trekking"]
  },
  {
      title: "Rajasthan",
      location: "India",
      description: "Known for its royal palaces, historic forts, and vibrant culture.",
      image: "https://www.bing.com/th?id=OIP.Rblmhbeh6jjOkRyxaA59jQHaFj&w=202&h=200&c=8&rs=1&qlt=90&o=6&dpr=1.5&pid=3.1&rm=2",
      activities: ["Camel safari", "Visit forts and palaces", "Cultural festivals"],
      bestTimeToVisit: "October to March",
      tips: ["Stay hydrated and wear sunscreen", "Explore local handicrafts and souvenirs"]
  },
  {
      title: "Kerala",
      location: "India",
      description: "Famous for its backwaters, lush greenery, and unique culture.",
      image: "https://th.bing.com/th?id=OSGI.0CAE812E4AF42DF309CF263BF9501D3A&w=196&h=140&c=8&rs=1&o=6&dpr=1.5&pid=TravelL2",
      activities: ["Houseboat cruises", "Ayurvedic treatments", "Cultural shows"],
      bestTimeToVisit: "September to March",
      tips: ["Book houseboat stays in advance", "Try local dishes like appam and stew"]
  },
  {
      title: "Uttarakhand",
      location: "India",
      description: "Renowned for its spiritual significance, hill stations, and trekking opportunities.",
      image: "https://th.bing.com/th/id/OIP.GdPG0PqtdUIgIstmtLK10gHaEK?w=390&h=185&c=7&r=0&o=5&dpr=1.5&pid=1.7",
      activities: ["Pilgrimage visits", "Trekking", "Nature walks"],
      bestTimeToVisit: "March to June", 
      tips: ["Check weather conditions before trekking", "Respect local traditions and customs"]
  },
  {
      title: "Sikkim",
      location: "India",
      description: "Known for its beautiful landscapes, rich biodiversity, and Buddhist monasteries.",
      image: "https://static.toiimg.com/photo/64481180/.jpg",
      activities: ["Visit monasteries", "Trekking", "Bird watching"],
      bestTimeToVisit: "March to May", 
      tips: ["Carry warm clothing throughout the year", "Try local Sikkimese cuisine"]
  },
  {
      title: "Mumbai",
      location: "India",
      description: "A bustling city known for its film industry, beaches, and vibrant culture.",
      image: "https://th.bing.com/th/id/OIP.G4D1QWU-8HOLYnN6HUmjWwHaE8?w=244&h=180&c=7&r=0&o=5&dpr=1.5&pid=1.7",
      activities: ["Visit film studios", "Explore local markets", "Enjoy nightlife"],
      bestTimeToVisit: "November to February",
      tips: ["Use public transport to avoid traffic", "Explore street food delicacies"]
  },
  {
      title: "Bengaluru",
      location: "India",
      description: "Famous for its gardens, tech scene, and nearby hill stations.",
      image: "https://th.bing.com/th/id/OIP.2m2WpeUXQzGjJvBb0-m1_gHaL4?w=115&h=180&c=7&r=0&o=5&dpr=1.5&pid=1.7",
      activities: ["Visit tech parks", "Explore gardens", "Local shopping"],
      bestTimeToVisit: "October to February",
      tips: ["Try local filter coffee", "Visit during the weekend for events"]
  },
  {
      title: "Punjab",
      location: "India",
      description: "Known for its rich culture, delicious food, and the Golden Temple.",
      image: "https://th.bing.com/th/id/OIP.QsRlTfdUZzKwIhneHo8FdwHaE8?w=237&h=180&c=7&r=0&o=5&dpr=1.5&pid=1.7",
      activities: ["Visit the Golden Temple", "Enjoy Punjabi cuisine", "Cultural festivals"],
      bestTimeToVisit: "October to March",
      tips: ["Respect the local customs at religious sites", "Taste the local dishes like butter chicken and sarson da saag"]
     },
    {
      title: "Santorini",
      location: "Greece",
      description: "A picturesque island known for its stunning sunsets, white-washed buildings, and crystal-clear waters.",
      image: "https://th.bing.com/th/id/OIP.2bC4qysogWUFoMFqeXSppAHaE8?w=221&h=180&c=7&r=0&o=5&dpr=1.5&pid=1.7",
      activities: ["Sunset viewing", "Wine tasting", "Boat tours"],
      bestTimeToVisit: "April to October",
      tips: ["Book tours in advance", "Stay hydrated under the sun"]
    },
    {
      title: "Kyoto",
      location: "Japan",
      description: "Renowned for its classical Buddhist temples, gardens, and cherry blossoms.",
      image: "https://th.bing.com/th/id/OIP.tYgERQs-eycMAZ38L5AmiQHaE8?w=330&h=180&c=7&r=0&o=5&dpr=1.5&pid=1.7",
      activities: ["Temple tours", "Cherry blossom viewing", "Tea ceremonies"],
      bestTimeToVisit: "March to May",
      tips: ["Wear comfortable shoes", "Respect temple etiquettes"]
    },
    {
      title: "Machu Picchu",
      location: "Peru",
      description: "An iconic ancient Inca city located in the Andes Mountains.",
      image: "https://th.bing.com/th/id/OIP.77Vu6RqyoJ06ZuFgQegAWwHaFj?w=256&h=192&c=7&r=0&o=5&dpr=1.5&pid=1.7",
      activities: ["Hiking", "Photography", "Historical tours"],
      bestTimeToVisit: "April to October",
      tips: ["Prepare for high altitude", "Book tickets in advance"]
    },
    {
      title: "Paris",
      location: "France",
      description: "The city of love, known for its art, culture, and iconic Eiffel Tower.",
      image: "https://th.bing.com/th/id/OIP.adYGjfEwLEmp8jU8cgT_LwHaFj?w=232&h=180&c=7&r=0&o=5&dpr=1.5&pid=1.7",
      activities: ["Museum visits", "Sightseeing", "Gastronomy tours"],
      bestTimeToVisit: "June to August",
      tips: ["Avoid peak hours at tourist spots", "Try local cafes"]
    },
    {
      title: "Cape Town",
      location: "South Africa",
      description: "A vibrant city with stunning coastal views, mountains, and wine regions.",
      image: "https://th.bing.com/th/id/OIP.9C5wb42JEI9ZrnLRcdE3WAHaE7?w=245&h=180&c=7&r=0&o=5&dpr=1.5&pid=1.7",
      activities: ["Safari tours", "Mountain hiking", "Wine tasting"],
      bestTimeToVisit: "November to March",
      tips: ["Stay sun-protected", "Use reliable transport"]
    },
    {
      title: "Queenstown",
      location: "New Zealand",
      description: "A top destination for adventure sports, surrounded by mountains and lakes.",
      image: "https://th.bing.com/th/id/OIP.04u1CP3YfQGMPffZ-HQEqwHaE8?w=235&h=180&c=7&r=0&o=5&dpr=1.5&pid=1.7",
      activities: ["Bungee jumping", "Skiing", "Cruises"],
      bestTimeToVisit: "December to February",
      tips: ["Pack adventure gear", "Respect local nature reserves"]
    },
    {
      title: "Rome",
      location: "Italy",
      description: "Famous for its ancient ruins, Renaissance art, and vibrant street life.",
      image: "https://th.bing.com/th/id/OIP.INB7nsN_TGttYNu4sINevQHaEW?w=321&h=188&c=7&r=0&o=5&dpr=1.5&pid=1.7",
      activities: ["Museum visits", "Walking tours", "Culinary experiences"],
      bestTimeToVisit: "April to June",
      tips: ["Stay hydrated", "Pre-book popular attractions"]
    },
    {
      title: "Cairo",
      location: "Egypt",
      description: "Home to the iconic pyramids and rich in ancient history and culture.",
      image: "https://th.bing.com/th/id/OIP.Ue_5x4lb6nNRmAqcxviZ1QHaEd?w=282&h=180&c=7&r=0&o=5&dpr=1.5&pid=1.7",
      activities: ["Pyramid tours", "Museum visits", "Shopping at bazaars"],
      bestTimeToVisit: "October to April",
      tips: ["Dress appropriately", "Carry sunscreen"]
    },
    {
      title: "Dubai",
      location: "United Arab Emirates",
      description: "A city of luxury, skyscrapers, shopping malls, and desert adventures.",
      image: "https://th.bing.com/th/id/OIP.aEdgPnP6THHR4bw-c4vKDwHaFj?rs=1&pid=ImgDetMain",
      activities: ["Desert safari", "Shopping", "Dhow cruise"],
      bestTimeToVisit: "November to April",
      tips: ["Respect local customs", "Avoid outdoor activities in summer"]
    },
    {
      title: "Buenos Aires",
      location: "Argentina",
      description: "Known for its rich culture, tango, and vibrant street life.",
      image: "https://th.bing.com/th/id/OIP.i7rQGpaUctfRskC8bvY95gAAAA?w=276&h=184&c=7&r=0&o=5&dpr=1.5&pid=1.7",
      activities: ["Tango shows", "Cultural tours", "Dining experiences"],
      bestTimeToVisit: "March to May",
      tips: ["Learn basic Spanish phrases", "Try local steak dishes"]
    },
    {
      title: "Bali",
      location: "Indonesia",
      description: "A tropical paradise famous for its beaches, temples, and lush landscapes.",
      image: "https://th.bing.com/th/id/OIP.HzmL2x5oPwqtd6oZwNokMQHaE8?w=291&h=194&c=7&r=0&o=5&dpr=1.5&pid=1.7",
      activities: ["Surfing", "Temple visits", "Yoga retreats"],
      bestTimeToVisit: "April to October",
      tips: ["Respect temple attire rules", "Stay eco-friendly"]
    },
    {
      title: "Reykjavik",
      location: "Iceland",
      description: "Gateway to stunning landscapes, geysers, waterfalls, and the Northern Lights.",
      image: "https://th.bing.com/th/id/OIP.H6__pfB59609IltM0_8FIgHaEo?w=243&h=180&c=7&r=0&o=5&dpr=1.5&pid=1.7",
      activities: ["Northern lights viewing", "Hot springs", "Glacier tours"],
      bestTimeToVisit: "September to March",
      tips: ["Pack warm clothing", "Stay on marked trails"]
    },
    {
      title: "Hawaii",
      location: "USA",
      description: "An island paradise known for its volcanoes, beaches, and diverse ecosystems.",
      image: "https://th.bing.com/th/id/OIP.icCTdb55HQqwbFp3vvGCLQHaE8?w=264&h=180&c=7&r=0&o=5&dpr=1.5&pid=1.7",
      activities: ["Snorkeling", "Hiking", "Cultural shows"],
      bestTimeToVisit: "March to September",
      tips: ["Rent a car for island hopping", "Explore lesser-known beaches"]
    },
    {
      title: "Edinburgh",
      location: "Scotland",
      description: "Known for its historic castles, cobblestone streets, and the annual Fringe Festival.",
      image: "https://th.bing.com/th/id/OIP.BMpJnt5G4lvT9mWXWWrqIgHaE8?w=278&h=186&c=7&r=0&o=5&dpr=1.5&pid=1.7",
      activities: ["Castle visits", "Whiskey tasting", "Hiking"],
      bestTimeToVisit: "May to September",
      tips: ["Pack a raincoat", "Book festival tickets early"]
    },
    {
      title: "Istanbul",
      location: "Turkey",
      description: "A city bridging Europe and Asia, known for its historic sites and bustling bazaars.",
      image: "https://th.bing.com/th/id/OIP.DwdAiJDd6P0tCt8Bp9CIuAHaE6?rs=1&pid=ImgDetMain",
      activities: ["Historical site visits", "Shopping", "Cruises on the Bosphorus"],
      bestTimeToVisit: "April to May",
      tips: ["Respect religious customs", "Bargain at bazaars"]
    },
    {
      title: "Bangkok",
      location: "Thailand",
      description: "A vibrant city known for its temples, markets, and street food.",
      image: "https://th.bing.com/th/id/OIP.nv_oVLZEx19TcjAe96uXQwHaEn?w=229&h=180&c=7&r=0&o=5&dpr=1.5&pid=1.7",
      activities: ["Temple tours", "Shopping", "Food tasting"],
      bestTimeToVisit: "November to February",
      tips: ["Dress modestly at temples", "Try street food with caution"]
    },
    {
      title: "Amsterdam",
      location: "Netherlands",
      description: "Famous for its canals, museums, and relaxed atmosphere.",
      image: "https://th.bing.com/th/id/OIP.HtggLlEzI9IigSn3AwWS_wHaE8?w=285&h=180&c=7&r=0&o=5&dpr=1.5&pid=1.7",
      activities: ["Canal cruises", "Museum tours", "Cycling"],
      bestTimeToVisit: "April to October",
      tips: ["Avoid peak hours at museums", "Rent a bike for easy transport"]
    },
    {
      title: "Sydney",
      location: "Australia",
      description: "Known for its stunning harbor, iconic Opera House, and beautiful beaches.",
      image: "https://th.bing.com/th/id/OIP.kzFBOAisWvSgeTnmq6DbXgHaE8?w=292&h=195&c=7&r=0&o=5&dpr=1.5&pid=1.7",
      activities: ["Opera House tour", "Beach visits", "Surfing"],
      bestTimeToVisit: "September to November",
      tips: ["Use public transport", "Swim only in designated areas"]
    },
    {
      title: "Toronto",
      location: "Canada",
      description: "A multicultural city known for its landmarks like the CN Tower and vibrant neighborhoods.",
      image: "https://th.bing.com/th/id/OIP.yVCLdzTyHr92-bXrFtZfUQHaE8?w=275&h=183&c=7&r=0&o=5&dpr=1.5&pid=1.7",
      activities: ["City tours", "Shopping", "Dining"],
      bestTimeToVisit: "May to September",
      tips: ["Dress warmly in winter", "Try food from various cultures"]
    },
    {
      title: "Petra",
      location: "Jordan",
      description: "An ancient city carved into rose-red sandstone cliffs, a true wonder of the world.",
      image: "https://th.bing.com/th/id/OIP.gLNQlBlnuXnOzse8UsY1mAHaFS?w=269&h=180&c=7&r=0&o=5&dpr=1.5&pid=1.7",
      activities: ["Historical tours", "Photography", "Camel rides"],
      bestTimeToVisit: "October to April",
      tips: ["Wear comfortable walking shoes", "Bring water"]
    }
  
];

module.exports = { data: sampleListings };
