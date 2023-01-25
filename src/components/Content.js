import React from 'react';
import './Content.css';

function Content({list}) {
     if(list.length === 0){
        return (
            <div>
              <h1>0</h1>
              <h2>USER</h2>
            </div>
          )
        }
    else{
        return (
            <div>
              <ul>
               {list.map((item,index)=>(
                    <li key={index}>
                      <span className="nama">{item.name}</span>
                      <span className="alamat">{item.address}</span>
                      <span className="hobby">{item.hobby}</span>
                    </li>
                ))}
              </ul>
            </div>
          );
    };
  
}

export default Content
