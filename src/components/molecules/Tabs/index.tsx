import { Tabs } from "@mui/material"




const CustomTabs = ({data, handleChange, value}: any) => {
    return <Tabs onChange={handleChange} value={value}>
        {/* map data */}
    </Tabs>
}

export default CustomTabs;