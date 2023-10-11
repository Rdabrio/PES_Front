import React from 'react'
import { Text, StyleSheet } from 'react-native'
import theme from '../theme.js'

const styles = StyleSheet.create({
    text: {
        color: theme.colors.textPrimary,
        fontSize: theme.fontSizes.body,
        fontFamily: theme.fonts.main,
        fontWeight: theme.fontWeights.normal
    },
    colorPrimary: {
        color: theme.colors.primary
    },
    colorSecondary: {
        color: theme.colors.textSecondary
    },
    white: {
        color: 'white'
    },
    bold: {
        fontWeight: theme.fontWeights.bold
    },
    subheading: {
        fontSize: theme.fontSizes.subheading
    },
})

export default function StyledText({children, color, fontSize, fontWeight, style, ...restOfProps}) {
    const textStyles = [
        color === 'primary' && styles.colorPrimary,
        color === 'secondary' && styles.colorSecondary,
        color === 'white' && styles.white,
        fontSize === 'subheading' && styles.subheading,
        fontWeight === 'bold' && styles.bold
    ]

    return (
        <Text style={textStyles} {...restOfProps}>
            {children}
        </Text>
    )
}