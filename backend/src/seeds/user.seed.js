import { config } from "dotenv";
import { connectDB } from "../lib/db.js";
import User from "../models/user.model.js";
config();

const seedUsers = [
    // Female Users
    {
      email: "priya.sharma@example.com",
      fullName: "Priya Sharma",
      password: "123456",
      profilePic: "https://randomuser.me/api/portraits/women/1.jpg",
    },
    {
      email: "ananya.verma@example.com",
      fullName: "Ananya Verma",
      password: "123456",
      profilePic: "https://randomuser.me/api/portraits/women/2.jpg",
    },
    {
      email: "isha.patel@example.com",
      fullName: "Isha Patel",
      password: "123456",
      profilePic: "https://randomuser.me/api/portraits/women/3.jpg",
    },
    {
      email: "aisha.kapoor@example.com",
      fullName: "Aisha Kapoor",
      password: "123456",
      profilePic: "https://randomuser.me/api/portraits/women/4.jpg",
    },
    {
      email: "meera.nair@example.com",
      fullName: "Meera Nair",
      password: "123456",
      profilePic: "https://randomuser.me/api/portraits/women/5.jpg",
    },
    {
      email: "sanya.iyer@example.com",
      fullName: "Sanya Iyer",
      password: "123456",
      profilePic: "https://randomuser.me/api/portraits/women/6.jpg",
    },
    {
      email: "radhika.menon@example.com",
      fullName: "Radhika Menon",
      password: "123456",
      profilePic: "https://randomuser.me/api/portraits/women/7.jpg",
    },
    {
      email: "kavya.reddy@example.com",
      fullName: "Kavya Reddy",
      password: "123456",
      profilePic: "https://randomuser.me/api/portraits/women/8.jpg",
    },
  
    // Male Users
    {
      email: "arjun.mishra@example.com",
      fullName: "Arjun Mishra",
      password: "123456",
      profilePic: "https://randomuser.me/api/portraits/men/1.jpg",
    },
    {
      email: "rohit.singh@example.com",
      fullName: "Rohit Singh",
      password: "123456",
      profilePic: "https://randomuser.me/api/portraits/men/2.jpg",
    },
    {
      email: "vivek.nair@example.com",
      fullName: "Vivek Nair",
      password: "123456",
      profilePic: "https://randomuser.me/api/portraits/men/3.jpg",
    },
    {
      email: "sahil.agarwal@example.com",
      fullName: "Sahil Agarwal",
      password: "123456",
      profilePic: "https://randomuser.me/api/portraits/men/4.jpg",
    },
    {
      email: "manish.pandey@example.com",
      fullName: "Manish Pandey",
      password: "123456",
      profilePic: "https://randomuser.me/api/portraits/men/5.jpg",
    },
    {
      email: "rahul.choudhary@example.com",
      fullName: "Rahul Choudhary",
      password: "123456",
      profilePic: "https://randomuser.me/api/portraits/men/6.jpg",
    },
    {
      email: "akash.raju@example.com",
      fullName: "Akash Raju",
      password: "123456",
      profilePic: "https://randomuser.me/api/portraits/men/7.jpg",
    },
  ];
  
  

const seedDatabase = async () => {
  try {
    await connectDB();

    await User.insertMany(seedUsers);
    console.log("Database seeded successfully");
  } catch (error) {
    console.error("Error seeding database:", error);
  }
};

// Call the function
seedDatabase();