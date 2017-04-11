Non-functional
- The web application is implemented with SpringBoot
- The database is implemented with Google Firebase
- The android client application uses the data directly from Firebase

Functional requirements
- the applications must have 3 forms:
    - Form 1 to display users
    - Form 2 to add a new user
    - Form 3 to edit an existing user
- Form navigation is done as a single page app
- If you navigate from Form 2 or Form 3 to Form 1 without any changes, Form 1 must not reload data from the cloud
- If you navigate from Form 2 or Form 3 to Form 1 and changes occurred, Form 1 must reload data from the cloud
- add a new user with name, age, sex, image
- edit an existing user
- display a list of users



