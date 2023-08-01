<h1>About this project </h3><img src="https://img.shields.io/badge/status-in%20progress-green">

<p>
  This is the updated version of my <strong><a href="https://github.com/HenrikeStahlhut/capstone-project">final project</a></strong> for the web development bootcamp i did with <a href="https://www.neuefische.de/en">neuefische</a>. 
  <br/>
  Refactoring the whole project gave me new perspectives on my code, especially on the backend side. I also got to improve my components and how i want the features to work. In addition to the new features and upgrading to a responsive design, I worked with Typescript, Prisma and Postgres this time. 
</p>

<br/>

## 🌱 Introducing PlantPal: your personal houseplant companion 
Transform the way you nurture and care for your beloved houseplants with PlantPal, the app designed to help you track, 
manage, and grow your indoor plants. Whether you're a seasoned plant enthusiast or just starting your green journey, 
PlantPal will be your trusted companion every step of the way.

![Plant-Pal_Screenshots](https://github.com/HenrikeStahlhut/plant-pal-dirty/assets/126799897/0aee665e-7816-407a-9bea-7d9a318211aa)


<br/>

## Planned Features
Since the project is still in progress, here are some features I plan to implement in the near future:
- additional information for every plant, like  info about, watering, soil, light conditions etc.
- custom image for each plant
- working todos
  - adding todos to rooms/plants
  - watering and repotting schedules with a todo plan, so every plant gets the care it needs
  - reminders for your todos

<br/>

## Built with
[![Built with](https://skillicons.dev/icons?i=react,nextjs,ts,styledcomponents,prisma,postgres)](https://skillicons.dev)

<br/>

## Find me here: 
<a href="https://www.linkedin.com/in/henrike-stahlhut-389238249/">![LinkedIN](https://skillicons.dev/icons?i=linkedin)</a>

<br/>

##  Local setup
1. Copy the `.env.example` file and name it `.env`, it already contains the database connection details for running the project locally
2. Run `docker compose up -d` to start the database in the background
3. Run `pnpm run db:migrate` to run the migrations for the local database
4. Start the server via `pnpm run start:dev` and go to: [http://localhost:3000/plants](http://localhost:3000/plants)



