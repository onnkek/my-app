import React from 'react';
import PostListItem from '../post-list-item';
import './post-list.css';
import { ListGroup } from 'reactstrap';

const PostList = ({ posts, onDelete, onToggleImportant, onToggleLike }) => {

    const elements = posts.map((elem) => {
        const { id, ...elemProps } = elem;
        return (
            <li key={elem.id} className='list-group-item'>
                <PostListItem {...elemProps}
                    onDelete={() => onDelete(id)}
                    onToggleImportant={() => onToggleImportant(id)}
                    onToggleLike={() => onToggleLike(id)} />
            </li>
        )
    });
    return (
        <ListGroup className='app-list'>
            {elements}
        </ListGroup>
    )
}

export default PostList;