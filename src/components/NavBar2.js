import React from 'react'
import 'antd/dist/antd.css'
import { Menu, Icon, Typography } from 'antd'
import { Row } from 'antd'
import { NavLink } from 'react-router-dom'

const { Title } = Typography

export default function NavBar () {
        return (
            <Row>
            <Menu mode="horizontal">
                <Menu.Item>
                    <NavLink to='/home' activeClassName='active'>
                    <Icon type="home"/>
                        Home
                    </NavLink>
                </Menu.Item>
                <Menu.Item>
                    <NavLink to='/new' activeClassName='active'>
                    <Icon type="plus"/>
                    New Quesion
                    </NavLink>
                </Menu.Item>
                <Menu.Item>
                    <NavLink to='/leaderboard' activeClassName='active'>
                    <Icon type="ordered-list" />
                        LeaderBoard
                    </NavLink>
                </Menu.Item>
            </Menu>
        </Row>
        )
        
}