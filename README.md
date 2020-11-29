# oceancy

<br>

[Live Demo](https://oceancy.netlify.app)

## Description

A travel app to find attractive water-activities to attend as well as networking with those users.

## User Stories

- **404** - As a user I want to see a nice 404 page when I go to a page that doesn’t exist so that I know it was my fault 										
- **500** - As a user I want to see a nice error page when the super team screws it up so that I know that is not my fault										
- **homepage** - As a user I want to be able to access the root and be redirected to where I need to be										
- **sign up** - As a user I want to sign up on the webpage so that I can see all the activities that I could attend										
- **login** - As a user I want to be able to log in on the webpage so that I can get back to my account										
- **logout** - As a user I want to be able to log out from the webpage so that I can make sure no one will access my account										
- **destinations list** - As a user I want to see all the destinations available to see activities tailored to my location										
- **activities list** - As a user I want to see all the activities available so that I can choose which ones I want to attend										
- **type list** - As a user I want to see all the activities searched by type, so I can see activities tailored to my interests										
- **activities create** - As a user I want to create an activity so that I can invite others to attend										
- **activities edit** - As a user I want to be able to edit activities that I've created										
- **activities detail** - As a user I want to see the activity details and attendee list of one activity so that I can decide if I want to attend 								
- **activity attend** - As a user I want to be able to attend to activity so that the organizers can count me in										
- **user profile** - As a user I want to be able to update my personal information, change my photo and see my activities										

## Backlog

User profile:
- add geolocation to events when creating
- add payment methods
- add chat


<br>


# Client / Frontend

## React Router Routes (React App)
| Path                      | Component            | Permissions                 | Behavior                                                     |
| ------------------------- | -------------------- | --------------------------- | ------------------------------------------------------------ |
| `/`                       | HomePage             | public `<Route>`            | Home page                                                    |
| `/signup`                 | SignupPage           | anon only  `<AnonRoute>`    | Signup form, link to login, navigate to login after signup   |
| `/login`                  | LoginPage            | anon only `<AnonRoute>`     | Login form, link to signup, navigate to homepage after login |
| `/destination`            | DestinationListPage  | user only `<PrivateRoute>`  | Shows all destinations in a list                             |
| `/activity`               | ActivityListPage     | user only `<PrivateRoute>`  | Creates an activity                                          |
| `/activity/add`           | ActivityCreatePage   | user only `<PrivateRoute>`  | Creats an activity.                                          |
| `/activity/:id`           | ActivityDetailPage   | user only `<PrivateRoute>`  | Details of an activity to book or cancel the booking         |
| `/activity/:id`           | ActivityDetailPage   | user only `<PrivateRoute>`  | Details of a tournament to edit or delete it                 |
| `/user/:id`               | ProfilePage          | user only `<PrivateRoute>`  | User profile page                                            |
| `/user/:id/edit`          | ProfileEditPage      | user only `<PrivateRoute>`  | User edit page                                               |




## Components

- HomePage

- LoginPage

- SignupPage

- Navbar

- Footer

- DestinationListPage

- ActivitiesListPage

- ActivityDetailPage

- ActivityCreatePage

- UserProfile

- UserEdit





 

## Services

- Auth Service

  - auth.login(user)
  - auth.signup(user)
  - auth.logout()
  
- Destination Service
 
  -destination.list()
  
- Activity Service

  - activity.list()
  - activity.detail(id)
  - activity.add(id)
  - activity.delete(id)
  - activity.cancel(id)
  
- User Service 

  - user.profile(id)
  - user.edit(id)



<br>




## Links

### Trello/Kanban

[Link to your trello board](https://trello.com/b/iQixIKJd/oceancy) 


### Git

The url to your repository and to your deployed project

[Client repository Link](https://github.com/cris-developer/oceancy-client)

[Server repository Link](https://github.com/cris-developer/oceancy-server)

[Deployed App Link](http://heroku.com)

### Slides

The url to your presentation slides

[Slides Link](http://slides.com)



