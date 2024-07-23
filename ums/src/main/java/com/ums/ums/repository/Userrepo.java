package com.ums.ums.repository;

import com.ums.ums.model.Users;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;


@Repository
public interface Userrepo extends JpaRepository<Users,Integer> {
}
