import styles from './card.module.css'
import Image from 'next/image';

export default function Card() {
    return (
        <div className={styles.card}>
            <div className={styles.cardimg}>
                <Image src={'/img/card.jpeg'}
                alt='Picture'
                fill={true}
                style={{objectFit:"cover"}}/>
            </div>
            <div className={styles.cardtext}>a vaccine fact here</div>
        </div>
    );
}