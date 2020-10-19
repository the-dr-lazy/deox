import React from 'react'

import { CategoryItem } from './category-item'

export const CategoryList = () => (
    <ul className="CategoryList">
        <CategoryItem color="#208efe" label="Personal" value="13 tasks" active />
        <CategoryItem color="#fee420" label="Work" value="29 tasks" />
        <CategoryItem color="#5C20FE" label="Health" value="1 task" />
        <CategoryItem color="#20FE9D" label="Shopping" value="nothing" active />
        <CategoryItem color="#FF317E" label="University" value="1 task" />
    </ul>
)
