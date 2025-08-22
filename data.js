const experiencesData = [
    {
        // Card 1: Dakshina Kannada Retreat
        id: 'dk',
        title: 'Dakshina Kannada Retreat',
        category: ['Nature', 'Culture'],
        hostName: 'Pramath Hegde',
        hostAvatar: 'https://i.pravatar.cc/80?u=pramath',
        duration: '3D, 2N',
        groupSize: '2-6 people',
        image: 'images/Dakshina_kannada2',
        shortDescription: 'Step into the serene embrace of the Western Ghats, where nature thrives and sustainable villages lead the way.',
        price: '₹2500',
        
        longDescription: "Journey into the heart of the Western Ghats where lush forests meet vibrant village life. This immersion focuses on the sustainable practices of the local communities, from traditional farming to understanding the river ecosystem. It's an opportunity to disconnect from the hustle and connect with the rhythm of nature.",
        itinerary: [
            { day: 1, title: 'Arrival and Village Immersion', description: 'Arrive and settle into a traditional homestay. Enjoy a welcome drink made from local herbs. In the afternoon, take a guided walk through the village and learn about the intricate process of areca nut cultivation from local farmers.' },
            { day: 2, title: 'River Trek & Culinary Secrets', description: 'Embark on a guided trek along a pristine river, learning about the local flora and fauna. The afternoon is dedicated to a hands-on community cooking session where you will learn to prepare traditional Malenadu dishes.' },
            { day: 3, title: 'Artisan Visit & Departure', description: 'Spend the morning visiting a local artisan who specializes in creating crafts from natural materials. After a farewell lunch with your host family, you will depart with lasting memories.' }
        ],
        included: ['Accommodation in a private room', 'All meals (breakfast, lunch, dinner)', 'All guided activities and treks', 'Community contribution fund', 'Purified drinking water'],
        whatToBring: ['Comfortable walking shoes', 'Light rain jacket', 'Insect repellent', 'Sunscreen and hat', 'A reusable water bottle', 'An open mind!'],
        galleryImages: [
            'images/Dakshina_kannada_part1',
            'images/Dakshina_kannada_part2',
            'images/Dakshina_kannada_part3'
        ],
        reviews: [
            { name: 'Anjali R.', rating: 5, comment: "An absolutely magical experience. Pramath was an incredible host, and the connection with nature was profound. The food was out of this world!" },
            { name: 'David L.', rating: 4, comment: "A beautiful and peaceful retreat. The river trek was the highlight. A bit rustic for some, but perfect if you want an authentic escape." }
        ]
    },
    {
        // Card 2: Yakshagana Cultural Immersion
        id: 'uk',
        title: 'Yakshagana Cultural Immersion',
        category: ['Culture'],
        hostName: 'Ganesh Yakshi',
        hostAvatar: 'https://i.pravatar.cc/80?u=ganesh',
        duration: '3D, 2N',
        groupSize: '1-5 people',
        image: 'images/Yak',
        shortDescription: 'Live alongside an artist community and witness the powerful, traditional theatre form of Yakshagana.',
        price: '₹4275',

        longDescription: "Experience the powerful, traditional theatre form of Yakshagana. Live alongside an artist community, learn the intricate details of their elaborate makeup, and witness a full-night performance that brings ancient Indian epics to life.",
        itinerary: [
            { day: 1, title: 'Arrival & Introduction', description: 'Arrive at the artists\' village. Settle in and enjoy a traditional dinner with the artists, followed by an introduction to the history and stories of Yakshagana.' },
            { day: 2, title: 'The Art of Disguise', description: 'Participate in a hands-on workshop on "Bannagarike" (face painting), learning the symbolism behind the colors and characters. Observe the artists rehearse.' },
            { day: 3, title: 'A Night of Epics', description: 'Gain exclusive backstage access to witness the incredible transformation of artists before a mesmerizing all-night performance under the stars. Depart after breakfast the next morning.' }
        ],
        included: ['Accommodation with the artist community', 'All meals', 'Workshop materials', 'Performance tickets', 'Community contribution'],
        whatToBring: ['Modest and comfortable clothing', 'A notebook and pen', 'An open heart for art', 'Camera (no flash during performance)'],
        galleryImages: [
            'images/Yakshagana_part1',
            'images/Yakshagana_part2',
            'images/Yakshagana_part3'
        ],
        reviews: [
            { name: 'Meera I.', rating: 5, comment: "A once in a lifetime experience. Seeing the artists prepare and then perform was unforgettable. So much passion and dedication." }
        ]
    },
    {
        // Card 3: Jog Falls - Backwater Bliss
        id: 'jog',
        title: 'Jog Falls - Backwater Bliss',
        category: ['Adventure', 'Nature'],
        hostName: 'Sharavathi Guides',
        hostAvatar: 'https://i.pravatar.cc/80?u=sharavathi',
        duration: '2D, 1N',
        groupSize: '1-8 people',
        image: 'images/Jog_falls2',
        shortDescription: 'Escape to the tranquil backwaters of the Sharavathi river, upstream from the majestic Jog Falls.',
        price: '₹3125',

        longDescription: "Escape to the tranquil backwaters of the Sharavathi river, upstream from the majestic Jog Falls. This retreat is perfect for nature lovers, offering kayaking, bird watching, and serene nights under the stars in a riverside camp.",
        itinerary: [
            { day: 1, title: 'Riverside Camp & Sunset Kayaking', description: 'Check into your comfortable riverside camp. In the evening, grab a paddle for a guided kayaking session on the calm backwaters as you watch a spectacular sunset.' },
            { day: 2, title: 'Nature Walk & Departure', description: 'Wake up to the sounds of birds. Embark on a morning nature walk to spot local wildlife. After a hearty breakfast, spend some time relaxing by the river before departing.' }
        ],
        included: ['Riverside tent accommodation', 'All meals', 'Kayaking gear and guide', 'Guided nature walk'],
        whatToBring: ['Quick-dry clothing', 'Water shoes or floaters', 'Binoculars for bird watching', 'A good book', 'Personal toiletries'],
        galleryImages: [
            'images/Jog_part1',
            'images/Jog_part2',
            'images/Jog_part3'
        ],
        reviews: [
            { name: 'Karthik V.', rating: 5, comment: "Kayaking during sunset was just surreal. The camp is basic but clean and the location is absolutely stunning. Perfect weekend getaway." }
        ]
    },
    {
        // Card 4: Ramanagara Rocks Adventure
        id: 'ramanagara',
        title: 'Ramanagara Rocks Adventure',
        category: ['Adventure'],
        hostName: 'Climb On',
        hostAvatar: 'https://i.pravatar.cc/80?u=climbon',
        duration: '1 Day',
        groupSize: '4-10 people',
        image: 'images/Ramanagara',
        shortDescription: 'A day getaway into the wild near Bangalore, famous as the backdrop for the movie "Sholay".',
        price: '₹1630',

        longDescription: "Famous as the backdrop for the movie \"Sholay,\" the rocky terrain of Ramanagara is a haven for trekkers and rock climbers. This day trip from Bangalore will get your adrenaline pumping as you explore the unique landscape, home to vultures and sloth bears.",
        itinerary: [
            { day: 1, title: 'Trek, Climb, and Explore', description: 'Early morning departure from Bangalore. A guided trek to the summit of Ramadevara Betta offers panoramic views. After lunch, learn basic rock climbing and rappelling techniques from certified experts before the evening return.' }
        ],
        included: ['Transportation from/to Bangalore', 'Breakfast and lunch', 'Certified guide and climbing instructor', 'All safety and climbing equipment', 'Entry fees'],
        whatToBring: ['Sturdy shoes with good grip', 'A small backpack', 'At least 2 litres of water', 'Sunscreen and a cap', 'Lots of energy!'],
        galleryImages: [
            'images/Ramanagara_part1',
            'images/Ramanagara_part2',
            'images/Ramanagara_part3'
        ],
        reviews: [
            { name: 'Sanjay P.', rating: 5, comment: "Amazing day trip! The trek was moderately challenging and the rock climbing was a fantastic experience for a beginner like me. The guides were very professional." }
        ]
    },
    {
        // Card 5: Babbivana - Nature's Harmony
        id: 'hassan',
        title: "Babbivana - Nature's Harmony",
        category: ['Agro Tourism', 'Nature'],
        hostName: 'The Gowda Family',
        hostAvatar: 'https://i.pravatar.cc/80?u=gowda',
        duration: '2D, 1N',
        groupSize: '1-4 people',
        image: 'images/Babbivana',
        shortDescription: 'Experience authentic rural life at a farm stay. Participate in daily activities, and enjoy farm-to-table meals.',
        price: '₹3700',
        
        longDescription: "Experience authentic rural life at a farm stay in Hassan. Participate in daily farm activities, learn about organic farming, and enjoy fresh, farm-to-table meals. This is the perfect digital detox and a chance to understand life on the land.",
        itinerary: [
            { day: 1, title: 'Farm Life Begins', description: 'Arrive at the farm and be welcomed by the Gowda family. Participate in evening farm chores like milking a cow and feeding the animals. Enjoy a delicious dinner made from farm produce.' },
            { day: 2, title: 'A Day in the Fields', description: 'Wake up early and take a tractor ride through the countryside. Spend the day learning about and participating in seasonal activities like ploughing, sowing, or harvesting. Learn to cook a traditional meal before departing.' }
        ],
        included: ['Farm stay accommodation', 'All home-cooked meals', 'All farm activities', 'Tractor ride'],
        whatToBring: ['Simple, comfortable clothes', 'A sun hat', 'Closed-toe shoes', 'Curiosity about farm life'],
        galleryImages: [
            'images/Babbivana_part1',
            'images/Babbivana_part2',
            'images/Babbivana_part3'
        ],
        reviews: [
            { name: 'Aditi M.', rating: 5, comment: "The Gowda family made us feel like a part of their own. The food was incredible, and getting my hands dirty on the farm was so refreshing. A must-do experience." }
        ]
    },
    {
        // Card 6: Coorg Coffee & Peaks Trek
        id: 'coorg',
        title: 'Coorg Coffee & Peaks Trek',
        category: ['Adventure', 'Nature'],
        hostName: 'Kodava Trails',
        hostAvatar: 'https://i.pravatar.cc/80?u=kodava',
        duration: '3D, 2N',
        groupSize: '2-8 people',
        image: 'images/Coffee',
        shortDescription: 'Trek through the misty hills and lush coffee plantations of Coorg, the Scotland of India.',
        price: '₹3750',

        longDescription: "Discover why Coorg is called the 'Scotland of India.' This adventure combines challenging trails through misty mountains with the rich aroma of coffee. You'll stay in a traditional Kodava homestay, experiencing the unique culture and hospitality of the region firsthand.",
        itinerary: [
            { day: 1, title: 'Arrival in Madikeri', description: 'Arrive in Madikeri and check into your authentic Kodava homestay. In the evening, take a leisurely walk through a sprawling coffee estate, learning about the bean-to-cup process.' },
            { day: 2, title: 'Trek to Tadiandamol Peak', description: 'A full-day guided trek to Tadiandamol, the highest peak in Coorg. The trail takes you through shola forests and grasslands, offering breathtaking panoramic views from the summit.' },
            { day: 3, title: 'Waterfalls and Spices', description: 'After breakfast, visit the magnificent Abbey Falls. Later, explore a local spice garden to learn about cardamom, pepper, and other spices grown in the region before departing.' }
        ],
        included: ['Homestay accommodation', 'All meals', 'Certified trek guide', 'Entry tickets to falls and parks', 'First-aid kit'],
        whatToBring: ['Sturdy trekking shoes', 'Backpack with rain cover', 'Energy bars and snacks', 'Personal medication', 'Camera to capture the views'],
        galleryImages: [
            'images/Coffee_part1',
            'images/Coffee_part2',
            'images/Coffee_part3'
        ],
        reviews: [
            { name: 'Rohan K.', rating: 5, comment: "The Tadiandamol trek was tough but so rewarding. Our guide was knowledgeable and the homestay was comfortable and welcoming. Highly recommended for adventure lovers." },
            { name: 'Priya S.', rating: 5, comment: "Coorg is stunning! Waking up to the smell of coffee and the sounds of nature was the perfect getaway from city life. The hospitality was top-notch." }
        ]
    }
];