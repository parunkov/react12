import { Button, FormControl, FormLabel, TextField } from "@mui/material";
import { ChangeEvent, useState } from "react";
import { ItestData } from "../../App";

function InputTest({ question, callback }: ItestData) {
    const [value, setValue] = useState('');

    const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
        setValue((event.target as HTMLInputElement).value);
    };

    const onAnswerClick = () => {
        if (!callback) return;
        callback(value);
    }

    return (
        <>
            <FormControl>
                <FormLabel id="demo-input-group-label">{question}</FormLabel>
                <TextField id="outlined-basic" className="testInput" variant="outlined" onChange={handleChange}/>
            </FormControl>
            <div className="buttonWrapper">
                <Button variant="contained" onClick={onAnswerClick}>Ответить</Button>
            </div>
        </>
    )
}

export default InputTest
