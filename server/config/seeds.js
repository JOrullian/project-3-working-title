const db = require('./connection');
const { User, Skill, Category } = require('../models');
const cleanDB = require('./cleanDB');


db.once('open', async () => {
  await cleanDB('Category', 'categories');
  await cleanDB('Skill', 'skills');
  await cleanDB('User', 'users');


  const categories = await Category.insertMany([
    { name: 'cat1' },
    { name: 'cat2' },
    { name: 'cat3' },
    { name: 'cat4' },
    { name: 'cat5' },
    { name: 'other' }
  ]);


  console.log('categories seeded');


  const skills = await Skill.insertMany([
    {
      name: 'Skill 1',
      category: categories[0]._id,
    },
    {
      name: 'Skill 2',
      category: categories[1]._id,
    },
    {
      name: 'Skill 3',
      category: categories[2]._id,
    }
  ]);


  console.log('skills seeded');


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
