// const express=require('express')
// const router = express.Router();
// const Food = require('./models/Food')

// const menuItemsArray = [];
// const MenuItems = {
//   Breakfast: ["Kachori, Banana, Egg-2pcs", "Pav-Bhaji, Sooji-Halwa", "Aalu-Paratha, Butter", "Chana-Poori", "Aalu-Paratha, Butter", "Panner-Paratha, Butter", "Chole-Bhature"],
//   Lunch: ["Rajma, Boondi-Raita", "Kadhi, Chokha", "Chole", "Masoor-Dal", "Rajma, Kumaoni-Raita", "Bhatt, Yellow Dal", "Veg-Pualo, Papad, Dahi"],
//   Dinner: ["Dinner", "Dinner", "Dinner", "Dinner", "Dinner", "Dinner", "Dinner",],
// }
// const WeekDays = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"]
// // Loop through each category in MenuItems
// for (const category in MenuItems) {
//   if (MenuItems.hasOwnProperty(category)) {
//     const foods = MenuItems[category];

//     // Loop through each day's food items
//     foods.forEach((foodName, dayIndex) => {
//       const foodItem = {
//         name: foodName,
//         day: WeekDays[dayIndex], // You need to implement getDayOfWeek function
//         category: category.toLowerCase(), // Assuming you want categories in lowercase
//         price: 0, // You can set the price as needed
//       };

//       menuItemsArray.push(foodItem);
//     });
//   }
// }
// const newfood = new Food(menuItemsArray[0])
// const postData = async () => {
//   try {
//     await Food.insertMany(menuItemsArray)
//     console.log("Food is on the way")
//   }
//   catch (error) {
//     console.error(error)
//   }
// }

// postData()
// // menuItemsArray.forEach(async (menuItem) => {
// //     try {
// //       const newFood = new Food(menuItem);
// //       await newFood.save();
// //       console.log(`Food item saved: ${newFood.name}`);
// //     } catch (error) {
// //       console.error('Error saving food item:', error);
// //     }
// //   });
// module.exports=router