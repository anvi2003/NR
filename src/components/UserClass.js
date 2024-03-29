import React from "react";



class UserClass extends React.Component{
    constructor(props){

       super(props); //it's compulsory to write this, can't skip this
       this.state={
         userInfo:{
            name: "Avi",
            location: "Delhi",
           
         }
       }
      //console.log(this.props.name+"Child constructor");
    }

    async componentDidMount(){
        //console.log(this.props.name+"Child Did Mount");

        //Api call


        const data=await fetch("https://api.github.com/users/anvi2003");
        const json=await data.json();

        this.setState({
            userInfo:json,
        });

        console.log(json);
    }

    componentDidUpdate(){
        //console.log("Component Did Update");
    }

    componentWillUnmount(){
       //console.log("Component will unmount");
    }
    render(){
        console.log(this.props.name+"Child render");
        //const {name,location}=this.props;
        //const {count}=this.state; using destructuring

        const {name,location,avatar_url}= this.state.userInfo;
        return (
            
          <div className="user-card">
          <img src={avatar_url}/>
          <h2>Name: {name}</h2>
          <h3>Location:{location} </h3>
          <h4>Contact: @Avi</h4>
          </div>
        );
    }
};

export default UserClass;