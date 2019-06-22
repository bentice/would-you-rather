import React, { Component } from 'react'
import Results from './Results'
import AnswerPoll from './AnswerPoll'
import { Card, Avatar, Typography } from 'antd'



const { Text } = Typography

class Poll extends Component {
    
    state = {
        key: '',
    }

    componentDidMount(){
        const { currentList } = this.props
        this.setState({
            key: currentList
        })
    }
    

    onTabChange = (key) => {
        console.log(key);
        this.setState({ key });
    }
    
    render () {
        const { qid, authedUser, question, users, currentList } = this.props

        const tabList = [
            {
                key: 'unanswered',
                tab: 'Question',
                disabled: currentList === 'unanswered' ? false : true,
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
                            authedUser={authedUser} 
                            question={question} 
                            users={users}/>,
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
                    activeTabKey={currentList}
                >
                    {contentList[currentList]}
                </Card>
        )
    }
}
/*
function mapStateToProps ({authedUser, users, questions}, {qid}) {
    const question = questions[qid]

    return {
        authedUser,
        question: formatQuestion(question , users[question.author], authedUser)
    }
}
*/

export default Poll