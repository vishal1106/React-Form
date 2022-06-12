import React from 'react'
import { useEffect } from 'react'
import { useState } from 'react'
import {
    Table,
    Thead,
    Tbody, Tr,
    Th,
    Td,
    TableContainer,
  } from '@chakra-ui/react'
const Form = () => {
const [a,setA]=useState([])
  const [form,setForm]=useState({
    username:"",
    email:"",
    age:"",
    Address:"",
    Salary:"",
    marital:"",
    department:""
  })


const submithandler=(e)=>{
    e.preventDefault();
}

  const changehandler=(e)=>{
  let {name,value}=e.target

  setForm({
    ...form,
    [name]:value,
  })
  }


  const salary=(e)=>{
    setA(a)
    if(e.target.value==="in")
    {
        a.sort(function(a, b) {
            return a.Salary - b.Salary;
          });
          setA([...a])
    }
    else if(e.target.value==="de")
    {
        a.sort(function(a, b) {
            return  b.Salary-a.Salary ;
          });
          setA([...a]) 
    }
 
  }

   
  return (
    <div>Form
    <form onSubmit={submithandler}
     style={{display:"flex",flexDirection:"column" ,width:"300px",gap:"20px",margin:"auto"}}>
   <input type="text"
     name="username"
     placeholder='Enter the Username'
      
     onChange={changehandler}
   
   />
  <input type="text"
     name="email"
     placeholder='Enter the Email'
      
     onChange={changehandler}
   
   />
     <input type="number"
     name="age"
     placeholder='Enter the Age'
      
     onChange={changehandler}
   
   />
     <input type="text"
     name="Address"
     placeholder='Enter the Address'
      
     onChange={changehandler}
   
   />
     <input type="number"
     name="Salary"
     placeholder='Enter the Salary'
      
     onChange={changehandler}
   
   />
      <select name="marital"  onChange={changehandler}>
        <option value="/">Select the marital Stauts...</option>
        <option value="Yes">Yes</option>
        <option value="No">No</option>
      </select>
 
      <select name="department"  onChange={changehandler}>
        <option value="/">Select the Department....</option>
        <option value="Civil">Civil</option>
        <option value="Electrical">Electrical</option>
        <option value="Mechanical">Mechanical</option>
        <option value="Instrumentation">Instrumentation</option>
        <option value="ENTC">ENTC</option>
      </select>

   <button onClick={()=>setA([
    ...a,form
   ])} >submit</button>


    </form>
 <div style={{marginTop:"20px",marginBottom:"20px",display:"flex",gap:"50px",textAlign:"end",marginLeft:"100px"}}>
   <h2>Filters:-</h2>
    <select>
        <option value="/">According to the department</option>
        <option value="Civil">Civil</option>
        <option value="Electrical">Electrical</option>
        <option value="Mechanical">Mechanical</option>
        <option value="Instrumentation">Instrumentation</option>
        <option value="ENTC">ENTC</option>
    </select>
    <select onChange={salary} >
        <option value="/">Sort By Salary</option>
        <option value="in">Ascending</option>
        <option value="de">Descending</option>
    </select>
 </div>
  <div>
  <TableContainer>
  <Table variant='striped' colorScheme='teal' style={{width:"90%",margin:"auto"}}>

    <Thead>
      <Tr>
        <Th>Name</Th>
        <Th>Age</Th>
        <Th >Address</Th>
        <Th >email</Th>
        <Th >Department</Th>
        <Th >Salary</Th>
        <Th>marital state </Th>
      </Tr>
    </Thead>
    <Tbody>
    
{a.map((el)=>{

 
return <Tr>
   <Td>{el.username}</Td>
   <Td>{el.age}</Td>
   <Td>{el.Address}</Td>
   <Td>{el.email}</Td>
   <Td>{el.department}</Td>
   <Td >{el.Salary}</Td>
   <Td >{el.marital}</Td>
 </Tr>


})}
</Tbody>
   
  </Table>
</TableContainer>
  </div>


    </div>
  )
}

export default Form