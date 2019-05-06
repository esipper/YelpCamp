// var mongoose   = require("mongoose");
// var Campground = require("./models/campground");
// var Comment    = require("./models/comment");

// var seeds = [
//     {
//         name: "Cloud's Rest",
//         image: "http://pickininthepines.org/wp-content/uploads/2013/01/Campground-Tents-6.jpeg",
//         description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
//     },
//     {
//         name: "Lawton's Bluff",
//         image: "http://shop.mooredeals.com/wp-content/uploads/sites/47/2018/06/Camping-e1527869407566.jpg",
//         description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
//     },
//     {
//         name: "Juniper's Landing",
//         image: "http://pickininthepines.org/wp-content/uploads/2013/01/Campground-Campers-2.jpeg",
//         description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
//     }
// ];

// async function seedDB() { 
//     await Comment.deleteMany({});
//     console.log("Campgrounds removed");
//     await Campground.deleteMany({});
//     console.log("Comments removed");
//     for(const seed of seeds) {
//         let campground = await Campground.create(seed);
//         console.log("Campground created");
//         let comment = await Comment.create(
//             {
//                 text: "This place is great, but I wish there was internet",
//                 author: "Homer"
//             }
//         );
//         console.log("Comment created");
//         campground.comments.push(comment);
//         campground.save();
//         console.log("Comment added to campground");
//     }   
// }


// module.exports = seedDB;