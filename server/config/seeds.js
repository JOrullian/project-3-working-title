const db = require('./connection');
const { User, Skill, Category } = require('../models');
const cleanDB = require('./cleanDB');

db.once('open', async () => {
  try {
    await cleanDB('Category', 'categories');
    await cleanDB('Skill', 'skills');
    await cleanDB('User', 'users');

    const categories = await Category.insertMany([
      { name: "Art", image: "art.svg" },
      { name: "Technology", image: "technology.svg" },
      { name: "Music", image: "music.svg" },
      { name: "Education", image: "education.svg" },
      { name: "Handicraft", image: "handicraft.svg" },
      { name: "Cooking", image: "cooking.svg" },
      { name: "Photography", image: "photography.svg" },
      { name: "Writing", image: "writing.svg" },
      { name: "Fitness", image: "fitness.svg" },
      { name: "Language", image: "language.svg" },
      { name: "Fashion", image: "fashion.svg" },
      { name: "Other", image: "other.svg" },
    ]);

    console.log('categories seeded');

    // Create users and store them in variables
    const user1 = await User.create({
      firstName: 'Tester1',
      lastName: 'Tester1',
      email: 'Tester1@testmail.com',
      password: 'password12345',
      location: { type: 'Point', coordinates: [-74.006, 40.7128] } // Example coordinates for NYC
    });

    const user2 = await User.create({
      firstName: 'Tester2',
      lastName: 'Tester2',
      email: 'Tester2@testmail.com',
      password: 'password12345',
      location: { type: 'Point', coordinates: [-118.2437, 34.0522] } // Example coordinates for LA
    });

    console.log('users seeded');

    // Create skills for testing
    // Create skills for testing
    const skills = await Skill.insertMany([
      {
        name: "Painting", timeAvailable: `["Tuesday","Thursday"]`, description: "Acrylic and watercolor painting", category: categories[0]._id, user: user1._id
      },
      { name: "Digital Art", timeAvailable: `["Monday","Tuesday","Wednesday","Thursday","Friday"]`, description: "Creating digital illustrations", category: categories[0]._id, user: user2._id },
      { name: "Coding", timeAvailable: `["Saturday","Sunday"]`, description: "Frontend development skills", category: categories[1]._id, user: user1._id },
      { name: "Web Design", timeAvailable: `["Tuesday","Thursday"]`, description: "UI/UX design for websites", category: categories[1]._id, user: user2._id },
      { name: "Guitar", timeAvailable: `["Monday","Tuesday","Wednesday","Thursday","Friday"]`, description: "Playing acoustic guitar", category: categories[2]._id, user: user1._id },
      { name: "Piano", timeAvailable: `["Saturday","Sunday"]`, description: "Classical piano lessons", category: categories[2]._id, user: user2._id },
      { name: "Math Tutoring", timeAvailable: `["Saturday","Sunday"]`, description: "Algebra and calculus tutoring", category: categories[3]._id, user: user1._id },
      { name: "Science Tutoring", timeAvailable: `["Tuesday","Thursday"]`, description: "Physics and chemistry tutoring", category: categories[3]._id, user: user2._id },
      { name: "Woodworking", timeAvailable: `["Monday","Tuesday","Wednesday","Thursday","Friday"]`, description: "Creating custom furniture", category: categories[4]._id, user: user1._id },
      { name: "Sewing", timeAvailable: `["Saturday","Sunday"]`, description: "Making clothes and accessories", category: categories[4]._id, user: user2._id },
      { name: "Baking", timeAvailable: `["Tuesday","Thursday"]`, description: "Baking cakes and pastries", category: categories[5]._id, user: user1._id },
      { name: "Cooking", timeAvailable: `["Monday","Tuesday","Wednesday","Thursday","Friday"]`, description: "Cooking Italian and Asian cuisine", category: categories[5]._id, user: user2._id },
      { name: "Portrait Photography", timeAvailable: `["Saturday","Sunday"]`, description: "Capturing portrait photos", category: categories[6]._id, user: user1._id },
      { name: "Landscape Photography", timeAvailable: `["Saturday","Sunday"]`, description: "Photography of natural landscapes", category: categories[6]._id, user: user2._id },
      { name: "Creative Writing", timeAvailable: `["Tuesday","Thursday"]`, description: "Writing short stories", category: categories[7]._id, user: user1._id },
      { name: "Copywriting", timeAvailable: `["Monday","Tuesday","Wednesday","Thursday","Friday"]`, description: "Writing content for marketing", category: categories[7]._id, user: user2._id },
      { name: "Personal Training", timeAvailable: `["Saturday","Sunday"]`, description: "Strength and conditioning training", category: categories[8]._id, user: user1._id },
      { name: "Yoga", timeAvailable: `["Saturday","Sunday"]`, description: "Guided yoga sessions", category: categories[8]._id, user: user2._id },
      { name: "Spanish Lessons", timeAvailable: `["Saturday","Sunday"]`, description: "Teaching conversational Spanish", category: categories[9]._id, user: user1._id },
      { name: "Fashion Design", timeAvailable: `["Tuesday","Thursday"]`, description: "Creating custom fashion pieces", category: categories[10]._id, user: user2._id },
    ]);
    console.log('skills seeded');
  } catch (error) {
    console.error(error);
  } finally {
    process.exit();
  }
});
