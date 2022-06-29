import './index.scss'

// first arg *letterClass: the class we want to apply to our characters
// second arg *strArray: the array of characters itself
// third arg *idx: the index - starting point of the delay
const AnimatedLetters = ({ letterClass, strArray, idx }) => {
    return (
        <span>
            {
                strArray.map((char, i) => (
                    <span key={char + i} className={`${letterClass} _${i + idx}`}>
                        {char}
                    </span>
                ))
            }

        </span>
    )
};


export default AnimatedLetters;