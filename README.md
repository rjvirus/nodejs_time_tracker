You can use this by downloading the zip file and extracting it.

**IMPORTANT

Please create a new file with the name .env in the root of the project and copy the following content into the file :

DB_ACCESS = "mongodb+srv://username:password@cluster0.a610m.mongodb.net/sample_incloud?retryWrites=true&w=majority"

where,
username = rjvirus ; password = admin

_____________________________________________________________________________________________________

Now, we need to run npm install in the terminal to get all the libraries
Secondly, we need to run 'npm run start' in terminal to run the server

Server usually loads in localhost:4000

Also we have to make sure npm and node is installed in the system before running this app.

Express JS is used to setup routes for request in the application.

Improvements that can be made :-

1. Error handling could be much better.
2. Implementation of search and pagination query in one single request could be effective for effective communication between client and server.
3. Proper response with HTTP status codes can be effective for client to understand what could be the issue for the failure.
 
