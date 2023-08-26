import './Contact.sass';
import Button from '../../components/Button/Button';

function Contact() {
  return (
    <div className="contactMe">
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusantium,
        maiores quis dolorum eum, minus consequuntur quam fugiat exercitationem
        assumenda, neque ipsam provident labore repellat vero eos architecto
        tempora. Nisi, incidunt!
      </p>
      <Button
        link="mailto:meriscarrera@gmail.com"
        text={'Contactez-moi'}
        className={'white'}
      />
    </div>
  );
}

export default Contact;
