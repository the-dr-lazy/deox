import React from 'react'
import { connect } from 'react-redux'
import classNames from 'classnames'
import { createSnackbar } from '~/store'

import { CategoryIndicator } from './category-indicator'

export type CategoryItemInnerDispatchProps = {
  createSnackbar: typeof createSnackbar
}
export type CategoryItemInnerOwnProps = {
  color: string
  label: string
  value: string
  active?: boolean
  className?: string
}
export type CategoryItemInnerProps = CategoryItemInnerDispatchProps &
  CategoryItemInnerOwnProps

export const CategoryItemInner = ({
  color,
  label,
  value,
  active,
  className,
  createSnackbar,
}: CategoryItemInnerProps) => (
  <li
    className={classNames('CategoryItem', className)}
    onClick={() =>
      createSnackbar({
        title: 'Categories',
        message: 'This feature has not implemented yet.',
      })
    }
  >
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

export const CategoryItem = connect<
  null,
  CategoryItemInnerDispatchProps,
  CategoryItemInnerOwnProps
>(
  null,
  { createSnackbar }
)(CategoryItemInner)
