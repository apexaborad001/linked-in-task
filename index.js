// const express = require('express');
// const app = express();
// const cors =require("cors")
// // const session = require('express-session');
// const  cookieSession = require('cookie-session')
// // const GoogleStrategy=require("passport-google-oauth2").Strategy
// const passport = require('passport');
// // const LinkedInStrategy = require('passport-linkedin-oauth2').Strategy;
// const routes = require('./router/googleroute');
// app.use(cors())
// app.use(express.json())
// const config = require('./config/googleconfig')

// const { app } = require("firebase-functions/v1");
// const multer = require("multer");



// app.use(cookieSession({
//   name: 'session',
//   keys: ["key1","key2"],

//   // // Cookie Options
//   // maxAge: 24 * 60 * 60 * 1000 // 24 hours
// }))
// // app.set('view engine', 'ejs');

// // app.use(session({
// //   resave: false,
// //   saveUninitialized: true,
// //   secret: 'SECRET'
// // }));

// app.use(passport.initialize());
// app.use(passport.session());

// // passport.serializeUser(function (user, cb) {
// //   cb(null, user);
// // });

// // passport.deserializeUser(function (obj, cb) {
// //   cb(null, obj);
// // });

// // passport.use(new GoogleStrategy({
// //   clientID: config.linkedinAuth.clientID,
// //   clientSecret: config.linkedinAuth.clientSecret,
// //   callbackURL: config.linkedinAuth.callbackURL,
// //   scope: ['r_emailaddress', 'r_liteprofile'],
// // }, function (token, tokenSecret, profile, done) {
// //   return done(null, profile);
// // }
// // ));

// app.use('/', routes);

// const port = 3000 || process.env.port;

// app.listen(port, () => {
//   console.log('App listening on port ' + port);
// })

// // const express = require('express');
// // const bodyParser = require('body-parser');
// // const routes = require('./router/slack');

// // const app = express();

// // app.use(bodyParser.json());
// // app.use(bodyParser.urlencoded({ extended: true }));

// // app.get('/', (req, res) => {
// //     res.json({ message: 'The app is running...'})
// // })

// // app.use('/api', routes);


// // const port = 3000 || process.env.port;

// // app.listen(port, () => {
// //   console.log('App listening on port ' + port);
// // })

// module.exports = app;


// const server = require('./router/slack');

// server.listen(3000, () => console.log(`app listening at http://localhost:3000`));

// const axios = require('axios');

// const slackToken = 'xoxb-1170447188626-3262057339574-esZsWV8eIky7dwY0g9goIu0C';
// const slackToken = 'xoxp-1170447188626-2840180000469-3275966118516-6e20f9a4949317acae370b7bcbb09893';


// run().catch(err => console.log(err));

// async function run() {
//   const url = 'https://slack.com/api/chat.postMessage';
//   const res = await axios.post(url, {
//     channel: '#test',
//     text: 'break'
//   }, { headers: { authorization: `Bearer ${slackToken}` } });

//   console.log('Done', res.data

// );
// }


// async function run() {
//   const url = 'https://slack.com/api/usergroups.create';
//   const res = await axios.post(url, {
//     name: '#test',
//     text: 'test channel'
//   }, { headers: { authorization: `Bearer ${slackToken}` } });

//   console.log('Done', res.data

// );
// }

// const express = require('express');
// const app = express();
// const session = require('express-session');
// const passport = require('passport');
// const LinkedInStrategy = require('passport-linkedin-oauth2').Strategy;
// const routes = require('./router/router');
// const config = require('./config/config')

// app.set('view engine', 'ejs');

// app.use(session({
//   resave: false,
//   saveUninitialized: true,
//   secret: 'SECRET'
// }));

// app.use(passport.initialize());
// app.use(passport.session());

// passport.serializeUser(function (user, cb) {
//   cb(null, user);
// });

// passport.deserializeUser(function (obj, cb) {
//   cb(null, obj);
// });

// passport.use(new LinkedInStrategy({
//   clientID: config.linkedinAuth.clientID,
//   clientSecret: config.linkedinAuth.clientSecret,
//   callbackURL: config.linkedinAuth.callbackURL,
//   scope: ['r_emailaddress', 'r_liteprofile'],
// }, function (token, tokenSecret, profile, done) {
//   return done(null, profile);
// }
// ));

// app.use('/', routes);

// const port = 3000;

// app.listen(port, () => {
//   console.log('App listening on port ' + port);
// });

// const { Client } =  require('linkedin-private-api');

// (async () => {
//   const client = new Client();
  
//   await client.login.userPass({
//     username: "apexaborad1234@gmail.com",
//     password: "apexa#0812"

//     })
//     console.log("Done!")

//     const [
//       [{ company: google }],
//       [{ company: microsoft }],
//       [{ company: facebook }],
//       [{ company: linkedin }]
//     ] = await Promise.all([
//       client.search.searchCompanies({ keywords: 'Google' }).scrollNext(),
//       client.search.searchCompanies({ keywords: 'Microsoft' }).scrollNext(),
//       client.search.searchCompanies({ keywords: 'Facebook' }).scrollNext(),
//       client.search.searchCompanies({ keywords: 'LinkedIn' }).scrollNext()
//     ]);
//     console.log("Done!")


//     const countryCode = '101620260';
// const networkType = 'S';
// const companyIds = [
//   google.companyId,
//   microsoft.companyId,
//   facebook.companyId,
//   linkedin.companyId
// ];

// const peopleScroller = client.search.searchPeople({
//   filters: {
//     currentCompany: companyIds,
//     geoUrn: countryCode,
//     network: networkType
//   }
// });

// A utility function for waiting between requests
// const wait = seconds => new Promise(res => setTimeout(res, seconds * 1000));

// Will return the first 10 search hits.
// let searchHits = await peopleScroller.scrollNext();

// for (searchHit of searchHits) {
//   let { profile } = searchHit;
//   await client.invitation.sendInvitation({
//     profileId: profile.profileId,
//     trackingId: profile.trackingId
//   })
  
//   await wait(3);
// }

// let searchHits;
// let counter = 0;

// while ((searchHits = await peopleScroller.scrollNext()) && searchHits.length) {
//   for (const searchHit of searchHits) {
//     const { profile } = searchHit;
 
//     await client.invitation.sendInvitation({
//       profileId: profile.profileId,
//       trackingId: profile.trackingId
//     });
//     await wait(3);
//   }
  
//   if (counter === 3) {
//     counter = 0;
//     await wait(1800);
//   } else {
//     counter++;
//     await wait(10);
//   }
// }

// const connectionsScroller = client.search.searchOwnConnections({
//   filters: {
//     currentCompany: companyIds,
//     in :"91"
//   }
// });
// console.log("Done!")

// const connections = await connectionsScroller.scrollNext();
// console.log(connections)


// const connections = await connectionsScroller.scrollNext()

// for (const connection of connections) {
//   const { profile } = connection;
  
//   const [conversation] = await client.conversation.getConversations({
//     recipients: profile.profileId
//   }).scrollNext();
  
//   if (!conversation) {
//    // send a message
   
//     const message = `hey!!
//     Thank you for connecting!
//     My name is Apexa. I'm a software engineer and I'm looking for my next challenge :)
//     I'm sending this message using a LinkedIn bot I've created in NodeJS that wraps the LinkedIn private API.`;

//   await client.message.sendMessage({
//   profileId: profile.profileId,
//   text: message
// });
// console.log("final")
//   }
 
//   await wait(3);
// }

//   })()

// const buildMessage = profile => `
// Hey ${profile.firstName},
// Thank you for connecting!
// My name is ${MY_NAME}. I'm a software engineer and I'm looking for my next challenge :)
// I'm sending this message using a LinkedIn bot I've created in NodeJS that wraps the LinkedIn private API.
// You can have a look at the source code here: ${GITHUB_LINK}.
// You can also view my CV here: ${CV_LINK}
// Thanks,
// ${MY_NAME}
// `;

// const sendMessages = async (client, companyIds) => {
//   let connections;
//   let counter = 0;
  
//   const connectionsScroller = client.search.searchOwnConnections({
//     filters: {
//       currentCompany: companyIds,
//       geoUrn: COUNTRY_CODE
//     }
//   });
  
//   while ((connections = await connectionsScroller.scrollNext()) && connections.length) {
//     for (const connection of connections) {
//       const { profile } = connection;
      
//       const [conversation] = await client.conversation.getConversations({
//         recipients: profile.profileId
//       }).scrollNext();
      
//       if (!conversation) {
//         const message = buildMessage(profile);
//         await client.message.sendMessage({
//           profileId: profile.profileId,
//           text: message
//         });
        
//         counter ++;
//         await wait(5);
//       }
//     }
    
//     if (counter === 30) {
//       counter = 0;
//       await wait(600);
//     } else {
//       await wait(10);
//     }
//  }
  
//  console.log('Finished processing all connections!');
// }





//this code is working fine for auth and fetching public profile....
// let { Client } = require('linkedin-private-api');

// const username = "apexaborad1234@gmail.com" ;
// const password = "apexa#0812" ;

// (async () => {
//   // Login
//   const client = new Client();
//   await client.login.userPass({ username, password });
  
//   // Search for React development jobs in Israel
//   const jobsScroller = await client.search.searchJobs({
//     keywords: 'React',
//     filters: { location: 'Israel' },
//     limit: 20,
//     skip: 5,
//   });

//   const [someReactJobHit] = await jobsScroller.scrollNext();
//   const jobCompanyName = someReactJobHit.hitInfo.jobPosting.companyDetails.company.name;

//   // Fetch the job's company
//   // const companiesScroller = await client.search.searchCompanies({ keywords: jobCompanyName });
//   // const [{ company: jobCompany }] = await companiesScroller.scrollNext();

//   // Search for profiles and send an invitation
//   const peopleScroller = await client.search.searchPeople({
//     keywords: 'software'
//   });
//   const [{ profile: billGates }] = await peopleScroller.scrollNext();
//   // const [{profile: hetvivansia }]=await peopleScroller.scrollNext()
//   // console.log( await peopleScroller.scrollNext())//this line is for public profile ...............
  
//   await client.invitation.sendInvitation({
//     profileId: billGates.profileId,
//     trackingId: billGates.trackingId,
//   });
//   const searchHits = await peopleScroller.scrollNext();
//   // console.log(searchHits)
//   // Search in my connections
//   const ownConnectionsScroller = await client.search.searchOwnConnections({ keywords: 'Bill Gates', limit: 1 });
//   const connections = await ownConnectionsScroller.scrollNext();

//   // Get conversation
//   const [billConversation] = await client.conversation.getConversations({
//     recipients: billGates.profileId
//   }).scrollNext();

//   console.log(billGates.profileId)
 
//   const conversationMessages = await client.message.getMessages({
//     conversationId: billConversation
//   }).scrollNext()
 
//   // Send a message
//   const sentMessage = await client.message.sendMessage({
//     profileId: billGates.profileId,
//     text: 'Hey Bill!',
//   });
//   console.log("msg send!!")
// })();

// const express = require("express")
// const {webhookClient} = require("dialogflow-fulfillment")
// const mongoose = require("mongoose")
// const app = express()
// const subRoute = require("./router/subscriptionroute")
// app.get('/', (req, res) => {
//     res.send("Server Is Working......")
// })
// app.post('/webhook', (req, res) => {
    // get agent from request
    // let agent = new WebhookClient({request: req, response: res})
    // create intentMap for handle intent
    // let intentMap = new Map();
    // add intent map 2nd parameter pass function
    // intentMap.set('webhook-demo',handleWebHookIntent)
    // now agent is handle request and pass intent map
    // agent.handleRequest(intentMap)
// })
// function handleWebHookIntent(agent){
//     agent.add("Hello I am Webhook demo How are you...")
// }
/**
* now listing the server on port number 3000 :)
* */


// const dbURI="mongodb+srv://arti:arti1234@cluster0.yj4az.mongodb.net/sub?retryWrites=true&w=majority"


// app.use(express.json())
// app.use("/req",subRoute)




// mongoose.connect(dbURI , {useNewUrlParser: true}).then(()=>{
//     console.log("connection sucessfully")
// }).catch((error)=>{
//     console.log("not connnected"+error)
// })

// port = process.env.PORT || 3000
// app.listen(3000, () => {console.log("Server started: 3000")})



// const express = require('express')
// // will use this later to send requests
// const http = require('http')
// // import env variables
// require('dotenv').config()

// const app = express()
// const port = process.env.PORT || 3000

// app.use(express.json())
// app.use(express.urlencoded({ extended: true }))

// app.get('/', (req, res) => {
// 	res.status(200).send('Server is working.')
// })

// app.listen(port, () => {
// 	console.log(`🌏 Server is running at http://localhost:${port}`)
// })

// app.post('/getmovie', (req, res) => {
// 	const movieToSearch =
// 		req.body.queryResult && req.body.queryResult.parameters && req.body.queryResult.parameters.movie
// 			? req.body.result.parameters.movie
// 			: ''

// 	const reqUrl = encodeURI(
// 		`http://www.omdbapi.com/?t=${movieToSearch}&apikey=${process.env.API_KEY}`
// 	)
// 	http.get(
// 		reqUrl,
// 		responseFromAPI => {
// 			let completeResponse = ''
// 			responseFromAPI.on('data', chunk => {
// 				completeResponse += chunk
// 			})
// 			responseFromAPI.on('end', () => {
// 				const movie = JSON.parse(completeResponse)

// 				let dataToSend = movieToSearch
// 				dataToSend = `${movie.Title} was released in the year ${movie.Year}. It is directed by ${
// 					movie.Director
// 				} and stars ${movie.Actors}.\n Here some glimpse of the plot: ${movie.Plot}.
//                 }`

// 				return res.json({
// 					fulfillmentText: dataToSend,
// 					source: 'getmovie'
// 				})
// 			})
// 		},
// 		error => {
// 			return res.json({
// 				fulfillmentText: 'Could not get results at this time',
// 				source: 'getmovie'
// 			})
// 		}
// 	)
// })



// const functions = require('firebase-functions');
// const cors = require('cors')({ origin: true});
// const admin = require('firebase-admin');
// const serviceAccount = require('./service-account.json');

// admin.initializeApp({
//   credential: admin.credential.cert(serviceAccount),
//   databaseURL: "https://fireship-lessons.firebaseio.com"
// });

// const { SessionsClient } = require('dialogflow');


// exports.dialogflowGateway = functions.https.onRequest((request, response) => {
//   cors(request, response, async () => {
//     const { queryInput, sessionId } = request.body;


//     const sessionClient = new SessionsClient({ credentials: serviceAccount  });
//     const session = sessionClient.sessionPath('your-project', sessionId);


//     const responses = await sessionClient.detectIntent({ session, queryInput});

//     const result = responses[0].queryResult;

//     response.send(result);
//   });
// });

// const { WebhookClient } = require('dialogflow-fulfillment');

// exports.dialogflowWebhook = functions.https.onRequest(async (request, response) => {
//     const agent = new WebhookClient({ request, response });

//     const result = request.body.queryResult;


//     async function userOnboardingHandler(agent) {

//      // Do backend stuff here
//      const db = admin.firestore();
//      const profile = db.collection('users').doc('jeffd23');

//      const { name, color } = result.parameters;

//       await profile.set({ name, color })
//       agent.add(`Welcome aboard my friend!`);
//     }


//     let intentMap = new Map();
//     intentMap.set('UserOnboarding', userOnboardingHandler);
//     agent.handleRequest(intentMap);
// });
// .....................screeen 9 to 21.......
// const mongoose= require("mongoose")
// const express =require("express")
// const port =  process.env.PORT || 3030
// const bodyParser = require("body-parser")
// const cors = require("cors")
// const { urlencoded } = require("body-parser")
// const app = express()
// mongoURI= "mongodb+srv://arti:arti1234@cluster0.yj4az.mongodb.net/loginapi?retryWrites=true&w=majority"
// mongoose.connect(mongoURI, {useNewUrlParser: true})
// .then(res => console.log(`Connection Succesful ${res}`))
// .catch(err => console.log(`Error in DB connection ${err}`));
// app.use(bodyParser.urlencoded({extended:false}))
// app.use(bodyParser.json())
// app.get("/",(req,res)=>{
// 	res.send("hiii, from server")
// })
// const memberRouter= require("./router/screen11r")
// app.use("/",memberRouter)
// const userRouter=require("./router/9")
// app.use("/",userRouter)
// const organizationRouter = require("./router/organization_management_r")
// app.use("/",organizationRouter)
// const useractivityRouter = require("./router/useractivity_r")
// app.use("/",useractivityRouter)
// const org_analytics = require("./router/org_analytics_r")
// app.use("/",org_analytics)
// const settingRouter= require("./router/setting_r")
// app.use("/",settingRouter)
// const helprouter =require("./router/help_r")
// app.use("/",helprouter)
// const channelrouter = require("./router/channel_integration")
// app.use("/",channelrouter)
// const entitiesGlobal = require("./router/entities_global")
// app.use("/",entitiesGlobal)
// const createaChannelRouter=require("./router/create_a_channel_r")
// app.use(createaChannelRouter)
// const responselib =require("./router/response_lib")
// app.use(responselib)
// const createEntitiesCustom = require("./router/entities_custom")
// app.use(createEntitiesCustom)
// const Coordinator=require("./router/coordinator")
// app.use("/",Coordinator)
// const brains = require("./router/brains")
// app.use("/",brains)
// const accesskey=require("./router/accesskey")
// app.use("/",accesskey)
// app.listen(port,()=>{
// 	console.log("server is running on 3030 ")
// })


// ..........................................

// const http = require("http")
// const util = require('util')

// const formidable = require("formidable")
// const express = require('express');
// const cloudinary= require("cloudinary")
// require('dotenv').config()
// const app = express();

// cloudinary.config({
//     cloud_name: process.env.CLOUD_NAME,
//     api_key: process.env.API_KEY,
//     api_secret: process.env.API_SECRET

// })

// app.get('/', (req, res) => {
//     res.send(`
//       <h2>With <code>"express"</code> npm package</h2>
//       <form action="/api/upload" enctype="multipart/form-data" method="post">
//         <div>Text field title: <input type="text" name="title" /></div>
//         <div>File: <input type="file" name="someExpressFiles" multiple="multiple" /></div>
//         <input type="submit" value="Upload" />
//       </form>
//     `);
//   });
  
//   app.post('/api/upload', (req, res, next) => {
//     const form = formidable({ multiples: true });
  
//     form.parse(req, (err, fields, files) => {
//       if (err) {
//         next(err);
//         return;
//       }
//       res.json({ fields, files });
//     });
//   });
  
 
const multer = require("multer")
const fileupload = multer()
const cloudinary = require('cloudinary').v2
const streamifier = require('streamifier')

cloudinary.config({
        cloud_name: process.env.CLOUD_NAME,
        api_key: process.env.API_KEY,
        api_secret: process.env.API_SECRET
    
    })
app.post('/upload',fileupload.single('image'),function(req,res,next){
    let streamUpload = (req)=>{
        return new Promise((resolve,reject)=>{
            let stream = cloudinary.uploader.upload_stream(
                (error,result)=>{
                    if(result){
                        resolve(result)
                    }else{
                        reject(error)
                    }
                }
            )
            streamifier.createReadStream(req.file.buffer).pipe(stream)
        })
    }

    async function upload(req){
        let result = await streamUpload(req)
        console.log(result)
        res.send(result)
        }
        upload(req)
    }
)
app.listen(3000, () => {
        console.log('Server listening on http://localhost:3000 ...');})
    

// const mongoose= require("mongoose")
// const express =require("express")
// const port =  process.env.PORT || 3030
// const bodyParser = require("body-parser")
// const cors = require("cors")
// const { urlencoded } = require("body-parser")
// const app = express()
// mongoURI= "mongodb+srv://arti:arti1234@cluster0.yj4az.mongodb.net/india?retryWrites=true&w=majority"
// mongoose.connect(mongoURI, {useNewUrlParser: true})
// .then(res => console.log(`Connection Succesful ${res}`))
// .catch(err => console.log(`Error in DB connection ${err}`));
// app.use(bodyParser.urlencoded({extended:false}))
// app.use(bodyParser.json())
// app.get("/api",(req,res)=>{
// 	res.send("hiii, from server")
// })
// const citiesRouter= require("./router/cities_r")
// app.use("/",citiesRouter)
// const userRouter=require("./router/9")
// app.use("/",userRouter)
// const organizationRouter = require("./router/organization_management_r")
// app.use("/",organizationRouter)
// const useractivityRouter = require("./router/useractivity_r")
// app.use("/",useractivityRouter)

// const settingRouter= require("./router/setting_r")
// app.use("/",settingRouter)
// const helprouter =require("./router/help_r")
// app.use("/",helprouter)

// app.get("/getallcities",async(req,res)=>{
//     try{
//         let id ="60fbda3ed4fbdfe05d23e3e7"
//         const data = await cities.findById(id,function(err,d){
//             if(err) console.log(err)
//             else console.log(d)
//         })
//         // console.log(data)
//         // res.send(data)
//     }catch(e){
//         console.log(e);
//         res.send(e)
//     }
// })
// app.listen(port,()=>{
// 	console.log("server is running on 3030 ")
// })
// ........for Weather bot........
// const express = require("express");
// const bodyParser = require("body-parser");
// const request = require("request");
// const app = express();

// // Configure dotenv package

// require("dotenv").config();
// const apiKey = `${process.env.API_KEY}`;
// app.use(express.static("public"));
// app.use(bodyParser.urlencoded({ extended: true }));
// app.set("view engine", "ejs");
// app.get("/", function (req, res) {
//     // It will not fetch and display any data in the index page
//     res.render("index", { weather: null, error: null });
//   });

// app.post('/', function(req, res) {

//     // Get city name passed in the form
//     let city = req.body.city;

//     // Use that city name to fetch data
//     // Use the API_KEY in the '.env' file
//     let url = `http://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${apiKey}`;
//     request(url, function(err, response, body) {

//         // On return, check the json data fetched
//         if (err) {
//             res.render('index', { weather: null, error: 'Error, please try again' });
//         } else {
//             let weather = JSON.parse(body);
//                  // you shall output it in the console just to make sure that the data being displayed is what you want
//                  console.log(weather);

//                  if (weather.main == undefined) {
//                      res.render('index', { weather: null, error: 'Error, please try again' });
//                  } else {
//                      // we shall use the data got to set up your output
//                      let place = `${weather.name}, ${weather.sys.country}`,
//                        /* you shall calculate the current timezone using the data fetched*/
//                        weatherTimezone = `${new Date(
//                          weather.dt * 1000 - weather.timezone * 1000
//                        )}`;
//                      let weatherTemp = `${weather.main.temp}`,
//                        weatherPressure = `${weather.main.pressure}`,
//                        /* you will fetch the weather icon and its size using the icon data*/
//                        weatherIcon = `http://openweathermap.org/img/wn/${weather.weather[0].icon}@2x.png`,
//                        weatherDescription = `${weather.weather[0].description}`,
//                        humidity = `${weather.main.humidity}`,
//                        clouds = `${weather.clouds.all}`,
//                        visibility = `${weather.visibility}`,
//                        main = `${weather.weather[0].main}`,
//                        weatherFahrenheit;
//                      weatherFahrenheit = (weatherTemp * 9) / 5 + 32;
     
//                      // you shall also round off the value of the degrees fahrenheit calculated into two decimal places
//                      function roundToTwo(num) {
//                        return +(Math.round(num + "e+2") + "e-2");
//                      }
//                      weatherFahrenheit = roundToTwo(weatherFahrenheit);
//                      res.render("index", {
//                         weather: weather,
//                         place: place,
//                         temp: weatherTemp,
//                         pressure: weatherPressure,
//                         icon: weatherIcon,
//                         description: weatherDescription,
//                         timezone: weatherTimezone,
//                         humidity: humidity,
//                         fahrenheit: weatherFahrenheit,
//                         clouds: clouds,
//                         visibility: visibility,
//                         main: main,
//                         error: null,
//                       });
//                     }
//                   }
//                 })
//           });
//     //   });
// app.listen(5000, function (){
//         console.log("Weather app listening on port 5000!")}
// )

// const TelegramBot = require('node-telegram-bot-api');
// const axios = require('axios');

// // Telegram's token
// const token = '5335514774:AAHaRmF8iEK2PhMwvXzi2_bdCZFzX7JpfXk';

// //OpenWeatherMap API key
// const appID = "409ccd0bce9fb84fba501ac96774e540";

// // OpenWeatherMap endpoint for getting weather by city name
// const weatherEndpoint = (city) => (
//   `http://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&&appid=${appID}`
// );

// // URL that provides icon according to the weather
// const weatherIcon = (icon) => `http://openweathermap.org/img/w/${icon}.png`;

// // Template for weather response
// const weatherHtmlTemplate = (name, main, weather, wind, clouds) => (
//   `The weather in <b>${name}</b>:
// <b>${weather.main}</b> - ${weather.description}
// Temperature: <b>${main.temp} °C</b>
// Pressure: <b>${main.pressure} hPa</b>
// Humidity: <b>${main.humidity} %</b>
// Wind: <b>${wind.speed} meter/sec</b>
// Clouds: <b>${clouds.all} %</b>
// `
// );

// // Created instance of TelegramBot
// const bot = new TelegramBot(token, {
//   polling: true
// });

// // Function that gets the weather by the city name
// const getWeather = (chatId, city) => {
//   const endpoint = weatherEndpoint(city);

//   axios.get(endpoint).then((resp) => {
//     const {
//       name,
//       main,
//       weather,
//       wind,
//       clouds
//     } = resp.data;

//     bot.sendPhoto(chatId, weatherIcon(weather[0].icon))
//     bot.sendMessage(
//       chatId,
//       weatherHtmlTemplate(name, main, weather[0], wind, clouds), {
//         parse_mode: "HTML"
//       }
//     );
//   }, error => {
//     console.log("error", error);
//     bot.sendMessage(
//       chatId,
//       `Ooops...I couldn't be able to get weather for <b>${city}</b>`, {
//         parse_mode: "HTML"
//       }
//     );
//   });
// }

// // Listener (handler) for telegram's /weather event
// bot.onText(/\/weather/, (msg, match) => {
//   const chatId = msg.chat.id;
//   const city = match.input.split(' ')[1];

//   if (city === undefined) {
//     bot.sendMessage(
//       chatId,
//       `Please provide city name`
//     );
//     return;
//   }
//   getWeather(chatId, city);
// });

// // Listener (handler) for telegram's /start event
// // This event happened when you start the conversation with both by the very first time
// // Provide the list of available commands
// bot.onText(/\/start/, (msg) => {
//   const chatId = msg.chat.id;
//   bot.sendMessage(
//     chatId,
//     `Welcome at <b>MyTestWeatherInfoBot</b>, thank you for using my service
    
// Available commands:

// /weather <b>city</b> - shows weather for selected <b>city</b>
//   `, {
//       parse_mode: "HTML"
//     }
//   );
// });


// let request = require('request');

// let apiKey = "409ccd0bce9fb84fba501ac96774e540"
// let city = 'surat';
// let url = `http://api.openweathermap.org/data/2.5/weather?q=${city}&units=imperial&appid=${apiKey}`

// request(url, function (err, response, body) {
//   if(err){
//     console.log('error:', error);
//   } else {
//     let weather = JSON.parse(body)
    
//     let message = `It's ${weather.main.temp} degrees in ${weather.name}!`;
//     console.log(message);
//   }
// });

