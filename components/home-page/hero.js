import Image from 'next/image';
import classes from './hero.module.css';

function Hero() {
    return (
        <section className={classes.hero}>
            <div className={classes.image}>
                <Image src='/images/site/eric.jpg' alt='An image showing Eric.' width={300} height={300}/>
            </div>
            <h1>Hi, I'm Eric</h1>
            <p>
                I blog about web development - especially frontend frameworks like 
                React or NextJS.
            </p>
        </section>
    );
}

export default Hero;
