package com.genvita.blog.service.mapper;

import com.genvita.blog.domain.*;
import com.genvita.blog.service.dto.BlogDTO;
import org.mapstruct.*;

/**
 * Mapper for the entity {@link Blog} and its DTO {@link BlogDTO}.
 */
@Mapper(componentModel = "spring", uses = {})
public interface BlogMapper extends EntityMapper<BlogDTO, Blog> {
    @Named("name")
    @BeanMapping(ignoreByDefault = true)
    @Mapping(target = "id", source = "id")
    @Mapping(target = "name", source = "name")
    BlogDTO toDtoName(Blog blog);
}
