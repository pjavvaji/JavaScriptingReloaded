<div class="modal-dialog" role="document">
  <div class="modal-content">
    <div class="modal-header">
      <button type="button" class="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">&times;</span></button>
      <h4 class="modal-title" id="formModal"><%=title%></h4>
    </div>
    <div class="modal-body">
      <p>First Name:
        <br>
        <input type='text' id='fname' value='<%=fname%>' />
      </p>
      <p>Last Name:
        <br>
        <input type='text' id='lname' value='<%=lname%>' />
      </p>
    </div>
    <div class="modal-footer">
      <button type="button" class="btn btn-default" id='btnCancel' data-dismiss="modal">Close</button>
      <button type="button" class="btn btn-primary" id='btnSave' data-dismiss="modal">Save changes</button>
    </div>
  </div>
</div>
