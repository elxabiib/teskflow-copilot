// src/task.ts  
export type TaskStatus = "todo" | "in_progress" | "done";  
export type Task = {  
    id: number;  
    title: string;  
    status: TaskStatus;  
};  

export class TaskService {  
    private readonly tasks: Task[] = [];  
    private nextId = 1;  
    
    add(title: string): Task {      
        const task: Task = {        
        id: this.nextId++,        
        title,        
        status: "todo"      
    };      
    
    this.tasks.push(task);      
    return task;    
}  

list(): Task[] {      
    return [...this.tasks];   
}  
}