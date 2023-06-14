package com.alienexplorer.app.rest.Controller;

import com.alienexplorer.app.rest.Model.Task;
import com.alienexplorer.app.rest.Repository.TodoRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
public class TodoController { //esta es la pagina central de la aplicacion
    @Autowired
    private TodoRepository todoRepository;

    @GetMapping(value = "/")
    public String holaMundo(){
        return "HLA MUNDO!!!#";
    }

    // primer metodo de la aplicacion
    //leer un dato en la base
    @GetMapping(value = "/tasks")
    public List<Task> getTasks(){
        return todoRepository.findAll();
    }

    // metodo para crear tareas (post)
    @PostMapping(value = "/saveTask")
    public String saveTask(@RequestBody Task task){
        todoRepository.save(task);
        return "Saved task";
    }

    // actualizar los datos, segun el id
    @PutMapping(value = "/update/{id}")
    public String updateTask(@PathVariable long id, @RequestBody Task task){
        Task updatedTask = todoRepository.findById(id).get();
        updatedTask.setTitle(task.getTitle());
        updatedTask.setDescription((task.getDescription()));

        todoRepository.save(updatedTask);

        return "Updated task";
    }

    // eliminar tareas
    @DeleteMapping(value = "delete/{id}")
    public String deleteTask(@PathVariable long id){
        Task deletedTask = todoRepository.findById(id).get();
        todoRepository.delete(deletedTask);
        return "Deleted task";
    }
}
