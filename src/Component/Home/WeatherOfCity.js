import React from 'react';

const Weatherofcity = ({city, data}) =>{
    return(
            <div>
        <p>weather of {city} is weather</p>
        {data.map((data,index)=>{
            return (
                <ul key={index}>
                    <li>name of the place {data.name}</li>
                    <li>{data.name} visibility {data.visibility}</li>
                    <li>{data.name}'s hummidity is {data.main.humidity}</li>
                    <li>{data.name}'s temp is {data.main.temp}</li>
                    <li>{data.name}'s pressure is {data.main.pressure}</li>
                    <li>{data.name}'s Country is {data.sys.country} </li>
                </ul>     
            );
        }
        )}
       </div>
    );
}
export default Weatherofcity;