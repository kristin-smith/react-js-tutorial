var Badge = React.createClass({
        
        render: function(){
            return <button className="btn btn-primary" type="button">
                {this.props.title} - {this.props.number}
                </button>
            }
        });
console.log('hey girl');