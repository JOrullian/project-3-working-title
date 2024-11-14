const db = require('./connection');
const { User, Skill, Category } = require('../models');
const cleanDB = require('./cleanDB');


db.once('open', async () => {
  await cleanDB('Category', 'categories');
  await cleanDB('Skill', 'skills');
  await cleanDB('User', 'users');


  const categories = await Category.insertMany([
    {
      title: "Art",
      image: "art.svg",
    },
    {
      title: "Technology",
      image: "technology.svg",
    },
    {
      title: "Music",
      image: "music.svg",
    },
    {
      title: "Education",
      image: "education.svg",
    },
    {
      title: "Handicraft",
      image: "handicraft.svg",
    },
    {
      title: "Cooking",
      image: "cooking.svg",
    },
    {
      title: "Photography",
      image: "photography.svg",
    },
    {
      title: "Writing",
      image: "writing.svg",
    },
    {
      title: "Fitness",
      image: "fitness.svg",
    },
    {
      title: "Language",
      image: "language.svg",
    },
    {
      title: "Fashion",
      image: "fashion.svg",
    },
    {
      title: "Other",
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
