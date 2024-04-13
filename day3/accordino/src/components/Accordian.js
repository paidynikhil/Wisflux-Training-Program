import React,{useState} from 'react'
import {questions} from './Api';
import "./accordian.css";
import MyAccordion from './MyAccordian';

const Accordion = () => {
  const [data, setData] = useState(questions);

  return (
    <>
    <section className="main-div">
      <h1>React Interview questions and answers</h1>
    {
      data.map((curElem)=>{
        const {id} = curElem;
        return <MyAccordion key={id} {...curElem}/>
      })
    }
    </section>
    </>
  )
}

export default Accordion;
