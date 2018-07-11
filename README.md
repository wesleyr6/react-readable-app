# Readable Project
This is the final assessment project for Udacity's React Fundamentals course using React + Redux.

We will build a web application for content and comments. The App will allow the users to post content in pre-defined categories, comment on their own posts and those of other users, and vote on posts and comments. Users can edit and delete posts and comments.

## Instructions
To get started developing right away:

###Server
* cd /server
* install all project dependencies with `npm install`
* start the development server with `npm start`

### Client
* cd /client
* install all project dependencies with `npm install`
* start the development server with `npm start`

Notice:
* API server will be available on port 3001
* UI server will be available on port 3000

## Server
The `./src/server` folder is powered by [Udacity](https://github.com/udacity/reactnd-project-readable-starter)

## Requirements
Home Page
* Should be shown all the posts from all categories available
* Should be shown all the posts sorted by voteScore (higher)
* Should allow the posts to be sorted by voteScore and date created
* Should be a behavior to add new posts

Category View
* The same as the main view but ordered to include only the posts from the selected category

Post Details View
* Should be shown the post details, including: title, body, author, data created and voteScore
* Should be shown all the comments from that post sorted by voteScore (higher)
* Should be a behavior to edit or remove the post
* Should be a behavior to add a new comment
* Should be a behavior to edit or remove the comment

Create/Edit View
* Should be shown a form to create new posts or edit them

Routing
* Should allow the users to navigate between the pages (Home, Categories, Create/Edit and Post Details)
