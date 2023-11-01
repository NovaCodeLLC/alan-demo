import {styled} from '@mui/system';
import {TextField as BaseTextField} from '@mui/material';
import {Theme} from '@mui/material/styles';
export const StyledTextField = styled(BaseTextField)(({ theme } : {theme: Theme}) => ({
    ...theme.typography.body2,
    padding: theme.spacing(0),
    color: theme.palette.text.primary,
}));
