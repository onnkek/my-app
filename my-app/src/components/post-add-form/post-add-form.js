import React from 'react';
import './post-add-form.css';

const PostAddForm = () => {
    return (
        <form>
            <input
                type='text'
                placeholder='How are you?'
                className='form-control new-post-label' />
            <button
                type='submit'
                className='btn btn-outline-secondary'>
                Add
            </button>
        </form>
    )
}

export default PostAddForm;