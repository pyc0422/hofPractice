// This repo is optional extra practice to use the underscore functions.
// Here we'll be writing new functions, but these functions will use
// the underscore functions within them.

/*
 *
 *  _.each
 *
 */

// use _.each to create a copy of the given array.
var moreFruits = function(fruits) {
  var results = [];

  _.each(fruits, function(fruit, index, collection) {
    results.push(fruit);
  });

  return results;
};

// use _.each to traverse the number array and determine
// which are multiples of five.
//i-number
//o-count of number that are multiples of five
//c-no for loop no forEach function
//e-
var multiplesOfFive = function(numbers) {
  var count = 0;
  _.each(numbers, function(number) {
    if (number % 5 === 0) {
      count ++;
    }
  });
  return count;
};

/*
 *
 *  _.filter
 *
 */

// use _.filter to return the fruits array with only the desired fruit.
//i-array,string(target)
//o-array
//c-no new array
//e-
var onlyOneFruit = function(fruits, targetFruit) {
  return _.filter(fruits, function(fruit) {
    if (fruit === targetFruit) {
      return fruit;
    }
  });
};

// use _.filter to return the fruits array with only fruits
// starting with the letter 'P'.
var startsWith = function(fruits, letter) {
  return _.filter(fruits, function(fruit) {
    if (fruit[0] === letter) {
      return fruit;
    }
  });

};

// return a filtered array containing only cookie-type desserts.
var cookiesOnly = function(desserts) {
  return _.filter(desserts, function(dessert) {
    if (dessert.type === 'cookie') {
      return dessert;
    }
  });
};

/*
 *
 *  _.reduce
 *
 */

// return the total price of all products.
var sumTotal = function(products) {
  return _.reduce(products, function(acc, product) {
    product = Number(product.price.slice(1));
    acc = acc + product;
    return acc;
  }, 0);
};

// return an object consisting of dessert types and how many of each.
// exampleOutput: { dessertType: 3, dessertType2: 1 }
var dessertCategories = function(desserts) {
  return _.reduce(desserts, function(acc, dessert) {
    acc[dessert.type] = (acc[dessert.type] || 0) + 1;
    return acc;
  }, {});

};

// given an array of movie data objects,return an array containing
// movies that came out between 1990 and 2000.
// TIP: use an array as your accumulator - don't push to an external array!
//i - array nest objcet
//o - array of movie name that movie releaseYear = 1990-2000
var ninetiesKid = function(movies) {
  return _.reduce(movies, function(acc, movie) {
    if (movie.releaseYear >= 1990 && movie.releaseYear < 2000) {
      acc.push(movie.title);
    }
    return acc;
  }, []);

};

// return an boolean stating if there exists a movie with a shorter
// runtime than your time limit.
// timeLimit is an integer representing a number of minutes.
var movieNight = function(movies, timeLimit) {
  return _.reduce(movies, function(acc, movie) {
    if (movie.runtime < timeLimit) {
      acc = true;
    }
    return acc;
  }, false);
};

/*
 *
 *  _.map
 *
 */

// given an array of strings, use _.map to return a new array containing all
// strings converted to uppercase letters.
var upperCaseFruits = function(fruits) {
  _.map(fruits, function(fruit) {
    return fruit.toUpperCase();
  });
};

// given an array of dessert objects, return a new array of objects
// that have a new "glutenFree" property, with a boolean value.
// TIP: Items that contain flour are not gluten-free.
var glutenFree = function(desserts) {
  return _.map(desserts, function(dessert) {
    //console.log(dessert.ingredients);
    if (_.indexOf(dessert.ingredients, 'flour') > 0) {
      desserts.glutenFree = dessert;
    }
    return desserts;
  });

};

// use _.map to return an array of items with their sale prices, with a new property
// containing the sale price. round any decimals to 2 places.
//
// having trouble with decimals? check out this article:
// http://adripofjavascript.com/blog/drips/avoiding-problems-with-decimal-math-in-javascript.html
//
/*

 example output:
  var salePrices = applyCoupon(groceries, 0.20);
  [
    {
      id: 1,
      product: 'Olive Oil',
      price: '$12.1',
      salePrice: '$9.68'
    }
  ];

*/
var applyCoupon = function(groceries, coupon) {
  return _.map(groceries, function(item) {
    var price = Number(item.price.slice(1));
    var saleprice = Math.round(price * 100 * (1 - coupon) * 100 / 100) / 100;
    item.salePrice = '$' + saleprice;
    return item;
  });

};
