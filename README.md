Instructions -
login with : email- tim@mail.com , password - itstim
____________________________

Frontend -
https://some-frontend.vercel.app/

React and Redux
Redux to store the user
Routes - 
/ - makes get request to backend to get all feedbacks
/login - to login and get token through cookie

after login user is stored in redux,
Once user is logged in we can give feedback passing in title, description and name(optional)

Deployed on Vercel 

___________________________

Backend -
store, login user
authentication using http only cookie 

https://some-backend-task.onrender.com/api/feedback

routes - 
/login - login
/user - to check and return user checking the cookie token
/feedback - get & post requests on /feedbaack to get all feedbacks and post feedback



