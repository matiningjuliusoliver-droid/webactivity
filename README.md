# webactivity
1.Why did we put BASE_URI in .env instead of hardcoding it? Answer: We put the BASE_URI in the .env file to keep sensitive configuration secure and to allow easy changes across different environments without modifying the source code.

2.Why did we use plural nouns (e.g., /dishes) for our routes? Answer: We used plural nouns because RESTful APIs represent collections of resources, which makes endpoint naming consistent, standard, and easier to understand.

3.When do we use 201 Created vs 200 OK? Answer: We use 201 Created when a new resource is successfully added to the server, while 200 OK is used when a request is successful but does not create anything, such as retrieving or updating data.

Why is it important to return 404 Not Found instead of just an empty array or a generic error? Answer:Returning 404 Not Found clearly informs the client that the requested resource does not exist, preventing confusion and making error handling more accurate.

why did i choose embed the [Review/Tag/Log]?

Answer: I chose to embed the Review/Tag/Log because they are closely related to the main resource and are usually accessed together, which improves performance by reducing extra API calls

why did i choose to reference the [Chef/User/Guest] Answer:I chose to reference the Chef/User/Guest because they are independent entities that can be used across multiple records, so referencing avoids duplicating their data and keeps the database normalized.

Authentication vs Authorization:
o What is the difference between Authentication and Authorization in our
code?
o Answer: Authentication verifies the identity of a user (e.g., checking email and password during login). Authorization determines what the authenticated user is allowed to access or do in the system. In the code, authentication happens during login while authorization is handled by middleware that restricts access to protected routes.
2. Security (bcrypt):
o Why did we use bcryptjs instead of saving passwords as plain text in
MongoDB?
o Answer:We used bcryptjs to hash passwords before saving them in MongoDB so the real passwords are never stored in plain text. Hashing makes it very difficult for attackers to recover the original password even if the database is compromised. This adds an important layer of security to user authentication.
3. JWT Structure:
o What does the protect middleware do when it receives a JWT from the
client?
o Answer:The protect middleware reads the JWT sent by the client (usually in the Authorization header) and verifies it using the secret key. If the token is valid, it extracts the user information from the token payload and attaches it to the request object. If the token is missing or invalid, the middleware blocks access to the protected route.
