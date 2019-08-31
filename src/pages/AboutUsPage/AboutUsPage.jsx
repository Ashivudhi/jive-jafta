import React, { Component } from 'react'
import cx from 'classnames';
import styles from './AboutUsPage.module.scss';

export class AboutUs extends Component {
    render() {
        return (
            <div className={cx(styles.content)}>
        <div className={cx(styles.leftpane)}>
        <div className={cx(styles.leftHeader)}>
        
          </div>
          <div className={cx(styles.leftBody)}>
        
          </div>
          </div>

        <div className={cx(styles.middlepane)}>
          <div className={cx(styles.middleHeader)}>
          <h3><b>Jive technologies</b> is a national transportation network which aims to create
                a platform where drivers and riders can interactsafely, conviniently and at affordable rates.
                Also making provisions for other logistic solutions such as food deliviries, parcels, house 
                and office relocation and many more, and whilst at it provide insurance for all JIVE and 
                other mediums of transportation vehicles within the Namibian borders.</h3>
          </div>
          <div className={cx(styles.rightBody)}></div>
          </div>
          <div className={cx(styles.rightpane)}>
          <div className={cx(styles.rightHeader)}>
          
          </div>
          <div className={cx(styles.rightBody)}></div>
          </div>
          
    
     
            <div>
                
            </div>
            </div>
        )
    }
}

export default AboutUs
