import React, { useContext, useState } from 'react'
import { AuthContext } from './Auth';
import app from './base'
import "./Home.css"
import NavigationBar from './NavigationBar';
import "./Schedule.css"

const Schedule = () => {
    return (
        <div>
            <NavigationBar />
            <hr/>
            <br/>

            <div className="selectionTabs">
                    <button>Sports</button>
                    <button>Cultural</button>
            </div>
            <br/>

            <div class="event">
                <span>January 3rd, 2020</span>
                <span>Completed</span>
            </div>

            <div class="events">
                <span><h4>Table Tennis Junior</h4></span>
                <span><h4>Red Fire vs White Winds</h4>Team A vs Team B</span>
                <span><h4>Slot 1:7am-9pm</h4></span>
            </div>

            <div class="events">
                <span><h4>Table Tennis Junior</h4></span>
                <span><h4>Red Fire vs White Winds</h4>Team A vs Team B</span>
                <span><h4>Slot 1:7am-9pm</h4></span>
            </div>
            <br/>

            <div class="event">
                <span>January 3rd, 2020</span>
                <span>Completed</span>
            </div>

            <div class="events">
                <span><h4>Table Tennis Junior</h4></span>
                <span><h4>Red Fire vs White Winds</h4>Team A vs Team B</span>
                <span><h4>Slot 1:7am-9pm</h4></span>
            </div>

            <div class="events">
                <span><h4>Table Tennis Junior</h4></span>
                <span><h4>Red Fire vs White Winds</h4>Team A vs Team B</span>
                <span><h4>Slot 1:7am-9pm</h4></span>
            </div>
            
            <br/>
            <div class="footer">
                <table>
                    <tr>
                        <th><h3>Coordinators:</h3></th>
                        <th><h3>Contacts:</h3></th>
                    </tr>
                    <tr>
                        <th><h4>Name 1</h4></th>
                        <th><h3>403920</h3></th>
                    </tr>
                </table>
            </div>
        </div>
    )
}

export default Schedule
