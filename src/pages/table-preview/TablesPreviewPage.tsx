import {ReactMaterialTable} from "../../components/react-material-table/ReactMaterialTable";
import {TabsPanel} from "../../components/tabs/TabsPanel";
import {SyntheticEvent, useState} from "react";

export const TablesPreviewPage = () => {
    const [activeTab, setActiveTab] = useState(0);

    const handleTabChange = (event: SyntheticEvent, newValue: number) => {
        setActiveTab(newValue);
    };
    return (
        <>
            <TabsPanel
                value={activeTab}
                handleChange={handleTabChange}
            />
            <ReactMaterialTable />
        </>
    );
};
