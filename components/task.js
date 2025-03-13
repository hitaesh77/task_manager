import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';

const Task = ({ text, completed, onToggleComplete, onDelete }) => { 
  return (
    <View style={styles.item}>
        <View style={styles.itemLeft}>
            <TouchableOpacity style={[styles.square, completed && styles.checked]} onPress={onToggleComplete} />
            <Text style={[styles.itemText, completed && styles.strikethrough]}>{text}</Text>
        </View>
        <TouchableOpacity onPress={onDelete}>
            <View style={styles.circular} />
        </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
    item: {
        backgroundColor: '#fffcf2',
        padding: 15,
        borderRadius: 10,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        marginBottom: 20,
    },
    itemLeft: {
        flexDirection: 'row',
        alignItems: 'center',
        flexWrap: 'wrap',
    },
    square: {
        width: 24,
        height: 24,
        backgroundColor: '#eb5e28',
        opacity: 0.4,
        borderRadius: 5,
        marginRight: 15,
    },
    itemText: {
        maxWidth: '80%',
        color: '#252422'
    },
    circular: {
        width: 12,
        height: 12,
        borderColor: '#eb5e28',
        borderWidth: 2,
        borderRadius: 5,
    },
    strikethrough: {
        textDecorationLine: 'line-through',
        color: '#888',
    },
    checked: {
        backgroundColor: '#4caf50',
    },
});

export default Task;