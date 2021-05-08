import React, {useState, useEffect} from 'react'
import './App.css';
import Form from './Form'

  function TimeTab () {
    const [tab, setTab] = useState('timeTable')
    const clickFunc = (e) => {
      setTab('form')
    }

  const [subject, setSubject] = useState(Form)
  const [teacher, setTeacher] = useState(Form)



  return (
    <div className="time">
    <tr>
    <table
    width="800"
    border="4"
    bordercolor="696969"
    bgcolor="fffaf0">
     <tr className="top">
       <th>時限</th>
       <th>月</th>
       <th>火</th>
       <th>水</th>
       <th>木</th>
       <th>金</th>
       <th>土</th>
    </tr>
　　<tr>
      <td className="side">1</td>
      <td><p>{subject}</p><p>{teacher}</p><button onClick ={clickFunc}>編集</button></td>
      <td><p>{subject}</p><p>{teacher}</p><button onClick ={()=> setTab('form')}>編集</button></td>
      <td><p>{subject}</p><p>{teacher}</p><button onClick ={()=> clickFunc('form')}>編集</button></td>
      <td><p>{subject}</p><p>{teacher}</p><button onClick ={()=> clickFunc()}>編集</button></td>
      <td><p>{subject}</p><p>{teacher}</p><button onClick ={()=> clickFunc()}>編集</button></td>
      <td><p>{subject}</p><p>{teacher}</p><button onClick ={()=> clickFunc()}>編集</button></td>

    </tr>
    <tr>
      <td className="side">2</td>
      <td><p>{subject}</p><p>{teacher}</p><button onClick ={()=> clickFunc()}>編集</button></td>
      <td><p>{subject}</p><p>{teacher}</p><button onClick ={()=> clickFunc()}>編集</button></td>
      <td><p>{subject}</p><p>{teacher}</p><button onClick ={()=> clickFunc()}>編集</button></td>
      <td><p>{subject}</p><p>{teacher}</p><button onClick ={()=> clickFunc()}>編集</button></td>
      <td><p>{subject}</p><p>{teacher}</p><button onClick ={()=> clickFunc()}>編集</button></td>
      <td><p>{subject}</p><p>{teacher}</p><button onClick ={()=> clickFunc()}>編集</button></td>
    </tr>
    <tr>
      <td className="side">3</td>
      <td><p>{subject}</p><p>{teacher}</p><button onClick ={()=> clickFunc()}>編集</button></td>
      <td><p>{subject}</p><p>{teacher}</p><button onClick ={()=> clickFunc()}>編集</button></td>
      <td><p>{subject}</p><p>{teacher}</p><button onClick ={()=> clickFunc()}>編集</button></td>
      <td><p>{subject}</p><p>{teacher}</p><button onClick ={()=> clickFunc()}>編集</button></td>
      <td><p>{subject}</p><p>{teacher}</p><button onClick ={()=> clickFunc()}>編集</button></td>
      <td><p>{subject}</p><p>{teacher}</p><button onClick ={()=> clickFunc()}>編集</button></td>
    </tr>
    <tr>
      <td className="side">4</td>
      <td><p>{subject}</p><p>{teacher}</p><button onClick ={()=> clickFunc()}>編集</button></td>
      <td><p>{subject}</p><p>{teacher}</p><button onClick ={()=> clickFunc()}>編集</button></td>
      <td><p>{subject}</p><p>{teacher}</p><button onClick ={()=> clickFunc()}>編集</button></td>
      <td><p>{subject}</p><p>{teacher}</p><button onClick ={()=> clickFunc()}>編集</button></td>
      <td><p>{subject}</p><p>{teacher}</p><button onClick ={()=> clickFunc()}>編集</button></td>
      <td><p>{subject}</p><p>{teacher}</p><button onClick ={()=> clickFunc()}>編集</button></td>
    </tr>
    <tr>
      <td className="side">5</td>
      <td><p>{subject}</p><p>{teacher}</p><button onClick ={()=> clickFunc()}>編集</button></td>
      <td><p>{subject}</p><p>{teacher}</p><button onClick ={()=> clickFunc()}>編集</button></td>
      <td><p>{subject}</p><p>{teacher}</p><button onClick ={()=> clickFunc()}>編集</button></td>
      <td><p>{subject}</p><p>{teacher}</p><button onClick ={()=> clickFunc()}>編集</button></td>
      <td><p>{subject}</p><p>{teacher}</p><button onClick ={()=> clickFunc()}>編集</button></td>
      <td><p>{subject}</p><p>{teacher}</p><button onClick ={()=> clickFunc()}>編集</button></td>
    </tr>
    <tr>
      <td className="side">6</td>
      <td><p>{subject}</p><p>{teacher}</p><button onClick ={()=> clickFunc()}>編集</button></td>
      <td><p>{subject}</p><p>{teacher}</p><button onClick ={()=> clickFunc()}>編集</button></td>
      <td><p>{subject}</p><p>{teacher}</p><button onClick ={()=> clickFunc()}>編集</button></td>
      <td><p>{subject}</p><p>{teacher}</p><button onClick ={()=> clickFunc()}>編集</button></td>
      <td><p>{subject}</p><p>{teacher}</p><button onClick ={()=> clickFunc()}>編集</button></td>
      <td><p>{subject}</p><p>{teacher}</p><button onClick ={()=> clickFunc()}>編集</button></td>
    </tr>
    </table>
    </tr>
  </div>
  )
}

//clickFuncでtabの切り替えがしたい

  function App () {
    const [tab, setTab] = useState('timeTable')

  return(
    <div>
      <h1>TimeTable</h1>
        {
         tab === 'timeTable' ? <TimeTab /> : <Form />
        }
      <Form />

      </div>
  )
}

export default App;
