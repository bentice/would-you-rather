import React, { Component, Fragment } from 'react'
import { connect } from 'react-redux'
import { Avatar, Typography } from 'antd'

const { Text } = Typography

class Results extends Component {
    render(){
        
        const {optionOne, optionTwo, users} = this.props
        const optionOneLength = optionOne.votes.length
        const optionTwoLength = optionTwo.votes.length

        return (
        <Fragment>
                <div>
                <Text strong>{optionOne.text} :  </Text>
                    {optionOne['votes'].map(item=>(
                    <Avatar src={this.props.users[item].avatarURL} />
                    ))}
                </div>
                <div>
                <Text strong>{optionTwo.text} :  </Text>
                    {optionTwo['votes'].map(item=>(
                    <Avatar src={this.props.users[item].avatarURL} />
                    ))}
                </div>
        </Fragment>
        )
    }
}

function mapStateToProps({ users }, {optionOne, optionTwo}){
    return {
        users,
        optionOne,
        optionTwo,
    }
}


export default connect(mapStateToProps)(Results)