import React from 'react';
import { Formik } from 'formik';
import * as Yup from 'yup';
import Backdrop from '@mui/material/Backdrop';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import Fade from '@mui/material/Fade';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { Grid, TextField } from '@mui/material';
import { useDispatch } from 'react-redux';
import { addRole } from '../../redux/rolesSlice';

const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    bgcolor: 'background.paper',
    boxShadow: 24,
    p: 4,
};

const RoleModal = ({ open, setOpen }) => {
    const dispatch = useDispatch();

    return (
        <>
            <Modal
                aria-labelledby="transition-modal-title"
                aria-describedby="transition-modal-description"
                open={open}
                onClose={() => setOpen(false)}
                closeAfterTransition
                slots={{ backdrop: Backdrop }}
                slotProps={{
                    backdrop: {
                        timeout: 500,
                    },
                }}
            >
                <Fade in={open}>
                    <Box sx={style}>
                        <Formik
                            initialValues={{ roleLabel: '', roleKey: '' }}
                            onSubmit={(values) => {
                                dispatch(
                                    addRole({
                                        ...values
                                    })
                                );
                                setOpen(false)
                            }}
                            validationSchema={Yup.object().shape({
                                roleLabel: Yup.string()
                                    .required('Role label is a required'),
                                roleKey: Yup.string()
                                    .required('Role key is a required'),

                            })}
                        >
                            {(props) => {
                                const {
                                    values,
                                    touched,
                                    errors,
                                    handleChange,
                                    handleBlur,
                                    handleSubmit,
                                } = props;
                                return (
                                    <form onSubmit={handleSubmit}>

                                        <Grid container spacing={2} flexDirection="column">
                                            <Typography id="transition-modal-title" variant="h6" component="h2">
                                                Add Role
                                            </Typography>
                                            <TextField
                                                label="Role Label"
                                                name="roleLabel"
                                                value={values.roleLabel}
                                                onChange={handleChange}
                                                onBlur={handleBlur}
                                                error={errors.roleLabel && touched.roleLabel}
                                                helperText={(errors.roleLabel && touched.roleLabel) && errors.roleLabel}
                                                margin="normal"
                                            />
                                            <TextField
                                                label="Role Key"
                                                name="roleKey"
                                                value={values.roleKey}
                                                onChange={handleChange}
                                                onBlur={handleBlur}
                                                error={errors.roleKey && touched.roleKey}
                                                helperText={(errors.roleKey && touched.roleKey) && errors.roleKey}
                                                margin="normal"
                                            />
                                        </Grid>
                                        <Box sx={{ display: 'flex', justifyContent: 'flex-end', gap: '20px' }}>
                                            <Button variant="contained" type="submit">
                                                Save
                                            </Button>
                                            <Button variant="oulined" onClick={() => setOpen(false)}>
                                                Cancel
                                            </Button>
                                        </Box>
                                    </form>
                                );
                            }}
                        </Formik>
                    </Box>
                </Fade>
            </Modal>
        </>
    )
}

export default RoleModal