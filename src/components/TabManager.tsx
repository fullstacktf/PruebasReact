import React, { FC, useState } from 'react';
import { TabSelectorButton } from "./TabSelectorButton";
import { FormType, Formulario, Local } from "./Formulario";

const local: Local = {
    description: 'Mi local',
    name: 'Local',
    price: 120
};

export const TabManager: FC = () => {
    const [selectedType, setSelectedType] = useState<FormType>();

    const selectAlquiler = () => {
        if (selectedType !== "ALQUILER") {
            console.log('Muestro el alquiler');
            setSelectedType("ALQUILER");
        }
    };

    const selectVenta = () => {
        if (selectedType !== 'VENTA') {
            console.log('Muestro la compra');
            setSelectedType('VENTA');
        }
    };

    return <div>
        Soy el tab Manager
        <div>
            <TabSelectorButton onClick={selectAlquiler} title="Alquiler"/>
            <TabSelectorButton onClick={selectVenta} title="Venta"/>
        </div>
        <div>
            Soy el contenido del Tab seleccionado
            {selectedType && <Formulario type={selectedType} local={local}/>}
        </div>

    </div>
};
