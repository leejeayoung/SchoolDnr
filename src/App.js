import React, { useState, useEffect } from 'react';
import axios from 'axios'
import './App.css';
import Button from '@restart/ui/esm/Button';
import Table from 'react-bootstrap/Table';
import Test from './Test';
function App() {
  // 요청받은 정보를 담아줄 변수 선언
  let [ testStr, setTestStr ] = useState([]);
  
  let [startDate, setStartDate] = useState(new Date());

  // 변수 초기화


  // 첫 번째 렌더링을 마친 후 실행
  /*
  axios.get('/hello.do')
  .then((res)=>{
    console.log("res: "+JSON.stringify(res.data));
    callback(res);
  })*/

  /**/
  useEffect(
      () => {
        axios({
            url: '/hello.do',
            method: 'GET'

        }).then((res) => {
            console.log("res: ",res);
            
            setTestStr(res.data);
        })
      }, []
  );

  

  return (
    
      <div className="App">
          <header className="App-header">
          
          <Table striped bordered hover>
          <thead>
          <tr>
            <th>id</th>
            <th>pwd</th>
          </tr>
        </thead>
          <tbody>
            {
              testStr.map((data,i)=>{
                return(
                  <tr key={i}>
                  <td>{data.id}</td>
                  <td>{data.pwd}</td>
                  </tr>
                )
              })
            }
          </tbody>
            </Table>
            <TestButton/>
            <Test/>
          </header>
      </div>
  );
};

export default App;


function TestButton(params) {
  let [ ids, setId] = useState();
  let [ pwds, setPwd] = useState();
  return(
    <div>
      <p>ID:</p>
      <input onChange={(e)=>{setId(e.target.value)}}></input><br/>
      <p>PWD:</p>
      <input type="password" onChange={(e2)=>{setPwd(e2.target.value)}}></input><br/>
      <Button onClick={()=>{
        axios({
          method:'post',
          url:'/testInput.do',
          data:{
            id:ids,
            pwd:pwds
          }
        }).then((re)=>{
          console.log("성공"+re);
        });
      }}>전송</Button>
    </div>
  )
};


