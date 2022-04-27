import * as React from "react";
import Box from "@mui/material/Box";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";

export default function SelectList(props) {
    let selectObj = props.props;
    console.log( selectObj.items);
    return (
        <Box sx={{ minWidth: 120 }}>
            <FormControl fullWidth>
                <InputLabel id="demo-simple-select-label">{selectObj.labelValue}</InputLabel>
                {selectObj.items && selectObj.items.length > 0 && (
                    <Select
                        labelId="demo-simple-select-label"
                        id="demo-simple-select"
                        defaultValue={selectObj.selectedValue ? selectObj.selectedValue : ""}
                        label={selectObj.labelValue}
                        onChange={(event)=>{selectObj.handleChange(event)}}
                    >
                        {
                            selectObj.items.map((item) => {
                                let valueItem = item.id;
                                if(selectObj.valueIsParent) {
                                    valueItem = item.parentId;
                                }
                                if(!item.parentId) {
                                    valueItem = item.id;
                                } 
                                return (<MenuItem value={valueItem} key={item.id}>{item.name}</MenuItem>);
                            })
                        }
                    </Select>
                )}
            </FormControl>
        </Box>
    );
}
