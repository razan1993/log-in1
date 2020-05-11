
// import React from 'react';
// import DayPicker from 'react-day-picker';
// import 'react-day-picker/lib/style.css';
// import data from './data.json';

// export default function Example() {
//   return (
//     <DayPicker
//       initialMonth={new Date(2020, 4)}
//       selectedDays={[
//         new Date(data[0].year, data[0].month, data[0].day),
//         new Date(data[1].year, data[1].month, data[1].day),
//         new Date(data[2].year, data[2].month, data[2].day),
//       ]}
//     />
//   );
// }
// import React from 'react';
// import DayPicker from 'react-day-picker';
// import 'react-day-picker/lib/style.css';
// import data from './data.json';

// let allSelectedDates = [];
// data.forEach((item) => {
//   allSelectedDates.push(new Date(item.year, item.month, item.day));
// });

// export default function Example() {
//   return (
//     <DayPicker
//       initialMonth={new Date(2020, 4)}
//       selectedDays={allSelectedDates}

//     />
//   );
// }
import React, { useEffect } from 'react';
import DayPicker from 'react-day-picker';
import 'react-day-picker/lib/style.css';
import data from './data.json';

let allSelectedDates = [];
data.forEach((item) => {
  allSelectedDates.push(new Date(item.year, item.month, item.day));
});


function setCalender() {
  data.forEach((ele) => {
    const element = document.querySelector(`[aria-label="${new Date(ele.year, ele.month, ele.day).toDateString()}"]`)
    if (element) {
      element.innerHTML += ele.title
    }
  });
}

window.onload = () => {
  setTimeout(() => {
    setCalender()
  }, 0)
}


export default function Example() {

  useEffect(() => {
    const next = document.getElementsByClassName("DayPicker-NavButton DayPicker-NavButton--next")[0]
    next.addEventListener("click", function () {
      setTimeout(() => {
        console.log("after secounds next")
        setCalender()
      }, 0)
    })

    const prev = document.getElementsByClassName("DayPicker-NavButton DayPicker-NavButton--prev")[0]
    prev.addEventListener("click", function () {
      setTimeout(() => {
        console.log("after secounds prev")
        setCalender()
      }, 0)
    })

  })
  return (
    <div>
      {/* <button onClick={addTitle}>add</button> */}

      <DayPicker
        initialMonth={new Date(2020, 4)}
        selectedDays={allSelectedDates}
      />
    </div>
  );
}
// 00
// import React, { Component } from 'react';
// import Calendar from 'react-calendar';
// import 'react-calendar/dist/Calendar.css';
// import data from './data.json';
// class MyApp extends Component {
//   state = {
//     date: [new Date(data[1].year, data[1].month, data[1].day),
//     new Date(data[0].year, data[0].month, data[0].day),

//     ]

//     //         new Date(data[0].year, data[0].month, data[0].day),
//     //         new Date(data[1].year, data[1].month, data[1].day),
//     //         new Date(data[2].year, data[2].month, data[2].day),
//     //       ]
//   }


//   onChange = date => this.setState({ date })

//   render() {

//     return (
//       <div>
//         <Calendar
//           onChange={this.onChange}
//           value={this.state.date}
//           tileContent={'e'}


//         />
//       </div>
//     );
//   }
// }
// export default MyApp;
// 99
// import React from 'react';
// import DayPicker from 'react-day-picker';
// import 'react-day-picker/lib/style.css';
// import data from './data.json';
// const holidayStyle = `.DayPicker-Day--highlighted {
//   background-color: orange;
//   color: white;
// }`;

// const modifiers = {
//   highlighted: [new Date(data[1].year, data[1].month, data[1].day),
//   new Date(data[0].year, data[0].month, data[0].day),
//   new Date(data[3].year, data[3].month, data[3].day),

//   ]
// };
// const holiday = {
//   4: ['M'],
//   9: ['E'],
//   15: ['d']

// };

// function renderDay(day) {
//   const date = day.getDate();
//   const dateStyle = {
//     position: 'absolute',
//     color: 'black',
//     bottom: 0,
//     right: 0,
//     fontSize: 20,
//   };
//   const holidayStyle = { fontSize: '0.8em', textAlign: 'left' };
//   const cellStyle = {
//     height: 20,
//     width: 30,
//     position: 'relative',
//   };
//   return (
//     <div style={cellStyle}>
//       <div style={dateStyle}>{date}</div>
//       {holiday[date] &&
//         holiday[date].map((name, i) => (
//           <div key={i} style={holidayStyle}>
//             {name}
//           </div>
//         ))}
//     </div>
//   );
// }

// export default function MyBirthday() {
//   return (
//     <div>
//       <style>{holidayStyle}</style>
//       <DayPicker modifiers={modifiers}
//         initialMonth={new Date(2020, 4)}
//         renderDay={renderDay} />
//     </div>
//   );
// }