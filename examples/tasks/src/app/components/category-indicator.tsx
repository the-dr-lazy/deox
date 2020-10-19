import React from 'react'
import classNames from 'classnames'

export type CategoryIndicatorProps = {
    color?: string
    active?: boolean
} & JSX.IntrinsicElements['span']

export const CategoryIndicator = ({ color, active, className, ...rest }: CategoryIndicatorProps) => (
    <span
        style={active ? { backgroundColor: color } : { borderColor: color }}
        className={classNames('CategoryIndicator', active && 'CategoryIndicator--active', className)}
        {...rest}
    />
)
