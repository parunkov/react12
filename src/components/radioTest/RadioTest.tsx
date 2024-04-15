import { Button, FormControl, FormControlLabel, FormLabel, Radio, RadioGroup } from "@mui/material";
import { ChangeEvent, useState } from "react";

export interface IradioProps {
    id?: number;
    question: string;
    answers: string[];
    type?: string;
    result?: string | null;
    callback?: (value: string) => void;
}

function RadioTest({ question, answers, callback }: IradioProps) {
    const [value, setValue] = useState(answers[0]);

    const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
        setValue((event.target as HTMLInputElement).value);
    };

    const onAnswerClick = () => {
        if (!callback) return;
        console.log(value);
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
