import React from 'react'
import { useContext } from 'react';
import UserContext from '../context/UserContext';
import List from './List';

function ListItem(props) {

    const context = useContext(UserContext);
    const { value } = context;
    console.log("Values are : ", value);
    return (
        <div>
            <List head = {"Fund"} items={value.Fund} />
            <List head = {"Cash"} items={value.Cash} />
            <List head = {"Bond"} items={value.Bond} />
            <List head = {"Equity"} items={value.Equity} />

        </div>
    )
}

export default ListItem
