var React = require('react');
var ThumbnailList = require('./thumbnail-list.jsx');

var options = {
    thumbnailData: [
        {title : "Dumbo",
        number : 118,
        header : "Dumbo",
        description : "React is a fantastic new library full of newts.",
        imageUrl : "http://www.ourbreathingplanet.com/wp-content/uploads/2014/03/215.png"
        },{
        title : "Cirrina",
        number : 118,
        header : "Cirrinna",
        description : "React is a fantastic new library full of newts.",
        imageUrl : "http://data.cyclowiki.org/images/thumb/e/ed/Cirrina.jpg/300px-Cirrina.jpg"
        },
        {title : "North Pacific giant octopus",
        number : 118,
        header : "North Pacific giant octopust",
        description : "React is a fantastic new library full of newts.",
        imageUrl : "http://calphotos.berkeley.edu/imgs/512x768/0000_0000/0407/0381.jpeg"
        }]
    };
        
var element = React.createElement(ThumbnailList, options);
React.render(element, document.querySelector('.container'));