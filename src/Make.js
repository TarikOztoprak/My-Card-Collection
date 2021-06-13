import React from "react"
import NavBar from "./NavBar"
import Card from "./Card"
import Footer from './Footer';
class Make extends React.Component {
    state = {
        Name: "Write Card Name",
        Info: "Write Card Info",
        Damage:"?" ,
        Health:"?" ,
        Pic:"Write Card image url",
        Element:"n"
    }   

    componentDidMount() {
       this.renderContent();
    }

    renderContent(){
        return(
            <Card 
            name={this.state.Name}
            info={this.state.Info}
            damage={this.state.Damage}
            health={this.state.Health}
            pic={this.state.Pic}
            element={this.state.Element}
            ></Card>
        );
    }
    
    render(){
        return(
            <div className="Site">
                <hr/>
                <NavBar/>
                <hr/>
                
                <div className="App">
                <div className="Create">
                    <h1 className="center"> Create a New Card</h1>
                    
                    {this.renderContent()}
                    <table className="createTable">
                        <tr>
                            <td>
                            Name:
                            </td>
                            <td>
                                <input onChange={(e) => this.setState({Name: e.target.value})} className="tableInput"></input>
                            </td>
                        </tr>
                        <tr>
                            <td>
                            Info:
                            </td>
                            <td>
                            <input onChange={(e) => this.setState({Info: e.target.value})} className="tableInput"></input>
                            </td>
                        </tr>
                        <tr>
                            <td>
                            Damage:
                            </td>
                            <td>
                            <input maxLength="1" onChange={(e) => this.setState({Damage: e.target.value})} className="tableInput"></input>
                            </td>
                        </tr>
                        <tr>
                            <td>
                            Health:
                            </td>
                            <td>
                            <input maxLength="1" onChange={(e) => this.setState({Health: e.target.value})} className="tableInput"></input>
                            </td>
                        </tr>
                        <tr>
                            <td>
                            Picture url:
                            </td>
                            <td>
                            <input onChange={(e) => this.setState({Pic: e.target.value})} className="tableInput"></input>
                            </td>
                        </tr>
                        <tr>
                            <td>
                            Element:
                            </td>
                            <td>
                            <select onChange={(e) => this.setState({Element: e.target.value})} className="tableInput" name="elements" id="elements">
                            <option selected value="d">None</option>
                            <option value="f">Fire</option>
                            <option value="w">Water</option>
                            <option value="l">Light</option>
                            <option value="s">Shadow</option>
                           
                            </select>
                            </td>
                        </tr>
                    </table>
                    </div>
                </div>
                <Footer/>
            </div>
        );
    }   
}

export default Make;