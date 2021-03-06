import React, { Component } from 'react'
import Results from './Results'
import AnswerPoll from './AnswerPoll'
import { Card, Avatar, Typography } from 'antd'
import { connect } from 'react-redux'
import { formatQuestion } from '../utils/helpers'



const { Text } = Typography

class PollPage extends Component {
    
    state = {
        key: 'unanswered',
    }

    onTabChange = (key) => {
        console.log(key);
        this.setState({ key });
    }
    
    render () {
        const { qid, authedUser, question, users } = this.props

        if(question===null){
            return (<Card
                style={{width: '100%'}}
                title={
                <div>  
                <Text> This Question Doesn't Exist</Text>
                </div>
                }
            />)
        }

        const currentList =  [...question.optionOne.votes, ...question.optionTwo.votes]
             .includes(authedUser)  
        ? 'answered' 
        : 'unanswered'

        

        const tabList = [
                            {
                                key: 'unanswered',
                                tab: 'Question'
                            },
                            {
                                key: 'answered',
                                tab: 'Results',
                                disabled: currentList === 'answered' ? false : true,
                            }
                        ] 
        const contentList = {
                            unanswered: <AnswerPoll
                                            qid={qid}
                                            question={question}
                                            />,
                            answered: <Results 
                                        qid={qid} 
                                        authedUser={authedUser} 
                                        question={question} 
                                        users={users}
                                        />,
                        }


        return (
                <Card
                    style={{width: '100%'}}
                    title={
                    <div>  
                    <Avatar src={question.avatar} />
                    <br />
                    <Text>{question.name} wants to know would you rather...?</Text>
                    </div>
                    }
                    tabList={tabList}
                    activeTabKey={this.state.key}
                    onTabChange={key => {this.onTabChange(key)}}
                >
                    {contentList[this.state.key]}
                </Card>
                
        )
    }
}

function mapStateToProps ({ questions, users, authedUser }, props) {
    const { qid } = props.match.params
    const question = questions[qid] ? formatQuestion(questions[qid], users[questions[qid].author], authedUser) : null

    return {
        authedUser,
        users,
        qid,
        question,
    }

}


export default connect(mapStateToProps)(PollPage)