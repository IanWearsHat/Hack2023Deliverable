import { styled } from '@mui/material/styles';
import Button from '@mui/material/Button';

const StyledButton = styled(Button)(({ theme }) => ({
    fontSize: '16px',
    marginTop: '1rem',
    color: '#DAE2ED',
    backgroundColor: '#303740',
    '&:hover': {
        color: '#303740',
        backgroundColor: '#E5EAF2',
    },
}));

export default StyledButton;