import User from "./User";
import UserClass from "./UserClass";
import React from "react"; 
import UserContext from "../utils/UserContext";

class About extends React.Component{
    constructor(props){
        super(props);
        //console.log("Parent constructor");
    }
    componentDidMount(){
        //console.log("Parent Did Mount");
    }
    render(){
        //console.log("Parent Render");
        return(
            <div>
               
            <h1>About</h1>
            <div>
                LoggedIn User
                <UserContext.Consumer>
                     {({loggedInUser})=><h1 className="text-xl font-bold">
                        {loggedInUser}
                        </h1>}
                </UserContext.Consumer>
            </div>
            <h2>This is my food website </h2>
            
           
            <UserClass name={"Avishka Karn"} location={"New Delhi"}/>
            
            </div>
        );
    }
}


export default About;