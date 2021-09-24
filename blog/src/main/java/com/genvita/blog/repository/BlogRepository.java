package com.genvita.blog.repository;

import com.genvita.blog.domain.Blog;
import org.springframework.data.jpa.repository.*;
import org.springframework.stereotype.Repository;

/**
 * Spring Data SQL repository for the Blog entity.
 */
@SuppressWarnings("unused")
@Repository
public interface BlogRepository extends JpaRepository<Blog, Long> {}
