import React, { Component } from 'react'
import { connect } from 'react-redux'
import { List } from 'antd'
import Poll from './Poll'

class PollList extends Component {

    render (){
        return(
            <List 
                itemLayou="vertical"
                dataSource={this.props.questionIDs}
                renderItem={item => (
                    <List.Item>
                        <div>question ID : {item}</div>
                    </List.Item>
                )}
            />
        )
    }
}

function mapStateToProps ({ questions }) {
    return {
        questionIDs: Object.keys(questions)
            .sort((a, b)=> questions[b].timestamp - questions[a].timestamp)
    }
}


export default connect(mapStateToProps)(PollList)