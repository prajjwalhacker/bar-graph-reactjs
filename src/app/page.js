"use client"
import { useEffect, useState } from 'react';
import '../app/styles/index.scss'

export default function Home() {

  const arr = [10, 20, 30, 40, 50];
  const [expanded, setExpanded] = useState(false)
  const [barData, setBarData] = useState([])


  const generate = () => {
    let arr =  [];
    for (let i = 0; i < 6; i++) {
     arr.push(Math.floor(Math.random() * 50) + 1);
    }
    setBarData(arr);
  }


  useEffect(() => {
    generate();
     setTimeout(() => {
        setExpanded(true)
     }, 50)
  }, [])

  return (
    <div className='main-container'>
        <div className='bar-graph-container'>
          {arr.map((item, index) => {
            return (
             <div className='y-axis-element' style={{ bottom: item * 9 - 10, left: -30 }} key={index}>
              {item}
              </div>
            )
          })}
          {barData.map((item, idex) => {
           return ( <div className='x-axis-element' style={{ height: !expanded ? 0 :  item * 9  }} key={idex}>
                <div className='inner-number-div'>
                    {idex + 1}
                 </div>
            </div>)
          })}
          <div className='x-axis-heading'>
             Rating
          </div>
          <div className='y-axis-heading'>
            No of ratings
          </div>
        </div>
        <div className='regenerate-button' onClick={() => {
           generate();
        }}>
           regenarate
        </div>
    </div>
  );
}
