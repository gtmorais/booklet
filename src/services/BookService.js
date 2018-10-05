import PropTypes from 'prop-types';
import * as BookData from '../content/book1.json';

function ListBooks() {
    var data = BookData;
    return data;
}

ListBooks.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default ListBooks;