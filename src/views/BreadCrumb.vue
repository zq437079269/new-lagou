<template>
  <section class="content-header">
    <h1><span>{{title}}</span><small>{{subtitle}}</small></h1>
    <ol class="breadcrumb">
      <li><a href="#"><i class="fa fa-dashboard"></i> Level</a></li>
      <li class="active">Here</li>
    </ol>
  </section>
</template>
<script>
export default {
  name: "BreadCrumb",
  props: ['title', 'subtitle'],
  data: () => ({

  })
}
</script>
<style lang="scss" scoped>
</style>
