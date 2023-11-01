import {ISettingsForm, settingsValidators} from '@components/components/forms/settings/validators';
import {useFormik} from 'formik';
import FormTemplate from '@components/components/forms/settings/formTemplate';
import Button from '@mui/material/Button';
import Grid from '@mui/material/Grid';

const SettingsForm = () => {
    const form = useFormik({
        initialValues: {
            Name: '',
            Email: '',
            Password: '',
            ["Confirm Password"]: '',
            Subscribe: true,
            Gender: 'male',
            Theme: 'light'
        },
        validationSchema: settingsValidators,
        onSubmit: (values: ISettingsForm) => {
            alert(JSON.stringify(values, null, 2));
        }
    })

    const { handleSubmit, values } = form;
    const formTemplate = FormTemplate({formik: form});

    return (
        <>
            <Grid onSubmit={handleSubmit} component={'form'} style={{margin: 0, width: '100%'}}
                  noValidate spacing={2} container id="settingsForm">
                {formTemplate}
            </Grid>
            <Button type="submit" variant='outlined' form="settingsForm" fullWidth>Submit</Button>
        </>
    );
};

export default SettingsForm;
