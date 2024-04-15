import { FormControl, FormControlLabel, FormLabel, Radio, RadioGroup } from "@mui/material";

interface RadioProps {
    question: string;
    answers?: string[];
}

function RadioTest({ question, answers }: RadioProps) {
    console.log(question);
    console.log(answers);
    

    return (
        <>
            <FormControl>
                <FormLabel id="demo-radio-buttons-group-label">{question}</FormLabel>
                <RadioGroup
                    aria-labelledby="demo-radio-buttons-group-label"
                    defaultValue={answers && answers[0]}
                    name="radio-buttons-group"
                >
                    {answers && answers.map((item) => <FormControlLabel value={item} control={<Radio />} label={item} />)}
                </RadioGroup>
            </FormControl>
        </>
    )
}

export default RadioTest
