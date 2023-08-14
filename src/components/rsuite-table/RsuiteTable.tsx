import React  from 'react';
import {Table, Column, HeaderCell, Cell, SortType} from 'rsuite-table';
import { Button } from '@mui/material';
import {getUsers} from "../../constants/users-datasource";
import 'rsuite-table/dist/css/rsuite-table.css';
import {User} from "../../models/user";
import './rsuite-table.css';

const rowKey = 'id';
// eslint-disable-next-line @typescript-eslint/no-unused-vars
const ExpandCell = ({ dataKey, expandedRowKeys, onChange, ...props }: { dataKey: any, expandedRowKeys: any, onChange: (rowData: any, dataKey: any) => void }) => (
    <Cell {...props}>
        {/* eslint-disable-next-line @typescript-eslint/no-unused-vars */}
        {(rowData) => {
            return <Button
                onClick={() => {
                    onChange(rowData, dataKey);
                }}
            >
                +
            </Button>;
        }}
    </Cell>
);

export const RsuiteTable = () => {
    const users = getUsers();

    const [expandedRowKeys, setExpandedRowKeys] = React.useState<number[]>([]);

    const handleExpanded = (rowData: User) => {
        let open = false;
        const nextExpandedRowKeys: number[] = [];

        expandedRowKeys.forEach(key => {
            if (key === rowData[rowKey]) {
                open = true;
            } else {
                nextExpandedRowKeys.push(key);
            }
        });

        if (!open) {
            nextExpandedRowKeys.push(rowData[rowKey]);
        }

        setExpandedRowKeys(nextExpandedRowKeys);
    };

    const [sortColumn, setSortColumn] = React.useState<keyof User>('id');
    const [sortType, setSortType] = React.useState<SortType | undefined>('asc');

    const sortData = () => {
        if (sortColumn && sortType) {
            return [...users].sort((a: User, b: User) => {
                let x = a[sortColumn];
                let y = b[sortColumn];
                if (typeof x === 'string') {
                    x = x.charCodeAt(0);
                }
                if (typeof y === 'string') {
                    y = y.charCodeAt(0);
                }
                if (sortType === 'asc') {
                    return x - y;
                } else {
                    return y - x;
                }
            });
        }
        return [...users];
    };

    const handleSortColumn = (dataKey: string, sortType?: SortType) => {
        console.log(dataKey);
      //  setLoading(true);

        setTimeout(() => {
     //       setLoading(false);
            setSortColumn(sortColumn);
            setSortType(sortType);
        }, 500);
    };

    return (
        <Table
            className="app-rsuite-table"
            height={900}
            shouldUpdateScroll={false}
            virtualized
            headerHeight={80}
            bordered
            cellBordered
            data={sortData()}
            rowKey={rowKey}
            expandedRowKeys={expandedRowKeys}
            renderRowExpanded={rowData => {
                return (
                    <div>
                        <p>{rowData?.fio}</p>
                    </div>
                );
            }}
            sortColumn={sortColumn}
            sortType={sortType}
            onSortColumn={handleSortColumn}
            onRowClick={data => {
                console.log(data);
            }}
        >
            <Column width={200} align="center" resizable>
                <HeaderCell>#</HeaderCell>
                <ExpandCell dataKey="id" expandedRowKeys={expandedRowKeys} onChange={handleExpanded} />
            </Column>

            <Column width={200} sortable verticalAlign="middle" resizable>
                <HeaderCell>ФИО</HeaderCell>
                <Cell dataKey="fio" />
            </Column>
            <Column width={200} sortable verticalAlign="middle" resizable>
                <HeaderCell>Должность</HeaderCell>
                <Cell dataKey="position" />
            </Column>
            <Column width={200} sortable verticalAlign="middle" resizable>
                <HeaderCell>Организация</HeaderCell>
                <Cell dataKey="company" />
            </Column>
            <Column width={200} sortable verticalAlign="middle" resizable>
                <HeaderCell>Телефон</HeaderCell>
                <Cell dataKey="phone" />
            </Column>
            <Column width={200} sortable verticalAlign="middle" resizable>
                <HeaderCell>Email</HeaderCell>
                <Cell dataKey="email" />
            </Column>
        </Table>
    );
};
