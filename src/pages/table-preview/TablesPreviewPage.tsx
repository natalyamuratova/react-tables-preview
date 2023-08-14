import {ReactMaterialTable} from "../../components/react-material-table/ReactMaterialTable";
import {TabsPanel} from "../../components/tabs/TabsPanel";
import {SyntheticEvent, useState} from "react";
import {RsuiteTable} from "../../components/rsuite-table/RsuiteTable";
import './tables-preview-page.css';

export const TablesPreviewPage = () => {
    const [activeTab, setActiveTab] = useState(0);

    const handleTabChange = (event: SyntheticEvent, newValue: number) => {
        console.log(event);
        setActiveTab(newValue);
    };
    return (
        <div className="page-container">
            <TabsPanel
                value={activeTab}
                handleChange={handleTabChange}
            />
            { activeTab === 0 && <ReactMaterialTable /> }
            { activeTab === 1 && <RsuiteTable />}
        </div>

    );
};
