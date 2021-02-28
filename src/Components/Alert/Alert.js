import React, { useContext } from 'react';
import { AlertContext } from "../../Context/alert/alertContext";

// styles 
import styles from './Alert.module.css'


export const Alert = () => {
    const {alert, hide} = useContext(AlertContext)

    if (!alert.visible) {
        return null
    }

    return (
        <div>
            <strong>Внимание:</strong>

            {alert.text}
            <button onClick={hide} type="button" aria-label="Close">
                <span aria-hidden='true' >&times;</span>
            </button>
        </div>
    )
}