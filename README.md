# friend-finder
Take a small survey and find out who else matches up with you.

The app is hosted on heroku: https://friend-finder-jobi.herokuapp.com/

The app is build on express.

When the user starts the survey, the user is required to enter their name & a URL of their picture.
After submitting their survey results, the user is given a friend that match's their results.

In the backend, each user has a score. If a new user's score is closest to an existing user, then they are deemed as their new friend.
