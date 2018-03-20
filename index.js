var data = {
    tasks: [
        {
            text: "Learn VueJs",
            completed: false
        },
        {
            text: "Learn AngularJs",
            completed: false
        },
        {
            text: "Learn Angular5",
            completed: false
        }
    ],
    newTask: ""
};

Vue.component("title-component", {
    template: "<h2>{{title}}</h2>",
    data: function() {
        return { title: "Task List" };
    }
});

Vue.component("new-task", {
    template: `
<div class="input-group">
<input type="text" 
@keyup.enter="addTask"
v-model="newTask" 
placeholder="Type new task" 
class="form-control"/>
<span class="input-group-btn">
<button @click="addTask" 
class="btn btn-primary">
Add task
</button>
</span>
</div>
`,
    data: function() {
        return data;
    },
    methods: {
        addTask: function() {
            var text = this.newTask.trim();
            if (text) {
                this.tasks.push({
                    text: text,
                    completed: false
                });
            }
            this.newTask = "";
        }
    }
});

Vue.component("task-list", {
    template: `<ul class="list-group">
<li v-for="(task,index) of tasks" 
class="list-group-item" :class="{finished: task.completed}">
{{task.text}}
<span class="pull-right">
<button 
class="btn btn-success btn-xs glyphicon glyphicon-ok" @click="task.completed=!task.completed"></button>
<button 
class="btn btn-danger btn-xs glyphicon glyphicon-remove" @click="deleteTask(index)"></button>
</span>
</li>   
</ul>`,
    data: function() {
        return data;
    },
    methods: {
        deleteTask: function(index) {
            this.tasks.splice(index, 1);
        }
    }
});

var app = new Vue({
    el: "#app",
    data: data
});