var express = require('express');
var morgan = require('morgan');
var path = require('path');

var app = express();
app.use(morgan('combined'));

var articles ={
    articleOne = {
    title : "Article-One|Saurabh",
    heading : "India wins five medals in Winter Olampic!",
    date : "5th of Oct 2016",
    content : `
                There is nothing like a fauliure. India proved it !
                `
        },
    articleTwo = {},
    articleThree = {}`    
};

function createTemplate(data){
    title = data.title;
    heading = data.heading;
    date = data.date;
    content = data.content;
    
    var articleOneTemplate = `
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

app.get('/article-one',function(req,res){
    res.send(createTemplate(articleOne));
});

app.get('/article-two',function(req,res){
    res.sendFile(path.join(__dirname,'ui','article-two.html'));
});

app.get('/article-three',function(req,res){
    res.sendFile(path.join(__dirname,'ui','article-three.html'));
});

app.get('/ui/style.css', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'style.css'));
});

app.get('/ui/madi.png', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'madi.png'));
});


var port = 8080; // Use 8080 for local development because you might already have apache running on 80
app.listen(8080, function () {
  console.log(`IMAD course app listening on port ${port}!`);
});
