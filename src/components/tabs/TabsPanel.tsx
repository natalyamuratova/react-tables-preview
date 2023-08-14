import {FC} from "react";
import { Tab, Tabs } from "@mui/material";

interface TabsProps {
    value: number;
    handleChange: () => void;
}

export const TabsPanel: FC<TabsProps> = ({ value, handleChange }) => {
    return (
        <Tabs
            orientation="vertical"
            variant="scrollable"
            value={value}
            onChange={handleChange}
            sx={{ borderRight: 1, borderColor: 'divider' }}
        >
            <Tab label="Таблица 1"/>
            <Tab label="Таблица 2"/>
        </Tabs>
    );
}
