import React, { useState } from 'react'
import { useDispatch } from 'react-redux';
import Button from '@mui/material/Button';
import Paper from '@mui/material/Paper';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import { deleteRole } from '../../redux/rolesSlice';

const initalValues = {
    show: false,
    id: ''
}
const RolesList = ({ roles }) => {
    const [open, setOpen] = useState(initalValues)
    const dispatch = useDispatch();

    const handleDelete = () => {
        console.log(open)
        dispatch(deleteRole({ id: open.id}))
        setOpen(initalValues)
    }

    const handleClose = () => {
        setOpen(initalValues)
    }

    return (
        <>
        <TableContainer component={Paper} sx={{ marginTop: 5 }}>
            <Table aria-label="simple table">
                <TableHead sx={{ backgroundColor: "aliceblue" }}>
                    <TableRow>
                        <TableCell align="center">Label</TableCell>
                        <TableCell align="center">Key</TableCell>
                        <TableCell align="right"></TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {roles.map((row) => (
                        <TableRow
                            key={row.id}
                            sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                        >
                            <TableCell align="center">
                                {row.label}
                            </TableCell>
                            <TableCell align="center">{row.key}</TableCell>
                            <TableCell align="right">
                                <Button variant="outlined" color="error" onClick={() => setOpen({
                                    show: true,
                                    id: row.id
                                })}>Delete</Button>
                                <Button variant="outlined" sx={{ marginLeft: 2 }}>edit</Button></TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        </TableContainer>
        <Dialog
        open={open.show}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title">
          {"Please confirm"}
        </DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-description">
           Are you sure, you want to delete the selected role?
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Cancel</Button>
          <Button onClick={handleDelete} autoFocus>
            Delete
          </Button>
        </DialogActions>
      </Dialog>
      </>
    )
}

export default RolesList