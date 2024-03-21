import { Component } from "react";
export default class counterclass extends Component
{
    render()
    {
       return (
       <>
       <h1>Counter : {this.state.count} </h1>
       
       <button onClick={()=>this.increase()}>increase</button>
       <button onClick={()=>this.decrease()}>decrease</button>
       </>
        );
    }

    increase()
    {
       this.setState({count:this.state.count + 1});
    }
    decrease()
    {
       this.setState({count:this.state.count - 1});
    }
    constructor()
    {
       super()
       this.state={count: 0}
    }
    componentDidMount()
    {
        console.log(" mounting")
    }
    componentDidUpdate()
    {
        console.log("Upadte mounting")
    }
    componentWillUnmount()
    {
        console.log("Un mounting")
    }
}
