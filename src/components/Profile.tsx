import styles from '../styles/components/Profile.module.css';
export function Profile() {
    return (
        <div className={styles.profileContainer}>
            <img src="https://github.com/rayzen2002.png" alt="Emanuel Magalhaes" />
            <div>
                <strong>Emanuel Magalhaes</strong>
                <p>
                    <img src="icons/level.svg" alt="Level" />
                    Level 1
                </p>
            </div>
        </div>
    )
}