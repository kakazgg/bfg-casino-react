import {useState} from 'react';

import {useField} from 'formik';


import {
    ErrorMsg
} from "./Styles";


export const TextInput = ({icon, ...props}) => {
    const [field, meta] = useField(props);
    const [show] = useState(false);

    return(
        <div class="single-input">
            
            {props.type  !== "password" && <input
            invalid={meta.touched && meta.error} 
            {...field}
            {...props}
            />}

            {props.type === "password" && (
                <input
                invalid={meta.touched && meta.error}
                {...field} {...props}
                type={show? "text" : "password"}
                />
            )}

            {meta.touched && meta.error ? (
                <ErrorMsg>{meta.error}</ErrorMsg>
            ): (
                <ErrorMsg style={{visability: "hidden"}}></ErrorMsg>
            )}
        </div>
    )
}