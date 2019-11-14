<template>
  <div class="container">
<h1>{{ equipe }}</h1>
<div calss="container">
    <div class="columns">
         <div class="column">
            <div class="card">
                    <div class="card-image">
                        <figure class="image is-4by3">
                        <img src="https://picsum.photos/200/300?random=1" alt="Placeholder image">
                        </figure>
                    </div>
                    <div class="card-content">
                        <div class="media">
                            <div class="media-content">
                                <p class="title is-4">Nom</p>
                                <p class="subtitle is-6">Prenom</p>
                            </div>
                        </div>

                        <div class="content">
                       je teste  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        Phasellus nec iaculis mauris. <a>@bulmaio</a>.
                        <a href="#">#css</a> <a href="#">#responsive</a>
                        <br>
                        <time datetime="2016-1-1">11:09 PM - 1 Jan 2016</time>
                        </div>
                    </div>   
                </div>
            </div>
    </div>

       

</div>
  </div>
</template>

<script>
export default {
  name: 'equipe',
  props: {
    equipe: String
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