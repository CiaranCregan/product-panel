<template>
<nav>
    <v-toolbar app flat class="grey lighten-4">
      <v-toolbar-side-icon @click="sidebarToggle = !sidebarToggle"></v-toolbar-side-icon>
      <v-spacer></v-spacer>
    </v-toolbar>

    <v-navigation-drawer app fixed v-model="sidebarToggle" class="blue darken-1">
      <v-toolbar flat dark class="blue darken-1">
        <v-toolbar-title>Product Panel</v-toolbar-title>
      </v-toolbar>
      <v-list>
        <v-list-tile v-for="menu in menuItems" :key="menu.title" :to="menu.url">
          <v-list-tile-action>
            <v-icon>{{menu.icon}}</v-icon>
          </v-list-tile-action>
          <v-list-tile-title>{{menu.title}}</v-list-tile-title>
        </v-list-tile>
      </v-list>
    </v-navigation-drawer>

</nav>
</template>

<script>
export default {
    name: 'Navbar',
    data () {
      return {
        navbarTitle: 'Product Panel',
        sidebarToggle: true,
        menuItems: [
          {
            icon: 'view_list',
            title: 'Dashboard',
            url: '/'
          },
          {
            icon: 'folder',
            title: 'Products',
            url: '/products'
          }
        ]
      }
    }

}
</script>

<style scoped>
.v-icon{
  font-size: 28px;
}
.v-list__tile__title {
  font-size: 16px;
}
hr{
  margin: 0;
}
.v-list__tile .v-list__tile__action:first-of-type .v-icon {
  color: white;
}
.v-list__tile--active .v-list__tile__action:first-of-type .v-icon {
  color: white;
}
.v-navigation-drawer > .v-list .v-list__tile--active .v-list__tile__title {
  color: white;
}

</style>
