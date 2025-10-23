const express = require("express");
const app = express();
const path = require("path");

app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));
app.use(express.static(path.join(__dirname, "public")));


const projects = [
    {
        slug: "campusnotes",
        title: "CampusNotes",
        tagline: "Academic notes sharing platform",
        stats: "750+ Active Users | Node.js, EJS, MongoDB",
        desc: "Developed a full-stack web application enabling students to share academic notes, achieving over 750 active users and 50+ signups. Engineered a secure, role-based platform with a verification system, integrated a Gemini-powered AI assistant for note summarization, and implemented multi-account Cloudinary uploads using a Round-Robin strategy. Successfully handled high traffic, managing over 2,000 downloads and 25GB+ data delivery monthly.",
        repo: "https://github.com/yash-pouranik/CampusNotes",
        live: "https://campusnotes.bitbros.in/"
    },
    {
        slug: "gullybazar",
        title: "GullyBazar",
        tagline: "Hackathon-built MERN marketplace",
        stats: "MERN Stack | 100+ Commits",
        desc: "Created a full-stack marketplace during the 48-hour national 'Solve for India' hackathon (Tutedude) to connect local street food vendors with verified raw material suppliers. Integrated features like supplier reviews, product comparison, cart management, and secure authentication using Passport.js and REST APIs. Achieved over 100 GitHub commits and received positive jury feedback.",
        repo: "https://github.com/yash-pouranik/gullybaza-bitbros",
        live: "https://gullybazar.bitbros.in/"
    },
    {
        slug: "trekstay",
        title: "trekStay",
        tagline: "Full stack stay booking app",
        stats: "Node.js, EJS, MongoDB",
        desc: "Designed and built an Airbnb-inspired travel booking application using Node.js, EJS, and MongoDB. Supports dual roles (user/admin) with role-based access control. Implemented full CRUD operations for listings and secure session handling with Passport.js authentication. Deployed on Render using MongoDB Atlas for scalable cloud data storage.",
        repo: "https://github.com/yash-pouranik/trekStay",
        live: "https://trekstay.onrender.com/"
    },
    {
        slug: "rewear",
        title: "ReWear",
        tagline: "Clothing swap platform",
        stats: "Node.js, EJS, MongoDB",
        desc: "Developed a sustainable fashion platform allowing users to list unused clothing items and engage in swaps. Users can exchange items directly or use a points-based system. Includes features like user dashboards to track uploads and swaps, a notification system for swap requests, and an admin panel for user and item management.",
        repo: "https://github.com/yash-pouranik/ReWear",
        live: "/" // "/" usually means not deployed or root path locally
    },
    {
        slug: "nirvirodh",
        title: "Nirvirodh",
        tagline: "Team collaboration tool with file locking",
        stats: "Node.js, EJS, MongoDB, Socket.IO",
        desc: "A secure, team-based collaborative platform designed to prevent editing conflicts by implementing a real-time file locking system using Socket.IO. Users can create/join teams, manage projects, and lock files before editing. Features include notifications for team requests, project status updates, and integration to fetch repository files directly from GitHub.",
        repo: "https://github.com/yash-pouranik/nirvirodh",
        live: "https://nirvirodh.onrender.com"
    },
    {
        slug: "pandey-dhudh-bhandar",
        title: "Pandey Dhudh Bhandar Ledger",
        tagline: "Udhaar (credit) manager for local milk vendor",
        stats: "Node.js, EJS, MongoDB",
        desc: "A practical web application built specifically for a local milk vendor ('Pandey Ji') to digitally manage customer credit ('udhaar'). Allows the owner to add customers, record daily milk credits, and track payments received. Features include calculating total balances, identifying top debtors, and a separate interface for customers to check their own billing history using a unique ID. Currently used by the vendor.",
        repo: "https://github.com/yash-pouranik/PandeyDhudhBhandar",
        live: "https://pandeydudhbhandar.bitbros.in/"
    }
];


// Root route
app.get("/", (req, res) => {
    res.render("index");
});

// About route
app.get("/about", (req, res) => {
    res.render("about");
});

// Projects route (now renders the grid)
app.get("/projects", (req, res) => {
    res.render("projects", { projects: projects });
});

// --- NEW PROJECT DETAIL ROUTE ---
// This handles URLs like /projects/campusnotes
app.get("/projects/:slug", (req, res) => {
    const project = projects.find(p => p.slug === req.params.slug);
    if (project) {
        // Render the new 'project-detail.ejs' file
        res.render("project-detail", { project: project });
    } else {
        res.redirect("/projects"); // If not found, go back
    }
});

const port = process.env.PORT || 3000;
app.listen(port, () => {
    console.log(`Server listening on port ${port}`);
});