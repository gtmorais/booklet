import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import ListBooks from '../services/BookService';

const styles = theme => ({
    root: {
        width: '100%',
        maxWidth: '100%',
        backgroundColor: theme.palette.background.paper,
    },
});

class BookArticle extends React.Component {
    state = {
        value: 0,
    };

    componentDidMount() {
        var booksContent = ListBooks();
        this.setState({
            ...this.state,
            content: booksContent,
        });
    }

    createTable() {
        debugger;
        let children = [];
        for (let i = 0; i < this.state.content.default.length; i++) {
            children.push(
                <ListItem key={i} button divider>
                    <ListItemText primary={this.state.content.default[i].title} />
                </ListItem>);
        }
        return children;
    }

    render() {
        const { classes, theme } = this.props;
        return (
            <div className={classes.root}>
                <List component="nav">
                    { this.state.content && this.createTable() } 
                </List>
            </div>
        )
    };
}

BookIndex.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(BookArticle);