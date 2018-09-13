import React, { Component } from 'react'
import WeeklyPlanController from '../controllers/WeeklyPlanController'
import WeeklyPlanLayout from '../components/weekly-plan/WeeklyPlanLayout'


class WeeklyPlanContainer extends Component {
  state = {
    weeklyPlan: null,
    weeklyPlan2: {
      "monday": {
        "breakfast": {
          "imageUrlsBySize": {
            "90": "https://lh3.googleusercontent.com/XP_3J7OuQKQfpRcPyQFGTEMRrbgy2mxrFpZJ-NgEU144hRuwy3P0nh1aA8xmTxJFeODwekqTMKCHMJRYTSPpMnU=s90-c"
          },
          "sourceDisplayName": "Averie Cooks",
          "ingredients": [
            "large eggs",
            "milk",
            "kosher salt",
            "freshly ground black pepper",
            "shredded cheddar cheese",
            "cooked ham",
            "green onions"
          ],
          "id": "Baked-Ham-and-Cheese-Omelet-2474246",
          "smallImageUrls": [
            "https://lh3.googleusercontent.com/Q__Uk4_rpBRzXa1rQQWhOdAlz6mcMt4DRuIWu_cTpC4RT6M4JvqUM-yrOa97Pa-ktvLUGUzUZxOn3VPKenJE=s90"
          ],
          "recipeName": "Baked Ham and Cheese Omelet",
          "totalTimeInSeconds": 3900,
          "attributes": {
            "course": [
              "Breakfast and Brunch"
            ]
          },
          "flavors": {
            "piquant": 0,
            "meaty": 1,
            "bitter": 1,
            "sweet": 1,
            "sour": 1,
            "salty": 1
          },
          "rating": 4
        },
        "lunch": {
          "imageUrlsBySize": {
            "90": "https://lh3.googleusercontent.com/14oSq8ICFYF2DsJuCd9O_P8Ppq1e_zkNWbpznvg6HtiuaJT8pI8zzEsTvL2EXi9bnYA3dPs63xXKAMx6uJXuvg=s90-c"
          },
          "sourceDisplayName": "Recipe Girl",
          "ingredients": [
            "cauliflower",
            "large eggs",
            "chopped fresh cilantro",
            "lime",
            "salt",
            "pepper"
          ],
          "id": "Cauliflower-Tortillas-2353985",
          "smallImageUrls": [
            "https://lh3.googleusercontent.com/Bq05f7Wh7GNKkXpIy7-ltLuyAqw1eO032Cv-DQ1VQlM1xpaNJV3tYxgvtzt_QRsZLCGzT21XrlUezBx8aZpC=s90"
          ],
          "recipeName": "Cauliflower Tortillas",
          "totalTimeInSeconds": 3000,
          "attributes": {
            "course": [
              "Lunch"
            ]
          },
          "flavors": {
            "piquant": 0,
            "meaty": 0.16666666666666666,
            "bitter": 0.3333333333333333,
            "sweet": 0.16666666666666666,
            "sour": 0.8333333333333334,
            "salty": 0.16666666666666666
          },
          "rating": 4
        },
        "dinner": {
          "imageUrlsBySize": {
            "90": "https://lh3.googleusercontent.com/TBKg7fkcglTUprPbZWwuzPHavWkhhuoQxNhAEenj9BhJ2TZpkbPOiECR2CnzV06cfEyJFG6UffbeErHDlTp_=s90-c"
          },
          "sourceDisplayName": "Real Food with Dana",
          "ingredients": [
            "spinach",
            "buffalo",
            "cauliflower",
            "cucumber salad",
            "beef",
            "avocado",
            "seasoning"
          ],
          "id": "Mediterranean-Power-Bowl-_Whole30_-2477970",
          "smallImageUrls": [
            "https://lh3.googleusercontent.com/8njTRSO7sQGLViABv_-b7wFpDr3WcHnHjjpRZ5dQQwBmD7L0AAZB04EOU_nMtJ5VLqs1xfc3FTmDbR53MAJIbw=s90"
          ],
          "recipeName": "Mediterranean Power Bowl (Whole30)",
          "totalTimeInSeconds": 1020,
          "attributes": {
            "course": [
              "Main Dishes"
            ]
          },
          "flavors": null,
          "rating": 4
        },
        "side": {
          "imageUrlsBySize": {
            "90": "https://lh3.googleusercontent.com/m2CqGKj9SPboZJYYuktgtNPvYk0LDbtCCT1DAmALvdW8lBd6QQQQ_N6_0noUIdnPsAqyhbq4jIT5dc_s83to=s90-c"
          },
          "sourceDisplayName": "Chocolate Slopes",
          "ingredients": [
            "carrots",
            "olive oil spray",
            "fresh parsley",
            "fresh rosemary",
            "fresh thyme leaves",
            "salt",
            "pepper"
          ],
          "id": "Roasted-Carrots-With-Fresh-Herbs-2466943",
          "smallImageUrls": [
            "https://lh3.googleusercontent.com/dz7vNh_Eaj2MZtYlzsGePH3yLWhhGcFqxZ9yJCYPxNtSXX4eeGLj2CoIDTmWPYTaY5UMVDkxJmta2g6HAD9dxpw=s90"
          ],
          "recipeName": "Roasted Carrots With Fresh Herbs",
          "totalTimeInSeconds": 1800,
          "attributes": {
            "course": [
              "Side Dishes"
            ]
          },
          "flavors": {
            "piquant": 0,
            "meaty": 1,
            "bitter": 1,
            "sweet": 1,
            "sour": 1,
            "salty": 1
          },
          "rating": 4
        },
        "snack": {
          "imageUrlsBySize": {
            "90": "http://lh3.googleusercontent.com/gUqIfGc2qthGH-ktYrIFw2LqN9V9Kec0kS-XLbNSYOVI1oJHXiBGce2MeGXO25XW0pH01c4p-wNQe-q2tXGRHPY=s90-c"
          },
          "sourceDisplayName": "Gal on a Mission",
          "ingredients": [
            "cauliflower florets",
            "garlic powder",
            "salt",
            "pepper",
            "butter",
            "Frank's® RedHot® Hot Sauce"
          ],
          "id": "Healthy-Buffalo-Cauliflower-Bites-1062036",
          "smallImageUrls": [
            "http://lh3.googleusercontent.com/2L4MmlKX9vRvGxl3sozj7HrikJi7z7wmzEQvgNBFpBCVpnuWv9IyqrmA_0MDtjmkLr0ZGhj9PSue0DVDlNEGDeI=s90"
          ],
          "recipeName": "Healthy Buffalo Cauliflower Bites",
          "totalTimeInSeconds": 1800,
          "attributes": {
            "course": [
              "Appetizers",
              "Snacks"
            ]
          },
          "flavors": null,
          "rating": 4
        }
      },
      "tuesday": {
        "breakfast": {
          "imageUrlsBySize": {
            "90": "https://lh3.googleusercontent.com/uWYfhoczG74yJFYhOsvlTec8A6AZhR1Vz1nNNyIVoaed3ImjdpKZdh-1JYLs1tzysnvRkEcpN8BeKPip_CZB5RM=s90-c"
          },
          "sourceDisplayName": "Lisa Eats",
          "ingredients": [
            "avocado",
            "eggs",
            "salt",
            "black pepper",
            "cayenne pepper",
            "bacon bits",
            "green onions"
          ],
          "id": "Avocado-Baked-Eggs-1564295",
          "smallImageUrls": [
            "https://lh3.googleusercontent.com/-3RZBCu4pJ3AxPby8kmss0PMwi1RuiH8WYYzhQseFjbJzUAv6Om3uxy6W3EcLCccnUYbRytJ8pLnCE9n4q3jf-I=s90"
          ],
          "recipeName": "Avocado Baked Eggs",
          "totalTimeInSeconds": 2400,
          "attributes": {
            "course": [
              "Breakfast and Brunch"
            ]
          },
          "flavors": {
            "piquant": 0.8333333333333334,
            "meaty": 0.6666666666666666,
            "bitter": 0.8333333333333334,
            "sweet": 0.16666666666666666,
            "sour": 0.6666666666666666,
            "salty": 0.8333333333333334
          },
          "rating": 4
        },
        "lunch": {
          "imageUrlsBySize": {
            "90": "https://lh3.googleusercontent.com/XKTYUudkXoBTuxoBHQwdnRD28RcGci09Q6CevRnRmh6eWI8w0ByORLhB5oKGwE10kmD_g3Lm040kIFXhwOfimQ=s90-c"
          },
          "sourceDisplayName": "ifoodreal",
          "ingredients": [
            "medium zucchini",
            "parmesan cheese",
            "dried thyme",
            "salt",
            "freshly ground black pepper"
          ],
          "id": "Parmesan-Zucchini-Sticks-2108785",
          "smallImageUrls": [
            "https://lh3.googleusercontent.com/34srJWqv8_XleO3Sj95Mp9vb_oxFeixNYmUGBaOeYMfSNP55C6srh01yafFvl-n-bhqK2NDs3jcq87Bo40e-8g=s90"
          ],
          "recipeName": "Parmesan Zucchini Sticks",
          "totalTimeInSeconds": 2400,
          "attributes": {
            "course": [
              "Lunch"
            ]
          },
          "flavors": {
            "piquant": 0,
            "meaty": 0.16666666666666666,
            "bitter": 0.5,
            "sweet": 0.16666666666666666,
            "sour": 0.8333333333333334,
            "salty": 0.16666666666666666
          },
          "rating": 4
        },
        "dinner": {
          "imageUrlsBySize": {
            "90": "https://lh3.googleusercontent.com/EqzdFXvdzKVAfD8KJ6k6i0y7CU_zrwOQKxLpNqssdzZ674zY8uYW4s2_onFJBXTFlsESlh-4bBCelXfpTvSkxJM=s90-c"
          },
          "sourceDisplayName": "Little Spice Jar",
          "ingredients": [
            "olive oil",
            "minced garlic",
            "red pepper flakes",
            "italian seasoning",
            "boneless skinless chicken breasts",
            "cherry tomatoes",
            "balsamic vinegar",
            "honey",
            "basil",
            "onion powder",
            "shredded mozzarella cheese"
          ],
          "id": "Garlic-Butter-Tomato-Baked-Chicken-With-Mozzarella-2472376",
          "smallImageUrls": [
            "https://lh3.googleusercontent.com/mRimWjY7erbw-hFX1l-9GkagM0Bv389H4aO1NG_-al3hCVCirjIIOvA4bRsj75n9bv0CApMrFcFMW1O2mW2L0g=s90"
          ],
          "recipeName": "Garlic Butter Tomato Baked Chicken With Mozzarella",
          "totalTimeInSeconds": 2400,
          "attributes": {
            "course": [
              "Main Dishes"
            ]
          },
          "flavors": {
            "piquant": 0.3333333333333333,
            "meaty": 1,
            "bitter": 1,
            "sweet": 1,
            "sour": 1,
            "salty": 1
          },
          "rating": 4
        },
        "side": {
          "imageUrlsBySize": {
            "90": "https://lh3.googleusercontent.com/9QO6qqs0rwBEjg-IjLl1KbUIqlimuXHuWJBFD0i2K9iTDKsbN35KVJVFoY7bhuoEF0OBD2sGrj1M4vcODRDfxFI=s90-c"
          },
          "sourceDisplayName": "The Healthy Family and Home",
          "ingredients": [
            "cauliflower",
            "extra-virgin olive oil",
            "ground chipotle chile pepper",
            "garlic powder",
            "Himalayan salt",
            "lime"
          ],
          "id": "Roasted-Cauliflower-with-Chipolte-and-Lime-_Vegan_-Gluten-Free_-Dairy-Free_-Paleo-Friendly_-2193066",
          "smallImageUrls": [
            "https://lh3.googleusercontent.com/Kts1QaxsDV8p6S_NkofPJgtn4ObRIX_SMCWzvz_jmJzUO50rm2_qRPMG-GxH1j0xGol6jwFX_WrTn5sS9oBxZ8I=s90"
          ],
          "recipeName": "Roasted Cauliflower with Chipolte and Lime (Vegan, Gluten-Free, Dairy-Free, Paleo-Friendly)",
          "totalTimeInSeconds": 6000,
          "attributes": {
            "course": [
              "Side Dishes"
            ]
          },
          "flavors": null,
          "rating": 4
        },
        "snack": {
          "imageUrlsBySize": {
            "90": "https://lh3.googleusercontent.com/dqTTUFRFX7qPu8PbCEx6sURmJpQA4SgKvFmpw4Iy6d4NIrvA3RWPvaZIkF-bHqAMMcPrQRZXZf4ThvXSZDYY4nE=s90-c"
          },
          "sourceDisplayName": "Elana's Pantry",
          "ingredients": [
            "large carrots",
            "olive oil",
            "sea salt"
          ],
          "id": "Carrot-French-Fries-1919869",
          "smallImageUrls": [
            "https://lh3.googleusercontent.com/91NKDgenAqN93QhyL6NnbJmj3D2BXDBQC0uxciNC2WCO5xzBPLQlN82T4PgOI8GeByxYfSq7mvfp5iXUOgRTrg=s90"
          ],
          "recipeName": "Carrot French Fries",
          "totalTimeInSeconds": 2100,
          "attributes": {
            "course": [
              "Side Dishes",
              "Snacks"
            ]
          },
          "flavors": {
            "piquant": 0,
            "meaty": 0.16666666666666666,
            "bitter": 0.6666666666666666,
            "sweet": 0.3333333333333333,
            "sour": 0.3333333333333333,
            "salty": 0.8333333333333334
          },
          "rating": 4
        }
      },
      "wednesday": {
        "breakfast": {
          "imageUrlsBySize": {
            "90": "https://lh3.googleusercontent.com/7ZdAGD6f10h6wfOyHy5JVrsWHHKGEchtG04gILEQdFcu83gH4nrJFTqFYrQinU-IPJ_dQfRJOcwJUFovCOlpwII=s90-c"
          },
          "sourceDisplayName": "Stupid Easy Paleo",
          "ingredients": [
            "red bell peppers",
            "frozen chopped spinach",
            "eggs",
            "sea salt",
            "pepper"
          ],
          "id": "Breakfast-Stuffed-Peppers-1904447",
          "smallImageUrls": [
            "https://lh3.googleusercontent.com/mF5SlBKIfrGAr0S7gURbWVtpYaNg5kLsvqgdgj6gzFFZVbzRJFIt1npizg_nUqz0tyNFwrQQ3Mz1f-F8zutySA=s90"
          ],
          "recipeName": "Breakfast Stuffed Peppers",
          "totalTimeInSeconds": 3000,
          "attributes": {
            "course": [
              "Breakfast and Brunch"
            ]
          },
          "flavors": {
            "piquant": 0.6666666666666666,
            "meaty": 0.16666666666666666,
            "bitter": 0.16666666666666666,
            "sweet": 0.3333333333333333,
            "sour": 0.8333333333333334,
            "salty": 0.3333333333333333
          },
          "rating": 4
        },
        "lunch": {
          "imageUrlsBySize": {
            "90": "http://lh3.googleusercontent.com/bN6baf-ZizmLTVfh3ZAQJ2IIEyLDxi8s94AciS-ODPgi22fwrBCmJt_4_BF8_gAPCyXeGPk6ThEvFdhtey9CjA=s90-c"
          },
          "sourceDisplayName": "Thyme Bombe",
          "ingredients": [
            "frozen shelled edamame",
            "olive oil",
            "lemon",
            "salt"
          ],
          "id": "Crispy-_Popcorn_-Edamame-1188893",
          "smallImageUrls": [
            "http://lh3.googleusercontent.com/zhsXkHLSHNKl7j1sTK8t8cqiIiHct1Pvm00w2mOmteMIxQhpdqq7U6_bxVlSeXPszcZajVWFI2I_UOld_HnK=s90"
          ],
          "recipeName": "Crispy \"Popcorn\" Edamame",
          "totalTimeInSeconds": 3000,
          "attributes": {
            "course": [
              "Lunch"
            ]
          },
          "flavors": {
            "piquant": 0,
            "meaty": 0.16666666666666666,
            "bitter": 0.8333333333333334,
            "sweet": 0,
            "sour": 0.8333333333333334,
            "salty": 0.8333333333333334
          },
          "rating": 4
        },
        "dinner": {
          "imageUrlsBySize": {
            "90": "https://lh3.googleusercontent.com/xdzPLWpvnsucQTBsCfsM4VaWywfGtzVgzA6bT9-aA_ARyKnf_XFrU-C_gFgkm9ZFF1jAaX2ZIeEEUQxZ-joB5ZQ=s90-c"
          },
          "sourceDisplayName": "Damn Delicious",
          "ingredients": [
            "pork chops bone-in",
            "kosher salt",
            "freshly ground black pepper",
            "unsalted butter",
            "balsamic vinegar",
            "honey",
            "garlic",
            "dried oregano",
            "dried basil",
            "dried thyme",
            "crushed red pepper flakes"
          ],
          "id": "Easy-Pork-Chops-with-Sweet-and-Sour-Glaze-2286031",
          "smallImageUrls": [
            "https://lh3.googleusercontent.com/NuyVISh1kuBjqCEV5hj2INfdGRr-k1LuT0NhEOYYu4cdR_w7BpvLXH4NiIgq64u9ZvMgq2el7MOGgxwNjYETNg=s90"
          ],
          "recipeName": "Easy Pork Chops with Sweet and Sour Glaze",
          "totalTimeInSeconds": 1200,
          "attributes": {
            "course": [
              "Main Dishes"
            ]
          },
          "flavors": null,
          "rating": 4
        },
        "side": {
          "imageUrlsBySize": {
            "90": "https://lh3.googleusercontent.com/z04SO1spB34o7cD28JHR1qwpCcH4Fd47KrkL4auiqOZoRfRY7Tf2_mUqIriUReIH31kBvWF1aB0XIiM1r4oP=s90-c"
          },
          "sourceDisplayName": "Five Heart Home",
          "ingredients": [
            "zucchini",
            "yellow summer squash",
            "small tomatoes",
            "garlic salt",
            "freshly ground black pepper",
            "grated parmesan cheese"
          ],
          "id": "Baked-Parmesan-Summer-Veggies-2487087",
          "smallImageUrls": [
            "https://lh3.googleusercontent.com/6jSFIu9Z3uRjV3jTzi9EoRlO3JNQtKOgjiARlzZ2-YxW0-lQl6IcbDvQnSgnH3fQK7tg43X7S2sOubd9AezS=s90"
          ],
          "recipeName": "Baked Parmesan Summer Veggies",
          "totalTimeInSeconds": 2700,
          "attributes": {
            "course": [
              "Side Dishes",
              "Lunch"
            ],
            "cuisine": [
              "Kid-Friendly"
            ],
            "holiday": [
              "Summer"
            ]
          },
          "flavors": null,
          "rating": 4
        },
        "snack": {
          "imageUrlsBySize": {
            "90": "https://lh3.googleusercontent.com/EXYwHhC3_PlqpjCVn4bJl4UY5ldIDkg9Mx2RYxsCzsKd4lhgUIQLa4G2FYWxrd4YvHaiyUv_NsHBFEkBZQCjYg=s90-c"
          },
          "sourceDisplayName": "The Dr.Oz Show",
          "ingredients": [
            "jicama",
            "extra-virgin olive oil",
            "paprika",
            "onion powder",
            "salt"
          ],
          "id": "Jicama-Fries-2113862",
          "smallImageUrls": [
            "https://lh3.googleusercontent.com/_hKTG41TEbnU8xg5AKoDS-tst-yFLhVEQwyMmQPpS_Pe8OcOx3QEg1kw3Ezy6agw3lZ41w-r_kBcRVvJufpG=s90"
          ],
          "recipeName": "Jicama Fries",
          "totalTimeInSeconds": 1500,
          "attributes": {
            "course": [
              "Side Dishes",
              "Snacks"
            ]
          },
          "flavors": {
            "piquant": 0.16666666666666666,
            "meaty": 0.16666666666666666,
            "bitter": 0.16666666666666666,
            "sweet": 0.16666666666666666,
            "sour": 0.8333333333333334,
            "salty": 0.16666666666666666
          },
          "rating": 3
        }
      },
      "thursday": {
        "breakfast": {
          "imageUrlsBySize": {
            "90": "https://lh3.googleusercontent.com/-hvwJ5Q0UZvXCKC9P_p75fThD53_DDjoWZpAZL6GorEBYq564oinWEPj3bXJdUia9SL2mJRKJt128-_6L6a3-w=s90-c"
          },
          "sourceDisplayName": "Tesco Food",
          "ingredients": [
            "olive oil",
            "red onion",
            "courgette",
            "peppers",
            "aubergine",
            "cherry tomatoes",
            "eggs"
          ],
          "id": "One-Pan-Ratatouille-Eggs-2281344",
          "smallImageUrls": [
            "https://lh3.googleusercontent.com/d97x3oLiUD7IYL9BZhOqTvjjZmyM3hD-ZdU7UJX4hlMINM910cnyL9RK9-8_r7O715q8b2EVU63FtAnvdguA=s90"
          ],
          "recipeName": "One Pan Ratatouille Eggs",
          "totalTimeInSeconds": 2700,
          "attributes": {
            "course": [
              "Breakfast and Brunch"
            ]
          },
          "flavors": {
            "piquant": 0,
            "meaty": 0.16666666666666666,
            "bitter": 0.16666666666666666,
            "sweet": 0.16666666666666666,
            "sour": 0.5,
            "salty": 0.16666666666666666
          },
          "rating": 3
        },
        "lunch": {
          "imageUrlsBySize": {
            "90": "http://lh6.ggpht.com/vJ1D6w0XA7ccENsZ13OBHc6evDkCPI1nokCrgoG1SD_wRWWCjftCnkVOyE9AQepMy4r0woGpw77pnRwjB7pKyA=s90-c"
          },
          "sourceDisplayName": "The Dinner Mom",
          "ingredients": [
            "zucchini",
            "cooking spray",
            "olive oil",
            "salt"
          ],
          "id": "Zucchini-Chips-in-the-Microwave-or-Oven-1006689",
          "smallImageUrls": [
            "http://lh5.ggpht.com/4JAtwNrKSWjQMgUdoajSjncq6cN2FbZVS23L8rBHo1CSqdj6XLTZYYVZ6tfqWtrP4qTVLqQ1TzC_bH3QUHrS=s90"
          ],
          "recipeName": "Zucchini Chips in the Microwave or Oven",
          "totalTimeInSeconds": 3000,
          "attributes": {
            "course": [
              "Lunch"
            ]
          },
          "flavors": null,
          "rating": 4
        },
        "dinner": {
          "imageUrlsBySize": {
            "90": "https://lh3.googleusercontent.com/eCP6k_Ek0w5ukarLUXUMjupmPi6wX6WAF4irlqYYap9thIxMzb1TWuuy1bCOXFKhZHWDiqxXWUBtdnGK7wTH-w=s90-c"
          },
          "sourceDisplayName": "Add a Pinch",
          "ingredients": [
            "skinless boneless chicken breasts",
            "fresh cilantro",
            "limes",
            "lime",
            "olive oil",
            "salt",
            "ground cumin",
            "cayenne pepper"
          ],
          "id": "Cilantro-Lime-Chicken-2049115",
          "smallImageUrls": [
            "https://lh3.googleusercontent.com/8woCYaKshnr3GImW_i0vOn7-tTPD_WsYDUAzufEdxWoUH0t-6gyuYp6sCXUGyAhZb5WvbUOQTg2soklS3-UgRw=s90"
          ],
          "recipeName": "Cilantro Lime Chicken",
          "totalTimeInSeconds": 1500,
          "attributes": {
            "course": [
              "Main Dishes"
            ]
          },
          "flavors": {
            "piquant": 0.3333333333333333,
            "meaty": 0.5,
            "bitter": 0.16666666666666666,
            "sweet": 0.16666666666666666,
            "sour": 0.6666666666666666,
            "salty": 0.3333333333333333
          },
          "rating": 4
        },
        "side": {
          "imageUrlsBySize": {
            "90": "https://lh3.googleusercontent.com/Rvq10AEE2Igu09XlU9ZML8DNJB-hU507XVLB3LyDrLx7SbQkfnM9ohAb6XCI0VG_yBVYt4-KKbqGQo7grJE-tg=s90-c"
          },
          "sourceDisplayName": "Foodie Crush",
          "ingredients": [
            "medium zucchini",
            "butter",
            "grated parmesan cheese",
            "kosher salt",
            "freshly ground black pepper"
          ],
          "id": "Easy-5-Minute-Parmesan-Zucchini-2441070",
          "smallImageUrls": [
            "https://lh3.googleusercontent.com/cwzlg3WXBjwopYl9Eqh9QoOlwYTZ_XNIMRZfssTrd1umjAeyZtRebYNAHc77TP9Kv3ZtGdfHw-8EzQGZJPPIVXk=s90"
          ],
          "recipeName": "Easy 5-Minute Parmesan Zucchini",
          "totalTimeInSeconds": 1800,
          "attributes": {
            "course": [
              "Side Dishes"
            ]
          },
          "flavors": null,
          "rating": 4
        },
        "snack": {
          "imageUrlsBySize": {
            "90": "http://lh6.ggpht.com/3tCQ_ojczN2fSUESxpRrTVrM6LiPH7geze2AzLvtux-vPoRoKxYvWpSExzHEQxF7NIqVX-proVkPmBN8AYdKzQ=s90-c"
          },
          "sourceDisplayName": "Persnickety Plates",
          "ingredients": [
            "yellow squash",
            "salt",
            "pepper",
            "seasoned salt",
            "olive oil"
          ],
          "id": "Squash-Chips-1027056",
          "smallImageUrls": [
            "http://lh3.ggpht.com/HpIuvqnEpO3tJVvzELIgNUUqqTuJ3g89D7ZqziFJtN6UDH61XBAa_MpRTxnzRtoYkNjzj1f8dry6yC2GpqcLHow=s90"
          ],
          "recipeName": "Squash Chips",
          "totalTimeInSeconds": 7500,
          "attributes": {
            "course": [
              "Snacks"
            ]
          },
          "flavors": {
            "piquant": 0,
            "meaty": 0.16666666666666666,
            "bitter": 0.5,
            "sweet": 0.16666666666666666,
            "sour": 0.8333333333333334,
            "salty": 0.3333333333333333
          },
          "rating": 4
        }
      },
      "friday": {
        "breakfast": {
          "imageUrlsBySize": {
            "90": "https://lh3.googleusercontent.com/FWwijrZp6rjSLSGlb2Y_Go6q2nXICTnDbq2Jb5E36-0jGq5839DfMNanvDrm_FsHdRMe7lUThPA9TDBa-KxxLw=s90-c"
          },
          "sourceDisplayName": "LeanMeanKitchen",
          "ingredients": [
            "large brown eggs",
            "baby spinach",
            "tomato",
            "yellow onion",
            "cheddar cheese"
          ],
          "id": "Spinach_-Tomato-and-Cheddar-Muffin-Pan-Frittatas-2334887",
          "smallImageUrls": [
            "https://lh3.googleusercontent.com/X6qYJAY8TbC8yPLod9TaY6OMdxe64LEIUBCVaKVId13OOLVxS3pj4u8-6Ex_zg9EEWS-uNNyG9TJbqGPsStFaA=s90"
          ],
          "recipeName": "Spinach, Tomato and Cheddar Muffin Pan Frittatas",
          "totalTimeInSeconds": 2400,
          "attributes": {
            "course": [
              "Breakfast and Brunch"
            ]
          },
          "flavors": {
            "piquant": 0,
            "meaty": 0.5,
            "bitter": 0.3333333333333333,
            "sweet": 0.16666666666666666,
            "sour": 0.16666666666666666,
            "salty": 0.16666666666666666
          },
          "rating": 4
        },
        "lunch": {
          "imageUrlsBySize": {
            "90": "https://lh3.googleusercontent.com/65hBqSgrqS2C3tiU9XMyOM6QhilUoV2w0fAAjw2te_yLaX4ETzsCm77iokoAImaKMGDGIiC2BxwMx5GTmIw8pA=s90-c"
          },
          "sourceDisplayName": "ifoodreal",
          "ingredients": [
            "zucchini",
            "red bell pepper",
            "tomatoes",
            "kalamata olives",
            "garlic",
            "oregano",
            "black pepper",
            "feta cheese",
            "parsley"
          ],
          "id": "Mediterranean-Baked-Zucchini-Sticks-2040174",
          "smallImageUrls": [
            "https://lh3.googleusercontent.com/5IrPE33J6oBLxnqe6miDryvhvI-832kMhdC2PJvrJBjqL1naupIysqg6Y5zmuZM9s9cTH9k9hBM7X77S6NB5zA=s90"
          ],
          "recipeName": "Mediterranean Baked Zucchini Sticks",
          "totalTimeInSeconds": 2400,
          "attributes": {
            "course": [
              "Lunch"
            ],
            "cuisine": [
              "Mediterranean"
            ]
          },
          "flavors": {
            "piquant": 0.16666666666666666,
            "meaty": 0.16666666666666666,
            "bitter": 0.3333333333333333,
            "sweet": 0.16666666666666666,
            "sour": 0.8333333333333334,
            "salty": 0.16666666666666666
          },
          "rating": 4
        },
        "dinner": {
          "imageUrlsBySize": {
            "90": "https://lh3.googleusercontent.com/ZCBb4pY2U0D58EIWihpcztTVPBq0R3nggqm5xj-f-scxe68YJ93nHJ-P1H-W9ENQCi0RRCY0CeGMZhFwhEkKWw=s90-c"
          },
          "sourceDisplayName": "Add a Pinch",
          "ingredients": [
            "salmon filet",
            "garlic",
            "chopped parsley",
            "parmesan cheese"
          ],
          "id": "Baked-Salmon-with-Parmesan-Herb-Crust-2037670",
          "smallImageUrls": [
            "https://lh3.googleusercontent.com/pMhhdJ95kk6HMxsu5_rsbbXyWnYFGVdXDSSaXBK2NpwfAwSTHmMwLtV1Q5vCKmY8KdKHsi9rjvOvZPjbmPY5hF4=s90"
          ],
          "recipeName": "Baked Salmon with Parmesan Herb Crust",
          "totalTimeInSeconds": 1020,
          "attributes": {
            "course": [
              "Main Dishes"
            ]
          },
          "flavors": {
            "piquant": 0,
            "meaty": 0.8333333333333334,
            "bitter": 0.8333333333333334,
            "sweet": 0.16666666666666666,
            "sour": 0.8333333333333334,
            "salty": 0.8333333333333334
          },
          "rating": 4
        },
        "side": {
          "imageUrlsBySize": {
            "90": "https://lh3.googleusercontent.com/KBbETUdFW8cYmWk77VQme61-GiINqIOEpk6pqWj3oWVeIwjuYFdf0g9IS4UTlFueJW1BoViehgRXmWBv95XVN28=s90-c"
          },
          "sourceDisplayName": "Southern Plate",
          "ingredients": [
            "bacon",
            "cabbage",
            "salt",
            "pepper"
          ],
          "id": "Fried-Cabbage-2256278",
          "smallImageUrls": [
            "https://lh3.googleusercontent.com/dcbybrqk3Vgd5b9X38qUK34GJV0dyLZHvTqE4QLe6VeKJjsEsL-e8fKEPQ3XaVJsKUxVGPcFxMY9QpP5mIC1GXw=s90"
          ],
          "recipeName": "Fried Cabbage",
          "totalTimeInSeconds": 2400,
          "attributes": {
            "course": [
              "Side Dishes"
            ]
          },
          "flavors": {
            "piquant": 0,
            "meaty": 0.16666666666666666,
            "bitter": 0.6666666666666666,
            "sweet": 0,
            "sour": 0.8333333333333334,
            "salty": 0.5
          },
          "rating": 4
        },
        "snack": {
          "imageUrlsBySize": {
            "90": "https://lh3.googleusercontent.com/luB1II-LIhR6McXkUvHB19sUYU13frHK53bMD_4NV6PGSBq1pCUSIibLYaNLVXIOk0yfwKylCdYWXMjAk2HG1w=s90-c"
          },
          "sourceDisplayName": "Courtney's Sweets",
          "ingredients": [
            "chili powder",
            "oregano",
            "garlic",
            "onion",
            "paprika",
            "cumin",
            "pepper",
            "kosher salt"
          ],
          "id": "Taco-Seasoning-Mix-1478900",
          "smallImageUrls": [
            "https://lh3.googleusercontent.com/kd-Kft6oOjFkcqoBOP4yFD7gW4-XVN6E_-yCfg2RL0aI7ivInaSQLbLS34JRtNJvYlepxP1xGITSZZ8akTYHlA=s90"
          ],
          "recipeName": "Taco Seasoning Mix",
          "totalTimeInSeconds": 900,
          "attributes": {
            "course": [
              "Snacks"
            ]
          },
          "flavors": {
            "piquant": 0.8333333333333334,
            "meaty": 0.16666666666666666,
            "bitter": 0.8333333333333334,
            "sweet": 0.16666666666666666,
            "sour": 0.8333333333333334,
            "salty": 0.8333333333333334
          },
          "rating": 4
        }
      },
      "saturday": {
        "breakfast": {
          "imageUrlsBySize": {
            "90": "http://lh5.ggpht.com/9k5Wi1UyPOBYvtUOEeu2Zi3CodmCBWwHUbpLo9mjOtATWtbSdFyU50E30DTV2h4x_vGXc4oo8yfE4R-0WLu7=s90-c"
          },
          "sourceDisplayName": "Kylee Kitchen",
          "ingredients": [
            "banana",
            "eggs",
            "cinnamon"
          ],
          "id": "Three-Ingredient-Banana-Pancakes-1022026",
          "smallImageUrls": [
            "http://lh6.ggpht.com/SY-xeWlH4WkoeTGaS_JHr5WETYDiCCYHSYHjDIbqTPRFP2DXNg0BUsE5hfTV9V7RvtdX7JuCeY6dTZoU9nYaSg=s90"
          ],
          "recipeName": "Three-Ingredient Banana Pancakes",
          "totalTimeInSeconds": 1500,
          "attributes": {
            "course": [
              "Breakfast and Brunch"
            ]
          },
          "flavors": {
            "piquant": 0,
            "meaty": 0.16666666666666666,
            "bitter": 0.16666666666666666,
            "sweet": 0.5,
            "sour": 0.3333333333333333,
            "salty": 0.16666666666666666
          },
          "rating": 4
        },
        "lunch": {
          "imageUrlsBySize": {
            "90": "https://lh3.googleusercontent.com/uXl9oY-PVqGqqLlR0JknY_PCPAB_n2HctmRGO-cFHNFI409tAv9_TlCz26ogUqUjOXpoDSWgboYvxAbTeQt3=s90-c"
          },
          "sourceDisplayName": "The Speedy Spatula",
          "ingredients": [
            "avocado",
            "lemon",
            "cilantro leaves",
            "salt",
            "ground black pepper",
            "chipotle seasoning"
          ],
          "id": "Easy-Avocado-Toast-2368996",
          "smallImageUrls": [
            "https://lh3.googleusercontent.com/PwbULjnQrtWOC9CTN1qJz8FJjWkLWlWQNVMof6p5GSujtAHhzGRhFRuC66PaQByJW3xzjeVy9W43SXVos-asTg=s90"
          ],
          "recipeName": "Easy Avocado Toast",
          "totalTimeInSeconds": 180,
          "attributes": {
            "course": [
              "Lunch"
            ]
          },
          "flavors": null,
          "rating": 4
        },
        "dinner": {
          "imageUrlsBySize": {
            "90": "https://lh3.googleusercontent.com/B7GI0KrU1WZmpaOgzzFjQStUHqtFb1BRo1lTh4lClMHEUL9E4Ey0hhKHw_NCvQoS3697sFKpmjwQd6GAtcvFhQ=s90-c"
          },
          "sourceDisplayName": "Made in a Day",
          "ingredients": [
            "cabbage",
            "olive oil",
            "salt",
            "pepper",
            "seasoning mix"
          ],
          "id": "Oven-Roasted-Cabbage-Steaks-2301353",
          "smallImageUrls": [
            "https://lh3.googleusercontent.com/dUBaDRR1_pKIZ8z1zYCM9PHYiYJDb9iw6VXb78kNJRkdHC5ux4ZtYjw5zu9b9CnP0tnmRUgaXIChSKpCm8ZkmgM=s90"
          ],
          "recipeName": "Oven Roasted Cabbage Steaks",
          "totalTimeInSeconds": 3000,
          "attributes": {
            "course": [
              "Main Dishes"
            ],
            "holiday": [
              "Sunday Lunch"
            ]
          },
          "flavors": null,
          "rating": 4
        },
        "side": {
          "imageUrlsBySize": {
            "90": "https://lh3.googleusercontent.com/aeZXl37k8xrqIWdmwnGkgazinaLLwZ5naOa-Fw6Ed835EoUN25ezFna5xKZL0icaW4Juvm3ZwRQJWyw3mkcYHsM=s90-c"
          },
          "sourceDisplayName": "Skinnytaste",
          "ingredients": [
            "broccoli florets",
            "garlic",
            "extra-virgin olive oil",
            "kosher salt",
            "pepper"
          ],
          "id": "Roasted-Broccoli-with-Smashed-Garlic-2258109",
          "smallImageUrls": [
            "https://lh3.googleusercontent.com/G1MlsxM_ZVWlA9Uqpo6P1wdDFe_l00iGmgWCbgbpGXalsvl1nbiGiqZqc3cPA0MshsEc4oddTGYfgwx9gRTd=s90"
          ],
          "recipeName": "Roasted Broccoli with Smashed Garlic",
          "totalTimeInSeconds": 1800,
          "attributes": {
            "course": [
              "Side Dishes"
            ],
            "holiday": [
              "Sunday Lunch"
            ]
          },
          "flavors": {
            "piquant": 0,
            "meaty": 0.16666666666666666,
            "bitter": 0.5,
            "sweet": 0.16666666666666666,
            "sour": 0.8333333333333334,
            "salty": 0.3333333333333333
          },
          "rating": 4
        },
        "snack": {
          "imageUrlsBySize": {
            "90": "https://lh3.googleusercontent.com/gzMGHpJ48rzNLWlvcEoyB7MhbnP1ORHf7mrgpLn7PCE6Khe4CE4-HmL1Bx1Hstn5IXp43m0UaqyRWYg2qloi7Q=s90-c"
          },
          "sourceDisplayName": "Healthy Recipe Ecstasy",
          "ingredients": [
            "plum tomatoes",
            "garlic",
            "extra-virgin olive oil",
            "kosher salt",
            "freshly ground black pepper",
            "dried basil",
            "feta cheese",
            "basil"
          ],
          "id": "Five-Minute-Feta-Bruschetta-Dip-1867761",
          "smallImageUrls": [
            "https://lh3.googleusercontent.com/Wy3RXDNwwXpPVl5yAX3J8st76-8lbTX4dTtXFGqq1ulOrEpaqZ13advywuIoQtD6wzrxftjXoi0FnBClxUmx=s90"
          ],
          "recipeName": "Five-Minute Feta Bruschetta Dip",
          "totalTimeInSeconds": 300,
          "attributes": {
            "course": [
              "Appetizers",
              "Snacks"
            ]
          },
          "flavors": {
            "piquant": 0,
            "meaty": 0.16666666666666666,
            "bitter": 0.8333333333333334,
            "sweet": 0.16666666666666666,
            "sour": 0.6666666666666666,
            "salty": 0.8333333333333334
          },
          "rating": 4
        }
      },
      "sunday": {
        "breakfast": {
          "imageUrlsBySize": {
            "90": "http://lh3.googleusercontent.com/a25l-mY0udkC1Uy399EPOWo-x-GpojKiY50URQPBYfZcnzjCHX-3XXWxKBomFIF3-naEk0Eq_UlMx52FnNvWaMA=s90-c"
          },
          "sourceDisplayName": "Garlic My Soul",
          "ingredients": [
            "bananas",
            "eggs",
            "strawberries",
            "blackberries",
            "fruit"
          ],
          "id": "Paleo-Pancakes-1251269",
          "smallImageUrls": [
            "http://lh3.googleusercontent.com/eVyOU7xdEstzEl6nI8Skm7Lro6BsIQ_jjepyf8LWHL-5RSW3PELHVIlQhSQmdTpXbP7e2SQ0pkHAhcNiv9Qa=s90"
          ],
          "recipeName": "Paleo Pancakes",
          "totalTimeInSeconds": 900,
          "attributes": {
            "course": [
              "Breakfast and Brunch"
            ]
          },
          "flavors": {
            "piquant": 0,
            "meaty": 0.16666666666666666,
            "bitter": 0.16666666666666666,
            "sweet": 0.5,
            "sour": 0.8333333333333334,
            "salty": 0.16666666666666666
          },
          "rating": 4
        },
        "lunch": {
          "imageUrlsBySize": {
            "90": "https://lh3.googleusercontent.com/DS7uSFBAUbbvEBpfmOT4UGYzLMIfJyBt5Qvax4WHZDl8-SzynSSUc2mmx9oMpLk4r_Paut-bZqCQbkTdFJTHeg=s90-c"
          },
          "sourceDisplayName": "Snack Girl",
          "ingredients": [
            "fresh tomatoes",
            "fresh basil",
            "extra virgin olive oil",
            "garlic cloves",
            "salt",
            "pepper"
          ],
          "id": "Snack-Girl-2488177",
          "smallImageUrls": [
            "https://lh3.googleusercontent.com/EfB5OkEUCjmtHk7tvczqsYgcgH4yxj-aYCMKzTqmMs8wo2sRRgWGHbczNx5lU72dQE6xBOb4opY-2XjqiTSw=s90"
          ],
          "recipeName": "Snack Girl",
          "totalTimeInSeconds": 3000,
          "attributes": {
            "course": [
              "Lunch"
            ]
          },
          "flavors": {
            "piquant": 0,
            "meaty": 0.16666666666666666,
            "bitter": 0.5,
            "sweet": 0.16666666666666666,
            "sour": 0.8333333333333334,
            "salty": 0.16666666666666666
          },
          "rating": 4
        },
        "dinner": {
          "imageUrlsBySize": {
            "90": "https://lh3.googleusercontent.com/QmDFULlfZp_LCdq7TILs5bd0BQN09tZdf9eSi30rpIp5uKGX4_BhPJnhaOgyhSMO-VVmNE4CITkwC_KEDLfoXuM=s90-c"
          },
          "sourceDisplayName": "Life in the Lofthouse",
          "ingredients": [
            "boneless skinless chicken breasts",
            "cutlets",
            "olive oil",
            "garlic",
            "Italian seasoning",
            "cream cheese",
            "baby spinach leaves",
            "shredded mozzarella cheese"
          ],
          "id": "Cheesy-Chicken-Spinach-Bake-2476102",
          "smallImageUrls": [
            "https://lh3.googleusercontent.com/xOjGnqzIaA_NC9Hfr-BkesxWBV_jRzIbXX7rHNI5WsvUZ96NmNzZCsIGBEznZudG2yLTsqsRt0TiXA2F6rHIIio=s90"
          ],
          "recipeName": "Cheesy Chicken Spinach Bake",
          "totalTimeInSeconds": 2400,
          "attributes": {
            "course": [
              "Main Dishes"
            ],
            "cuisine": [
              "Kid-Friendly"
            ]
          },
          "flavors": null,
          "rating": 4
        },
        "side": {
          "imageUrlsBySize": {
            "90": "https://lh3.googleusercontent.com/dQmVgZClGlTmtRQb0O1TRD4baEDU5O5ftg62CgacUfIAHtdGe6Cllo0BaK5cO_7ufvP-LuOvAQtk0n2U_uxE=s90-c"
          },
          "sourceDisplayName": "Kalyn's Kitchen",
          "ingredients": [
            "broccoli",
            "flowerets",
            "extra-virgin olive oil",
            "garlic",
            "salt",
            "freshly ground black pepper"
          ],
          "id": "Roasted-Broccoli-with-Garlic-2209449",
          "smallImageUrls": [
            "https://lh3.googleusercontent.com/kMOAkuKqkOVxWEEhD2ySY6BRI46ObxSxFfAPOLPU_cs6wVzcNG6J9Q0lFUhoKRldpCzhmIqD_F_1JIAlMz_44Q=s90"
          ],
          "recipeName": "Roasted Broccoli with Garlic",
          "totalTimeInSeconds": 1500,
          "attributes": {
            "course": [
              "Side Dishes"
            ],
            "holiday": [
              "Sunday Lunch"
            ]
          },
          "flavors": null,
          "rating": 4
        },
        "snack": {
          "imageUrlsBySize": {
            "90": "https://lh3.googleusercontent.com/hEE_IXTVWTvARBvggMObeur3LbDfIVDBAOH-lqFAbDyAtsOP5LHG8sAQUPyAv2553ySDNz8XkL9G9z0F24q2MdI=s90-c"
          },
          "sourceDisplayName": "Skinnytaste",
          "ingredients": [
            "boneless, skinless chicken breast",
            "bacon"
          ],
          "id": "Bacon-Wrapped-Chicken-Bites-2277228",
          "smallImageUrls": [
            "https://lh3.googleusercontent.com/_0FsDDcndE4AkXwv_jbD7E6yNk-KKik-4KSO9sSrRH_AzYHKhN7kQ8Mvy-hzstk5eh3Z__pYnXBUA_4SnRm0VA=s90"
          ],
          "recipeName": "Bacon Wrapped Chicken Bites",
          "totalTimeInSeconds": 2400,
          "attributes": {
            "course": [
              "Appetizers",
              "Snacks"
            ],
            "cuisine": [
              "Kid-Friendly"
            ]
          },
          "flavors": {
            "piquant": 0,
            "meaty": 0.8333333333333334,
            "bitter": 0.6666666666666666,
            "sweet": 0,
            "sour": 0.16666666666666666,
            "salty": 0.8333333333333334
          },
          "rating": 4
        }
      }
    },
    extras: null,
    loading: true,
    recipeList: []
  }

  componentDidMount() {
    WeeklyPlanController
      .getWeeklyPlan(this.props.searchObject)
      .then(weeklyPlan => {
        const { extras } = weeklyPlan
        delete weeklyPlan.extras
        this.setState({
          extras,
          weeklyPlan
        }, () => this.mealCheck(0))
      })
  }

  mealCheck = (count) => {
    const sunday = this.state.weeklyPlan.sunday
    const { mealsPerDay } = this.props.searchObject
    const missingMeals = []

    //loading: false

    if (!sunday.lunch)
      missingMeals.push('lunch')

    if (!sunday.dinner)
      missingMeals.push('dinner')

    if (!sunday.side)
      missingMeals.push('side')

    if (!sunday.breakfast && mealsPerDay >= 3)
      missingMeals.push('breakfast')

    if (!sunday.snack && mealsPerDay === 4)
      missingMeals.push('snack')

    console.log(missingMeals)
    console.log(count)

    if (missingMeals.length > 0 && count < 3) {
      WeeklyPlanController.getWeeklyPlan(this.props.searchObject).then(weeklyPlan => {
        const { extras } = weeklyPlan
        delete weeklyPlan.extras
        let weeklyPlanUpdate = { ...this.state.weeklyPlan }

        for (let day in weeklyPlanUpdate) {
          missingMeals.forEach(meal => weeklyPlanUpdate[day][meal] = weeklyPlan[day][meal])
        }

        console.log(weeklyPlanUpdate)

        this.setState({
          weeklyPlan: weeklyPlanUpdate,
          extras
        }, () => this.mealCheck(++count))
      })
    }
    else
      this.setState({
        loading: false
      })
  }

  newTab = (id) => {
    WeeklyPlanController.getRecipe(id).then(recipeObject => window.open(recipeObject.source.sourceRecipeUrl))
  }

  getAllRecipes = () => {
    WeeklyPlanController
    .getAllRecipes(this.state.weeklyPlan)
    .then(recipeList => this.setState({recipeList}))
  }



  render() {

    return (
      <WeeklyPlanLayout
        {...this.state}
        newTab={this.newTab}
        getAllRecipes={this.getAllRecipes}
      />
    )
  }
}

export default WeeklyPlanContainer