const auditData = [
  {
    "error_type": "Wrongly deboosted",
    "root_cause": "Agent Misjudgment",
    "user_category": "Food & Beverages - Snacks - Dried Snacks - Others",
    "reviewer_category": "Food & Beverages - Snacks - Dried Snacks - Meat Jerky and Bakkwa",
    "lesson": "The product description states that it is a fully vegetarian formula, free from the five pungent spices, and suitable for vegans. This indicates that it is a vegetarian product. Based on the keyword “Vegetarian Jerky” in the Product Category Compilation, the appropriate category can be identified.",
    "sz_feedback": "There are multiple products that are considered dried snacks and the L3 selected by the seller is just \"Others\" when there is more specific category for the item.",
    "date": "2026-02-03"
  },
  {
    "error_type": "Wrongly deboosted",
    "root_cause": "Translation Issue",
    "user_category": "Food & Beverages - Snacks - Biscuits, Cookies & Wafers",
    "reviewer_category": "Food & Beverages - Snacks - Chips & Crisps",
    "lesson": "This is a translation issue. In Chinese, the term “biscuits” has a broader meaning. Therefore, if a user proactively selects “Biscuits,” it can PASS. Only products that are clearly potato chips should be deboosted to “Chips & Crisps.” I have added the explanation to PH_Wrong Category KW.",
    "sz_feedback": "",
    "date": "2026-02-02"
  },
  {
    "error_type": "Wrongly deboosted",
    "root_cause": "Agent Misjudgment",
    "user_category": "Sports & Outdoors - Sports & Outdoor Recreation Equipments - Fitness Equipment - Fitness Machines",
    "reviewer_category": "Sports & Outdoors - Sports & Outdoor Recreation Equipments - Fitness Equipment - Weight Training",
    "lesson": "This is a breathing training device and is not directly related to weight training. The product can be considered sports-related equipment, so the user’s original selection of “Fitness Machines” can be accepted.",
    "sz_feedback": "",
    "date": "2026-02-02"
  },
  {
    "error_type": "Wrongly deboosted",
    "root_cause": "Agent Misjudgment",
    "user_category": "",
    "reviewer_category": "",
    "lesson": "This was a reviewer operational error. The user’s original category was already the category deboosted by the reviewer. The reviewer deboosted the same category again. If the user’s category is correct, no action should be taken on this task in the system.",
    "sz_feedback": "May we know how to identify when the reviewer deboosted the same category twice?",
    "date": "2026-02-02"
  },
  {
    "error_type": "Wrongly deboosted",
    "root_cause": "Agent Misjudgment",
    "user_category": "Health - Food Supplement - Well Being",
    "reviewer_category": "",
    "lesson": "The user’s original selection is correct and should not be deboosted to Health - Sexual Wellness - Performance Enhancement. Category Keywords (ALL) > maca > Health - Food Supplement - Well Being In practice, users are rarely proactively recommended to select Performance Enhancement, to avoid concerns of exaggerated claims, unless the product truly has delay or enhancement effects.",
    "sz_feedback": "",
    "date": "2026-02-02"
  },
  {
    "error_type": "Wrongly deboosted",
    "root_cause": "Agent Misjudgment",
    "user_category": "Beauty - Skincare - Facial Moisturizer",
    "reviewer_category": "Beauty - Beauty Sets & Packages",
    "lesson": "Even if the product is a gift box, as long as the contents include the item, it can be accepted. Therefore, for gift sets containing Facial Moisturizer, all two categories— Facial Moisturizer and Gift Set—can be applied. You can refer to the SOP on this page for guidance.",
    "sz_feedback": "",
    "date": "2026-02-03"
  },
  {
    "error_type": "Wrongly deboosted",
    "root_cause": "Translation Issue",
    "user_category": "Health - Food Supplement - Fitness",
    "reviewer_category": "Food & Beverages - Beverages - Energy & Isotonic Drinks",
    "lesson": "This is a translation issue. The Chinese category “Sports Energy Supplements” includes more than just whey protein. I have added the keyword to PH_Wrong Category KW.",
    "sz_feedback": "",
    "date": "2026-02-02"
  },
  {
    "error_type": "Wrongly passed",
    "root_cause": "Agent Misjudgment",
    "user_category": "Beauty - Hand, Foot & Nail Care - Nail Care - Nail Polish",
    "reviewer_category": "",
    "lesson": "Cat eye gel should be deboosted to \"Beauty - Hand, Foot & Nail Care - Nail Care - Nail Gel",
    "sz_feedback": "These are fake nails. Can we also select category: BE - Beauty - Hand, Foot & Nail Care - Nail Care - Artificial Nail or BE - Beauty - Hand, Foot & Nail Care - Nail Care - Nail Art & Sticker?",
    "date": "2026-02-02"
  },
  {
    "error_type": "Wrongly deboosted",
    "root_cause": "Agent Misjudgment",
    "user_category": "Beauty - Men's Care - Shaving & Grooming - Trimmers, Clippers & Multi-functional Groomers",
    "reviewer_category": "Beauty - Beauty Tools - Hair Removal Tools",
    "lesson": "According to the PH_Wrong Category KW > Product Category Compilation Product Keywords > nose hair trimmer The category originally selected by the user is an Acceptable Category and can PASS. There is no need to deboost.",
    "sz_feedback": "",
    "date": "2026-02-02"
  },
  {
    "error_type": "Wrongly deboosted",
    "root_cause": "Agent Misjudgment",
    "user_category": "Health - Sexual Wellness - Others",
    "reviewer_category": "Health - Sexual Wellness - Sex Toys",
    "lesson": "According to Category Keywords (ALL), this product can be accepted under other categories and does not need to be deboosted to sex toys. And Non-Toy Items Like Serrated Covers And Urethral Vibrators (Which May Enhance Pleasure But Are Not Toys).,",
    "sz_feedback": "",
    "date": "2026-02-02"
  },
  {
    "error_type": "Wrongly deboosted",
    "root_cause": "Agent Misjudgment",
    "user_category": "Food & Beverages - Fresh & Frozen Food - Meat - Others",
    "reviewer_category": "Food & Beverages - Fresh & Frozen Food - Processed Meat & Seafood",
    "lesson": "Meat products can be categorized under either “Meat” or “Processed Meat.” \"Duck\" does not have its own category, so “Others” is acceptable. Therefore, the user’s original selection is correct and does not need to be deboosted.",
    "sz_feedback": "The category \"Food & Beverages - Fresh & Frozen Food - Processed Meat & Seafood\" should be accepted since the product is a processed duck meat and as discussed, we do not have a specific category for it.",
    "date": "2026-02-03"
  },
  {
    "error_type": "Wrongly passed",
    "root_cause": "Agent Misjudgment",
    "user_category": "Beauty - Hand, Foot & Nail Care - Nail Care - Nail Polish",
    "reviewer_category": "",
    "lesson": "Cat eye gel should be deboosted to \"\"Beauty - Hand, Foot & Nail Care - Nail Care - Nail Gel",
    "sz_feedback": "These are fake nails. Can we also select category: BE - Beauty - Hand, Foot & Nail Care - Nail Care - Artificial Nail or BE - Beauty - Hand, Foot & Nail Care - Nail Care - Nail Art & Sticker?",
    "date": "2026-02-03"
  },
  {
    "error_type": "Wrongly passed",
    "root_cause": "Agent Misjudgment",
    "user_category": "Health - Sexual Wellness - Others",
    "reviewer_category": "",
    "lesson": "Insertable massage wands should be deboosted to Sex Toys.",
    "sz_feedback": "",
    "date": "2026-02-03"
  },
  {
    "error_type": "Wrongly deboosted",
    "root_cause": "Agent Misjudgment",
    "user_category": "Food & Beverages - Snacks - Biscuits, Cookies & Wafers",
    "reviewer_category": "Food & Beverages - Snacks - Seaweed",
    "lesson": "Nori is basically sheets of seaweed. A product that is merely a seaweed-flavored biscuit should not be classified as seaweed. If the nature of the product is unclear, please prioritize passing it.",
    "sz_feedback": "",
    "date": "2026-02-04"
  },
  {
    "error_type": "Wrongly deboosted",
    "root_cause": "Agent Misjudgment",
    "user_category": "Food & Beverages - Beverages - Powdered Drink Mixes",
    "reviewer_category": "Health - Food Supplement - Fitness",
    "lesson": "Content Description The product is indeed a drink meant to be prepared by brewing. The user's original category selection can be accepted. (Powdered Drink Mixes) Note: This brand seller (GOpower) often selects the “Powdered Drink Mixes” category.",
    "sz_feedback": "",
    "date": "2026-02-04"
  },
  {
    "error_type": "Wrongly passed",
    "root_cause": "Agent Misjudgment",
    "user_category": "Food & Beverages - Snacks - Sweets & Candies",
    "reviewer_category": "",
    "lesson": "Despite the title listing various items, the product is clearly chocolate and should be classified in the \"Food & Beverages - Snacks - Chocolate \" category.",
    "sz_feedback": "",
    "date": "2026-02-04"
  },
  {
    "error_type": "Wrongly passed",
    "root_cause": "Agent Misjudgment",
    "user_category": "Food & Beverages - Fresh & Frozen Food - Frozen Processed Food",
    "reviewer_category": "",
    "lesson": "This product is a processed fish paste (fish meat) product and can be classified under: BE - Food & Beverages - Fresh & Frozen Food - Processed Meat & Seafood *SOP ◦ Rule: If a specific category exists (e.g., Meat, Seafood), PRIORITIZE the specific category, even if the item is frozen.",
    "sz_feedback": "",
    "date": "2026-02-06"
  },
  {
    "error_type": "Wrongly passed",
    "root_cause": "Agent Misjudgment",
    "user_category": "Food & Beverages - Fresh & Frozen Food - Vegetarian Meat",
    "reviewer_category": "",
    "lesson": "This product is not related to vegetarian meat products. The almond slices are described in the title as being used for baking purposes. It can be recommended under either of the following categories: Food & Beverages - Baking Needs - Others, or Food & Beverages - Snacks - Nuts",
    "sz_feedback": "",
    "date": "2026-02-06"
  },
  {
    "error_type": "Wrongly passed",
    "root_cause": "Agent Misjudgment",
    "user_category": "Food & Beverages - Snacks - Sweets & Candies",
    "reviewer_category": "",
    "lesson": "This product is chocolate-covered dried apple. It should be classified under either \" Food & Beverages - Snacks - Chocolate \" category or \" Food & Beverages - Snacks - Dried Snacks - Dried Fruits \"category. The \" Sweets & Candies\" category mainly applies to products such as hard candy and soft candy, which does not align with this product.",
    "sz_feedback": "",
    "date": "2026-02-06"
  },
  {
    "error_type": "Wrongly passed",
    "root_cause": "Agent Misjudgment",
    "user_category": "Mom & Baby - Maternity Healthcare - Others",
    "reviewer_category": "",
    "lesson": "A postpartum cap is primarily used for wearing after childbirth, for warmth and daily use. It is not a medical product or Healthcare, so can deboosted : Mom & Baby - Maternity Accessories - Others.",
    "sz_feedback": "",
    "date": "2026-02-10"
  },
  {
    "error_type": "Wrongly deboosted",
    "root_cause": "Agent Misjudgment",
    "user_category": "Food & Beverages - Snacks - Sweets & Candies",
    "reviewer_category": "Food & Beverages - Snacks - Dried Snacks - Meat Floss",
    "lesson": "The title is: “Wei Ji Jerky & Pork Floss Specialty Store – 610 Guilinggao Soft Candy ~ Mildly Sweet / Slight Herbal Flavor / Vegetarian-Friendly ~ Special Promo Pack 600g ±10” In fact, the beginning is the store name. From the image, it is clear that the product is black soft candy (Guilinggao soft candy), not Meat Floss. The user’s original category (Sweets & Candies) selection can be accepted, and it should not be changed to Meat Floss.",
    "sz_feedback": "",
    "date": "2026-02-10"
  },
  {
    "error_type": "Wrongly passed",
    "root_cause": "Agent Misjudgment",
    "user_category": "Food & Beverages - Beverages - Powdered Drink Mixes",
    "reviewer_category": "",
    "lesson": "Creamer has a clearly defined category that can be deboosted. >Food & Beverages - Dairy & Eggs - Creamers This product is typically used in combination with other beverages. It is not a standalone instant drink meant to be consumed directly.",
    "sz_feedback": "",
    "date": "2026-02-12"
  },
  {
    "error_type": "Wrongly passed",
    "root_cause": "Agent Misjudgment",
    "user_category": "Food & Beverages - Snacks - Sweets & Candies",
    "reviewer_category": "",
    "lesson": "This product is peanut brittle. According to the category list, the relevant category can be deboosted. (Recommend the category that is closest to the one currently selected by the user.) Food & Beverages - Snacks - Others Food & Beverages - Snacks - Dried Snacks - Others",
    "sz_feedback": "",
    "date": "2026-02-11"
  },
  {
    "error_type": "Wrongly passed",
    "root_cause": "Agent Misjudgment",
    "user_category": "Food & Beverages - Beverages - Traditional & Herbal Drinks",
    "reviewer_category": "",
    "lesson": "Based on the title, images, and product description, the item Ji Sheng Qi Wan is eligible to be deboosted. >Health - Food Supplement - Well Being The product being sold is not a soluble drink. As stated in the product description: Take approximately 25 pills per dose, 2-3 times daily, 30 minutes after meals. Swallow with warm water.",
    "sz_feedback": "",
    "date": "2026-02-12"
  },
  {
    "error_type": "Wrongly passed",
    "root_cause": "Agent Misjudgment",
    "user_category": "Food & Beverages - Fresh & Frozen Food - Frozen Processed Food",
    "reviewer_category": "",
    "lesson": "If the product has a more appropriate category, users selecting “Frozen Foods” should be deboosted. You can refer to the SOP (◦ Rule: If a specific category exists (e.g., Meat, Seafood), PRIORITIZE the specific category, even if the item is frozen.) For example, meat (chicken, pork, beef), seafood (shrimp, fish), and processed meat products. This case can be deboosted: Food & Beverages - Fresh & Frozen Food - Processed Meat & Seafood Food & Beverages - Fresh & Frozen Food - Seafood - Prawn",
    "sz_feedback": "",
    "date": "2026-02-14"
  },
  {
    "error_type": "Wrongly passed",
    "root_cause": "Agent Misjudgment",
    "user_category": "Beauty - Skincare - Facial Moisturizer",
    "reviewer_category": "",
    "lesson": "This product is glycerin, an oil-based skincare product, and should be restricted to the “Beauty - Skincare - Facial Oil” category.",
    "sz_feedback": "",
    "date": "2026-02-13"
  },
  {
    "error_type": "Wrongly deboosted",
    "root_cause": "Agent Misjudgment",
    "user_category": "Food & Beverages - Snacks - Popcorn",
    "reviewer_category": "Hobbies & Collections - Souvenirs - Coin Banks",
    "lesson": "From the image, it can be confirmed that the product includes popcorn and a Crayon Shin-chan–shaped piggy bank. Therefore, the user’s original selection of “popcorn” is correct and no restriction is required.",
    "sz_feedback": "",
    "date": "2026-02-13"
  },
  {
    "error_type": "Wrongly passed",
    "root_cause": "Agent Misjudgment",
    "user_category": "Food & Beverages - Food Staples - Dried Goods - Dried Seafood",
    "reviewer_category": "",
    "lesson": "Kombu belongs to seaweed and is not seafood. It should not be placed under \"dried seafood\". It should be deboosted to: Food & Gifts - Staples - Grains, Dried Goods & Specialty Products - Others.",
    "sz_feedback": "",
    "date": "2026-02-13"
  },
  {
    "error_type": "Wrongly passed",
    "root_cause": "Agent Misjudgment",
    "user_category": "Beauty - Skincare - Others",
    "reviewer_category": "",
    "lesson": "This product can be considered an all-in-one item. Based on the description and images, it functions as both a makeup primer and a sunscreen. It can be recommended under: Beauty - Skincare - Face Sunscreen. Beauty - Makeup - Face - Makeup Base & Primer",
    "sz_feedback": "",
    "date": "2026-02-13"
  },
  {
    "error_type": "Wrongly passed",
    "root_cause": "Agent Misjudgment",
    "user_category": "Beauty - Hair Care - Others",
    "reviewer_category": "",
    "lesson": "The product image & title & description mentions hair conditioner/ hair treatment. The user’s selection of “Others” can be deboosted to Beauty - Hair Care - Hair Treatment / Beauty - Hair Care - Hair and Scalp Conditioner If the seller also offers shampoo, and the user actively selects shampoo, that is acceptable (PASS).",
    "sz_feedback": "",
    "date": "2026-02-13"
  },
  {
    "error_type": "Wrongly passed",
    "root_cause": "Agent Misjudgment",
    "user_category": "Food & Beverages - Fresh & Frozen Food - Frozen Processed Food",
    "reviewer_category": "",
    "lesson": "Based on the product contents, it can be restricted to: Food & Beverages - Cooking Essentials - Stock, Gravy & Instant Soup, or Food & Beverages - Fresh & Frozen Food - Processed Meat & Seafood.(hot pot ingredients)",
    "sz_feedback": "",
    "date": "2026-02-23"
  },
  {
    "error_type": "Wrongly passed",
    "root_cause": "Agent Misjudgment",
    "user_category": "Food & Beverages - Bakery - Pastry",
    "reviewer_category": "",
    "lesson": "Based on the category keyword table, egg rolls can be restricted to \"Food & Beverages - Snacks - Biscuits, Cookies & Wafers.\"",
    "sz_feedback": "",
    "date": "2026-02-23"
  },
  {
    "error_type": "Wrongly passed",
    "root_cause": "Agent Misjudgment",
    "user_category": "Food & Beverages - Snacks - Others",
    "reviewer_category": "",
    "lesson": "The title mentions Enjoy Hard – A Must-Have for Men “享硬 男人必備,” but the product is actually related to male enhancement / sexual wellness, not a regular snack. It can be recommended under: Health - Food Supplement - Others.",
    "sz_feedback": "",
    "date": "2026-02-23"
  },
  {
    "error_type": "Wrongly passed",
    "root_cause": "Agent Misjudgment",
    "user_category": "Food & Beverages - Fresh & Frozen Food - Frozen Processed Food",
    "reviewer_category": "",
    "lesson": "The frozen food issue requires no further explanation. This item should be deboosted. Food & Beverages - Fresh & Frozen Food - Processed Meat & Seafood Food & Beverages - Fresh & Frozen Food - Seafood - Prawn",
    "sz_feedback": "",
    "date": "2026-02-23"
  },
  {
    "error_type": "Wrongly passed",
    "root_cause": "Agent Misjudgment",
    "user_category": "Health - Sexual Wellness - Others",
    "reviewer_category": "",
    "lesson": "The product is a masturbator (insertable sex toy). According to the category keyword list, it can be deboosted to \" Health - Sexual Wellness - Sex Toys \"",
    "sz_feedback": "",
    "date": "2026-02-24"
  },
  {
    "error_type": "Wrongly passed",
    "root_cause": "Agent Misjudgment",
    "user_category": "Food & Beverages - Fresh & Frozen Food - Frozen Processed Food",
    "reviewer_category": "",
    "lesson": "This product is green peas. If there is a more appropriate category, it should not be placed under Frozen Foods. It should be deboosted to: Food & Beverages > Fresh & Frozen Food > Vegetables > Peas, Beans, Nuts & Corn.",
    "sz_feedback": "",
    "date": "2026-02-25"
  },
  {
    "error_type": "Wrongly passed",
    "root_cause": "Agent Misjudgment",
    "user_category": "Food & Beverages - Bakery - Others",
    "reviewer_category": "",
    "lesson": "This product only sells gift box packaging materials. It should be deboosted to the Gift Boxes category: Stationery - Gift & Wrapping - Gift Boxes.",
    "sz_feedback": "",
    "date": "2026-03-02"
  },
  {
    "error_type": "Wrongly passed",
    "root_cause": "Agent Misjudgment",
    "user_category": "Food & Beverages - Snacks - Biscuits, Cookies & Wafers",
    "reviewer_category": "",
    "lesson": "The product is macarons. The texture is similar to a fluffy cake rather than a typical cookie. Therefore, \" Food & Beverages - Bakery - Pastry \" is more appropriate. *I have added “macaron” to the keyword category list.",
    "sz_feedback": "",
    "date": "2026-03-02"
  },
  {
    "error_type": "Wrongly passed",
    "root_cause": "Agent Misjudgment",
    "user_category": "Food & Beverages - Cooking Essentials - Others",
    "reviewer_category": "",
    "lesson": "The product is soup cubes (cream of corn and various soup bases). It should be deboosted to: Food & Beverages - Cooking Essentials - Stock, Gravy & Instant Soup.",
    "sz_feedback": "",
    "date": "2026-03-02"
  },
  {
    "error_type": "Wrongly passed",
    "root_cause": "Agent Misjudgment",
    "user_category": "Beauty - Bath & Body Care - Body Wash & Soap",
    "reviewer_category": "",
    "lesson": "The product is a shampoo refill pack. It should be deboosted to: Beauty - Hair Care - Shampoo.",
    "sz_feedback": "",
    "date": "2026-03-02"
  },
  {
    "error_type": "Wrongly passed",
    "root_cause": "Translation Issue",
    "user_category": "Food & Beverages - Snacks - Seaweed",
    "reviewer_category": "",
    "lesson": "In Taiwan, this category \"海苔\" only includes sheet-style nori snacks. Other kelp-based snacks will be placed under: Food & Beverages - Snacks - Others. *sheet-style nori like: This is a translation issue regarding kelp & nori. It has been added to the keyword category list:",
    "sz_feedback": "Should this be considered since there was a translation issue and the keyword was just added upon the audit of this item?",
    "date": "2026-03-02"
  },
  {
    "error_type": "Wrongly passed",
    "root_cause": "Agent Misjudgment",
    "user_category": "Food & Beverages - Snacks - Sweets & Candies",
    "reviewer_category": "",
    "lesson": "The product is brown sugar sweet potato crisps. “Crisps” usually refers to a crunchy texture, not candy. It can be deboosted to: Food & Beverages - Snacks - Others. or Food & Beverages - Snacks - Biscuits, Cookies & Wafers But \"Food & Beverages - Snacks - Others\" would be a better category, as this product is not like typical cookies.",
    "sz_feedback": "",
    "date": "2026-03-02"
  },
  {
    "error_type": "Wrongly passed",
    "root_cause": "Agent Misjudgment",
    "user_category": "Food & Beverages - Beverages - Powdered Drink Mixes",
    "reviewer_category": "",
    "lesson": "Coffee has a specific category. Brewed coffee should also be placed under the coffee category. It should be deboosted to Food & Beverages - Beverages - Coffee.",
    "sz_feedback": "",
    "date": "2026-03-03"
  },
  {
    "error_type": "Wrongly deboosted",
    "root_cause": "Translation Issue",
    "user_category": "Health - Sexual Wellness - Others",
    "reviewer_category": "Health - Sexual Wellness - Sex Toys",
    "lesson": "Basically, these two categories can be used interchangeably. - Health - Sexual Wellness - Sex Toys - Health - Sexual Wellness - Others In the Chinese context, a product will only be categorized as Sex Toys if it is very clearly and explicitly a sex toy. Therefore, if the user has selected “Others”, but during the review you think the product should be recommended under \"Sex Toys\", please first check whether it appears in the \"Sex Toys\" keyword category list. If it does not appear on the list, it can remain under \"Others\". The current \"Sex Toys\" keywords include: Sex Toys (Vibrating Eggs, Anal Plugs), Vibrators, Masturbators, Insertable Pillows, Inflatable Dolls, Massage Wands, Sex Toy Accessories (Wires, etc.), SM-related products + mention/emphasis on toys, Insurance, Finger cot, Finger condom.",
    "sz_feedback": "",
    "date": "2026-03-04"
  },
  {
    "error_type": "Wrongly passed",
    "root_cause": "Translation Issue",
    "user_category": "Beauty - Hair Care - Hair and Scalp Conditioner",
    "reviewer_category": "",
    "lesson": "Due to the Chinese category translation, scalp-related products are placed under “Others. This item will not be counted toward the score, and I have already added a red highlighted reminder for this category in the Category Keywords (ALL) sheet.",
    "sz_feedback": "",
    "date": "2026-03-05"
  },
  {
    "error_type": "Wrongly deboosted",
    "root_cause": "Agent Misjudgment",
    "user_category": "Food & Beverages - Beverages - Dessert Drink",
    "reviewer_category": "Food & Beverages - Convenience / Ready-to-eat - Instant Rice & Porridgef",
    "lesson": "The product is sold in various flavors, including Purple Rice Eight-Treasure Porridge, Peanut Milk, Peanut Soup, and Mung Bean Soup. Therefore, the Dessert Drink category originally selected by the user can be considered acceptable. The Dessert Drink keyword list includes “Eight-Treasure Porridge,” which is a dessert with a variety of ingredients.",
    "sz_feedback": "",
    "date": "2026-03-07"
  },
  {
    "error_type": "Wrongly passed",
    "root_cause": "Agent Misjudgment",
    "user_category": "Food & Beverages - Baking Needs - Flour",
    "reviewer_category": "",
    "lesson": "\"Almond powder\" is not flour. If it is intended for baking, it would be more appropriate to place it under: Food & Beverages - Baking Needs -Others. The description mentions that it mixes easily and doesn’t cause throat irritation. Since it can be consumed directly, it can also be deboosted to: Food & Beverages - Beverages - Powdered Drink Mixes.",
    "sz_feedback": "",
    "date": "2026-03-10"
  },
  {
    "error_type": "Wrongly passed",
    "root_cause": "Agent Misjudgment",
    "user_category": "Food & Beverages - Snacks - Biscuits, Cookies & Wafers",
    "reviewer_category": "",
    "lesson": "The title states “Rooibos Tea.” It is clearly identified as a tea product, and the description also indicates that it is tea bags. It should be deboosted to: Food & Beverages – Beverages – Tea & Tea Bags.",
    "sz_feedback": "",
    "date": "2026-03-11"
  },
  {
    "error_type": "Wrongly passed",
    "root_cause": "Agent Misjudgment",
    "user_category": "Food & Beverages - Snacks - Others",
    "reviewer_category": "",
    "lesson": "The product can be identified as an oil based on the image and title. The It should be categorized under Food & Beverages - Cooking Essentials - Oil.",
    "sz_feedback": "",
    "date": "2026-03-16"
  },
  {
    "error_type": "Wrongly passed",
    "root_cause": "Agent Misjudgment",
    "user_category": "Food & Beverages - Snacks - Others",
    "reviewer_category": "",
    "lesson": "The title and image clearly indicate that it is milk tea. You may refer to the keyword category table for recommendations. KW: Tea-related beverages are not limited by texture (including tea bags/milk tea/fruit tea).",
    "sz_feedback": "",
    "date": "2026-03-16"
  },
  {
    "error_type": "Wrongly passed",
    "root_cause": "Agent Misjudgment",
    "user_category": "Health - Food Supplement - Others",
    "reviewer_category": "",
    "lesson": "It is clearly Vitamin C, which can be categorized as \" Health - Food Supplement - Well Being\". It falls under the keywords for Health - Food Supplement - Well Being (Vitamin C)",
    "sz_feedback": "",
    "date": "2026-03-16"
  },
  {
    "error_type": "Wrongly deboosted",
    "root_cause": "Agent Misjudgment",
    "user_category": "Beauty - Skincare - Facial Moisturizer",
    "reviewer_category": "Beauty - Bath & Body Care - Body Cream, Lotion & Butter",
    "lesson": "This product can be used on both the body and face. The instructions indicate it should be used after washing the face, which means it is also suitable for facial use. Therefore, the user’s original category can be accepted.",
    "sz_feedback": "",
    "date": "2026-03-16"
  },
  {
    "error_type": "Wrongly deboosted",
    "root_cause": "Agent Misjudgment",
    "user_category": "Food & Beverages - Cooking Essentials - Stock, Gravy & Instant Soup",
    "reviewer_category": "Food & Beverages - Cooking Essentials - Seasonings & Condiments - Herbs & Spices",
    "lesson": "According to the category table, \"Bak Kut Teh\" can be placed under: Food & Beverages - Cooking Essentials - Seasonings & Condiments - Herbs & Spices Food & Beverages - Cooking Essentials - Stock, Gravy & Instant Soup Food & Beverages - Cooking Essentials - Cooking Paste & Kit The user’s selected category is acceptable and does not need to be deboosted.",
    "sz_feedback": "",
    "date": "2026-03-16"
  },
  {
    "error_type": "Wrongly passed",
    "root_cause": "Agent Misjudgment",
    "user_category": "Food & Beverages - Fresh & Frozen Food - Fruits - Others",
    "reviewer_category": "",
    "lesson": "The image clearly shows what appears to be oranges. The title also indicates sweet kumquats, and the description mentions citrus. This type of product should be deboosted to: Food & Beverages - Fresh & Frozen Food - Fruits - Citrus",
    "sz_feedback": "",
    "date": "2026-03-17"
  },
  {
    "error_type": "Wrongly passed",
    "root_cause": "Agent Misjudgment",
    "user_category": "Food & Beverages - Breakfast Cereals & Spread - Others",
    "reviewer_category": "",
    "lesson": "This product is yogurt curds, a yogurt-based product. It should be categorized under: Food & Beverages - Dairy & Eggs - Others. >>Category Keywords (ALL) Food & Beverages - Dairy & Eggs - Yogurt & Cultured Milk",
    "sz_feedback": "",
    "date": "2026-03-17"
  },
  {
    "error_type": "Wrongly passed",
    "root_cause": "Agent Misjudgment",
    "user_category": "Health - Sexual Wellness - Others",
    "reviewer_category": "",
    "lesson": "The product title clearly states \"lubricant,\" so it can be deboosted to \"Health - Sexual Wellness - Lubricants \"category.",
    "sz_feedback": "",
    "date": "2026-03-20"
  },
  {
    "error_type": "Wrongly deboosted",
    "root_cause": "Agent Misjudgment",
    "user_category": "Food & Beverages - Fresh & Frozen Food - Processed Meat & Seafood",
    "reviewer_category": "Food & Beverages - Fresh & Frozen Food - Seafood - Fish",
    "lesson": "This type of fish roe is usually seasoned and can be eaten directly or served with rice. *Seasoned (marinated or salted) or otherwise processed. Therefore, the user’s proactive selection of Processed Seafood can be accepted, and there is no need to deboost it to the Fish category.",
    "sz_feedback": "",
    "date": "2026-03-20"
  },
  {
    "error_type": "Wrongly deboosted",
    "root_cause": "Agent Misjudgment",
    "user_category": "Food & Beverages - Beverages - Powdered Drink Mixes",
    "reviewer_category": "Food & Beverages - Gift Set & Hampers",
    "lesson": "This product is dried fruit that can be brewed into fruit-infused water. Therefore, the user’s original category selection can be accepted. Based on the category keyword table, “fruit tea” can also be placed under Powdered Drink Mixes.",
    "sz_feedback": "",
    "date": "2026-03-22"
  },
  {
    "error_type": "Wrongly passed",
    "root_cause": "Agent Misjudgment",
    "user_category": "Baby & Kids Fashion - Boy Clothes - Outerwear - Vests",
    "reviewer_category": "",
    "lesson": "This product is an “innerwear” tank top, not an outerwear thermal vest. It can be deboosted to: Baby & Kids Fashion - Boy Clothes - Tops - Others Baby & Kids Fashion - Boy Clothes - Tops - T-shirts KW: Boys' Vests, Boys' Tank Tops",
    "sz_feedback": "",
    "date": "2026-04-20"
  },
  {
    "error_type": "Wrongly deboosted",
    "root_cause": "Agent Misjudgment",
    "user_category": "Beauty - Hand, Foot & Nail Care - Nail Care - Nail Treatment",
    "reviewer_category": "Beauty - Hand, Foot & Nail Care - Nail Care - Manicure Tools & Devices",
    "lesson": "Per the wrong category KW remarks: The difference cannot be discerned from the user's perspective.” “The two can be reasonably interchangeable.” \"The difference cannot be discerned from the user's perspective. Beauty - Hand, Foot & Nail Care - Nail Care - Nail Treatment Beauty - Hand, Foot & Nail Care - Nail Care - Manicure Tools & Devices The two can be reasonably interchangeable. For TW users, these two categories can be used interchangeably and do not require deboosting.",
    "sz_feedback": "Perspective: The item is intended for decorative nail tool use rather than treatment, based on the English keywords provided. For this reason, the agent selected a more specific and appropriate category. Reasonably Interchangeable: There are no remarks in the keywords indicating that the item should not be deboosted. If there are any updates or clarifications, we would appreciate your guidance in noting them in the remarks section. If Changes are Made: Any updates should not impact the agent’s score.",
    "date": "2026-04-20"
  },
  {
    "error_type": "Wrongly passed",
    "root_cause": "Agent Misjudgment",
    "user_category": "Stationery - School & Office Equipment - Glues",
    "reviewer_category": "",
    "lesson": "The product is a ceramic repair adhesive, mainly used for repairing ceramics. It should be deboosted to Home & Living - Tools & Home Improvement - Industrial Adhesives & Tapes. The user-selected category, Stationery - School & Office Equipment - Glues, is more suitable for stationery glue.",
    "sz_feedback": "",
    "date": "2026-04-21"
  },
  {
    "error_type": "Wrongly deboosted",
    "root_cause": "Agent Misjudgment",
    "user_category": "Home & Living - Dinnerware - Placemats & Coasters",
    "reviewer_category": "Home & Living - Dinnerware - Others",
    "lesson": "The product is multifunctional. When not unfolded, it is indeed a coaster (the user’s selected category is correct); when unfolded, it becomes a drink carrier bag.",
    "sz_feedback": "",
    "date": "2026-04-21"
  },
  {
    "error_type": "Wrongly passed",
    "root_cause": "Agent Misjudgment",
    "user_category": "Mobile & Gadgets - Accessories - Others",
    "reviewer_category": "",
    "lesson": "This product is a large household fan and is unrelated to mobile phones. It should be deboosted to Home Appliances - Large Household Appliances - Cooling - Fans.",
    "sz_feedback": "",
    "date": "2026-04-21"
  },
  {
    "error_type": "Wrongly passed",
    "root_cause": "Agent Misjudgment",
    "user_category": "Food & Beverages - Fresh & Frozen Food - Fruits - Others",
    "reviewer_category": "",
    "lesson": "Blueberries should be deboosted to Food & Beverages - Fresh & Frozen Food - Fruits - Berries.",
    "sz_feedback": "",
    "date": "2026-04-21"
  },
  {
    "error_type": "Wrongly deboosted",
    "root_cause": "Agent Misjudgment",
    "user_category": "Home & Living - Home Care Supplies - Cleaning Brushes",
    "reviewer_category": "Home Appliances - Small Household Appliances - Others",
    "lesson": "This product is a pet hair removal brush. The category originally selected by the user (cleaning brush) is appropriate, and it should not be reclassified under home appliances, as the product is not related to electricity.",
    "sz_feedback": "",
    "date": "2026-04-22"
  },
  {
    "error_type": "Wrongly deboosted",
    "root_cause": "Agent Misjudgment",
    "user_category": "Home & Living - Kitchenware - Spatulas & Cooking Tweezers",
    "reviewer_category": "Home Appliances - Kitchen Appliances - Others",
    "lesson": "This product is a pouring spout for a cooking oil container. The agent recommended categorizing it under Kitchen Appliances, but the oil container itself is not a kitchen appliance. It should be deboosted to Home & Living - Kitchenware - Others instead.",
    "sz_feedback": "",
    "date": "2026-04-22"
  },
  {
    "error_type": "Wrongly passed",
    "root_cause": "Agent Misjudgment",
    "user_category": "Beauty - Skincare - Others",
    "reviewer_category": "",
    "lesson": "The description indicates it is mostly used for food (various items such as jelly, pudding, cake, rice cake, etc.). It is unrelated to beauty products and can be deboosted to BE - Home & Living - Kitchenware - Others.",
    "sz_feedback": "",
    "date": "2026-04-24"
  },
  {
    "error_type": "Wrongly passed",
    "root_cause": "Agent Misjudgment",
    "user_category": "Food & Beverages - Others",
    "reviewer_category": "",
    "lesson": "Although the title is in a foreign language (and can be translated if not fully understood), the images clearly show it is a snack of nuts wrapped in seaweed. For this case, it can be deboosted to Food & Beverages - Snacks - Others.",
    "sz_feedback": "",
    "date": "2026-04-24"
  },
  {
    "error_type": "Wrongly passed",
    "root_cause": "Agent Misjudgment",
    "user_category": "Women Clothes - Pants & Leggings - Pants",
    "reviewer_category": "",
    "lesson": "Both the image and the title indicate it is a “skirt,” so it should be deboosted to Women Clothes - Skirts.",
    "sz_feedback": "",
    "date": "2026-04-24"
  },
  {
    "error_type": "Wrongly deboosted",
    "root_cause": "Translation Issue",
    "user_category": "Women Clothes - Jackets, Coats & Vests - Others",
    "reviewer_category": "Women Clothes - Jackets, Coats & Vests - Jackets",
    "lesson": "It will not be counted toward the QA report count; this is for reminder purposes only. Please note that when users select “other outerwear,” it is usually not necessary to specifically deboost it to the jacket category. This is related to the Chinese-language context, and it is also explained in the keyword column (Column E) of the category table.",
    "sz_feedback": "",
    "date": "2026-04-24"
  },
  {
    "error_type": "Wrongly passed",
    "root_cause": "Agent Misjudgment",
    "user_category": "Tickets, Vouchers & Services - Transport",
    "reviewer_category": "",
    "lesson": "The item is a plush toy storage tote bag, so it can be deboosted from shopping bag–related categories or Hobbies & Collections - Collectible Items - Anime & Manga Collectibles.",
    "sz_feedback": "",
    "date": "2026-04-24"
  },
  {
    "error_type": "Wrongly deboosted",
    "root_cause": "Agent Misjudgment",
    "user_category": "Beauty - Skincare - Facial Serum & Essence",
    "reviewer_category": "Beauty - Skincare - Eye Treatment - Eye Cream",
    "lesson": "The user is indeed selling serum products, so the user-selected category is correct and no deboost is needed.",
    "sz_feedback": "",
    "date": "2026-04-27"
  },
  {
    "error_type": "Wrongly deboosted",
    "root_cause": "Agent Misjudgment",
    "user_category": "Home & Living - Home Care Supplies - Others",
    "reviewer_category": "Home & Living - Home Care Supplies - Others",
    "lesson": "The user has already selected the category \"Home & Living - Home Care Supplies - Others\". Please double-check whether the seller-selected category is correct before deboosting to avoid incorrect enforcement.",
    "sz_feedback": "",
    "date": "2026-04-27"
  },
  {
    "error_type": "Wrongly deboosted",
    "root_cause": "Agent Misjudgment",
    "user_category": "Food & Beverages - Beverages - Traditional & Herbal Drinks",
    "reviewer_category": "Food & Beverages - Food Staples - Dried Goods - Traditional Herbs",
    "lesson": "The user mentioned in the description that the dried herbs can be brewed or boiled in water. Therefore, the user-selected category \"Food & Beverages - Beverages - Traditional & Herbal Drinks\" is reasonable and no deboost is needed.",
    "sz_feedback": "",
    "date": "2026-04-28"
  },
  {
    "error_type": "Wrongly deboosted",
    "root_cause": "Agent Misjudgment",
    "user_category": "Beauty - Skincare - Facial Moisturizer",
    "reviewer_category": "Beauty - Bath & Body Care - Body Cream, Lotion & Butter",
    "lesson": "The title clearly states that this product is a moisturizer, and the product information does not indicate that it is limited to body use. Therefore, it is reasonable to categorize it under \"Beauty - Skincare - Facial Moisturizer\" and it should not be deboosted.",
    "sz_feedback": "",
    "date": "2026-04-28"
  },
  {
    "error_type": "Wrongly deboosted",
    "root_cause": "Agent Misjudgment",
    "user_category": "Health - Food Supplement - Well Being",
    "reviewer_category": "Mom & Baby - Baby Healthcare - Baby Vitamins & Supplements",
    "lesson": "For products under children-specific category guidelines, if the product information states \"suitable for ages 8 and above\", it can be categorized under adult categories. Since the product description specifies usage for ages 12 and above, placing it under the adult health supplement category \"Health - Food Supplement - Well Being\" is correct.",
    "sz_feedback": "",
    "date": "2026-04-28"
  },
  {
    "error_type": "Wrongly deboosted",
    "root_cause": "Agent Misjudgment",
    "user_category": "Beauty - Skincare - Others",
    "reviewer_category": "Beauty - Skincare - Facial Serum & Essence",
    "lesson": "The seller offers two product forms: a cream and a liquid. The liquid form is not specified as a \"serum\". As this is a mixed formulation without a clearly defined specific category, the user-selected category \"Beauty - Skincare - Others\" is reasonable.",
    "sz_feedback": "",
    "date": "2026-04-28"
  },
  {
    "error_type": "Wrongly passed",
    "root_cause": "Agent Misjudgment",
    "user_category": "Beauty - Bath & Body Care - Others",
    "reviewer_category": "",
    "lesson": "This product is a body balm fragrance and should be categorized under \"Beauty - Perfumes & Fragrances\".",
    "sz_feedback": "",
    "date": "2026-04-28"
  },
  {
    "error_type": "Wrongly passed",
    "root_cause": "Agent Misjudgment",
    "user_category": "Beauty - Skincare - Facial Serum & Essence",
    "reviewer_category": "",
    "lesson": "The title states that this product is an aloe vera cream, not a serum. It should be categorized under \"Beauty - Skincare - Facial Moisturizer\".",
    "sz_feedback": "",
    "date": "2026-04-28"
  },
  {
    "error_type": "Wrongly passed",
    "root_cause": "Agent Misjudgment",
    "user_category": "Beauty - Men's Care - Shaving & Grooming - Razors & Blades",
    "reviewer_category": "",
    "lesson": "The title clearly states that this hair removal tool is \"for women\". Therefore, the user-selected category \"Men's Care\" is not appropriate and should be corrected to \"Beauty - Beauty Tools - Hair Removal Tools\".",
    "sz_feedback": "",
    "date": "2026-04-28"
  },
  {
    "error_type": "Wrongly deboosted",
    "root_cause": "Agent Misjudgment",
    "user_category": "Health - Sexual Wellness - Sex Toys",
    "reviewer_category": "",
    "lesson": "Most non-toy items that enhance pleasure can be categorized under \"Health - Sexual Wellness - Others\" or \"Health - Sexual Wellness - Sex Toys\". Therefore, placing this product under \"Health - Sexual Wellness - Sex Toys\" is also correct and no deboost is needed.",
    "sz_feedback": "",
    "date": "2026-04-28"
  },
  {
    "error_type": "Wrongly passed",
    "root_cause": "Agent Misjudgment",
    "user_category": "Food & Beverages - Convenience / Ready-to-eat - Cooked Food",
    "reviewer_category": "",
    "lesson": "This product is millet red date osmanthus cake, which is clearly a pastry. It should be corrected to \"Food & Beverages - Bakery - Pastry\".",
    "sz_feedback": "",
    "date": "2026-04-28"
  },
  {
    "error_type": "Wrongly passed",
    "root_cause": "Agent Misjudgment",
    "user_category": "Beauty - Skincare - Toner",
    "reviewer_category": "",
    "lesson": "The products sold by the user do not include any \"toner\", so they should not be categorized under this category. The correct category should be selected based on the actual products being sold, for example, \"Beauty - Skincare - Facial Moisturizer\".",
    "sz_feedback": "It does include a toner. Please check the product images.",
    "date": "2026-04-28"
  },
  {
    "error_type": "Wrongly passed",
    "root_cause": "Agent Misjudgment",
    "user_category": "Tickets, Vouchers & Services - Events & Attractions - Others",
    "reviewer_category": "",
    "lesson": "This product is an \"IPASS\" transportation card. According to the PH _ Wrong Category KW sheet, the category \"Tickets, Vouchers & Services - Transport\" specifies that IPASS cards should be placed under this category.",
    "sz_feedback": "",
    "date": "2026-04-28"
  },
  {
    "error_type": "Wrongly deboosted",
    "root_cause": "Agent Misjudgment",
    "user_category": "Food & Beverages - Snacks - Others",
    "reviewer_category": "Food & Beverages - Bakery - Pastry",
    "lesson": "This product is similar to mochi. It has a chewy, mochi-like outer layer with a filling inside. Therefore, the user’s original category can be accepted. The mochi category can be placed under: BE - Food & Beverages - Snacks - Others.",
    "sz_feedback": "",
    "date": "2026-04-29"
  },
  {
    "error_type": "Wrongly passed",
    "root_cause": "Agent Misjudgment",
    "user_category": "Food & Beverages - Cooking Essentials - Flour Coating",
    "reviewer_category": "",
    "lesson": "Sesame is different from flour. According to the category keywords, dry-roasted sesame can be deboosted to Food & Beverages - Cooking Essentials - Seasonings & Condiments - Others.",
    "sz_feedback": "",
    "date": "2026-04-29"
  },
  {
    "error_type": "Wrongly passed",
    "root_cause": "Agent Misjudgment",
    "user_category": "Food & Beverages - Dairy & Eggs - Eggs",
    "reviewer_category": "",
    "lesson": "The image can clearly be identified as unrelated to eggs; the upper portion shows a car dashboard. In fact, this product is a “gauge sweep.” A “gauge sweep” (also known as a needle sweep or instrument cluster self-check) refers to the phenomenon when a car starts up and the dashboard needles (usually the speedometer and tachometer) rapidly move to their maximum values and then return to zero. It can be classified under automotive-related categories: BE - Automobiles - Automobile Interior Accessories - Others",
    "sz_feedback": "",
    "date": "2026-04-29"
  },
  {
    "error_type": "Wrongly passed",
    "root_cause": "Agent Misjudgment",
    "user_category": "Beauty - Beauty Sets & Packages",
    "reviewer_category": "",
    "lesson": "This product is related to outdoor toys and is clearly unrelated to cosmetics. It should be deboosted to Hobbies & Collections - Toys & Games - Others.",
    "sz_feedback": "",
    "date": "2026-04-29"
  },
  {
    "error_type": "Wrongly deboosted",
    "root_cause": "Agent Misjudgment",
    "user_category": "Health - Personal Care - Feminine Care - Others",
    "reviewer_category": "Health - Personal Care - Feminine Care - Feminine Wash",
    "lesson": "This is a bundle product that includes a feminine wash and a cooling spray (which is not a cleanser). Therefore, if the user selects “Others,” it should not be deboosted to BE - Health - Personal Care - Feminine Care - Feminine Wash.",
    "sz_feedback": "",
    "date": "2026-04-30"
  },
  {
    "error_type": "Wrongly passed",
    "root_cause": "Agent Misjudgment",
    "user_category": "Food & Beverages - Snacks - Dried Snacks - Dried Fruits",
    "reviewer_category": "",
    "lesson": "The product is a squid-based seafood snack. The store does not sell any dried fruit products, so it should be deboosted to Food & Beverages - Snacks - Dried Snacks - Dried Seafood Snacks.",
    "sz_feedback": "",
    "date": "2026-04-30"
  },
  {
    "error_type": "Wrongly deboosted",
    "root_cause": "Agent Misjudgment",
    "user_category": "Home & Living - Tools & Home Improvement - Protective Gloves, Goggles & Masks",
    "reviewer_category": "Baby & Kids Fashion - Baby & Kids Accessories - Earmuffs",
    "lesson": "Even if it does not fit the Protective Gloves, Goggles & Masks category, it should not be deboosted to Baby & Kids Fashion - Baby & Kids Accessories - Earmuffs. Please note that L1 is for babies and children, and this product is not intended for them. It should instead be deboosted to Audio - Others",
    "sz_feedback": "",
    "date": "2026-05-04"
  },
  {
    "error_type": "Wrongly passed",
    "root_cause": "Agent Misjudgment",
    "user_category": "Watches - Others",
    "reviewer_category": "",
    "lesson": "The title indicates that it is a women’s watch, so it can be deboosted to Watches - Women Watches.",
    "sz_feedback": "The watch is not limited to women only and can also be used as a multi-functional watch based on the title. This should be considered for a relaxed review.",
    "date": "2026-05-04"
  },
  {
    "error_type": "Wrongly deboosted",
    "root_cause": "Agent Misjudgment",
    "user_category": "Women Clothes - Jackets, Coats & Vests - Others",
    "reviewer_category": "Women Clothes - Jackets, Coats & Vests - Jackets",
    "lesson": "Please note that when users select “other outerwear,” it is usually not necessary to specifically deboost it to the jacket category. This is related to the Chinese-language context, and it is also explained in the keyword column (Column E) of the category table. *This case was already addressed in the QA report for the week of April 30, and has therefore been classified as a misjudgment.",
    "sz_feedback": "",
    "date": "2026-05-04"
  },
  {
    "error_type": "Wrongly deboosted",
    "root_cause": "Agent Misjudgment",
    "user_category": "Home & Living - Fengshui & Religious Supplies",
    "reviewer_category": "Fashion Accessories - Additional Accessories - Charms, Pendants & Ornaments",
    "lesson": "The title mentions terms such as attracting wealth, improving fortune, and boosting financial luck, which match the category keyword \"Attracting Wealth\" in the category list. If the user selects Home & Living - Fengshui & Religious Supplies, it can be passed and does not need to be deboosted.",
    "sz_feedback": "",
    "date": "2026-05-04"
  },
  {
    "error_type": "Wrongly passed",
    "root_cause": "Agent Misjudgment",
    "user_category": "Beauty - Bath & Body Care - Others",
    "reviewer_category": "",
    "lesson": "Based on the product titles, these are all underarm antiperspirant and deodorizing products, and there is a clear category to deboost them to: BE - Beauty - Bath & Body Care - Body Deodorants.",
    "sz_feedback": "",
    "date": "2026-05-04"
  },
  {
    "error_type": "Wrongly deboosted",
    "root_cause": "Agent Misjudgment",
    "user_category": "Health - Personal Care - Others",
    "reviewer_category": "Home & Living - Home Fragrance & Aromatherapy - Others",
    "lesson": "The category originally selected by the user, Health - Personal Care - Others, is correct and does not need to be deboosted. KW :Moxa sticks/moxa cones",
    "sz_feedback": "",
    "date": "2026-05-04"
  },
  {
    "error_type": "Wrongly passed",
    "root_cause": "Agent Misjudgment",
    "user_category": "Food & Beverages - Snacks - Biscuits, Cookies & Wafers",
    "reviewer_category": "",
    "lesson": "This is chocolate, so it can be deboosted to Food & Beverages - Snacks - Chocolate. It is neither cookies nor chocolate wafers, but plain chocolate.",
    "sz_feedback": "",
    "date": "2026-05-04"
  },
  {
    "error_type": "Wrongly deboosted",
    "root_cause": "Agent Misjudgment",
    "user_category": "Pets - Pet Grooming - Hair Care",
    "reviewer_category": "Home & Living - Home Care Supplies - Laundry Care - Others",
    "lesson": "The title mentions pet deshedding brushes and tools for removing cat and dog hair. If the product is multifunctional, please ensure it is assigned to a reasonable category and do not force a deboost. If the user selects Pets - Pet Grooming - Hair Care, it already includes deshedding brushes and should be passed without deboosting. Category keyword: Pet Hair Removal Brushes",
    "sz_feedback": "",
    "date": "2026-05-04"
  },
  {
    "error_type": "Wrongly passed",
    "root_cause": "Agent Misjudgment",
    "user_category": "Home & Living - Home Care Supplies - Others",
    "reviewer_category": "",
    "lesson": "The product is essentially a foldable cup that can also be used to make ice, so it can be boosted to Home & Living - Dinnerware - Cups, Mugs & Glasses.",
    "sz_feedback": "",
    "date": "2026-05-05"
  },
  {
    "error_type": "Wrongly deboosted",
    "root_cause": "Agent Misjudgment",
    "user_category": "Home & Living - Tools & Home Improvement - Construction Materials",
    "reviewer_category": "Home & Living - Tools & Home Improvement - Tools - Levels & Measuring Wheels",
    "lesson": "Tile leveling systems are tile installation consumables and are related to construction materials. The category originally selected by the user can be passed, as it is unrelated to Levels & Measuring Wheels, or it can be deboosted to Home & Living - Tools & Home Improvement - Tools - Others.",
    "sz_feedback": "The product is associated with leveling tools, which is why it fits under the Home & Living - Tools & Home Improvement - Tools - Levels & Measuring Wheels category.",
    "date": "2026-05-05"
  },
  {
    "error_type": "Wrongly passed",
    "root_cause": "Agent Misjudgment",
    "user_category": "Sports & Outdoors - Sports & Outdoor Recreation Equipments - Fitness Equipment - Fitness Machines",
    "reviewer_category": "",
    "lesson": "This product is a relaxation massage device, not fitness equipment, and should be deboosted to Health - Personal Care - Massage & Therapy Devices.",
    "sz_feedback": "",
    "date": "2026-05-05"
  },
  {
    "error_type": "Wrongly deboosted",
    "root_cause": "Agent Misjudgment",
    "user_category": "Motorcycles - Motorcycle Spare Parts - Others",
    "reviewer_category": "Motorcycles - Motorcycle Spare Parts - Ignition & Engine Parts - Radiators",
    "lesson": "This product is different from Radiators. It is an exterior accessory and should be deboosted to “Motorcycles - Motorcycle Accessories - Others.”",
    "sz_feedback": "The radiators category has a keyword that says \"heat sink cover\" and agent thought it's somehow similar to the radiator cover.",
    "date": "2026-05-11"
  },
  {
    "error_type": "Wrongly deboosted",
    "root_cause": "Agent Misjudgment",
    "user_category": "Mom & Baby - Toys - Baby & Toddler Toys - Bath Toys",
    "reviewer_category": "Beauty - Bath & Body Care - Others",
    "lesson": "The category selected by the user, “Bath Toys,” is reasonable for this product, and it does not require deboosting.",
    "sz_feedback": "",
    "date": "2026-05-11"
  },
  {
    "error_type": "Wrongly deboosted",
    "root_cause": "Agent Misjudgment",
    "user_category": "Home & Living - Furniture - Doorstoppers",
    "reviewer_category": "Home & Living - Tools & Home Improvement - Others",
    "lesson": "The category selected by the user is correct. KW:Doorstops, Door Clips, Door Plugs, Door Tops, Weatherstripping, Door Gaps, And Other Non-Repair Functions For Sealing And Sound Insulation.",
    "sz_feedback": "",
    "date": "2026-05-11"
  },
  {
    "error_type": "Wrongly deboosted",
    "root_cause": "Agent Misjudgment",
    "user_category": "Pets - Pet Food - Small Pet Food",
    "reviewer_category": "Pets - Pet Food - Small Pet Treats",
    "lesson": "For users, both items are considered pet food; therefore, the user’s category selection is correct. Unless the category is clearly and significantly incorrect, it should not be deboosted.",
    "sz_feedback": "",
    "date": "2026-05-11"
  },
  {
    "error_type": "Wrongly deboosted",
    "root_cause": "Agent Misjudgment",
    "user_category": "Food & Beverages - Snacks - Dried Snacks - Others",
    "reviewer_category": "Food & Beverages - Snacks - Others",
    "lesson": "“Food & Beverages - Snacks - Dried Snacks - Others” and “Food & Beverages - Snacks - Others” are not meaningfully different from a user perspective, and the product is indeed a dried snack. Therefore, the original selection under “Dried Snacks” is correct, and there is no need for deboosting.",
    "sz_feedback": "",
    "date": "2026-05-11"
  },
  {
    "error_type": "Wrongly deboosted",
    "root_cause": "Agent Misjudgment",
    "user_category": "Stationery - School & Office Equipment - Others",
    "reviewer_category": "Home & Living - Kitchenware - Cling Wrap",
    "lesson": "kw:ziplock bag This is a very versatile product. There should be more than just one category result, including categories that are closer to the user’s likely selection. If a deboost must be applied, it would make more sense to choose “Stationery - Gift & Wrapping - Others” under the L1 Stationery category rather than a completely different category like Home & Living - Kitchenware.",
    "sz_feedback": "",
    "date": "2026-05-13"
  },
  {
    "error_type": "Wrongly passed",
    "root_cause": "Agent Misjudgment",
    "user_category": "Automobiles - Automobiles",
    "reviewer_category": "",
    "lesson": "Why would the reviewer approve the Automobiles - Automobiles category?? It should be deboosted to Hobbies & Collections - Collectible Items - Idol Collectibles.",
    "sz_feedback": "",
    "date": "2026-05-13"
  },
  {
    "error_type": "Wrongly deboosted",
    "root_cause": "Agent Misjudgment",
    "user_category": "Men Shoes - Boots - Safety Boots",
    "reviewer_category": "Men Shoes - Boots - Rain Boots",
    "lesson": "The product is steel-toe rain boots, so the user’s selection of Men Shoes - Boots - Safety Boots is correct (the keyword includes “Steel Toe Boots”). There is no need to further deboost it to the rain boots category. Please pay attention to the operation guidelines — if the user’s selected category is reasonable, it should not be deboosted further.",
    "sz_feedback": "",
    "date": "2026-05-13"
  },
  {
    "error_type": "Wrongly deboosted",
    "root_cause": "Agent Misjudgment",
    "user_category": "Food & Beverages - Bakery - Breads",
    "reviewer_category": "Food & Beverages - Others",
    "lesson": "Pizza crust is inherently similar to bread, so the user’s selection of the bread category is already reasonable. There is no need to deboost it to “Others.”",
    "sz_feedback": "",
    "date": "2026-05-14"
  },
  {
    "error_type": "Wrongly deboosted",
    "root_cause": "Agent Misjudgment",
    "user_category": "Beauty - Bath & Body Care - Sun Care - Body Sunscreen & After Sun",
    "reviewer_category": "Beauty - Skincare - Face Sunscreen",
    "lesson": "KW:Non-oil-based sunscreens for the face (sunscreen lotion, sunscreen cream, sunscreen lotion, etc.) Even if the user selects “body sunscreen,” it is still within a reasonable range, so it should not be further deboosted.",
    "sz_feedback": "",
    "date": "2026-05-14"
  },
  {
    "error_type": "Wrongly deboosted",
    "root_cause": "Agent Misjudgment",
    "user_category": "Travel & Luggage - Travel Accessories - Others",
    "reviewer_category": "Travel & Luggage - Others",
    "lesson": "KW:Suitcase Wheels No deboost is needed.",
    "sz_feedback": "",
    "date": "2026-05-14"
  },
  {
    "error_type": "Wrongly deboosted",
    "root_cause": "Agent Misjudgment",
    "user_category": "Hobbies & Collections - Collectible Items - Action Figurines",
    "reviewer_category": "Hobbies & Collections - Collectible Items - Mecha Models & Diecast",
    "lesson": "Hobbies & Collections - Collectible Items - Action Figurines is a reasonable and appropriate category. There is no need to further deboost it to Mecha Models & Diecast, since the original selection already fits the product type (a collectible action figure with mech styling).",
    "sz_feedback": "",
    "date": "2026-05-14"
  },
  {
    "error_type": "Wrongly passed",
    "root_cause": "Agent Misjudgment",
    "user_category": "Beauty - Beauty Sets & Packages",
    "reviewer_category": "",
    "lesson": "This is a traditional Chinese medicinal herb processed into pills, and it is not related to Beauty Sets & Packages. It should be deboosted to Health - Food Supplement - Others.",
    "sz_feedback": "",
    "date": "2026-05-15"
  },
  {
    "error_type": "Wrongly passed",
    "root_cause": "Agent Misjudgment",
    "user_category": "Food & Beverages - Gift Set & Hampers",
    "reviewer_category": "",
    "lesson": "The product contents are not related to food. It can be deboosted to any category relevant to the actual contents, or to BE - Stationery - Gift & Wrapping - Gift Bags.",
    "sz_feedback": "",
    "date": "2026-05-15"
  },
  {
    "error_type": "Wrongly passed",
    "root_cause": "Agent Misjudgment",
    "user_category": "Food & Beverages - Fresh & Frozen Food - Fruits - Others",
    "reviewer_category": "",
    "lesson": "Green mango is a tropical fruit and should be deboosted to Food & Beverages - Fresh & Frozen Food - Fruits - Tropical & Exotic Fruits.",
    "sz_feedback": "",
    "date": "2026-05-18"
  },
  {
    "error_type": "Wrongly passed",
    "root_cause": "Agent Misjudgment",
    "user_category": "Food & Beverages - Snacks - Sweets & Candies",
    "reviewer_category": "",
    "lesson": "Cheese and dairy-based snacks should be deboosted to Food & Beverages - Dairy & Eggs - Others. If the product is specifically cheese, it can alternatively be recommended to Food & Beverages - Dairy & Eggs - Cheese & Cheese Powder. If it is unclear whether the product contains dairy ingredients, it may also be recommended to Food & Beverages - Snacks - Others.",
    "sz_feedback": "We accepted the user-selected category because the product title explicitly contains the keyword \"candy.\"",
    "date": "2026-05-18"
  },
  {
    "error_type": "Wrongly passed",
    "root_cause": "Agent Misjudgment",
    "user_category": "Food & Beverages - Snacks - Others",
    "reviewer_category": "",
    "lesson": "This product is dried fruit and should be deboosted to Food & Beverages - Snacks - Dried Snacks - Dried Fruits.",
    "sz_feedback": "",
    "date": "2026-05-18"
  },
  {
    "error_type": "Wrongly passed",
    "root_cause": "Agent Misjudgment",
    "user_category": "Tickets, Vouchers & Services - Others",
    "reviewer_category": "",
    "lesson": "Movie ticket stubs should be deboosted to Tickets, Vouchers & Services - Events & Attractions - Movies.",
    "sz_feedback": "There were no listed keywords under the Tickets, Vouchers & Services - Events & Attractions - Movies. Therefore, we assumed the user-selected category was acceptable.",
    "date": "2026-05-18"
  },
  {
    "error_type": "Wrongly passed",
    "root_cause": "Agent Misjudgment",
    "user_category": "Food & Beverages - Convenience / Ready-to-eat - Others",
    "reviewer_category": "",
    "lesson": "Vegetable chips intended as snacks can be recommended to to Food & Beverages - Snacks - Dried Snacks - Others.",
    "sz_feedback": "It was specified in the product title that it is \"Ready-To-Eat\", hence, we assumed that the user-selected category was acceptable.",
    "date": "2026-05-18"
  },
  {
    "error_type": "Wrongly deboosted",
    "root_cause": "Agent Misjudgment",
    "user_category": "Beauty - Skincare - Facial Moisturizer",
    "reviewer_category": "Beauty - Bath & Body Care - Body Scrub & Peel",
    "lesson": "This product is a multifunctional item. The images in the description indicate that it can also be used for facial skin. The user’s original category was correct and should not be Deboosted.",
    "sz_feedback": "",
    "date": "2026-05-18"
  },
  {
    "error_type": "Wrongly passed",
    "root_cause": "Agent Misjudgment",
    "user_category": "Food & Beverages - Snacks - Sweets & Candies",
    "reviewer_category": "",
    "lesson": "Reference \"Sweets & Candies\" category keywords for placement include: Candy, Lollipops, Fruit Candy, Mints, Gummies, Chewing Gum, Throat Lozenges, Hawthorn Berries (e.g., hand-picked hawthorn berries), Goat Milk Tablets / Cow Milk Tablets. This product has a soft outer layer with a durian filling inside, and it does not fit the candy category. It can be recommended under mochi-related categories, such as Food & Beverages - Bakery - Pastry, or Food & Beverages - Snacks - Others.",
    "sz_feedback": "Since the product has a durian filling, can it be classified under the broader term 'fruit candy'?",
    "date": "2026-05-18"
  },
  {
    "error_type": "Wrongly deboosted",
    "root_cause": "Agent Misjudgment",
    "user_category": "Beauty - Beauty Tools - Hair Tools - Brushes & Combs",
    "reviewer_category": "Health - Personal Care - Massage & Therapy Devices",
    "lesson": "The product is a massage hair brush. The user correctly selected “brush,” so there is no need to deboost.",
    "sz_feedback": "",
    "date": "2026-05-19"
  },
  {
    "error_type": "Wrongly passed",
    "root_cause": "Agent Misjudgment",
    "user_category": "Hobbies & Collections - Collectible Items - Others",
    "reviewer_category": "",
    "lesson": "If it is clearly a mug, it can be deboosted to Home & Living - Dinnerware - Cups, Mugs & Glasses",
    "sz_feedback": "",
    "date": "2026-05-20"
  },
  {
    "error_type": "Wrongly passed",
    "root_cause": "Agent Misjudgment",
    "user_category": "Health - Personal Care - Others",
    "reviewer_category": "",
    "lesson": "This product is a medical tracheostomy fixation strap, which falls under medical supplies. It should be categorized under \"Health - Medical Supplies - Others\".",
    "sz_feedback": "",
    "date": "2026-05-20"
  },
  {
    "error_type": "Wrongly passed",
    "root_cause": "Agent Misjudgment",
    "user_category": "Home & Living - Home Care Supplies - Others",
    "reviewer_category": "",
    "lesson": "Food sealing clips/bag clips should be categorized under \"Home & Living - Kitchenware - Others\".",
    "sz_feedback": "",
    "date": "2026-05-20"
  },
  {
    "error_type": "Wrongly passed",
    "root_cause": "Agent Misjudgment",
    "user_category": "Motorcycles - Motorcycle Spare Parts - Body & Frame",
    "reviewer_category": "",
    "lesson": "This product is a motorcycle seat and should be categorized under \"Motorcycles - Motorcycle Accessories - Seats & Seat Covers",
    "sz_feedback": "",
    "date": "2026-05-20"
  },
  {
    "error_type": "Wrongly deboosted",
    "root_cause": "Agent Misjudgment",
    "user_category": "Sports & Outdoors - Sports & Outdoor Recreation Equipments - Cycling - Bicycle Parts & Accessories",
    "reviewer_category": "Sports & Outdoors - Sports & Outdoor Accessories - Dry Bags",
    "lesson": "The title clearly states that it is a waterproof saddle bag specifically designed for bicycles. Bicycle saddles are categorized under Bicycle Parts & Accessories, so it is also reasonable for their related accessories to be placed under Bicycle Parts & Accessories. The user’s original selection was correct and does not require additional deboosted.",
    "sz_feedback": "",
    "date": "2026-05-21"
  },
  {
    "error_type": "Wrongly passed",
    "root_cause": "Agent Misjudgment",
    "user_category": "Automobiles - Automobile Exterior Accessories - Covers",
    "reviewer_category": "",
    "lesson": "This is an exterior decorative trim plate for a car pedal and is unrelated to a car cover. It can be deboosted to Automobiles - Automobile Exterior Accessories - Others.",
    "sz_feedback": "",
    "date": "2026-05-21"
  },
  {
    "error_type": "Wrongly passed",
    "root_cause": "Agent Misjudgment",
    "user_category": "Food & Beverages - Others",
    "reviewer_category": "",
    "lesson": "This product is not food.The cup sleeve should be deboosted to Home & Living - Dinnerware - Others.",
    "sz_feedback": "",
    "date": "2026-05-21"
  },
  {
    "error_type": "Wrongly passed",
    "root_cause": "Agent Misjudgment",
    "user_category": "Tickets, Vouchers & Services - Others",
    "reviewer_category": "",
    "lesson": "Movie tickets > BE - Tickets, Vouchers & Services - Events & Attractions - Movies",
    "sz_feedback": "",
    "date": "2026-05-22"
  },
  {
    "error_type": "Wrongly passed",
    "root_cause": "Agent Misjudgment",
    "user_category": "Food & Beverages - Others",
    "reviewer_category": "",
    "lesson": "Traditional Chinese medicinal herbs can be recommended to: Food & Beverages - Food Staples - Dried Goods - Traditional Herbs",
    "sz_feedback": "",
    "date": "2026-05-22"
  },
  {
    "error_type": "Wrongly deboosted",
    "root_cause": "Agent Misjudgment",
    "user_category": "Health - Sexual Wellness - Sex Toys",
    "reviewer_category": "Health - Sexual Wellness - Others",
    "lesson": "This is considered an SM-related product, and the category list also states that in most cases it can overlap with other related categories. Please evaluate based on the category currently selected by the user. If the category is reasonable, it should not be deboosted.",
    "sz_feedback": "This product is strictly an accessory and does not meet the criteria for a 'sex toy,' as it is neither insertable nor designed for internal use. Could this be reclassified under Health > Sexual Wellness > Others, given that the keyword 'Sexy Eye Mask' falls under that specific category?\"",
    "date": "2026-05-22"
  },
  {
    "error_type": "Wrongly deboosted",
    "root_cause": "Agent Misjudgment",
    "user_category": "Beauty - Hair Care - Hair Treatment",
    "reviewer_category": "Beauty - Hair Care - Hair and Scalp Conditioner",
    "lesson": "Color-protecting hair conditioner can also reasonably be considered a hair treatment product. Therefore, there is no need to specifically take action against the Hair and Scalp Conditioner category.",
    "sz_feedback": "",
    "date": "2026-05-25"
  },
  {
    "error_type": "Wrongly deboosted",
    "root_cause": "Agent Misjudgment",
    "user_category": "Food & Beverages - Beverages - Traditional & Herbal Drinks",
    "reviewer_category": "Food & Beverages - Food Staples - Dried Goods - Traditional Herbs",
    "lesson": "The description mentions that it can be soaked in water, brewed as tea, and consumed as a drink. Therefore, the user’s original category selection is correct.",
    "sz_feedback": "",
    "date": "2026-05-25"
  },
  {
    "error_type": "Wrongly passed",
    "root_cause": "Agent Misjudgment",
    "user_category": "Fashion Accessories - Others",
    "reviewer_category": "",
    "lesson": "Based on the images, it is clear that the products sold by the user are all bag-related items. Therefore, any relevant bag category can be selected for deboosting. For example: Women Bags - Crossbody & Shoulder Bags",
    "sz_feedback": "",
    "date": "2026-05-26"
  },
  {
    "error_type": "Wrongly deboosted",
    "root_cause": "Agent Misjudgment",
    "user_category": "Hobbies & Collections - Toys & Games - Dice, Board & Card Games",
    "reviewer_category": "Hobbies & Collections - Collectible Items - Others",
    "lesson": "These types of protective cases/protective covers can all be placed under product-related categories. Therefore, the user’s original category selection was correct, and there is no need to deboost it. Product Category Compilation > Board games/Instax cameras/game cards/idol photocard sleeves Protective sleeves for board game cards can be placed under the board game category.",
    "sz_feedback": "",
    "date": "2026-05-26"
  },
  {
    "error_type": "Wrongly deboosted",
    "root_cause": "Agent Misjudgment",
    "user_category": "Beauty - Beauty Tools - Makeup Accessories - Others",
    "reviewer_category": "Tickets, Vouchers & Services - Services - Others",
    "lesson": "It is completely unclear what product is being sold. Therefore, any category selected by the user can be considered correct, and there is no need for additional deboosting. SOP:",
    "sz_feedback": "",
    "date": "2026-05-26"
  },
  {
    "error_type": "Wrongly deboosted",
    "root_cause": "Agent Misjudgment",
    "user_category": "Health - Sexual Wellness - Sex Toys",
    "reviewer_category": "Health - Sexual Wellness - Others",
    "lesson": "The category list also states that in most cases it can overlap with other related categories. Please evaluate based on the category currently selected by the user. If the category is reasonable, it should not be deboosted.",
    "sz_feedback": "As agreed in SeaTalk, we will only consider this kind of listing as \"Sex Toys\" if the keywords \"SM + Sex Toy\" is included by the seller as what our Wrong Category Keywords sheet entails. This listing does not have the keywords needed to consider this under Sex Toys therefore; this should be deboosted to Health - Sexual Wellness - Others.",
    "date": "2026-05-27"
  },
  {
    "error_type": "Wrongly passed",
    "root_cause": "Agent Misjudgment",
    "user_category": "Beauty - Skincare - Facial Moisturizer",
    "reviewer_category": "",
    "lesson": "This product should be deboosted to Beauty - Skincare - Toner, as its texture and product type align with this category. The packaging also clearly states \"Moisturizing Toner\", which further supports this classification.",
    "sz_feedback": "",
    "date": "2026-05-28"
  },
  {
    "error_type": "Wrongly passed",
    "root_cause": "Agent Misjudgment",
    "user_category": "Food & Beverages - Snacks - Nuts",
    "reviewer_category": "",
    "lesson": "According to the category kw list, fava beans should be classified under: Food & Beverages - Snacks - Dried Snacks - Others Fava beans are legumes rather than nuts. Although the user mentions \"nuts\" in the title, this is considered a misuse of the term, and the classification should be based on the actual product.",
    "sz_feedback": "",
    "date": "2026-05-29"
  },
  {
    "error_type": "Wrongly passed",
    "root_cause": "Agent Misjudgment",
    "user_category": "Beauty - Men's Care - Bath & Body Care",
    "reviewer_category": "",
    "lesson": "facial cleanser > Should be deboosted to Beauty - Men's Care - Skincare - Facial Cleanser",
    "sz_feedback": "",
    "date": "2026-05-29"
  },
  {
    "error_type": "Wrongly passed",
    "root_cause": "Agent Misjudgment",
    "user_category": "Women Clothes - Pants & Leggings - Pants",
    "reviewer_category": "",
    "lesson": "Denim pants/Jeans should be deboosted and reclassified into the specific \"Women Clothes - Jeans\" category.",
    "sz_feedback": "",
    "date": "2026-05-29"
  },
  {
    "error_type": "Wrongly passed",
    "root_cause": "Agent Misjudgment",
    "user_category": "Home & Living - Kitchenware - Spatulas & Cooking Tweezers",
    "reviewer_category": "",
    "lesson": "\"Pressure Spray Bottle / Household Cleaning / Refillable Container\" is not a Spatula or Cooking Tweezers product. Based on the product images and intended use, categories related to Home & Living or Beauty may be considered. At a broader level, it is recommended to classify it under: Home & Living - Home Care Supplies - Others.",
    "sz_feedback": "",
    "date": "2026-06-01"
  },
  {
    "error_type": "Wrongly passed",
    "root_cause": "Agent Misjudgment",
    "user_category": "Mom & Baby - Toys - Sports & Outdoor Play - Inflatables & Slides",
    "reviewer_category": "",
    "lesson": "Trampolines do not belong to the Inflatables & Slides category. They can be deboosted and classified under either: Mom & Baby - Toys - Sports & Outdoor Play - Sports Toys. or Mom & Baby - Toys - Sports & Outdoor Play - Others",
    "sz_feedback": "",
    "date": "2026-06-01"
  },
  {
    "error_type": "Wrongly passed",
    "root_cause": "Agent Misjudgment",
    "user_category": "Men Clothes - Jeans",
    "reviewer_category": "",
    "lesson": "The images and title both indicate 270 tablets of Vitamin B Complex (B-group vitamins). Therefore, it should be deboosted to:",
    "sz_feedback": "",
    "date": "2026-06-02"
  },
  {
    "error_type": "Wrongly passed",
    "root_cause": "Agent Misjudgment",
    "user_category": "Women Clothes - Tops - T-shirts",
    "reviewer_category": "",
    "lesson": "The title describes the item as a shirt, and its design also matches a shirt style. Since it has a button-down front and a collar, it should be deboosted to the Women Clothes - Tops - Shirts & Blouses category.",
    "sz_feedback": "",
    "date": "2026-06-05"
  },
  {
    "error_type": "Wrongly passed",
    "root_cause": "Agent Misjudgment",
    "user_category": "Home & Living - Kitchenware - Others",
    "reviewer_category": "",
    "lesson": "Food sealing machines have a clear category and should be deboosted to Home & Living - Kitchenware - Sealers.",
    "sz_feedback": "",
    "date": "2026-06-05"
  },
  {
    "error_type": "Wrongly passed",
    "root_cause": "Agent Misjudgment",
    "user_category": "Beauty - Hair Care - Hair Styling",
    "reviewer_category": "",
    "lesson": "\"\"Hair Care\"\" is generally used for hair care and shampoo-related products. Since this item is a heat-resistant mat, it is more of a tool rather than a hair care product. It can be deboosted to Beauty - Beauty Tools - Hair Tools - Others.",
    "sz_feedback": "",
    "date": "2026-06-08"
  },
  {
    "error_type": "Wrongly passed",
    "root_cause": "Agent Misjudgment",
    "user_category": "Beauty - Skincare - Others",
    "reviewer_category": "",
    "lesson": "The product is a skincare set consisting of day cream, night cream, whitening cream, and facial care products. These items are all considered facial moisturizers. Therefore, it can be deboosted to Beauty - Skincare - Facial Moisturizer.",
    "sz_feedback": "",
    "date": "2026-06-09"
  },
  {
    "error_type": "Wrongly passed",
    "root_cause": "Agent Misjudgment",
    "user_category": "Hobbies & Collections - Toys & Games - Others",
    "reviewer_category": "",
    "lesson": "The product has a more specific category for remote control toys. It can be deboosted to Hobbies & Collections - Toys & Games - Remote Control Toys & Accessories.",
    "sz_feedback": "",
    "date": "2026-06-12"
  },
  {
    "error_type": "Wrongly passed",
    "root_cause": "Agent Misjudgment",
    "user_category": "Hobbies & Collections - Toys & Games - Others",
    "reviewer_category": "",
    "lesson": "The products are not toys or games. Since they are Dragon Quest merchandise, they can be deboosted to either Hobbies & Collections - Collectible Items - Anime & Manga Collectibles or Hobbies & Collections - Collectible Items - Others.",
    "sz_feedback": "",
    "date": "2026-06-12"
  },
  {
    "error_type": "Wrongly passed",
    "root_cause": "Agent Misjudgment",
    "user_category": "Food & Beverages - Snacks - Dried Snacks - Others",
    "reviewer_category": "",
    "lesson": "Nougat should be deboosted to Food & Beverages - Bakery - Pastry",
    "sz_feedback": "",
    "date": "2026-06-15"
  },
  {
    "error_type": "Wrongly passed",
    "root_cause": "Agent Misjudgment",
    "user_category": "Health - Personal Care - Oral Care - Mouth Wash",
    "reviewer_category": "",
    "lesson": "This product is not mouthwash. It is an oral mint tablet and should be deboosted to BE - Health - Personal Care - Oral Care - Others.",
    "sz_feedback": "",
    "date": "2026-06-15"
  },
  {
    "error_type": "Wrongly deboosted",
    "root_cause": "Agent Misjudgment",
    "user_category": "Books & Magazines - Others",
    "reviewer_category": "Books & Magazines - E-Books",
    "lesson": "This product is an e-book reader. According to the keyword category list, it can be classified under Books - Others. Therefore, the user's original category is correct and should not be deboosted.",
    "sz_feedback": "",
    "date": "2026-06-17"
  },
  {
    "error_type": "Wrongly passed",
    "root_cause": "Agent Misjudgment",
    "user_category": "Health - Sexual Wellness - Others",
    "reviewer_category": "",
    "lesson": "Clearly defined as a masturbator, it can still be deboosted into a sex toy. Masturbators > Health - Sexual Wellness - Sex Toys",
    "sz_feedback": "",
    "date": "2026-06-17"
  },
  {
    "error_type": "Wrongly deboosted",
    "root_cause": "Agent Misjudgment",
    "user_category": "Hobbies & Collections - Toys & Games - Others",
    "reviewer_category": "Mom & Baby - Toys - Educational Toys - Arts & Crafts",
    "lesson": "The content shows that DIY fluid bear painting is not limited to mothers and babies, but is also suitable for couples and group handcrafting. If it leans toward adult interactive products, the user's original category is appropriate, and there is no need to deboost it to 'Mom & Baby'.",
    "sz_feedback": "",
    "date": "2026-06-18"
  },
  {
    "error_type": "Wrongly passed",
    "root_cause": "Agent Misjudgment",
    "user_category": "Beauty - Beauty Tools - Makeup Accessories - Eyelash Curlers",
    "reviewer_category": "",
    "lesson": "This item isn't an eyelash curler; it's a tool for perming your own eyelashes. Please deboost it to Beauty - Beauty Tools - Others.",
    "sz_feedback": "",
    "date": "2026-06-18"
  },
  {
    "error_type": "Wrongly passed",
    "root_cause": "Agent Misjudgment",
    "user_category": "Home & Living - Tools & Home Improvement - Others",
    "reviewer_category": "",
    "lesson": "Judging by the title and pictures, this item needs to be deboosted to ' Home & Living - Tools & Home Improvement - Tools - Drills, Screwdrivers & Accessories'.",
    "sz_feedback": "",
    "date": "2026-06-18"
  },
  {
    "error_type": "Wrongly passed",
    "root_cause": "Agent Misjudgment",
    "user_category": "Women Shoes - Flats - Slip Ons, Mary Janes & Mules",
    "reviewer_category": "",
    "lesson": "This shoe style is not Slip Ons, Mary Janes & Mules. It should be deboosted to Women Shoes - Sneakers.",
    "sz_feedback": "",
    "date": "2026-06-23"
  },
  {
    "error_type": "Wrongly deboosted",
    "root_cause": "Agent Misjudgment",
    "user_category": "Hobbies & Collections - Collectible Items - Others",
    "reviewer_category": "Mom & Baby - Toys - Block Toys",
    "lesson": "According to the keyword category list, LEGO toys/Block Toys are not limited to the Mom & Baby category. The user's original category was already correct and did not need to be deboosted. Keyword: LEGO bricks (not limited to LEGO)",
    "sz_feedback": "",
    "date": "2026-06-23"
  },
  {
    "error_type": "Wrongly deboosted",
    "root_cause": "Agent Misjudgment",
    "user_category": "Mom & Baby - Toys - Educational Toys - Shape Sorters",
    "reviewer_category": "Mom & Baby - Toys - Educational Toys - Puzzles",
    "lesson": "This product is a maze game where a small steel ball goes through a maze. It is not a puzzle game. You can deboost it to: Mom & Baby - Toys - Educational Toys - Others.",
    "sz_feedback": "Hi team. Can we consider this item under this category? The title states \"3D Maze Ball 360-Degree Rotating Gravity Track Puzzle Ball,\" and the keyword \"Puzzle\" suggests it may belong to the puzzle category. I also checked with Gemini, and it identified the item as a 3D puzzle. If not, could you please share your insights? Thank you.",
    "date": "2026-06-25"
  },
  {
    "error_type": "Wrongly passed",
    "root_cause": "Agent Misjudgment",
    "user_category": "Hobbies & Collections - Collectible Items - Anime & Manga Collectibles",
    "reviewer_category": "",
    "lesson": "This Beyblade product has nothing to do with anime. It can be deboosted to the spinning tops category: Hobbies & Collections - Toys & Games - Spinning Tops.",
    "sz_feedback": "Hi team, this is a collectible Beyblade part designed for a specific Beyblade X model. Collectors mainly use it to complete or recreate nostalgic Beyblades featured in the anime.",
    "date": "2026-06-25"
  },
  {
    "error_type": "Wrongly deboosted",
    "root_cause": "Agent Misjudgment",
    "user_category": "Home Appliances - Small Household Appliances - Vacuum Cleaners & Floor Care Appliances",
    "reviewer_category": "Home & Living - Home Care Supplies - Mops",
    "lesson": "The user's original category is already correct. This accessory for the robot vacuum and mop fits under Floor Care Appliances, so it should not be deboosted.",
    "sz_feedback": "",
    "date": "2026-06-25"
  },
  {
    "error_type": "Wrongly passed",
    "root_cause": "Agent Misjudgment",
    "user_category": "Beauty - Skincare - Facial Serum & Essence",
    "reviewer_category": "",
    "lesson": "This is a health supplement for drinking, and the description clearly states it is for oral consumption (\"口服\"). It is not a serum for skin application. Therefore, it should be deboosted to: Health - Food Supplement - Others or Health - Food Supplement - Well Being",
    "sz_feedback": "",
    "date": "2026-06-26"
  },
  {
    "error_type": "Wrongly passed",
    "root_cause": "Agent Misjudgment",
    "user_category": "Beauty - Bath & Body Care - Others",
    "reviewer_category": "",
    "lesson": "According to the description, this product is a deodorant cream and has a clear category. It should be deboosted to: Beauty - Bath & Body Care - Body Deodorants",
    "sz_feedback": "",
    "date": "2026-06-26"
  },
  {
    "error_type": "Wrongly passed",
    "root_cause": "Agent Misjudgment",
    "user_category": "Fashion Accessories - Others",
    "reviewer_category": "",
    "lesson": "The product is clearly a phone lanyard. It can be deboosted to: Mobile & Gadgets - Accessories - Phone Straps & Keychains",
    "sz_feedback": "Hi team, just wanted to check if we can consider this item as a pacifier clip since it has a similar cord-and-metal-clip construction. If not, would you mind sharing the reason? It would really help with coaching. Thanks.",
    "date": "2026-06-26"
  },
  {
    "error_type": "Wrongly passed",
    "root_cause": "Agent Misjudgment",
    "user_category": "Women Clothes - Tops - T-shirts",
    "reviewer_category": "",
    "lesson": "It is a shirt. It should be deboosted to: Women Clothes - Tops - Shirts & Blouses",
    "sz_feedback": "",
    "date": "2026-06-26"
  },
  {
    "error_type": "Wrongly passed",
    "root_cause": "Agent Misjudgment",
    "user_category": "Home & Living - Tools & Home Improvement - Others",
    "reviewer_category": "",
    "lesson": "This task is a major error. It should be deboosted to: Women Shoes - Flats - Ballet Flats",
    "sz_feedback": "",
    "date": "2026-06-26"
  },
  {
    "error_type": "Wrongly passed",
    "root_cause": "Agent Misjudgment",
    "user_category": "Food & Beverages - Snacks - Others",
    "reviewer_category": "",
    "lesson": "This product mentions codfish is actually a fish paste product. Therefore, it can be deboosted to: Food & Beverages - Snacks - Dried Snacks - Dried Seafood Snacks",
    "sz_feedback": "",
    "date": "2026-06-26"
  },
  {
    "error_type": "Wrongly deboosted",
    "root_cause": "Agent Misjudgment",
    "user_category": "Beauty - Skincare - Facial Serum & Essence",
    "reviewer_category": "Beauty - Skincare - Toner",
    "lesson": "The user's selection of the \"Serum/Essence\" category for BIO Gold Rose Gold Water is correct. Since it is applied after toner, it is designed to deliver the benefits of both a toner and a serum/essence simultaneously. Therefore, it is a perfect match and should not be deboosted.",
    "sz_feedback": "",
    "date": "2026-06-30"
  },
  {
    "error_type": "Wrongly passed",
    "root_cause": "Agent Misjudgment",
    "user_category": "Food & Beverages - Cooking Essentials - Seasonings & Condiments - Sauce",
    "reviewer_category": "",
    "lesson": "Curry cubes should be deboosted to Food & Beverages - Cooking Essentials - Cooking Paste & Kit.",
    "sz_feedback": "",
    "date": "2026-06-30"
  },
  {
    "error_type": "Wrongly passed",
    "root_cause": "Agent Misjudgment",
    "user_category": "Food & Beverages - Baking Needs - Baking decoration",
    "reviewer_category": "",
    "lesson": "Baking decoration should only contain edible baking decorations. Since this product is non-edible, it can be deboosted to Home & Living - Kitchenware - Bakewares & Decorations or Stationery - Gift & Wrapping - Ribbons.",
    "sz_feedback": "",
    "date": "2026-07-01"
  },
  {
    "error_type": "Wrongly passed",
    "root_cause": "Agent Misjudgment",
    "user_category": "Women Bags - Waist Bags & Chest Bags",
    "reviewer_category": "",
    "lesson": "This bag style is a shoulder bag and should be deboosted to Women Bags - Crossbody & Shoulder Bags.",
    "sz_feedback": "",
    "date": "2026-07-01"
  },
  {
    "error_type": "Wrongly passed",
    "root_cause": "Agent Misjudgment",
    "user_category": "Food & Beverages - Fresh & Frozen Food - Frozen Processed Food",
    "reviewer_category": "",
    "lesson": "According to the SOP, if there is a clear category, frozen food will not be passed. Cuttlefish paste is a seafood product, so it can be deboosted to \"\"Food & Beverages - Fresh & Frozen Food - Processed Meat & Seafood.",
    "sz_feedback": "",
    "date": "2026-07-03"
  },
  {
    "error_type": "Wrongly passed",
    "root_cause": "Agent Misjudgment",
    "user_category": "Beauty - Bath & Body Care - Body Cream, Lotion & Butter",
    "reviewer_category": "",
    "lesson": "There is no Body Cream, Lotion & Butter in this set. Please deboost any of the contained categories, such as shampoo or 'Beauty - Beauty Sets & Packages'.",
    "sz_feedback": "",
    "date": "2026-07-06"
  },
  {
    "error_type": "Wrongly passed",
    "root_cause": "Agent Misjudgment",
    "user_category": "Food & Beverages - Snacks - Biscuits, Cookies & Wafers",
    "reviewer_category": "",
    "lesson": "This product consists of gummies coated in chocolate. Please deboost it to either the chocolate or candy category; it is not suitable for the biscuit/cookie category.",
    "sz_feedback": "",
    "date": "2026-07-06"
  },
  {
    "error_type": "Wrongly passed",
    "root_cause": "Agent Misjudgment",
    "user_category": "Food & Beverages - Beverages - Powdered Drink Mixes",
    "reviewer_category": "",
    "lesson": "The products are clearly all coffee. They should be deboosted to the coffee category, which also includes instant coffee.",
    "sz_feedback": "",
    "date": "2026-07-06"
  },
  {
    "error_type": "Wrongly deboosted",
    "root_cause": "Agent Misjudgment",
    "user_category": "Food & Beverages - Fresh & Frozen Food - Meat - Lamb",
    "reviewer_category": "Food & Beverages - Fresh & Frozen Food - Meat - Beef",
    "lesson": "This is lamb tripe. The user's selection of 'Food",
    "sz_feedback": "",
    "date": "2026-07-07"
  },
  {
    "error_type": "Wrongly deboosted",
    "root_cause": "Agent Misjudgment",
    "user_category": "Health - Sexual Wellness - Others",
    "reviewer_category": "Fashion Accessories - Additional Accessories - Tattoos",
    "lesson": "Although this is a tattoo sticker, the user's title specifies it as an adult/erotic novelty item due to the sexually explicit design (Ingen/淫紋). Therefore, the user's original category is a PASS and should not be deboosted.",
    "sz_feedback": "",
    "date": "2026-07-07"
  },
  {
    "error_type": "Wrongly deboosted",
    "root_cause": "Agent Misjudgment",
    "user_category": "Food & Beverages - Snacks - Sweets & Candies",
    "reviewer_category": "Food & Beverages - Dairy & Eggs - Others",
    "lesson": "The user sells a wide variety of products, which also includes sweets and candies. Therefore, the original category is a PASS and does not need to be deboosted.",
    "sz_feedback": "",
    "date": "2026-07-07"
  },
  {
    "error_type": "Wrongly passed",
    "root_cause": "Agent Misjudgment",
    "user_category": "Food & Beverages - Snacks - Sweets & Candies",
    "reviewer_category": "",
    "lesson": "The product is a Caramel Pie, not Sweets & Candies. It is currently placed in the wrong category. We will deboost this product due to category misplacement. Please reclassify or loosen it to the correct categories below: Primary Category: Food & Beverages > Bakery > Cakes & Pies Alternative Category: Food & Beverages > Bakery > Pastry",
    "sz_feedback": "",
    "date": "2026-07-08"
  },
  {
    "error_type": "Wrongly passed",
    "root_cause": "Agent Misjudgment",
    "user_category": "Health - Food Supplement - Weight Management",
    "reviewer_category": "",
    "lesson": "The seller miscategorized this item under Weight Management. This product is a protein powder, which is not related to weight loss or weight management.It should be listed under the correct category: Health - Food Supplement - Fitness.",
    "sz_feedback": "",
    "date": "2026-07-08"
  },
  {
    "error_type": "Wrongly deboosted",
    "root_cause": "Agent Misjudgment",
    "user_category": "Food & Beverages - Convenience / Ready-to-eat - Others",
    "reviewer_category": "Food & Beverages - Cooking Essentials - Stock, Gravy & Instant Soup",
    "lesson": "The user's original category is correct and can be passed. Keyword list: Instant Soup Packets / Concentrated Soup Packets",
    "sz_feedback": "",
    "date": "2026-07-10"
  },
  {
    "error_type": "Wrongly passed",
    "root_cause": "Agent Misjudgment",
    "user_category": "Food & Beverages - Others",
    "reviewer_category": "",
    "lesson": "Peanut soft candy should be deboosted to Food & Beverages - Snacks - Sweets & Candies or Food & Beverages - Bakery - Pastry.",
    "sz_feedback": "",
    "date": "2026-07-10"
  },
  {
    "error_type": "Wrongly passed",
    "root_cause": "Agent Misjudgment",
    "user_category": "Food & Beverages - Snacks - Sweets & Candies",
    "reviewer_category": "",
    "lesson": "This product is not candy. It is made with marshmallows wrapped around biscuits and other ingredients, so it can be deboosted to Food & Beverages - Bakery - Pastry.",
    "sz_feedback": "",
    "date": "2026-07-14"
  },
  {
    "error_type": "Wrongly deboosted",
    "root_cause": "Agent Misjudgment",
    "user_category": "Food & Beverages - Cooking Essentials - Seasonings & Condiments - Dressing",
    "reviewer_category": "Food & Beverages - Cooking Essentials - Seasonings & Condiments - Sauce",
    "lesson": "The seller listed the item in the correct category (Dressing). The product title indicates it is used for mixing with noodles. There is no need to deboost the item to \"Sauces\". Please retain the original category.",
    "sz_feedback": "",
    "date": "2026-07-16"
  },
  {
    "error_type": "Wrongly passed",
    "root_cause": "Agent Misjudgment",
    "user_category": "Food & Beverages - Snacks - Sweets & Candies",
    "reviewer_category": "",
    "lesson": "Please note that this product is a sandwich cookie, so it should be flagged as 'Cookies/Biscuits'. You can also see 'Cookie' written on the packaging.",
    "sz_feedback": "",
    "date": "2026-07-20"
  },
  {
    "error_type": "Wrongly passed",
    "root_cause": "Agent Misjudgment",
    "user_category": "Beauty - Skincare - Eye Treatment - Eye Cream",
    "reviewer_category": "",
    "lesson": "This item is a battery for eye cream devices. Since the actual product being sold is only the battery (without the eye cream), it should be deboosted to 'Home Appliances - Batteries'.",
    "sz_feedback": "",
    "date": "2026-07-20"
  },
  {
    "error_type": "Wrongly passed",
    "root_cause": "Agent Misjudgment",
    "user_category": "Food & Beverages - Snacks - Dried Snacks - Others",
    "reviewer_category": "",
    "lesson": "This item is dried apple and should be deboosted under the category: Food & Beverages - Snacks - Dried Snacks - Dried Fruits.",
    "sz_feedback": "",
    "date": "2026-07-22"
  },
  {
    "error_type": "Wrongly deboosted",
    "root_cause": "Agent Misjudgment",
    "user_category": "Food & Beverages - Convenience / Ready-to-eat - Others",
    "reviewer_category": "Food & Beverages - Snacks - Chocolate",
    "lesson": "Bread should be deboosted to Food & Beverages - Bakery - Breads. The product is primarily bread rather than chocolate itself.",
    "sz_feedback": "Hi Team, good day. We understand that the correct category is Food & Beverages – Bakery – Breads. However, during the agent's QC review, the Bread category was unavailable because the seller type is CB Normal. The agent selected the closest available category based on the packaging and the \"Chocolate\" keyword in the description. May we kindly ask if this case can be considered? Please see the attached proof showing that the Bread category was not available.",
    "date": "2026-07-23"
  },
  {
    "error_type": "Wrongly passed",
    "root_cause": "Agent Misjudgment",
    "user_category": "Food & Beverages - Cooking Essentials - Seasonings & Condiments - Salt",
    "reviewer_category": "",
    "lesson": "Salted kelp/Salted kombu is not salt. The main product is kelp/kombu, so it can be deboosted to Food & Beverages - Food Staples - Dried Goods - Others or Food & Beverages - Cooking Essentials - Seasonings & Condiments - Others.",
    "sz_feedback": "",
    "date": "2026-07-24"
  },
  {
    "error_type": "Wrongly passed",
    "root_cause": "Agent Misjudgment",
    "user_category": "Beauty - Skincare - Toner",
    "reviewer_category": "",
    "lesson": "The product set consists of Facial Cleanser + Makeup Remover Wipes and does not include Toner. It should be deboosted to either Facial Cleanser or Makeup Removers.",
    "sz_feedback": "Hi Team, good day. Could we please double-check if our observation is correct? Upon taking a closer look at the first image, the product box in the middle states \"1025 DOKDO Toner,\" and since the product list also includes a toner variant, we believe this is why no deboosting was applied. If our understanding is incorrect, could you please share a few insights so we can better align our future reviews? Thank you.",
    "date": "2026-07-27"
  },
  {
    "error_type": "Wrongly deboosted",
    "root_cause": "Agent Misjudgment",
    "user_category": "Food & Beverages - Snacks - Biscuits, Cookies & Wafers",
    "reviewer_category": "Food & Beverages - Bakery - Pastry",
    "lesson": "This item is a biscuit/cookie snack. Please keep it under BE - Food & Beverages - Snacks - Biscuits, Cookies & Wafers. Do not deboost this product to Food & Beverages - Bakery - Pastry.",
    "sz_feedback": "",
    "date": "2026-07-30"
  },
  {
    "error_type": "Wrongly passed",
    "root_cause": "Agent Misjudgment",
    "user_category": "Food & Beverages - Snacks - Nuts",
    "reviewer_category": "",
    "lesson": "Broad beans are not nuts, so they should be deboosted to BE - Food & Beverages - Fresh & Frozen Food - Vegetables - Peas, Beans, Nuts & Corn & Beverages - Snacks - Dried Snacks - Others. kw:Broad beans",
    "sz_feedback": "",
    "date": "2026-08-03"
  },
  {
    "error_type": "Wrongly deboosted",
    "root_cause": "Agent Misjudgment",
    "user_category": "Food & Beverages - Snacks - Chocolate",
    "reviewer_category": "Food & Beverages - Baking Needs - Others",
    "lesson": "Although \"Couverture chocolate\" is a professional baking term—meaning it has high cocoa butter content and is ideal for melting—this does not restrict it from being consumed or sold as a chocolate snack. In fact, high-quality chocolate buttons are frequently sold on e-commerce platforms as healthy dark chocolate snacks. Therefore, the user's original chocolate category can be PASSED.",
    "sz_feedback": "",
    "date": "2026-08-03"
  },
  {
    "error_type": "Wrongly passed",
    "root_cause": "Agent Misjudgment",
    "user_category": "Food & Beverages - Convenience / Ready-to-eat - Instant Noodles",
    "reviewer_category": "",
    "lesson": "Plain noodles should be deboosted to Food & Beverages - Food Staples - Noodles. Instant Noodles refers specifically to products that include seasonings or flavor packets meant to be mixed in.",
    "sz_feedback": "",
    "date": "2026-08-04"
  },
  {
    "error_type": "Wrongly passed",
    "root_cause": "Agent Misjudgment",
    "user_category": "Beauty - Beauty Sets & Packages",
    "reviewer_category": "",
    "lesson": "All of these listings are for individual body wash products and do not contain any bundles or sets. Therefore, they should be deboosted to Beauty - Bath & Body Care - Body Wash & Soap.",
    "sz_feedback": "",
    "date": "2026-08-04"
  },
  {
    "error_type": "Wrongly passed",
    "root_cause": "Agent Misjudgment",
    "user_category": "Food & Beverages - Snacks - Biscuits, Cookies & Wafers",
    "reviewer_category": "",
    "lesson": "This product is a chocolate pie, not a cookie or biscuit. Please deboost it to Food & Beverages - Bakery - Cakes & Pies.",
    "sz_feedback": "",
    "date": "2026-08-06"
  },
  {
    "error_type": "Wrongly passed",
    "root_cause": "Agent Misjudgment",
    "user_category": "Beauty - Skincare - Facial Moisturizer",
    "reviewer_category": "",
    "lesson": "The listing features an ampoule and eye cream skincare product, but it is currently miscategorized. The product should be listed under either \"BE - Beauty - Skincare - Facial Serum & Essence\" or \"BE - Beauty - Skincare - Eye Treatment - Eye Cream\" based on its primary function.",
    "sz_feedback": "",
    "date": "2026-08-07"
  },
  {
    "error_type": "Wrongly passed",
    "root_cause": "Agent Misjudgment",
    "user_category": "Men Bags - Others",
    "reviewer_category": "",
    "lesson": "The premise for automatically PASS live-stream products without conditions is that the product must be completely unidentifiable. In this case, the title clearly identifies the product as “Speedy Solution Kombucha”, so the listing should be deboosted to a relevant Kombucha category. Food & Beverages - Beverages - Juice & Juice Vinegar\" or \"Food & Beverages - Beverages - Tea & Tea Bags\" (or \"Powdered Drink Mixes\" for powder form).",
    "sz_feedback": "Hi Team, could you please help us check our understanding on this case? When reviewing the listing, we noticed that although “tea” is included in the product title, the product description and images do not provide enough information to confirm what the actual product being sold or displayed is, which is why QC tagged it as Pass since the product itself remains unidentifiable. Additionally, when we translated the product title, we could not clearly determine whether the product falls under “Speedy Solution Kombucha.” Could we please consider this interpretation as valid? We would really appreciate your thoughts and guidance on this. Thank you.",
    "date": "2026-08-07"
  },
  {
    "error_type": "Wrongly passed",
    "root_cause": "Agent Misjudgment",
    "user_category": "Food & Beverages - Breakfast Cereals & Spread - Others",
    "reviewer_category": "",
    "lesson": "The product is oatmeal, which has a specific dedicated category. It should not be listed under \"Others.\" Please deboost this item to Food & Beverages > Breakfast Cereals & Spread > Cereal, Granola & Oats.",
    "sz_feedback": "",
    "date": "2026-08-10"
  },
  {
    "error_type": "Wrongly passed",
    "root_cause": "Agent Misjudgment",
    "user_category": "Food & Beverages - Fresh & Frozen Food - Frozen Processed Food",
    "reviewer_category": "",
    "lesson": "If there is a suitable category available, we should not relax the rule for frozen food. Since this is a microwaveable ready-to-eat pasta, it can be deboosted to Food & Beverages - Convenience / Ready-to-eat - Cooked Food.",
    "sz_feedback": "",
    "date": "2026-08-12"
  },
  {
    "error_type": "Wrongly passed",
    "root_cause": "Agent Misjudgment",
    "user_category": "Mobile & Gadgets - Accessories - Screen Protectors",
    "reviewer_category": "",
    "lesson": "The iPad Air is a tablet, so it should be deboosted to Mobile & Gadgets - Accessories - Cases, Covers, & Skins - Tablet Cases, Covers, & Skins.",
    "sz_feedback": "Hi Team, good day. Just checking if our understanding of this item is aligned. Upon checking, the user selected Mobile & Gadgets – Accessories – Screen Protectors. Based on the English KW list, the term “Screen Protector” seems to be generalized and can also refer to screen protectors for tablets, rather than being limited to a specific device or gadget. Because of this, we believe the user’s selected category could also be considered valid. May we kindly ask for your reconsideration on this item? If there are any insights from your end, we’d also appreciate them for our future alignment. Thank you.",
    "date": "2026-08-17"
  },
  {
    "error_type": "Wrongly passed",
    "root_cause": "Agent Misjudgment",
    "user_category": "Food & Beverages - Bakery - Pastry",
    "reviewer_category": "",
    "lesson": "Cake should be deboosted to Food & Beverages - Bakery - Cakes & Pies.",
    "sz_feedback": "",
    "date": "2026-08-21"
  },
  {
    "error_type": "Wrongly deboosted",
    "root_cause": "Agent Misjudgment",
    "user_category": "Spare Parts and Accessories for Vehicles - Internal Accessories for Automobiles - Car Mat",
    "reviewer_category": "Spare Parts and Accessories for Vehicles - Internal Accessories for Automobiles - Others",
    "lesson": "The user's original category is already correct, so no deboost is needed. KW: Trunk Mat",
    "sz_feedback": "",
    "date": "2026-08-24"
  },
  {
    "error_type": "Wrongly passed",
    "root_cause": "Agent Misjudgment",
    "user_category": "Food & Beverages - Bakery - Pastry",
    "reviewer_category": "",
    "lesson": "Biscuits should be deboosted to Food & Beverages - Snacks - Biscuits, Cookies & Wafers.",
    "sz_feedback": "",
    "date": "2026-08-25"
  },
  {
    "error_type": "Wrongly deboosted",
    "root_cause": "Agent Misjudgment",
    "user_category": "Hobbies & Collections - Toys & Games - Others",
    "reviewer_category": "Hobbies & Collections - Collectible Items - Others",
    "lesson": "This product does not have a clearly more suitable category. The user's original selection, *Hobbies & Collections - Toys & Games - Others*, can be pass, and there is no need to deboost it to *Hobbies & Collections - Collectible Items - Others*.",
    "sz_feedback": "",
    "date": "2026-08-27"
  },
  {
    "error_type": "Wrongly passed",
    "root_cause": "Agent Misjudgment",
    "user_category": "Food & Beverages - Cooking Essentials - Seasonings & Condiments - Herbs & Spices",
    "reviewer_category": "",
    "lesson": "The item is salt, so it should be deboosted to the Food & Beverages - Cooking Essentials - Seasonings & Condiments - Salt category.",
    "sz_feedback": "Hi Team, can we check if this is a valid observation for reconsidering the QC’s judgment? Based on the 1st image, we believe the approval under Herbs & Spices was correct when evaluating the user-selected category against the physical product’s primary identity. The main Japanese label clearly identifies the product as 「オニオンスパイス」 (Onion Spice), and the packaging shows that it is a multi-ingredient blend containing Awaji onion, black pepper, sesame seeds, and mixed spices (多種食材調和 搭配芝麻、香辛料等). Since the task is to validate whether the user-selected category is appropriate for the actual product, we believe passing Herbs & Spices is justified. The product is presented as an all-purpose seasoning/spice blend (萬用調味鹽) rather than regular plain salt. If our understanding or judgment does not fit the item, could you please share some insights on what the appropriate judgment should be and how we should assess similar cases moving forward?",
    "date": "2026-08-28"
  },
  {
    "error_type": "Wrongly passed",
    "root_cause": "Agent Misjudgment",
    "user_category": "Beauty - Beauty Tools - Makeup Accessories - Makeup Brushes",
    "reviewer_category": "",
    "lesson": "Although the title mentions makeup brushes, the image options show that the product is actually just a powder puff. Therefore, it should be deboosted to Beauty - Beauty Tools - Makeup Accessories - Sponges & Applicators.",
    "sz_feedback": "",
    "date": "2026-08-28"
  }
];
