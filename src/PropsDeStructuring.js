import React from 'react';

 //without destructuring 
// function PropsDeStructuring(props) {
//    
//     return (
//         <div >

//             name :{props.name} ,
//             height :{props.height} ,
//             weight :{props.weight}
//         </div>
//     );

    
// }

 //with destructuring 
function PropsDeStructuring({name,height,weight}) {
   
    return (
        <div >

            name :{name} ,
            height :{height} ,
            weight :{weight}
        </div>
    );

    
}

export default PropsDeStructuring;