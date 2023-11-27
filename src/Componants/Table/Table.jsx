import './Table.css'

function Tabledata() {

  return <table class="table table-hover">
    <thead>
      <tr>
        <th scope="col" class="selector">
          <input class="form-check-input" type="checkbox" value="" id="" />
        </th>
        <th scope="col">Invoive ID</th>
        <th scope="col">Date</th>
        <th scope="col">Customer</th>
        <th scope="col">Payable Amount</th>
        <th scope="col">Paid Amount</th>
        <th scope="col">Due</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td scope="row" class="selector">
          <input class="form-check-input" type="checkbox" value="" id="" />
        </td>
        <td>#AHGA68</td>
        <td>29/10/2023</td>
        <td>Otto</td>
        <td>1000</td>
        <td>1000</td>
        <td>0</td>
      </tr>
    </tbody>
    <tbody>
      <tr>
        <td scope="row" class="selector">
          <input class="form-check-input" type="checkbox" value="" id="" />
        </td>
        <td>#AHHA68</td>
        <td>24/12/2023</td>
        <td>Kevin</td>
        <td>6000</td>
        <td>5400</td>
        <td>600</td>
      </tr>
    </tbody>
    <tbody>
      <tr>
        <td scope="row" class="selector">
          <input class="form-check-input" type="checkbox" value="" id="" />
        </td>
        <td>#BHBA68</td>
        <td>01/02/2023</td>
        <td>Kevin</td>
        <td>7000</td>
        <td>6000</td>
        <td>1000</td>
      </tr>
    </tbody>
  </table>

}


export default Tabledata;
