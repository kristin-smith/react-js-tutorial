(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({"/Users/duuser/Documents/react-js-intro/thumbnail-gulp/src/app.jsx":[function(require,module,exports){
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
            mageUrl : "http://data.cyclowiki.org/images/thumb/e/ed/Cirrina.jpg/300px-Cirrina.jpg"
        },
        {title : "North Pacific giant octopus",
        number : 118,
        header : "North Pacific giant octopust",
        description : "React is a fantastic new library full of newts.",
        imageUrl : "http://calphotos.berkeley.edu/imgs/512x768/0000_0000/0407/0381.jpeg"
        }]
    };
        
var element = React.createElement(ThumbnailList, options);
ReactDOM.render(element, document.querySelector('.container'));

},{}]},{},["/Users/duuser/Documents/react-js-intro/thumbnail-gulp/src/app.jsx"])
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCIvVXNlcnMvZHV1c2VyL0RvY3VtZW50cy9yZWFjdC1qcy1pbnRyby90aHVtYm5haWwtZ3VscC9zcmMvYXBwLmpzeCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtBQ0FBLElBQUksT0FBTyxHQUFHO0lBQ1YsYUFBYSxFQUFFO1FBQ1gsQ0FBQyxLQUFLLEdBQUcsT0FBTztRQUNoQixNQUFNLEdBQUcsR0FBRztRQUNaLE1BQU0sR0FBRyxPQUFPO1FBQ2hCLFdBQVcsR0FBRyxpREFBaUQ7UUFDL0QsUUFBUSxHQUFHLHNFQUFzRTtTQUNoRixDQUFDO1FBQ0YsS0FBSyxHQUFHLFNBQVM7UUFDakIsTUFBTSxHQUFHLEdBQUc7UUFDWixNQUFNLEdBQUcsVUFBVTtRQUNuQixXQUFXLEdBQUcsaURBQWlEO1lBQzNELE9BQU8sR0FBRywyRUFBMkU7U0FDeEY7UUFDRCxDQUFDLEtBQUssR0FBRyw2QkFBNkI7UUFDdEMsTUFBTSxHQUFHLEdBQUc7UUFDWixNQUFNLEdBQUcsOEJBQThCO1FBQ3ZDLFdBQVcsR0FBRyxpREFBaUQ7UUFDL0QsUUFBUSxHQUFHLHFFQUFxRTtTQUMvRSxDQUFDO0FBQ1YsS0FBSyxDQUFDOztBQUVOLElBQUksT0FBTyxHQUFHLEtBQUssQ0FBQyxhQUFhLENBQUMsYUFBYSxFQUFFLE9BQU8sQ0FBQyxDQUFDO0FBQzFELFFBQVEsQ0FBQyxNQUFNLENBQUMsT0FBTyxFQUFFLFFBQVEsQ0FBQyxhQUFhLENBQUMsWUFBWSxDQUFDLENBQUMiLCJmaWxlIjoiZ2VuZXJhdGVkLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXNDb250ZW50IjpbIihmdW5jdGlvbiBlKHQsbixyKXtmdW5jdGlvbiBzKG8sdSl7aWYoIW5bb10pe2lmKCF0W29dKXt2YXIgYT10eXBlb2YgcmVxdWlyZT09XCJmdW5jdGlvblwiJiZyZXF1aXJlO2lmKCF1JiZhKXJldHVybiBhKG8sITApO2lmKGkpcmV0dXJuIGkobywhMCk7dmFyIGY9bmV3IEVycm9yKFwiQ2Fubm90IGZpbmQgbW9kdWxlICdcIitvK1wiJ1wiKTt0aHJvdyBmLmNvZGU9XCJNT0RVTEVfTk9UX0ZPVU5EXCIsZn12YXIgbD1uW29dPXtleHBvcnRzOnt9fTt0W29dWzBdLmNhbGwobC5leHBvcnRzLGZ1bmN0aW9uKGUpe3ZhciBuPXRbb11bMV1bZV07cmV0dXJuIHMobj9uOmUpfSxsLGwuZXhwb3J0cyxlLHQsbixyKX1yZXR1cm4gbltvXS5leHBvcnRzfXZhciBpPXR5cGVvZiByZXF1aXJlPT1cImZ1bmN0aW9uXCImJnJlcXVpcmU7Zm9yKHZhciBvPTA7bzxyLmxlbmd0aDtvKyspcyhyW29dKTtyZXR1cm4gc30pIiwidmFyIG9wdGlvbnMgPSB7XG4gICAgdGh1bWJuYWlsRGF0YTogW1xuICAgICAgICB7dGl0bGUgOiBcIkR1bWJvXCIsXG4gICAgICAgIG51bWJlciA6IDExOCxcbiAgICAgICAgaGVhZGVyIDogXCJEdW1ib1wiLFxuICAgICAgICBkZXNjcmlwdGlvbiA6IFwiUmVhY3QgaXMgYSBmYW50YXN0aWMgbmV3IGxpYnJhcnkgZnVsbCBvZiBuZXd0cy5cIixcbiAgICAgICAgaW1hZ2VVcmwgOiBcImh0dHA6Ly93d3cub3VyYnJlYXRoaW5ncGxhbmV0LmNvbS93cC1jb250ZW50L3VwbG9hZHMvMjAxNC8wMy8yMTUucG5nXCJcbiAgICAgICAgfSx7XG4gICAgICAgIHRpdGxlIDogXCJDaXJyaW5hXCIsXG4gICAgICAgIG51bWJlciA6IDExOCxcbiAgICAgICAgaGVhZGVyIDogXCJDaXJyaW5uYVwiLFxuICAgICAgICBkZXNjcmlwdGlvbiA6IFwiUmVhY3QgaXMgYSBmYW50YXN0aWMgbmV3IGxpYnJhcnkgZnVsbCBvZiBuZXd0cy5cIixcbiAgICAgICAgICAgIG1hZ2VVcmwgOiBcImh0dHA6Ly9kYXRhLmN5Y2xvd2lraS5vcmcvaW1hZ2VzL3RodW1iL2UvZWQvQ2lycmluYS5qcGcvMzAwcHgtQ2lycmluYS5qcGdcIlxuICAgICAgICB9LFxuICAgICAgICB7dGl0bGUgOiBcIk5vcnRoIFBhY2lmaWMgZ2lhbnQgb2N0b3B1c1wiLFxuICAgICAgICBudW1iZXIgOiAxMTgsXG4gICAgICAgIGhlYWRlciA6IFwiTm9ydGggUGFjaWZpYyBnaWFudCBvY3RvcHVzdFwiLFxuICAgICAgICBkZXNjcmlwdGlvbiA6IFwiUmVhY3QgaXMgYSBmYW50YXN0aWMgbmV3IGxpYnJhcnkgZnVsbCBvZiBuZXd0cy5cIixcbiAgICAgICAgaW1hZ2VVcmwgOiBcImh0dHA6Ly9jYWxwaG90b3MuYmVya2VsZXkuZWR1L2ltZ3MvNTEyeDc2OC8wMDAwXzAwMDAvMDQwNy8wMzgxLmpwZWdcIlxuICAgICAgICB9XVxuICAgIH07XG4gICAgICAgIFxudmFyIGVsZW1lbnQgPSBSZWFjdC5jcmVhdGVFbGVtZW50KFRodW1ibmFpbExpc3QsIG9wdGlvbnMpO1xuUmVhY3RET00ucmVuZGVyKGVsZW1lbnQsIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5jb250YWluZXInKSk7Il19
