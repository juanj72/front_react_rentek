

function click() {
    alert('has hecho click en este boton');
}

function MyButton({ count, onClick }) {

    


    return (

        <div>
            <button onClick={onClick} >Soy un boton y me has presionado {count} veces </button>
            <button onClick={click} > este es mi otro boton</button>
        </div>



    );
}

export default MyButton;