import Person from "../../../../Assets/person-20.png"
export default function TestimonialCard(props) {
    return (
        <article className="testimonial-card">
            <img src={Person} alt="delivery Icon"></img>
            <h3>{props.name}</h3>
            <p>{props.description}</p>
        </article>
    );
}