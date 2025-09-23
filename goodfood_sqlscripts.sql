-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Aug 02, 2024 at 11:47 AM
-- Server version: 10.4.32-MariaDB
-- PHP Version: 8.2.12

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `goodfood`
--

-- --------------------------------------------------------

--
-- Table structure for table `blog`
--

CREATE TABLE `blog` (
  `PostID` int(1) NOT NULL,
  `PostTitle` varchar(100) DEFAULT NULL,
  `ColumnImg` varchar(200) DEFAULT NULL,
  `ShortDesc` mediumtext DEFAULT NULL,
  `LongDesc` longtext DEFAULT NULL,
  `Date` date DEFAULT curdate(),
  `ReadTime` int(3) DEFAULT NULL,
  `MainImg` varchar(200) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `blog`
--

INSERT INTO `blog` (`PostID`, `PostTitle`, `ColumnImg`, `ShortDesc`, `LongDesc`, `Date`, `ReadTime`, `MainImg`) VALUES
(1, 'Exploring Singapore\'s Hawker Culture: A Journey Through Maxwell Food Centre', 'images/blog_grid/maxwell.jpg', 'Discover the vibrant flavors and rich heritage of Singapore\'s hawker culture at Maxwell Food Centre, where tradition meets taste.', 'Maxwell Food Centre, located in the heart of Chinatown, is a haven for food enthusiasts seeking an authentic taste of Singapore\'s hawker culture. Established in 1928, this bustling food centre boasts over 100 stalls, each offering a unique culinary experience. From the famous Tian Tian Hainanese Chicken Rice to the savory delights of Zhen Zhen Porridge, Maxwell Food Centre is a treasure trove of flavors.\r\n<br><br>\r\nThe vibrant atmosphere is a testament to Singapore\'s multicultural heritage, with dishes representing Chinese, Malay, Indian, and Peranakan cuisines. As you navigate the crowded aisles, the aroma of freshly cooked food fills the air, enticing you to try everything. Each stall has its specialty, and locals will tell you that the best way to enjoy Maxwell is to come with a group of friends, order a variety of dishes, and share them family-style.\r\n<br><br>\r\nBeyond the food, Maxwell Food Centre is a cultural experience. The hawkers, many of whom have been perfecting their craft for decades, are always eager to share stories about their recipes and traditions. It’s a place where history and gastronomy converge, offering a glimpse into the soul of Singapore.\r\n<br><br>\r\nWhether you\'re a local or a tourist, a visit to Maxwell Food Centre promises an unforgettable culinary adventure. So, bring your appetite and immerse yourself in the rich tapestry of flavors that define Singapore\'s hawker culture.', '2024-07-28', 6, 'images/blog_banner/maxwell.jpg'),
(2, 'The Ultimate Guide to Fine Dining in Singapore: Top 5 Michelin-Starred Restaurants', 'images/blog_grid/michelin.jpg', 'Elevate your dining experience with our guide to the top Michelin-starred restaurants in Singapore, where culinary excellence meets exquisite ambiance.', 'Singapore is a culinary paradise, renowned for its diverse food scene that ranges from humble hawker stalls to opulent fine dining establishments. For those seeking an unforgettable gastronomic journey, here are the top five Michelin-starred restaurants that promise to deliver excellence on every plate.\r\n<br><br>\r\n1. Odette: Located in the National Gallery, Odette offers a French dining experience like no other. Chef Julien Royer\'s artistic approach to food has earned Odette three Michelin stars. The menu, which changes seasonally, features dishes crafted with the finest ingredients, each plate a masterpiece.\r\n<br><br>\r\n2. Les Amis: A stalwart in Singapore\'s fine dining scene, Les Amis is celebrated for its classic French cuisine and extensive wine list. With three Michelin stars, it’s a haven for gourmands who appreciate the intricate balance of flavors and impeccable service.\r\n<br><br>\r\n3. Burnt Ends: This modern Australian barbecue restaurant is a must-visit for meat lovers. Chef Dave Pynt\'s innovative cooking techniques and use of a custom-made brick oven have garnered Burnt Ends two Michelin stars, making it a hotspot for those seeking a unique and flavorful dining experience.\r\n<br><br>\r\n4. Shisen Hanten: Bringing Sichuan cuisine to new heights, Shisen Hanten offers a bold and spicy menu that has earned it two Michelin stars. The restaurant\'s signature dish, Chen\'s Mapo Tofu, is a testament to Chef Chen Kentaro\'s mastery of Sichuan flavors.\r\n<br><br>\r\n5. Meta: A fusion of Korean and French cuisine, Meta stands out for its creative dishes and elegant presentation. Chef Sun Kim\'s innovative approach has won Meta a Michelin star, making it a must-visit for those who appreciate culinary artistry.<br><br>\r\n\r\nDining at any of these Michelin-starred restaurants in Singapore is more than just a meal; it\'s an experience that delights all the senses. Whether you\'re celebrating a special occasion or simply indulging in the finer things in life, these establishments offer a taste of perfection.', '2024-07-17', 7, 'images/blog_banner/michelin.jpg'),
(3, 'Hidden Gems: 5 Underrated Cafes in Singapore You Need to Visit', 'images/blog_grid/cafe.jpg', 'Escape the crowds and discover these underrated cafes in Singapore that offer unique vibes, great coffee, and delicious bites.', 'In a city brimming with cafes, it can be challenging to find a spot that stands out from the rest. If you\'re tired of the usual crowded hangouts, here are five underrated cafes in Singapore that deserve your attention.<br><br>\r\n\r\n1. The Moon: Nestled in a charming shophouse in Chinatown, The Moon is a haven for book lovers and coffee enthusiasts alike. With its cozy reading nooks, extensive selection of books, and delectable pastries, this cafe offers a perfect escape from the hustle and bustle of the city.<br><br>\r\n\r\n2. Apartment Coffee: Located in Lavender, Apartment Coffee is known for its minimalist design and exceptional brews. The focus here is on quality over quantity, with a rotating menu of single-origin coffees that are carefully sourced and expertly brewed.<br><br>\r\n\r\n3. Kream & Kensho: Tucked away in a quiet corner of Outram, Kream & Kensho combines a love for good coffee with a passion for Japanese-inspired dishes. The serene ambiance and beautifully plated food make it a great spot for a relaxing brunch.<br><br>\r\n\r\n4. Thus Coffee: Situated in the heart of Ang Mo Kio, Thus Coffee is a neighborhood gem that offers a warm and welcoming atmosphere. The menu features a mix of Western and Asian dishes, all made with fresh, locally sourced ingredients.<br><br>\r\n\r\n5. My Awesome Cafe: Housed in a former Chinese medicine hall on Telok Ayer Street, My Awesome Cafe is a quirky spot with a unique charm. The eclectic decor, friendly staff, and hearty sandwiches make it a favorite among those in the know.<br><br>\r\n\r\nThese hidden gems prove that great coffee and good vibes can be found beyond the usual hotspots. So, the next time you\'re in need of a caffeine fix or a cozy spot to unwind, give these underrated cafes a try.', '2024-06-27', 5, 'images/blog_banner/cafe.jpg'),
(4, 'A Culinary Tour of Singapore\'s Little India: Must-Try Dishes and Eateries', 'images/blog_grid/indian.jpg', 'Embark on a flavorful journey through Little India, exploring the vibrant dishes and eateries that define this iconic neighborhood.', 'Little India is a vibrant and bustling neighborhood in Singapore, renowned for its rich cultural heritage and diverse culinary offerings. From aromatic spices to colorful dishes, a culinary tour of Little India is a feast for the senses. Here are some must-try dishes and eateries that should be on your list.<br><br>\r\n\r\n1. Komala Vilas: A cornerstone of Little India\'s food scene, Komala Vilas is famed for its vegetarian South Indian cuisine. The dosas and thalis here are a celebration of flavors, with a perfect balance of spices and textures.<br><br>\r\n\r\n2. The Banana Leaf Apolo: Known for its signature fish head curry, The Banana Leaf Apolo serves traditional Indian dishes on banana leaves, enhancing the authenticity of the dining experience. The restaurant\'s generous portions and bold flavors make it a favorite among locals and tourists alike.<br><br>\r\n\r\n3. Mustard: Offering a unique blend of Bengali and Punjabi cuisines, Mustard is a culinary gem in Little India. The menu features an array of flavorful dishes, from the rich and creamy butter chicken to the tangy and spicy fish curry.<br><br>\r\n\r\n4. Muthu\'s Curry: A legend in its own right, Muthu\'s Curry has been serving mouthwatering South Indian cuisine since 1969. The restaurant\'s specialty, the signature fish head curry, is a must-try for anyone visiting Little India.<br><br>\r\n\r\n5. Ananda Bhavan: As the oldest Indian vegetarian restaurant in Singapore, Ananda Bhavan is a testament to the enduring appeal of traditional Indian cuisine. The extensive menu offers a variety of dishes, including dosas, idlis, and vadais, all made with the freshest ingredients.<br><br>\r\n\r\nExploring Little India through its food is an immersive experience that offers a glimpse into the rich cultural tapestry of Singapore. Each dish tells a story, reflecting the traditions and heritage of the Indian community. So, come hungry and ready to savor the vibrant flavors of Little India.', '2024-06-05', 6, 'images/blog_banner/indian.jpg'),
(5, 'Vegan Delights: Top 5 Plant-Based Restaurants in Singapore', 'images/blog_grid/vegan.jpg', 'Discover the best plant-based restaurants in Singapore that offer delicious and innovative vegan dishes, proving that vegan food can be both healthy and indulgent.', 'The vegan food scene in Singapore is thriving, with a growing number of restaurants offering creative and delicious plant-based dishes. Whether you\'re a dedicated vegan or simply looking to explore healthier dining options, here are the top five plant-based restaurants in Singapore that you need to try.<br><br>\r\n\r\nAfterglow: Located in Chinatown, Afterglow is a trendy eatery that specializes in raw and vegan cuisine. The menu features a variety of innovative dishes, from the signature raw lasagna to the hearty walnut ‘meat’ tacos. The restaurant\'s commitment to using fresh, locally sourced ingredients ensures that each dish is bursting with flavor.<br><br>\r\n\r\nReal Food: With multiple locations across the island, Real Food is a popular choice for those seeking wholesome and nutritious vegan meals. The extensive menu offers everything from hearty soups and salads to delectable pasta and rice dishes, all made without processed ingredients, artificial preservatives, or trans fats.<br><br>\r\n\r\nHRVST: Situated in the heart of the Central Business District, HRVST offers a modern and minimalist dining experience. The plant-based menu features an array of creative dishes, such as the beetroot tartare and the jackfruit rendang, proving that vegan food can be both sophisticated and satisfying.<br><br>\r\n\r\nVeganBurg: For those craving a burger, VeganBurg is the place to go. This all-vegan fast food joint offers a variety of mouthwatering burgers, including the Avocado Beetroot and the Smoky BBQ. The restaurant\'s commitment to sustainability extends beyond the food, with eco-friendly packaging and a focus on reducing waste.<br><br>\r\n\r\nLove Handle Burgers: Nestled in Ann Siang Hill, Love Handle Burgers is Singapore\'s first plant-based butcher and burger joint. The menu boasts an impressive range of burgers, sides, and shakes, all made with plant-based ingredients. The hearty and indulgent dishes here are sure to satisfy even the most ardent meat-lovers.<br><br>\r\n\r\nThese top plant-based restaurants showcase the versatility and creativity of vegan cuisine, offering delicious dishes that are good for both you and the planet. So, whether you\'re a long-time vegan or just curious about plant-based eating, these eateries are sure to impress.', '2024-05-22', 6, 'images/blog_banner/vegan.jpg');

-- --------------------------------------------------------

--
-- Table structure for table `cuisine`
--

CREATE TABLE `cuisine` (
  `CuisineID` int(1) NOT NULL,
  `C_Name` varchar(15) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `cuisine`
--

INSERT INTO `cuisine` (`CuisineID`, `C_Name`) VALUES
(1, 'Italian'),
(2, 'Mexican'),
(3, 'Japanese'),
(4, 'Indian'),
(5, 'French');

-- --------------------------------------------------------

--
-- Table structure for table `enquiry`
--

CREATE TABLE `enquiry` (
  `EnquiryID` int(1) NOT NULL,
  `Name` varchar(50) DEFAULT NULL,
  `Email` varchar(200) NOT NULL,
  `ContactNumber` int(8) DEFAULT NULL,
  `Enquiry` mediumtext NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `enquiry`
--

INSERT INTO `enquiry` (`EnquiryID`, `Name`, `Email`, `ContactNumber`, `Enquiry`) VALUES
(1, 'Ananda Ingle', 'inglewolf.mix@gmail.com', 0, 'Help, i am under the water. Please help me.');

-- --------------------------------------------------------

--
-- Table structure for table `pricerange`
--

CREATE TABLE `pricerange` (
  `RangeID` int(1) NOT NULL,
  `PriceRange` varchar(7) NOT NULL,
  `Symbol` varchar(3) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `pricerange`
--

INSERT INTO `pricerange` (`RangeID`, `PriceRange`, `Symbol`) VALUES
(1, 'Low', '$'),
(2, 'Medium', '$$'),
(3, 'High', '$$$');

-- --------------------------------------------------------

--
-- Table structure for table `publishedrecipe`
--

CREATE TABLE `publishedrecipe` (
  `RecipeID` int(1) NOT NULL,
  `RecipeName` varchar(100) DEFAULT NULL,
  `ShortDesc` mediumtext DEFAULT NULL,
  `GridImg` varchar(200) DEFAULT NULL,
  `LongDesc` longtext DEFAULT NULL,
  `PrepTime` int(2) DEFAULT NULL,
  `TotalTime` int(3) DEFAULT NULL,
  `Servings` int(2) DEFAULT NULL,
  `Calories` int(4) DEFAULT NULL,
  `UserID` int(1) DEFAULT NULL,
  `Ingredients` longtext DEFAULT NULL,
  `Instructions` longtext DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `publishedrecipe`
--

INSERT INTO `publishedrecipe` (`RecipeID`, `RecipeName`, `ShortDesc`, `GridImg`, `LongDesc`, `PrepTime`, `TotalTime`, `Servings`, `Calories`, `UserID`, `Ingredients`, `Instructions`) VALUES
(1, 'Spaghetti Carbonara', 'Classic Italian pasta dish with creamy sauce', 'images/rec_grids/carbonara.jpg', 'A classic Italian pasta dish made with eggs, cheese, pancetta, and pepper.', 15, 30, 4, 450, NULL, 'Spaghetti&Eggs&Cheese&Pancetta&Pepper', '1. Boil the spaghetti in salted water until al dente.&2. Fry the pancetta in a pan until crispy.&3. In a bowl, whisk together the eggs and cheese.&4. Drain the pasta and mix with the pancetta.&5. Quickly add the egg mixture, stirring continuously to create a creamy sauce.&6. Season with pepper and serve immediately.'),
(2, 'Chicken Alfredo', 'Creamy pasta with chicken and cheese', 'images/rec_grids/alfredo.jpg', 'A rich and creamy pasta dish made with chicken, cheese, and a buttery sauce.', 20, 40, 4, 600, 2, 'Pasta&Chicken&Cheese&Butter&Cream', '1. Cook the pasta in salted water until al dente.&2. In a pan, cook the chicken until golden brown and fully cooked.&3. In another pan, melt butter and add cream, simmering until thickened.&4. Stir in cheese until melted and smooth.&5. Combine the pasta, chicken, and sauce.&6. Mix well and serve warm.'),
(3, 'Beef Tacos', 'Mexican-style beef tacos with fresh toppings', 'images/rec_grids/taco.jpg', 'Delicious beef tacos with a variety of fresh toppings, perfect for a quick meal.', 10, 25, 6, 300, NULL, 'Beef&Taco shells&Lettuce&Tomato&Cheese', '1. Cook the ground beef in a pan until browned and fully cooked.&2. Season the beef with your favorite taco spices.&3. Chop the lettuce and tomatoes, and grate the cheese.&4. Warm the taco shells in the oven or microwave.&5. Fill each taco shell with beef, lettuce, tomato, and cheese.&6. Serve with salsa and sour cream.'),
(4, 'Caesar Salad', 'Fresh salad with Caesar dressing and croutons', 'images/rec_grids/salad.jpg', 'A fresh and crispy salad with Caesar dressing, croutons, and Parmesan cheese.', 10, 15, 4, 250, 4, 'Lettuce&Croutons&Parmesan&Caesar dressing', '1. Wash and chop the lettuce into bite-sized pieces.&2. Place the lettuce in a large bowl.&3. Add croutons and grated Parmesan cheese to the bowl.&4. Drizzle with Caesar dressing and toss to combine.&5. Serve immediately as a side or main dish.'),
(5, 'Margherita Pizza', 'Classic pizza with tomatoes, mozzarella, and basil', 'images/rec_grids/pizza.jpg', 'A simple yet delicious pizza topped with fresh tomatoes, mozzarella cheese, and basil leaves.', 20, 45, 8, 700, 5, 'Pizza dough&Tomatoes&Mozzarella&Basil', '1. Preheat your oven to the highest setting.&2. Roll out the pizza dough on a floured surface.&3. Spread a thin layer of tomato sauce over the dough.&4. Slice the tomatoes and arrange them on the pizza.&5. Tear the mozzarella and scatter it over the tomatoes.&6. Bake in the oven until the crust is golden and the cheese is bubbling.&7. Add fresh basil leaves before serving.'),
(6, 'Vegetable Stir-Fry', 'Quick and healthy vegetable stir-fry', 'images/rec_grids/stirfry.jpg', 'A quick and healthy stir-fry made with a mix of fresh vegetables and a savory sauce.', 10, 20, 4, 200, NULL, 'Mixed vegetables&Soy sauce&Garlic&Ginger', '1. Wash and chop the vegetables into bite-sized pieces.&2. Heat oil in a large pan or wok over high heat.&3. Add minced garlic and ginger, stir-frying until fragrant.&4. Add the vegetables and stir-fry for 5-7 minutes until tender-crisp.&5. Pour in soy sauce and toss to coat evenly.&6. Serve immediately with rice or noodles.');

-- --------------------------------------------------------

--
-- Table structure for table `ratingimg`
--

CREATE TABLE `ratingimg` (
  `Rating` int(1) NOT NULL,
  `Img` varchar(200) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `ratingimg`
--

INSERT INTO `ratingimg` (`Rating`, `Img`) VALUES
(0, 'images/ratings/rating-00.png'),
(1, 'images/ratings/rating-01.png'),
(2, 'images/ratings/rating-02.png'),
(3, 'images/ratings/rating-03.png'),
(4, 'images/ratings/rating-04.png'),
(5, 'images/ratings/rating-05.png');

-- --------------------------------------------------------

--
-- Table structure for table `restaurant`
--

CREATE TABLE `restaurant` (
  `RestaurantID` int(1) NOT NULL,
  `Name` varchar(50) NOT NULL,
  `Address` varchar(300) NOT NULL,
  `OpeningHours` varchar(50) NOT NULL,
  `CuisineID` int(1) NOT NULL,
  `PriceRangeID` int(1) NOT NULL,
  `ShortDescription` mediumtext NOT NULL,
  `LongDescription` longtext NOT NULL,
  `LogoImg` varchar(200) NOT NULL,
  `GridImg` varchar(200) NOT NULL,
  `R_Rating` int(1) DEFAULT NULL,
  `BannerImg` varchar(200) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `restaurant`
--

INSERT INTO `restaurant` (`RestaurantID`, `Name`, `Address`, `OpeningHours`, `CuisineID`, `PriceRangeID`, `ShortDescription`, `LongDescription`, `LogoImg`, `GridImg`, `R_Rating`, `BannerImg`) VALUES
(1, 'Ristorante Italiano', '123 Orchard Road, Singapore', '10:00 AM - 10:00 PM', 1, 1, 'Explore authentic Italian flavors in Orchard Road.', 'Experience the rich traditions of Italy at Ristorante Italiano. Located in the heart of Orchard Road, our restaurant offers a delightful array of classic Italian dishes prepared with the finest ingredients. From homemade pasta to wood-fired pizzas, each dish is crafted to perfection. Whether you\'re looking for a romantic dinner or a casual lunch, our cozy atmosphere and friendly service ensure a memorable dining experience.', 'images/r_logo/italianlogo.png', 'images/res_grids/italiangrid.jpg', 4, 'images/res_slide/italian.jpg'),
(2, 'Taco Bueno', '456 Sentosa Cove, Singapore', '11:00 AM - 11:00 PM', 2, 2, 'Indulge in vibrant Mexican street food at Sentosa Cove.', 'Taco Bueno brings the flavors of Mexico to Sentosa Cove. Our menu features a tantalizing selection of tacos, burritos, and nachos, each bursting with authentic Mexican spices and fresh ingredients. Whether you\'re craving a hearty meal or a quick snack, our lively ambiance and friendly staff ensure a festive dining experience. Come discover the taste of Mexico right here in Singapore!', 'images/r_logo/tacologo.png', 'images/res_grids/tacogrid.jpg', 4, 'images/res_slide/taco.jpg'),
(3, 'Sushi Sensation', '789 Marina Bay Sands, Singapore', '12:00 PM - 10:00 PM', 3, 3, 'Dive into fresh sushi and sashimi at Marina Bay Sands.', 'Sushi Sensation at Marina Bay Sands offers a journey into the art of Japanese cuisine. Our chefs skillfully prepare a variety of sushi and sashimi using the freshest seafood sourced locally and internationally. Whether you\'re a sushi enthusiast or new to Japanese cuisine, our restaurant provides a sophisticated dining experience with breathtaking views of Marina Bay. Immerse yourself in the flavors and elegance of Japan right here in Singapore.', 'images/r_logo/sushilogo.png', 'images/res_grids/sushigrid.jpg', 4, 'images/res_slide/sushi.jpg'),
(4, 'Spice Junction', '101 Little India, Singapore', '11:30 AM - 9:00 PM', 4, 1, 'Experience aromatic Indian flavors in Little India.', 'Spice Junction invites you to discover the diverse flavors of India in the heart of Little India. From North Indian curries to South Indian dosas, our menu celebrates the rich culinary heritage of India with authentic spices and traditional recipes. Each dish is crafted with care to offer a truly memorable dining experience. Join us for a culinary journey through India without leaving Singapore!', 'images/r_logo/spicelogo.png', 'images/res_grids/spicegrid.jpg', 4, 'images/res_slide/spice.jpg'),
(5, 'Le Bistro', '234 Clarke Quay, Singapore', '5:00 PM - 11:00 PM', 5, 2, 'Enjoy exquisite French dining along Clarke Quay.', 'Le Bistro epitomizes French culinary excellence in the vibrant setting of Clarke Quay. Our menu features classic French dishes prepared with a modern twist, using the finest ingredients sourced locally and from France. Whether you\'re celebrating a special occasion or enjoying a casual evening out, our restaurant offers a sophisticated yet relaxed atmosphere. Indulge in the art of French cuisine paired with a curated selection of wines and cocktails.', 'images/r_logo/bistrologo.png', 'images/res_grids/bistrogrid.jpg', 5, 'images/res_slide/bistro.jpg'),
(6, 'Burger Barn', '567 Orchard Towers, Singapore', '10:30 AM - 9:30 PM', 1, 3, 'Savory gourmet burgers and fries in Orchard Road.', 'Burger Barn is your go-to destination for gourmet burgers in Orchard Road. Our menu features a mouthwatering selection of burgers made from premium beef patties, accompanied by crisp fries and refreshing beverages. Each burger is crafted with care to satisfy your cravings for comfort food with a gourmet twist. Join us for a laid-back dining experience with friends and family, where every bite is a delight.', 'images/r_logo/barnlogo.png', 'images/res_grids/barngrid.jpg', 4, 'images/res_slide/barn.jpg'),
(7, 'Pizza Palace', '789 Bugis Junction, Singapore', '12:00 PM - 10:00 PM', 2, 1, 'Discover classic pizza recipes at Bugis Junction.', 'Pizza Palace at Bugis Junction is your destination for authentic, handcrafted pizzas. Our chefs prepare each pizza using fresh ingredients and traditional recipes, ensuring a perfect blend of flavors with every slice. Whether you prefer a classic Margherita or a gourmet specialty pizza, our menu offers something for everyone. Join us for a casual dining experience and savor the taste of Italy right here in Singapore.', 'images/r_logo/pizzalogo.png', 'images/res_grids/pizzagrid.jpg', 4, 'images/res_slide/pizza.jpg'),
(8, 'BBQ Haven', '890 East Coast Park, Singapore', '11:00 AM - 10:00 PM', 3, 2, 'Feast on Southern BBQ specialties at East Coast Park.', 'BBQ Haven at East Coast Park is a haven for BBQ enthusiasts. Our menu features a mouthwatering selection of smoked meats and Southern BBQ specialties, cooked low and slow to perfection. Enjoy the relaxed atmosphere and scenic views as you indulge in hearty BBQ meals with family and friends. Whether you\'re craving ribs, brisket, or pulled pork, our restaurant promises a flavorful dining experience by the seaside.', 'images/r_logo/bbqlogo.png', 'images/res_grids/bbqgrid.jpg', 2, 'images/res_slide/bbq.jpg'),
(9, 'Noodle House', '111 Chinatown, Singapore', '11:30 AM - 9:30 PM', 4, 3, 'Experience authentic Asian noodles in Chinatown.', 'Noodle House in Chinatown offers a delightful selection of Asian noodle dishes. From comforting bowls of ramen to spicy Singaporean laksa, our menu celebrates the diversity of Asian noodle cuisine. Each dish is prepared with fresh ingredients and authentic flavors, ensuring a satisfying dining experience. Join us to explore the vibrant world of Asian noodles in the heart of Singapore’s Chinatown.', 'images/r_logo/noodlelogo.png', 'images/res_grids/noodlegrid.jpg', 3, 'images/res_slide/noodle.jpg');

-- --------------------------------------------------------

--
-- Table structure for table `review`
--

CREATE TABLE `review` (
  `ReviewID` int(1) NOT NULL,
  `RestaurantID` int(1) DEFAULT NULL,
  `Date` date DEFAULT curdate(),
  `Review` mediumtext DEFAULT NULL,
  `UserID` int(1) DEFAULT NULL,
  `U_Rating` int(1) DEFAULT 0
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `review`
--

INSERT INTO `review` (`ReviewID`, `RestaurantID`, `Date`, `Review`, `UserID`, `U_Rating`) VALUES
(1, 1, '2023-06-15', 'Ristorante Italiano truly captures the essence of Italian cuisine. The pasta was cooked to perfection, and the tiramisu was divine. All the  dishes had amazing presentation.', 1, 5),
(2, 1, '2023-05-20', 'A delightful experience at Ristorante Italiano! The ambiance was cozy, and the staff were attentive. Highly recommend the seafood risotto.', 2, 4),
(3, 1, '2023-04-12', 'Authentic Italian flavors at its best. The pizzas were crispy and flavorful. Don\'t miss their homemade gelato!', 3, 5),
(4, 1, '2023-02-05', 'Disappointing experience. The pasta was overcooked and the service was slow.', 4, 2),
(5, 2, '2023-06-18', 'Taco Bueno is a hidden gem for Mexican food in Sentosa Cove. The tacos were bursting with flavor, and the guacamole was fresh.', 4, 4),
(6, 2, '2023-05-25', 'Amazing Mexican street food experience! The tacos al pastor were mouthwatering, and the margaritas were perfect for a sunny day.', 5, 5),
(7, 2, '2023-04-10', 'The food was decent, but the service could have been better.', 6, 3),
(8, 3, '2023-05-15', 'A fantastic sushi experience at Marina Bay Sands. The omakase menu was a culinary journey.', 7, 4),
(9, 3, '2023-01-02', 'Great ambiance but the service was slow and the sushi was average.', 9, 3),
(10, 4, '2023-06-10', 'Spice Junction offers a flavorful journey through Indian cuisine. The chicken tikka masala was rich and aromatic.', 1, 4),
(11, 4, '2023-05-20', 'Delicious Indian dishes! The naan bread was fluffy, and the mango lassi was refreshing.', 2, 5),
(12, 4, '2023-03-05', 'Warm hospitality and authentic Indian flavors. The biryani rice was packed with spices.', 3, 4),
(13, 4, '2023-01-10', 'The food was too spicy and the portions were small.', 4, 2),
(14, 5, '2023-06-12', 'Le Bistro offers an elegant French dining experience along Clarke Quay. The duck confit was tender, and the crème brûlée was a perfect finish.', 5, 5),
(15, 5, '2023-05-22', 'Excellent service and delightful French cuisine. The escargots were savory, and the wine selection was impressive.', 6, 4),
(16, 5, '2023-03-15', 'A romantic dinner at Le Bistro was unforgettable. The steak frites melted in my mouth.', 7, 5),
(17, 6, '2023-06-08', 'Burger Barn serves up juicy burgers and crispy fries in Orchard Road. The BBQ bacon burger was messy but delicious!', 9, 4),
(18, 6, '2023-05-25', 'Great selection of gourmet burgers. The truffle fries were a hit!', 1, 3),
(19, 7, '2023-06-15', 'Pizza Palace at Bugis Junction has the best pizza in town. The margherita pizza was simple yet flavorful.', 2, 5),
(20, 7, '2023-05-20', 'Delicious thin-crust pizzas with generous toppings. The garlic knots were addictively good.', 3, 4),
(21, 7, '2023-04-12', 'Cozy ambiance and friendly staff. Pizza Palace is a great spot for a casual meal with friends.', 4, 4),
(22, 8, '2023-06-18', 'BBQ Haven at East Coast Park is a paradise for BBQ enthusiasts. The ribs were fall-off-the-bone tender, and the cornbread was delightful.', 5, 4),
(23, 8, '2023-05-25', 'Great BBQ selection and ocean views. Perfect for a family outing.', 6, 3),
(24, 9, '2023-06-20', 'Noodle House in Chinatown serves up comforting noodle dishes. The wonton soup warmed my soul.', 8, 3),
(25, 9, '2023-05-15', 'Authentic Asian noodles with a variety of toppings. The spicy beef noodles were flavorful and satisfying.', 9, 4),
(26, 9, '2023-03-08', 'Quick service and good portion sizes. The dumplings were delicious!', 1, 3),
(27, 9, '2023-01-02', 'The noodles were overcooked and lacked flavor.', 2, 2),
(40, 8, '2024-07-28', 'Great', 10, 0);

--
-- Triggers `review`
--
DELIMITER $$
CREATE TRIGGER `update_rating_avg` AFTER INSERT ON `review` FOR EACH ROW UPDATE restaurant SET R_Rating = (SELECT ROUND(AVG(U_Rating),0) from review WHERE RestaurantID = NEW.restaurantID) WHERE RestaurantID = NEW.restaurantID
$$
DELIMITER ;
DELIMITER $$
CREATE TRIGGER `update_rating_avg_del` AFTER DELETE ON `review` FOR EACH ROW UPDATE restaurant SET R_Rating = (SELECT ROUND(AVG(U_Rating),0) from review WHERE RestaurantID = OLD.restaurantID) WHERE RestaurantID = OLD.restaurantID
$$
DELIMITER ;
DELIMITER $$
CREATE TRIGGER `update_rating_avg_update` AFTER UPDATE ON `review` FOR EACH ROW UPDATE restaurant SET R_Rating = (SELECT ROUND(AVG(U_Rating),0) from review WHERE RestaurantID = NEW.restaurantID) WHERE RestaurantID = NEW.restaurantID
$$
DELIMITER ;

-- --------------------------------------------------------

--
-- Table structure for table `submittedrecipe`
--

CREATE TABLE `submittedrecipe` (
  `SubmissionID` int(1) NOT NULL,
  `UserID` int(1) NOT NULL,
  `RecipeName` varchar(100) NOT NULL,
  `RecipeDesc` longtext NOT NULL,
  `Recipe` longtext NOT NULL,
  `AuthCredit` varchar(3) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `submittedrecipe`
--

INSERT INTO `submittedrecipe` (`SubmissionID`, `UserID`, `RecipeName`, `RecipeDesc`, `Recipe`, `AuthCredit`) VALUES
(1, 10, 'Marinated Cheese', 'Cheese soaked in olive oil, black pepper, chilli flakes and garlic.', 'Choose any type of cheese.', 'Yes');

-- --------------------------------------------------------

--
-- Table structure for table `user`
--

CREATE TABLE `user` (
  `UserID` int(1) NOT NULL,
  `FirstName` varchar(30) NOT NULL,
  `LastName` varchar(30) DEFAULT NULL,
  `Email` varchar(200) NOT NULL,
  `Password` varchar(10) NOT NULL,
  `Gender` varchar(6) NOT NULL,
  `ShortBio` mediumtext DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `user`
--

INSERT INTO `user` (`UserID`, `FirstName`, `LastName`, `Email`, `Password`, `Gender`, `ShortBio`) VALUES
(1, 'Emma', 'Williams', 'emma.williams@mail.com', 'inglewolf', 'Female', 'Passionate about cooking and experimenting with new recipes. I love desserts!'),
(2, 'Liam', NULL, 'liam.johnson@mail.com', 'Liam456!', 'Male', NULL),
(3, 'Olivia', NULL, 'olivia.brown@mail.com', 'Olivia789!', 'Female', 'Enjoys baking and trying out different cuisines.'),
(4, 'Noah', 'Davis', 'noah.davis@mail.com', 'Noah321!', 'Male', NULL),
(5, 'Ava', NULL, 'ava.miller@mail.com', 'Ava654!', 'Female', NULL),
(6, 'William', 'Wilson', 'william.wilson@mail.com', 'Will987!', 'Male', 'Food lover who enjoys exploring local eateries.'),
(7, 'Sophia', NULL, 'sophia.moore@mail.com', 'Sophia135!', 'Female', 'Passionate about sustainable cooking and farm-to-table dining.'),
(8, 'James', 'Taylor', 'james.taylor@mail.com', 'James246!', 'Male', NULL),
(9, 'Mia', NULL, 'mia.anderson@mail.com', 'Mia579!', 'Female', NULL),
(10, 'Ananda', 'Ingle', 'inglewolf.mix@gmail.com', 'ingle123', 'Female', NULL);

--
-- Indexes for dumped tables
--

--
-- Indexes for table `blog`
--
ALTER TABLE `blog`
  ADD PRIMARY KEY (`PostID`);

--
-- Indexes for table `cuisine`
--
ALTER TABLE `cuisine`
  ADD PRIMARY KEY (`CuisineID`);

--
-- Indexes for table `enquiry`
--
ALTER TABLE `enquiry`
  ADD PRIMARY KEY (`EnquiryID`);

--
-- Indexes for table `pricerange`
--
ALTER TABLE `pricerange`
  ADD PRIMARY KEY (`RangeID`);

--
-- Indexes for table `publishedrecipe`
--
ALTER TABLE `publishedrecipe`
  ADD PRIMARY KEY (`RecipeID`),
  ADD KEY `UserID` (`UserID`);

--
-- Indexes for table `ratingimg`
--
ALTER TABLE `ratingimg`
  ADD PRIMARY KEY (`Rating`);

--
-- Indexes for table `restaurant`
--
ALTER TABLE `restaurant`
  ADD PRIMARY KEY (`RestaurantID`),
  ADD KEY `CuisineID` (`CuisineID`),
  ADD KEY `PriceRangeID` (`PriceRangeID`),
  ADD KEY `Rating` (`R_Rating`);

--
-- Indexes for table `review`
--
ALTER TABLE `review`
  ADD PRIMARY KEY (`ReviewID`),
  ADD KEY `RestaurantID` (`RestaurantID`),
  ADD KEY `UserID` (`UserID`),
  ADD KEY `Rating` (`U_Rating`) USING BTREE;

--
-- Indexes for table `submittedrecipe`
--
ALTER TABLE `submittedrecipe`
  ADD PRIMARY KEY (`SubmissionID`),
  ADD KEY `UserID` (`UserID`);

--
-- Indexes for table `user`
--
ALTER TABLE `user`
  ADD PRIMARY KEY (`UserID`),
  ADD UNIQUE KEY `Email` (`Email`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `blog`
--
ALTER TABLE `blog`
  MODIFY `PostID` int(1) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=6;

--
-- AUTO_INCREMENT for table `cuisine`
--
ALTER TABLE `cuisine`
  MODIFY `CuisineID` int(1) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=6;

--
-- AUTO_INCREMENT for table `enquiry`
--
ALTER TABLE `enquiry`
  MODIFY `EnquiryID` int(1) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;

--
-- AUTO_INCREMENT for table `pricerange`
--
ALTER TABLE `pricerange`
  MODIFY `RangeID` int(1) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=5;

--
-- AUTO_INCREMENT for table `publishedrecipe`
--
ALTER TABLE `publishedrecipe`
  MODIFY `RecipeID` int(1) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=7;

--
-- AUTO_INCREMENT for table `restaurant`
--
ALTER TABLE `restaurant`
  MODIFY `RestaurantID` int(1) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=11;

--
-- AUTO_INCREMENT for table `review`
--
ALTER TABLE `review`
  MODIFY `ReviewID` int(1) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=42;

--
-- AUTO_INCREMENT for table `submittedrecipe`
--
ALTER TABLE `submittedrecipe`
  MODIFY `SubmissionID` int(1) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;

--
-- AUTO_INCREMENT for table `user`
--
ALTER TABLE `user`
  MODIFY `UserID` int(1) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=14;

--
-- Constraints for dumped tables
--

--
-- Constraints for table `publishedrecipe`
--
ALTER TABLE `publishedrecipe`
  ADD CONSTRAINT `publishedrecipe_ibfk_1` FOREIGN KEY (`UserID`) REFERENCES `user` (`UserID`);

--
-- Constraints for table `restaurant`
--
ALTER TABLE `restaurant`
  ADD CONSTRAINT `restaurant_ibfk_1` FOREIGN KEY (`CuisineID`) REFERENCES `cuisine` (`CuisineID`),
  ADD CONSTRAINT `restaurant_ibfk_2` FOREIGN KEY (`PriceRangeID`) REFERENCES `pricerange` (`RangeID`),
  ADD CONSTRAINT `restaurant_ibfk_4` FOREIGN KEY (`R_Rating`) REFERENCES `ratingimg` (`Rating`);

--
-- Constraints for table `review`
--
ALTER TABLE `review`
  ADD CONSTRAINT `review_ibfk_1` FOREIGN KEY (`RestaurantID`) REFERENCES `restaurant` (`RestaurantID`),
  ADD CONSTRAINT `review_ibfk_2` FOREIGN KEY (`UserID`) REFERENCES `user` (`UserID`),
  ADD CONSTRAINT `review_ibfk_3` FOREIGN KEY (`U_Rating`) REFERENCES `ratingimg` (`Rating`);

--
-- Constraints for table `submittedrecipe`
--
ALTER TABLE `submittedrecipe`
  ADD CONSTRAINT `submittedrecipe_ibfk_1` FOREIGN KEY (`UserID`) REFERENCES `user` (`UserID`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
