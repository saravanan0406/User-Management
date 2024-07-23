package com.ums.ums.repo;

import com.ums.ums.Model.Users;
import jakarta.persistence.Entity;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;


@Repository
public interface Userrepo extends JpaRepository<Users,Integer> {
}
