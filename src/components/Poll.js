import React, { Component } from 'react'
import { Card } from 'antd'

const tabList = [
    {
        key: 'wouldyou',
        tab: 'wouldyou',
    },
    {
        key: 'results',
        tab: 'results',
    }
]

const contentList = {
    wouldyou:<p>would you rather...</p>,
    results: <p>results...</p>,
}

class Poll extends Component {
    state = {
        key: 'wouldyou'
    }

    onTabChange = (key) => {
        console.log(key);
        this.setState({ key });
    }
    
    render () {
        return (
            <div>
                <Card
                    style={{width: '100%'}}
                    title="Would you rather...?"
                    tabList={tabList}
                    activateTabkey={this.state.key}
                    onTabChange={key=>{
                        this.onTabChange(key)
                    }}
                >
                    {contentList[this.state.key]}
                </Card>
            </div>
        )
    }
}

export default Poll