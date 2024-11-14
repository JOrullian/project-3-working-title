const db = require('./connection');
const { User, Skill, Category } = require('../models');
const cleanDB = require('./cleanDB');


db.once('open', async () => {
  await cleanDB('Category', 'categories');
  await cleanDB('Skill', 'skills');
  await cleanDB('User', 'users');


  const categories = await Category.insertMany([
    {
      name: "Art",
      image: "art.svg",
    },
    {
      name: "Technology",
      image: "technology.svg",
    },
    {
      name: "Music",
      image: "music.svg",
    },
    {
      name: "Education",
      image: "education.svg",
    },
    {
      name: "Handicraft",
      image: "handicraft.svg",
    },
    {
      name: "Cooking",
      image: "cooking.svg",
    },
    {
      name: "Photography",
      image: "photography.svg",
    },
    {
      name: "Writing",
      image: "writing.svg",
    },
    {
      name: "Fitness",
      image: "fitness.svg",
    },
    {
      name: "Language",
      image: "language.svg",
    },
    {
      name: "Fashion",
      image: "fashion.svg",
    },
    {
      name: "Other",
      image: "other.svg",
    },
  ]);


  console.log('categories seeded');

  await User.create({
    firstName: 'Tester1',
    lastName: 'Tester1',
    email: 'Tester1@testmail.com',
    password: 'password12345',
  });


  await User.create({
    firstName: 'Tester2',
    lastName: 'Tester2',
    email: 'Tester2@testmail.com',
    password: 'password12345'
  });


  console.log('users seeded');

  process.exit();
});
