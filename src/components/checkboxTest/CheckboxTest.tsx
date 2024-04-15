import { Button, Checkbox, FormControlLabel, FormGroup, FormLabel } from "@mui/material";
import { ItestData } from "../../App";
import { useState } from "react";

function CheckboxTest({ question, answers, callback }: ItestData) {

    const initialState: {[key: string]: boolean} = {};
    answers.forEach((item) => {
        initialState[item] = false;
    });
    const [values, setValues] = useState(initialState);
    console.log('values', values)

    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        console.log(event.target.checked);
        
        // setChecked(event.target.checked);
      };

    const onAnswerClick = () => {
        if (!callback) return;
        // callback('value');
    }

    return (
        <>
            <FormGroup>
                <FormLabel id="demo-checkbox-group-label">{question}</FormLabel>
                {answers.map((item) => <><p>{values[item].toString()}</p><FormControlLabel key={item} className="testCheckbox" control={<Checkbox checked={values[item]?.checked} onChange={handleChange} />} label={item} /></>)}
            </FormGroup>
            <div className="buttonWrapper">
                <Button variant="contained" onClick={onAnswerClick}>Ответить</Button>
            </div>
        </>
    )
}

export default CheckboxTest
