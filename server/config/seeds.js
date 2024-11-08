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
      image: "",
    },
    {
      title: "Technology",
      image: "",
    },
    {
      title: "Music",
      image: "",
    },
    {
      title: "Education",
      image: "",
    },
    {
      title: "Handicraft",
      image: "",
    },
    {
      title: "Cooking",
      image: "",
    },
    {
      title: "Photography",
      image: "",
    },
    {
      title: "Writing",
      image: "",
    },
    {
      title: "Fitness",
      image: "",
    },
    {
      title: "Language",
      image: "",
    },
    {
      title: "Fashion",
      image: "",
    },
    {
      title: "Other",
      image: "",
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
