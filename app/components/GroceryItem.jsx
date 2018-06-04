var React = require('react');
var createReactClass = require('create-react-class');
var action = require('./../actions/GroceryItemActionCreator.jsx');

module.exports = createReactClass({
    togglePurchased: function (e) {
        e.preventDefault();
        if (this.props.item.purchased) {
            action.unbuy(this.props.item);
        } else {
            action.buy(this.props.item);
        }
    },
    delete: function (e) {
        e.preventDefault();
        action.remove(this.props.item);
    },
    render() {
        return (
            <div>
                <div>
                    <h4 className={this.props.item.purchased ? "strikethrough" : ""}>{this.props.item.name}</h4>
                </div>
                <form className="three columns" onSubmit={this.togglePurchased}>
                    <button className={this.props.item.purchased ? "" : "button-primary"}>
                        {this.props.item.purchased ? "Unbuy" : "Buy"}
                    </button>
                </form>
                <form className="three columns" onSubmit={this.delete}>
                    <button>&times;</button>
                </form>
            </div>
        );
    }
})

