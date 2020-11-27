# RestaurantSearch

In order to connect SpringBoot to the database, please create a database named: TestCMEE and restore it using the sql file and update the application.properties file
with the corresponding username,password and port.

I couldn't integrate react component to the html files, so please access the website on react's port in order to view the UI.

Assumptions: 
  1- one user is using the app. A. column idperson should be added to the visitedRest table otherwise.
  2- a user could visit a restaurant many times a day so the checkboxes on the screen will reset everytime the page is loaded. If the user checks the wrong restaurant
  he could still uncheck the checkbox to remove it from his visited restaurants, if he didn't reload the page.
  
  
