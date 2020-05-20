import React, { Component } from 'react';
class Counter extends Component {
    state = {count:5,
    tag:["tag1","tag2"]};
    buttonClicked1=()=>{
        console.log('buttonClicked1',this);
     }
    render() {
        return(
            <div>
            <span style={{fontSize:400}}>{this.formatCOunt()}</span>
            <button onClick={this.buttonClicked1} className="button1">HI</button>
            {this.state.tag.length === 0 && "please add one"}
            {this.renderTags()}
            </div>
        );
    }

    formatCOunt(){
        return this.state.count === 0?'zero':this.state.count;
    }
    renderTags(){
       return this.state.tag.length === 0?(<p>there are no tags</p>):<ul >
       {this.state.tag.map((abc)=><li className = {this.state.tag}>
           {abc}
       </li>)}
   </ul>
       }
}
export default Counter;