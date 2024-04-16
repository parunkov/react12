import { Button, Checkbox, FormControlLabel, FormGroup, FormLabel } from "@mui/material";
import { ItestData } from "../../App";
import { ChangeEvent, useState } from "react";

function CheckboxTest({ question, answers, callback }: ItestData) {

    const initialState: {[key: string]: boolean} = {};
    answers.forEach((item) => {
        initialState[item] = false;
    });
    const [values, setValues] = useState(initialState);

    const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
        const wrapper = event.target.closest('.testCheckbox') as HTMLElement;
        const newValues = {...values};
        if (!wrapper.dataset.item) return;
        newValues[wrapper.dataset.item] = event.target.checked;
        setValues(newValues)
      };

    const onAnswerClick = () => {
        if (!callback) return;
        const data = Object.keys(values).filter((item) => values[item]);
        callback(data);
    }

    return (
        <>
            <FormGroup>
                <div className="label">
                    <FormLabel id="demo-checkbox-group-label">{question}</FormLabel>
                </div>
                {answers.map((item) => <FormControlLabel key={item} className="testCheckbox" data-item={item} control={<Checkbox checked={values[item]} onChange={handleChange} />} label={item} />)}
            </FormGroup>
            <div className="buttonWrapper">
                <Button variant="contained" onClick={onAnswerClick}>Ответить</Button>
            </div>
        </>
    )
}

export default CheckboxTest
