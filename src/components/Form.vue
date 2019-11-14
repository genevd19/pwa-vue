<template>
  <div class="container">
    <h1>{{ contact }}</h1>
  
      <div class="field">
            <form action="">
                    <label for="Nom" class="label">nom :</label> 
                      <div class="control">
                        <input type="text" id="nom" class="input ">
                      </div>
                      <label for="Prénom" class="label">Prénom </label> 
                      <div class="control">
                         <input type="text" id="prenom" class="input">
                      </div>
                      <label for="email" class="label">Email</label> 
                      <div class="control">
                         <input type="text" id="email" class="input">
                      </div>
                      <button type="submit" class="button is-primary is-medium">Go</button>
              </form>
      </div>
  </div>
</template>

<script>
export default {
  name: 'contact',
  props: {
    contact: String
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
input {
  margin: 20px ;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}

$colorInput: #42b983;
input.input{
  background-color: $colorInput;
}
</style>
