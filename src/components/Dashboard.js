import React, { Component } from 'react'
import 'antd/dist/antd.css'
import { Menu, Icon } from 'antd'
import { Row } from 'antd'
import PollList from './PollList'
import { connect } from 'react-redux'


class Dashboard extends Component {
    state = {
        current: 'unanswered'
    }

    handleClick = e => {
        e.preventDefault()
        
        console.log('click ', e);
        this.setState({
            current: e.key,
        })
    }


    render(){
        const {dispatch, authedUser, questions, users} = this.props

        return (
        <div>
            <Row type='flex' justify='center' >
            <Menu onClick={this.handleClick} selectedKeys={[this.state.current]} mode="horizontal">
                    <Menu.Item key='unanswered'>
                        <Icon type="question" />
                        Unanswered
                    </Menu.Item>
                    <Menu.Item key='answered'>
                        <Icon type='check' />
                        Answered
                    </Menu.Item>
                </Menu>
            </Row>

            <div>
                {
                    this.state.current==="unanswered"
                    ? <PollList 
                        currentList={"unanswered"} 
                        />
                    : <PollList 
                        currentList={"answered"} 
                         />
                }
            </div>
        </div>
        )
    }
}


export default Dashboard