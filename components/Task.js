import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const Task = (props) => {
    return (
        <View style={styles.item}>
            <Text style={styles.itemText}>{props.text}</Text>
        </View>
    )
}

const styles = StyleSheet.create ({
    item: {
        backgroundColor: '#FFF',
        padding: 15,
        borderRadius: 10,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        marginBottom: 20
    },
    itemText: {
        maxWidth: '80%'
    },
});

export default Task;