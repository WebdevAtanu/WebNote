import React,{useRef,useEffect} from 'react'
import { useParams,useNavigate } from 'react-router-dom'

const Edit = () => {
    const {i}=useParams();
    let ref1=useRef();
    let ref2=useRef();
    const nav=useNavigate();

    const edited=()=>{
        let newName=ref1.current.value;
        let newDept=ref2.current.value;
        localStorage.setItem(i,JSON.stringify({name:newName,dept:newDept}));
        nav('/');
    }

    useEffect(()=>{
      let dataObj=JSON.parse(localStorage.getItem(i));
      ref1.current.value=dataObj.name;
      ref2.current.value=dataObj.dept;

    })
  return (
    <div id='edit'>
    <table>
      <tbody>
        <tr>
          <td>Edit Name:</td>
          <td><input type="text" ref={ref1}/></td>
        </tr>
        <tr>
          <td>Edit Description:</td>
          <td><textarea ref={ref2} rows='5'></textarea></td>
        </tr>
        <tr>
          <td colSpan='2'><button onClick={edited} style={{width:'100%'}}>DONE</button></td>
        </tr>
      </tbody>
    </table>
      
    </div>
  )
}

export default Edit
