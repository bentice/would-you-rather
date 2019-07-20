import React, { Component, Fragment } from 'react'
import { connect } from 'react-redux'
import { Card, Avatar, Typography, List, Skeleton } from 'antd'

const { Title, Text } = Typography
const { Meta } = Card

class LeaderBoard extends Component {


    render () {
        const { users } = this.props
        const userList = Object.keys(users).sort((a, b) =>
                        ((users[a].questions.length + Object.keys(users[a].answers).length) 
                        < (users[b].questions.length + Object.keys(users[b].answers).length))
                         ? 1 
                         : -1)
        return (
            <Fragment>
                <Title>Leaderboard</Title>
                <List
                    itemLayout="vertical"
                    dataSource={userList}
                    renderItem={item =>(
                        <List.Item key={item}>
                            <Card>
                                <Avatar src={users[item].avatarURL} />  <Title>{users[item].name}</Title>
                                <div style={{ margin: '24px 0' }} />
                                <Text>
                                    Questions Asked : {users[item].questions.length}
                                </Text>
                                <div style={{ margin: '24px 0' }} />
                                <Text>
                                    Question Answered : {Object.keys(users[item].answers).length}
                                </Text>
                                <div style={{ margin: '24px 0' }} />
                                <Text strong>
                                    Total Score : {users[item].questions.length + Object.keys(users[item].answers).length}
                                </Text>
                            </Card>
                        </List.Item>
                    )}
               />
            </Fragment>
        )
    }
}

function mapStateToProps ({ users }) {
    return {
        users,
    }
}


export default connect(mapStateToProps)(LeaderBoard)

