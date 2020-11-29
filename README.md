# Avy Savvy
![skier](https://images.unsplash.com/photo-1544558660-73f0535de012?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1049&q=80)

## Project links

 - [Github Frontend link](https://github.com/hannahtrask/capstone)
 - [Github Backend Link](https://github.com/hannahtrask/capstone-backend)
 - [Vercel Link](https://avysavvy.vercel.app/)
 - [Heroku Link](https://avysavvy.herokuapp.com/)

## Project Description

Many skiers and snowboarders know what they need to know before spending a day skiing in the backcountry, but unfortunately, an app has yet to exist where you may find everything you need to know. The goal of this project is to compile all necessary information into one place. The app will be easy to use (user goes to site, clicks once, types in a search, and BAM, 10 seconds and the user has all the information they need) and emphasis will be placed on effective, easy-to-understand UI.

## Project Styling

The general theme of this project is Avalanche Data Weather App. There will be nature inspired gradients, weather icons, and charts/graphs one may find in any weather app. This will improve UI to make the app easy to navigate for the user.

- [Color Palette](https://coolors.co/0b2040-576d91-a3b9e2-e5d6e1-e8c7c9-eab8b1)

I chose three typefaces for this application. While generally speaking, it's bad practice to overuse typefaces, I believe in this circumstance many typefaces are worth it. I will be using **Kreon** as a display typeface, because it emulates styles from some ski areas resort webpages. The serif font is easy to read and bold. I will be using **Pacifico** for the footer and taglines, which is a fun brush script, because it gives a serious app a more relaxed attitude. This typeface is nspired by surf culture (which runs paralell to ski/snowboard culture at least in lifestyle and mindset). For all text that isn't a tagline, footer, or display, I'll be using **Open Sans** because its high readability, especially on screens.

- [Google Fonts](https://fonts.google.com/specimen/Kreon?query=kreon)

## Backend

Here's a lil code snippet of the Express proxy server. This sets the default route to a set of data dependent on query parameters.

```javascript
app.use(cors());
app.use((req, res, next) => {
	res.header('Access-Control-Allow-Origin', '*');
	next();
});

app.get('/request/:lat/:long', async (req, res) => {
	const { lat, long } = req.params;
	const response = await fetch(
		`http://api.powderlin.es/closest_stations?lat=${lat}&lng=${long}&data=true&days=5&count=5`
	);
	const data = await response.json();
	res.json(await data);
});

app.get('/request/:triplet', async (req, res) => {
	const { triplet } = req.params;
	const response = await fetch(
		`http://api.powderlin.es/station/${triplet}?days=5`
	);
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
| BC Welcome            | h | 2  | 1   |
| BC API Call            | h | 2  | 5   |
| BC Display            | h | 4  | 4   |
| BC Chart            | h | 3  | 2   |
| BC Image Gallery            | h | 2  | 3   |
| Deploy           | h | 1  | .5   |
| Responsiveness | h | 3 | 4 |
| Total            | h | 28 | 22.5  |

#### Backend

| Task | Priority | Estimated Time | Actual Time |
| --- | :---: |  :---:  | :---: |
| Express Server            | h | 3  | 4   |
| Heroku Deploy            | h | 2  | 2   |
| Full CRUD           | h | 3  | 1   |
| MongoDB Connection            | h | 2  | 1   |
| Express Research | h | 1 | 4 |
| Total            | h | 11 | 12  |
    
 ### Post MVP
 
  * Animations
  * SWE Change Graph
  * Ski Quote Generator
  * Resort Display
  * Resort Image Gallery
  * Resort API Call
  * Resort Chart

  ### Time Estimates
  
Upon further research, resort data requires payment, which is outside of this project's budget.

| Task | Priority | Estimated Time | Actual Time |
| ---   | :---:   |  :---:         |       :---: |
|   Animations    | m       | 5              | 2         |
| Ski Quote Generator          | h | 4  | 1.5   |
| Resort API Call            | h | 2  | n/a   |
| Resort Display            | h | 3  | n/a   |
| Resort Image Gallery            | h | 2  | n/a   |
| Resort Chart            | h | 4  | n/a   |
| Total | h       | 14             | 3.5           |

## Additional Libraries

  - [Contentful](https://www.contentful.com/get-started/)
  - [Next.js](https://nextjs.org/)
  - [Sass](https://sass-lang.com/)
  - [Chartjs](https://www.chartjs.org/)

## Code Snippet

This chunk of code is two separate fetch calls to display data on the page based on a zip code search. The zip is geocoded by Google Map API and then the latitude and longitude are assigned values. Then it queries the express proxy server (code snippet above) with the set latitudes and longitudes.

```javascript
	const handleSearch = async (zipcode) => {
		const googleApi = `https://maps.googleapis.com/maps/api/geocode/json?key=AIzaSyCMEjVA97XCiyFFpVaL1w8bFEw_KDERLuE&components=postal_code:${zipcode}`;
		const res = await fetch(googleApi);
		const json = await res.json();
		setAreaData(json.results);
		if (areaData.length > 0) {
			setLat(await areaData[0].geometry.location.lat);
			setLng(await areaData[0].geometry.location.lng);
		}
		const snotel = `https://avysavvy.herokuapp.com/`;
		const response = await fetch(snotel + `request/${lat}/${lng}`);
		const jsonObj = await response.json();
		console.log('this is jsonObj', jsonObj);
		setSnotelData(await jsonObj);
	};

```

## Running Locally

 1. Fork and clone this repo
 2. Clone into a new folder
 3. cd into the project
 4. npm i to install dev dependencies
 5. npm run dev OR yarn dev to test locally
