import React from 'react'
import styles from './Card.module.css'

const STYLES = ['card--primary', 'card--outline'];

const SIZES = ['card--default', 'card--wide'];

const COLORS = ['card--primary--color', 'card--gradient--purple', 'card--gradient--red'];
function Card({
	children,
	cardStyle,
	cardSize,
	cardColor
}) {

	const checkCardStyle = STYLES.includes(cardStyle) ? cardStyle : STYLES[0];
	const checkCardSize = SIZES.includes(cardSize) ? cardSize : SIZES[0];
	const checkCardColorScheme = COLORS.includes(cardColor) ? cardColor : COLORS[0];

	return (
		<>
			<div className={styles[`card ${checkCardStyle} ${checkCardSize} ${checkCardColorScheme}`]}>

				{children}
			</div>
		</>
	)
}

function CardOutline({
	children
}) {
	return (
		<>
			{children}
		</>
	)
}

export { Card, CardOutline }