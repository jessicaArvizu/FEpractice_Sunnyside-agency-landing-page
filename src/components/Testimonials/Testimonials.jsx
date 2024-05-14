import Card from "./Card";
import imgEmily from "../../images/image-emily.jpg"
import imgJennie from "../../images/image-jennie.jpg"
import imgThomas from "../../images/image-thomas.jpg"

function Testimonials() {
    return (
        <div className="p-40">
            <h2 className="uppercase font-bold tracking-[5px] flex justify-center items-center text-center text-[20px]">
                Client testimonials
            </h2>

            <div className="flex flex-col grid grid-cols-1 lg:grid-cols-3 mt-20">
                <div>
                    <Card
                        img={imgEmily}
                        testimonial='We put our trust in Sunnyside and they delivered, making sure our needs were met and deadlines were always hit.'
                        name='Emily R.'
                        position='Marketing Director'
                    />
                </div>

                <div>
                    <Card
                        img={imgThomas}
                        testimonial='Sunnyside’s enthusiasm coupled with their keen interest in our brand’s success made it a satisfying and enjoyable experience.'
                        name='Thomas S.'
                        position='Chief Operating Officer'
                    />
                </div>

                <div>
                    <Card
                        img={imgJennie}
                        testimonial='Incredible end result! Our sales increased over 400% when we worked with Sunnyside. Highly recommended!'
                        name='Jennie F.'
                        position='Business Owner'
                    />
                </div>
            </div>
        </div>
    )
}

export default Testimonials;