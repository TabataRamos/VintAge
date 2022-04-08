import ButtonFull from "../ButtonFull/ButtonFull";
import "./Forms.css";

function Forms(props) {
  return (
    <div className="__forms">
      <div className="__form-campos">
        <form
          action="https://gmail.us14.list-manage.com/subscribe/post?u=63dc892e925da2c7389193d80&amp;id=a0a3f308ab"
          method="post"
          id="mc-embedded-subscribe-form"
          name="mc-embedded-subscribe-form"
          className="validate"
          target="_blank"
          noValidate
        >
          <label htmlFor="mce-FNAME">
            Nome
            <input type="text" name="FNAME" className="required" id="mce-FNAME" />
          </label>
          <label htmlFor="mce-EMAIL">
            Email
            <input type="email" name="EMAIL" className="required email" id="mce-EMAIL" />
          </label>
          <label htmlFor="mce-PHONE">
            Whatsapp
            <input type="text" name="PHONE" className="" id="mce-PHONE" placeholder="Opcional" />
          </label>
          <div style={{ position: "absolute", left: "-5000px" }} aria-hidden="true">
            <input type="text" name="b_63dc892e925da2c7389193d80_a0a3f308ab" tabIndex="-1" />
          </div>
          <div className="button-submit">
            <ButtonFull text="Enviar" id="button-full-form">
              <input type="submit" value="Enviar" name="subscribe" id="mc-embedded-subscribe" />
            </ButtonFull>
          </div>
        </form>
      </div>
      <div>
        <img src={require(`../../assets/images/${props.imagem}.png`)} alt="logo"></img>
      </div>
    </div>
  );
}

export default Forms;
