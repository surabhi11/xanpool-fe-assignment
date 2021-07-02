# Xanpool FE Assignment

The web app has a landing page i.e Search Page where we can search for **github** users with their usernames. The results will be displayed below in cards with user profile details.
By click on the user details card, we will be redirected to user's repository list page with cards displaying repo details like repo name, created date etc.
By click on the repo details card, we will be redirected to repo details page which has all the files in the repo listed as well as the ReadMe file content rendered.

## Folder Structure

    - src/modules (containes module specific code like user, repo)
	    - src/modules/common (contains common reusable components like textfield, button, cards)
	    - src/modules/search (contains search related components, pages)
	    - src/modules/user
	    - src/modules/repo

    - src/api (module specific api's with all methods)
	    - src/api/UsersApi
	    - src/api/ReposApi
    - src/assets
	    - src/assets/css (has common style variables for colors)

## Features

 - The user and repo fields that are displayed in card are fully customisable with type support.
	 - `Supported types - text | number | boolean | link | data`
Based on the type of the field using a metadata for the field, the value is rendered in the card for example link is clickable and redirects to appropriate link.
- Reusable custom components like `Button, TextField, CardView`.
-  Loading state for all pages waiting on results.


## Commands
For running the application locally

    - git clone git@github.com:surabhi11/xanpool-fe-assignment.git
    - cd xanpool-fe-assignment/
    - npm i
    - npm run start
    - Go to http://localhost:3000/


## Future Scope

 - Extending metadata fields to support new and nested types.
 - Retaining search text on page refresh by adding as query param or state variable.
 - e2e test cases for each flow.

#### PS for typescript error update the IDE version to 4.3.4