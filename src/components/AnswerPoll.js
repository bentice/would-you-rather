import React, { Component } from 'react'
import { Radio, Form, Button } from 'antd'


class AnswerPoll extends Component {
    render(){
        return(
            <div>
                <Form>
                <Form.Item>
                <Radio.Group buttonStyle="solid">
                    <Radio.Button value="a">{this.props.question.optionOne.text}</Radio.Button>
                    <Radio.Button value="b">{this.props.question.optionTwo.text}</Radio.Button>
                </Radio.Group>
                </Form.Item>
                <Form.Item>
                    <Button>Vote!</Button>
                </Form.Item>
                </Form>
            </div>
        )
    }
}

export default AnswerPoll