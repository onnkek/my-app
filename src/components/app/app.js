import { React, Component } from 'react';
import AppHeader from '../app-header';
import SearchPanel from '../search-panel';
import PostStatusFilter from '../post-status-filter';
import PostList from '../post-list';
import PostAddForm from '../post-add-form';

import './app.css';
import './index.css';
import styled from 'styled-components';

const AppBlock = styled.div`
    margin: 0 auto;
    max-width: 800px;
`

export default class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            data: [
                {
                    id: '1',
                    label: 'Pidor one was died',
                    important: true,
                    like: false
                },
                {
                    id: '2',
                    label: 'Pidor two go for a walk',
                    important: false,
                    like: false
                },
                {
                    id: '3',
                    label: 'Pidor three like my pussy',
                    important: false,
                    like: false
                },
                {
                    id: '4',
                    label: 'Pidor four go to sex with my mom',
                    important: true,
                    like: false
                },
            ],
            term: '',
            filter: 'All'
        }
        this.searchPost = (items, term) => {
            if (term.length === 0) {
                return items;
            }

            return items.filter(item => {
                return item.label.indexOf(term) > -1;
            });
        }
        this.filterPost = (items, filter) => {
            if (filter === 'Liked') {
                return items.filter(item => item.like === true);
            } else {
                return items;
            }
        }
        this.maxId = 5;
        this.deletePost = (id) => {
            this.setState(({ data }) => {
                const index = data.findIndex(elem => elem.id === id);
                const newData = [...data.slice(0, index), ...data.slice(index + 1)];
                return {
                    data: newData
                }
            });
        }
        this.addPost = (body) => {
            const newPost = {
                label: body,
                important: false,
                id: this.maxId++
            }
            this.setState(({ data }) => {
                const newData = [...data, newPost];
                return {
                    data: newData
                }
            });
        }
        this.onToggleImportant = (id) => {
            this.setState(({ data }) => {
                const index = data.findIndex(elem => elem.id === id);

                const old = data[index];
                const newPost = { ...old, important: !old.important };

                const newData = [...data.slice(0, index), newPost, ...data.slice(index + 1)];
                return {
                    data: newData
                }
            })
        }
        this.onToggleLike = (id) => {
            this.setState(({ data }) => {
                const index = data.findIndex(elem => elem.id === id);

                const old = data[index];
                const newPost = { ...old, like: !old.like };

                const newData = [...data.slice(0, index), newPost, ...data.slice(index + 1)];
                return {
                    data: newData
                }
            })
        }
        this.onUpdateSearch = (term) => {
            this.setState({ term });
        }
        this.onFilterSelect = (filter) => {
            this.setState({ filter });
        }
    }


    render() {

        const { data, term, filter } = this.state;
        const likedCount = data.filter(item => item.like).length;
        const postsCount = data.length;

        const visiblePosts = this.filterPost(this.searchPost(data, term), filter);

        return (
            <AppBlock>
                <AppHeader
                    liked={likedCount}
                    posts={postsCount}
                />
                <div className='search-panel d-flex'>
                    <SearchPanel onUpdateSearch={this.onUpdateSearch} />
                    <PostStatusFilter
                        filter={filter}
                        onFilterSelect={this.onFilterSelect}
                    />
                </div>
                <PostList
                    posts={visiblePosts}
                    onDelete={this.deletePost}
                    onToggleImportant={this.onToggleImportant}
                    onToggleLike={this.onToggleLike} />
                <PostAddForm onAdd={this.addPost} />
            </AppBlock>
        )
    }
}
