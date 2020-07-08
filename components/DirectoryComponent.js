import React, { Component } from 'react';
import { FlatList } from 'react-native';
import { ListItem } from 'react-native-elements';

function Directory(props) {  

    const renderDirectoryItem = ({ item }) => {

        return (
            <ListItem title={item.name} subTitle={item.description} leftAvatar={{ source: require('./images/react-lake.jpg') }}/>
        )
    };
    return (
        // flat list(list item) expects an array
        <FlatList data={props.campsites} renderItem={renderDirectoryItem} keyExtractor={item => item.id.toString()}>

        </FlatList>
    )
}

export default Directory;