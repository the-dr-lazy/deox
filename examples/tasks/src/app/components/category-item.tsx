import React from 'react'
import classNames from 'classnames'

import { CategoryIndicator } from './category-indicator'

export type CategoryItemProps = {
  color: string
  label: string
  value: string
  active?: boolean
} & JSX.IntrinsicElements['li']

export const CategoryItem = ({
  color,
  label,
  value,
  active,
  className,
  ...rest
}: CategoryItemProps) => (
  <li className={classNames('CategoryItem', className)} {...rest}>
    <CategoryIndicator
      className="CategoryItem__indicator"
      color={color}
      active={active}
    />
    <div className="CategoryItem__content">
      <h4 className="CategoryItem__label">{label}</h4>
      <p className="CategoryItem__value">{value}</p>
    </div>
  </li>
)
