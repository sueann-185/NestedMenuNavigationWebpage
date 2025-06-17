System Documentation: Nested Menu Navigation Webpage

Overview
This project implements a multi-page website with a nested menu structure that allows users to navigate through academic subjects and topics. The system includes:
- A homepage displaying three academic subjects
- Nested menus that reveal topics when subjects are clicked
- 12 dedicated topic pages (4 per subject)
- "Back" functionality to return to the homepage
- Responsive design for both desktop and mobile devices

# How the System Works
Navigation Structure
## 1.Homepage:
- Displays three academic subjects: Mathematics, Science, and History
- Each subject is represented as an interactive card with an icon

## 2.Subject Interaction:
- Clicking a subject card expands it to reveal four related topics
- Only one subject can be expanded at a time
- Smooth animations transition between expanded/collapsed states

## 3.Topic Navigation:
- Clicking a topic navigates to a dedicated page
- Each topic page contains:
- Topic title and subject category
- Descriptive content paragraph
- Visual representation area
- "Back to Home" button

## 4.Return Functionality:
- Each topic page has a prominent "Back to Home" button
- Clicking returns to the homepage with all subjects collapsed

# Technical Implementation
## 1.HTML Structure:
- 13 HTML files (1 homepage + 12 topic pages)
- Organized in subject-specific folders
- Semantic HTML5 elements for accessibility

## 2.CSS Styling:
- Responsive grid layout using CSS Grid
- Modern gradient backgrounds and card designs
- Smooth transitions and animations
- Mobile-first approach with media queries
- Consistent styling across all pages

## 3.JavaScript Functionality:
- Handles subject card click events
- Manages expansion/collapse of topic lists
- Ensures only one subject is expanded at a time
- Simple DOM manipulation for interactive elements

# Deployment
The page is hosted on GitHub Pages, ensuring public accessibility from any device with internet access.
The responsive design works on both mobile and desktop browsers.

Deployment URL:
https://sueann-185.github.io/NestedMenuNavigationWebpage