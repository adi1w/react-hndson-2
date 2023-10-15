import React, { Component } from 'react';


class FormsClass extends Component {
    constructor(){
       super();
       this.state = {
        Name: '',
        Dept: '',
        Ratings: '',
        EmpData: [ ]
    }

    }
    

    changeHandle = (e) => {
        this.setState ({ [e.target.name]: e.target.value})
         console.log(e.target.name);
     console.log(e.target.value);
    }
    clickHandle = (e) => {
        e.preventDefault();
        let newObj = {
            name: this.state.Name,
            dept: this.state.Dept,
            Rating: this.state.Rating,
        }

        this.state.EmpData.push(newObj);
        this.setState({ EmpData: this.state.EmpData})
        console.log(this.state.EmpData);

    }

    render(){

        return(
            <div className='whole'>
                <form>
        
        <label htmlFor ="name" >Name :  </label>
        <input id="name" type="text" placeholder='Enter Name'name='Name' value={this.state.Name} onChange={this.changeHandle} required/>
        <br/>
        <br/>
        <label htmlFor ="dept">Department :  </label>
        <input id="dept" type="text" placeholder='Enter Dept'name='Dept' value={this.state.Dept} onChange={this.changeHandle} required/>
        <br/>
        <br/>
        <label htmlFor ="Rating">Rating :  </label>
        <input id="Rating" type="number" max='5'placeholder='Enter Rating'name='Rating' value={this.state.Rating} onChange={this.changeHandle} required/>
        <br/>
        <br/>
        

        <button onClick={this.clickHandle}>Submit</button>
        </form>
        
        <div className='parent'>
        {this.state.EmpData.map((item,index) =>{
            return(
                <div className='box'>
                Name : {item.name} || Dept :  {item.dept}  || Rating : {item.Rating}
                </div>
            )
        } )}
        </div>
    </div>

        )
    }
}


export default FormsClass













