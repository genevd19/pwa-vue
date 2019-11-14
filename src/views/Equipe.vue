<template>
  <div class="equipe">
    <h1>{{titre | cap}}</h1>
    <EquipeName :key="index" v-for="(personne, index) in personnel" :personne="personne"></EquipeName>
  </div>
</template>
<script>
// @ is an alias to /src
import EquipeName from '@/components/Membre.vue'
import Capitalize from '@/filters/Capitalize'

export default {
  name: 'equipe',
  data() {
  return {
      titre:"notre équipe",
    personnel:[
        {
            
            nom: "Van Diest",
            prenom: "Geneviève",
            pseudo: "Gene",
            description:" Lorem ipsum dolor sit amet, consectetur adipiscing elit Phasellus nec iaculis mauris",
            tags:["#js","#css","#html"],
            ddn:"18/11/1975",
            photo:"https://picsum.photos/200/300?random=1",
            salaire:"1200",

        },
        {
            nom: "Van Diest",
            prenom: "Geneviève",
            pseudo: "Gene",
            description:" Lorem ipsum dolor sit amet, consectetur adipiscing elit Phasellus nec iaculis mauris",
            tags:["#js","#css","#html"],
            ddn:"18/11/1975",
            photo:"https://picsum.photos/200/300?random=1",
             salaire:"1800",

        },
        {
            nom: "Van Diest",
            prenom: "Geneviève",
            pseudo: "Gene",
            description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit Phasellus nec iaculis mauris.",
            tags:["#js","#css","#html"],
            ddn:"18/11/1975",
            photo:"https://picsum.photos/200/300?random=1",
             salaire:"1200",

        },
        {
            nom: "Van Diest",
            prenom: "Geneviève",
            pseudo: "Gene",
            description:" Lorem ipsum dolor sit amet, consectetur adipiscing elit Phasellus nec iaculis mauris",
            tags:["#js","#css","#html"],
            ddn:"18/11/1975",
            photo:"https://picsum.photos/200/300?random=1",
             salaire:"1200",

        },
        {
            nom: "Van Diest",
            prenom: "Geneviève",
            pseudo: "Gene",
            description:" Lorem ipsum dolor sit amet, consectetur adipiscing elit Phasellus nec iaculis mauris",
            tags:["#js","#css","#html"],
            ddn:"18/11/1975",
            photo:"https://picsum.photos/200/300?random=1",

        },

    ]

  }
  },
  components: {
    EquipeName
  },
  filters: {
      cap: Capitalize
  }
}
</script>