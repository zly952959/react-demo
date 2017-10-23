import React, { Component } from 'react';
import {Route,Switch} from 'react-router-dom'
import Attendence from './../pages/attendence/index.js'
import Holiday from './../pages/holiday/index.js'
export default class  extends Component{
    componentDidMount(){
        this.props.history.push('/attendence')
    }
    render(){
        return <div>
            <Switch>
                <Route path='/attendence' component={Attendence}/>
                <Route path='/holiday' component={Holiday}/>
                <Route componen={Attendence}/>
            </Switch>
        </div>
    }
}