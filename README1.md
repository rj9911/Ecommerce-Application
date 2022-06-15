# Ecommerce Application
  Build and Deploy a Fully Responsive Full Stack Ecommerce React Application.

## Advanced ReactJS Practices
1. Folder and File Structure
2. Hooks and Refs

## Advanced State Management of the entire Application 
1. Using React Context API

## NextJS Best Practices
1. File-based Routing
2. Data fetching
(Server side Rendering & Static Generation(which makes your website more optimised))

## NextJS as a Backend Endpoint

## How to integrate Stripe to manage
1. Payments -> used by Stripe(Payment Gateway)
2. Products
3. Shipping Rates
4. Entire Checkout Process

## How to manage your entire content of the app using sanity
Sanity is the unified content platform to making the entire content possible.
Using this you and your Client can chenge change the Home Page by adding more Products.
Sanity allows to fucus on developing the application rather than without worrying about the file storage, content and databases.

##
Here We Using NextJS, it'll make our react Application even quicker & all products will be loads more Quickly.NextJs allows us to statically renders making them to highly efficient.

## Create NextJS App
npx create-next-app

# Update the Packages
npm install --legacy-peer-deps

# To Start the server
npm run dev

# To start the sanity
  Go to documentation
  npm install -g @sanity/cli
  sanity init
  **You can select the Project which you wnt to crte fromt he terminal**
  **Remove the '/' before the node modules in the gitignore Folder nad reload the source control**
  Explore the sanity

# ecommerce_sanity is the sanity studio. 
cd .\sanity_ecommerce\ -> Gone to sanity folder

## Commands
-> sanity start
## If Founds Error
  Then First Logout then Login Again
  and open the link in the browser other than chrome.

# To add another schema create that in the schema folder.
All the different fields are added in the product.js
Second Schema is banner.js
Add the item as Headphones and automatically Slug will be Generated.
We hv implemented the entire database by adding this item.

# Concluded the Backend using Sanity 
We hv created the schema and added the ability for the client to add content to that database.
Now imagine if you are using MERN, it takes hours to make Database. but using Sanity my backend completely made by using the schema only.

# Now starts with the Frontend part 
i.e NextJs(Framework for ReactJS), this provides the faster page loading than reactJS.

## Frontend Starts
Use self closing Components to give rough idea about the structure of the webpage
i.e **<></>**
We start making our index page i.e Frontend
With In Pages -> index.js ,
We hv shortcut to add react syntax in the index.js i.e (rafce),

If Founds an error, changes to be done in babel and eslintrc.json file

# We add Components one by one in index.js
Check the import of css file in the app.js

# Component Folder is Made
Add all the components in this and made index.js from where we export all the components. 
If founds any error Made changes in babelrc file.
**Install that Babel package also**

In index.js we hv imported the components and ready to use these components.
Included the HeroBanner, FooterBanner & start implementing them in the components.

# Link the Sanity to App
Make A folder for the Sanity clients i.e lib and get the data from sanity.

# Command
sanity manage ,
Paste the Project ID,dataset and the required things from the manager to the client.js,

We hv to create new token under API tab.
**For Security Reasons** 
We don't hv to put token in client file. we hv to put this token in another file called .env file.

# getServersideprops used to import data using the API

Print the data i.e Banner data but not found. So we hv to add data.
Go to sanity Page and the Bannerdata.
We have Created the Backend & also added the data in the sanity , And fetch the Data to the Frontend.

# Frontend is made by using NextJS

# Now we Add the Products.
Now we Can many more Products, Firstly make changes in Product.jsx file i.e we write the JSX in Product component

**Now Add the Footer Component in index.js**
Include head in the Layout Component i.e same as head component in HTML,
We can render component in App.js through props as children. and we render those children in layout.jsx

## Now Starts making the Navbar and Footer Components.
**Command for react-icons**
npm install react-icons --save

**We can make Quantity option dynamic but for now leave it to be static.**

# To add Product Details Page.
i.e when youclick onany product.
Sucessfully Rendering the ProductDetails page.

# Creating API to have product details when Clicked on Product

To hv the spacing between in desc,Product details replace details by detail.

## All things becomes dynamic, taking details using the sanity.
Now our basic webpage is done
Now starts implementing the logic i.e adding items to the cart , updating the Quantities in the cart and so on.

## ReactContext using reactstate

## Stripe is the Payment infrastructure for the internet.

Read the Documentation and understand you can any type of payment gateway.
_You can Select there any Backend or Frontend Language to work on Payments(Stripe)._

## Add the Shipping Rates in Stripe and copy the Shipping ID from there.

## Deployed by Vercel