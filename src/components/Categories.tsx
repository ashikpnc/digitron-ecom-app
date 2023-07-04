import * as React from "react";
import styles from '@/styles/Home.module.css'

export interface Props {}

const Categories = (props: Props) => {
    return <div>
        <h3>Categories</h3>
        <div className={styles.categoryGrid} >
            <div>Cat1</div>
            <div>Cat2</div>
            <div>Cat3</div>
            <div>Cat4</div>
            <div>Cat1</div>
            <div>Cat2</div>
            <div>Cat3</div>
            <div>Cat4</div>
            <div>Cat1</div>
            <div>Cat2</div>
            <div>Cat3</div>
            <div>Cat4</div>
        </div>
  </div>;
};

export default Categories;
