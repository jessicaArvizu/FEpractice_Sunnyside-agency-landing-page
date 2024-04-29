import milkBottles from '../../images/desktop/image-gallery-milkbottles.jpg';
import orange from '../../images/desktop/image-gallery-orange.jpg'
import cone from '../../images/desktop/image-gallery-cone.jpg'
import sugarCubes from '../../images/desktop/image-gallery-sugarcubes.jpg'

function Gallery() {
    return (
        <div className="grid grid-cols-2 lg:grid-cols-4">
            <img src={milkBottles} />
            <img src={orange} />
            <img src={cone} />
            <img src={sugarCubes} />
        </div>
    )
}

export default Gallery;