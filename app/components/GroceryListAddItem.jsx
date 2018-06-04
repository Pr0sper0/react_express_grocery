var React = require('react');
var createClass = require('create-react-class');
var action = require('./../actions/GroceryItemActionCreator.jsx');

module.exports = createClass({
    getInitialState:function(){
        return {input:""};
    },
    handleInputName:function(e) {
        this.setState({
            input: e.target.value
        });
    },
    addItem:function(e){
        e.preventDefault();
        //console.log("Adding item ", this.state.input);
        action.add({
            name: this.state.input
        });
        this.setState({
            input:''
        })
    },
    render:function(){
        return (
            <div className='grocery-addItem'>
                <form onSubmit={this.addItem}>
                    <input value={this.getInitialState.input} onChange={this.handleInputName}/>
                    <button>Add item</button>
                    
                </form>
            </div>
        )
    }
})