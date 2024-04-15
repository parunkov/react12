import { Button, FormControl, FormControlLabel, FormLabel, Radio, RadioGroup } from "@mui/material";
import { ChangeEvent, useState } from "react";
import { ItestData } from "../../App";

function RadioTest({ question, answers, callback }: ItestData) {
    const [value, setValue] = useState(answers[0]);

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
                <FormLabel id="demo-radio-buttons-group-label">{question}</FormLabel>
                <RadioGroup
                    aria-labelledby="demo-radio-buttons-group-label"
                    value={value}
                    name="radio-buttons-group"
                    onChange={handleChange}
                >
                    {answers.map((item) => <FormControlLabel key={item} value={item} control={<Radio />} label={item} />)}
                </RadioGroup>
            </FormControl>
            <div className="buttonWrapper">
                <Button variant="contained" onClick={onAnswerClick}>Ответить</Button>
            </div>
        </>
    )
}

export default RadioTest
