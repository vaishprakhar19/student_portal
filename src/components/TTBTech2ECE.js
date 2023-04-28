import React from 'react'

export default function TTBTech2ECE() {
  return (
    <div className="page page-padding">
      <div className='table-background'></div>
      <h1 className='table-heading'>ECE 4th Sem</h1>
      <div className='table-responsive-md'>
        <table class="table table-bordered">
          <thead>
            <tr>
              <th scope="col">DAY/TIME</th>
              <th scope="col">MONDAY</th>
              <th scope="col">TUESDAY</th>
              <th scope="col">WEDNESDAY</th>
              <th scope="col">THURSDAY</th>
              <th scope="col">FRIDAY</th>
              <th scope="col">SATURDAY</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <th scope="row">9:30-10:30</th>
              <td>Signals & Systems <br /> (Ms.Sheenu Agarwal)</td>
              <td>Analog Circuits <br /> (Mr.Anoop Raghuvanshi)</td>
              <td>Signals and systems <br />(Ms. Sheenu Agarwal)</td>
              <td>Analog Communications <br />(Ms.Monika Nanda)</td>
              <td>Analog Communications <br />(Ms.Monika Nanda)</td>
              <td>Analog Circuits <br />(Mr. Anoop Raghuvanshi)</td>
            </tr>
            <tr>
              <th scope="row">10:30-11:30</th>
              <td>Control System <br />(Mr. Indra Bisht)</td>
              <td>Control System <br />(Mr. Indra Bisht)</td>
              <td>Control System <br />(Mr. Indra Bisht)</td>
              <td>Signals and Systems <br />(Ms.Sheenu Agarwal)</td>
              <td>Analog Circuits <br />(Mr. Anoop Raghuvanshi)</td>
              <td>Control System <br />(Mr. Indra Bisht)</td>
            </tr>
            <tr>
              <th scope="row">11:30-12:30</th>
              <td>Analog Circuits <br />(Mr. Anoop Raghuvanshi)</td>
              <td>Energy and Env. Studies <br />(Mr.Abhinav Bhatnagar)</td>
              <td>Analog Communications <br />(Ms.Monika Nanda)</td>
              <td>UHV <br />(Ms. Rajni)</td>
              <td>Energy and Env. Studies <br />(Dr.Devendra Mishra)</td>
              <td>Signals and System <br />(Ms. Sheenu Agarwal)</td>
            </tr>
            <tr>
              <th scope="row">Break</th>
              <td>L</td>
              <td>U</td>
              <td>N</td>
              <td>C</td>
              <td>H</td>
              <td></td>
            </tr>
            <tr>
              <th scope="row">2:00-3:00</th>
              <td>Energy and Env. Studies <br />(Mr.Abhinav Bhatnagar)</td>
              <td>Analog Comm.Lab/Control Sys.Lab <br />(Ms.Monika/Mr.Indra Bisht)</td>
              <td>Energy and Env. Studies <br />(Dr.Devendra Mishra)</td>
              <td rowSpan={2}>Analog Comm.Lab/Control Sys.Lab <br />(Ms.Monika/Mr.Indra Bisht)</td>
              <td rowSpan={2}>Analog Comm.Lab/Control Sys.Lab <br />(Ms.Monika/Mr.Indra Bisht)</td>
              <td rowSpan={2}></td>
            </tr>
            <tr>
              <th scope="row">3:00-4:00</th>
              <td>Analog Communications <br />(Ms.Monika Nanda)</td>
              <td>Analog Comm.Lab/Control Sys.Lab <br />(Ms.Monika/Mr.Indra Bisht)</td>
              <td>UHV<br />(Mr. Nitin)</td>
            </tr>


          </tbody>
        </table>
      </div>
    </div>
  )
}
