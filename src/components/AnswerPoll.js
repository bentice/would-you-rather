import React, { Component } from 'react'
import { Radio, Form, Button } from 'antd'
import { connect } from 'react-redux'
import { handleAnswerQuestion } from '../actions/shared'

class AnswerPoll extends Component {

    state = {
        value : ''
    }

    handleRadioState (value) {
        this.setState((value)=>({
            value
        }))
    }

    handleSubmit = (e) => {
        e.preventDefault()

        const { dispatch, authedUser, qid } = this.props

        dispatch(handleAnswerQuestion({
            authedUser,
            qid,
            answer: 'optionTwo',
          }))

    }

    render(){
        return(
            <div>
                <Form onSubmit={this.handleSubmit} >
                    <Form.Item>
                    <Radio.Group buttonStyle="solid">
                        <Radio.Button name="myRadioInput" value="optionOne" >{this.props.question.optionOne.text}</Radio.Button>
                        <Radio.Button name="myRadioInput" value="optionTwo" >{this.props.question.optionTwo.text}</Radio.Button>
                    </Radio.Group>
                    </Form.Item>
                    <Form.Item>
                        <Button htmlType="submit">Vote!</Button>
                    </Form.Item>
                </Form>
            </div>
        )
    }
}

function mapStateToProps ({ authedUser }, {qid, question}){

    return {
        authedUser,
        qid,
        question,
    }
}


export default connect(mapStateToProps)(AnswerPoll)