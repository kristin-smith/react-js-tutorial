{ //JSX
render: function (){
    return <div>
    Hello World!
    </div> //this is valid, but it needs to be compiled to javascript before it runs in the browser
    }
}

//compiled to JS
{
render: function() {
    return React.createElement('div', null, 'Hello World!')
    }
}