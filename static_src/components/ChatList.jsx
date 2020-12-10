import React from 'react'
import { List, ListItem } from 'material-ui/List'
import Subheader from 'material-ui/Subheader'
import SendIcon from 'material-ui/svg-icons/content/send'

export default class ChatList extends React.Component {
    render() {
        return <div className='chatList'>
            <List>
                <Subheader>Последние чаты</Subheader>
                <ListItem
                    primaryText="Vladimir Putin"
                    leftIcon={<SendIcon />}
                />
                <ListItem
                    primaryText="Mihail Mishustin"
                    leftIcon={<SendIcon />}
                />
                <ListItem
                    primaryText="Mariya Zaharova"
                    leftIcon={<SendIcon />}
                />
                <ListItem
                    primaryText="Donald Trump"
                    leftIcon={<SendIcon />}
                />
                <ListItem
                    primaryText="Other"
                    leftIcon={<SendIcon />}
                />
            </List>
        </div>
    }
}