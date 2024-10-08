import myAxios from "@/axios/myAxios";
class Todos{
    constructor(todos, todo){
        this.todos=todos,
        this.todo=todo,
        this.error=null
    }
    async getAllTodos(){
        try{
            let response = await myAxios.get('https://jsonplaceholder.typicode.com/todos/')
            this.todos = response.data
        }catch(error){
            this.error = error
        }
    }
    async getTodoById(id){
        try{
            let response = await myAxios.get(`https://jsonplaceholder.typicode.com/todos/${id}`)
            this.todos = response.data
        }catch(error){
            this.error = error
        }
    }
}

export default new Todos([], null)