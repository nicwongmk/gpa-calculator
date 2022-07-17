import Modal from "../../UI/modal/modal";
import styles from '../../../styles/components/header/about/about.module.css';

const About = ({ closeAbout }) => {
    return (
        <Modal className={ styles.container } closeModal={ closeAbout }>
            <h2>About</h2>
            <p>The GPA Calculator helps you to calculate your GPA by customised settings.
                Items below show the settings that you can define to fit your needs: <br /><br />
                1. Points gained by each grade <br />
                2. Maximum CGPA <br />
                3. Decimal place of your CGPA <br />
                4. Rounding mechanism  <br /><br />
                Three preset profiles are available for you to have a quick set for some of 
                the most popular GPA calculation methods in the world.
                <br /><br />
                This calculator is designed by Nicholas Wong in 2022
                using Next.js with TypeScript. It is also my first side project
                and I am excited to help you in calculating your GPA!
                <br /><br />
                Please contact me using the Contact button on the menu if you have any
                recommendations.
                <br /><br />
                Enjoy!
            </p>
        </Modal>
    );
}

export default About;