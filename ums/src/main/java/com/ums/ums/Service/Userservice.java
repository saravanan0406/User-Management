package com.ums.ums.Service;



import com.ums.ums.Model.Users;
import com.ums.ums.repo.Userrepo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class Userservice {

    @Autowired
    private Userrepo repo;

    public List<Users> allusers() {
        return repo.findAll();
    }

    public Users adduser(Users user) {
        return repo.save(user);
    }

    public void deleteuser(int id) {
        repo.deleteById(id);
    }

    public Users edituser(Users user, int id) {
        return repo.save(user);
    }
}
