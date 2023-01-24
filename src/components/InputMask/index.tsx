import { FormEvent } from 'react';
import InputMask from 'react-input-mask';

interface MaskedInputprops {
    name: string;
    mask: string;
    value: string;
    onChange: any;
}



export const MaskedInput = ({name, mask, value, onChange}: MaskedInputprops) =>{
   
    return(
        <InputMask 
        name={name} 
        mask={mask} 
        value={value}
        onChange={onChange}/>
    )
}

//Resolver problema do componente