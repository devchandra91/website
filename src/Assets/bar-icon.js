import React from "react";

  export default function BarIcon(props) {


return(
<React.Fragment>
   <svg className={props.switchStatus? 'fill-current text-green-500 transition-all duration-75 delay-75 ease-in-out':'fill-current delay-75 text-yellow-500 transition-all duration-75 ease-in-out'} viewBox="0 0 100 80" width="30" height="30">
           <rect className={!props.switchStatus?'transition-all duration-100 ease-in-out' : 'transform rotate-45 translate-x-2 translate-y-1 transition-all duration-100 ease-in-out'} width="70" height="10" rx='5'></rect>
           <rect className={!props.switchStatus?'transition-all duration-100 ease-in-out': 'transition-height duration-100 h-0'} y="20" width="70" height="10" rx='5'></rect>
           <rect className={!props.switchStatus?'transition-all duration-100 ease-in-out': 'transform -rotate-45 -translate-x-7 translate-y-6 transition-all duration-100 ease-in-out'} y="40" width="70" height="10" rx='5'></rect>
         </svg>
 </React.Fragment>
)
   

  }