import React from 'react'

export default function MessMenu() {
  return (
    <div className="page">
<h1>Mess Menu</h1>
<div className='table-responsive-md'>
  <table class="table table-bordered">
    <thead>
      <tr>
        <th scope="col">Day</th>
        <th scope="col">Breakfast</th>
        <th scope="col">Lunch</th>
        <th scope="col">Tea</th>
        <th scope="col">Dinner</th>
        </tr>
    </thead>
    <tbody>
      <tr>
        <th scope="row">Monday</th>
        <td>Kachori+boiled egg/fruit+tea</td>
        <td>Rajma+Roti+Rice+Seasonal Vegetable+Raita </td>
        <td>Macroni+tea</td>
        <td>Chana Daal+Roti+Vegetable+Rice</td>    
      </tr>
      <tr>
        <th scope="row">Tuesday</th>
        <td>Pav Bhaji+Sooji Halwa+Tea</td>
        <td>Kadhi+Roti+Rice+Aloo Chokha</td>
        <td>Bread Pakora+Tea</td>
        <td>Dal Makhani+Vegetable+kheer+Roti+Rice</td>
        </tr>
      <tr>
        <th scope="row">Wednesday</th>
        <td>Aloo Pyaaz Paratha+Coffee/Tea+Butter</td>
        <td>Chole+Roti+Rice+Vegetable</td>
        <td>Patties+Tea</td>
        <td>Paneer/chicken+Roti+Rice</td>
      </tr>
      <tr>
      <th scope="row">Thursday</th>
        <td>Poori+Chana+Tea</td>
        <td>Black Daal+Vegetable+Roti+Rice</td>
        <td>Samosa+Chutney+Tea</td>
        <td>Aloo Nutrella+Vegetable+Roti+Rice</td>
      </tr>
      <tr>
        <th scope="row">Friday</th>
        <td>Aloo Paratha+Butter+Milk</td>
        <td>Rajma+Roti+Rice+Vegetable+Raita</td>
        <td>Poha</td>
        <td>Paneer/Chicken+Roti+Rice</td>
      </tr>
      <tr>
        <th scope="row">Saturday</th>
        <td>Paneer Pyaaz Paratha+Butter+Tea</td>
        <td>Yellow Daal+Bhatt Daal+Roti+Rice+Vegetable</td>
        <td>Chowmein+Tea</td>
        <td>Chole+Aloo+Poori+Vermicelli+Rice</td>
      </tr>
      <tr>
        <th scope="row">Sunday</th>
        <td>Chole Bhature+Tea</td>
        <td>Pulao+Dahi+Chutney+Papad</td>
        <td>Off</td>
        <td>Aloo Tamatar+Vegetable+Roti+Rice+Dessert</td>
      </tr>
         </tbody>
  </table>
</div>
    </div>
  )
}
