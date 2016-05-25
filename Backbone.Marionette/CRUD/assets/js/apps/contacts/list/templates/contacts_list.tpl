<div>
  <button type="button" id='createContact' class="btn btn-primary btn-create">Create New</button>
  <table id='contactsTable' class='table table-bordered'>
    <thead>
      <th>First Name</th>
      <th>Last Name</th>
      <th></th>
      <th></th>
    </thead>
    <tbody>
    </tbody>
  </table>
  <p id='noData' class='noDataText' style="display:none">There are no contacts to show</p>
</div>
<div class="modal fade" id="myModal" tabindex="-1" role="dialog" aria-labelledby="myModalLabel">
  <div class="modal-dialog" role="document">
    <div class="modal-content">
      <div class="modal-header">
        <button type="button" class="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">&times;</span></button>
        <h4 class="modal-title" id="myModalLabel">Modal title</h4>
      </div>
      <div class="modal-body">
        ...
      </div>
      <div class="modal-footer">
        <button type="button" class="btn btn-default" data-dismiss="modal">Close</button>
        <button type="button" class="btn btn-primary">Save changes</button>
      </div>
    </div>
  </div>
</div>