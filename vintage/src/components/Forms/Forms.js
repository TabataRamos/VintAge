import ButtonFull from "../ButtonFull/ButtonFull";
import "./Forms.css";

function Forms(props) {
  return (
    <div className="__forms">
      <div className="__form-campos">
        <form>
          <label>
            Nome
            <input type="text" name="name" />
          </label>
          <label>
            Email
            <input type="text" name="email" />
          </label>
          <label>
            Whatsapp
            <input type="text" name="whats" placeholder="Opcional" />
          </label>
          <div className="button-submit">
            <ButtonFull text="Enviar">
              <input type="submit" value="Enviar" />
            </ButtonFull>
          </div>
        </form>
      </div>
      <div>
        <img
          src={require(`../../assets/images/${props.imagem}.png`)}
          alt="logo"
        ></img>
      </div>
    </div>
  );
}

export default Forms;
