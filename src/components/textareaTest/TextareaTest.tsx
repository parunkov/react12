import { Button, FormControl, FormLabel, TextField } from "@mui/material";
import { ChangeEvent, useState } from "react";
import { ItestData } from "../../App";

function TextareaTest({ question, callback }: ItestData) {
    const [value, setValue] = useState(['', '']);

    const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
        const newState = [...value];
        if ((event.target as HTMLInputElement).id === 'basic') {
            newState[0] = (event.target as HTMLInputElement).value;
        } else {
            newState[1] = (event.target as HTMLInputElement).value;
        }
        setValue(newState);
    };

    const onAnswerClick = () => {
        if (!callback) return;
        callback(value);
    }

    return (
        <>
            <FormControl>
                <FormLabel id="demo-input-group-label">{question}</FormLabel>
                <TextField id="basic" className="testInput" label="Ответ" variant="outlined" onChange={handleChange} />
                <TextField
                    onChange={handleChange}
                    id="multiline"
                    className="testInput"
                    label="Решение"
                    multiline
                    rows={4}
                />
            </FormControl>
            <div className="buttonWrapper">
                <Button variant="contained" onClick={onAnswerClick}>Ответить</Button>
            </div>
        </>
    )
}

export default TextareaTest
