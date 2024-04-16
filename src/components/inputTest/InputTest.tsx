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
                <div className="label">
                    <FormLabel id="demo-input-group-label">{question}</FormLabel>
                </div>
                <div className="testInput">
                    <TextField id="outlined-basic" variant="outlined" onChange={handleChange}/>
                </div>
            </FormControl>
            <div className="buttonWrapper">
                <Button variant="contained" onClick={onAnswerClick}>Ответить</Button>
            </div>
        </>
    )
}

export default InputTest
