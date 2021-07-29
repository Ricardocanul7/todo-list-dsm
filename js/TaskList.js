class TaskList{
    constructor(element_id, items){
        this.element_id = element_id;

        /* items<Task> */
        this.items = items;

        this.update();
    }

    update(){
        let listElement = document.getElementById(this.element_id);
        listElement.innerHTML = '';
        let rawTextNodes = '';

        this.items.forEach(element => {
            rawTextNodes += `
            <div data-id="${element.id}">
                ${element.name}
                <small class="ml-3">
                    ${element.date}
                </small>
            </div>`;
        });

        listElement.innerHTML = rawTextNodes;
    }

    add(){
        /* code */

        this.update();
    }

    edit(object_id){
        /* code */
        
        this.update();
    }

    delete(object_id){
        /* code */

        this.update();
    }

}

export default TaskList;