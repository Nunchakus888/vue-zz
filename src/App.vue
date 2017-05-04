<template>
    <div id="app">
      <h1>Route Alias</h1>
      <ul>
        <li><router-link to="/foo">
          /foo (renders /home/foo)
        </router-link></li>

        <li><router-link to="/home/bar-alias">
          /home/bar-alias (renders /home/bar)
        </router-link></li>

        <li><router-link to="/baz">
          /baz (renders /home/baz)</router-link>
        </li>

        <li><router-link to="/home/baz-alias">
          /home/baz-alias (renders /home/baz)
        </router-link></li>

        <li><router-link to="/home">
          /home (renders /home/default)
        </router-link></li>

        <li><router-link to="/home/nested-alias/foo">
          /home/nested-alias/foo (renders /home/nested/foo)
        </router-link></li>
      </ul>
      <router-view class="view"></router-view>
    </div>
</template>