import React from 'react'
import { StyleSheet, View } from 'react-native'

export default ({ children }) => <View style={styles.section}>{children}</View>

const styles = StyleSheet.create({
    section: {
        marginTop: 20,
        marginBottom: 15,
        marginLeft: 35,
        marginRight: 40,
    },
})
