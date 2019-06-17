import React, { Component } from 'react'
import 'antd/dist/antd.css'
import { Breadcrumb } from 'antd'
import { Row } from 'antd'
import Poll from './Poll'

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
            <Row type='flex' justify='center'>
                <Breadcrumb>
                    <Breadcrumb.Item key='unanswered'>Unanswered</Breadcrumb.Item>
                    <Breadcrumb.Item key='answered'>Answered</Breadcrumb.Item>
                </Breadcrumb>
            </Row>

            <div>
                {
                    current ==="unanswered"
                    ? <Poll />
                    : <Poll />
                }
            </div>
        </div>
        )
    }
}

export default Dashboard