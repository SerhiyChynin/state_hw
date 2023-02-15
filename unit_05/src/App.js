import './App.css';
import React from 'react';
import { useState } from 'react';


function App() {
  
  let [st1, setSt1] = useState([]);
  let [st2, setSt2] = useState(0);
  let [st3, setSt3] = useState();
  let [st4, setSt4] = useState(0);
  let [st5, setSt5] = useState();
  let [st6, setSt6] = useState();
  let [st7, setSt7] = useState();
  let [st8, setSt8] = useState();
  let [st9, setSt9] = useState();
  let [st10, setSt10] = useState([]);

  let i_1 = React.createRef()
  let i_5 = React.createRef()
  let i_6 = React.createRef()
  let i_7 = React.createRef()
  let i_8 = React.createRef()
  let i_9 = React.createRef()
  let i_10 = React.createRef()


  function task1() {
    let commentValue = i_1.current.value;
    let comments = [...st1, commentValue];
    setSt1(comments)
    i_1.current.value = '';
  }
  function task2() {
    setSt2(st2++)
  }
  function task3(event) {
    setSt3(event.target.value);
  }
  function task4() {
    setSt4(st4++);
  }
  function task5() {
    if (i_5.current.checked) return setSt5(i_5.current.value);
    return setSt5(0);
  }
  function task6() {
    setSt6(i_6.current.value)
  }
  function getRandomInt(min = 0, max = 255) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }
  function task7() {
    let color = `rgb(${getRandomInt()},${getRandomInt()},${getRandomInt()})`;
    i_7.current.style.background = st7;
    setSt7(color);

  }
  function task8(event) {              
    let n = event.key;
    console.log(event)
    if (isNaN(+n)) return setSt8('0')
    setSt8('1')
  }
  function task9() {
    setSt9(i_9.current.value)
  }
  function task10() {
    let value = i_10.current.value;
    let valueList = [...st10, value]
    setSt10(valueList)
  }

  return (
    <>
      <h1>События</h1>
      <section>
        <h2>Task 1</h2>
		<input type="text" ref={i_1}/>
        <button className="task-1" onClick={task1}>Push</button>
        <div>{st1}</div>
      </section>
      <section>
        <h2>Task 2</h2>
        <div className="task-2" onMouseEnter={task2} ></div>
        <div>{st2}</div>
      </section>
      <section>
        <h2>Task 3</h2>
        <input type="text" className="task-3" onInput={task3}/>
        <div>{st3}</div>
      </section>
      <section>
        <h2>Task 4</h2>
        <button className="task-4" onClick={task4}>Count</button>
        <div>{st4}</div>
      </section>
      <section>
        <h2>Task 5</h2>
        <input type="checkbox" currentValue="55" onChange={task5} ref={i_5} />
        <div>{st5}</div>
      </section>
      <section>
        <h2>Task 6</h2>
        <select className="task-6" onChange={task6} ref={i_6}>
          <option value="7">seven</option>
          <option value="4">four</option>
          <option value="9">nine</option>
          <option value="10">ten</option>
        </select>
        <div>{st6}</div>
      </section>
      <section>
        <h2>Task 7</h2>
        <div className="block-7" ref={i_7}></div>
        <button className="task-7" onClick={task7}>Color</button>
        <div>{st7}</div>
      </section>
      <section>
        <h2>Task 8</h2>
        <input type="text" className="task-8" onKeyPress={task8} ></input>
        <div>{st8}</div>
      </section>
      <section>
        <h2>Task 9</h2>
        <input type="range" className="task-9" onInput={task9} ref={i_9}></input>
        <div>{st9}</div>
      </section>
      <section>
        <h2>Task 10</h2>
        <input type="number" className="i-10" ref={i_10}></input>
        <button className="task-10" onClick={task10}>Push</button>
        <div>
          <ul>{st10.map((item, index) => <li key={index.toString()}>{item}</li>)}
            </ul>
        </div>
      </section>
    </>
  );
}

export default App;
