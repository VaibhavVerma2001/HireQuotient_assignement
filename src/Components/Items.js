import React from 'react';
// import axios from 'axios';
// import { useEffect,useContext } from 'react';
// import UserContext from '../context/UserContext';
import ListItem from './ListItem';



function Items(props) {

    // const context = useContext(UserContext);
    // // eslint-disable-next-line
    // const { setValue,value } = context;


    // useEffect(() => {
    //     const getData = async () => {
    //         try {
    //             const res = await axios.get("https://canopy-frontend-task.vercel.app/api/holdings");
    //             const data = res.data.payload;
    //             // console.log(data);
    //             // console.log("data is : ", data);


    //             // to group data
    //             const result =  Object.groupBy(data, ({ asset_class
    //             }) => asset_class
    //             );
    //             // console.log(result);
    //             setValue(result);
    //             // console.log(value);
    //         } catch (err) {
    //             console.log(err);
    //         }
    //     }
    //     getData();
    //     // eslint-disable-next-line
    // }, []);

    return (
        <div className='item-container'>
            <ListItem value = {props.value}/>
        </div>
    )
}

export default Items;
