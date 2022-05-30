import React from 'react'
import Lottie from 'lottie-react-web'
import styles from './index.module.scss'
const Animated = () => {
    return (
        <div className={styles.container}>
            <Lottie options={{
                animationData: require("/Users/edy/personal/photo_album/photoAlbum/public/animation/smile.json"),
                autoplay: true,
                loop: false
            }}
                direction={1}
                animationControl={{
                    'Square,Transform,Position': [0, 0],
                }}
            >
            </Lottie>
        </div>)
}
export default Animated;