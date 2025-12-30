# Interactive Classroom Seating – V BCA F (Row 2)

An interactive classroom seating visualization for **V BCA F – Row 2**, built using **HTML, CSS, and vanilla JavaScript**.  
Hover over each seat to instantly see who sits where through a clean, glowing student information card.

---

## About the Project

This project visually represents a classroom layout using benches and student seats.  
Each student is displayed as a **male or female stick figure**, and hovering over a seat reveals a floating card containing student details.

The objective is to build a **simple, interactive, and visually structured frontend project** that demonstrates clean UI design and effective DOM manipulation.

---

## Tech Stack

### HTML5
- Structures the classroom layout and seating arrangement
- Stores student information using `data-*` attributes  
  (`data-name`, `data-roll`, `data-email`, `data-gender`, `data-image`)

### CSS3
- Flexbox-based classroom and bench alignment
- Male and female stick figure designs
- Subtle glow effects for visual clarity
- Styled floating information card with circular profile image
- Themed background and title styling

### JavaScript (Vanilla ES6)
- Handles hover interactions on student seats
- Reads student data dynamically from HTML attributes
- Updates and toggles the student information card

---

## How It Works

1. Each student seat contains personal information stored using HTML `data-*` attributes.
2. When a user hovers over a student seat:
   - JavaScript retrieves the stored data
   - The floating information card is populated dynamically
   - The card becomes visible with a smooth visual effect
3. When the cursor leaves the seat:
   - The information card is hidden again

---

## Ideal Use Cases

- Classroom or college seating visualizations
- Frontend UI/UX practice projects
- JavaScript DOM manipulation demonstrations
- Interactive HTML and CSS showcases
- Beginner-friendly educational projects

---

## Project Focus

- Clean layout structure
- Hover-based interactivity
- No external libraries or frameworks
- Fully static and browser-based
