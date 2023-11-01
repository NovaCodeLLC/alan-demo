import {Item} from '@components/components/styling/settings-elements/SettingsElementStyles';
import {StyledTextField} from '@components/components/styling/form/TextInputStyles';
import {customTheme} from '@components/styles/global';
import {Checkbox, FormControl, FormControlLabel, FormLabel, MenuItem, Radio, RadioGroup, Select} from '@mui/material';

type Props = {
    formik: any
};
export default function FormTemplate({formik}: Props) {

    return (
        <>
            {
                  Object.keys(formik.values).map((key) => (
                        <Item key={key} style={{minHeight: '100px'}}>
                            {formCtrlSelector(formik, key)}
                        </Item>
                  ))
            }
        </>
    );
};

function formCtrlSelector( formik: any, key: string ) {
    const textFields = ['Name', 'Email', 'Password', 'Confirm Password'];
    const selectFields = ['Theme'];
    const checkboxFields = ['Subscribe'];
    const radio = ['Gender'];

    if ( textFields.some( field => field === key ) ) {
        return (
            <StyledTextField
                InputProps={{classes:{input: '40px'}}}
                theme={customTheme}
                variant={'filled'}
                color='secondary'
                type={key === 'Password' || key === 'Confirm Password' ? 'password' : 'text'}
                fullWidth
                id={key}
                name={key}
                label={key}
                value={formik.values[key]}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                error={formik.touched[key] && Boolean(formik.errors[key])}
                helperText={formik.touched[key] && formik.errors[key]}
            />
        )
    } else if ( selectFields.some( field => field === key ) ) {
        return (
            <Select
                fullWidth
                id={key}
                color='secondary'
                name={key}
                label={key}
                value={formik.values[key]}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                error={formik.touched[key] && Boolean(formik.errors[key])}
                >
                <MenuItem value={'light'}>Light</MenuItem>
                <MenuItem value={'dark'}>Dark</MenuItem>
            </Select>
        )
    } else if ( checkboxFields.some( field => field === key ) ) {
        return (
            <FormControlLabel
                color='secondary'
                id={key}
                name={key}
                control={
                    <Checkbox
                        defaultChecked
                        onChange={formik.handleChange}
                        value={formik.value}/>
                }
                label="Subscribe to our newsletter" />
        );
    } else if ( radio.some( field => field === key ) ) {
        return (
            <FormControl>
                <FormLabel id="gender-selection-group">Gender</FormLabel>
                <RadioGroup
                    id={key}
                    defaultValue={'male'}
                    name={key}>
                    <FormControlLabel control={<Radio/>} label={'Female'} value={'female'} />
                    <FormControlLabel control={<Radio/>} label={'Male'} value={'male'} />
                    <FormControlLabel control={<Radio/>} label={'Other'} value={'other'} />
                </RadioGroup>
            </FormControl>
        )
    }
}
