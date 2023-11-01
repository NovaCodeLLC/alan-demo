import {styled, Theme} from '@mui/material/styles';
import {Box} from '@mui/system';
import Grid from '@mui/material/Grid';
import {css} from '@emotion/react';


export const Item = styled(Box)(({ theme } : {theme: Theme}) => ({
    ...theme.typography.body2,
    margin: theme.spacing(0) + ' ' + theme.spacing(0) + ' ' + theme.spacing(2) + ' ' + theme.spacing(0),
    textAlign: 'center',
    padding: theme.spacing(0),
    color: theme.palette.text.primary,
    width: '100%',
}));

export const settingsGridStyles = css`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    flex-wrap: nowrap;
`;
