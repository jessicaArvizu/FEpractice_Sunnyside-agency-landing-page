import PropTypes from 'prop-types';

function Card(props) {
    return (
        <div className='flex flex-col justify-center items-center text-center px-4'>
            <img className="rounded-full" width={'70px'} src={props.img}></img>
            <p className='leading-8 mt-14'>
                {props.testimonial}
            </p>
            <h2 className='font-black mt-16'>
                {props.name}
            </h2>
            <p className='text-sm mt-4'>
                {props.position}
            </p>
        </div>
    )

}

Card.propTypes = {
    name: PropTypes.string.isRequired,
    img: PropTypes.string.isRequired,
    testimonial: PropTypes.string.isRequired,
    position: PropTypes.string.isRequired
}


export default Card;