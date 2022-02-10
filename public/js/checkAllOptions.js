function selectAll(name,type){
     
    if(type=='type'){
        let allCheckBoxes = document.getElementsByClassName(name);
        let checked = document.getElementById('checkAll_' + name).checked;
        if(checked){
            for(i in allCheckBoxes){
                allCheckBoxes[i].checked = 'checked';
            }
        }
        else{
            for(i in allCheckBoxes){
                allCheckBoxes[i].checked = '';
            }
        }
    }

    if(type=='repo'){
        let a = document.getElementById('commitStat_' + name);
        let b = document.getElementById('contributors_' + name);
        let c = document.getElementById('health_' + name);

        if(a.checked && b.checked && c.checked ){
            a.checked = '';
            b.checked = '';
            c.checked = '';
        }
        else if(!a.checked || !b.checked || !c.checked){
            a.checked = 'checked';
            b.checked = 'checked';
            c.checked = 'checked';
        }
    }
}