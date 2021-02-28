import React from 'react';

// styles 
import styles from './Songs.module.css';

export const Songs = ({songsList}) => {
    return (
        <ul className={styles.songsList}>
            {songsList.map(song => (
                <li key={song.id} className={styles.songItem}>
                    {song.name}
                </li> 
            ))}
        </ul>
    )
}