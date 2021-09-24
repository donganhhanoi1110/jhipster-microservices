import React from 'react';
import MenuItem from 'app/shared/layout/menus/menu-item';
import { Translate, translate } from 'react-jhipster';
import { NavDropdown } from './menu-components';

export const EntitiesMenu = props => (
  <NavDropdown
    icon="th-list"
    name={translate('global.menu.entities.main')}
    id="entity-menu"
    data-cy="entity"
    style={{ maxHeight: '80vh', overflow: 'auto' }}
  >
    <>{/* to avoid warnings when empty */}</>
    <MenuItem icon="asterisk" to="/tag">
      <Translate contentKey="global.menu.entities.blogTag" />
    </MenuItem>
    <MenuItem icon="asterisk" to="/product">
      <Translate contentKey="global.menu.entities.storeProduct" />
    </MenuItem>
    <MenuItem icon="asterisk" to="/blog">
      <Translate contentKey="global.menu.entities.blogBlog" />
    </MenuItem>
    <MenuItem icon="asterisk" to="/post">
      <Translate contentKey="global.menu.entities.blogPost" />
    </MenuItem>
    {/* jhipster-needle-add-entity-to-menu - JHipster will add entities to the menu here */}
  </NavDropdown>
);
