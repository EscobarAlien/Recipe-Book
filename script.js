document.addEventListener('DOMContentLoaded', () => {

    // --- SAMPLE RECIPE DATA ---
    // IMPORTANT: Keep using the sample data structure. Add your 100+ recipes here.
    // Remember the performance implications. Fetching from an API is the best practice for large datasets.
    const recipes = [
        { id: 1, title: "Spaghetti Carbonara", description: "Classic Roman pasta with eggs, cheese, pancetta.", image: "C:\Users\COMPUTER SOLUTION\Downloads\bet.jpg", ingredients: ["Spaghetti", "Eggs", "Pecorino Romano", "Guanciale (or Pancetta)", "Black Pepper"], instructions: "1. Cook spaghetti al dente.\n2. Fry guanciale until crisp; reserve fat.\n3. Whisk eggs, cheese, and pepper.\n4. Combine hot pasta with guanciale fat off heat.\n5. Quickly stir in egg mixture (heat of pasta cooks it).\n6. Add crispy guanciale, more pepper, and serve immediately.", country: "Italy", isFavorite: false },
        { id: 2, title: "Chicken Tikka Masala", description: "Roasted marinated chicken in spiced curry sauce.", image: "https://images.unsplash.com/photo-1588166524941-3bf61a9c41db?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80", ingredients: ["Chicken Breast", "Yogurt", "Tikka Masala Spice Blend", "Tomato Puree", "Heavy Cream", "Onion", "Garlic", "Ginger", "Garam Masala"], instructions: "1. Marinate chicken chunks in yogurt & tikka spices (few hours or overnight).\n2. Grill or bake chicken until cooked.\n3. Sauté chopped onion, garlic, ginger.\n4. Add tomato puree, spices, simmer.\n5. Stir in cream and garam masala.\n6. Add cooked chicken, heat through.\n7. Garnish with cilantro and serve with rice or naan.", country: "UK / India", isFavorite: false },
        { id: 3, title: "Sushi Rolls (Maki)", description: "Vinegared rice & fillings rolled in seaweed.", image: "https://images.unsplash.com/photo-1579871494447-9811cf80d66c?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80", ingredients: ["Sushi Rice", "Nori Seaweed Sheets", "Sushi-grade Fish (e.g., Salmon, Tuna)", "Cucumber", "Avocado", "Rice Vinegar", "Sugar", "Salt", "Soy Sauce", "Wasabi", "Pickled Ginger"], instructions: "1. Cook sushi rice; season with vinegar, sugar, salt mixture while warm.\n2. Lay nori sheet on bamboo mat (shiny side down).\n3. Wet hands, spread thin layer of rice, leaving top border clear.\n4. Arrange fillings horizontally near bottom edge.\n5. Tightly roll using the mat.\n6. Moisten top border to seal.\n7. Slice roll with sharp, wet knife.\n8. Serve with soy sauce, wasabi, ginger.", country: "Japan", isFavorite: false },
        { id: 4, title: "Beef Tacos", description: "Seasoned ground beef in shells with toppings.", image: "https://images.unsplash.com/photo-1565299712413-8af9157f013b?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80", ingredients: ["Ground Beef", "Taco Seasoning", "Water", "Taco Shells (Hard or Soft)", "Lettuce", "Tomato", "Shredded Cheese", "Salsa", "Sour Cream", "Onion"], instructions: "1. Brown ground beef in skillet; drain excess fat.\n2. Stir in taco seasoning and water.\n3. Bring to a simmer and cook until sauce thickens slightly (5-7 mins).\n4. Warm taco shells according to package.\n5. Assemble tacos: fill shells with beef mixture, top with lettuce, tomato, cheese, onion, salsa, and sour cream.", country: "Mexico / USA", isFavorite: true },
        { id: 5, title: "French Onion Soup", description: "Caramelized onions in broth, topped with bread & cheese.", image: "https://images.unsplash.com/photo-1546833174-2747414e4e8d?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80", ingredients: ["Yellow Onions", "Beef Broth", "Butter", "Dry White Wine (optional)", "Flour", "Baguette slices", "Gruyère Cheese", "Thyme", "Bay Leaf"], instructions: "1. Thinly slice onions.\n2. Melt butter in large pot over medium-low heat.\n3. Add onions and cook slowly, stirring occasionally, until deeply caramelized (30-45+ mins).\n4. Stir in flour, cook for 1 min.\n5. Deglaze with wine (if using), scraping bottom.\n6. Gradually whisk in beef broth. Add thyme and bay leaf.\n7. Simmer for at least 20-30 mins.\n8. Toast baguette slices.\n9. Ladle soup into oven-safe bowls. Top with toast and generously cover with grated Gruyère.\n10. Broil until cheese is melted, bubbly, and golden brown.", country: "France", isFavorite: false },
        { id: 6, title: "Pad Thai", description: "Stir-fried rice noodles with shrimp/tofu, peanuts & lime.", image: "https://images.unsplash.com/photo-1562565652-a0d8f0c59eb4?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80", ingredients: ["Flat Rice Noodles", "Shrimp or Tofu", "Eggs", "Tamarind Paste", "Fish Sauce", "Palm Sugar (or Brown Sugar)", "Garlic Chives (or Green Onions)", "Bean Sprouts", "Roasted Peanuts", "Lime Wedges", "Dried Red Chili Flakes (optional)", "Garlic", "Shallots"], instructions: "1. Soak rice noodles in warm water until pliable but firm; drain.\n2. Mix tamarind paste, fish sauce, and sugar for sauce.\n3. Heat oil in wok/large skillet. Stir-fry garlic and shallots.\n4. Add protein (shrimp/tofu), cook until almost done.\n5. Push ingredients aside, crack eggs into wok, scramble lightly.\n6. Add drained noodles and sauce. Toss constantly over high heat until noodles absorb sauce and are tender.\n7. Add bean sprouts and chives, toss briefly.\n8. Serve immediately, topped with crushed peanuts, chili flakes (if using), and a lime wedge.", country: "Thailand", isFavorite: false },
        { id: 7, title: "Greek Salad (Horiatiki)", description: "Refreshing salad with tomatoes, cucumbers, olives, feta.", image: "https://images.unsplash.com/photo-1604908176997-125f25cc6f3d?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80", ingredients: ["Ripe Tomatoes", "Cucumber", "Red Onion", "Green Bell Pepper (optional)", "Kalamata Olives", "Feta Cheese (block)", "Extra Virgin Olive Oil", "Dried Oregano", "Red Wine Vinegar (optional)"], instructions: "1. Chop tomatoes and cucumber into large chunks.\n2. Thinly slice red onion and bell pepper (if using).\n3. Combine vegetables in a large shallow bowl.\n4. Add Kalamata olives.\n5. Place a generous block of feta cheese on top (or crumble if preferred).\n6. Drizzle generously with high-quality extra virgin olive oil.\n7. Sprinkle with dried oregano.\n8. Add a splash of red wine vinegar if desired.\n9. Serve immediately. Traditionally not tossed before serving.", country: "Greece", isFavorite: false },
        { id: 8, title: "Apple Pie", description: "Classic dessert with flaky crust and spiced apples.", image: "https://images.unsplash.com/photo-1562447411-34c83795009d?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80", ingredients: ["Apples (Granny Smith, Honeycrisp mix)", "All-Purpose Flour", "Unsalted Butter", "Sugar", "Cinnamon", "Nutmeg", "Allspice", "Lemon Juice", "Salt", "Egg (for wash)", "Prepared Pie Crust Dough (or homemade)"], instructions: "1. Preheat oven to 400°F (200°C).\n2. Prepare pie crust (roll out bottom crust, place in pie dish).\n3. Peel, core, and slice apples thinly.\n4. In a large bowl, toss apples with sugar, flour, cinnamon, nutmeg, allspice, lemon juice, and salt.\n5. Pour apple filling into bottom crust. Dot with small pieces of butter.\n6. Place top crust over filling. Trim excess dough, seal edges, crimp decoratively.\n7. Cut vents in top crust for steam to escape.\n8. Brush top crust with egg wash (beaten egg + 1 tbsp water).\n9. Bake for 20 minutes at 400°F, then reduce heat to 375°F (190°C) and bake for another 30-40 minutes, or until crust is golden and filling is bubbly.\n10. Let cool completely before slicing and serving.", country: "USA / Europe", isFavorite: false },
        { id: 9, title: "Vietnamese Pho", description: "Aromatic noodle soup with rich broth, noodles & herbs.", image: "https://images.unsplash.com/photo-1585101800734-43f85d158f4c?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80", ingredients: ["Beef Bones (marrow, knuckle)", "Rice Noodles (banh pho)", "Beef Sirloin or Flank Steak (thinly sliced)", "Onion", "Ginger", "Star Anise", "Cinnamon Stick", "Cloves", "Cardamom Pods", "Fish Sauce", "Sugar", "Salt", "Garnishes: Bean Sprouts, Fresh Herbs (Mint, Thai Basil, Cilantro), Lime Wedges, Jalapeño slices, Hoisin Sauce, Sriracha"], instructions: "1. Char onion and ginger. Rinse beef bones well.\n2. Add bones, charred onion/ginger, and toasted spices (star anise, cinnamon, cloves, cardamom) to large stockpot. Cover with water.\n3. Simmer gently for at least 3-6 hours (longer is better), skimming impurities.\n4. Strain broth through fine mesh sieve. Season with fish sauce, sugar, and salt to taste.\n5. Cook rice noodles according to package directions; drain.\n6. Place cooked noodles in serving bowls. Top with thin slices of raw beef (broth will cook it).\n7. Ladle boiling hot broth over noodles and beef.\n8. Serve immediately with a platter of fresh garnishes on the side for diners to add themselves.", country: "Vietnam", isFavorite: true },
        { id: 10, title: "Paella Valenciana", description: "Spanish rice dish with rabbit, chicken, beans & saffron.", image: "https://images.unsplash.com/photo-1574782537929-152d8c8f76bf?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80", ingredients: ["Short-grain Rice (Bomba or Calasparra)", "Chicken pieces (bone-in)", "Rabbit pieces (bone-in)", "Flat Green Beans (bajoqueta)", "Lima Beans (garrofó)", "Grated Tomato", "Saffron threads", "Sweet Paprika", "Olive Oil", "Water or Broth", "Salt", "Rosemary sprig"], instructions: "1. Heat generous olive oil in a wide, shallow paella pan over medium-high heat.\n2. Brown chicken and rabbit pieces; season with salt. Push to outer edges of pan.\n3. Add green beans to center, sauté until tender.\n4. Add grated tomato and paprika, cook until darkened slightly.\n5. Pour in water/broth (ratio depends on pan/rice, approx 3:1 water to rice volume). Bring to boil.\n6. Add saffron and salt to taste. Let boil rapidly for a few minutes.\n7. Sprinkle rice evenly across the pan. Distribute meat/beans evenly. DO NOT STIR from now on.\n8. Cook over medium-high heat for ~10 mins, then reduce heat to low and simmer for another ~8-10 mins, until liquid is absorbed.\n9. For 'socarrat' (crusty bottom), increase heat slightly for last minute (listen for crackling, careful not to burn).\n10. Remove from heat, add rosemary sprig, cover loosely with foil or towel, let rest 5-10 mins before serving.", country: "Spain", isFavorite: false },
        { id: 11, title: "German Schnitzel", description: "Thinly pounded meat, breaded and fried golden.", image: "https://plus.unsplash.com/premium_photo-1675882642674-9095cc654ef1?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80", ingredients: ["Pork Cutlets or Veal Cutlets", "All-Purpose Flour", "Eggs", "Plain Breadcrumbs", "Vegetable Oil or Clarified Butter (Butterschmalz)", "Salt", "Pepper", "Lemon Wedges (for serving)"], instructions: "1. Place cutlets between plastic wrap. Pound very thin (about 1/4 inch) with meat mallet.\n2. Season cutlets with salt and pepper.\n3. Set up three shallow dishes: one with flour, one with beaten eggs, one with breadcrumbs.\n4. Dredge each schnitzel first in flour (shake off excess), then dip completely in egg, finally coat thoroughly with breadcrumbs, pressing gently.\n5. Heat generous amount of oil or clarified butter in large skillet over medium-high heat (enough to shallow fry).\n6. Carefully place schnitzel in hot fat. Fry for 2-4 minutes per side, until golden brown and crispy.\n7. Remove from skillet, drain briefly on paper towels.\n8. Serve immediately with fresh lemon wedges.", country: "Germany / Austria", isFavorite: false },
        { id: 12, title: "Chocolate Lava Cake", description: "Individual cakes with a gooey, molten chocolate center.", image: "https://images.unsplash.com/photo-1587314168485-3236d6710814?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80", ingredients: ["Bittersweet Chocolate (good quality, ~70%)", "Unsalted Butter", "Large Eggs", "Egg Yolks", "Granulated Sugar", "All-Purpose Flour", "Salt", "Cocoa Powder (for dusting)", "Raspberries/Powdered Sugar (for garnish, optional)"], instructions: "1. Preheat oven to 425°F (220°C). Generously butter and flour (or cocoa powder) 4-6 small ramekins.\n2. Coarsely chop chocolate. Melt chocolate and butter together over double boiler or in microwave (stirring often); let cool slightly.\n3. In a separate bowl, whisk whole eggs, egg yolks, and sugar until pale and slightly thickened (about 2 mins).\n4. Gently fold the melted chocolate mixture into the egg mixture.\n5. Fold in the flour and salt until just combined (do not overmix).\n6. Divide batter evenly among prepared ramekins.\n7. Place ramekins on baking sheet. Bake for 10-14 minutes, until edges are firm but centers are still soft and slightly jiggly.\n8. Let cool in ramekins for 1-2 minutes.\n9. Carefully run a thin knife around edge of each cake. Invert onto serving plates.\n10. Garnish with raspberries or powdered sugar, serve immediately.", country: "USA / France", isFavorite: false },
        {
            "id": "tomato-pasta-classic",
            "title": "Classic Tomato Pasta",
            "description": "A simple, timeless Italian pasta dish perfect for any night. Rich tomato sauce with fresh basil.",
            "image": "https://images.unsplash.com/photo-1598866594230-a7c12756260f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8dG9tYXRvJTIwcGFzdGF8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=400&q=60",
            "ingredients": [
              "200g Spaghetti", "1 tbsp Olive Oil", "2 cloves Garlic, minced", "400g Canned Chopped Tomatoes", "1 tsp Dried Oregano", "Handful Fresh Basil", "Salt & Pepper", "Parmesan Cheese (optional)"
            ],
            "instructions": [
              "Cook pasta per package directions. Reserve pasta water.", "Heat oil, sauté garlic.", "Add tomatoes, oregano, salt, pepper. Simmer 10-15 mins.", "Stir in pasta, basil. Add pasta water if needed.", "Serve with Parmesan."
            ],
            "prepTime": 10, "cookTime": 20, "difficulty": "Easy", "cuisine": "Italian", "tags": ["pasta", "vegetarian", "quick", "italian", "dinner"]
          },
          {
            "id": "chicken-curry-simple",
            "title": "Simple Chicken Curry",
            "description": "A flavorful and comforting Indian chicken curry that's surprisingly easy to make.",
            "image": "https://images.unsplash.com/photo-1604329763689-3b27d20579c5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8Y2hpY2tlbiUyMGN1cnJ5fGVufDB8fDB8fHww&auto=format&fit=crop&w=400&q=60",
            "ingredients": [
              "1 tbsp Veg Oil", "1 Onion, chopped", "2 cloves Garlic", "1 tbsp Ginger", "500g Chicken Breast, cubed", "2 tbsp Curry Powder", "400ml Coconut Milk", "100ml Chicken Broth", "Salt", "Fresh Cilantro"
            ],
            "instructions": [
              "Heat oil, sauté onion.", "Add garlic, ginger.", "Add chicken, brown lightly.", "Stir in curry powder.", "Add coconut milk, broth. Simmer.", "Cook 15-20 mins until chicken done.", "Season, garnish with cilantro."
            ],
            "prepTime": 15, "cookTime": 25, "difficulty": "Medium", "cuisine": "Indian", "tags": ["chicken", "curry", "indian", "dinner", "gluten-free"]
          },
          {
            "id": "choc-chip-cookies",
            "title": "Chewy Chocolate Chip Cookies",
            "description": "The ultimate chewy classic American chocolate chip cookies.",
            "image": "https://images.unsplash.com/photo-1499636136210-6f4ee915583e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8Y2hvY29sYXRlJTIwY2hpcCUyMGNvb2tpZXN8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=400&q=60",
            "ingredients": [
              "2 1/4 cups Flour", "1 tsp Baking Soda", "1 tsp Salt", "1 cup Butter, softened", "3/4 cup Sugar", "3/4 cup Brown Sugar", "1 tsp Vanilla", "2 Large Eggs", "2 cups Chocolate Chips"
            ],
            "instructions": [
              "Preheat oven 375°F (190°C). Whisk dry ingredients.", "Cream butter & sugars.", "Beat in eggs & vanilla.", "Mix in dry ingredients.", "Stir in chips.", "Drop spoonfuls onto baking sheet.", "Bake 9-11 mins.", "Cool slightly on sheet, then wire rack."
            ],
            "prepTime": 20, "cookTime": 10, "difficulty": "Easy", "cuisine": "American", "tags": ["dessert", "baking", "cookies", "sweet", "vegetarian"]
          },
          {
            "id": "guacamole-fresh",
            "title": "Fresh Homemade Guacamole",
            "description": "Quick, easy, and incredibly fresh Mexican guacamole. Perfect dip or topping.",
            "image": "https://images.unsplash.com/photo-1599805960574-a7d50b6446a8?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8Z3VhY2Ftb2xlfGVufDB8fDB8fHww&auto=format&fit=crop&w=400&q=60",
            "ingredients": [
              "3 Ripe Avocados", "1/2 Small Red Onion, chopped", "1-2 Roma Tomatoes, diced", "1 Jalapeño, minced (optional)", "1/4 cup Fresh Cilantro, chopped", "1 Lime, juiced", "1/2 tsp Salt", "Pinch Cumin (optional)"
            ],
            "instructions": [
              "Mash avocados.", "Add onion, tomatoes, jalapeño, cilantro.", "Stir in lime juice, salt, cumin.", "Mix gently.", "Taste and adjust seasoning.", "Serve immediately."
            ],
            "prepTime": 15, "cookTime": 0, "difficulty": "Easy", "cuisine": "Mexican", "tags": ["appetizer", "dip", "mexican", "vegetarian", "gluten-free", "quick", "no-cook"]
          },
          {
            "id": "thai-green-curry",
            "title": "Thai Green Curry with Tofu",
            "description": "A fragrant and spicy Thai green curry made with tofu and vegetables.",
            "image": "https://images.unsplash.com/photo-1564844538674-ce3748c6f355?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8dGhhaSUyMGdyZWVuJTIwY3Vycnl8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=400&q=60",
            "ingredients": [
              "1 tbsp Coconut Oil", "2-3 tbsp Green Curry Paste", "400ml Coconut Milk", "200g Firm Tofu, cubed", "1 cup Broccoli Florets", "1 Red Bell Pepper, sliced", "1 cup Snap Peas", "1 tbsp Soy Sauce", "1 tsp Sugar", "Fresh Basil Leaves", "Lime Wedges"
            ],
            "instructions": [
              "Heat oil, fry curry paste until fragrant (1-2 min).", "Stir in coconut milk, bring to simmer.", "Add tofu, broccoli, bell pepper. Simmer 5-7 min.", "Add snap peas, soy sauce, sugar. Cook 2 min more.", "Stir in basil leaves.", "Serve hot with rice and lime wedges."
            ],
            "prepTime": 15, "cookTime": 20, "difficulty": "Medium", "cuisine": "Thai", "tags": ["thai", "curry", "vegetarian", "vegan", "spicy", "dinner", "tofu"]
          },
          {
            "id": "french-onion-soup",
            "title": "Classic French Onion Soup",
            "description": "Rich and savory French onion soup topped with crusty bread and melted Gruyère cheese.",
            "image": "https://images.unsplash.com/photo-1543481131-665276a1939a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8ZnJlbmNoJTIwb25pb24lMjBzb3VwfGVufDB8fDB8fHww&auto=format&fit=crop&w=400&q=60",
            "ingredients": [
              "4 Large Onions, thinly sliced", "3 tbsp Butter", "1 tbsp Olive Oil", "1 tsp Sugar", "1/2 cup Dry White Wine (optional)", "6 cups Beef Broth", "Salt & Pepper", "Baguette slices, toasted", "Gruyère Cheese, grated"
            ],
            "instructions": [
              "Melt butter and oil in large pot.", "Add onions and sugar. Cook low & slow until deeply caramelized (30-45 min).", "Deglaze with white wine if using, scraping bottom.", "Add beef broth, salt, pepper. Simmer 20 min.", "Ladle soup into oven-safe bowls.", "Top with toasted baguette slice, cover generously with cheese.", "Broil until cheese is melted and bubbly."
            ],
            "prepTime": 15, "cookTime": 60, "difficulty": "Medium", "cuisine": "French", "tags": ["soup", "french", "comfort food", "appetizer", "cheese"]
          },
          {
            "id": "greek-salad",
            "title": "Authentic Greek Salad (Horiatiki)",
            "description": "A refreshing and simple Greek salad with tomatoes, cucumber, olives, feta, and oregano.",
            "image": "https://images.unsplash.com/photo-1505253716362-afaea1d3d1af?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8Z3JlZWslMjBzYWxhZHxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=400&q=60",
            "ingredients": [
              "3 Large Tomatoes, cut into wedges", "1 Cucumber, sliced", "1 Green Bell Pepper, sliced", "1/2 Red Onion, thinly sliced", "1/2 cup Kalamata Olives", "200g Feta Cheese block", "Dried Oregano", "Extra Virgin Olive Oil", "Red Wine Vinegar (optional)"
            ],
            "instructions": [
              "Combine tomatoes, cucumber, pepper, onion, olives in a large bowl.", "Place the block of feta cheese on top (or crumble if preferred).", "Sprinkle generously with dried oregano.", "Drizzle liberally with extra virgin olive oil.", "Optionally, add a splash of red wine vinegar.", "Toss gently just before serving or serve as is."
            ],
            "prepTime": 15, "cookTime": 0, "difficulty": "Easy", "cuisine": "Greek", "tags": ["salad", "greek", "vegetarian", "gluten-free", "fresh", "no-cook", "healthy"]
          },
          {
            "id": "japanese-ramen",
            "title": "Quick Miso Ramen",
            "description": "A simplified yet flavorful Japanese miso ramen bowl you can make at home.",
            "image": "https://images.unsplash.com/photo-1557872943-16a5ac26437e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8cmFtZW58ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=400&q=60",
            "ingredients": [
              "2 packs Instant Ramen Noodles (discard seasoning)", "4 cups Chicken or Vegetable Broth", "2 tbsp Miso Paste", "1 tbsp Soy Sauce", "1 tsp Sesame Oil", "Toppings: Sliced Pork/Chicken/Tofu, Soft-boiled Egg, Corn, Green Onions, Nori sheets"
            ],
            "instructions": [
              "Cook ramen noodles according to package, drain.", "In a pot, bring broth to a simmer.", "Whisk in miso paste until dissolved (don't boil rapidly).", "Stir in soy sauce and sesame oil.", "Divide noodles into bowls.", "Pour hot broth over noodles.", "Arrange your desired toppings.", "Serve immediately."
            ],
            "prepTime": 10, "cookTime": 15, "difficulty": "Easy", "cuisine": "Japanese", "tags": ["ramen", "japanese", "soup", "noodles", "quick", "dinner"]
          },
           {
            "id": "spanish-paella-mix",
            "title": "Mixed Paella (Paella Mixta)",
            "description": "A vibrant Spanish rice dish featuring a mix of seafood, chicken, and vegetables.",
            "image": "https://images.unsplash.com/photo-1598511800354-c876a2d7a6a9?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8cGFlbGxhfGVufDB8fDB8fHww&auto=format&fit=crop&w=400&q=60",
            "ingredients": [
              "1 tbsp Olive Oil", "2 Chicken Thighs, chopped", "100g Chorizo, sliced", "1 Onion, chopped", "2 cloves Garlic", "1 Red Bell Pepper, chopped", "1 cup Paella Rice (Bomba or Arborio)", "Pinch Saffron Threads", "1 tsp Smoked Paprika", "4 cups Chicken Broth, hot", "100g Shrimp, peeled", "100g Mussels, cleaned", "1/2 cup Peas", "Lemon Wedges"
            ],
            "instructions": [
              "Heat oil in paella pan. Brown chicken & chorizo, remove.", "Sauté onion, garlic, pepper.", "Add rice, toast 1 min. Stir in saffron & paprika.", "Return chicken/chorizo. Pour in hot broth. Bring to boil, then simmer.", "Do NOT stir after this point. Cook 15 min.", "Arrange shrimp, mussels, peas on top. Cook 5-8 min more until liquid absorbed & seafood cooked.", "Rest 5 min, covered loosely. Serve with lemon."
            ],
            "prepTime": 20, "cookTime": 40, "difficulty": "Hard", "cuisine": "Spanish", "tags": ["paella", "spanish", "rice", "seafood", "chicken", "dinner", "one-pan"]
          },
           {
            "id": "vietnamese-pho-bo",
            "title": "Vietnamese Beef Pho (Phở Bò)",
            "description": "Aromatic Vietnamese noodle soup with rich beef broth, rice noodles, and thinly sliced beef.",
            "image": "https://images.unsplash.com/photo-1585109649407-a4042196b60e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8cGhvJTIwc291cHxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=400&q=60",
            "ingredients": [
              "Beef Bones & Knuckles (for broth)", "1 Onion, charred", "1 piece Ginger, charred", "Pho Spices (Star Anise, Cinnamon, Cloves, Cardamom)", "Fish Sauce", "Sugar", "Salt", "Rice Noodles", "Thinly Sliced Raw Beef (Sirloin/Eye Round)", "Garnishes: Bean Sprouts, Thai Basil, Cilantro, Lime, Jalapeño, Hoisin, Sriracha"
            ],
            "instructions": [
              "Parboil bones, rinse. Simmer bones, charred onion/ginger, spices in water for hours (or use quality store-bought broth & simmer with aromatics 1hr).", "Season broth with fish sauce, sugar, salt.", "Cook rice noodles.", "Place noodles in bowl. Top with raw beef slices.", "Ladle boiling hot broth over beef to cook it.", "Serve immediately with side plate of fresh garnishes."
            ],
            "prepTime": 30, "cookTime": 180, "difficulty": "Hard", "cuisine": "Vietnamese", "tags": ["pho", "vietnamese", "soup", "noodles", "beef", "dinner", "gluten-free"]
          }
    ];

    // --- DOM Elements ---
    const body = document.body;
    const recipeGrid = document.getElementById('recipeGrid');
    const favoriteRecipeGrid = document.getElementById('favoriteRecipeGrid');
    const searchInput = document.getElementById('searchInput');
    const clearSearchBtn = document.getElementById('clearSearchBtn');
    const navLinks = document.querySelectorAll('.sidebar-nav .nav-link');
    const contentSections = document.querySelectorAll('.content-section');
    const homeSection = document.getElementById('home-section');
    const favoritesSection = document.getElementById('favorites-section');
    const yearSpan = document.getElementById('year');
    const mainTitle = document.getElementById('main-title');
    const darkModeSwitch = document.getElementById('darkModeSwitch');
    const countryFilter = document.getElementById('countryFilter');
    const sortOptions = document.getElementById('sortOptions');
    const randomRecipeBtn = document.getElementById('randomRecipeBtn');

    // Modal elements
    const recipeModal = document.getElementById('recipeModal');
    const modalOverlay = recipeModal.querySelector('.modal-overlay');
    const modalCloseBtns = recipeModal.querySelectorAll('[data-close-modal]');
    const modalImage = document.getElementById('modalImage');
    const modalTitle = document.getElementById('modalTitle');
    const modalCountry = document.getElementById('modalCountry');
    const modalIngredients = document.getElementById('modalIngredients');
    const modalInstructions = document.getElementById('modalInstructions');

    // --- State ---
    let currentRecipes = [...recipes];
    let favoriteRecipeIds = new Set(); // Loaded from localStorage later
    let currentFilter = 'all';
    let currentSort = 'default';
    let initialLoadComplete = false; // Flag to manage initial skeleton display

    // --- Helper Functions ---

    // Update footer year
    if (yearSpan) yearSpan.textContent = new Date().getFullYear();

    // LocalStorage for Favorites
    function saveFavoritesToLocalStorage() {
        localStorage.setItem('favoriteRecipeIds', JSON.stringify(Array.from(favoriteRecipeIds)));
    }

    function loadFavoritesFromLocalStorage() {
        const storedFavorites = localStorage.getItem('favoriteRecipeIds');
        if (storedFavorites) {
            favoriteRecipeIds = new Set(JSON.parse(storedFavorites));
        }
        // No need to update recipe.isFavorite here, we check the Set directly
    }

    // LocalStorage for Dark Mode
    function saveDarkModePreference(isDark) {
        localStorage.setItem('darkModeEnabled', isDark);
    }

    function loadDarkModePreference() {
        const isDark = localStorage.getItem('darkModeEnabled') === 'true';
        darkModeSwitch.checked = isDark;
        body.classList.toggle('dark-mode', isDark);
    }

    // Skeleton Card Generator
    function createSkeletonCard() {
        const card = document.createElement('div');
        card.classList.add('skeleton-card');
        card.innerHTML = `
            <div class="skeleton skeleton-image"></div>
            <div class="skeleton-content">
                <div class="skeleton skeleton-title"></div>
                <div class="skeleton skeleton-text"></div>
                <div class="skeleton skeleton-text"></div>
                <div class="skeleton skeleton-text skeleton-text-short"></div>
                <div class="skeleton skeleton-footer"></div>
            </div>
        `;
        return card;
    }

    // Display Skeleton Loaders
    function displaySkeletonLoaders(count, container) {
        container.innerHTML = ''; // Clear previous
        const fragment = document.createDocumentFragment();
        for (let i = 0; i < count; i++) {
            fragment.appendChild(createSkeletonCard());
        }
        container.appendChild(fragment);
    }

    // Create HTML for a single recipe card
    function createRecipeCard(recipe) {
        const card = document.createElement('div');
        card.classList.add('recipe-card');
        card.dataset.id = recipe.id;
        const isFav = favoriteRecipeIds.has(recipe.id);

        card.innerHTML = `
            <div class="recipe-image-container">
                <img src="${recipe.image}" alt="${recipe.title}" loading="lazy">
                ${recipe.country ? `<span class="country-badge">${recipe.country}</span>` : ''}
            </div>
            <div class="recipe-card-content">
                <h3>${recipe.title}</h3>
                <p class="recipe-description">${recipe.description}</p>
                <div class="recipe-card-footer">
                    <button class="btn btn-secondary details-btn" data-id="${recipe.id}" aria-label="View details for ${recipe.title}">Details</button>
                    <button class="favorite-btn ${isFav ? 'active' : ''}" data-id="${recipe.id}" aria-label="${isFav ? 'Remove from favorites' : 'Add to favorites'}" aria-pressed="${isFav}">
                        <i class="fas fa-heart"></i>
                    </button>
                </div>
            </div>
        `;
        // Event listeners attached via delegation on the grid container
        return card;
    }

    // Populate Country Filter Dropdown
    function populateCountryFilter() {
        const countries = [...new Set(recipes.map(r => r.country).filter(Boolean))].sort();
        const fragment = document.createDocumentFragment();
        countries.forEach(country => {
            const option = document.createElement('option');
            option.value = country;
            option.textContent = country;
            fragment.appendChild(option);
        });
        countryFilter.appendChild(fragment);
    }

    // Apply Filters and Sorting
    function getFilteredAndSortedRecipes() {
        let recipesToDisplay = [...recipes]; // Start with all recipes

        // 1. Filter by Search Term
        const searchTerm = searchInput.value.toLowerCase().trim();
        if (searchTerm) {
            recipesToDisplay = recipesToDisplay.filter(recipe =>
                recipe.title.toLowerCase().includes(searchTerm) ||
                recipe.description.toLowerCase().includes(searchTerm) ||
                recipe.country.toLowerCase().includes(searchTerm) ||
                recipe.ingredients.some(ing => ing.toLowerCase().includes(searchTerm))
            );
        }

        // 2. Filter by Country
        if (currentFilter !== 'all') {
            recipesToDisplay = recipesToDisplay.filter(recipe => recipe.country === currentFilter);
        }

        // 3. Sort
        switch (currentSort) {
            case 'az':
                recipesToDisplay.sort((a, b) => a.title.localeCompare(b.title));
                break;
            case 'za':
                recipesToDisplay.sort((a, b) => b.title.localeCompare(a.title));
                break;
            case 'default': // Keep original order (or filtered order)
            default:
                break; // No additional sorting needed
        }
        return recipesToDisplay;
    }


    // Display Recipes Function (handles filtering, sorting, rendering)
    function displayRecipes() {
        const recipesToDisplay = getFilteredAndSortedRecipes();
        currentRecipes = recipesToDisplay; // Update state

        // Initial load: Show skeletons first
        if (!initialLoadComplete) {
            displaySkeletonLoaders(12, recipeGrid); // Show a few skeletons
             // Use setTimeout to simulate loading delay and let skeletons render
            setTimeout(() => {
                 renderRecipeGrid(recipesToDisplay, recipeGrid);
                 initialLoadComplete = true; // Mark initial load as done
            }, 500); // Adjust delay as needed (0 for immediate replacement)
        } else {
            renderRecipeGrid(recipesToDisplay, recipeGrid); // Normal render after initial load
        }

         // Update main title dynamically based on filters/search
        updateMainTitle();
    }

    // Helper function to actually render the grid content
     function renderRecipeGrid(recipeArray, container) {
         container.innerHTML = ''; // Clear previous content/skeletons
         if (recipeArray.length === 0) {
             container.innerHTML = `<p class="placeholder-text">No recipes match your criteria.</p>`;
             return;
         }
         const fragment = document.createDocumentFragment();
         recipeArray.forEach(recipe => {
             fragment.appendChild(createRecipeCard(recipe));
         });
         container.appendChild(fragment);
     }

     // Update main heading based on context
     function updateMainTitle() {
        const searchTerm = searchInput.value.trim();
         if (searchTerm) {
             mainTitle.textContent = `Results for "${searchTerm}"`;
         } else if (currentFilter !== 'all') {
            mainTitle.textContent = `Recipes from ${currentFilter}`;
         } else {
             mainTitle.textContent = "Explore World Cuisines";
         }
     }


    // Display only favorite recipes
    function displayFavoriteRecipes() {
        const favoriteRecipesData = recipes.filter(recipe => favoriteRecipeIds.has(recipe.id));
         renderRecipeGrid(favoriteRecipesData, favoriteRecipeGrid); // Use render function
    }

    // Show/Hide Sections
    function showSection(sectionId) {
        contentSections.forEach(section => {
            section.classList.toggle('active-section', section.id === `${sectionId}-section`);
        });
        navLinks.forEach(link => {
            link.classList.toggle('active', link.dataset.section === sectionId);
        });

        // Reset filters/sort/search when navigating away from home
        if (sectionId !== 'home') {
            searchInput.value = '';
            countryFilter.value = 'all';
            sortOptions.value = 'default';
            currentFilter = 'all';
            currentSort = 'default';
            clearSearchBtn.style.display = 'none';
        }

        // Update title for non-home sections
        const sectionTitles = {
            favorites: "My Favorite Recipes",
            profile: 'User Profile',
            contact: 'Get In Touch',
            about: 'About GlobalFlavors'
        };
         if(sectionTitles[sectionId]) {
            mainTitle.textContent = sectionTitles[sectionId];
         } else if (sectionId === 'home') {
             updateMainTitle(); // Use dynamic title for home
         }

        // Scroll main content to top
        document.querySelector('.main-content').scrollTo(0, 0);
    }

    // --- Modal Functions ---
    function openRecipeModal(recipeId) {
        const recipe = recipes.find(r => r.id === recipeId);
        if (!recipe) return;

        modalImage.src = recipe.image;
        modalImage.alt = recipe.title;
        modalTitle.textContent = recipe.title;
        modalCountry.textContent = recipe.country || 'N/A';
        modalCountry.style.display = recipe.country ? 'inline-block' : 'none';

        // Populate Ingredients
        modalIngredients.innerHTML = '';
        recipe.ingredients.forEach(ing => {
            const li = document.createElement('li');
            li.textContent = ing;
            modalIngredients.appendChild(li);
        });

        // Populate Instructions (handle potential line breaks)
        modalInstructions.textContent = recipe.instructions;

        recipeModal.classList.add('active');
        recipeModal.setAttribute('aria-hidden', 'false');
        // Focus management for accessibility (optional but good)
        // modalCloseBtns[0].focus();
    }

    function closeRecipeModal() {
        recipeModal.classList.remove('active');
        recipeModal.setAttribute('aria-hidden', 'true');
    }

    // --- Event Handlers ---

    // Dark Mode Toggle
    darkModeSwitch.addEventListener('change', () => {
        const isDark = darkModeSwitch.checked;
        body.classList.toggle('dark-mode', isDark);
        saveDarkModePreference(isDark);
    });

    // Search Input & Clear Button
    let debounceTimer;
    searchInput.addEventListener('input', () => {
        clearTimeout(debounceTimer);
        debounceTimer = setTimeout(() => {
            if (homeSection.classList.contains('active-section')) {
                 displayRecipes(); // Re-filter home grid
            } else {
                 showSection('home'); // Switch to home and filter
                 // displayRecipes will be called by showSection logic if needed
            }
            clearSearchBtn.style.display = searchInput.value ? 'inline' : 'none';
        }, 300); // Debounce search
    });

    clearSearchBtn.addEventListener('click', () => {
        searchInput.value = '';
        clearSearchBtn.style.display = 'none';
        displayRecipes(); // Re-render with cleared search
        searchInput.focus();
    });


    // Filtering and Sorting Changes
    countryFilter.addEventListener('change', (e) => {
        currentFilter = e.target.value;
        displayRecipes();
    });

    sortOptions.addEventListener('change', (e) => {
        currentSort = e.target.value;
        displayRecipes();
    });

    // Random Recipe Button
    randomRecipeBtn.addEventListener('click', () => {
        const randomIndex = Math.floor(Math.random() * recipes.length);
        const randomRecipeId = recipes[randomIndex].id;
        openRecipeModal(randomRecipeId);
    });

    // Sidebar Navigation
    navLinks.forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault();
            const sectionId = link.dataset.section;
            showSection(sectionId);

            // Special handling for home/favorites display
            if (sectionId === 'home') {
                displayRecipes(); // Ensure home grid is updated with current filters
            } else if (sectionId === 'favorites') {
                displayFavoriteRecipes();
            }
        });
    });

    // Event Delegation for Recipe Card Buttons (Details & Favorite)
    document.querySelector('.main-content').addEventListener('click', (event) => {
        const target = event.target;

        // Handle Details Button Click
        if (target.matches('.details-btn')) {
            const recipeId = parseInt(target.dataset.id, 10);
            openRecipeModal(recipeId);
        }

        // Handle Favorite Button Click
        if (target.matches('.favorite-btn') || target.closest('.favorite-btn')) {
             const button = target.matches('.favorite-btn') ? target : target.closest('.favorite-btn');
            const recipeId = parseInt(button.dataset.id, 10);

            if (favoriteRecipeIds.has(recipeId)) {
                favoriteRecipeIds.delete(recipeId);
                button.classList.remove('active');
                button.setAttribute('aria-label', 'Add to favorites');
                button.setAttribute('aria-pressed', 'false');
            } else {
                favoriteRecipeIds.add(recipeId);
                button.classList.add('active');
                button.setAttribute('aria-label', 'Remove from favorites');
                button.setAttribute('aria-pressed', 'true');
            }
            saveFavoritesToLocalStorage(); // Save change

            // If the favorites section is active, refresh it
            if (favoritesSection.classList.contains('active-section')) {
                displayFavoriteRecipes();
            }
        }
    });


    // Modal Closing Handlers
    modalOverlay.addEventListener('click', closeRecipeModal);
    modalCloseBtns.forEach(btn => btn.addEventListener('click', closeRecipeModal));
    document.addEventListener('keydown', (event) => {
        if (event.key === 'Escape' && recipeModal.classList.contains('active')) {
            closeRecipeModal();
        }
    });


    // --- Initialization ---
    loadFavoritesFromLocalStorage();
    loadDarkModePreference();
    populateCountryFilter();
    showSection('home'); // Show home section initially
    displayRecipes(); // Initial display (will show skeletons first)

});