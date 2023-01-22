//I think I'm understanding finally that this entire file is superfluous
//It's all running through server.js and now I feel like a buffoon


// const express = require('express');
// const bodyParser = require('body-parser');
// const mongodb = require('./db/connect');
// const exphbs = require('express-handlebars');
// const morgan = require('morgan');

// //From the swagger-ui-express page, Sulove advised I throw that junk into routes/swagger-route.js instead

// //only while testing, comment this out
// app.use(morgan('dev'))

// const port = process.env.PORT || 3000;
// const app = express();

// app
//   .use(bodyParser.json())
//   .use((req, res, next) => {
//     res.setHeader('Access-Control-Allow-Origin', '*');
//     next();
//   })
//   .use('/', require('./routes'));

  //Looks like I had a second copy of this going on? The one in server.js is the one that seems relevant
  //But uncomment this if there are issues?

  // mongodb.initDb((err, mongodb) => {
  //   if (err) {
  //     console.log(err);
  //   } else {
  //     app.listen(port);
  //     console.log(`Connected to DB and listening on ${port}`);
  //   }
  // });

