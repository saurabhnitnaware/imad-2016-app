var express = require('express');
var morgan = require('morgan');
var path = require('path');

var app = express();
app.use(morgan('combined'));

var articles ={
    'article-one' : {
    title : "Article-One|Saurabh",
    heading : "India wins five medals in Winter Olampic!",
    date : "5th of Oct 2016",
    content : `
                There is nothing like a fauliure. India proved it !
            `
        },
    'article-two' : {
        title : "Article-Two|Saurabh",
        heading : "Outings at Manipur",
        date : "14th of Oct 2016",
        content : `
                    Outings at manipur is fun.
                `
    },
    'article-three' : {
        title : "Article-Three|Saurabh",
        heading : "Pleasure vs Happy !",
        date : "18th of Oct 2016",
        content : `
                    Pleasure and Happy
                `
    }    
};

function createTemplate(data){
    title = data.title;
    heading = data.heading;
    date = data.date;
    content = data.content;
    
    var articleOneTemplate = 
            `
                <html>
                        <head>
                            <title>${title}</title>
                           <link href="/ui/style.css" rel="stylesheet" />
                        </head>
                    
                    <body>
                        <div class="container">
                            <div>
                                <h1>
                                    ${heading}
                                </h1>    
                            </div>      
                            <hr>
                            <div>
                                <h3>
                                    ${date}
                                </h3>    
                            </div>
                            <div>
                                <a href="/">Home</a>
                                <p>
                                    ${content}
                                </p>
                            </div>
                        </div>    
                    </body>    
                </html>
        `;
        
        return articleOneTemplate;
}

app.get('/', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'index.html'));
});

/*var names = [];
app.get('/submit-name',function(req,res){
   var name = req.query.name;
   names.push(name);
   res.send(JSON.stringify(names)); // JavaScript Object Notation
});
*/
app.get('/:articleName',function(req,res){
    var aName = req.params.articleName;
    res.send(createTemplate(articles[aName]));
});

var counter = 0;
app.get('/counter', function (req, res) {
    counter = counter + 1;
  res.send(counter.toString());
});

app.get('/ui/style.css', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'style.css'));
});

app.get('/ui/main.js',function(req,res){
    res.sendFile(path.join(__dirname,'ui','main.js'));
});

app.get('/ui/madi.png', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'madi.png'));
});


var port = 8080; // Use 8080 for local development because you might already have apache running on 80
app.listen(8080, function () {
  console.log(`IMAD course app listening on port ${port}!`);
});
