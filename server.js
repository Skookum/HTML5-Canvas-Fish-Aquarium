var express = require('express'),
    connect = require('connect');

		
// Create and export Express app
var app = express.createServer();

app.set('development');

// Configuration
app.use(connect.bodyDecoder());
app.use(connect.methodOverride());
//app.use(connect.gzip());
app.use(connect.compiler({ src: __dirname + '/static', enable: ['sass'] }));
app.use(connect.staticProvider(__dirname + '/static'));

app.configure('development', function(){
    app.set('reload views', 1000);
    app.use(connect.errorHandler({ dumpExceptions: true, showStack: true })); 
});

app.configure('production', function(){
   app.use(connect.errorHandler()); 
});


// Routes

app.get('/', function(req, res) {
	res.redirect('/index.html');
});

app.listen(3000);