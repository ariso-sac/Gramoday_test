# Gramoday_test
This a api implementation of a mandi system
Hello Welcome to this api test implemntation.

# Service check Url-
https://gramoday-test.herokuapp.com

# Url for posting data-
https://gramoday-test.herokuapp.com/api
Http Method Post

# Url for updating data-
https://gramoday-test.herokuapp.com/api
Http Method Post

# Url for report-
https://gramoday-test.herokuapp.com/api/<id>

#Description-
Used Express and Node Js. With MongoDb and Mongoose.
Deployed on Heroku

Some Sample Data populate to DB are-
    
    
    Request-1:
    POST /reports
    {
      "reportDetails": {
        "userID": "user-1",
        "marketID": "market-1",
        "marketName": "Vashi Navi Mumbai",
        "cmdtyID": "cmdty-1",
        "marketType": "Mandi",
        "cmdtyName": "Potato",
        "priceUnit": "Pack",
        "convFctr": 50,
        "price": 700
      }
    }
    

    Response-1:
    {
        status: "success",
        reportID: "949832f8-48c7-4cb2-8dcd-98f046a9a2e3"
    }
    
Updated Data Request by Another user.
    
    Request-2:
    POST /reports
    { 
        "reportDetails": {
          "userID": "user-2",
          "marketID": "market-1",
          "marketName": "Vashi Navi Mumbai",
          "cmdtyID": "cmdty-1",
          "cmdtyName": "Potato",
          "priceUnit": "Quintal",
          "convFctr": 100,
          "price": 1600
        }
    }

    Response-2:
    {
        status: "success",
        reportID: "949832f8-48c7-4cb2-8dcd-98f046a9a2e3"
    }

Check report auto populated-

    #Url

    https://gramoday-test.herokuapp.com/api/61030f4ecc97bc3203cf3b0d

    {"userID":"user-1","marketID":"market-1","cmdtyID":"cmdty-1","price":14,"priceUnit":"Pack","marketName":"Vashi Navi          Mumbai","marketType":"Mandi","createdAt":"2021-07-29T20:27:58.333Z","updatedAt":"2021-07-29T20:27:58.333Z","id":"61030f4ecc97bc3203cf3b0d"}

To run , clone .
Run npm install.
Update Config.js with MongoDb connection
