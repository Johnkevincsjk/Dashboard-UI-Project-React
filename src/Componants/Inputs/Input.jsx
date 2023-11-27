import './Input.css'

function Inputdata() {

    return <div class="row mb-5">
        <div class="col-3">
            <div class="mb-3">
                <label for="customerName" class="form-label">Customer</label>
                <input type="text" class="form-control" id="customerName" placeholder="Enter customer name" />
            </div>
        </div>
        <div class="col-3">
            <div class="mb-3">
                <label for="invoiceId" class="form-label">Invoice ID</label>
                <input type="email" class="form-control" id="invoiceId" placeholder="Enter Invoice Id" />
            </div>
        </div>
        <div class="col-3">
            <div class="mb-3">
                <label for="startDate" class="form-label">Start Date</label>
                <input type="date" class="form-control" id="startDate" placeholder="name@example.com" />
            </div>
        </div>
        <div class="col-3">
            <div class="mb-3">
                <label for="endDate" class="form-label">End Date</label>
                <input type="date" class="form-control" id="endDate" placeholder="name@example.com" />
            </div>
        </div>
    </div>
}


export default Inputdata;
