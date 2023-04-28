import styles from './Info.module.css';
import './Info.css';

const Info = () => {
    return (
        <div className={styles.info}>
            <h1>Hello from the Info component</h1>
            <button className={styles.myOtherButton}>Click me in the Info component</button>
            <div>
                <button className="my-button">Click me in the Info component</button>
            </div>
        </div>
    );
};

export default Info;