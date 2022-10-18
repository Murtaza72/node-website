# E-commerce WebApp

Full-Stack E-commerce Webapp complete with full-on CRUD functionality. Runs on NodeJS in the backend, with ExpressJS used for routing, ejs used for HTML templating and MongoDB used for database. Uses MVC for modern web standards and easier maintainance.

---

## Tools and Technologies:

-   **Technology** : MVC pattern, Javascript, NodeJS, EJS templating engine for server-side rendering
-   **Cloud Service Provider**: Heroku
-   **Database** : MongoDB
-   **CDN for Image Data** : Cloudinary

---

## Functionality

1. User can register themselves on the website through the login form.

2. **CRUD Operations**:

-   User can add product to their cart
-   User can delete the products in their cart
-   User can order the products in their cart
-   User can generate invoice pdfs for the orders they created and download them

-   User can add product to the global product list
-   User can upload image for the product
-   User can edit the product details for the ones they added
-   User can delete the product from the list

3. **Security**:

-   Website is immune to CSRF(Cross Site Forgery Request) attacks
-   One user cannot create, update or delete data on behalf of other user

4. **Error**:

-   404 page is served if user tries to load unrecognized route
-   500 page is served if something wrong happens on the server side

5. Pagination for better User Interface and Experience and also to reduce the load on the DB.

---

## For Use

-   To compile the code, you will need to have NodeJS installed in your local environment.
-   You will to need to create a free mongodb account for database usage. Appropriate credentials then need to be inserted in app.js in the MONGODB_URI.
