# Avy Savvy
![skier](https://images.unsplash.com/photo-1544558660-73f0535de012?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1049&q=80)

## Project links

 - [Github Frontend link](https://github.com/hannahtrask/capstone)
 - [Github Backend Link](https://github.com/hannahtrask/capstone-backend)
 - [Netlify Link](https://avysavvy.netlify.app/)
 - [Heroku Link](https://avysavvy.herokuapp.com/)

## Project Description

Many skiers and snowboarders know what they need to know before spending a day skiing in the backcountry, but unfortunately, an app has yet to exist where you may find everything you need to know. The goal of this project is to compile all necessary information into one place. The app will be easy to use (user goes to site, clicks once, types in a search, and BAM, 10 seconds and the user has all the information they need) and emphasis will be placed on effective, easy-to-understand UI.

## Project Styling

The general theme of this project is Avalanche Data Weather App. There will be nature inspired gradients, weather icons, and charts/graphs one may find in any weather app. This will improve UI to make the app easy to navigate for the user.

- [Color Palette](https://coolors.co/0b2040-576d91-a3b9e2-e5d6e1-e8c7c9-eab8b1)

I chose three typefaces for this application. While generally speaking, it's bad practice to overuse typefaces, I believe in this circumstance many typefaces are worth it. I will be using **Kreon** as a display typeface, because it emulates styles from some ski areas resort webpages. The serif font is easy to read and bold. I will be using **Pacifico** for the footer and taglines, which is a fun brush script, because it gives a serious app a more relaxed attitude. This typeface is nspired by surf culture (which runs paralell to ski/snowboard culture at least in lifestyle and mindset). For all text that isn't a tagline, footer, or display, I'll be using **Open Sans** because its high readability, especially on screens.

- [Google Fonts](https://fonts.google.com/specimen/Kreon?query=kreon)

## Backend

Here's a lil code snippet of the Express proxy server. This sets the default route to a fixed set of data. Another route exists to accept query parameters and return corresponding data.

```javascript
app.use(cors());
app.use((req, res, next) => {
	res.header('Access-Control-Allow-Origin', '*');
	next();
});

app.get('/', async (req, res) => {
	const response = await fetch('http://api.powderlin.es/closest_stations?lat=43.4695&lng=-110.7892&data=true&days=5&count=5');
	const data = await response.json();
	res.json(await data);
});
```

## Wireframes and App Structure

### App Structure

- [Logic Structure](https://res.cloudinary.com/digwu4vdh/image/upload/v1605565549/architecture_yqzqfh.png)

### Wireframes

 - [Mobile Wireframe](https://res.cloudinary.com/digwu4vdh/image/upload/v1605560817/mobile_gtcxwo.png)

 - [Tablet Wireframe](https://res.cloudinary.com/digwu4vdh/image/upload/v1605562314/tablet_akn0sc.png)

 - [Desktop Wireframe](https://res.cloudinary.com/digwu4vdh/image/upload/v1605563296/desktop_copy_gk7asp.jpg)
 
 ## MVP/Post MVP
 ##### Unless otherwise noted, time is listed in hours.

 ### MVP
 
  * Homepage
  * Resort Welcome Page
  * Backcountry Welcome Page
  * BC API Call
  * BC Display
  * BC Chart
  * BC Image Gallery
  * Deploy
 
### Time Estimates

#### Frontend

| Task | Priority | Estimated Time | Actual Time |
| --- | :---: |  :---:  | :---: |
| Homepage            | h | 2  | 3   |
| BC Welcome            | h | 2  | x   |
| BC API Call            | h | 2  | x   |
| BC Display            | h | 4  | x   |
| BC Chart            | h | 3  | x   |
| BC Image Gallery            | h | 2  | x   |
| Deploy           | h | 1  | .5   |
| Total            | h | 25 | x  |

#### Backend

| Task | Priority | Estimated Time | Actual Time |
| --- | :---: |  :---:  | :---: |
| Express Server            | h | 3  | 3   |
| Heroku Deploy            | h | 2  | x   |
| Full CRUD           | h | 3  | x   |
| MongoDB Connection            | h | 2  | x   |
| Total            | h | 10 | x  |
    
 ### Post MVP
 
  * Animations
  * SWE Change Graph
  * Ski Quote Generator
  * Resort Display
  * Resort Image Gallery
  * Resort API Call
  * Resort Chart

  ### Time Estimates
  
| Task | Priority | Estimated Time | Actual Time |
| ---   | :---:   |  :---:         |       :---: |
|   Animations    | m       | 5              | n/a         |
|    SWE Change Graph   | l       | 5              |       x     |
| Ski Quote Generator          | h | 4  | 1.5   |
| Resort API Call            | h | 2  | x   |
| Resort Display            | h | 3  | x   |
| Resort Image Gallery            | h | 2  | x   |
| Resort Chart            | h | 4  | x   |
| Total | h       | 14             | x           |

## Additional Libraries

  - [Contentful](https://www.contentful.com/get-started/)
  - [Next.js](https://nextjs.org/)
  - [Sass](https://sass-lang.com/)
  - [Framer Motion](https://www.framer.com/motion/)
  - [Chartjs](https://www.chartjs.org/)

## Code Snippet

This is a code snippet I'm really proud of.

```javascript
```

## Running Locally

 1. Fork and clone this repo
 2. Clone into a new folder
 3. cd into the project
 4. npm i to install dev dependencies
 5. npm run dev OR yarn start to test locally
