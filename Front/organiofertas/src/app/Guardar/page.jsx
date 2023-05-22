
import FormOfertas from "../components/form oferta"
import Welcome from "../components/welcome"
import {textForm} from "../../../utils/textos"



export default function Guardar() {
    return (
      <>
        <Welcome text={textForm}></Welcome>
        <FormOfertas />
      </>
    )
  }