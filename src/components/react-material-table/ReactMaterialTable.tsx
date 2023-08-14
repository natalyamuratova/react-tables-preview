import React, { useMemo } from 'react';
import MaterialReactTable, { MRT_ColumnDef } from 'material-react-table';
import { Box, Typography } from '@mui/material';
import {User} from "../../models/user";
import {getUsers} from "../../constants/users-datasource";


export const ReactMaterialTable = () => {
    const columns = useMemo<MRT_ColumnDef<User>[]>(
        () => [
            {
                accessorKey: 'fio',
                header: 'ФИО',
            },
            {
                accessorKey: 'position',
                header: 'Должность',
            },
            {
                accessorKey: 'company',
                header: 'Организация',
            },
            {
                accessorKey: 'phone',
                header: 'Телефон',
            },
            {
                accessorKey: 'email',
                header: 'Email',
            },
        ],
        [],
    );

    const users = getUsers();

    return (
        <MaterialReactTable
            data={users}
            columns={columns}
            enableEditing
            editingMode={'row'}
            enablePagination={false}
            enableColumnResizing
            enableColumnOrdering
            enableRowVirtualization
            enableExpanding
            muiTableContainerProps={
                { classes: { root: 'app-table-container' } }
            }
            muiTableBodyProps={
                { classes: { root: 'app-table-body' } }
            }
            muiTableBodyRowProps={
                { classes : { root: 'app-table-row' } }
            }
            renderDetailPanel={({ row }) => (
                <Box
                    sx={{
                        width: '100%',
                        height: '200px'
                    }}
                >
                    <Typography>FIO: {row.original.fio}</Typography>
                </Box>
            )}
            />
    );
};
