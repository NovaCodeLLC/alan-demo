import {createTheme, ThemeOptions} from '@mui/material/styles';

const themeOptions: ThemeOptions = {
    palette: {
        mode: 'dark',
        primary: {
            main: '#0fef79',
            dark: '#00bb4a',
            light: '#6bffaa',
        },
        secondary: {
            main: '#7044ff',
            dark: '#633ce0',
            light: '#7e57ff',
        },
        background: {
            default: '#0c0f14',
            paper: '#33353a',
        },
        success: {
            main: '#10dc60',
            dark: '#0ec254',
            light: '#28e070',
        },
        warning: {
            main: '#ffce00',
            dark: '#e0b500',
            light: '#ffd31a',
        },
        error: {
            main: '#f04141',
            dark: '#d33939',
            light: '#f25454',
        },
        text: {
            primary: '#bdbdbd',
            secondary: 'rgb(136,134,134)',
            disabled: 'rgba(243,95,95,0.32)',
        },
    },
    spacing: 5,
    shape: {
        borderRadius: 4,
    },
    typography: {
        h1: {
            fontSize: '3.5em',
            fontWeight: 500,
        },
        h2: {
            fontSize: '3.2em',
            fontWeight: 500,
        },
        h3: {
            fontSize: '2.9em',
            fontWeight: 500,
        },
        fontSize: 16,
        h5: {
            fontSize: '2.3em',
            fontWeight: 500,
        },
        h4: {
            fontSize: '2.6em',
            fontWeight: 500,
        },
        h6: {
            fontSize: '2rem',
        },
        subtitle1: {
            fontSize: '1.4em',
        },
        subtitle2: {
            fontSize: '1.2rem',
        },
        button: {
            fontSize: '1.1rem',
        },
        caption: {
            fontSize: '0.9rem',
        },
    },
};

export const customTheme = createTheme(themeOptions)
