import React, { Component } from "react";
import './post-status-filter.css';
import { Button } from 'reactstrap';

export default class PostStatusFilter extends Component {
    constructor(props) {
        super(props);
        this.buttons = [
            { name: 'All', label: 'All' },
            { name: 'Liked', label: 'Liked' }
        ];
    }
    render() {
        const buttons = this.buttons.map(({ name, label }) => {
            const { filter, onFilterSelect } = this.props;
            const active = filter === name;
            return (
                <Button
                    outline={!active}
                    key={name}
                    type='button'
                    color='primary'
                    onClick={() => onFilterSelect(name)}>
                    {label}
                </Button>
            )
        })
        return (
            <div className="btn-group">
                {buttons}
            </div>
        )
    }
}