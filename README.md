# oceancy

<br>

[Live Demo](https://oceancy.netlify.app/login)

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


# Server / Backend


## Models

User model

```javascript
{
  fullName: {type: String, required: true, unique: true},
  email: {type: String, required: true, unique: true},
  password: {type: String, required: true},
  favoriteActivity: {type: String},
  level : {type: String},
  isAdmin : {type :Boolean,default :false},
  activitiesHosting: [{type: Schema.Types.ObjectId, ref: "Activity"}],
  activitiesAttending: [{type : Schema.Types.ObjectId, ref: "Activity"}],
}
```

Session model

```javascript
{
  userId: [{type: Schema.Types.ObjectId,ref:'User'}],
  dateCreated : [{type: Date'}],
}
```

Destination model

```javascript
 {
   name: {type: String, required: true},
   photoUrl: {type: String},
 }
```

Activity model

```javascript
{
  name: {type: String, required: true},
  description: {type: String, maxlength : 500},
  type: {type: String, required: true},
  startDate :{type: Date,default: Date.now,required :true},
  endDate   :{type: Date,default: Date.now,required :true},
  price: {type: String, required: true},
  address: {type: String},
  destination: {type: String},
  photoUrl: {type: String},
  host: {type: Schema.Types.ObjectId, ref: 'User'},
  attendees: [{ type: Schema.Types.ObjectId, ref: 'User' }], 
  
  },

```



<br>

## API Endpoints (backend routes)

| HTTP Method | URL                         | Request Body                 | Success status | Error Status | Description                                                  |
| ----------- | --------------------------- | ---------------------------- | -------------- | ------------ | ------------------------------------------------------------ |
| GET         | `/auth/profile    `           | Saved session                | 200            | 404          | Check if user is logged in and return profile page           |
| POST        | `/auth/signup`                | {name, email, password}      | 201            | 404          | Checks if fields not empty (422) and user not exists (409), then create user with encrypted password, and store user in session |
| POST        | `/auth/login`                 | {username, password}         | 200            | 401          | Checks if fields not empty (422), if user exists (404), and if password matches (404), then stores user in session |
| POST        | `/auth/logout`                | (empty)                      | 204            | 400          | Logs out the user                                            |
| GET         | `/activities`                |                              |                | 400           | Show all activities                                         |
| GET         | `/activites/:id`              | {id}                         |                |              | Show specific activity                                    |
| POST        | `/activities/add`               | {}                           | 201            | 400          | Create and save a new activity                            |
| PUT         | `/activities/edit/:id`          | {name,img,description}       | 200            | 400          | edit activity                                            
| DELETE      | `/activities/delete/:id`         | {id}                         | 201            | 400          | delete activity                                            |
| GET         | `/profile`                    |                              |                | 400          | show profile                                                |
| GET         | `/profile/:id`                | {id}                         |                |              | show others' profile                                        |
| PUT         | `/profiles/edit/:id`           | {name,img}                   | 201            | 400          | edit and update profile                                                 |
| GET         | `/home`                       |                              | 201            | 400          | show home                                                   |
| GET         | `/home/search`                | {searchQuery}                |                |              | show specific query                                          |


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



