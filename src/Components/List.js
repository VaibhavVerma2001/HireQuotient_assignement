import React from 'react';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import CustomizedTables from './CustomizedTables';


function List(props) {
    const { head, items } = props;
    console.log("in list", items);
    return (
        <div  style={{marginTop : "10px"}} className='list'>
            <Accordion>
                <AccordionSummary
                    expandIcon={<ArrowDropDownIcon style={{backgroundColor : "#3E68C7", borderRadius :"50%"}}/>}
                    aria-controls="panel1-content"
                    id="panel1-header"
                >
                    <Typography style={{color : "#477288", fontWeight:"bold"}}>{head} () </Typography>
                </AccordionSummary>
                <AccordionDetails>
                    {/* mui table */}
                    {/* No error if I comment this and uncomment once site reloads */}
                    {items ? (
                        <CustomizedTables rows={items} />
                    ):(
                        ""
                    )}
                    
                </AccordionDetails>
            </Accordion>
        </div>
    )
}

export default List;
