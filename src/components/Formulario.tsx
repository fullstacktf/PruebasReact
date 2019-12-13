import React, { FC, useState } from 'react';

export type FormType = 'VENTA' | 'ALQUILER';

interface FormularioProps {
    type: FormType;
    local: Local;
}

export interface Local {
    name: string;
    description: string;
    price: number;
}

export const Formulario: FC<FormularioProps> = ({ type, local }) => {
    const [myLocal, setMyLocal] = useState<Local>({ ...local });
    const [isSent, setIsSent] = useState(false);


    const handleOnChange = ({ currentTarget: { value, name } }) => {
        console.log('Me cambio', value, name);
        setMyLocal({ ...myLocal, [name]: value })
    };

    const handleOnSubmit = (event) => {
        event.preventDefault();
        console.log('Envío formulario', myLocal);
        setMyLocal({ name: '', description: '', price: 0 })
        setIsSent(true);
        setTimeout(() => {
            setIsSent(false);
        }, 1000)
        // setMyLocal({} as Local);
        // event.currentTarget.reset();
    };

    const cancel = () => {
        setMyLocal({ ...local });
    };

    if (isSent) {
        return <h1>Formulario envíado correctamente</h1>;
    }

    return <div>
        <h1>{type}</h1>
        <form onSubmit={handleOnSubmit}>
            <input value={myLocal.name} name="name" onChange={handleOnChange} placeholder="Name"/>
            <textarea value={myLocal.description} name="description" onChange={handleOnChange} placeholder="Description"/>
            <input value={myLocal.price} name="price" onChange={handleOnChange} placeholder="Price"/>
            <button type="submit">Enviar</button>
        </form>
        <button onClick={cancel}>Cancel</button>
    </div>
};
