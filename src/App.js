import React, {useState, useEffect} from 'react'
import './App.css';
//import Form from './Form'
import style from "./App.module.scss"
function createSlot (subject, teacher) {
  return {
    subject,
    teacher
  }
}
//この辺の知識が不足
function createSlotMatrix () {
  const days = 6
  const slotsInDay = 6
  const slotMatrix = []
  for (let i = 0; i < days; i ++) {
    const daySlot = []
    for (let j = 0; j < slotsInDay; j++) {
      daySlot.push(createSlot("教科", "CLICK"))
    }
    slotMatrix.push(daySlot)
  }
  return slotMatrix
}


function Form ({
  onSave
}) {

  const [tab, setTab] = useState('form')
  const [subject, setSubject] = useState('')
  const [teacher, setTeacher] = useState('')
  const clickFunc = (e) => {
    onSave ({
      subject,
      teacher,
    })

    window.confirm ( `
    以下の内容で登録しますか？　　　　　　　　　　

　　　  科目名 : ${subject}
          教員名　: ${teacher}`)
}

  return (
     <div>
     <h3>登録フォーム</h3>
     <form>
     <p>科目名 :
     <input
     type="text"
     value={subject}
     onChange={(e) => setSubject(e.target.value)}
     placeholder="科目名" />
     </p>
     <p>教員名 :
     <input
     type="text"
     value={teacher}
     onChange={(e) => setTeacher(e.target.value)}
     placeholder="教員名" />
     </p>
     <button onClick={clickFunc}>登録</button>
     </form>
   </div>
   )
  }

//clickFuncでonClickイベントが発生したとき、setTabでTimeTabからFormに画面の切り替えがしたい
//Formの{subject}や{teacher}に一つ一つIDをもたせる必要があるのかもし入れ得ない
  function App () {
    const [slotMatrix, setSlotMatrix] = useState(createSlotMatrix())
  const [dayIndex, setDayIndex] = useState(null)
  const [slotIndex, setSlotIndex] = useState(null)

  const onSlotClick = (dayIndex, slotIndex) => {
    setDayIndex(dayIndex)
    setSlotIndex(slotIndex)
  }
  /**
   * 保存データをスロットに設定する
   */
  const onSave = (data) => {
    const slot = slotMatrix[dayIndex][slotIndex]
    slot.name = data.name
    slot.teacher = data.teacher
    setSlotMatrix(slotMatrix)
    setDayIndex(null)
    setSlotIndex(null)
  }

  return (
    <div className="App">
      { dayIndex !== null && slotIndex !== null && (
        <Form onSave={onSave}/>
      )}
      <table>
        {slotMatrix.map((day, i) => {
          return (
            <tr>
              {day.map((slot, j) => {
                return (
                  <td className={slot + " " + (dayIndex === i && slotIndex === j )} onClick={() => onSlotClick(i, j)}>
                    <div>{slot.name}</div>
                    <div>{slot.teacher}</div>
                  </td>
                )
              })}
            </tr>
          )
        })}
      </table>
    </div>
  );
}


export default App;
