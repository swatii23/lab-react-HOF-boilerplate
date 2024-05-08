import React, { Component } from 'react';
import "./HigherOrderFunctions.css";

class HigherOrderFunctions extends Component {
    constructor(){
        super();
        this.state = {
            userData: [
                { id: '1', name: 'Joe', user_type: 'Developer', age:31, years:11 },
                { id: '2', name: 'Hill', user_type: 'Designer', age:26, years:4 },
                { id: '3', name: 'John', user_type: 'Teacher', age:24, years: 2},
                { id: '4', name: 'Sam', user_type: 'Entreprenuer', age:58,years:25},
                { id: '5', name: 'Jack', user_type: 'Designer', age:43, years: 18}

            ]
        }
    }

    renderItems = () => {
        const data = this.state.userData;
        const mapRows = data.map((item) => (
            <React.Fragment key={item.id}>
                <li className="list-elements">
                    <span>Id: {item.id}</span>
                    <span>Name : {item.name}</span>
                    <span>User Type: {item.user_type}</span>
               </li>
            </React.Fragment>
        ));
        return mapRows;
    };

    renderUserType() {
        const data = this.state.userData;
        const filterRows = data.filter(item => item.user_type == "Designer").map((item) => (
            <React.Fragment key={item.id}>
                <li className="list-elements">
                    <span>Id: {item.id}</span>
                    <span>Name : {item.name}</span>
                    <span>User Type: {item.user_type}</span>
               </li>
            </React.Fragment>
        ));
        return filterRows;
    }

    renderOnStartLetter() {
        const data = this.state.userData;
        const filterRows = data.filter(item => item.name.startsWith("J")).map((item) => (
            <React.Fragment key={item.id}>
                <li className="list-elements">
                    <span>Id: {item.id}</span>
                    <span>Name : {item.name}</span>
                    <span>User Type: {item.user_type}</span>
               </li>
            </React.Fragment>
        ));
        return filterRows;
    }

    renderOnAge() {
        const data = this.state.userData;
        const filterRows = data.filter(item => item.age > 28 && item.age <= 50).map((item) => (
            <React.Fragment key={item.id}>
                <li className="list-elements">
                    <span>Id: {item.id}</span>
                    <span>Name : {item.name}</span>
                    <span>User Type: {item.user_type}</span>
               </li>
            </React.Fragment>
        ));
        return filterRows;
    }

    renderTotalYears() {
        const data = this.state.userData;
        const filterRows = data.filter(item => item.user_type == "Designer").reduce((acc, item) => {
            return acc+item.years;
        }, 0);
        
        return (
            <React.Fragment>
                <p>{filterRows}</p>
            </React.Fragment>
        );
    }

    render() {
        return (
          <React.Fragment>
            <h1>Display all items</h1>
            <div className="display-box">
            <ul>{this.renderItems()} </ul>
            </div>

            <h1>Display based on user type</h1>
            <div className="display-box">
            <ul>{this.renderUserType()} </ul>
            </div>

            <h1>Filter all data starting with J</h1>
            <div className="display-box">
            <ul>{this.renderOnStartLetter()} </ul>
            </div>

            <h1>Filter all data based on age greater than 28 and age less than or equal to 50</h1>
            <div className="display-box">
            <ul>{this.renderOnAge()} </ul>
            </div>

            <h1>Find the total years of the designers</h1>
            <div className="display-box">
            {this.renderTotalYears()}
            </div>
          </React.Fragment>
        )
    }
}

export default HigherOrderFunctions;