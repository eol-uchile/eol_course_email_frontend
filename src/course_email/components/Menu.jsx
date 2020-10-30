import React from 'react';
import { Button } from '@edx/paragon';

export default function Menu() {

    console.log('Menu loaded');

    return (
        <div>
            <Button>Enviar Nuevo Correo</Button>
            <Button>Ver Correos Recibidos</Button>
            <Button>Ver Correos Enviados</Button>
        </div>
    )
}
