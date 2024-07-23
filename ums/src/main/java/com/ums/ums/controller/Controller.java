package com.ums.ums.controller;


import com.ums.ums.model.Users;
import com.ums.ums.services.Userservice;
import org.apache.catalina.User;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api")
@CrossOrigin
public class Controller {

    @Autowired
    private Userservice service;

    @GetMapping("/users")
    public List<Users> getallusers(){
        return service.allusers();
    }

    @PostMapping("/users")
    public Users adduser(@RequestBody Users user){
        return service.adduser(user);
    }

    @DeleteMapping("/users/{id}")
    public Users deleteuser(@PathVariable int id){
        service.deleteuser(id);
        return null;
    }

    @PutMapping("/users/{id}")
    public Users edituser(@RequestBody Users user,@PathVariable int id){
        return service.edituser(user,id);
    }



}
