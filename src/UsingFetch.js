import React from "react";
import { Component } from "react";
class UsingFetch extends Component {
    constructor() {
        super()
        this.state = { mydata: [] }
    }
    componentDidMount() {
        fetch("https://jsonplaceholder.typicode.com/comments")
            .then(res => res.json())
            .then(res => {
                this.setState({ mydata: res.slice(0,10) })
            })
            .catch(err => alert(err))
    }
    render() {
        return (<>
        <div style={{border:"2px solid plum",display:"flex",flexWrap:"wrap"}}>
            {this.state.mydata.map((value, index) => {
                return (<>
                    <div style={{ border: "1px solid gray", flex:" 1 1 200px", minWidth:"100px" ,margin: "10px" ,padding:"10px"}}>
                       
                        <p style={{textAlign:"center" , backgroundColor:"black",color:"white"}}>{value.id}</p>
                        <h5 style={{backgroundColor:"rgba(0,0,0,0.1)"}}>{value.email}</h5>
                        <h4>{value.name}</h4>
                   
                        
                    </div>
                </>)
            })}
              </div>
          </>)
        
    }
}
export default UsingFetch;