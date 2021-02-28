import React, { useContext, useState } from 'react';
import { AlertContext } from '../../Context/alert/alertContext';

// styles 
import styles from './Form.module.css'


export const Form = () => {
    const [nameValue, setNameValue] = useState('');
    const [linkValue, setLinkValue] = useState('');

    const alert = useContext(AlertContext)

    const submitHandler = event => {
        event.preventDefault()
        const alertMssage = nameValue.trim() && linkValue.trim() ? 'Класс' : 'Поля не могут быть пустыми'

        alert.show(nameValue, linkValue, 'success')
        alert.show(alertMssage)

    }

    return (
        <form onSubmit={submitHandler}>
            <input value={nameValue} onChange={e => setNameValue(e.target.value)} type="text" className={`${styles.songInput} ${styles.name}`} placeholder="Song name" />
            <br />
            <input type="text" value={linkValue} onChange={e => setLinkValue(e.target.value)} className={`${styles.songInput} ${styles.link}`} placeholder="Song link" />
            <input type="submit" value="send" />
        </form>
    )
}