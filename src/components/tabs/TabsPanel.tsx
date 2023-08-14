import {FC, SyntheticEvent} from "react";
import { Tab, Tabs } from "@mui/material";
import './tabs-panel.css';

interface TabsProps {
    value: number;
    handleChange: (event: SyntheticEvent, newValue: number) => void;
}

export const TabsPanel: FC<TabsProps> = ({ value, handleChange }) => {
    return (
        <Tabs
            className="app-tabs"
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
