import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import ListBooks from '../services/BookService';
import '../App.css';

const styles = theme => ({
    root: {
        width: '98%',
        maxWidth: '98%',
        backgroundColor: theme.palette.background.paper,
    },
});

class BookArticle extends React.Component {

    createMarkup(value) {
        return { __html: value };
    }

    componentDidMount() {
        var booksContent = ListBooks();
        this.setState({
            ...this.state,
            content: booksContent,
            id : this.props.match.params.number
        });
    }

    render() {
        const { classes, theme } = this.props;
        return (
            <div className={classes.root}>
               <button onClick={this.props.history.goBack} className="alignRightBack">VOLTAR</button>
               {(this.state && this.state.content) ? <div dangerouslySetInnerHTML={this.createMarkup(this.state.content.default[this.state.id].content)}></div> : ""}
            </div>
        )
    };
}

BookArticle.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(BookArticle);