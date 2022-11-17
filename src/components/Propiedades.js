import PropTypes from "prop-types";

const Propiedades = (props) => {
    return(
        <div>
            <h3>{props.porDefecto}</h3>
            <ul>
                <li>{props.cadena}</li>
                <li>{props.numero}</li>
                <li>{props.boolean ? "Verdadero" : "Falso"}</li>
                <li>{props.arreglo.join(", ")}</li>
                <li>{props.objeto.nombre + " - " + props.objeto.correo}</li>
                <li>{props.arreglo.map(props.funcion).join(", ")}</li>
                <li>{props.elementoReact}</li>
                <li>{props.componenteReact}</li>
            </ul>
        </div>
    );
}

Propiedades.defaultProps={
    porDefecto:"Propiedades",
};

Propiedades.propTypes={
    numero:PropTypes.number.isRequired,
};

export default Propiedades;