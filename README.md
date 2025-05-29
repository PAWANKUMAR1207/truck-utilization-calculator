# 🚚 Truck Utilization Calculator

A web-based application to calculate truck utilization efficiency based on SKU dimensions and truck capacity. Built using **Node.js**, **Express**, **HTML**, **Tailwind CSS**, and **Chart.js**, it helps businesses assess how well their trucks are utilized by volume and weight.

---

## 🔧 Features

- ✅ Add multiple SKUs with Name, Quantity, Volume, Weight, and Destination
- ✅ Choose from preset truck types or define a custom truck
- ✅ Calculates volume and weight utilization per destination
- ✅ Displays warnings for under-utilization (below 70%)
- ✅ AI-inspired ratings: **Excellent**, **Good**, **Moderate**, **Poor**
- ✅ Bar chart visualization using Chart.js
- ✅ Export utilization summary as CSV
- ✅ Mobile-responsive layout using Tailwind CSS


Install dependencies 
npm install


Start The server
node server.js



Then open your browser and go to:
http://localhost:4000


Future Enhancments 
Will integrate this to Mongodb and also add better UI including dark mode 
Will also use a local database incase of a Mongodb Failure 


There is also a style.css page in this project which we are not currently using as there is a integrated style in the tailwind CSS which is more than enough for this project.



Project Structure
truck-utilization-calculator/
├── public/
│   └── index.html           # Main frontend
├── server.js                # Express backend
├── logic.js                 # Utilization calculation logic
├── README.md                # Project documentation
├── package.json             # Project configuration>


The node modules will be automatically downloaded once you instal dependencies using npm install
File should be stored in the structure given 
We can remove the style.css file 

Try to use the strucutre given ,future enhancments will be done soon 

Any errors reach out to cheerfulpawan@gmail.com
