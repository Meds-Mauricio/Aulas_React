import React from 'react'
import styles from './card.module.scss'
import { AiFillStar } from 'react-icons/ai'

export default function Card({ title, price, feels, thumbnail }) {
    return (
        <div className={styles['container']}>
            <div className={styles['thumbnail']}>
                <img src={thumbnail} />
            </div>
            <div className={styles['infoContent']}>
                <p>{title}</p>
                <div className='stars'>
                    <AiFillStar color='#f2c832' />
                    <AiFillStar color='#f2c832' />
                    <AiFillStar color='#f2c832' />
                    <AiFillStar color='#cccccc' />
                    <AiFillStar color='#cccccc' />
                </div>
                <span className='price'>{price}</span>
                <span>{feels}</span>
            </div>
        </div>
    )
}
