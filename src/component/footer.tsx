import React from 'react';
import { Link } from 'gatsby';
import styles from './footer.module.css';
export default function Footer() {
    return (
        <div>
            <p className={styles.footer}> © 2020 GitHub, Inc </p>
        </div>
    )
}