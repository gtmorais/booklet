import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import { Link } from "react-router-dom";
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

class BookIndex extends React.Component {
    componentDidMount() {
        var booksContent = ListBooks();
        if (booksContent != null) {
            let filteredBooks = booksContent.default.filter((f) => f.book == this.props.match.params.number);

            this.setState({
                ...this.state,
                content: filteredBooks
            });
        }
    }

    createTable() {
        let children = [];
        for (let i = 0; i < this.state.content.length; i++) {
            children.push(
                <ListItem key={this.state.content[i].id} button divider component={Link} to={`/article/${this.state.content[i].id}`}>
                    <ListItemText primary={this.state.content[i].title} />
                </ListItem>);
        }
        return children;
    }

    render() {
        const { classes, theme } = this.props;
        return (
            <div className={classes.root}>
                <List component="nav">
                    {this.state && this.state.content && this.createTable()}
                </List>
            </div>
        )
    };
}

BookIndex.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(BookIndex);