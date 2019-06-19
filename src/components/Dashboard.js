import React, { Component } from 'react'
import 'antd/dist/antd.css'
import { Menu, Icon } from 'antd'
import { Row } from 'antd'
import PollList from './PollList'

class Dashboard extends Component {
    state = {
        current: "unanswered"
    }

    handleClick = e => {
        console.log('click ', e);
        this.setState({
            current: e.key,
        })
    }


    render(){
        const { current } = this.state

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
                    current==="unanswered"
                    ? <PollList listCurrent={current}/>
                    : <PollList listCurrent={current}/>
                }
            </div>
        </div>
        )
    }
}

export default Dashboard