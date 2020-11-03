<template>
    <div class="row">
        <div class="col-sm-6">
            <div class="dataTables_length" id="example1_length">
                <label>Show entries
                    <select name="example1_length" aria-controls="example1" class="form-control input-sm">
                        <option value="10">10</option>
                        <option value="25">25</option>
                        <option value="50">50</option>
                        <option value="100">100</option>
                    </select> 
                </label>
            </div>
        </div>
        <div class="col-sm-6">
            <div id="example1_filter" class="pull-right">
                <label>Search:
                    <input type="search" class="form-control input-sm" placeholder="" aria-controls="example1">
                </label>
            </div>
        </div>
    </div>   
</template>