# Kafene-project-edyoda
Live Preview => https://kafene-project-edyoda.vercel.app

## Stacks used => HTML, CSS, JavaScript and jQuery
# The web app contains 4 pages:
* It's a store management system for a pharmacy. It lets you track orders, inventory and customers in Page.
* Order Listing Page
* Product Listing Page
* User Listing Page

# Functionality:
* The login form has only one validation which is “username and password should be the same”.
* If the values differ then displayed an alert which says, “Please enter valid credentials!”
* If the values are the same then displayed an alert which says, “Login Successful” and redirect to the orders page.

# Order Listing Page Functionality:
* On page load sent a call to the backend to fetch all the orders.
* Users should be able to filter using the checkboxes based on order status which can be New, Packed, InTransit and Delivered.

# Product Listing Page Functionality:
* On page load sent a call to the backend to fetch all the products.
* Users should be able to filter the products using the checkboxes based on expiry and stock.	
* A product is expired if the expiry date is less then current date.
* A product is low stock if the stock count is less than 100.

# User Listing Page Functionality:
* On page load sent a call to the backend to fetch all the users.
* The admin should be able to search users based on the first and last name.
* Search should work only when the characters entered are 2 or more.
* If the admin tries to search a user by typing less than 2 characters then displayed an alert which says, “Please enter at least 2 characters”
* On a successful search API call, the table should show only the search results.
* On the Reset button click, reset the search field and show all the users.
