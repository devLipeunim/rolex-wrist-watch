import Image from "next/image";

const TestimonialCards = (props) => {
    const { id, description, image01, date, profileName, profileDetails } = props.item;

  return (
    <div className="testimonial__card swiper-slide">
      <div className="testimonial__quote">
        <i className="bx bxs-quote-alt-left"></i>
      </div>
      {/* <p className="testimonial__description">{description}</p> */}
      <h3 className="testimonial__date">{date}</h3>

      <div className="testimonial__perfil">
        <Image src={image01} alt="" className="testimonial__perfil-img" />

        <div className="testimonial__perfil-data">
          <span className="testimonial__perfil-name">{profileName}</span>
          <span className="testimonial__perfil-detail">{profileDetails}</span>
        </div>
      </div>
    </div>
  );
};

export default TestimonialCards;
