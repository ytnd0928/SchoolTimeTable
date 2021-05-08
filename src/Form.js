import React, {useState, useEffect} from 'react'
export const Form =(/*{onAddSub}*/)=> {
  const [tab, setTab] = useState('form')
  const [subject, setSubject] = useState('')
  const [teacher, setTeacher] = useState('')
  const submitForm = (e) => {
      e.preventDefault();

      //onAddSub(subject);
      window.confirm ( `
      以下の内容で登録しますか？　　　　　　　　　　

　　　  科目名 : ${subject}
            教員名　: ${teacher}`)

            
　　}
  return (
     <div>
     <h3>登録フォーム</h3>
     <form onSubmit = {submitForm} >
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
     <button>登録</button>
     </form>
   </div>
   )
  }

  export default Form
